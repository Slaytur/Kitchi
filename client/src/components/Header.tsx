import React from 'react';

import Logo from '../assets/img/logos/logo_header.png';

import '../assets/scss/components/header.scss';
import axios from 'axios';

declare const API_URL: string;

interface HeaderState {
    account: {
        authenticated: boolean
        username?: string
    }
}

class Header extends React.Component<Record<string, never>, HeaderState> {
    nav: React.RefObject<HTMLDivElement>;

    constructor (props: Record<string, never>) {
        super(props);

        this.state = {
            account: {
                authenticated: false
            }
        };

        this.nav = React.createRef<HTMLDivElement>();
    }

    render = (): React.ReactNode => {
        return (
            <header>
                <nav ref={this.nav} className={`navbar navbar-expand-lg navbar-light ${window.location.pathname !== `/` ? `nav-scrolled` : ``}`}>
                    <div className="container-fluid container">
                        <a href="/" className="navbar-brand">
                            <img src={Logo} alt="Kitchi logo" className="d-inline-block tw-me-2" height="48" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a href="/dashboard" className={`nav-link ${window.location.pathname === `/dashboard` ? `active disabled` : ``}`}>Dashboard</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/cookbook" className={`nav-link ${window.location.pathname === `/recipes` ? `active disabled` : ``}`}>Recipes</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/forums" className={`nav-link ${window.location.pathname === `/forums` ? `active disabled` : ``}`}>Forums</a>
                                </li>
                            </ul>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className={`nav-item dropdown nav-profile-menu${!this.state.account.authenticated ? ` d-none` : ``}`}>
                                    <a href="#" className="nav-link btn" id="profile-dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="icofont icofont-user-alt-7 tw-me-2"></i>
                                        <span>{this.state.account.username}</span>
                                    </a>
                                    <div className="welcome-string"></div>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profile-dropdown">
                                        <li>
                                            <a href="/profile" className="dropdown-item profile-settings-opt">
                                                <i className="icofont icofont-people tw-mr-1"></i>
                                                Profile
                                            </a>
                                        </li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li>
                                            <a href="/dashboard" className="dropdown-item profile-settings-opt">
                                                <i className="icofont icofont-dashboard tw-mr-1"></i>
                                            Dashboard
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/settings" className="dropdown-item profile-settings-opt">
                                                <i className="icofont icofont-gear tw-mr-1"></i>
                                            Settings
                                            </a>
                                        </li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li>
                                            <a href={`${API_URL}/auth/logout`} className="dropdown-item profile-logout-opt">
                                                <i className="icofont icofont-logout tw-mr-1"></i>
                                            Logout
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    };

    componentDidMount = (): void => {
        if (window.location.pathname !== `/`) {
            /**
             * Update the header to automatically toggle stickiness.
             */
            window.onscroll = () => {
                const nav = this.nav.current;
                window.scrollY !== nav?.offsetTop
                    ? nav?.classList.add(`nav-scrolled`)
                    : nav?.classList.remove(`nav-scrolled`);
            };
        }

        void axios.get(`${API_URL}/auth/authenticated`, { withCredentials: true }).then(res => {
            console.log(res.data);
            this.setState({
                account: res.data?.authenticated === true
                    ? { authenticated: true, username: res.data.username }
                    : { authenticated: false }
            });
        });
    };
}

export default Header;
