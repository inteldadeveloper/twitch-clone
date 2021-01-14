import React from 'react'
import RecentItem from './RecentItem'
import './Profile.css'

const Profile = () => {
    return (

        <div className='profile'>
            <div className='profile_topLeft'>
                <img src='https://mwi.usma.edu/wp-content/uploads/2019/12/2617514-1200x640.jpg' alt=" Army Story"></img>
                
                <div className='profile_topLeftDetails'>
                    <h1>Army Story</h1>
                    <h3>1.2M followers</h3>
                </div>
            </div>

            <div className='profile_topRight'>
                <i className='fas fa-heart graybg'></i>
                <i className='fas fa-bell graybg'></i>
                <i className='fas fa-ellipsis-v'></i>
            </div>
            
            <div className='profile_menu'>
            <h2 className='active'>Home</h2>
                <h2>About</h2>
                <h2>Schedule</h2>
                <h2>Videos</h2>
                <h2><i class="fas fa-arrow-up"></i></h2>
                <h2>Chat</h2>
            </div>

            <div className="profile_recent">
                <h2>Recent broadcasts</h2>
                <div className='profile_recentItems'>
                 
                 <RecentItem
                           url={"https://www.youtube.com/embed/HYbbmatf6w4"} 
                           title={'What Army Recruits Go Through At Boot Camp'} 
                         />

                <RecentItem
                            url={"https://www.youtube.com/embed/cq-ZVIZJaI8"} 
                            title={'THE NEW US ARMY STRONG'}
                        />

                 <RecentItem
                            url={'https://www.youtube.com/embed/7TprgnuYfyQ'} 
                            title={'What’s Your Warrior?'}
                        />


                 <RecentItem
                            url={'https://www.youtube.com/embed/N0f_ZUgqvxE'} 
                            title={'US Army Commercial "Warrior'}
                        />
                </div>

                
                <div className="profile_categories">
                         <div>
                             <h2> The Department of the Army </h2>
                             <img src="https://api.army.mil/e2/c/images/2017/02/16/466443/size0-full.jpg" alt=""/>
                             <h3>Army Strong</h3>
                         </div>
                    </div>
               </div>
         </div>
        
    )
}

export default Profile
