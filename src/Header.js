import React from 'react'
import './Header.css'
import { Avatar } from '@material-ui/core';



function Header() {
    return (
        <div className="header" >
            <div className="header_left">
                <img className="header_leftLogo" 
                      src="https://pngimg.com/uploads/twitch/twitch_PNG6.png" 
                           alt="twitch logo"/>
                        <h2>Following</h2>
                    <h2>Browse</h2>
        <div className="header_verticalLine"></div>
            <h2>Esports</h2>
              <h2>Music</h2>
              <i className="fas fa-ellipsis-h"></i>
            </div>


            <div className="header_center">
               <input type="text" placeholder='Search'/>
                   <div classname="header_centerLogoContainer">
                       <i className="fas fa-search"></i>
                  </div>
            </div>

            <div className="header_right">
                <div className="header_rightContainer">
                <i className="fas fa-crown"></i>
                <i className="fas fa-inbox"></i>
                <i class="fas fa-comment-alt"></i>

                <div className="header_rightBits">
                <i class="fas fa-gem"></i>
                     <h4>Get Bits</h4>  
                </div>
                <Avatar />
            </div>
        </div>
    </div>






    )
}

export default Header

