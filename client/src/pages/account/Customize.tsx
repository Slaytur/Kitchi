import React from 'react';

import axios from 'axios';

declare const API_URL: string;

class Customize extends React.Component {
    render = (): React.ReactNode => (
        <main className="pg-settings">
            <h1 className="text-center mt-5">Tell us a little bit about yourself!</h1>
            <div className="container tw-mb-5">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card card-body text-dark my-4">
                            <h3 className="text-center my-3">Skill Level</h3>
                            <form action={`${API_URL}/settings/skill-level`}>
                                <label htmlFor="skill-level">Level (Beginner to Experienced):</label>
                                <br />

                                <input type="range" name="skill-level" id="skill-level" className="form-range" min={0} max={2} />
                                <input type="submit" value="Update Skill Level" className="btn btn-primary btn-block mt-3" />
                            </form>
                        </div>
                        <div className="card card-body text-dark my-4">
                            <h3 className="text-center my-3">Dietary Restrictions</h3>
                            <form action={`${API_URL}/settings/dietary-restrictions`}>
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
                                <input type="submit" value="Update Dietary Restrictions" className="btn btn-primary btn-block mt-3" />
                            </form>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card card-body text-dark my-4">
                            <h3 className="text-center my-3">Food Interests</h3>
                            <form action={`${API_URL}/settings/food-interests`}>
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
                                <input type="submit" value="Update Food Interests" className="btn btn-primary btn-block mt-3" />
                            </form>
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

export default Customize;
