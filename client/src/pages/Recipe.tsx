import React from 'react';
import axios from 'axios';

import '../assets/scss/pages/recipe.scss';

declare const API_URL: string;

/**
 * The 404 page.
 */
class Recipe extends React.Component {
    render = (): React.ReactNode => {
        return (
            <main className="text-center tw-mb-5">
                Hello
            </main>
        );
    };

    componentDidMount = (): void => {
        void axios.get(`${API_URL}/api/${window.location.pathname}`).then(res => {
            return res.data;
        }).catch(() => console.error(`[ACCOUNT SERVER]: Could not get recipe.`));
    };
}

export default Recipe;
