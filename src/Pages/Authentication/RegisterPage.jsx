import React, { useState } from 'react';
import './RegisterPage.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterPage = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [confEmail, setConfEmail] = useState('');
    const [password, setPassword] = useState('');
    const [active, setActive] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[\W_]/.test(password);

    const Submit = async e => {
        let flag;
        e.preventDefault();
        setActive(true);

        if (name.length < minLength || password.length < minLength || !hasUppercase || !hasLowercase || !hasNumber || !hasSpecialChar || confEmail !== email || name !== name.replace(/[@!#$%^&*()?><.,|[\]{}\\/\s]/g, '')) {
            flag = false;
        } else flag = true;

        if (flag) {

            try {
                let res = await axios.post(`https://luke-app2.onrender.com/register`, {
                    userName: name.toLowerCase(),
                    email: email,
                    confirmEmail: confEmail,
                    password: password,
                    role: 'user',
                })

                toast.success('Success ,you will be directed to the login page', {
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
                setEmailError(err.response.status);

            }

        } else setValidationAction(false);

    }



    return (
        <div className='register-page'>

            <ToastContainer />

            <div className='reg-auth'>
                <form action='' onSubmit={Submit}>


                    <label>
                        <h3 >
                            Register
                        </h3>

                    </label>

                    <div className='input-box'>
                        <input
                            type='text'
                            required
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <span >
                            User name
                        </span>
                    </div>
                    {
                        name.length < 8 && active && <p className='text-danger fw-bold'>
                            Full name must be at least 8 characters long
                        </p>

                    }
                    {
                        name !== name.replace(/[^a-zA-Z0-9]/g, '') && name.length > 8 && active && <p className='text-danger fw-bolder'>
                            Please enter a valid username
                        </p>
                    }
                    {
                        emailError === 500 && active && <p className='text-danger fw-bold'>
                            This Username is already registered ,please try another one!
                        </p>
                    }

                    <div className='input-box'>
                        <input
                            type='email'
                            required
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <span >
                            E-mail
                        </span>
                    </div>
                    {
                        emailError === 409 && active && <p className='text-danger fw-bold'>
                            The email address is already been taken
                        </p>
                    }

                    <div className='input-box'>
                        <input
                            type='email'
                            required
                            value={confEmail}
                            onChange={e => setConfEmail(e.target.value)}
                        />
                        <span >
                            Confirm E-mail
                        </span>
                    </div>
                    {
                        confEmail !== email && active && <p className='text-danger fw-bold'>
                            The e-mails do not match!
                        </p>
                    }

                    <div className='input-box'>
                        <input
                            type='password'
                            required
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <span >
                            Password
                        </span>
                    </div>

                    {
                        (password.length < minLength || !hasUppercase || !hasLowercase || !hasNumber || !hasSpecialChar) && active && <p className='text-danger fw-bold'>
                            Password must be at least 8 characters long and include both uppercase and lowercase letters, at least one number, and a special character.
                        </p>
                    }

                    <input
                        type='submit'
                        value={`Sign up`}
                    />
                </form>
            </div>

        </div >
    )
}

export default RegisterPage
