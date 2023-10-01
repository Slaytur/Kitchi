import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

import LogoImg from '../assets/img/logos/kitchi.png';

import Tomato from '../assets/img/icons/tomato.png';
import Recipes from '../assets/img/icons/recipes.png';
import Cookbook from '../assets/img/icons/cookbook.png';

import '../assets/scss/pages/home.scss';

class Home extends React.Component {
    render = (): React.ReactNode => (
        <main className="tw-text-center pg-home">
            <div className="splash tw-flex tw-pt-8">
                <div className="container tw-justify-around">
                    <div className="splash-left">
                        <div>
                            <h1 className="tw-text-9xl">Kitchi</h1>
                            <p className="desc tw-my-4">For all your cooking needs.</p>
                            <div className="tw-text-white">
                                <a href="/auth/signup" className="btn btn-lg btn-darken btn-green btn-sign-in tw-me-1">
                                    <span className="me-1">Sign Up</span>
                                    <FontAwesomeIcon icon={faSignInAlt} />
                                </a>
                                <a href="/auth/login" className="btn btn-lg btn-darken btn-green btn-sign-in tw-ms-1">
                                    <span className="me-1">Login</span>
                                    <FontAwesomeIcon icon={faSignInAlt} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="splash-left tw-float-right">
                        <img className="tw-w-[400px] tw-h-full" src={LogoImg} />
                    </div>
                </div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 80 1440 250"><path fill="#B2D481" fillOpacity="1" d="M0,320L60,298.7C120,277,240,235,360,181.3C480,128,600,64,720,85.3C840,107,960,213,1080,234.7C1200,256,1320,192,1380,160L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>

            <div className="virtual-sous-chef-intro">
                <h2 className="tw-text-4xl">Your Virtual Sous Chef</h2>
                <div className="tw-mt-10 tw-flex tw-justify-evenly container">
                    <div>
                        <img src={Tomato} alt="A tomato" className="tw-h-[256px]" />
                        <h5 className="tw-text-1xl tw-font-bold tw-mt-4">AI-Powered Food Recognition</h5>
                    </div>
                    <div>
                        <img src={Recipes} alt="A cooking recipe" className="tw-h-[256px]" />
                        <h5 className="tw-text-1xl tw-font-bold tw-mt-4">Intelligent Recipe Recommender</h5>
                    </div>
                    <div>
                        <img src={Cookbook} alt="A magical cookbook" className="tw-h-[256px]" />
                        <h5 className="tw-text-1xl tw-font-bold tw-mt-4">Personalized Cookbook</h5>
                    </div>
                </div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 315"><path fill="#B2D481" fillOpacity="1" d="M0,96L34.3,96C68.6,96,137,96,206,106.7C274.3,117,343,139,411,128C480,117,549,75,617,74.7C685.7,75,754,117,823,160C891.4,203,960,245,1029,256C1097.1,267,1166,245,1234,208C1302.9,171,1371,117,1406,90.7L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
            <div className="tw-flex tw-bg-lightgreen">
                <hr className="tw-text-white" />
                <div className="tw-w-100 tw-h-[170px] tw-w-[300px] tw-border-none tw-mx-auto">
                    <div className="card tw-position-absolute">
                        <div className="card-body tw-pb-2">
                            <h5 className="card-title tw-text-2xl tw-font-bold">170K+</h5>
                            <p>different recipes</p>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        </main>
    );

    componentDidMount = (): void => {
        // $()
    };
}

export default Home;
