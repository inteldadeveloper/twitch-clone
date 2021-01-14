import React from 'react'
import Channel from './Channel'
import './Sidebar.css'

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar_top">
            <h5>FOLLOWED CHANNELS</h5>
             <Channel avatar ='https://www.armytimes.com/resizer/yYUrVhRl78egT1CbJnDUSMAvRZw=/1200x0/filters:quality(100)/arc-anglerfish-arc2-prod-mco.s3.amazonaws.com/public/JZAGWVY555A7LKAJA3L2P3MUUQ.jpg'
             name='SPC Smith'
             followers='820K' 
             />

             <Channel avatar ='https://images03.military.com/sites/default/files/styles/full/public/2020-06/army-fitness-test-weights-3000.jpg?itok=mcV4gO0-'
             name= 'SFC Jones'
             followers='200K' 
             />

             <Channel avatar ='https://media.npr.org/assets/img/2014/04/02/smallerarmy-1_wide-bf3d4b8d224abcfbc7545913811613d23dda05a3-s800-c85.jpg'
             name='1SG James'
             followers='900K' 
             />

             <Channel avatar ='https://media.npr.org/assets/img/2014/04/02/smallerarmy-1_wide-bf3d4b8d224abcfbc7545913811613d23dda05a3-s800-c85.jpg'
             name='SSG News'
             followers='500K' 
             />

             <Channel avatar ='https://media.npr.org/assets/img/2014/04/02/smallerarmy-1_wide-bf3d4b8d224abcfbc7545913811613d23dda05a3-s800-c85.jpg'
             name='SGT Big'
             followers='110K' 
             />




            <h5>RECOMMAND CHANNELS</h5>
            <Channel avatar ='https://images03.military.com/sites/default/files/styles/full/public/2020-06/army-fitness-test-weights-3000.jpg?itok=mcV4gO0-'
             name='NCO Schools'
             followers='1400' 
             />

             <Channel avatar ='https://www.nationaldefensemagazine.org/-/media/sites/magazine/2020/11/armyphoto5.ashx?h=800&w=1200&la=en&hash=5F2C04DE56F512D21FD9855111E4715F'
             name='SGT Time training '
             followers='1400' 
             />

             <Channel avatar ='https://www.nationaldefensemagazine.org/-/media/sites/magazine/2020/11/armyphoto5.ashx?h=800&w=1200&la=en&hash=5F2C04DE56F512D21FD9855111E4715F'
             name='NCO Creed'
             followers='1400' 
             />

             <p className='sidebar_topShowMore'>Show More</p>
        </div>
        <div className="sidebar_bottom">
            <div className="sidebar_bottomContainer">
            <i class="fas fa-search"></i> 
            <input type="text" placeholder='Search to Add Friends' />
            </div>
        </div>
    </div>
    )
}

export default Sidebar
