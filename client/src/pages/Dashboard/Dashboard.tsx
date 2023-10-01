import React from 'react';

import axios from 'axios';

import "../../assets/scss/pages/dashboard.scss";

declare const API_URL: string;

class Dashboard extends React.Component {
    render = (): React.ReactNode => (
        <main className="tw-text-center tw-px-[10%] tw-w-screen tw-h-fit tw-bg-[#FFFFFF]">
            <div className="tw-h-full tw-w-full tw-bg-white tw-p-8 tw-text-left">
                <h1 className='tw-w-full tw-font-bold tw-mt-10 tw-pl-1 tw-text-[40px]'>Recomended</h1>
                <div className='tw-h-[2px] tw-w-full -tw-mt-2 tw-mb-3 tw-mx-2 tw-opacity-30 tw-bg-offblack'></div>

                <div className='tw-grid tw-gap-4 tw-grid-cols-3'>
                    <div className='card tw-p-3 tw-flow-root'>
                        <h1 className='tw-text-[24px]'>Recipie Card</h1>
                        <p className=' tw-mb-60'> Description </p>
                        <button className=' tw-w-fit tw-px-2 tw-bg-offwhite tw-py-1 tw-rounded-full tw-float-right'>Add to Cookbook</button>
                    </div>
                    <div className='card tw-p-3 tw-flow-root'>
                        <h1 className='tw-text-[24px]'>Recipie Card</h1>
                        <p className=' tw-mb-60'> Description </p>
                        <button className=' tw-w-fit tw-px-2 tw-bg-offwhite tw-py-1 tw-rounded-full tw-float-right'>Add to Cookbook</button>
                    </div>
                    <div className='card tw-p-3 tw-flow-root'>
                        <h1 className='tw-text-[24px]'>Recipie Card</h1>
                        <p className=' tw-mb-60'> Description </p>
                        <button className=' tw-w-fit tw-px-2 tw-bg-offwhite tw-py-1 tw-rounded-full tw-float-right'>Add to Cookbook</button>
                    </div>
                    <div className='card tw-p-3 tw-flow-root'>
                        <h1 className='tw-text-[24px]'>Recipie Card</h1>
                        <p className=' tw-mb-60'> Description </p>
                        <button className=' tw-w-fit tw-px-2 tw-bg-offwhite tw-py-1 tw-rounded-full tw-float-right'>Add to Cookbook</button>
                    </div>
                    <div className='card tw-p-3 tw-flow-root'>
                        <h1 className='tw-text-[24px]'>Recipie Card</h1>
                        <p className=' tw-mb-60'> Description </p>
                        <button className=' tw-w-fit tw-px-2 tw-bg-offwhite tw-py-1 tw-rounded-full tw-float-right'>Add to Cookbook</button>
                    </div>
                    <div className='card tw-p-3 tw-flow-root'>
                        <h1 className='tw-text-[24px]'>Recipie Card</h1>
                        <p className=' tw-mb-60'> Description </p>
                        <button className=' tw-w-fit tw-px-2 tw-bg-offwhite tw-py-1 tw-rounded-full tw-float-right'>Add to Cookbook</button>
                    </div>

                </div>

                <div className='tw-w-full tw-p-2 tw-justify-center tw-flex  '>
                    <button className='tw-text-right tw-mx-full tw-py-1 tw-px-3 tw-w-fit tw-whitespace-nowrap tw-border-none tw-bg-[#ffffff]'>
                        Load More
                    </button>
                </div>
                <div className='tw-h-[2px] tw-w-1/2 tw-mx-auto -tw-mt-2 tw-mb-3 tw-opacity-30 tw-bg-offblack'></div>

                {/* cookbook */}

                <h1 className='tw-w-full tw-font-bold tw-mt-10 tw-pl-1 tw-text-[40px]'>Cookbook</h1>
                <div className=' tw-grid-cols-1 tw-grid shadow  tw-py-2 tw-max-h-48 tw-gap-y-2'>
                    <button className=' tw-flex tw-w-full tw-rounded-full tw-align-middle  tw-px-8 tw-border-none tw-border-[2px] tw-border-[#2828289d] '>
                        <p className=' tw-font-bold my-auto'>Recipie Name</p>
                        <p className=' my-auto tw-ml-3 '>Description</p>
                    </button>
                    <button className=' tw-flex tw-w-full tw-rounded-full tw-align-middle  tw-px-8 tw-border-none tw-border-[2px] tw-border-[#2828289d] '>
                        <p className=' tw-font-bold my-auto'>Recipie Name</p>
                        <p className=' my-auto tw-ml-3 '>Description</p>
                    </button>
                    <button className=' tw-flex tw-w-full tw-rounded-full tw-align-middle  tw-px-8 tw-border-none tw-border-[2px] tw-border-[#2828289d] '>
                        <p className=' tw-font-bold my-auto'>Recipie Name</p>
                        <p className=' my-auto tw-ml-3 '>Description</p>
                    </button>
                    <button className=' tw-flex tw-w-full tw-rounded-full tw-align-middle  tw-px-8 tw-border-none tw-border-[2px] tw-border-[#2828289d] '>
                        <p className=' tw-font-bold my-auto'>Recipie Name</p>
                        <p className=' my-auto tw-ml-3 '>Description</p>
                    </button>
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
