import React from 'react';

import axios from 'axios';

import "../../assets/scss/pages/dashboard.scss";

declare const API_URL: string;

interface RecommendedCard {
    title: string
    description: string

    id: string
}

interface CookbookEntry {
    name: string
    id: string
    description: string
}

class Dashboard extends React.Component<Record<never, never>, { recommendedCards: RecommendedCard[], cookbook: CookbookEntry[], ingredients: string[] }> {
    constructor (props: Record<never, never>) {
        super(props);

        this.state = {
            recommendedCards: [],
            cookbook: [],
            ingredients: []
        };
    }

    render = (): React.ReactNode => (
        <main className="tw-text-center">
            <div className="tw-px-[10%] tw-h-fit tw-bg-[#ffffff]">
                <div className="tw-h-full tw-w-full tw-bg-white tw-p-8 tw-text-left">
                    <h1 className="tw-w-full tw-font-bold tw-mt-10 tw-pl-1 tw-text-[40px]">
                        Recommended
                    </h1>
                    <div className="tw-h-[2px] tw-w-full -tw-mt-2 tw-mb-3 tw-mx-2 tw-opacity-30 tw-bg-offblack"></div>

                    <div className="tw-grid tw-gap-4 tw-grid-flow-col-dense tw-overflow-auto tw-auto-cols-max tw-sm:grid-flow-row">
                        {this.state.recommendedCards.map((x, i) => (
                            <div key={`recommended-recipe-${i}`} className="card tw-p-3 tw-flow-root">
                                <h1 className="tw-text-[24px]">{x.title}</h1>
                                <p className="tw-mb-60">{x.description}</p>
                                <button className=" tw-w-fit tw-px-2 tw-bg-offwhite tw-py-1 tw-rounded-full tw-float-right">Add to Cookbook</button>
                            </div>
                        ))}
                    </div>

                    <div className="tw-h-[2px] tw-w-1/2 tw-mx-auto -tw-mt-2 tw-mb-3 tw-opacity-30 tw-bg-offblack"></div>

                    {/* Cookbook */}
                    <h1 className="tw-w-full tw-font-bold tw-mt-10 tw-pl-1 tw-text-[40px]">Cookbook</h1>
                    <div className=" tw-grid-cols-1 tw-grid shadow tw-max-h-48 tw-gap-y-2 tw-p-4">
                        {this.state.cookbook.map((x, i) => (
                            <button key={`cookbook-entry-${i}`} className="tw-flex tw-w-full tw-rounded-full tw-align-middle tw-px-8 tw-border-none tw-border-[2px] tw-border-[#2828289d]" onClick={(() => window.open(`/recipes/${x.id}`))}>
                                <p className="tw-font-bold my-auto">{x.name}</p>
                                <p className="my-auto tw-ml-3">{x.description}</p>
                            </button>
                        ))}
                    </div>

                    {/* Pantry */}
                    <h1 className="tw-w-full tw-font-bold tw-mt-10 tw-pl-1 tw-text-[40px]">Pantry</h1>
                    <div className="tw-flex tw-w-full">
                        <div className=" tw-w-full tw-flex tw-flex-wrap tw-h-min tw-whitespace-nowrap tw-overflow-y-scroll tw-scroll-smooth shadow tw-py-2 tw-max-h-48 tw-gap-y-2">
                            {this.state.ingredients.map((x, i) => (<li key={`ingredient-${i}`} className="ingredient">{x}</li>))}
                        </div>
                        <div className=" tw-p-4">
                            <p className="tw-w-full tw-text-center tw-mr-3 tw-text-xl">
                                Add
                            </p>
                            <input type="text"></input>
                            <div className="tw-flex tw-gap-x-2 tw-mx-auto tw-my-3 tw-whitespace-nowrap tw-w-full">
                                <button className="tw-p-1 tw-rounded-xl tw-bg-offwhite tw-w-full">
                                    Add
                                </button>
                                <div className="tw-w-full tw-h-fit"></div>
                                <button className="tw-p-1 tw-rounded-xl tw-bg-offwhite ">
                                    Upload Image
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );

    componentDidMount = async (): Promise<void> => {
        void axios
            .get(`${API_URL}/auth/authenticated`, { withCredentials: true })
            .then((res) => {
                if (res.data?.authenticated !== true)
                    window.location.href = `${window.location.protocol}//${window.location.host}/auth/login`;
            })
            .catch(() =>
                console.error(
                    `[ACCOUNT SERVER]: Could not determine login status.`
                )
            );

        void axios.get(`${API_URL}/account/dashboarddata`, { withCredentials: true }).then(res => {
            this.setState({
                recommendedCards: res.data.recommendedCards ?? [],
                cookbook: res.data.cookbook ?? [],
                ingredients: res.data.ingredients ?? []
            });
        }).catch(() => console.error(`[ACCOUNT SERVER]: Could not get recommended data.`));
    };
}

export default Dashboard;
