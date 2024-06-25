import React, { useState } from 'react';
import './LoginPage.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';


const LoginPage = () => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(0);
    const [active, setActive] = useState(false);

    const Submit = async e => {
        e.preventDefault();
        setActive(true);

        try {
            let res = await axios.post(`https://luke-app2.onrender.com/login`, {
                userName: name.toLowerCase(),
                password: password,
            })

            toast.info('Checking authentication!', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });

            setTimeout(async () => {
                if (localStorage.token) {
                    let res = await axios.get(`https://luke-app2.onrender.com/user/profile`, {
                        headers: {
                            Authorization: `Bearer ${localStorage.token}`,
                        },
                    });

                    localStorage.name = name;
                }

                toast.success('Successful login process', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })

                setTimeout(() => {
                    location.pathname = '/dashboard'
                }, 2000);

            }, 3000);

            localStorage.token = res.data.token;

        } catch (err) {
            setEmailError(err.response.status)
        }

    }

    const handleToast = _ => {
        toast.error('Invalid Username and Password', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        })

        setTimeout(() => {
            location.reload();
        }, 1000);

    }

    return (
        <div className='login-page'>

            <ToastContainer />

            <div className='login-auth'>
                <form action='' onSubmit={Submit} >

                    <label >
                        <h3 >
                            Login
                        </h3>
                    </label>

                    <div className='input-box'>
                        <input type='text' required value={name} onChange={e => setName(e.target.value)} />
                        <span>
                            Username
                        </span>
                    </div>
                    {
                        emailError === 401 && active && handleToast()
                    }
                    {
                        emailError === 400 && active && <p className='text-danger'>
                            Please enter a valid username
                        </p>
                    }

                    <div className='input-box'>
                        <input type='password' required value={password} onChange={e => setPassword(e.target.value)} />
                        <span>
                            Password
                        </span>
                    </div>

                    <input
                        type='submit'
                        value={'Login'}
                    />

                    <div className='links'>
                        <Link to='/login/forget'>
                            Forgot password?
                        </Link>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default LoginPage
