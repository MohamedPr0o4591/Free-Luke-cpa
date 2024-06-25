import React, { useState } from 'react';
import './Terms.css';
import { Link, Outlet } from 'react-router-dom';

const Terms = () => {

    const [activeItem, setActiveItem] = useState('');

    return (
        <div className='terms-page margin_p flex-column'>
            <div className='menu-bar py-2 px-3 border-bottom'>
                <ul className='list-unstyled '>
                    <li >
                        <Link
                            to='conditions'
                            className={`${activeItem === 'terms' && 'active'}`}
                            onClick={_ => setActiveItem('terms')}
                        >
                            Terms & Conditions
                        </Link>
                    </li>

                    <li >
                        <Link
                            to='privacy'
                            className={`${activeItem === 'policy' && 'active'}`}
                            onClick={_ => setActiveItem('policy')}
                        >
                            Privacy Policy
                        </Link>
                    </li>

                    <li >
                        <Link
                            to='cookies'
                            className={`${activeItem === 'cookies' && 'active'}`}
                            onClick={_ => setActiveItem('cookies')}
                        >
                            Cookies Policy
                        </Link>
                    </li>
                </ul>
            </div>

            <div className='content px-3 py-2'>
                <Outlet />
            </div>
        </div>
    )
}

export default Terms
