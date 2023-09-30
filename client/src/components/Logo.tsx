import React from 'react';

import LogoImg from '../assets/img/logos/kitchi.png';

class Logo extends React.Component {
    render = (): React.ReactNode => (
        <img className="tw-h-full" src={LogoImg} />
    );
}

export default Logo;
