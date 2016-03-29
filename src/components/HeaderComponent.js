/**
 * This file is part of the what2wear package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {HeaderController} from "./../controllers/HeaderController";

export class HeaderComponent {
    constructor() {
        this.template = require('./../views/header.html');
        this.controller = HeaderController;
    }
}