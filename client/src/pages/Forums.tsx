import React from 'react';
import '../assets/scss/pages/register.scss';
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
                        <form action={`${API_URL}/forum/post`} className="tw-text-left tw-bg-[#93d46562] tw-p-4 form-control tw-w-[400px] tw-mx-auto tw-border-2">
                            <div className="tw-mb-3">
                                <label htmlFor="create-post" className="post-label tx-text-center">Talk to the world</label><br></br>
                                <input type="message" name="post-message" id="post-email" className="post-control tw-w-fit tx-mx-auto" placeholder="I loved the cavier truffle pasta!" required />
                            </div>
                        </form>

                        <div className="past-comments tw-float-left tw-mx-auto">
                            <div className="comment tw-bg-white">
                                <img src="client\src\assets\img\socials\discord.svg"></img>
                                <p>username</p>
                                <p>get text from database</p>
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
