import React from 'react';

import '../assets/scss/pages/timer.scss';

/**
 * The tiemr page.
 */
class Timer extends React.Component {
    render = (): React.ReactNode => {
        return (
            <main className="text-center tw-mb-5">
                <h1 className="mt-5 error-header">404</h1>
                <h3 className="error-subscript">Not Found</h3>
            </main>
        );
    };
}

export default Timer;
