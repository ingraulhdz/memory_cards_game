import React from 'react';

const header = ({attemps, restartGame}) => {
    const hanldeClick =(e) => {
        e.preventDefault();
restartGame();

    }
    return (
        <div className='navbar bg-dark'>
            <h2 className='nav-brand text-muted'>Memory Cards</h2>
            <h3 className='nav-item text-muted me-4'>Attemps: <font className="text-success">{attemps}</font></h3>
            <button className='btn btn-md btn-outline-primary me-4' onClick={hanldeClick}> Restart</button>
        </div>
    );
};

export default header;