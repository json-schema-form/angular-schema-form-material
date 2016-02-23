exports.config = {
    specs: ['specs/*.js'],
    baseUrl: 'http://localhost:63342/',
    multiCapabilities: [
        {'browserName': 'firefox'},
        {'browserName': 'chrome'}
    ]
};