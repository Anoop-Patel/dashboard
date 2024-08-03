import React from 'react';
import dummyicon from "../asset/image/javascript.png";
import "../asset/style/table.scss"
const orders = [
  {
    customer: 'Wade Warren',
    orderNo: '15478256',
    amount: '$124.00',
    status: 'Delivered',
    avatar: dummyicon, // Replace with actual image path
  },
  {
    customer: 'Jane Cooper',
    orderNo: '48965786',
    amount: '$365.02',
    status: 'Delivered',
    avatar: dummyicon,
  },
  {
    customer: 'Guy Hawkins',
    orderNo: '78958215',
    amount: '$45.88',
    status: 'Cancelled',
    avatar: dummyicon,
  },
  {
    customer: 'Kristin Watson',
    orderNo: '20965732',
    amount: '$65.00',
    status: 'Pending',
    avatar: dummyicon,
  },
  {
    customer: 'Cody Fisher',
    orderNo: '95715620',
    amount: '$545.00',
    status: 'Delivered',
    avatar: dummyicon,
  },
 
 
];

const getStatusClass = (status) => {
  switch (status) {
    case 'Delivered':
      return 'status-delivered';
    case 'Cancelled':
      return 'status-cancelled';
    case 'Pending':
      return 'status-pending';
    default:
      return '';
  }
};

const RecentOrders = () => {
  return (
    <div className="recent-orders">
      <span className='heading'>Recent Orders</span>
      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Order No.</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td className="customer-info">
                <img src={order.avatar} alt={order.customer} className="avatar" />
                {order.customer}
              </td>
              <td>{order.orderNo}</td>
              <td>{order.amount}</td>
              <button className={`status ${getStatusClass(order.status)}`}>{order.status}</button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
