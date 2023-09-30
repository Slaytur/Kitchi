import React from 'react';
import '../assets/scss/pages/register.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
declare const API_URL: string;
/**
 * The register page.
 */
class Forum extends React.Component<Record<string, never>, { isLoggedIn: boolean }> {
    render = (): React.ReactNode => {
        return (
            <main className="tw-text-center forum">
                <div className="body tw-mx-auto tw-top-30">
                    <h2 className="tw-text-4xl tw-mt-5">Forums</h2>
                    <div className="message-send tw-p-10">
                        <form action={`${API_URL}/forum/post`} className="tw-bg-[#93d46562] tw-p-4 form-control tw-w-[400px] tw-mx-auto tw-border-2">
                            <div className="tw-mb-3">
                                <label htmlFor="create-post" className="post-label tw-mx-auto">Talk to the world</label><br></br>
                                <input type="message" name="post-message" id="post-email" className="post-control tw-w-90 tw-mx-auto" placeholder="I loved the cavier truffle pasta!" required />
                                <a href="/forum/post" className="btn btn-lg btn-green btn-sign-in tw-ms-1">
                                    <FontAwesomeIcon icon={faSignInAlt} />
                                </a>
                            </div>
                        </form>

                        <div className="past-comments tw-p-15 tw-w-11/12 tw-mx-auto ">
                            <div className="comment tw-bg-white tw-border-2 tw-border-r-4  ">
                                <img className="tw-float-left tw-pl-5" src="client\src\assets\img\socials\discord.svg"></img>
                                <label htmlFor="username" className="post-label tw-float-left tw-pl-3">placeholdname</label><br></br>
                                <p>get text from database</p><br></br>
                                <img src="client\src\assets\img\socials\discord.svg"></img>
                                <p>likes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    };
}

export default Forum;
