import React from 'react'

import './Footer.css'

import Instagram from '@mui/icons-material/Instagram';
import Facebook from '@mui/icons-material/Facebook';
import Twitter from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <div className='footer_container'>
        <div className="left_footer">
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, accusantium autem ex iste eaque illum! Debitis alias dolorum eos, laborum asperiores nobis, nisi ullam dolores sequi incidunt libero quis cum.
            Quo quos similique animi repellendus! Provident ad modi minus, tenetur ipsum odio repudiandae porro fugit dicta sunt corporis error voluptatum illo consectetur aspernatur et, esse eos. Officia dolor consequuntur animi!
            Aliquam at atque architecto numquam quis minus? Temporibus omnis culpa voluptates facilis placeat aspernatur iure cum quibusdam qui, ipsam ut sapiente perferendis repudiandae labore error, nesciunt nisi nemo, pariatur illo.
            Consequatur vero reiciendis cupiditate ipsa magni delectus modi! Aut repudiandae cupiditate alias, repellat rerum nobis, dignissimos repellendus sequi praesentium id debitis molestiae provident tempore! Voluptas possimus eius perspiciatis. Architecto, voluptatibus.
            Reiciendis pariatur deleniti necessitatibus odio commodi nemo, tempore veniam quod adipisci. Autem fugiat, earum aliquam ipsum tenetur, debitis reprehenderit quas et minus iste nam rerum placeat quam odit eveniet delectus?
           </p>
        </div>
        <div className="center_footer">
            <form>
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" />
                </div> 
                <div>
                    <label htmlFor="">email</label>
                    <input type="email" />
                </div>
                <div>
                    <label htmlFor="">message</label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div>
                    <button>Send Message</button>
                </div>
            </form>
        </div>
        <div className="right_footer">
            <h1>Follow Us On</h1>
            <div className='follow_us'>
                <span>  <Twitter /> </span>
                <h1>Twitter</h1>
            </div>
            <div className='follow_us'>
                <span> <Facebook /> </span>
                <h1>Facebook</h1>
            </div>
            <div className='follow_us'>
                <span>  <Instagram /> </span>
                <h1>Instagram</h1>
            </div>
        </div>
    </div>
  )
}

export default Footer