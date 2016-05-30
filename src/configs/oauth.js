/**
 * This file is part of the admin-panel package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

config.$inject = ["OAuthProvider", 'OAuthTokenProvider', 'Settings'];

export function config(OAuthProvider, OAuthTokenProvider, Settings) {
    let myConfig = {
        baseUrl: Settings.url,
        clientId: Settings.clientId,
        clientSecret: Settings.clientSecret,
        grantPath: '/oauth/v2/token',
        revokePath: '/oauth/v2/revoke'
    };
    OAuthProvider.configure(myConfig);

    let config = {
        storage: 'localStorage'
    };
    OAuthTokenProvider.configure(config);
}

run.$inject = ['$rootScope', '$state', 'AccessService'];

export function run($rootScope, $state, AccessService) {
    $rootScope.$on('voauth:error', function () {
        AccessService.setUser(null);
        $state.go('login', {}, {reload: true});
    });
}
