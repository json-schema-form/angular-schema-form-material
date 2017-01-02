// ngtemplate-loader embeds the html on build
import actionsTemplate from './material/actions.html';
import arrayTemplate from './material/array.html';
import autocompleteTemplate from './material/autocomplete.html';
import booleanTemplate from './material/checkbox.html';
import buttonTemplate from './material/submit.html';
import checkboxTemplate from './material/checkbox.html';
import checkboxesTemplate from './material/checkboxes.html';
import dateTemplate from './material/date.html';
import defaultTemplate from './material/default.html';
import fieldsetTemplate from './material/fieldset.html';
import helpTemplate from './material/help.html';
import numberTemplate from './material/default.html';
import passwordTemplate from './material/default.html';
import radiosTemplate from './material/radios.html';
import radiosInlineTemplate from './material/radios-inline.html';
import radiobuttonsTemplate from './material/radio-buttons.html';
import sectionTemplate from './material/section.html';
import selectTemplate from './material/select.html';
import submitTemplate from './material/submit.html';
import switchTemplate from './material/switch.html';
import tabsTemplate from './material/tabs.html';
import tabarrayTemplate from './material/tabarray.html';
import textareaTemplate from './material/textarea.html';

angular
  .module('schemaForm')
  .config(materialDecoratorConfig)
  .directive('sfmExternalOptions', sfmExternalOptionsDirective)
  .filter('sfCamelKey', sfCamelKeyFilter);

materialDecoratorConfig.$inject = [
  'schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfBuilderProvider', 'sfPathProvider', '$injector'
];

function materialDecoratorConfig(
    schemaFormProvider, decoratorsProvider, sfBuilderProvider, sfPathProvider, $injector) {
  var base = 'decorators/material/';

  var simpleTransclusion = sfBuilderProvider.builders.simpleTransclusion;
  var ngModelOptions     = sfBuilderProvider.builders.ngModelOptions;
  var ngModel            = sfBuilderProvider.builders.ngModel;
  var sfField            = sfBuilderProvider.builders.sfField;
  var condition          = sfBuilderProvider.builders.condition;
  var array              = sfBuilderProvider.builders.array;
  var numeric            = sfBuilderProvider.builders.numeric;

  var sfLayout           = sfLayout;
  var sfMessagesNode     = sfMessagesNodeHandler();
  var sfMessages         = sfMessagesBuilder;
  var sfOptions          = sfOptionsBuilder;
  var mdAutocomplete     = mdAutocompleteBuilder;
  var mdSwitch           = mdSwitchBuilder;
  var mdDatepicker       = mdDatepickerBuilder;
  var mdTabs             = mdTabsBuilder;
  var textarea           = textareaBuilder;

  var core = [ sfField, ngModel, ngModelOptions, condition, sfLayout ];
  var defaults = core.concat(sfMessages);
  var arrays = core.concat(array);

  schemaFormProvider.defaults.string.unshift(dateDefault);

  decoratorsProvider.defineDecorator('materialDecorator', {
    actions: { template: actionsTemplate, builder: [ sfField, simpleTransclusion, condition ] },
    array: { template: arrayTemplate, builder: arrays },
    autocomplete: { template: autocompleteTemplate, builder: defaults.concat(mdAutocomplete) },
    boolean: { template: checkboxTemplate, builder: defaults },
    button: { template: submitTemplate, builder: defaults },
    checkbox: { template: checkboxTemplate, builder: defaults },
    checkboxes: { template: checkboxesTemplate, builder: arrays },
    date: { template: dateTemplate, builder: defaults.concat(mdDatepicker) },
    'default': { template: defaultTemplate, builder: defaults },
    fieldset: { template: fieldsetTemplate, builder: [ sfField, simpleTransclusion, condition ] },
    help: { template: helpTemplate, builder: defaults },
    number: { template: defaultTemplate, builder: defaults.concat(numeric) },
    password: { template: defaultTemplate, builder: defaults },
    radios: { template: radiosTemplate, builder: defaults },
    'radios-inline': { template: radiosInlineTemplate, builder: defaults },
    radiobuttons: { template: radiobuttonsTemplate, builder: defaults },
    section: { template: sectionTemplate, builder: [ sfField, simpleTransclusion, condition, sfLayout ] },
    select: { template: selectTemplate, builder: defaults.concat(sfOptions) },
    submit: { template: submitTemplate, builder: defaults },
    tabs: { template: tabsTemplate, builder: [ sfField, mdTabs, condition ] },
    tabarray: { template: tabarrayTemplate, builder: arrays },
    textarea: { template: textareaTemplate, builder: defaults.concat(textarea) },
    switch: { template: switchTemplate, builder: defaults.concat(mdSwitch) }
  });

  function sfLayout(args) {
    var layoutDiv = args.fieldFrag.querySelector('[sf-layout]');

    if (args.form.grid) {
      Object.getOwnPropertyNames(args.form.grid).forEach(function(property, idx, array) {
        layoutDiv.setAttribute(property, args.form.grid[property]);
      });
    };
  };

  function sfMessagesNodeHandler() {
    var html = '<div ng-if="ngModel.$invalid" ng-messages="ngModel.$error"><div sf-message ng-message></div></div>';
    var div = document.createElement('div');
    div.innerHTML = html;
    return div.firstChild;
  };

  function sfMessagesBuilder(args) {
    var messagesDiv = args.fieldFrag.querySelector('[sf-messages]');
    if (messagesDiv && sfMessagesNode) {
      var child = sfMessagesNode.cloneNode();
      messagesDiv.appendChild(child);
    }
  };

  function textareaBuilder(args) {
    var textareaFrag = args.fieldFrag.querySelector('textarea');
    var maxLength = args.form.maxlength || false;
    if (textareaFrag && maxLength) {
      textareaFrag.setAttribute('md-maxlength', maxLength);
    };
  };

  function mdAutocompleteBuilder(args) {
    var mdAutocompleteFrag = args.fieldFrag.querySelector('md-autocomplete');
    var minLength = args.form.minLength || 1;
    var maxLength = args.form.maxLength || false;
    var title = args.form.title || args.form.placeholder || args.form.key.slice(-1)[0];

    if (mdAutocompleteFrag) {
      if (args.form.onChange) {
        mdAutocompleteFrag.setAttribute('md-selected-item-change', 'args.form.onChange()');
        mdAutocompleteFrag.setAttribute('md-search-text-change', 'args.form.onChange(searchText)');
      };

      // mdAutocompleteFrag.setAttribute('md-items', 'item in $filter(''autocomplete'')(searchText);');
      mdAutocompleteFrag.setAttribute('md-min-length', minLength);
      if (maxLength) {
        mdAutocompleteFrag.setAttribute('md-max-length', maxLength);
      };

      if (title) {
        mdAutocompleteFrag.setAttribute('md-floating-label', title);
      };
    };
  };

  function mdSwitchBuilder(args) {
    var mdSwitchFrag = args.fieldFrag.querySelector('md-switch');
    if (args.form.schema.titleMap) {
      mdSwitchFrag.setAttribute('ng-true-value', args.form.schema.titleMap.true);
      mdSwitchFrag.setAttribute('ng-false-value', args.form.schema.titleMap.false);
    };
  };

  function sfOptionsBuilder(args) {
    var mdSelectFrag = args.fieldFrag.querySelector('md-select');
    var enumTitleMap = [];
    var i;
    var mdSelectFrag;

    args.form.selectOptions = [];
    args.form.getOptions = getOptionsHandler;

    if (args.form.schema.links && (typeof args.form.schema.links) === 'object') {
      var link;
      var related = /({)([^}]*)(})/gm;
      var source = /{{([^}]*)}}/gm;
      var matched;

      for (i = 0; i < args.form.schema.links.length; i++) {
        link = args.form.schema.links[i];
        if (link.rel === 'options') {
          // TODO enable filter to allow processing results
          // args.form.optionSource = link.href.replace(related, '$1$1 model.$2 | _externalOptionUri $3$3');
          args.form.optionSource = link.href.replace(related, '$1$1 model.$2 $3$3');
        };
      };

      mdSelectFrag.setAttribute('sfm-external-options', args.form.optionSource);
    }
    else {
      args.form.selectOptions = sfOptionsProcessor(args.form);
    };
  };

  function mdDatepickerBuilder(args) {
    var mdDatepickerFrag = args.fieldFrag.querySelector('md-datepicker');
    if (mdDatepickerFrag) {
      if (args.form.onChange) {
        mdDatepickerFrag.setAttribute('ng-change', 'args.form.onChange(searchText)');
      }
      // mdDatepickerFrag.setAttribute('md-items', 'item in $filter(''autocomplete'')(searchText);');
      var minDate = args.form.minimum || false;
      var maxDate = args.form.maximum || false;
      if (minDate) {
        mdDatepickerFrag.setAttribute('md-max-date', minDate);
      }
      if (maxDate) {
        mdDatepickerFrag.setAttribute('md-max-date', maxDate);
      }
    }
  };

  function mdTabsBuilder(args) {
    if (args.form.tabs && args.form.tabs.length > 0) {
      var mdTabsFrag = args.fieldFrag.querySelector('md-tabs');

      args.form.tabs.forEach(function(tab, index) {
        var evalExpr = '(evalExpr(' + args.path + '.tabs[' + index + ']' +
                       '.condition, { model: model, "arrayIndex": $index}))';
        var mdTab = document.createElement('md-tab');
        if(!!tab.condition) {
          mdTab.setAttribute('ng-if', evalExpr);
        };
        mdTab.setAttribute('label', '{{' + args.path + '.tabs[' + index + '].title}}');
        var mdTabBody = document.createElement('md-tab-body');
        var childFrag = args.build(tab.items, args.path + '.tabs[' + index + '].items', args.state);
        mdTabBody.appendChild(childFrag);
        mdTab.appendChild(mdTabBody);
        mdTabsFrag.appendChild(mdTab);
      });
    }
  };

  /**
   * Material Datepicker
   */
  function dateDefault(name, schema, options) {
    if (schema.type === 'string' && (schema.format === 'date' || schema.format === 'date-time')) {
      var f = schemaFormProvider.stdFormObj(name, schema, options);
      f.key  = options.path;
      f.type = 'date';
      options.lookup[sfPathProvider.stringify(options.path)] = f;
      return f;
    }
  };
};

function getOptionsHandler(form, evalExpr) {
  if (form.optionData) {
    return evalExpr(form.optionData);
  };

  if (form.selectOptions) {
    return form.selectOptions;
  };

  return [];
};

function sfOptionsProcessor(data) {
  var enumTitleMap = [];

  if (data.titleMap) {
    return data.titleMap;
  }
  else if (data.enum && data.enum.length) {
    for (i = 0; i < data.enum.length; i++) {
      if (data.enum[i] && data.enum[i].length) {
        enumTitleMap.push({ name: data.enum[i], value: data.enum[i] });
      };
    };
  };

  return enumTitleMap;
};

sfmExternalOptionsDirective.$inject = [ '$http' ];

function sfmExternalOptionsDirective($http) {
  var directive = {
    link: link,
    restrict: 'A'
  };

  return directive;

  function link(scope, element, attrs) {
    attrs.$observe('sfmExternalOptions', function(dataURI) {
      $http.get(dataURI)
        .then(function(response) {
          scope.form.selectOptions = sfOptionsProcessor(response.data);
        });
    });
  };
};

/**
 * sfCamelKey Filter
 */
function sfCamelKeyFilter() {
  return function(formKey) {
    if (!formKey) { return ''; };
    var part, i, key;
    key = formKey.slice();
    for (i = 0; i < key.length; i++) {
      part = key[i].toLowerCase().split('');
      if (i && part.length) { part[0] = part[0].toUpperCase(); };
      key[i] = part.join('');
    };
    return key.join('');
  };
};

/*
  TODO add default filter for autocomplete which allows form.optionFilter or 'autocompleteFilter' to override
  Something along the following lines...
  if ($injector.has('autocompleteFilter')) {
    result = $filter('autocomplete')(input);
  }
  else
  if ($injector.has(args.form.optionFilter + 'Filter')) {
    result = $filter(args.form.optionFilter)(input);
  }
  else {
    if (args.form.optionFilter) {
      mdAutocomplete.setAttribute('md-items',
        'item in evalExpr("this[\""+form.optionFilter+"\"](\""+searchText+"\")")');
    }
  }

  .filter('autocompleteMovieTest', function() {
    function autocompleteMovieTestFilter(array, input){
      var current = input;
      // You could also call multiple filters here using:
      // current = $filter('filterName')(input)
      if(typeof current === 'string') {
        current = current.replace(' ','-').toLowerCase();
      }
      current = (!current) ? '_undefined' : current;
      return current;
    }

    return externalOptionUriFilter;
  })
*/
