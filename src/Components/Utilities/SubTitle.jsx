import React from 'react';
import './SubTitle.css';

const SubTitle = ({ title }) => {

    return (
        <div className='subTitle py-3'>
            <label>
                <h3  >
                    {title}
                </h3>
            </label>

            <i className='bg-danger' />
        </div>
    )
}

export default SubTitle
