import React, { useState } from 'react';
import './ForgetPassword.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgetPassword = () => {

    const [email, setEmail] = useState('');
    const [active, setActive] = useState(false);
    const [emailErr, setEmailErr] = useState(0);

    const handleSubmit = async event => {
        event.preventDefault();
        setActive(true)

        try {
            let res = await axios.post(`https://luke-app2.onrender.com/user/forgot-password`, {
                email: email,
            })

            toast.success('Seccess!! Check your email', {
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
                location.pathname = '/login'
            }, 2000);
        } catch (err) {
            setEmailErr(err.response.status)
        }

    }

    return (
        <div className='forget-password'>
            <div >
                <ToastContainer />

                <form action='' onSubmit={handleSubmit}>

                    <label >
                        <h4 >
                            Password Recovery
                        </h4>
                    </label>
                    <input
                        type='email'
                        placeholder='Enter your e-mail address'

                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    {
                        emailErr === 404 && active && <p className='text-danger fw-bolder'>
                            This account does not exist!
                        </p>
                    }

                    <input
                        type='submit'
                        value={"Submit"}
                    />
                </form>
            </div>
        </div>
    )
}

export default ForgetPassword
