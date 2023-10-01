import React from 'react';

import $ from 'jquery';

import HCaptcha from '@hcaptcha/react-hcaptcha';

declare const API_URL: string;

class Signup extends React.Component {
    hcaptcha: React.RefObject<HCaptcha>;

    constructor (props: Record<never, never>) {
        super(props);
        this.hcaptcha = React.createRef<HCaptcha>();
    }

    render = (): React.ReactNode => (
        <main className="pg-signup">
            <div className="container tw-my-8">
                <h1 className="text-center my-5">Sign Up</h1>
                <div className="card card-body text-dark">
                    <form action="/auth/signup" method="POST" id="signup-form">
                        <div id="signup-error" className="alert alert-danger alert-dismissible fade show" role="alert">
                            <span id="signup-error-message"></span>
                        </div>
                        <div id="signup-success" className="alert alert-success alert-dismissible fade show" role="alert">
                            <span id="signup-success-message"></span>
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" name="signup-email" id="email" className="form-control mb-3" placeholder="Email" autoComplete="email" required />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="username" name="signup-username" id="username" className="form-control mb-3" placeholder="Username" autoComplete="username" required />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" name="signup-password" id="password" className="form-control mb-3" placeholder="Password" autoComplete="new-password" required />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
                            <input type="password" name="signup-password-confirm" id="confirm-password" className="form-control mb-3" placeholder="Confirm Password" autoComplete="confirm-password" required />
                        </div>

                        <HCaptcha ref={this.hcaptcha} sitekey="3d46d1aa-00b6-469e-8dc4-23d719b27674" />

                        <div className="d-grid gap-2 mt-3">
                            <input type="submit" value="Sign Up" id="signup-button" className="btn btn-darken btn-green" />
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );

    componentDidMount = (): void => {
        $(`#signup-error`).hide();
        $(`#signup-success`).hide();

        $(`#signup-form`).on(`submit`, e => {
            e.preventDefault();

            $(`#signup-button`).attr(`disabled`, `true`);
            $(`#signup-error`).hide();

            void $.ajax({
                type: `post`,
                url: `${API_URL}/auth/signup`,
                data: $(`#signup-form`).serialize()
            }).then((res: { errors: string, success: boolean }) => {
                if (res.errors !== undefined) {
                    $(`#signup-button`).attr(`disabled`, `false`);
                    $(`#signup-error`).show();

                    // This needs a re-implementation.
                    this.hcaptcha.current?.resetCaptcha();

                    $(`#signup-error-message`).text(res.errors);
                    console.error(`[ACCOUNT SERVER]: ${JSON.stringify(res.errors)}`);
                } else if (res.success) {
                    $(`#signup-button`).attr(`disabled`, `true`);
                    $(`#signup-success`).show();

                    $(`#signup-success-message`).text(res.success);
                    console.log(`[ACCOUNT SERVER]: ${JSON.stringify(res.success)}`);

                    setTimeout(() => {
                        // TODO: Change to auto-login.
                        window.location.href = `${window.location.protocol}//${window.location.host}/auth/login`;
                    }, 1e4);
                }
            }).catch(() => {
                $(`#signup-button`).attr(`disabled`, `false`);
                $(`#signup-error`).show();

                // This needs a re-implementation.
                // hcaptcha.reset();

                $(`#signup-error-message`).text(`There was an issue registering your account.`);
                console.error(`[ACCOUNT SERVER]: UNREACHABLE`);
            });
        });
    };
}

export default Signup;
