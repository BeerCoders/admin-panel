/**
 * This file is part of the admin-panel package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

export class HeaderController {

    constructor(AccessService) {
        this.user = AccessService.getUser();
    }
}

HeaderController.$inject = ['AccessService'];
