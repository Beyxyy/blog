import React from 'react';

const Header = ({title, description, url}) => {
    return (
        <div>
                <div className='banner' style={{backgroundImage : `url(${url})`}}>
                    <h1>{title}</h1>
                    <p className='description_header'>
                        {description}
                    </p>
                    {/* <img className='image_hello' stylesrc={url} alt='image hello'/> */}
                </div>
        </div>
    );
};

export default Header;