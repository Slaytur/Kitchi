import React from 'react';

import '../assets/scss/pages/register.scss';

// declare const CLIENT_ID: string;
declare const API_URL: string;
/**
 * The register page.
 */
class Register extends React.Component<Record<string, never>, { isLoggedIn: boolean }> {
    render = (): React.ReactNode => {
        return (
            <main className="tw-text-center pg-home">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#87c6fa" fillOpacity="1" d="M0,320L60,298.7C120,277,240,235,360,181.3C480,128,600,64,720,85.3C840,107,960,213,1080,234.7C1200,256,1320,192,1380,160L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
                <div className="personalinformation">
                    <h2 className="tw-text-4xl">Tell us about yourself!</h2>
                    <div className="tw-mt-5 tw-w-80%">
                        <div className="rcard tw-bg-white tw-4 tw-border-r-10 tw-border-2 tw-m-5">
                            <h5 className="card-title tw-text-2xl tw-font-bold">What is your skill level?</h5>
                            <form action={`${API_URL}/auth/register`} className="cardinput tw-text-left tw-bg-[#5d96f0] tw-p-4 form-control tw-w-[fit-content] tw-border-none">
                                <div className="registerforms">
                                    <label htmlFor="level">Level (beginner to experienced):</label><br></br>
                                    <input className="slider" type="range"name="level" min="0" max="2"></input>
                                </div>
                                <input className="submitbutton tw-bg-white" type="submit" value="Submit"></input>
                            </form>
                        </div>
                        <div className="rcard tw-bg-white tw-4 tw-border-r-10 tw-border-2 tw-m-5">
                            <h5 className="card-title tw-text-2xl tw-font-bold">Dietary Restrictions?</h5>
                            <form action={`${API_URL}/auth/register`} className="cardinput">
                                <div className="registerforms">
                                    <label htmlFor="diet">Vegan</label>
                                    <input className="diet" type="checkbox"></input><br></br>
                                    <label htmlFor="diet">Vegetarian</label>
                                    <input className="diet" type="checkbox"></input><br></br>
                                    <label htmlFor="diet">Halal</label>
                                    <input className="diet" type="checkbox"></input><br></br>
                                    <label htmlFor="diet">Kosher</label>
                                    <input className="diet" type="checkbox"></input><br></br>
                                    <label htmlFor="diet">Gluten Free</label>
                                    <input className="diet" type="checkbox"></input><br></br>
                                    <label htmlFor="diet">Lactose Intolerant</label>
                                    <input className="diet" type="checkbox"></input><br></br>
                                    <label htmlFor="diet">Low Sugar</label>
                                    <input className="diet" type="checkbox"></input><br></br>
                                    <label htmlFor="diet">Low Sodium</label>
                                    <input className="diet" type="checkbox"></input><br></br>
                                </div>
                                <input className="submitbutton tw-bg-white" type="submit" value="Submit"></input>
                            </form>
                        </div>
                        <div className="rcard tw-bg-white tw-4 tw-border-r-10 tw-border-2 tw-m-5">
                            <h5 className="card-title tw-text-2xl tw-font-bold">What food do you like?</h5>
                            <form action={`${API_URL}/auth/register`} className="cardinput tw-text-left tw-bg-[#5d96f0] tw-p-4 form-control tw-w-[fit-content] tw-border-none">
                                <div className="registerforms">
                                    <label htmlFor="interests">American</label>
                                    <input className="interests" type="checkbox"></input><br></br>
                                    <label htmlFor="interests">Asian</label>
                                    <input className="interests" type="checkbox"></input><br></br>
                                    <label htmlFor="interests">Italian</label>
                                    <input className="interests" type="checkbox"></input><br></br>
                                    <label htmlFor="interests">French</label>
                                    <input className="interests" type="checkbox"></input><br></br>
                                    <label htmlFor="interests">Canadian</label>
                                    <input className="interests" type="checkbox"></input><br></br>
                                    <label htmlFor="interests">Cajun</label>
                                    <input className="interests" type="checkbox"></input><br></br>
                                    <label htmlFor="interests">Spicy</label>
                                    <input className="interests" type="checkbox"></input><br></br>
                                </div>
                                <input className="submitbutton tw-bg-white" type="submit" value="Submit"></input>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        );
    };
}

export default Register;
