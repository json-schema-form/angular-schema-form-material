angular.module("schemaForm").run(["$templateCache", function($templateCache) {$templateCache.put("decorators/material/actions-trcl.html","<div class=\"btn-group schema-form-actions {{form.htmlClass}}\" ng-transclude=\"\"></div>");
$templateCache.put("decorators/material/actions.html","<section layout=\"row\" class=\"btn-group schema-form-actions {{form.htmlClass}}\"></section>");
$templateCache.put("decorators/material/array.html","<div class=\"schema-form-array {{form.htmlClass}}\" sf-field-model=\"sf-new-array\" sf-new-array=\"\"><label class=\"control-label\" ng-show=\"showTitle()\">{{ form.title }}</label><md-list class=\"list-group\" sf-field-model=\"\" ui-sortable=\"form.sortOptions\"><md-list-item layout=\"row\" class=\"list-group-item\" sf-field-model=\"ng-repeat\" ng-repeat=\"item in modelArray track by $index\" schema-form-array-items=\"\"><md-button flex-order=\"2\" type=\"button\" ng-hide=\"form.readonly || form.remove === null\" ng-click=\"deleteFromArray($index)\" ng-disabled=\"form.schema.minItems >= modelArray.length\" class=\"md-icon-button\" aria-label=\"More\" style=\"position: relative; z-index: 20;\"><md-icon>close</md-icon></md-button></md-list-item></md-list><div class=\"clearfix\" style=\"padding: 0 15px;\" ng-model=\"modelArray\" schema-validate=\"form\"><div class=\"help-block\" ng-show=\"(hasError() && errorMessage(schemaError())) || form.description\" ng-bind-html=\"(hasError() && errorMessage(schemaError())) || form.description\"></div><md-button ng-hide=\"form.readonly || form.add === null\" ng-click=\"appendToArray()\" ng-disabled=\"form.schema.maxItems <= modelArray.length\" type=\"button\" class=\"btn md-raised md-primary {{ form.style.add || \'btn-default\' }} pull-right\"><i class=\"glyphicon glyphicon-plus\"></i> {{ form.add || \'Add\'}}</md-button></div></div>");
$templateCache.put("decorators/material/autocomplete.html","<div class=\"form-group {{form.htmlClass}} schema-form-select\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess(), \'has-feedback\': form.feedback !== false}\" sf-messages=\"\" sf-layout=\"\"><md-autocomplete flex=\"\" ng-disabled=\"form.readonly\" ng-model=\"$$value$$\" sf-autocomplete=\"\" sf-field-model=\"replaceAll\" schema-validate=\"form\" md-selected-item=\"$$value$$\" md-search-text=\"searchText\" md-selected-item-change=\"\'todo\';\" md-items=\"item in evalExpr(\'this[\\\'\'+form.optionFilter+\'\\\'](\\\'\'+searchText+\'\\\')\')\" md-item-text=\"item.name\" md-floating-label=\"{{::form.title}}\" md-menu-class=\"autocomplete-custom-template\"><md-item-template><span md-highlight-text=\"searchText\">{{item.name}}</span></md-item-template><md-not-found>No matches found</md-not-found></md-autocomplete></div>");
$templateCache.put("decorators/material/card-content.html","<md-card-content class=\"schema-form-card-content {{form.htmlClass}}\"></md-card-content>");
$templateCache.put("decorators/material/card.html","<md-card class=\"schema-form-card {{form.htmlClass}}\"></md-card>");
$templateCache.put("decorators/material/checkbox.html","<div class=\"checkbox schema-form-checkbox {{::form.htmlClass}}\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess()}\" sf-messages=\"\"><md-checkbox sf-field-model=\"\" sf-changed=\"form\" ng-disabled=\"form.readonly\" schema-validate=\"form\" class=\"{{::form.fieldHtmlClass}}\" name=\"{{::form.key|sfCamelKey}}\" aria-label=\"{{::form.title}}\"><span>{{::form.title}}</span></md-checkbox></div>");
$templateCache.put("decorators/material/checkboxes.html","<div sf-array=\"form\" sf-field-model=\"\" class=\"form-group schema-form-checkboxes {{::form.htmlClass}}\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess()}\" sf-messages=\"\"><label class=\"control-label\" ng-show=\"showTitle()\">{{::form.title}}</label><div class=\"checkbox\" ng-repeat=\"val in titleMapValues track by $index\"><md-checkbox ng-model=\"titleMapValues[$index]\" sf-changed=\"form\" ng-disabled=\"::form.readonly\" name=\"{{::form.key|sfCamelKey}}\" ng-true-value=\"true\" ng-false-value=\"false\" aria-label=\"{{::form.title}}\">{{::form.titleMap[$index].name}}</md-checkbox></div></div>");
$templateCache.put("decorators/material/chips.html","<div class=\"form-group schema-form-chips {{form.htmlClass}}\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess(), \'has-feedback\': form.feedback !== false}\"><md-chips sf-field-model=\"\" readonly=\"form.readonly\" flex=\"\" placeholder=\"{{::form.title}}\"><md-chip-template><strong ng-if=\"!form.template\">{{$chip}}</strong></md-chip-template></md-chips><div ng-messages=\"ngModel.$error\"><div sf-message=\"\" ng-message=\"\"></div></div></div>");
$templateCache.put("decorators/material/date.html","<div class=\"schema-form-date {{::form.htmlClass}}\"><label ng-show=\"showTitle()\" for=\"{{::form.key|sfCamelKey}}\">{{::form.title}}</label><md-datepicker sf-field-model=\"\" sf-changed=\"form\" schema-validate=\"form\" sf-type-parser=\"form.schema\" id=\"{{::form.key|sfCamelKey}}\" ng-show=\"::form.key\" ng-class=\"::form.fieldHtmlClass\" ng-disabled=\"::form.readonly\" md-placeholder=\"Enter date\" sf-messages=\"\"></md-datepicker></div>");
$templateCache.put("decorators/material/default.html","<md-input-container class=\"schema-form-{{::form.type}} {{::form.htmlClass}}\" ng-class=\"{\'md-input-has-value\': model[\'{{form.key.join(\'\\\'][\\\'\')}}\'], \'has-error\': hasError(), \'has-success\': hasSuccess(), \'has-feedback\': form.feedback !== false}\" sf-messages=\"\" sf-layout=\"\"><label ng-show=\"showTitle()\" for=\"{{::form.key|sfCamelKey}}\">{{::form.title}}</label> <input sf-field-model=\"\" ng-show=\"::form.key\" type=\"{{::form.type}}\" step=\"any\" sf-changed=\"form\" placeholder=\"{{form.placeholder}}\" id=\"{{::form.key|sfCamelKey}}\" ng-class=\"::form.fieldHtmlClass\" sf-type-parser=\"form.schema\" ng-disabled=\"::form.readonly\" schema-validate=\"form\" name=\"{{::form.key|sfCamelKey}}\" aria-describedby=\"{{::form.key|sfCamelKey}}Status\"></md-input-container>");
$templateCache.put("decorators/material/fieldset-trcl.html","<fieldset ng-disabled=\"form.readonly\" class=\"standard {{form.htmlClass}}\" flex=\"\"><legend ng-show=\"form.title\">{{ form.title }}</legend><div ng-transclude=\"\"></div></fieldset>");
$templateCache.put("decorators/material/fieldset.html","<fieldset ng-disabled=\"form.readonly\" class=\"standard {{form.htmlClass}}\" flex=\"\"><legend ng-show=\"form.title\">{{ form.title }}</legend></fieldset>");
$templateCache.put("decorators/material/help.html","<div class=\"helpvalue schema-form-helpvalue {{form.htmlClass}}\" ng-bind-html=\"form.helpvalue\"></div>");
$templateCache.put("decorators/material/radio-buttons.html","<div class=\"form-group schema-form-radiobuttons {{form.htmlClass}}\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess()}\" sf-layout=\"\" sf-messages=\"\"><div><label class=\"control-label\" ng-show=\"showTitle()\">{{form.title}}</label></div><section layout=\"row\" layout-sm=\"column\" layout-align=\"center center\"><md-input-container ng-repeat=\"item in form.titleMap\"><md-button type=\"button\" class=\"group md-raised\" sf-field-model=\"replaceAll\" ng-model=\"$$value$$\" sf-changed=\"form\" ng-class=\"{\'md-primary\': ($$value$$ == item.value)}\" ng-disabled=\"form.readonly\" ng-model-options=\"form.ngModelOptions\" schema-validate=\"form\" ng-value=\"item.value\" ng-click=\"$$value$$ = item.value\" name=\"{{form.key.join(\'.\')}}\"><span ng-bind-html=\"item.name\"></span></md-button></md-input-container></section></div>");
$templateCache.put("decorators/material/radios-inline.html","<div class=\"form-group schema-form-radios-inline {{form.htmlClass}}\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess()}\" sf-layout=\"\" sf-messages=\"\"><label class=\"control-label\" ng-show=\"showTitle()\">{{form.title}}</label><md-radio-group layout=\"row\" sf-field-model=\"replaceAll\" ng-model=\"$$value$$\" class=\"{{form.fieldHtmlClass}}\" ng-class=\"{ active: item.value === $$value$$ }\" sf-changed=\"form\" schema-validate=\"form\" ng-disabled=\"form.readonly\" name=\"{{form.key.join(\'.\')}}\"><md-radio-button ng-repeat=\"item in form.titleMap\" ng-value=\"item.value\" aria-label=\"{{item.name}}\"><span ng-bind-html=\"item.name\"></span></md-radio-button></md-radio-group></div>");
$templateCache.put("decorators/material/radios.html","<div class=\"form-group schema-form-radios {{form.htmlClass}}\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess()}\"><label class=\"control-label\" ng-show=\"showTitle()\" aria-label=\"{{form.title}}\" layout=\"row\">{{form.title}}</label><div><md-radio-group sf-field-model=\"\" sf-changed=\"form\" ng-disabled=\"form.readonly\" name=\"{{form.key.join(\'.\')}}\" sf-layout=\"\" sf-messages=\"\"><md-radio-button ng-repeat=\"item in form.titleMap\" ng-value=\"item.value\" aria-label=\"{{item.name}}\" class=\"{{form.fieldHtmlClass}}\" sf-field-model=\"ng-class\" ng-class=\"{ active: item.value === $$value$$ }\"><span ng-bind-html=\"item.name\"></span></md-radio-button></md-radio-group></div></div>");
$templateCache.put("decorators/material/section.html","<md-content class=\"schema-form-section {{::form.htmlClass}}\" sf-layout=\"\"></md-content>");
$templateCache.put("decorators/material/select.html","<md-input-container class=\"form-group {{::form.htmlClass}} schema-form-select\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess(), \'has-feedback\': form.feedback !== false}\" sf-messages=\"\" sf-layout=\"\"><label ng-show=\"::showTitle()\">{{::form.title}}</label><md-select ng-if=\"::form.schema.type==\'array\'\" sf-field-model=\"\" schema-validate=\"form\" multiple=\"\" sfm-external-options=\"{{::form.externalOptions}}\"><md-select-header style=\"padding-left: 10.667px; height: 3em; cursor: pointer; position: relative; display: flex; align-items: center; width: auto;\"><input class=\"stopPropagation\" ng-model=\"form.searchTerm\" type=\"search\" placeholder=\"Search\" style=\"border: none; outline: none; height: 100%; width: 100%; padding: 0;\" ng-keydown=\"$event.stopPropagation();\"></md-select-header><md-optgroup label=\"options\"><md-option ng-value=\"::opt.value\" ng-repeat=\"opt in form.getOptions(form, evalExpr)|filter:form.searchTerm\">{{::opt.name}}</md-option></md-optgroup></md-select><md-select ng-if=\"::form.schema.type!=\'array\'\" sf-field-model=\"\" schema-validate=\"form\" sfm-external-options=\"{{::form.externalOptions}}\"><md-select-header style=\"padding-left: 10.667px; height: 3em; cursor: pointer; position: relative; display: flex; align-items: center; width: auto;\"><input class=\"stopPropagation\" ng-model=\"form.searchTerm\" type=\"search\" placeholder=\"Search\" style=\"border: none; outline: none; height: 100%; width: 100%; padding: 0;\" ng-keydown=\"$event.stopPropagation();\"></md-select-header><md-optgroup label=\"options\"><md-option ng-value=\"::opt.value\" ng-repeat=\"opt in form.getOptions(form, evalExpr)|filter:form.searchTerm\">{{::opt.name}}</md-option></md-optgroup></md-select></md-input-container>");
$templateCache.put("decorators/material/slider.html","<md-input-container class=\"schema-form-slider {{form.htmlClass}}\"><label ng-show=\"showTitle()\" for=\"{{::form.key|sfCamelKey}}\">{{::form.title}}</label><md-slider sf-field-model=\"\" flex=\"\" id=\"{{::form.key|sfCamelKey}}\" min=\"0\" max=\"255\" aria-label=\"blue\"></md-slider></md-input-container>");
$templateCache.put("decorators/material/submit.html","<section class=\"schema-form-submit {{form.htmlClass}}\" sf-messages=\"\"><md-button class=\"md-raised {{ form.style || \'md-primary\' }} {{form.fieldHtmlClass}}\" type=\"{{::form.type}}\" ng-disabled=\"form.readonly\" aria-label=\"{{::form.title}}\"><md-tooltip ng-if=\"::form.tip\">{{::form.tip}}</md-tooltip>{{::form.title}}</md-button></section>");
$templateCache.put("decorators/material/switch.html","<md-input-container class=\"schema-form-switch {{::form.htmlClass}}\"><md-switch sf-field-model=\"\" sf-changed=\"form\" sf-type-parser=\"form.schema\" sf-messages=\"\" schema-validate=\"form\" id=\"{{::form.key|sfCamelKey}}\" aria-label=\"{{form.title}}\" ng-show=\"::form.key\" ng-class=\"form.fieldHtmlClass\" ng-disabled=\"::form.readonly\"><span ng-show=\"showTitle()\" for=\"{{::form.key|sfCamelKey}}\">{{::form.title}}</span></md-switch></md-input-container>");
$templateCache.put("decorators/material/tabarray.html","<div sf-array=\"form\" ng-init=\"selected = { tab: 0 }\" class=\"clearfix schema-form-tabarray schema-form-tabarray-{{form.tabType || \'left\'}} {{form.htmlClass}}\"><div ng-if=\"!form.tabType || form.tabType !== \'right\'\" ng-class=\"{\'col-xs-3\': !form.tabType || form.tabType === \'left\'}\"><ul class=\"nav nav-tabs\" ng-class=\"{ \'tabs-left\': !form.tabType || form.tabType === \'left\'}\"><li ng-repeat=\"item in modelArray track by $index\" ng-click=\"$event.preventDefault() || (selected.tab = $index)\" ng-class=\"{active: selected.tab === $index}\"><a href=\"#\">{{interp(form.title,{\'$index\':$index, value: item}) || $index}}</a></li><li ng-hide=\"form.readonly\" ng-click=\"$event.preventDefault() || (selected.tab = appendToArray().length - 1)\"><a href=\"#\"><i class=\"glyphicon glyphicon-plus\"></i> {{ form.add || \'Add\'}}</a></li></ul></div><div ng-class=\"{\'col-xs-9\': !form.tabType || form.tabType === \'left\' || form.tabType === \'right\'}\"><div class=\"tab-content {{form.fieldHtmlClass}}\"><div class=\"tab-pane clearfix\" ng-repeat=\"item in modelArray track by $index\" ng-show=\"selected.tab === $index\" ng-class=\"{active: selected.tab === $index}\"><sf-decorator ng-init=\"arrayIndex = $index\" form=\"copyWithIndex($index)\"></sf-decorator><button ng-hide=\"form.readonly\" ng-click=\"selected.tab = deleteFromArray($index).length - 1\" type=\"button\" class=\"btn {{ form.style.remove || \'btn-default\' }} pull-right\"><i class=\"glyphicon glyphicon-trash\"></i> {{ form.remove || \'Remove\'}}</button></div></div></div><div ng-if=\"form.tabType === \'right\'\" class=\"col-xs-3\"><ul class=\"nav nav-tabs tabs-right\"><li ng-repeat=\"item in modelArray track by $index\" ng-click=\"$event.preventDefault() || (selected.tab = $index)\" ng-class=\"{active: selected.tab === $index}\"><a href=\"#\">{{interp(form.title,{\'$index\':$index, value: item}) || $index}}</a></li><li ng-hide=\"form.readonly\" ng-click=\"$event.preventDefault() || appendToArray()\"><a href=\"#\"><i class=\"glyphicon glyphicon-plus\"></i> {{ form.add || \'Add\'}}</a></li></ul></div></div>");
$templateCache.put("decorators/material/tabs.html","<div sf-field-model=\"\" class=\"schema-form-tabs {{::form.htmlClass}}\"><md-tabs md-dynamic-height=\"\" md-selected=\"selected\" md-autoselect=\"\" ng-init=\"selected = 0\"></md-tabs></div>");
$templateCache.put("decorators/material/textarea.html","<md-input-container class=\"{{::form.htmlClass}} schema-form-textarea\" sf-messages=\"\" sf-layout=\"\"><label ng-show=\"showTitle()\" for=\"{{::form.key|sfCamelKey}}\">{{::form.title}}</label> <textarea ng-class=\"::form.fieldHtmlClass\" id=\"{{::form.key|sfCamelKey}}\" sf-changed=\"form\" ng-disabled=\"::form.readonly\" sf-field-model=\"\" schema-validate=\"form\" name=\"{{::form.key|sfCamelKey}}\"></textarea></md-input-container>");}]);
(function(angular, undefined) {'use strict';
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
      actions: { template: base + 'actions.html', builder: [ sfField, simpleTransclusion, condition ] },
      array: { template: base + 'array.html', builder: arrays },
      autocomplete: { template: base + 'autocomplete.html', builder: defaults.concat(mdAutocomplete) },
      boolean: { template: base + 'checkbox.html', builder: defaults },
      button: { template: base + 'submit.html', builder: defaults },
      checkbox: { template: base + 'checkbox.html', builder: defaults },
      checkboxes: { template: base + 'checkboxes.html', builder: arrays },
      date: { template: base + 'date.html', builder: defaults.concat(mdDatepicker) },
      'default': { template: base + 'default.html', builder: defaults },
      fieldset: { template: base + 'fieldset.html', builder: [ sfField, simpleTransclusion, condition ] },
      help: { template: base + 'help.html', builder: defaults },
      number: { template: base + 'default.html', builder: defaults },
      password: { template: base + 'default.html', builder: defaults },
      radios: { template: base + 'radios.html', builder: defaults },
      'radios-inline': { template: base + 'radios-inline.html', builder: defaults },
      radiobuttons: { template: base + 'radio-buttons.html', builder: defaults },
      section: { template: base + 'section.html', builder: [ sfField, simpleTransclusion, condition, sfLayout ] },
      select: { template: base + 'select.html', builder: defaults.concat(sfOptions) },
      submit: { template: base + 'submit.html', builder: defaults },
      tabs: { template: base + 'tabs.html', builder: [ sfField, mdTabs, condition ] },
      tabarray: { template: base + 'tabarray.html', builder: arrays },
      textarea: { template: base + 'textarea.html', builder: defaults.concat(textarea) },
      switch: { template: base + 'switch.html', builder: defaults.concat(mdSwitch) }
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
      }
    };

    function mdSwitchBuilder(args) {
      var mdSwitchFrag = args.fieldFrag.querySelector('md-switch');
      if (args.form.schema.titleMap) {
        mdSwitchFrag.setAttribute('ng-true-value', args.form.schema.titleMap.true);
        mdSwitchFrag.setAttribute('ng-false-value', args.form.schema.titleMap.false);
      }
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
        var tabsArray = [];

        args.form.tabs.forEach(function(tab, index) {
          var mdTab = document.createElement('md-tab');
          mdTab.setAttribute('label', '{{' + args.path + '.tabs[' + index + '].title}}');
          var mdTabBody = document.createElement('md-content');
          var childFrag = args.build(tab.items, args.path + '.tabs[' + index + '].items', args.state);
          mdTabBody.appendChild(childFrag);
          mdTab.appendChild(mdTabBody);
          tabsArray.push(mdTab);
        });
        for (var i = 0; i < tabsArray.length; i++) {
          mdTabsFrag.appendChild(tabsArray[i]);
        }
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
      for (var i = 0; i < data.enum.length; i++) {
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
        if (!dataURI) {return;}
        $http.get(dataURI)
          .then(function(response) {
            if (response.data.length) {
              if (angular.isString(response.data[0])) {
                scope.form.selectOptions = sfOptionsProcessor({enum:response.data});
              } else {
                scope.form.selectOptions = sfOptionsProcessor({titleMap:response.data});
              }
            }
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

})(angular, undefined);
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
