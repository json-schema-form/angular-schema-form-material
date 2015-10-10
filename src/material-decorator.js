angular.module('schemaForm')
  .config([ 'schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfBuilderProvider', 'sfPathProvider',
    function(schemaFormProvider, decoratorsProvider, sfBuilderProvider, sfPathProvider) {
      var base = 'decorators/material/';

      var simpleTransclusion = sfBuilderProvider.builders.simpleTransclusion;
      var ngModelOptions     = sfBuilderProvider.builders.ngModelOptions;
      var ngModel            = sfBuilderProvider.builders.ngModel;
      var sfField            = sfBuilderProvider.builders.sfField;
      var condition          = sfBuilderProvider.builders.condition;
      var array              = sfBuilderProvider.builders.array;

      var sfMessages = function(args) {
        var messagesDiv = args.fieldFrag.querySelector('[sf-messages]');
        if(messagesDiv) {
          messagesDiv.setAttribute('ng-messages', 'ngModel.$error');
          var child = document.createElement('div');
          child.setAttribute('sf-message', '');
          child.setAttribute('ng-message', '');
          messagesDiv.appendChild(child);
        }
      };

      var tabs = function(args) {
        if (args.form.tabs && args.form.tabs.length > 0) {
          var tabContainer = args.fieldFrag.querySelector('md-tabs');

          args.form.tabs.forEach(function(tab, index) {
            var mdTab = document.createElement('md-tab');
            var mdTabLabel = document.createElement('md-tab-label');
            var mdTabLabelText = document.createTextNode('{{'+args.path + '.tabs[' + index + '].title}}');
            var mdTabBody = document.createElement('md-tab-body');
            var childFrag = args.build(tab.items, args.path + '.tabs[' + index + '].items', args.state);
            mdTabLabel.appendChild(mdTabLabelText);
            mdTabBody.appendChild(childFrag);
            mdTab.appendChild(mdTabLabel);
            mdTab.appendChild(mdTabBody);
            tabContainer.appendChild(mdTab);
          });
        }
      };

      var defaults = [ sfField, ngModel, ngModelOptions, sfMessages ];

      decoratorsProvider.defineDecorator('materialDecorator', {
        actions: { template: base + 'actions.html', builder: defaults},
        array: { template: base + 'array.html', builder: [sfField, ngModelOptions, ngModel, array, condition]},
        button: { template: base + 'submit.html', builder: defaults},
        checkbox: { template: base + 'checkbox.html', builder: defaults },
        checkboxes: { template: base + 'checkboxes.html', builder: [sfField, ngModelOptions, ngModel, array, condition]},
        date: { template: base + 'date.html', builder: defaults },
        'default': { template: base + 'default.html', builder: defaults },
        fieldset: { template: base + 'fieldset.html', builder: [ sfField, simpleTransclusion, condition ] },
        help: { template: base + 'help.html', builder: defaults},
        number: { template: base + 'default.html', builder: defaults},
        password: {template: base + 'default.html', builder: defaults},
        radios: { template: base + 'radios.html', builder: defaults },
        'radios-inline': { template: base + 'radios-inline.html', builder: defaults },
        radiobuttons: { template: base + 'radio-buttons.html', builder: defaults },
        section: { template: base + 'section.html', builder: [sfField, simpleTransclusion, condition]},
        select: { template: base + 'select.html', builder: defaults },
        submit: { template: base + 'submit.html', builder: defaults },
        tabs: { template: base + 'tabs.html', builder: [sfField, tabs, condition]},
        tabarray: { template: base + 'tabarray.html', builder: [sfField, ngModelOptions, ngModel, array, condition]},
        textarea: { template: base + 'textarea.html', builder: defaults }
      });
      /*  decoratorsProvider.createDecorator('materialDecorator', {
        textarea: base + 'textarea.html',
        fieldset: base + 'fieldset.html',
        array: base + 'array.html',
        tabarray: base + 'tabarray.html',
        tabs: base + 'tabs.html',
        section: base + 'section.html',
        conditional: base + 'section.html',
        actions: base + 'actions.html',
        select: base + 'select.html',
        checkbox: base + 'checkbox.html',
        checkboxes: base + 'checkboxes.html',
        number: base + 'default.html',
        password: base + 'default.html',
        submit: base + 'submit.html',
        button: base + 'submit.html',
        radios: base + 'radios.html',
        'radios-inline': base + 'radios-inline.html',
        radiobuttons: base + 'radio-buttons.html',
        help: base + 'help.html',
        'default': base + 'default.html'
      });*/

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
