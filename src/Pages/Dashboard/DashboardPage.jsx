import React from 'react';
import './DashboardPage.css';
import TopOffers from '../../Components/Dashboard/TopOffers';
import PlatForms from '../../Components/Dashboard/PlatForms';

const DashboardPage = () => {
    return (
        <div className='dashboard-page margin_p'>
            <TopOffers title={`Top Offers`} />
            <PlatForms title={'Hot Offers 🔥'} />

        </div>
    )
}

export default DashboardPage
