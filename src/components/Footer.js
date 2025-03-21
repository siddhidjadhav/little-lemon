import React from 'react';
import logo from '../images/Logo.svg'
const Footer=()=>{
    return(
        <footer>
            <section>
                <div className='company-info'>
                    <img src={logo} alt=''/>
                    <p>We are family owned Mediterraneran restraurant, focused on traditional recepies served with a modern twist.</p>
                </div>

                <div>
                  <h3>Important Links</h3>  
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Menu</a></li>
                    <li><a href="/">Reservations</a></li>
                    <li><a href="/">Order Online</a></li>
                    <li><a href="/">Login</a></li>
                  </ul>
                </div>

                <div>
                    <h3>Social Media Links</h3>
                    <ul>
                        <li><a href="/">Facebook</a></li>
                        <li><a href="/">Twitter</a></li>
                        <li><a href="/">Instagram</a></li>
                    </ul>
                </div>

                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: <br/>123 XYZ,USA</li>
                        <li>Phone: <br/>+1 000-000-0000</li>
                        <li>Email: <br/>littlelemon@gmail.com</li>
                    </ul>
                </div>
            </section>
        </footer>
    );

};

export default Footer;