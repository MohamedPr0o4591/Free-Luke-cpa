import React from 'react';
import { Col, Row } from 'react-bootstrap';
import earn_img1 from '../../Images/make-money-money.gif';
import earn_img2 from '../../Images/img-2.gif';
import earn_img3 from '../../Images/img-3.gif';
import earmMoney_logo from '../../Images/earn-money.gif';


const HomeContainer = () => {
    return (
        <div className='home-container '>
            <Row >
                <Col
                    className='d-flex justify-content-center flex-column'
                    xl='6'
                    sm='12'
                >

                    <h1
                        style={
                            {
                                color: 'darkred',
                                textShadow: `0 .1rem .5rem rgba(0 ,0 ,0 ,.2)`,
                            }
                        }
                    >
                        MisterProgramming ..
                    </h1>

                    <h4 >
                        The galaxy of making money with us
                    </h4>

                    <div className='earns-imgs-container my-4 d-flex gap-3 flex-wrap'>


                        <div className='child-img'
                            style={{
                                background: `url(${earn_img1})`,
                                backgroundPosition: 'center center',
                                backgroundSize: 'cover'
                            }}
                        />


                        <div className='child-img'
                            style={{
                                background: `url(${earn_img2})`,
                                backgroundPosition: 'center center',
                                backgroundSize: 'cover'
                            }}
                        />


                        <div className='child-img'
                            style={{
                                background: `url(${earn_img3})`,
                                backgroundPosition: 'center center',
                                backgroundSize: 'cover'
                            }}
                        />


                    </div>


                    <Row className='total-statistics gap-3' >

                        <div className='w-auto text-light text-center'>
                            <span >
                                Total Viewer
                            </span>

                            <h3 className='m-0'>
                                23,100
                            </h3>
                        </div>

                        <div className='w-auto text-light text-center'>
                            <span >
                                All payments
                            </span>

                            <h3 className='m-0'>
                                31,000 $
                            </h3>
                        </div>

                        <div className='w-auto text-light text-center'>
                            <span >
                                Working range
                            </span>

                            <h3 className='m-0'>
                                24 hr
                            </h3>
                        </div>
                    </Row>

                    <Row className='socialMedia gap-3 my-3 d-flex'>
                        <a href='' target='_blank' className='cardify'
                            style={{
                                background: 'darkblue'
                            }}
                        >
                            <i className='bx bxl-facebook' />

                            Facebook community
                        </a>


                        <a href='' target='_blank' className='cardify'
                            style={{
                                background: '#1da1f2'
                            }}
                        >
                            <i className='bx bxl-twitter' />

                            Twitter community
                        </a>

                        <a href='' target='_blank' className='cardify'
                            style={{
                                background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)'
                            }}
                        >
                            <i className='bx bxl-instagram' />

                            Instagram community
                        </a>
                    </Row>
                </Col>

                <Col
                    className='d-flex justify-content-end'
                    xl='6'
                    sm='12'
                >

                    <div className='right-img'>

                        <img src={earmMoney_logo} className='w-100' />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default HomeContainer
