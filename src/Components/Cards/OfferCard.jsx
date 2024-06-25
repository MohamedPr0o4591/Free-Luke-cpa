import React from 'react';
import './OfferCard.css';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import './PlatformCard.css';

const OfferCard = ({ img, title, points, desc, url }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button className='offerCard' onClick={handleShow}>
                <div className='offer-logo'>
                    <img src={img} />
                </div>
                <div className='content'>
                    <span >
                        {title}
                    </span>

                    <br />

                    <small className='text-info'>
                        {points.toLocaleString()} P
                    </small>
                </div>
            </button>

            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title className='d-flex justify-content-between w-100'>
                        <span className='text-danger'>
                            Top Offer!
                        </span>

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='d-flex flex-wrap gap-3 justify-content-center'>
                    <img src={img}
                        style={{
                            maxWidth: 170 + 'px',
                            borderRadius: 50 + '%',
                        }}
                    />

                    <p >
                        <h3 >
                            {title}
                        </h3>
                        <span className='text-info'>
                            {points.toLocaleString()} <bold className='text-dark'> Points </bold>
                        </span>
                        <br />
                        <br />
                        <strong >
                            {desc}
                        </strong>
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <a
                        href={url}
                        target='_blank'
                        style={{
                            padding: `10px 20px`,
                            borderRadius: .6 + 'rem',
                        }}
                        className='text-light bg-danger'
                    >
                        Get Offer
                    </a>
                </Modal.Footer>
            </Modal>
        </>

    )
}

export default OfferCard
