/**
 * This file is part of the admin-panel package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

export class ForgotPasswordController {

    constructor($state, Auth, Flash) {
        this.Auth = Auth;
        this.Flash = Flash;
        this.$state = $state;
    }

    forgotPassword() {
        this.Auth.forgotPassword(this.username).then((response) => {
            this.Flash.create("success", "Check your Email to reset your password.");
            this.$state.go('login', {}, {'reload': true});
        }, (response) => {
            if (response.data) {
                var errors = response.data.errors;

                if (errors.invalid_username) {
                    this.Flash.create("danger", errors.invalid_username);
                } else if (errors.password_already_requested) {
                    this.Flash.create("danger", errors.password_already_requested);
                }
            }
        });
    }
}

ForgotPasswordController.$inject = ['$state', 'Auth', 'Flash'];
