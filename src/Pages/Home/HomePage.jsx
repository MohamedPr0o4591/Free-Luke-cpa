import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './HomePage.css';
import HomeContainer from '../../Components/Home/HomeContainer';
import DetailsContainer from '../../Components/Home/DetailsContainer';
import AcceptTerms from '../../Components/Utilities/AcceptTerms';
import AdBlockerContainer from '../../Components/AdBlocker/AdBlockerContainer';

const HomePage = () => {
    return (
        <Container >
            <div
                className='home-page'
                style={
                    !localStorage.terms ? ({ pointerEvents: 'none', opacity: .4 }) : ({ pointerEvents: 'initial' })
                }
            >

                <HomeContainer />

                <DetailsContainer />
            </div>

            <AcceptTerms action={'d-none'} />
            <AdBlockerContainer />
        </Container>
    )
}

export default HomePage
