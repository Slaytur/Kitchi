import React from 'react';

import Twitter from '../assets/img/footer/twitter.svg';
import Instagram from '../assets/img/footer/instagram.svg';
import GitHub from '../assets/img/footer/github.svg';

import '../assets/scss/components/footer.scss';

class Footer extends React.Component {
    render = (): React.ReactNode => (
        <footer>
            <div className="tw-mt-5 container">
                <div className="row">
                    <div className="col-6 col-md-2 mb-3">
                        <h5>Info</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Home</a></li>
                            <li className="nav-item mb-2"><a href="/about" className="nav-link p-0 text-body-secondary">About</a></li>
                            <li className="nav-item mb-2"><a href="/faq" className="nav-link p-0 text-body-secondary">FAQ</a></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-2 mb-3">
                        <h5>Account</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="/dashboard" className="nav-link p-0 text-body-secondary">Dashboard</a></li>
                            <li className="nav-item mb-2"><a href="/forums" className="nav-link p-0 text-body-secondary">Forums</a></li>
                            <li className="nav-item mb-2"><a href="/settings" className="nav-link p-0 text-body-secondary">Settings</a></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-2 mb-3">
                        <h5>Legal</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="/terms_of_service" className="nav-link p-0 text-body-secondary">Terms of Service</a></li>
                            <li className="nav-item mb-2"><a href="/privacy_policy" className="nav-link p-0 text-body-secondary">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div className="col-md-5 offset-md-1 mb-3">
                        <form>
                            <h5>Subscribe to our newsletter</h5>
                            <p>Monthly digest of what&apos;s new and exciting from us.</p>
                            <div className="tw-flex tw-flex-column flex-sm-row w-100 gap-2">
                                <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                                <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                                <button className="btn btn-darken btn-green" type="button">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                    <p>&copy; 2023 Kitchi, Inc. All rights reserved.</p>
                    <ul className="list-unstyled d-flex">
                        <li className="ms-3"><a className="link-body-emphasis footer-darken" href="https://twitter.com" target="_blank" rel="noreferrer"><img src={Twitter} className="tw-h-[24px]" /></a></li>
                        <li className="ms-3"><a className="link-body-emphasis footer-darken" href="https://instagram.com" target="_blank" rel="noreferrer"><img src={Instagram} className="tw-h-[24px]" /></a></li>
                        <li className="ms-3"><a className="link-body-emphasis footer-darken" href="https://github.com/Slaytur/Kitchi" target="_blank" rel="noreferrer"><img src={GitHub} className="tw-h-[24px]" /></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
