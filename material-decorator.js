angular.module("schemaForm").run(["$templateCache", function($templateCache) {$templateCache.put("decorators/material/actions-trcl.html","<div class=\"btn-group schema-form-actions {{form.htmlClass}}\" ng-transclude=\"\"></div>");
$templateCache.put("decorators/material/actions.html","<section layout=\"row\" class=\"btn-group schema-form-actions {{form.htmlClass}}\"></section>");
$templateCache.put("decorators/material/array.html","<div class=\"schema-form-array {{form.htmlClass}}\" sf-field-model=\"sf-new-array\" sf-new-array=\"\"><label class=\"control-label\" ng-show=\"showTitle()\">{{ form.title }}</label><md-list class=\"list-group\" sf-field-model=\"\" ui-sortable=\"form.sortOptions\"><md-list-item layout=\"row\" class=\"list-group-item\" sf-field-model=\"ng-repeat\" ng-repeat=\"item in $$value$$ track by $index\" schema-form-array-items=\"\"><md-button flex=\"none\" flex-order=\"2\" type=\"button\" ng-hide=\"form.readonly || form.remove === null\" ng-click=\"deleteFromArray($index)\" ng-disabled=\"form.schema.minItems >= modelArray.length\" class=\"md-icon-button\" aria-label=\"More\" style=\"position: relative; z-index: 20;\"><md-icon md-svg-icon=\"img/icons/ic_clear_black_18px.svg\"></md-icon></md-button></md-list-item></md-list><div class=\"clearfix\" style=\"padding: 15px;\" ng-model=\"modelArray\" schema-validate=\"form\"><div class=\"help-block\" ng-show=\"(hasError() && errorMessage(schemaError())) || form.description\" ng-bind-html=\"(hasError() && errorMessage(schemaError())) || form.description\"></div><md-button ng-hide=\"form.readonly || form.add === null\" ng-click=\"appendToArray()\" ng-disabled=\"form.schema.maxItems <= modelArray.length\" type=\"button\" class=\"btn md-raised md-primary {{ form.style.add || \'btn-default\' }} pull-right\"><i class=\"glyphicon glyphicon-plus\"></i> {{ form.add || \'Add\'}}</md-button></div></div>");
$templateCache.put("decorators/material/autocomplete.html","<div class=\"form-group {{form.htmlClass}} schema-form-select\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess(), \'has-feedback\': form.feedback !== false}\"><md-autocomplete flex=\"\" ng-disabled=\"form.readonly\" ng-model=\"$$value$$\" sf-autocomplete=\"\" sf-field-model=\"replaceAll\" schema-validate=\"form\" md-selected-item=\"$$value$$\" md-search-text=\"searchText\" md-selected-item-change=\"\'todo\';\" md-items=\"item in evalExpr(\'this[\\\'\'+form.optionFilter+\'\\\'](\\\'\'+searchText+\'\\\')\')\" md-item-text=\"item.name\" md-floating-label=\"{{form.title || form.key.slice(-1)[0]}}\" md-menu-class=\"autocomplete-custom-template\"><md-item-template><span md-highlight-text=\"searchText\">{{item.title}}</span></md-item-template><md-not-found>No matches found</md-not-found></md-autocomplete><div ng-messages=\"ngModel.$error\"><div sf-message=\"\" ng-message=\"\"></div></div></div>");
$templateCache.put("decorators/material/checkbox.html","<div class=\"checkbox schema-form-checkbox {{form.htmlClass}}\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess()}\"><md-checkbox sf-field-model=\"\" sf-changed=\"form\" ng-disabled=\"form.readonly\" schema-validate=\"form\" class=\"{{form.fieldHtmlClass}}\" name=\"{{form.key.slice(-1)[0]}}\" aria-label=\"{{form.title || form.key.slice(-1)[0]}}\"><span ng-bind-html=\"form.title\"></span></md-checkbox><div ng-messages=\"ngModel.$error\"><div sf-message=\"\" ng-message=\"\"></div></div></div>");
$templateCache.put("decorators/material/checkboxes.html","<div sf-array=\"form\" sf-field-model=\"\" class=\"form-group schema-form-checkboxes {{form.htmlClass}}\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess()}\"><label class=\"control-label\" ng-show=\"showTitle()\">{{form.title}}</label><div class=\"checkbox\" ng-repeat=\"val in titleMapValues track by $index\"><md-checkbox ng-model=\"titleMapValues[$index]\" sf-changed=\"form\" ng-disabled=\"form.readonly\" name=\"{{form.key.slice(-1)[0]}}\" ng-true-value=\"true\" ng-false-value=\"false\" aria-label=\"{{form.title || form.key.slice(-1)[0]}}\"><span ng-bind-html=\"form.titleMap[$index].name\"></span></md-checkbox></div><div ng-messages=\"ngModel.$error\"><div sf-message=\"\" ng-message=\"\"></div></div></div>");
$templateCache.put("decorators/material/chips.html","<div class=\"form-group schema-form-chips {{form.htmlClass}}\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess(), \'has-feedback\': form.feedback !== false}\"><md-chips sf-field-model=\"\" readonly=\"form.readonly\" flex=\"\" placeholder=\"{{form.title || form.key.slice(-1)[0]}}\"><md-chip-template><strong ng-if=\"!form.template\">{{$chip}}</strong></md-chip-template></md-chips><div ng-messages=\"ngModel.$error\"><div sf-message=\"\" ng-message=\"\"></div></div></div>");
$templateCache.put("decorators/material/date.html","<div class=\"schema-form-date {{form.htmlClass}}\"><label ng-show=\"showTitle()\" for=\"{{form.key.slice(-1)[0]}}\">{{form.title}}</label><md-datepicker sf-field-model=\"\" sf-changed=\"form\" schema-validate=\"form\" sf-type-parser=\"form.schema\" id=\"{{form.key.slice(-1)[0]}}\" ng-show=\"form.key\" ng-class=\"form.fieldHtmlClass\" ng-disabled=\"form.readonly\" md-placeholder=\"Enter date\" sf-messages=\"\"></md-datepicker></div>");
$templateCache.put("decorators/material/default.html","<md-input-container class=\"schema-form-{{form.type}} {{form.htmlClass}}\" ng-class=\"{\'md-input-has-value\':model[\'{{form.key.slice(-1)[0]}}\']}\" sf-messages=\"\"><label ng-show=\"showTitle()\" for=\"{{form.key.slice(-1)[0]}}\">{{form.title}}</label><input sf-field-model=\"\" ng-show=\"form.key\" type=\"{{form.type}}\" step=\"any\" sf-changed=\"form\" id=\"{{form.key.slice(-1)[0]}}\" ng-class=\"form.fieldHtmlClass\" sf-type-parser=\"form.schema\" ng-disabled=\"form.readonly\" schema-validate=\"form\" name=\"{{form.key.slice(-1)[0]}}\" aria-describedby=\"{{form.key.slice(-1)[0] + \'Status\'}}\"></md-input-container>");
$templateCache.put("decorators/material/fieldset-trcl.html","<fieldset ng-disabled=\"form.readonly\" class=\"standard {{form.htmlClass}}\" flex=\"\"><legend ng-show=\"form.title\">{{ form.title }}</legend><div ng-transclude=\"\"></div></fieldset>");
$templateCache.put("decorators/material/fieldset.html","<fieldset ng-disabled=\"form.readonly\" class=\"standard {{form.htmlClass}}\" flex=\"\"><legend ng-show=\"form.title\">{{ form.title }}</legend></fieldset>");
$templateCache.put("decorators/material/help.html","<div class=\"helpvalue schema-form-helpvalue {{form.htmlClass}}\" ng-bind-html=\"form.helpvalue\"></div>");
$templateCache.put("decorators/material/radio-buttons.html","<div class=\"form-group schema-form-radiobuttons {{form.htmlClass}}\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess()}\"><div><label class=\"control-label\" ng-show=\"showTitle()\">{{form.title}}</label></div><section layout=\"row\" layout-sm=\"column\" layout-align=\"center center\"><md-input-container ng-repeat=\"item in form.titleMap\"><md-button type=\"button\" class=\"group md-raised\" sf-field-model=\"replaceAll\" ng-model=\"$$value$$\" sf-changed=\"form\" ng-class=\"{\'md-primary\': ($$value$$ == item.value)}\" ng-disabled=\"form.readonly\" ng-model-options=\"form.ngModelOptions\" schema-validate=\"form\" ng-value=\"item.value\" ng-click=\"$$value$$ = item.value\" name=\"{{form.key.join(\'.\')}}\"><span ng-bind-html=\"item.name\"></span></md-button></md-input-container></section><div class=\"help-block\" sf-message=\"form.description\"></div></div>");
$templateCache.put("decorators/material/radios-inline.html","<div class=\"form-group schema-form-radios-inline {{form.htmlClass}}\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess()}\"><label class=\"control-label\" ng-show=\"showTitle()\">{{form.title}}</label><md-radio-group layout=\"row\" sf-field-model=\"replaceAll\" ng-model=\"$$value$$\" class=\"{{form.fieldHtmlClass}}\" ng-class=\"{ active: item.value === $$value$$ }\" sf-changed=\"form\" schema-validate=\"form\" ng-disabled=\"form.readonly\" name=\"{{form.key.join(\'.\')}}\"><md-radio-button ng-repeat=\"item in form.titleMap\" ng-value=\"item.value\"><span ng-bind-html=\"item.name\"></span></md-radio-button></md-radio-group><div ng-messages=\"ngModel.$error\"><div sf-message=\"\" ng-message=\"\"></div></div></div>");
$templateCache.put("decorators/material/radios.html","<div class=\"form-group schema-form-radios {{form.htmlClass}}\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess()}\"><label class=\"control-label\" ng-show=\"showTitle()\" aria-label=\"{{form.title}}\">{{form.title}} {{form.titleMap | json}}</label><md-radio-group sf-field-model=\"\" sf-changed=\"form\" ng-disabled=\"form.readonly\" name=\"{{form.key.join(\'.\')}}\"><md-radio-button ng-repeat=\"item in form.titleMap\" ng-value=\"item.value\" class=\"{{form.fieldHtmlClass}}\" sf-field-model=\"ng-class\" ng-class=\"{ active: item.value === $$value$$ }\"><span ng-bind-html=\"item.name\"></span></md-radio-button></md-radio-group><div ng-messages=\"ngModel.$error\"><div sf-message=\"\" ng-message=\"\"></div></div></div>");
$templateCache.put("decorators/material/section.html","<div class=\"schema-form-section {{form.htmlClass}}\"></div>");
$templateCache.put("decorators/material/select.html","<md-input-container class=\"form-group {{form.htmlClass}} schema-form-select\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess(), \'has-feedback\': form.feedback !== false}\"><label ng-show=\"showTitle()\">{{form.title}}</label><md-select sf-field-model=\"\"><md-optgroup ng-repeat-start=\"(key, opt) in form.titleMap | orderBy:\'group\' as optGroups\" ng-if=\"opt.group && opt.group != optGroups[key-1].group\" label=\"{{opt.group}}\"><md-option ng-repeat=\"(key, filtered) in form.titleMap | filter: {group: opt.group} | orderBy:\'name\' as opts\" ng-value=\"filtered.value\">{{filtered.name}}</md-option></md-optgroup><md-option ng-repeat-end=\"\" ng-if=\"!opt.group\" ng-value=\"opt.value\">{{opt.name}}</md-option></md-select><div ng-messages=\"ngModel.$error\"><div sf-message=\"\" ng-message=\"\"></div></div></md-input-container>");
$templateCache.put("decorators/material/submit.html","<section class=\"schema-form-submit {{form.htmlClass}}\"><md-button class=\"md-raised {{ form.style || \'md-primary\' }} {{form.fieldHtmlClass}}\" ng-disabled=\"form.readonly\">{{form.title}}</md-button></section>");
$templateCache.put("decorators/material/switch.html","<md-input-container class=\"schema-form-switch {{form.htmlClass}}\"><md-switch sf-field-model=\"\" sf-changed=\"form\" sf-type-parser=\"form.schema\" schema-validate=\"form\" id=\"{{form.key.slice(-1)[0]}}\" aria-label=\"{{form.title}}\" ng-show=\"form.key\" ng-class=\"form.fieldHtmlClass\" ng-disabled=\"form.readonly\"><span ng-show=\"showTitle()\" for=\"{{form.key.slice(-1)[0]}}\">{{form.title}}</span><div ng-messages=\"ngModel.$error\"><div sf-message=\"\" ng-message=\"\"></div></div></md-switch></md-input-container>");
$templateCache.put("decorators/material/tabarray.html","<div sf-array=\"form\" ng-init=\"selected = { tab: 0 }\" class=\"clearfix schema-form-tabarray schema-form-tabarray-{{form.tabType || \'left\'}} {{form.htmlClass}}\"><div ng-if=\"!form.tabType || form.tabType !== \'right\'\" ng-class=\"{\'col-xs-3\': !form.tabType || form.tabType === \'left\'}\"><ul class=\"nav nav-tabs\" ng-class=\"{ \'tabs-left\': !form.tabType || form.tabType === \'left\'}\"><li ng-repeat=\"item in modelArray track by $index\" ng-click=\"$event.preventDefault() || (selected.tab = $index)\" ng-class=\"{active: selected.tab === $index}\"><a href=\"#\">{{interp(form.title,{\'$index\':$index, value: item}) || $index}}</a></li><li ng-hide=\"form.readonly\" ng-click=\"$event.preventDefault() || (selected.tab = appendToArray().length - 1)\"><a href=\"#\"><i class=\"glyphicon glyphicon-plus\"></i> {{ form.add || \'Add\'}}</a></li></ul></div><div ng-class=\"{\'col-xs-9\': !form.tabType || form.tabType === \'left\' || form.tabType === \'right\'}\"><div class=\"tab-content {{form.fieldHtmlClass}}\"><div class=\"tab-pane clearfix\" ng-repeat=\"item in modelArray track by $index\" ng-show=\"selected.tab === $index\" ng-class=\"{active: selected.tab === $index}\"><sf-decorator ng-init=\"arrayIndex = $index\" form=\"copyWithIndex($index)\"></sf-decorator><button ng-hide=\"form.readonly\" ng-click=\"selected.tab = deleteFromArray($index).length - 1\" type=\"button\" class=\"btn {{ form.style.remove || \'btn-default\' }} pull-right\"><i class=\"glyphicon glyphicon-trash\"></i> {{ form.remove || \'Remove\'}}</button></div></div></div><div ng-if=\"form.tabType === \'right\'\" class=\"col-xs-3\"><ul class=\"nav nav-tabs tabs-right\"><li ng-repeat=\"item in modelArray track by $index\" ng-click=\"$event.preventDefault() || (selected.tab = $index)\" ng-class=\"{active: selected.tab === $index}\"><a href=\"#\">{{interp(form.title,{\'$index\':$index, value: item}) || $index}}</a></li><li ng-hide=\"form.readonly\" ng-click=\"$event.preventDefault() || appendToArray()\"><a href=\"#\"><i class=\"glyphicon glyphicon-plus\"></i> {{ form.add || \'Add\'}}</a></li></ul></div></div>");
$templateCache.put("decorators/material/tabs.html","<div sf-field-model=\"\" class=\"schema-form-tabs {{form.htmlClass}}\"><md-tabs md-dynamic-height=\"\" md-selected=\"selected\" md-autoselect=\"\" ng-init=\"selected = 0\"></md-tabs></div>");
$templateCache.put("decorators/material/textarea.html","<md-input-container class=\"{{form.htmlClass}} schema-form-textarea\"><label ng-show=\"showTitle()\" for=\"{{form.key.slice(-1)[0]}}\">{{form.title}}</label> <textarea ng-class=\"form.fieldHtmlClass\" id=\"{{form.key.slice(-1)[0]}}\" sf-changed=\"form\" ng-disabled=\"form.readonly\" sf-field-model=\"\" schema-validate=\"form\" name=\"{{form.key.slice(-1)[0]}}\"></textarea><div ng-messages=\"ngModel.$error\"><div sf-message=\"\" ng-message=\"\"></div></div></md-input-container>");}]);
angular.module('schemaForm')
  .config([ 'schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfBuilderProvider', 'sfPathProvider', '$injector',
    function(schemaFormProvider, decoratorsProvider, sfBuilderProvider, sfPathProvider, $injector) {
      var base = 'decorators/material/';

      var simpleTransclusion = sfBuilderProvider.builders.simpleTransclusion;
      var ngModelOptions     = sfBuilderProvider.builders.ngModelOptions;
      var ngModel            = sfBuilderProvider.builders.ngModel;
      var sfField            = sfBuilderProvider.builders.sfField;
      var condition          = sfBuilderProvider.builders.condition;
      var array              = sfBuilderProvider.builders.array;

      var sfMessagesNode = (function() {
        var html = '<div ng-if="ngModel.$invalid" ng-messages="ngModel.$error"><div sf-message ng-message></div></div>';
        var div = document.createElement('div');
        div.innerHTML = html;
        return div.firstChild;
      })();
      var sfMessages = function(args) {
        var messagesDiv = args.fieldFrag.querySelector('[sf-messages]');
        if (messagesDiv && sfMessagesNode) {
          messagesDiv.appendChild(sfMessagesNode);
        }
      };

      var mdAutocomplete = function(args) {
        var mdAutocompleteFrag = args.fieldFrag.querySelector('md-autocomplete');
        if (mdAutocompleteFrag) {
          if (args.form.onChange) {
            mdAutocompleteFrag.setAttribute('md-selected-item-change', 'args.form.onChange(searchText)');
          }
          if (args.form.onChange) {
            mdAutocompleteFrag.setAttribute('md-search-text-change', 'args.form.onChange(searchText)');
          }
          // mdAutocompleteFrag.setAttribute('md-items', 'item in $filter(''autocomplete'')(searchText);');
          var minLength = args.form.minLength || 1;
          var maxLength = args.form.maxLength || false;
          mdAutocompleteFrag.setAttribute('md-min-length', minLength);
          if (maxLength) {
            mdAutocompleteFrag.setAttribute('md-max-length', maxLength);
          }
        }
      };

      var mdSwitch = function(args) {
        var mdSwitchFrag = args.fieldFrag.querySelector('md-switch');
        if (args.form.schema.titleMap) {
          mdSwitchFrag.setAttribute('ng-true-value',args.form.schema.titleMap.true);
          mdSwitchFrag.setAttribute('ng-false-value',args.form.schema.titleMap.false);
        }
        if (args.form.schema.ink) {
          mdSwitchFrag.setIdAttribute('md-no-ink',args.form.schema.ink);
        }
      };

      var mdDatepicker = function(args) {
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

      var mdTabs = function(args) {
        if (args.form.tabs && args.form.tabs.length > 0) {
          var mdTabsFrag = args.fieldFrag.querySelector('md-tabs');

          args.form.tabs.forEach(function(tab, index) {
            var mdTab = document.createElement('md-tab');
            mdTab.setAttribute('label', '{{' + args.path + '.tabs[' + index + '].title}}');
            var mdTabBody = document.createElement('md-tab-body');
            var childFrag = args.build(tab.items, args.path + '.tabs[' + index + '].items', args.state);
            mdTabBody.appendChild(childFrag);
            mdTab.appendChild(mdTabBody);
            mdTabsFrag.appendChild(mdTab);
          });
        }
      };

      var defaults = [ sfField, ngModel, ngModelOptions, sfMessages, condition ];

      decoratorsProvider.defineDecorator('materialDecorator', {
        actions: { template: base + 'actions.html', builder: [ sfField, simpleTransclusion, condition ] },
        array: { template: base + 'array.html', builder: [ sfField, ngModelOptions, ngModel, array, condition ] },
        autocomplete: {
          template: base + 'autocomplete.html',
          builder: [ sfField, ngModel, ngModelOptions, sfMessages, condition, mdAutocomplete ]
        },
        boolean: { template: base + 'checkbox.html', builder: defaults },
        button: { template: base + 'submit.html', builder: defaults },
        checkbox: { template: base + 'checkbox.html', builder: defaults },
        checkboxes: {
          template: base + 'checkboxes.html',
          builder: [ sfField, ngModelOptions, ngModel, array, condition ]
        },
        date: {
          template: base + 'date.html',
          builder: [ sfField, ngModel, ngModelOptions, sfMessages, mdDatepicker, condition ]
        },
        'default': { template: base + 'default.html', builder: defaults },
        fieldset: { template: base + 'fieldset.html', builder: [ sfField, simpleTransclusion, condition ] },
        help: { template: base + 'help.html', builder: defaults },
        number: { template: base + 'default.html', builder: defaults },
        password: { template: base + 'default.html', builder: defaults },
        radios: { template: base + 'radios.html', builder: defaults },
        'radios-inline': { template: base + 'radios-inline.html', builder: defaults },
        radiobuttons: { template: base + 'radio-buttons.html', builder: defaults },
        section: { template: base + 'section.html', builder: [ sfField, simpleTransclusion, condition ] },
        select: { template: base + 'select.html', builder: defaults },
        submit: { template: base + 'submit.html', builder: defaults },
        tabs: { template: base + 'tabs.html', builder: [ sfField, mdTabs, condition ] },
        tabarray: { template: base + 'tabarray.html', builder: [ sfField, ngModelOptions, ngModel, array, condition ] },
        textarea: { template: base + 'textarea.html', builder: defaults },
        switch: {
          template: base + 'switch.html',
          builder: [ sfField, ngModel, ngModelOptions, sfMessages, condition, mdSwitch ]
        }
      });

      /**
       * Material Datepicker
       */
      var date = function(name, schema, options) {
        if (schema.type === 'string' && (schema.format === 'date' || schema.format === 'date-time')) {
          var f = schemaFormProvider.stdFormObj(name, schema, options);
          f.key  = options.path;
          f.type = 'date';
          options.lookup[sfPathProvider.stringify(options.path)] = f;
          return f;
        }
      };
      schemaFormProvider.defaults.string.unshift(date);
    }
  ]);
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

/**
 * It might be a bug, but currently input[type=number] does not add
 * a parser, so the model gets populated with a string. It does however stop non numbers so it
 * must have some preproccessing. Anyway, this adds parser before schema-validate hooks into it.
 * FIXME: this is still not a complete solution. Inputting a string in an input[type=number] results
 * in parsers never firing and ngModel value removed. So no validation from schema-validate either.
 */
angular.module('schemaForm').directive('sfTypeParser', function() {
  return {
    restrict: 'A',
    scope: false,
    require: 'ngModel',
    link: function(scope, element, attrs, ngModel) {
      var once = scope.$watch(attrs.sfTypeParser, function(schema) {
        if (!schema) {
          return;
        }

        var isNumber  = schema.type.indexOf('number') !== -1;
        var isInteger = schema.type.indexOf('integer') !== -1;
        var numberRE  = /^[0-9]*$/;
        // Use index of since type can be either an array with two values or a string.
        if (isNumber || isInteger) {
          // The timing here seems to work. i.e. we get in before schema-validate
          ngModel.$parsers.push(function(viewValue) {
            var value;
            if (isNumber) {
              value = parseFloat(viewValue);
            } else if (numberRE.test(viewValue)) {
              // We test the value to check that it's a valid integer, otherwise we can easily
              // get float -> integer parsing behind the scenes.
              value = parseInt(viewValue, 10);
            }
            console.log('parser', numberRE.test(viewValue), viewValue, value)
            if (value === undefined || isNaN(value)) {
              //Let the validation fail. @FIXME: it fails with "required" for some reason.
              return viewValue;
            }
            return value;
          });
        }

        once();
      });
    }
  };
});
