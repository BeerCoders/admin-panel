/**
 * This file is part of the what2wear package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {ForgotPasswordController} from "./../controllers/ForgotPasswordController";

export class ForgotPasswordComponent {
    constructor() {
        this.template = require('./../views/forgotPassword.html');
        this.controller = ForgotPasswordController;
    }
}