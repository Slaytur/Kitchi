import React from 'react';
import '../assets/scss/pages/register.scss';
// declare const API_URL: string;

class Register extends React.Component<Record<string, never>, { isLoggedIn: boolean }> {
    render = (): React.ReactNode => {
        return (
            <main className="tw-text-center pg-home">
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#87c6fa" fillOpacity="1" d="M0,320L60,298.7C120,277,240,235,360,181.3C480,128,600,64,720,85.3C840,107,960,213,1080,234.7C1200,256,1320,192,1380,160L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
                <div className="personal-information">
                    <h2 className="tw-text-4xl">Tell us about yourself!</h2>
                    <div className="tw-mt-5 tw-w-80%">
                        <div className="rcard tw-bg-white tw-4 tw-border-r-10 tw-border-2 tw-m-5">
                            <h5 className="card-title tw-text-2xl tw-font-bold">What is your skill level?</h5>
                            <form action={`${API_URL}/auth/register`} className="card-input tw-text-left tw-bg-[#5d96f0] tw-p-4 form-control tw-w-[fit-content] tw-border-none">
                                <div className="register-forms">
                                    <label htmlFor="level">Level (beginner to experienced):</label><br></br>
                                    <input className="slider" type="range"name="level" min="0" max="2"></input>
                                </div>
                                <input className="submit-button tw-bg-white" type="submit" value="Submit"></input>
                            </form>
                        </div>
                        <div className="rcard tw-bg-white tw-4 tw-border-r-10 tw-border-2 tw-m-5">
                            <h5 className="card-title tw-text-2xl tw-font-bold">Dietary Restrictions?</h5>
                            <form action={`${API_URL}/auth/register`} className="card-input">
                                <div className="register-forms">
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
                                <input className="submit-button tw-bg-white" type="submit" value="Submit"></input>
                            </form>
                        </div>
                        <div className="rcard tw-bg-white tw-4 tw-border-r-10 tw-border-2 tw-m-5">
                            <h5 className="card-title tw-text-2xl tw-font-bold">What food do you like?</h5>
                            <form action={`${API_URL}/auth/register`} className="card-input tw-text-left tw-bg-[#5d96f0] tw-p-4 form-control tw-w-[fit-content] tw-border-none">
                                <div className="register-forms">
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
                                <input className="submit-button tw-bg-white" type="submit" value="Submit"></input>
                            </form>
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
            </div> */}

                {/* <div className="tw-flex">
                <div>
                    <h5 className="tw-text-4xl">Cook Smarter,<br />Dine Better</h5>
                    <p>Kitchi has you covered.</p>
                </div>
            </div> */}
            </main>
        );
    };

    componentDidMount = (): void => {
        $();
    };
}

export default Register;
