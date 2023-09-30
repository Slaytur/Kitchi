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
                    <div className="message-send tw-p-6">
                        <form action={`${API_URL}/forum/post`} className="tw-bg-[#93d46562] tw-p-4 tw-w-11/12 form-control tw-mx-auto tw-border-[#32690a62] tw-border-2">
                            <div className="tw-mb-3">
                                <label htmlFor="create-post" className="post-label tw-mx-auto">Talk to the world</label><br></br>
                                <textarea name="post-message" id="post-email" className="post-control tw-w-11/12 tw-mx-auto tw-resize-none tw-h-36" placeholder="I loved the cavier truffle pasta!" required />
                                <a href="/forum/post" className="btn btn-lg btn-green btn-sign-in tw-p-1 tw-ms-1">
                                    <FontAwesomeIcon icon={faSignInAlt} />
                                </a>
                            </div>
                        </form>

                        <div className="past-comments tw-p-15 tw-mt-20 tw-w-11/12 tw-mx-auto tw-border-solid tw-rounded-md tw-border-[#4f4f4f94]">
                            <div className="comment tw-bg-white tw-border-t-2 tw-border-b-0 tw-border-r-0 tw-border-solid tw-border-[#32690a62]">
                                <img className="tw-float-left tw-pl-5 tw-pt-1" src="client\src\assets\img\socials\discord.svg"></img>
                                <label htmlFor="username" className="post-label tw-float-left tw-pl-2">placeholdname</label><br></br>
                                <label htmlFor="message" className="post-label tw-float-left tw-pl-3">get message from server</label><br></br>
                                <img className="tw-float-left tw-pl-5 tw-pt-1"src="client\src\assets\img\socials\discord.svg"></img>
                                <label htmlFor="likes" className="post-label tw-float-left tw-pl-3">likes</label><br></br>
                            </div>
                            <div className="comment tw-bg-white tw-border-t-2 tw-border-b-0 tw-border-r-0 tw-border-solid tw-border-[#32690a62]">
                                <img className="tw-float-left tw-pl-5 tw-pt-1" src="client\src\assets\img\socials\discord.svg"></img>
                                <label htmlFor="username" className="post-label tw-float-left tw-pl-2">placeholdname</label><br></br>
                                <label htmlFor="message" className="post-label tw-float-left tw-pl-3">get message from server</label><br></br>
                                <img className="tw-float-left tw-pl-5 tw-pt-1"src="client\src\assets\img\socials\discord.svg"></img>
                                <label htmlFor="likes" className="post-label tw-float-left tw-pl-3">likes</label><br></br>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    };
}

export default Forum;
