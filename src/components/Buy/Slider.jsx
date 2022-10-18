import "./Buy.css"

import '@splidejs/splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const Slider = () => {

    return (
        <div className="container">
    
            <Splide className="splide">
                <SplideSlide className="center">
                    <div className="details">
                        <h3>Shirley Fultz</h3>
                        <h4>Designer</h4>
                        <p>
                            It's freeing to be able to catch up on customized news and not be
                            distracted by a social media element on the same site
                        </p>
                    </div>
                </SplideSlide>

                <SplideSlide className="center">
                    <div className="details">
                        <h3>Shirley Fultz</h3>
                        <h4>Designer</h4>
                        <p>
                            It's freeing to be able to catch up on customized news and not be
                            distracted by a social media element on the same site
                        </p>
                    </div>
                </SplideSlide>

                <SplideSlide className="center">
                    <div className="details">
                        <h3>Shirley Fultz</h3>
                        <h4>Designer</h4>
                        <p>
                            It's freeing to be able to catch up on customized news and not be
                            distracted by a social media element on the same site
                        </p>
                    </div>
                </SplideSlide>

                <SplideSlide className="center">
                    <div className="details">
                        <h3>Shirley Fultz</h3>
                        <h4>Designer</h4>
                        <p>
                            It's freeing to be able to catch up on customized news and not be
                            distracted by a social media element on the same site
                        </p>
                    </div>
                </SplideSlide>
            </Splide>
        </div>
    )
    }

    export default Slider