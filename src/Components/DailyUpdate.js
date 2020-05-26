import React from 'react';

const DailyUpdate = () => {
    return(
        <div className="row align-items-center update-svg" style={{ backgroundColor: '#425B76', height: '100px', color: '#ffffff'}}>
            <div className="container">
                <p style={{ fontSize: 18, margin: 0, padding: '0 50px' }}>
                    Global health and safety is our top priority. <a href="/" style={{ fontWeight: 600, textDecoration: 'underline',color:'#FFFFFF' }}>Learn how HubSpot is responding</a> to COVID-19 and its economic impact on the communities we serve.
                </p>
            </div>
        </div>
    )
}

export default DailyUpdate;