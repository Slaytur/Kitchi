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
        <main className="tw-text-center tw-flex tw-w-screen tw-h-screen">
            <div className=' tw-flex tw-pl-3 tw-h-full tw-bg-[#B2D481]'>
                <div className=' tw-items-center tw-pt-24 '>
                    <p className='tw-bg-[#f9f2de] tw-pr-3 leftrounded tw-p-1'>Pantry</p>
                    <p className='tw-bg-[#f9f2de] tw-pr-3 leftrounded tw-p-1 tw-pl-2'>Cook Book</p>
                    <p className='tw-bg-[#f9f2de] tw-pr-3 leftrounded tw-p-1'>Recipes</p>
                </div>
            </div>
            <div className="mt-5 tw-flex tw-h-screen tw-w-full text-center">
                <h1 className='tw-w-full '>Your Pantry</h1>
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
