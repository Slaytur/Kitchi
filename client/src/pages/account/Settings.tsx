import React from 'react';

import axios from 'axios';

declare const API_URL: string;

class Settings extends React.Component {
    render = (): React.ReactNode => (
        <main className="pg-settings">
            <h1 className="text-center mt-5">Settings</h1>
            <div className="container tw-mb-5">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card card-body text-dark my-4">
                            <h2 className="text-center my-3">Display Name</h2>
                            <form action={`${API_URL}/settings/display-name`} method="POST" id="account-options-form">
                                <div className="form-group">
                                    <label htmlFor="display-name" className="form-label">Display Name</label>
                                    <input type="text" id="display-name" name="display-name" className="form-control" placeholder="Change display name" maxLength={20} />
                                    <span className="form-text text-dark">You may only change the capitalization, not the actual spelling.</span>
                                </div>
                                <input type="submit" id="account-update-info" value="Update Display Name" className="btn btn-primary btn-block mt-3" />
                            </form>
                        </div>
                        {/* <div className="card card-body text-dark my-4">
                            <h2 className="text-center my-3">Preferences</h2>
                            <form action="/settings/preferences" method="POST" id="account-generaloptions-form">
                                <div className="form-check form-switch">
                                    <input type="checkbox" className="form-check-input" id="allow-notifications" name="allow-notifications" defaultChecked />
                                    <label htmlFor="allow-notifications" className="form-check-label">Preference 1</label>
                                </div>

                                <input type="submit" id="notification-settings-btn" name="notification-settings-btn" value="Update Notification Settings" className="btn btn-primary btn-block mt-3" />
                            </form>
                        </div> */}
                    </div>
                    <div className="col-sm-6">
                        <div className="card card-body text-dark my-4">
                            <h2 className="text-center my-3">Avatar</h2>
                            <div className="avatar-preview mx-auto my-4">
                                <img src="/assets/img/misc/burger_pfp.png" alt="Default burger avatar" className="avatar-preview profile-picture rounded tw-h-[256px]" id="user-avatar-preview" />
                            </div>
                            <form action={`${API_URL}/settings/update-avatar`} method="POST" id="account-avatar-form">
                                <div className="form-group">
                                    <label htmlFor="profile-picture" className="form-label">Profile Avatar URL</label>
                                    <input type="text" id="display-avatar" name="display-avatar" className="form-control" placeholder="Avatar Image URL" maxLength={1000} />
                                    <span className="form-text text-dark">(Example: <a href="https://slaytur.warzon.io/assets/img/misc/burger_pfp.png">https://slaytur.warzon.io/assets/img/misc/burger_pfp.png</a>)</span>
                                </div>
                                <input type="submit" name="account-avatar-form" id="account-update-pfp" value="Update Profile Picture" className="btn btn-primary btn-block mt-3" />
                            </form>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card card-body text-dark">
                            <a type="button" href={`${API_URL}/auth/delete`} className="btn btn-danger mt-2 disabled">Delete Account</a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );

    componentDidMount = (): void => {
        void axios.get(`${API_URL}/auth/authenticated`, { withCredentials: true }).then(res => {
            if (typeof res.data?.avatar === `string`) $(`#user-avatar-preview`).attr(`src`, res.data.avatar);
        }).catch(() => console.error(`[ACCOUNT SERVER]: Could not determine login status.`));
    };
}

export default Settings;
