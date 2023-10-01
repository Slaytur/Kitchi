import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { faDownload, faDesktop } from '@fortawesome/free-solid-svg-icons';

import "../../assets/scss/pages/dashboard.scss";

// interface UserData {
//     authenticated: boolean

//     discordID: string
//     username: string
//     email: string
//     avatar: string

//     permissions: {
//         admin: boolean
//     }
// }

class Dashboard extends React.Component {
    render = (): React.ReactNode => (
        <main className="tw-text-center tw-flex tw-w-screen tw-h-fit">
            <div className=' tw-flex tw-pl-3 tw-h-full tw-w-min tw-left-0 tw-bg-[#f9f2de]'>
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

    // componentDidMount = async (): Promise<void> => {
    //     const userData = await fetch(`https://i.alru.xyz/auth/authenticated`)
    //         .catch(err => {
    //             console.error(err);
    //             if (window.location.hostname !== `localhost`) window.location.href = `/`;
    //         });

    //     // {"discordID":"386940319666667521","username":"DamienVesper","email":"ldamienvesper@gmail.com","avatar":"2c18b54f11167920ada3a6ebd538f910","permissions":{"admin":false}}

    //     if (!((userData as unknown) as UserData).authenticated && window.location.hostname !== `localhost`) window.location.href = `/`;
    // };
}

export default Dashboard;
