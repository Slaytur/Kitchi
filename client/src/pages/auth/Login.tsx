import React from 'react';

import $ from 'jquery';

import HCaptcha from '@hcaptcha/react-hcaptcha';

declare const API_URL: string;

class Login extends React.Component {
    hcaptcha: React.RefObject<HCaptcha>;

    constructor (props: Record<never, never>) {
        super(props);
        this.hcaptcha = React.createRef<HCaptcha>();
    }

    render = (): React.ReactNode => (
        <main className="pg-login">
            <div className="container tw-my-8">
                <h1 className="text-center my-5">Log In</h1>
                <div className="card card-body !tw-bg-$buff text-dark">
                    <form action="/auth/login" method="POST" id="login-form">
                        <div id="login-error" className="alert alert-danger alert-dismissible fade show" role="alert">
                            <span id="login-error-message"></span>
                        </div>
                        <div id="login-success" className="alert alert-success alert-dismissible fade show" role="alert">
                            <span id="login-success-message"></span>
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="username" name="username" id="username" className="form-control mb-3" placeholder="Username" autoComplete="username" required />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" name="password" id="password" className="form-control mb-3" placeholder="Password" autoComplete="new-password" required />
                        </div>

                        <HCaptcha ref={this.hcaptcha} sitekey="3d46d1aa-00b6-469e-8dc4-23d719b27674" />

                        <div className="d-grid gap-2 mt-3">
                            <input type="submit" value="Log In" id="login-btn" className="btn btn-darken btn-green" />
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );

    componentDidMount = (): void => {
        $(`#login-error`).hide();
        $(`#login-success`).hide();

        $(`#login-form`).on(`submit`, e => {
            e.preventDefault();

            $(`#login-btn`).attr(`disabled`, `true`);
            $(`#login-error`).hide();

            void $.ajax({
                type: `post`,
                url: `${API_URL}/auth/login`,
                data: $(`#login-form`).serialize()
            }).then((res: { errors: string, success: boolean }) => {
                if (res.errors !== undefined) {
                    $(`#login-btn`).removeAttr(`disabled`);
                    $(`#login-error`).show();

                    this.hcaptcha.current?.resetCaptcha();

                    $(`#login-error-message`).text(res.errors);
                    console.error(`[ACCOUNT SERVER]: ${JSON.stringify(res.errors)}`);
                } else if (res.success) {
                    $(`#login-success`).show();
                    $(`#login-success-message`).text(res.success);

                    console.log(`[ACCOUNT SERVER]: ${JSON.stringify(res.success)}`);

                    setTimeout(() => {
                        // TODO: Change to auto-login.
                        window.location.href = `${window.location.protocol}//${window.location.host}/dashboard`;
                    }, 1e3);
                }
            }).catch(() => {
                $(`#login-btn`).removeAttr(`disabled`);
                $(`#login-error`).show();

                this.hcaptcha.current?.resetCaptcha();

                $(`#login-error-message`).text(`There was an issue logging into your account.`);
                console.error(`[ACCOUNT SERVER]: UNREACHABLE`);
            });
        });
    };
}

export default Login;
