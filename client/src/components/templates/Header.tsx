import axios from 'axios';
import React from 'react';

import Logo from '../../assets/img/logos/slaytur.png';

declare const API_URL: string;

interface HeaderState {
    account: {
        authenticated: boolean
        avatar?: string
        username?: string
    }
}

class Header extends React.Component<Record<string, never>, HeaderState> {
    constructor (props: Record<string, never>) {
        super(props);

        this.state = {
            account: {
                authenticated: false
            }
        };
    }

    render = (): React.ReactNode => (
        <header>
            <nav className="navbar navbar-expand-lg tw-bg-[#00000040] navbar-dark">
                <div className="container-fluid">
                    <a href="https://slaytur.warzon.io" className="navbar-brand">
                        <img className="tw-w-[30px] tw-mr-2 d-inline-block" src={Logo} />
                        Slaytur
                    </a>
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            {this.state.account.authenticated && <li className="nav-item "><a href="/dashboard" className={`nav-link${window.location.pathname === `/dashboard` ? ` active` : ``}`} aria-current="page">Dashboard</a></li>}
                            <li className="nav-item"><a href="/support" className={`nav-link${window.location.pathname === `/support` ? ` active` : ``}`} aria-current="page">Support</a></li>
                            <li className="nav-link disabled"></li>
                        </ul>
                        <ul className="navbar-nav ms-auto mb-1 mb-lg-0">
                            <li className={`nav-item dropdown nav-profile-menu${!this.state.account.authenticated ? ` d-none` : ``}`}>
                                <a href="#" className="nav-link btn" id="profile-dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {this.state.account.avatar !== null
                                        ? <img className="tw-w-[25px] tw-mr-2 d-inline-block tw-rounded-full" src={this.state.account.avatar} />
                                        : <i className="icofont icofont-user-alt-7 tw-mr-2"></i>
                                    }
                                    <span>{this.state.account.username}</span>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profile-dropdown">
                                    {/* <li>
                                        <a href="/profile" className="dropdown-item profile-settings-opt">
                                            <i className="icofont icofont-people tw-mr-1"></i>
                                            Profile
                                        </a>
                                    </li>
                                    <li><hr className="dropdown-divider" /></li> */}
                                    <li>
                                        <a href="/dashboard" className="dropdown-item profile-settings-opt">
                                            <i className="icofont icofont-dashboard tw-mr-1"></i>
                                            Dashboard
                                        </a>
                                    </li>
                                    <li>
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

    componentDidMount = async (): Promise<void> => {
        if (window.location.pathname === `/`) return;
        await axios.get(`${API_URL}/auth/authenticated`, { withCredentials: true }).then(res => {
            const data: { authenticated: boolean, username?: string, avatar?: string } = res.data;
            if (data.authenticated) this.setState({ account: { authenticated: true, username: data.username, avatar: data.avatar } });
        });
    };
}

export default Header;
