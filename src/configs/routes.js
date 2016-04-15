/**
 * This file is part of the admin-panel package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

config.$inject = ["$stateProvider", "$locationProvider", "$urlRouterProvider"];

export function config($stateProvider, $locationProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);

    $stateProvider
        .state('main', {
            url: '/',
            template: '<main></main>'
        })
        .state('login', {
            url: '/login',
            template: '<login></login>'
        })
        .state('logout', {
            url: '/logout',
            template: '<logout></logout>'
        })
        .state('forgotPassword', {
            url: '/reset',
            template: '<forgot-password></forgot-password>'
        })
        .state('reset', {
            url: '/reset/:token',
            template: '<reset></reset>'
        });
}