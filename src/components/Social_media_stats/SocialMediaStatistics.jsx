import React from 'react'
import '@splidejs/splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import './SocialMediaStatistics.css'

import Instagram from '@mui/icons-material/Instagram';
import Facebook from '@mui/icons-material/Facebook';
import Twitter from '@mui/icons-material/Twitter';

const Social_media_stats = () => {

    return (
        <div className="social_media">
            <Splide  options={ {
                rewind: true,
                width : "100%",
                gap   : '1rem',
                arrow : false,
            } }>
                <SplideSlide className = "details">
                   
                    <div className="icons">
                        <Twitter style={{ color: "black" }} />
                    </div>
                    <div className="followers">
                        <span>1000</span>
                        <span>followers</span>
                    </div>
               
                </SplideSlide>
                    
                <SplideSlide className = "details">
                 
                    <div className="icons">
                        <Facebook style={{ color: "black" }}  />
                    </div>
                    <div className="followers">
                        <span>322</span>
                        <span>followers</span>
                    </div>
                </SplideSlide>

                <SplideSlide className = "details">

                    <div className="icons">
                        < Instagram style={{ color: "black" }} />
                    </div>
                    <div className="followers">
                        <span>500</span>
                        <span>followers</span>
                    </div>

                </SplideSlide>
            </Splide>
        </div>
    )
}

export default Social_media_stats