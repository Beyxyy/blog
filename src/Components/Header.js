import React from 'react';

const Header = ({title, description, url}) => {
    return (
        <div>
                <div className='banner' style={{backgroundImage : `url(${url})`}}>
                    <div className='bg_white'>
                        <h1>{title}</h1>
                        <p className='description_header'>
                            {description}
                        </p>
                    </div>
                    {/* <img className='image_hello' stylesrc={url} alt='image hello'/> */}
                </div>
        </div>
    );
};

export default Header;