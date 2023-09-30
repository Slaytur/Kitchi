import React from 'react';

import $ from 'jquery';

import HCaptcha from '@hcaptcha/react-hcaptcha';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

import '../assets/scss/pages/home.scss';

declare const CLIENT_ID: string;
declare const API_URL: string;

class Register extends React.Component<Record<string, never>, { isLoggedIn: boolean }> {
    render = (): React.ReactNode => (
        <main className="tw-text-center pg-home">
            <div className="splash tw-flex tw-p-8">
                <div className="container">
                    <div className="splash-left tw-float-left">
                        <h1 className="tw-text-6xl">Kitchi</h1>
                        <p className="desc tw-my-4">For all your cooking needs.</p>
                        <a href={`https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${API_URL}/auth/discord&response_type=code&scope=identify%20email`} className="btn btn-lg btn-primary btn-sign-in">
                            <span className="me-1">Sign In</span>
                            <FontAwesomeIcon icon={faSignInAlt} />
                        </a>
                    </div>
                    <div className="splash-left tw-float-right">
                        <h2 className="tw-text-4xl tw-mb-4">Register</h2>
                        <form className="tw-text-left tw-bg-[#5d96f0] tw-p-4 form-control tw-w-[400px] tw-border-none" id="register-form">

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

                            <HCaptcha sitekey="3d46d1aa-00b6-469e-8dc4-23d719b27674" />
                            <div className="tw-mb-3 form-check">
                                <input type="checkbox" name="register-terms-agree" id="register-terms-agree" className="form-check-input" required />
                                <label htmlFor="register-terms-agree" className="form-check-label">By creating an account, I agree to Kitchi&apos;s <a href="/tos">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>.</label>
                            </div>
                            <div className="d-grid gap-2 mt-3">
                                <input type="submit" value="Register" id="signup-button" className="btn btn-primary" />
                            </div>

                            {/* <button type="submit" className="btn btn-primary">Register</button> */}
                        </form>
                    </div>
                </div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#87c6fa" fillOpacity="1" d="M0,320L60,298.7C120,277,240,235,360,181.3C480,128,600,64,720,85.3C840,107,960,213,1080,234.7C1200,256,1320,192,1380,160L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
            <br />

            <div className="virtual-sous-chef-intro">
                <h2 className="tw-text-4xl">Your Virtual Sous Chef</h2>
                <div className="tw-mt-5 container">
                    <div className="card">
                        <div className="card-body tw-bg-transparent">
                            <h5 className="card-title tw-text-2xl tw-font-bold">Features</h5>
                            <p>Bacon ipsum dolor amet kielbasa bresaola ribeye cupim. Ham pork chop strip steak, ground round hamburger shank kevin alcatra jowl buffalo chislic. Sausage bresaola rump, spare ribs shoulder alcatra salami drumstick pork chop pig burgdoggen filet mignon. Bacon boudin shank ham hock bresaola turkey kielbasa landjaeger corned beef brisket beef ribs capicola. Turkey chicken tongue pig pork loin alcatra pastrami tri-tip ground round. Picanha shankle shank salami pork belly meatball.</p>
                        </div>
                    </div>
                    <div className="card tw-mx-5">
                        <div className="card-body tw-bg-transparent">
                            <h5 className="card-title tw-text-2xl tw-font-bold">Features</h5>
                            <p>Bacon ipsum dolor amet kielbasa bresaola ribeye cupim. Ham pork chop strip steak, ground round hamburger shank kevin alcatra jowl buffalo chislic. Sausage bresaola rump, spare ribs shoulder alcatra salami drumstick pork chop pig burgdoggen filet mignon. Bacon boudin shank ham hock bresaola turkey kielbasa landjaeger corned beef brisket beef ribs capicola. Turkey chicken tongue pig pork loin alcatra pastrami tri-tip ground round. Picanha shankle shank salami pork belly meatball.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body tw-bg-transparent">
                            <h5 className="card-title tw-text-2xl tw-font-bold">Features</h5>
                            <p>Bacon ipsum dolor amet kielbasa bresaola ribeye cupim. Ham pork chop strip steak, ground round hamburger shank kevin alcatra jowl buffalo chislic. Sausage bresaola rump, spare ribs shoulder alcatra salami drumstick pork chop pig burgdoggen filet mignon. Bacon boudin shank ham hock bresaola turkey kielbasa landjaeger corned beef brisket beef ribs capicola. Turkey chicken tongue pig pork loin alcatra pastrami tri-tip ground round. Picanha shankle shank salami pork belly meatball.</p>
                        </div>
                    </div>
                </div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#87c6fa" fillOpacity="1" d="M0,96L34.3,96C68.6,96,137,96,206,106.7C274.3,117,343,139,411,128C480,117,549,75,617,74.7C685.7,75,754,117,823,160C891.4,203,960,245,1029,256C1097.1,267,1166,245,1234,208C1302.9,171,1371,117,1406,90.7L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
            <div className="tw-flex tw-bg-[#87c6fa]">
                <hr className="tw-text-white" />
                <div className="tw-w-100 tw-h-[170px] tw-w-[300px] tw-border-none tw-mx-auto">
                    <div className="card tw-position-absolute">
                        <div className="card-body">
                            <h5 className="card-title tw-text-2xl tw-font-bold">170K+</h5>
                            <p>different recipes</p>
                        </div>
                    </div>
                </div>
                <hr />
            </div>

            {/* <div className="tw-flex">
                <div>
                    <h5 className="tw-text-4xl">Cook Smarter,<br />Dine Better</h5>
                    <p>Kitchi has you covered.</p>
                </div>
            </div> */}
        </main>
    );

    componentDidMount = (): void => {
        $()  
    };
}

export default Register;
