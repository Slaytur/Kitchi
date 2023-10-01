import React from "react";
import axios from "axios";

import "../assets/scss/pages/recipe.scss";

declare const API_URL: string;

/**
 * The 404 page.
 */
class Recipe extends React.Component {
    render = (): React.ReactNode => (
        <main className="tw-text-center tw-px-[10%] tw-w-screen tw-h-fit tw-bg-[#FFFFFF]">
            <div className="tw-h-full tw-w-full tw-bg-white tw-p-8 tw-text-left">
                <h1 className="tw-w-full tw-font-bold tw-mt-10 tw-pl-1 tw-text-[40px]">
                    Community-Backed Recipes
                </h1>
                <div className="tw-h-[2px] tw-w-full -tw-mt-2 tw-mb-3 tw-mx-2 tw-opacity-30 tw-bg-offblack"></div>

                <div className="tw-grid tw-gap-4 tw-overflow-auto tw-grid-cols-2 tw-sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                    {/* Recipe Card 1 */}
                    <div className="card tw-p-3 tw-flow-root">
                        <h1 className="tw-text-[24px]">Recipe Card</h1>
                        <p className="tw-mb-60">Description</p>
                        <button className="tw-w-fit tw-px-2 tw-bg-offwhite tw-py-1 tw-rounded-full tw-float-right">
                            Add to Cookbook
                        </button>
                    </div>

                    {/* Recipe Card 2 */}
                    <div className="card tw-p-3 tw-flow-root">
                        <h1 className="tw-text-[24px]">Recipe Card</h1>
                        <p className="tw-mb-60">Description</p>
                        <button className="tw-w-fit tw-px-2 tw-bg-offwhite tw-py-1 tw-rounded-full tw-float-right">
                            Add to Cookbook
                        </button>
                    </div>
                    {/* Recipe Card 3 */}
                    <div className="card tw-p-3 tw-flow-root">
                        <h1 className="tw-text-[24px]">Recipe Card</h1>
                        <p className="tw-mb-60">Description</p>
                        <button className="tw-w-fit tw-px-2 tw-bg-offwhite tw-py-1 tw-rounded-full tw-float-right">
                            Add to Cookbook
                        </button>
                    </div>

                    {/* Recipe Card 4 */}
                    <div className="card tw-p-3 tw-flow-root">
                        <h1 className="tw-text-[24px]">Recipe Card</h1>
                        <p className="tw-mb-60">Description</p>
                        <button className="tw-w-fit tw-px-2 tw-bg-offwhite tw-py-1 tw-rounded-full tw-float-right">
                            Add to Cookbook
                        </button>
                    </div>

                    {/* Recipe Card 5 */}
                    <div className="card tw-p-3 tw-flow-root">
                        <h1 className="tw-text-[24px]">Recipe Card</h1>
                        <p className="tw-mb-60">Description</p>
                        <button className="tw-w-fit tw-px-2 tw-bg-offwhite tw-py-1 tw-rounded-full tw-float-right">
                            Add to Cookbook
                        </button>
                    </div>

                    {/* Recipe Card 6 */}
                    <div className="card tw-p-3 tw-flow-root">
                        <h1 className="tw-text-[24px]">Recipe Card</h1>
                        <p className="tw-mb-60">Description</p>
                        <button className="tw-w-fit tw-px-2 tw-bg-offwhite tw-py-1 tw-rounded-full tw-float-right">
                            Add to Cookbook
                        </button>
                    </div>

                    {/* Recipe Card 7 */}
                    <div className="card tw-p-3 tw-flow-root">
                        <h1 className="tw-text-[24px]">Recipe Card</h1>
                        <p className="tw-mb-60">Description</p>
                        <button className="tw-w-fit tw-px-2 tw-bg-offwhite tw-py-1 tw-rounded-full tw-float-right">
                            Add to Cookbook
                        </button>
                    </div>

                    {/* Recipe Card 8 */}
                    <div className="card tw-p-3 tw-flow-root">
                        <h1 className="tw-text-[24px]">Recipe Card</h1>
                        <p className="tw-mb-60">Description</p>
                        <button className="tw-w-fit tw-px-2 tw-bg-offwhite tw-py-1 tw-rounded-full tw-float-right">
                            Add to Cookbook
                        </button>
                    </div>

                    {/* Recipe Card 9 */}
                    <div className="card tw-p-3 tw-flow-root">
                        <h1 className="tw-text-[24px]">Recipe Card</h1>
                        <p className="tw-mb-60">Description</p>
                        <button className="tw-w-fit tw-px-2 tw-bg-offwhite tw-py-1 tw-rounded-full tw-float-right">
                            Add to Cookbook
                        </button>
                    </div>

                    {/* Recipe Card 10 */}
                    <div className="card tw-p-3 tw-flow-root">
                        <h1 className="tw-text-[24px]">Recipe Card</h1>
                        <p className="tw-mb-60">Description</p>
                        <button className="tw-w-fit tw-px-2 tw-bg-offwhite tw-py-1 tw-rounded-full tw-float-right">
                            Add to Cookbook
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );

    componentDidMount = (): void => {
        void axios
            .get(`${API_URL}/api/${window.location.pathname}`)
            .then((res) => {
                return res.data;
            })
            .catch(() =>
                console.error(`[ACCOUNT SERVER]: Could not get recipe.`)
            );
    };
}

export default Recipe;
