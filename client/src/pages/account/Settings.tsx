import React from 'react';

import axios from 'axios';

import Burger from '../../assets/img/misc/burger_pfp.png';

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
                            <form action={`${API_URL}/settings/displayname`} method="POST" id="account-options-form">
                                <div className="form-group">
                                    <label htmlFor="display-name" className="form-label">Display Name</label>
                                    <input type="text" id="display-name" name="display-name" className="form-control" placeholder="Change display name" maxLength={20} />
                                    <span className="form-text text-dark">You may only change the capitalization, not the actual spelling.</span>
                                </div>
                                <input type="submit" id="account-update-info" value="Update Display Name" className="btn btn-darken btn-green btn-block mt-3" />
                            </form>
                        </div>
                        <div className="card card-body text-dark my-4">
                            <h3 className="text-center my-3">Skill Level</h3>
                            <form action={`${API_URL}/settings/skilllevel`} method="POST">
                                <label htmlFor="skill-level">Level (Beginner to Experienced):</label>
                                <br />
                                <input type="range" name="skill-level" id="skill-level" className="form-range" min={0} max={2} />
                                <input type="submit" value="Update Skill Level" className="btn btn-darken btn-green btn-block mt-3" />
                            </form>
                        </div>
                        <div className="card card-body text-dark my-4">
                            <h3 className="text-center my-3">Food Interests</h3>
                            <form action={`${API_URL}/settings/foodinterests`} method="POST">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value={0} id="interest-american" />
                                    <label className="form-check-label" htmlFor="interest-american">American</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value={1} id="interest-asian" />
                                    <label className="form-check-label" htmlFor="interest-asian">Asian</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value={2} id="interest-cajun" />
                                    <label className="form-check-label" htmlFor="interest-cajun">Cajun</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value={3} id="interest-canadian" />
                                    <label className="form-check-label" htmlFor="interest-canadian">Canadian</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value={4} id="diet-french" />
                                    <label className="form-check-label" htmlFor="interest-french">French</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value={5} id="interest-italian" />
                                    <label className="form-check-label" htmlFor="interest-italian">Italian</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value={6} id="interest-spicy" />
                                    <label className="form-check-label" htmlFor="interest-spicy">Spicy</label>
                                </div>
                                <input type="submit" value="Update Food Interests" className="btn btn-darken btn-green btn-block mt-3" />
                            </form>
                        </div>
                    </div>
                    <div className="col-sm-6">
                    <div className="card card-body text-dark my-4">
                            <h3 className="text-center my-3">Dietary Restrictions</h3>
                            <form action={`${API_URL}/settings/dietaryrestrictions`} method="POST">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value={0} id="diet-glutenfree" />
                                    <label className="form-check-label" htmlFor="diet-kosher">Gluten Free</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value={1} id="diet-halal" />
                                    <label className="form-check-label" htmlFor="diet-halal">Halal</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value={2} id="diet-kosher" />
                                    <label className="form-check-label" htmlFor="diet-kosher">Kosher</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value={3} id="diet-lactoseintolerant" />
                                    <label className="form-check-label" htmlFor="diet-lactoseintolerant">Lactose Intolerant</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value={4} id="diet-lowsodium" />
                                    <label className="form-check-label" htmlFor="diet-lowsodium">Low Sodium</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value={5} id="diet-lowsugar" />
                                    <label className="form-check-label" htmlFor="diet-lowsugar">Low Sugar</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value={6} id="diet-vegan" />
                                    <label className="form-check-label" htmlFor="diet-vegan">Vegan</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value={7} id="diet-vegeterian" />
                                    <label className="form-check-label" htmlFor="diet-vegeterian">Vegeterian</label>
                                </div>
                                <input type="submit" value="Update Dietary Restrictions" className="btn btn-darken btn-green btn-block mt-3" />
                            </form>
                        </div>
                        <div className="card card-body text-dark my-4">
                            <h2 className="text-center my-3">Avatar</h2>
                            <div className="avatar-preview mx-auto my-4">
                                <img src="/assets/img/misc/burger_pfp.png" alt="Default burger avatar" className="avatar-preview profile-picture rounded tw-h-[256px]" id="user-avatar-preview" />
                            </div>
                            <form action={`${API_URL}/settings/updateavatar`} method="POST" id="account-avatar-form">
                                <div className="form-group">
                                    <label htmlFor="profile-picture" className="form-label">Profile Avatar URL</label>
                                    <input type="text" id="display-avatar" name="display-avatar" className="form-control" placeholder="Avatar Image URL" maxLength={1000} />
                                    <span className="form-text text-dark">(Example: <a href="/assets/img/misc/burger_pfp.png">https://slaytur.warzon.io/assets/img/misc/burger_pfp.png</a>)</span>
                                </div>
                                <input type="submit" name="account-avatar-form" id="account-update-pfp" value="Update Profile Picture" className="btn btn-darken btn-green btn-block mt-3" />
                            </form>
                        </div>
                    </div>
                    {/* <div className="col">
                        <div className="card card-body text-dark">
                            <a type="button" href={`${API_URL}/auth/delete`} className="btn btn-danger mt-2 disabled">Delete Account</a>
                        </div>
                    </div> */}
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
