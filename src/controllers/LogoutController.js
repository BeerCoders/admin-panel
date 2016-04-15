/**
 * This file is part of the admin-panel package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

export class LogoutController {

    constructor($location, AccessService) {
        AccessService.setUser(null);
        $location.path('/login');
        $location.replace();
    }
}

LogoutController.$inject = ['$location', 'AccessService'];
