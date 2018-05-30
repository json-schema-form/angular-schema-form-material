angular
    .module('test')
    .config(function($mdThemingProvider, $mdDateLocaleProvider) {
        $mdThemingProvider.setDefaultTheme('default');
        $mdThemingProvider.alwaysWatchTheme(true);
        $mdDateLocaleProvider.formatDate = function(date) {
            console.info(moment(date).format('YYYY-MM-DD'));
            return moment(date).format('YYYY-MM-DD');
        };
    });