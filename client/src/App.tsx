import React from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Error404 from './pages/404';

import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';

// import Register from './pages/Register';
import Forums from './pages/social/Forums';

import Dashboard from './pages/account/Dashboard';

import './assets/css/icofont/icofont.min.css';
import './assets/scss/index.scss';

import 'bootstrap';

class App extends React.Component {
    render = (): React.ReactNode => (
        <div id="app" className="tw-flex tw-flex-col tw-h-screen">
            <Header />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* Authentication */}
                    <Route path="/auth">
                        <Route path="/auth/signup" element={<Signup />} />
                        <Route path="/auth/login" element={<Login />} />
                    </Route>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/forums" element={<Forums />} />
                    <Route path="/*" element={<Error404 />} />
                </Routes>
            </Router>
            <Footer />
        </div>
    );
}

export default App;
