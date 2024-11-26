import React from 'react';
import bannerImg from '../images/restauranfood.jpg';
import {Link} from 'react-router-dom';

const Header=()=>{
  return (
   <header className="header">

        <section>
            <div className="banner">
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>We are family owned Mediterraneran restraurant, focused on traditional recepies served with modern twist.</p>
                <link to="./booking"><button aria-Label='On Click'>Reserve Table</button></link>
            </div>

            <div className="banner-img">
                <img src="bannerImg" alt="" />
            </div>
        </section>
   </header>
  );
}

export default Header;
