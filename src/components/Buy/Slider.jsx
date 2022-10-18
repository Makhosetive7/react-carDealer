import "./Buy.css"

import '@splidejs/splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const Slider = () => {

    const slideImages = [
        {
            image: 'https://images.pexels.com/photos/253096/pexels-photo-253096.jpeg?cs=srgb&dl=pexels-johnmark-smith-253096.jpg&fm=jpg',
        },
        {
    
            image: 'https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?cs=srgb&dl=pexels-mike-b-1335077.jpg&fm=jpg',
        },
        {
    
            image: 'https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?cs=srgb&dl=pexels-garvin-st-villier-3311574.jpg&fm=jpg',
        },
    ];

    return (
        <div className="container">
    
        <Splide>
            {
            slideImages.map((imgs, index) => {
                return(
                <SplideSlide>
                    <div className="slider">
                    <img src = {imgs.image} 
                            alt = {imgs.image} />
                            
                    </div>
                </SplideSlide>
                )
            })
            }
        </Splide>

    
    </div>
    )
    }

    export default Slider