import React from 'react';
import './ProfilePage.css';
import UsersInfo from '../../Components/Cards/UsersInfo';
import TransTable from '../../Components/Table/TransTable';

const ProfilePage = () => {
    return (
        <div className='profile-page margin_p'>
            <UsersInfo />

            <TransTable />
        </div>
    )
}

export default ProfilePage
