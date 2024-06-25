import React from 'react';

const CashoutCard = ({ img }) => {
    return (
        <div
            className='payment-card'
            style={{
                height: 100 + 'px',
                borderRadius: 1 + 'rem',
                background: `url(${img})`,
                backgroundPosition: `center center`,
                backgroundSize: `cover`,
                boxShadow: `0 .1rem .6rem rgba(0 ,0 ,0 ,.2)`,
            }}
        />
    )
}

export default CashoutCard
