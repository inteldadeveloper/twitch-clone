import React from 'react'
import './Stream.css'

function Stream() {
    return (
        <div className='stream'>
            <div className="stream_container">
                <div className="stream_status">
                    <div className="stream_statusContainer">
                         <div className="stream_statusContainerTop">
                             <div className="stream_statusIndicator">OFFLINE</div>
                                 <h2>Stream NCO Creed</h2>
                                </div>

                                <div className="stream_statusInfo">
                                   <i className="fas fa-search"></i>
                                   <p>Army Story</p>
                                </div>
                            </div>
                        </div>
         <div className="stream_videoEmbed">
         <iframe 
         width="500" 
         height="295" 
         title="NCO Creed"
         src="https://www.youtube.com/embed/-_jewAYgOQE" 
         frameborder="0" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
         allowfullscreen></iframe>

                   </div>
              </div>
         </div>
        
    )
}

export default Stream
