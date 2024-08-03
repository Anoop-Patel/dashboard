import React from 'react'
import dummyicon from "../../asset/image/javascript.png";
import ActivityChart from '../ActivityChart';
import RecentOrders from '../RecentOrders';

const Content = () => {
  return (
    <div className='content-main'>
  <div className='data-container'>
 <div className='card-container'>
 {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className='card'
          >
      <img src={dummyicon} alt="" className='logo'/>
      <spam className="heading"> Total Order</spam>
      <div className='info'>
        <span className='num'> 75</span>
        <div className='percentage'>
        <img src={dummyicon} alt="" className='bar'/>
        <span className='p-info'> 3%</span>

             </div>
         </div>
          </div>
        ))}
     </div>
 <div className='graph-container'>
    <div className='heading'>
        <span className='title'> Activity</span>
        <div className='button'>we </div>
         </div>
    <ActivityChart/>
     </div>
 <div className='table-container'>
<RecentOrders/>
</div>

      </div>
  <div className='feedback-container'> </div>



    </div>
  )
}

export default Content