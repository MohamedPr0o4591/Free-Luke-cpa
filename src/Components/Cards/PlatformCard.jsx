import React from 'react';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import './PlatformCard.css';


const PlatformCard = ({ img, title, url }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='platForm-card'>
            <button
                style={{
                    border: 'none',
                    padding: 0,
                    borderRadius: .8 + 'rem',
                }}

                onClick={handleShow}
            >

                <div
                    style={{
                        background: `url(${img})`,
                        width: 300 + 'px',
                        height: 100 + 'px',
                        borderRadius: .6 + 'rem',
                        backgroundSize: 'cover',
                        boxShadow: `0 .1rem .6rem rgba(0 ,0 ,0 ,.2)`,
                        backgroundPosition: 'center center',
                    }}
                />
            </button>

            <Modal show={show} onHide={handleClose} className='modal-style'>
                <Modal.Header closeButton>
                    <Modal.Title className='align-items-center d-flex gap-3'>
                        {
                            title ? (title) : 'Hot Offers 🔥'
                        }

                        <a href={url} target='_blank' className={`${localStorage.mode === 'dark' ? 'text-light' : 'text-dark'}`}>
                            <i className='bx bx-link-external'></i>
                        </a>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe src={url} width={'100%'} style={{ height: 80 + 'vh' }} />
                </Modal.Body>
            </Modal>
        </div>

    )
}

export default PlatformCard
