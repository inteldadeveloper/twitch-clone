import React from 'react'
import './RecentItem.css';

const RecentItem = ({ url, title }) => {
    return (
        <div className="item">
               <iframe 
               width="400" 
               height="235"
               title="video" 
               src={url}
               frameborder="0" 
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
               allowfullscreen>
               </iframe>
               <div className='item_details'>
                <img src='https://rugratsva.com/wp-content/uploads/2014/02/ArmySealHigh_000.jpg' alt="" ></img>
                <div className='item_detailsText'>
                    <h4>{title}</h4>
                    <p>SSG(P) Gadsden Army Video</p>
                    <p>I became A Soldiers, United States Army Recruiting Video </p>
                </div>
            </div>
        </div>
        
    )
}

export default RecentItem
