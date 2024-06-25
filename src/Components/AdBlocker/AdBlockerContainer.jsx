import React, { useEffect } from 'react';
import './AdBlockerContainer.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdBlockerContainer = () => {

    useEffect(() => {
        if (!localStorage.adblock) {
            toast.warn('Make sure you are not using an ad blocker!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });

            setTimeout(() => {
                localStorage.adblock = 'accepted';
            }, 3000);
        }
    }, [])

    return (
        <div className={`ad-blocker d-flex flex-column gap-4 ${localStorage.adblock && 'd-none'}`}>
            <ToastContainer />

        </div>
    )
}

export default AdBlockerContainer
