/* global browser, it, describe, element, by */

describe('Schema Form validation messages', function () {

    describe('tv4-validators', function () {
        var URL = 'angular-schema-form-material/examples/material-example.html#/86fb7505a8ab6a43bc70';

        var validationMessageTestBuilder = function (testToDo) {

            Object.keys(testToDo.validationCodes).forEach(function (validationCodeIndex) {
                it('validation test, expecting class "' + testToDo.validationCodes[validationCodeIndex] + ' when input is ' + testToDo.value, function () {

                    browser.get(URL);
                    var input = element.all(by.css('form[name=ngform] input')).get(testToDo.field);
                    input.sendKeys(testToDo.value);

                    expect(input.evaluate('ngModel.$valid')).toEqual(testToDo.valid);
                    expect(input.getAttribute('class')).toMatch(testToDo.validationCodes[validationCodeIndex])


                });

            });

        };


        var testsToDo = [
            {
                field: 0,   //0 string, 1 integer
                value: "s",
                validationCodes: ['ng-invalid-tv4-200'],
                valid: false
            },
            {
                field: 0,
                value: 'tooo long string',
                validationCodes: ['ng-invalid-tv4-201'],
                valid: false
            },
            {
                field: 0,
                value: 'foo 66',
                validationCodes: ['ng-invalid-tv4-202'],
                valid: false
            },
            {
                field: 0,
                value: 'foobar',
                validationCodes: ['ng-valid-tv4-200'],
                valid: true
            },
            {
                field: 1,
                value: '3',
                validationCodes: ['ng-invalid-tv4-101'],
                valid: false
            },
            {
                field: 1,
                value: '66',
                validationCodes: ['ng-invalid-tv4-103'],
                valid: false
            },
            {
                field: 1,
                value: '11',
                validationCodes: ['ng-invalid-tv4-100'],
                valid: false
            },
            {
                field: 1,
                value: 'aaa',
                validationCodes: ['ng-invalid-tv4-302'],
                valid: false
            }
        ];


        Object.keys(testsToDo).forEach(function (testToDoIndex) {
            validationMessageTestBuilder(testsToDo[testToDoIndex]);
        });


    });
});