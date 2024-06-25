import React from 'react';
import './AcceptTerms.css';
import { Link } from 'react-router-dom';

const AcceptTerms = ({ action }) => {

    let handleOnSubmit = e => {
        e.preventDefault();
        localStorage.terms = 'Accepted';
        location.reload();
    }

    return (
        <div className={`accept-terms ${localStorage.terms && action}`} >
            <strong >
                Go to read <Link to={`/review/terms/conditions`} target='_blank'>Terms & Conditions</Link>

                , <Link to={`/review/terms/privacy`} target='_blank'>Privacy Policy </Link>
                and <Link to={`/review/terms/cookies`} target='_blank'>Cookies Policy </Link>
                <br />
                Please accept our terms to continue...

            </strong>

            <br />
            <br />

            <form action='' onSubmit={handleOnSubmit}>
                <div className='d-flex gap-2 align-items-center'>
                    <input
                        type='checkbox'
                        id='check'
                        required
                    />
                    <label
                        htmlFor='check'
                        style={{
                            cursor: 'pointer'
                        }}
                    >
                        <span className='fw-bold'>
                            I have read and agree to the Terms of Service and Privacy Policy
                        </span>
                    </label>
                </div>

                <input
                    type='submit'
                    value={'Continue'}
                    className='mt-3 float-end'
                />
            </form>


        </div>
    )
}

export default AcceptTerms
