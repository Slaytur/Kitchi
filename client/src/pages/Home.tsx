import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import '../assets/scss/pages/home.scss';

declare const CLIENT_ID: string;
declare const API_URL: string;

class Home extends React.Component<Record<string, never>, { isLoggedIn: boolean }> {
    render = (): React.ReactNode => (
        <main className="tw-text-center pg-home">
            <div className="splash tw-flex tw-p-8">
                <div className="container">
                    <div className="splash-left tw-float-left">
                        <h1 className="tw-text-6xl">KitchenWhizard</h1>
                        <p className="desc tw-my-4">For all your cooking needs.</p>
                        <a href={`https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${API_URL}/auth/discord&response_type=code&scope=identify%20email`} className="btn btn-lg btn-primary btn-sign-in">
                            <span className="me-1">Sign In</span>
                            <FontAwesomeIcon icon={faSignInAlt} />
                        </a>
                    </div>
                    <div className="splash-left tw-float-right">
                        <h2 className="tw-text-4xl tw-mb-4">Register</h2>
                        <form action={`${API_URL}/auth/register`} className="tw-text-left tw-bg-[#5d96f0] tw-p-4 form-control tw-w-[400px] tw-border-none">
                            <div className="tw-mb-3">
                                <label htmlFor="register-email" className="form-label">Email address</label>
                                <input type="email" name="register-email" id="register-email" className="form-control" placeholder="mail@example.com" required />
                            </div>
                            <div className="tw-mb-3">
                                <label htmlFor="register-username" className="form-label">Username</label>
                                <input type="text" name="register-username" id="register-username" className="form-control" placeholder="Choose a username..." required />
                            </div>
                            <div className="tw-mb-3">
                                <label htmlFor="register-password" className="form-label">Password</label>
                                <input type="password" name="register-password" id="register-password" className="form-control" placeholder="Choose a password..." required />
                            </div>
                            <div className="tw-mb-3 form-check">
                                <input type="checkbox" name="register-terms-agree" id="register-terms-agree" className="form-check-input" required />
                                <label htmlFor="register-terms-agree" className="form-check-label">By creating an account, I agree to KitchenWhizard&apos;s <a href="/tos">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>.</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Register</button>
                        </form>
                    </div>
                </div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#87c6fa" fillOpacity="1" d="M0,320L60,298.7C120,277,240,235,360,181.3C480,128,600,64,720,85.3C840,107,960,213,1080,234.7C1200,256,1320,192,1380,160L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
            <br />

            <div className="virtual-sous-chef-intro">
                <h2 className="tw-text-4xl">Your Virtual Sous Chef</h2>
                <div className="tw-mt-5 container">
                    <div className="card">
                        <div className="card-body tw-bg-transparent">
                            <h5 className="card-title tw-text-2xl tw-font-bold">Features</h5>
                            <p>Bacon ipsum dolor amet kielbasa bresaola ribeye cupim. Ham pork chop strip steak, ground round hamburger shank kevin alcatra jowl buffalo chislic. Sausage bresaola rump, spare ribs shoulder alcatra salami drumstick pork chop pig burgdoggen filet mignon. Bacon boudin shank ham hock bresaola turkey kielbasa landjaeger corned beef brisket beef ribs capicola. Turkey chicken tongue pig pork loin alcatra pastrami tri-tip ground round. Picanha shankle shank salami pork belly meatball.</p>
                            <br />
                            <a href="#" className="btn btn-primary">Buy Me ($29.99 USD)</a>
                        </div>
                    </div>
                    <div className="card tw-mx-5">
                        <div className="card-body tw-bg-transparent">
                            <h5 className="card-title tw-text-2xl tw-font-bold">Features</h5>
                            <p>Bacon ipsum dolor amet kielbasa bresaola ribeye cupim. Ham pork chop strip steak, ground round hamburger shank kevin alcatra jowl buffalo chislic. Sausage bresaola rump, spare ribs shoulder alcatra salami drumstick pork chop pig burgdoggen filet mignon. Bacon boudin shank ham hock bresaola turkey kielbasa landjaeger corned beef brisket beef ribs capicola. Turkey chicken tongue pig pork loin alcatra pastrami tri-tip ground round. Picanha shankle shank salami pork belly meatball.</p>
                            <br />
                            <a href="#" className="btn btn-primary">Buy Me ($29.99 USD)</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body tw-bg-transparent">
                            <h5 className="card-title tw-text-2xl tw-font-bold">Features</h5>
                            <p>Bacon ipsum dolor amet kielbasa bresaola ribeye cupim. Ham pork chop strip steak, ground round hamburger shank kevin alcatra jowl buffalo chislic. Sausage bresaola rump, spare ribs shoulder alcatra salami drumstick pork chop pig burgdoggen filet mignon. Bacon boudin shank ham hock bresaola turkey kielbasa landjaeger corned beef brisket beef ribs capicola. Turkey chicken tongue pig pork loin alcatra pastrami tri-tip ground round. Picanha shankle shank salami pork belly meatball.</p>
                            <br />
                            <a href="#" className="btn btn-primary">Buy Me ($29.99 USD)</a>
                        </div>
                    </div>
                </div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#87c6fa" fillOpacity="1" d="M0,96L34.3,96C68.6,96,137,96,206,106.7C274.3,117,343,139,411,128C480,117,549,75,617,74.7C685.7,75,754,117,823,160C891.4,203,960,245,1029,256C1097.1,267,1166,245,1234,208C1302.9,171,1371,117,1406,90.7L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
            {/* <div className="tw-w-100 tw-h-[170px]"></div>
            <div className="card">
                <div className="card-body tw-bg-transparent">
                    <h5 className="card-title tw-text-2xl tw-font-bold">Features</h5>
                    <p>Bacon ipsum dolor amet kielbasa bresaola ribeye cupim. Ham pork chop strip steak, ground round hamburger shank kevin alcatra jowl buffalo chislic. Sausage bresaola rump, spare ribs shoulder alcatra salami drumstick pork chop pig burgdoggen filet mignon. Bacon boudin shank ham hock bresaola turkey kielbasa landjaeger corned beef brisket beef ribs capicola. Turkey chicken tongue pig pork loin alcatra pastrami tri-tip ground round. Picanha shankle shank salami pork belly meatball.</p>
                    <br />
                    <a href="#" className="btn btn-primary">Buy Me ($29.99 USD)</a>
                </div>
            </div> */}
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#87c6fa" fillOpacity="1" d="M0,288L30,266.7C60,245,120,203,180,165.3C240,128,300,96,360,106.7C420,117,480,171,540,213.3C600,256,660,288,720,298.7C780,309,840,299,900,277.3C960,256,1020,224,1080,197.3C1140,171,1200,149,1260,144C1320,139,1380,149,1410,154.7L1440,160L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>             */}
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#87c6fa" fill-opacity="1" d="M0,64L40,106.7C80,149,160,235,240,272C320,309,400,299,480,256C560,213,640,139,720,106.7C800,75,880,85,960,106.7C1040,128,1120,160,1200,192C1280,224,1360,256,1400,272L1440,288L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg> */}
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#87c6fa" fill-opacity="1" d="M0,64L40,106.7C80,149,160,235,240,272C320,309,400,299,480,256C560,213,640,139,720,106.7C800,75,880,85,960,106.7C1040,128,1120,160,1200,192C1280,224,1360,256,1400,272L1440,288L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg> */}
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#87c6fa" fill-opacity="1" d="M0,64L40,106.7C80,149,160,235,240,272C320,309,400,299,480,256C560,213,640,139,720,106.7C800,75,880,85,960,106.7C1040,128,1120,160,1200,192C1280,224,1360,256,1400,272L1440,288L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#87c6fa" fillOpacity="1" d="M0,192L34.3,170.7C68.6,149,137,107,206,85.3C274.3,64,343,64,411,96C480,128,549,192,617,192C685.7,192,754,128,823,85.3C891.4,43,960,21,1029,48C1097.1,75,1166,149,1234,181.3C1302.9,213,1371,203,1406,197.3L1440,192L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg> */}
        </main>
    );
}

export default Home;
