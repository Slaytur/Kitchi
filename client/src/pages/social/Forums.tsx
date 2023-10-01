import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faPlus } from "@fortawesome/free-solid-svg-icons";

import Heart from "../../assets/img/icons/heart.png";
import Like from "../../assets/img/icons/cookin.png";

import "../../assets/scss/pages/forums.scss";

declare const API_URL: string;
/**
 * The register page.
 */
class Forum extends React.Component<Record<string, never>, { isLoggedIn: boolean }> {
    render = (): React.ReactNode => {
        return (
            <main className="tw-text-center forum">
                <div className="body tw-mx-auto tw-top-30">
                    <h1 className="tw-text-6xl tw-mt-5">Forums</h1>
                    <div className="message-send tw-p-5">
                        <form
                            action={`${API_URL}/forum/post`}
                            className="tw-bg-lightgreen tw-p-4 tw-w-11/12 form-control tw-mx-auto tw-border-[#58991F] tw-border-2"
                        >
                            <label
                                htmlFor="create-post"
                                className="post-label tw-mx-auto"
                            >
                                <h2>Talk To The World</h2>
                            </label>
                            <div className="tw-mb-3">
                                <br></br>
                                <textarea
                                    name="post-message"
                                    id="post-email"
                                    className="post-control tw-p-5 tw-w-[98%] tw-mx-auto tw-bg-[#e8f3df] tw-border-[#9b9b9b] tw-resize-none tw-h-36"
                                    placeholder="Type your message here!"
                                    required
                                />
                                <div className="tw-w-[98%] tw-bg-[#ecf5e5] tw-py-1 tw-h-11 tw-border-[1px] tw-border-[#9b9b9b]  tw-border-solid tw-mx-auto">
                                    <a
                                        title="addimg"
                                        href=""
                                        className="btn btn-lg btn-green btn-sign-in tw-py-0 tw-cursor-pointer tw-float-left tw-px-[5px] tw-ml-2"
                                    >
                                        <FontAwesomeIcon className="" icon={faPlus} />
                                        <label className="tw-text-[1rem] tw-inline"> image</label>
                                    </a>
                                    <a
                                        title="signin"
                                        href="/forum/post"
                                        className="btn btn-lg btn-green btn-sign-in tw-py-0 tw-cursor-pointer tw-float-right tw-px-1 tw-mr-3"
                                    >
                                        <FontAwesomeIcon className="" icon={faPaperPlane} />
                                    </a>
                                </div>
                            </div>
                        </form>

                        <div className="past-comments tw-p-15 tw-grid tw-auto-rows-auto tw-mt-20 tw-w-11/12 tw-mx-auto tw-border-solid tw-rounded-md tw-border-[#4f4f4f94]">
                            <div className="comment">
                                <div>
                                    <img title="pfp" className="pfp" src={Heart}></img>
                                    <label htmlFor="username" className="username">
                                        placeholdname
                                    </label>
                                </div>
                                <div>
                                    <label htmlFor="message" className="message">
                                        get message from server
                                    </label>
                                </div>
                                <div>
                                    <img title="likes" className="likes" src={Like}></img>
                                    <label htmlFor="likes" className="likesl">
                                        likes
                                    </label>
                                </div>
                            </div>
                            <div className="comment">
                                <div>
                                    <img title="pfp" className="pfp" src={Heart}></img>
                                    <label htmlFor="username" className="username">
                                        placeholdname
                                    </label>
                                </div>
                                <div>
                                    <label htmlFor="message" className="message">
                                        get message from server
                                    </label>
                                </div>
                                <div>
                                    <img title="likes" className="likes" src={Like}></img>
                                    <label htmlFor="likes" className="likesl">
                                        likes
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    };
}

export default Forum;
