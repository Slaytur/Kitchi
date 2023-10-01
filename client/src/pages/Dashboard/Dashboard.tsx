import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faDownload, faDesktop } from "@fortawesome/free-solid-svg-icons";

import "../../assets/scss/pages/dashboard.scss";

declare const API_URL: string;

// interface UserData {
//     authenticated: boolean

//     discordID: string
//     username: string
//     email: string
//     avatar: string

//     permissions: {
//         admin: boolean
//     }
// }

class Dashboard extends React.Component {
    render = (): React.ReactNode => (
        <main className="tw-text-center container">
            <div className="dash-container mt-5">
                <div className="dash-header">
                    <h1 className="page-title">Dashboard</h1>
                </div>
                <div className="dash-content tw-mt-2">
                    <div className="dash-config-container">
                        <div className="dash-config tw-mr-[7.5px]">
                            <h5 className="tw-mb-5">ShareX Config</h5>
                            <div className="dash-config-btns">
                                <a
                                    href={`${API_URL}/settings/config`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-sm btn-success download-btn"
                                >
                                    <FontAwesomeIcon icon={faDownload} />
                                    <span className="tw-ml-1">Download</span>
                                </a>
                                <a
                                    href="#"
                                    className="btn btn-sm btn-danger tutorial-btn disabled"
                                >
                                    <FontAwesomeIcon icon={faDesktop} />
                                    <span className="tw-ml-1">Tutorial</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="dash-pictures tw-ml-[7.5px]">
                        <h5>Uploaded Pictures</h5>
                    </div>
                </div>
            </div>
        </main>
    );

    // componentDidMount = async (): Promise<void> => {
    //     const userData = await fetch(`https://i.alru.xyz/auth/authenticated`)
    //         .catch(err => {
    //             console.error(err);
    //             if (window.location.hostname !== `localhost`) window.location.href = `/`;
    //         });

    //     // {"discordID":"386940319666667521","username":"DamienVesper","email":"ldamienvesper@gmail.com","avatar":"2c18b54f11167920ada3a6ebd538f910","permissions":{"admin":false}}

    //     if (!((userData as unknown) as UserData).authenticated && window.location.hostname !== `localhost`) window.location.href = `/`;
    // };
}

export default Dashboard;
