import React from 'react';
import HubSpotCard from './hubSpot-Card';

const HomePageCards = ({cardsData}) =>{
    return(
        <div className="row" style={{ backgroundColor: '#F5F8FA', padding: '80px 0' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-4 card-info">
                            <h2>
                                Powerful alone. 
                            </h2>
                            <h2>
                                Better together.
                            </h2>
                            <p>
                                HubSpot offers a full stack of software for marketing, sales, and customer service, with a completely free CRM at its core. They’re powerful alone — but even better when used together.
                            </p>
                        </div>
                        { 
                        cardsData.map((data ) => (
                        <HubSpotCard key={data.id} data={data}/>
                    )) }
                    </div>
                </div>
            </div> 
    )
}

export default HomePageCards;