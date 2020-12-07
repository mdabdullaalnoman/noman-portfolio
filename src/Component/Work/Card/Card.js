import React from 'react';
import WebsiteData from '../../../FakeData/FakeData';
import CardSingle from '../CardSingle/CardSingle';

const Card = () => {
    const Info = WebsiteData;
    return (
        <div className="container">
            <div className="row">
            {
               Info.map(info  => <CardSingle info={info} key={info.tittle}></CardSingle>)
            } 
            </div>
        </div>
    );
};

export default Card;