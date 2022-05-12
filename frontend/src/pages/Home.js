import React from 'react';
import { useNavigate } from "react-router-dom";

import LandingPage from '../components/LandingPage'

function Home() {
    const navigate = useNavigate();
    return (
        <LandingPage navigate={navigate} />
    )
}

export default Home;