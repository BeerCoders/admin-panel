/**
 * This file is part of the what2wear package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {MainController} from "./../controllers/MainController";

export class MainComponent {
    constructor() {
        this.template = require('./../views/main.html');
        this.controller = MainController;
    }
}