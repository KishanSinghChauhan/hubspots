import React, { Component } from 'react';
import { Card,CardBody,CardTitle,CardText,Button } from 'reactstrap'
class HubSpotCard extends Component {
    render() { 
        const { data } = this.props
        return (  
            <div className="col-4">
            <Card className="hubspot-card shadow-sm">
                <CardBody>
                    <CardTitle>
                       <span className="hubspot-card-heading"> {data.cardHeading} </span>
                    </CardTitle>
                    <CardText className="hubspot-card-details">{data.cardDetails}</CardText>
                    <hr />
                    <p className="hubspot-cardlist-heading">
                        {data.cardListHeading}
                    </p>
                    <ul>
                        {data.cardList.map((listValue) => {
                            return (
                                <li>{ listValue }</li>
                            )
                        })}
                    </ul>
                    <Button className="hubspot-card-btn" > {data.buttonName} </Button>
                    { data.status ? (
                        <span className="hubspot-card-status">{data.status}</span>
                    ): ''}
                </CardBody>
            </Card>
        </div>
        );
    }
}
 
export default HubSpotCard;