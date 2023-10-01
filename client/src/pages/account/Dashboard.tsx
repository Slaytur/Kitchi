import React from 'react';

import axios from 'axios';

import "../../assets/scss/pages/dashboard.scss";

declare const API_URL: string;

class Dashboard extends React.Component {
    render = (): React.ReactNode => (
        <main className="tw-text-center tw-flex tw-w-screen tw-h-fit">
            <div className=' tw-flex tw-pl-3 tw-h-full tw-w-min tw-left-0 tw-bg-offwhite'>
                <div className=' tw-items-center tw-pt-24 tw-w-full tw-text-lg '>
                    <p className='tw-bg-white tw-pr-3 tw-pl-2 leftrounded tw-py-1 tw-w-full'>Pantry</p>
                    <p className='tw-bg-white tw-pr-3 tw-pl-2 leftrounded tw-py-1 tw-whitespace-nowrap'>Cook Book</p>
                    <p className='tw-bg-white tw-pr-3 tw-pl-2 leftrounded tw-py-1'>Recipes</p>
                </div>
            </div>
            <div className="tw-mx-auto tw-h-full tw-w-full tw-bg-white text-center">
                <h1 className='tw-w-full tw-mt-10 '>Your Recipies</h1>
                <div className='tw-grid tw-gap-4 tw-grid-cols-3 tw-p-8'>
                    <div className='card tw-p-3'>
                        <h1>Recipie Card</h1>
                        <p className=' tw-mb-60'> Description </p>
                    </div>

                    <div className='card tw-p-3'>
                        <h1>Recipie Card</h1>
                        <p className=' tw-mb-60'> Description </p>
                    </div>
                    <div className='card tw-p-3'>
                        <h1>Recipie Card</h1>
                        <p className=' tw-mb-60'> Description </p>
                    </div>
                    <div className='card tw-p-3'>
                        <h1>Recipie Card</h1>
                        <p className=' tw-mb-60'> Description </p>
                    </div>

                </div>
            </div>
        </main>
    );

    componentDidMount = async (): Promise<void> => {
        void axios.get(`${API_URL}/auth/authenticated`, { withCredentials: true }).then(res => {
            if (res.data?.authenticated !== true) window.location.href = `${window.location.protocol}//${window.location.host}/auth/login`;
        }).catch(() => console.error(`[ACCOUNT SERVER]: Could not determine login status.`));
    };
}

export default Dashboard;
