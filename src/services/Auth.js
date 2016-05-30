/**
 * This file is part of the admin-panel package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {Settings} from "../constants";

export class Auth {
    constructor($http, AccessService, OAuth, Settings) {
        this.http = $http;
        this.OAuth = OAuth;
        this.Settings = Settings;
        this.AccessService = AccessService;
    }

    login(username, password) {
        let user = {
            username: username,
            password: password
        };

        return this.OAuth.getAccessToken(user).then(response => response.data);
    }

    verify(resetToken, firstPassword, secondPassword) {
        let data = {
            fos_user_resetting_form: {
                plainPassword: {
                    first: firstPassword,
                    second: secondPassword
                }
            }
        };

        let req = {
            method: 'POST',
            url: this.Settings.url + '/resetting/reset/' + resetToken,
            data: data
        };

        return this.http(req).then(response => response.data);
    }

    register(email, firstPassword, secondPassword) {
        let data = {
            fos_user_registration_form: {
                email: email,
                plainPassword: {
                    first: firstPassword,
                    second: secondPassword
                }
            }
        };

        let req = {
            method: 'POST',
            url: this.Settings.url + '/register',
            data: data
        };

        return this.http(req).then(response => response.data);
    }

    forgotPassword(username) {
        let data = {
            'username': username
        };

        let req = {
            method: 'POST',
            url: this.Settings.url + '/resetting/send-email',
            data: data
        };

        return this.http(req).then(response => response.data);
    }

    changePassword(current_password, new_password, new_password_confirmation) {
        let data = {
            fos_user_change_password_form: {
                current_password: current_password,
                plainPassword: {
                    first: new_password,
                    second: new_password_confirmation
                }
            }
        };

        let req = {
            method: 'POST',
            url: this.Settings.url + '/change-password',
            data: data
        };

        return this.http(req).then(response => response.data);
    }

    me() {
        let req = {
            method: 'GET',
            url: this.Settings.url + '/users/me'
        };

        return this.http(req).then(response => {
            let user = null;
            if (response.data) {
                user = response.data.data;
                user.lastActivity = response.data.lastActivity;
                this.AccessService.setUser(user);
            }

            return user;
        });
    }
}

Auth.$inject = ['$http', 'AccessService', 'OAuth', 'Settings'];
