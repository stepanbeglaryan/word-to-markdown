(function(angular) {
    'use strict';

    angular.module('word-to-markdown.states.output', [
        'ui.router',
        'word-to-markdown.states.output.controller'
    ])
        .config(routeConfigurator);

    /**
     * @param {ui.router.$stateProvider} $stateProvider
     */
    function routeConfigurator($stateProvider) {
        $stateProvider.state('output', {
            templateUrl: 'app/states/output/output.html',
            controller: 'OutputController as vm',
            resolve: {
                output: getMarkdownForSelectedText
            }
        });
    }

    /**
     * @param {MarkdownConverterService} markdownConverter
     * @returns {Promise.<string>}
     */
    function getMarkdownForSelectedText(markdownConverter) {
        return markdownConverter.convertSelectedText();
    }
})(window.angular);
