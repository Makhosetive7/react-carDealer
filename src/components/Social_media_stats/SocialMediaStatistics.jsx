import React from 'react'
import './SocialMediaStatistics.css'

import Instagram from '@mui/icons-material/Instagram';
import Facebook from '@mui/icons-material/Facebook';
import Twitter from '@mui/icons-material/Twitter';

const Social_media_stats = () => {
    return (
        <div className="social_media">
            <div className="social_boxes">
                <div className="twitter">
                <div className="icons">
                    <Twitter style={{ color: "black" }} />
                </div>
                <div className="followers">
                    <span>1000</span>
                    <span>followers</span>
                </div>
                </div>
                <div className="facebook">
                <div className="icons">
                    <Facebook style={{ color: "black" }}  />
                </div>
                <div className="followers">
                    <span>322</span>
                    <span>followers</span>
                </div>
                </div>
                <div className="instagram">
                <div className="icons">
                    < Instagram style={{ color: "black" }} />
                </div>
                <div className="followers">
                    <span>500</span>
                    <span>followers</span>
                </div>
                </div>
            </div>
        
        </div>
    )
}

export default Social_media_stats