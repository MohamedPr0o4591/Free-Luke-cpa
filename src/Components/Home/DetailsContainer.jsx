import React from 'react';
import './DetailsContainer.css';
import CashoutCard from '../Cards/CashoutCard';
import payeer from '../../Images/payeer.jpg';
import paypal from '../../Images/paypal.webp';
import litecoin from '../../Images/litecoin.webp';
import dogecoin from '../../Images/dogecoin.webp';
import visa from '../../Images/visa.jpg';
import googleplay from '../../Images/googleplay.png';
import amazon from '../../Images/amazon.webp';
import netflix from '../../Images/netflex.jpg';
import trustPilot from '../../Images/trustpilot.svg';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const DetailsContainer = () => {
    return (
        <div className='details-container flex-column'>

            <h2
                style={{
                    color: 'darkred',
                    textShadow: `0 .1rem .5rem rgba(0, 0, 0 ,.2)`,
                }}
                className='fs-1'
            >
                Our advantages
            </h2>

            <j />

            <div
                className='gap-3 our-advantages-container mt-5'
            >

                <div className='our-advantages' >
                    <i className='bx bx-dollar' />
                    <h3 >
                        Fast Payments
                    </h3>
                    <p >
                        We work on the speed of payment to the customer. Our goal is to support you with ease of work
                    </p>
                </div>


                <div className='our-advantages' >
                    <i className='bx bxs-bank' />
                    <h3 >
                        CashOuts Terms
                    </h3>
                    <p >
                        For cash out your earnnings money .. starting at 2.00$
                    </p>
                </div>


                <div className='our-advantages' >
                    <i className='bx bxs-gift' />
                    <h3 >
                        Daily Bonus
                    </h3>
                    <p >
                        Get 2.00$ and clime the daily bonus ladder to help you to earn more .
                    </p>
                </div>
            </div>


            <h2
                style={{
                    color: 'darkred',
                    textShadow: `0 .1rem .5rem rgba(0, 0, 0 ,.2)`,
                }}
                className='fs-1 mt-4'
            >
                Cashouts via
            </h2>

            <j />

            <div className='cashouts-via gap-3 w-100 my-5' >


                <CashoutCard img={payeer} />
                <CashoutCard img={paypal} />
                <CashoutCard img={litecoin} />
                <CashoutCard img={dogecoin} />
                <CashoutCard img={visa} />
                <CashoutCard img={googleplay} />
                <CashoutCard img={amazon} />
                <CashoutCard img={netflix} />

            </div>

            <div className='trustPilot d-flex flex-column gap-3 w-100' >
                <a href='https://www.trustpilot.com/' target='_blank' className='gap-3'>
                    <strong>
                        See our reviews on
                    </strong>

                    <img src={trustPilot} />
                </a>

                <Button className='bg-danger border-0 m-auto' >
                    <Link to={`/register`} className='text-light'>
                        Sign up now
                    </Link>
                </Button>
            </div>
        </div>
    )
}

export default DetailsContainer
