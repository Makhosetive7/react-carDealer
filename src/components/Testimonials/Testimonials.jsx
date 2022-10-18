import React from 'react'
import "./testimonials.css"

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const testimonials = () => {
    return (
        <div className='testimonials_container'>
        <h1>Testimonials</h1>
        <div className='Carousel_container'>

            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={6100} >

                <div className="myCarousel">
                    <h3>Shirley Fultz</h3>
                    <h4>Designer</h4>
                    <p>
                    It's freeing to be able to catch up on customized news and not be
                    distracted by a social media element on the same site
                    </p>
                </div>

                    <div className="myCarousel">
                        <h3>markhosetive</h3>
                        <h4>Designer</h4>
                        <p>
                        It's freeing to be able to catch up on customized news and not be
                        distracted by a social media element on the same site
                        </p>
                    </div>

                    <div className="myCarousel">
                        <h3>nhlanhla</h3>
                        <h4>Designer</h4>
                        <p>
                        It's freeing to be able to catch up on customized news and not be
                        distracted by a social media element on the same site
                        </p>
                    </div>
            </Carousel>
        </div>

        </div>
    )
}

export default testimonials