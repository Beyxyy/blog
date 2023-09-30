import React from 'react';
import {Card, CardBody, CardHeader, CardText, CardTitle} from 'reactstrap';

const Postcard = ({title, description, author, tags, key}) => {
    return (
        <div>
            <div className='parent'>
                <Card
                    className="my-2"
                    color="primary"
                    outline
                    style={{
                    width: '18rem'
                    }} 
                >
                    <CardHeader>
                    {title}
                    </CardHeader>
                    <CardBody>
                        <CardTitle tag="h5">
                            {title}
                        </CardTitle>
                        <CardText>
                           {description}
                        </CardText>
                    </CardBody>
                </Card>
            </div>    
        </div>
    );
};

export default Postcard;