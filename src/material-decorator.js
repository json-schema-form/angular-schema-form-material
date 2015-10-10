angular.module('schemaForm')
  .config([ 'schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfBuilderProvider', 'sfPathProvider',
    function(schemaFormProvider, decoratorsProvider, sfBuilderProvider, sfPathProvider) {
      var base = 'decorators/material/';

      var transclusion   = sfBuilderProvider.builders.simpleTransclusion;
      var ngModelOptions = sfBuilderProvider.builders.ngModelOptions;
      var ngModel        = sfBuilderProvider.builders.ngModel;
      var sfField        = sfBuilderProvider.builders.sfField;
      var sfMessages     = function(args) {
        var messagesDiv = args.fieldFrag.querySelector('[sf-messages]');
        if(messagesDiv) {
          messagesDiv.setAttribute('ng-messages', 'ngModel.$error');
          var child = document.createElement('div');
          child.setAttribute('sf-message', '');
          child.setAttribute('ng-message', '');
          messagesDiv.appendChild(child);
        }
      };

      var defaults = [ sfField, ngModel, ngModelOptions, sfMessages ];

      decoratorsProvider.defineDecorator('materialDecorator', {
        textarea: { template: base + 'textarea.html', builder: defaults },
        fieldset: { template: base + 'fieldset.html', builder: [ sfField, transclusion ] },
        'default': { template: base + 'default.html', builder: defaults },
        select: { template: base + 'select.html', builder: defaults },
        date: { template: base + 'date.html', builder: defaults },
        checkbox: { template: base + 'checkbox.html', builder: defaults },
        checkboxes: { template: base + 'checkboxes.html', builder: defaults },
        radios: { template: base + 'radios.html', builder: defaults },
        'radios-inline': { template: base + 'radios-inline.html', builder: defaults },
        radiobuttons: { template: base + 'radio-buttons.html', builder: defaults },
        submit: { template: base + 'submit.html', builder: defaults }
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
