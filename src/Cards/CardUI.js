import React from 'react';

const Card = props=>{
    return(
        <div className="card">
            <div className="overflow">
                <img className="img-fluid .rounded-circle" src="https://picsum.photos/seed/picsum/500" alt="Nature image" />
            </div>
            <div className="card-body text-dark">
                <h6>Card title</h6>
            </div>
        </div>
    );
}

export default Card;