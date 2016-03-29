/**
 * This file is part of the what2wear package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

export class User {

    constructor(parameters = {}) {
        this.id = parameters.id;
        this.email = parameters.email;
        this.enabled = parameters.enabled;
        this.roles = parameters.roles;
        this.created = parameters.created;
        this.updated = parameters.updated;
    }
}
