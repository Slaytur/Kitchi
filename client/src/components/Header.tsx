import React from "react";

import Logo from "../assets/img/logos/logo_header.png";

import "../assets/scss/components/header.scss";
import axios from "axios";

declare const API_URL: string;

interface HeaderState {
    account: {
        authenticated: boolean
        username?: string
        displayName?: string
        avatar?: string
    }

    accountDropdownState: boolean
}

class Header extends React.Component<Record<string, never>, HeaderState> {
    nav: React.RefObject<HTMLDivElement>;

    constructor (props: Record<string, never>) {
        super(props);

        this.state = {
            account: {
                authenticated: true
            },

            accountDropdownState: false
        };

        this.nav = React.createRef<HTMLDivElement>();
    }

    render = (): React.ReactNode => {
        return (
            <header>
                <nav
                    ref={this.nav}
                    className={`navbar navbar-expand-lg navbar-light ${
                        window.location.pathname !== `/` ? `nav-scrolled` : ``
                    }`}
                >
                    <div className="container-fluid container">
                        <a href="/" className="navbar-brand">
                            <img
                                src={Logo}
                                alt="Kitchi logo"
                                className="d-inline-block tw-me-2"
                                height="48"
                            />
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                {this.state.account.authenticated && (
                                    <li className="nav-item">
                                        <a
                                            href="/dashboard"
                                            className={`nav-link ${
                                                window.location.pathname ===
                                                `/dashboard`
                                                    ? `active disabled`
                                                    : ``
                                            }`}
                                        >
                                            Dashboard
                                        </a>
                                    </li>
                                )}
                                <li className="nav-item">
                                    <a
                                        href="/forums"
                                        className={`nav-link ${
                                            window.location.pathname ===
                                            `/forums`
                                                ? `active disabled`
                                                : ``
                                        }`}
                                    >
                                        Forums
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        href="/timer"
                                        className={`nav-link ${
                                            window.location.pathname ===
                                            `/timer`
                                                ? `active disabled`
                                                : ``
                                        }`}
                                    >
                                        Timer
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/recipe" className={`nav-link ${window.location.pathname === `/recipe` ? `active disabled` : ``}`}>Recipes</a>
                                </li>
                            </ul>
                            <form
                                className="d-flex tw-ms-1"
                                role="search"
                                id="search"
                            >
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                                <button
                                    className="btn btn-darken btn-green"
                                    type="submit"
                                >
                                    Search
                                </button>
                            </form>
                        </div>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li
                                    className={`nav-item dropdown nav-profile-menu${
                                        !this.state.account.authenticated
                                            ? ` d-none`
                                            : ``
                                    }`}
                                >
                                    <a
                                        href="#"
                                        className="nav-link btn"
                                        id="profile-dropdown"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <img
                                            src={this.state.account.avatar}
                                            alt="Your account avatar"
                                            className="tw-h-[24px] tw-whitespace-nowrap tw-rounded-full tw-me-2"
                                        />

                                        <span>
                                            {this.state.account.displayName ??
                                                this.state.account.username}
                                        </span>
                                        <i
                                            className={`icofont icofont-caret-${
                                                this.state.accountDropdownState
                                                    ? `up`
                                                    : `down`
                                            } tw-ms-2`}
                                        ></i>
                                    </a>
                                    <div className="welcome-string"></div>
                                    <ul
                                        className="dropdown-menu dropdown-menu-end tw-text-white tw-bg-[#aad287f6]"
                                        aria-labelledby="profile-dropdown"
                                    >
                                        <li>
                                            <a
                                                href="/profile"
                                                className="dropdown-item profile-settings-opt"
                                            >
                                                <i className="icofont icofont-people tw-mr-1"></i>
                                                Profile
                                            </a>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <a
                                                href="/dashboard"
                                                className="dropdown-item profile-settings-opt"
                                            >
                                                <i className="icofont icofont-dashboard tw-mr-1"></i>
                                                Dashboard
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/settings"
                                                className="dropdown-item profile-settings-opt"
                                            >
                                                <i className="icofont icofont-gear tw-mr-1"></i>
                                                Settings
                                            </a>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <a
                                                href={`${API_URL}/auth/logout`}
                                                className="dropdown-item profile-logout-opt"
                                            >
                                                <i className="icofont icofont-logout tw-mr-1"></i>
                                                Logout
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <form
                                className={
                                    this.state.account.authenticated
                                        ? `d-none`
                                        : ``
                                }
                            >
                                <a
                                    href="/auth/login"
                                    className="btn btn-darken btn-green me-1"
                                >
                                    Login
                                </a>
                                <a
                                    href="/auth/signup"
                                    className="btn btn-darken btn-green ms-1"
                                >
                                    Sign Up
                                </a>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>
        );
    };

    componentDidMount = (): void => {
        if (window.location.pathname === `/`) {
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

        $(`#profile-dropdown`).on(`click`, () =>
            this.setState({
                accountDropdownState: !this.state.accountDropdownState
            })
        );

        void axios
            .get(`${API_URL}/auth/authenticated`, { withCredentials: true })
            .then((res) => {
                this.setState({
                    account:
                        res.data?.authenticated === true
                            ? {
                                authenticated: true,
                                username: res.data.username,
                                displayName: res.data.displayName,
                                avatar: res.data.avatar
                            }
                            : { authenticated: false }
                });
            })
            .catch(() =>
                console.error(
                    `[ACCOUNT SERVER]: Could not determine login status.`
                )
            );
    };
}

export default Header;
