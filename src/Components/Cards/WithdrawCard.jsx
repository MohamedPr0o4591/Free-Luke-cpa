import React from 'react';
import './WithdrawCard.css';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const WithdrawCard = ({ img, payName }) => {

    const [show, setShow] = useState(false);
    const [cashValue, setCashValue] = useState('');
    const [emailRequest, setEmailRequest] = useState('');
    const [active, setActive] = useState(false);
    const [requestErr, setRequestErr] = useState(0);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    let Submit = async e => {
        e.preventDefault();
        setActive(true);
        let flag;

        if (cashValue < 1000) {
            flag = false
        } else flag = true

        if (flag) {
            try {
                let res = await axios.post("https://luke-app2.onrender.com/user/request", {
                    paymentName: payName,
                    phone: emailRequest,
                    countPoint: Number(cashValue),
                },
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.token}`,
                        },
                    }
                )

                toast.success('Your request has been successfully', {
                    position: "top-center",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });

                setTimeout(() => {
                    location.reload()
                }, 1600);

            } catch (err) {
                setRequestErr(err.response.status);
            }
        }

    }

    if (requestErr === 404) {
        toast.error('Haven\'t enough points!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });

        setTimeout(() => {

            location.reload()

        }, 2000);

    }

    return (
        <div className='widthdraw-card'>
            <ToastContainer />
            <button className='withdraw-card-btn' onClick={handleShow}>
                <div className='withdraw-card'
                    style={{
                        background: `url(${img})`,
                        backgroundPosition: 'center center',
                        backgroundSize: 'cover',
                    }}
                />
            </button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title className='d-flex flex-column align-items-center justify-content-around w-100'>
                        <span >
                            {payName}
                        </span>

                        {
                            img ? (
                                <div style={{ background: `url(${img})`, width: 300 + 'px', height: 100 + 'px', backgroundPosition: 'center center', backgroundSize: 'cover', borderRadius: .6 + 'rem', boxShadow: '0 .1rem .5rem rgba(0 ,0 ,0 ,.2)' }} />
                            ) : 'Hot Offers 🔥'
                        }

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className='withdrawal-form d-flex flex-column gap-3' onSubmit={Submit}>
                        <div className='input-box'>

                            <input
                                type='text'
                                placeholder={'Enter your phone or email'}
                                value={emailRequest}
                                onChange={e => setEmailRequest(e.target.value)}
                            />
                        </div>

                        <div className='input-box' >
                            <input type='text' placeholder={'Enter your balance?'} id='price'
                                value={cashValue}
                                onChange={e => setCashValue(e.target.value)}
                            />
                            <span >
                                Min = 1000 Points
                            </span>
                            {
                                cashValue < 1000 && active && <p className='text-danger fw-bold'>
                                    * Minimum withdraw is 1000 Points = 1$
                                </p>
                            }
                        </div>


                        <input type='submit' value={'Cash out'} className='bg-danger text-light border-0' style={{ outline: 'none' }} />
                    </form>
                </Modal.Body>
            </Modal>

        </div>
    )
}

export default WithdrawCard
