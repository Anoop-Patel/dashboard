import React from "react";
import dummyicon from "../../asset/image/javascript.png";
import ActivityChart from "../ActivityChart";
import RecentOrders from "../RecentOrders";
import { dummyData1 } from "../../Data";
const Content = () => {
  return (
    <div className="content-main">
      <div className="data-container">
        <div className="card-container">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="card">
              <img src={dummyicon} alt="" className="logo" />
              <spam className="heading"> Total Order</spam>
              <div className="info">
                <span className="num"> 75</span>
                <div className="percentage">
                  <img src={dummyicon} alt="" className="bar" />
                  <span className="p-info"> 3%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="graph-container">
          <div className="heading">
            <span className="title"> Activity</span>
            <div className="button">we </div>
          </div>
          <ActivityChart />
        </div>
        <div className="table-container">
          <RecentOrders />
        </div>
      </div>
      <div className="feedback-container">
        <div className="card-main">
          <div className="data"> </div>
          <div className="circle"> </div>
        </div>
        <div className="status-main">
          {dummyData1.map((item, index) => (
            <div key={index} className="card">
              <div className="data">
                <div
                  className="target"
                  style={{ backgroundColor: item.backgroundcolor }}
                >
                  <img src={item.icon1} alt="" />
                </div>
                <span className="para">{item.name} </span>
              </div>
              <div className="button">
                <div className="target">
                  <img src={item.icon2} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="feedback-main">
          <span className="heading"> Customer's Feedback </span>

          <div className="box-container">
            {[...Array(10)].map((item, index) => (
              <div key={index} className="box">
                <div className="profile">
                  <img src={dummyicon} alt="Profile" />
                </div>
                <div className="star">
                  {[...Array(5)].map((star, i) => (
                    <span
                      key={i}
                      className={`fa fa-star ${i < 4 ? "checked" : ""}`}
                    ></span>
                  ))}
                </div>
                <span className="description">
                  The food was excellent and so was the service. I had the
                  mushroom risotto with scallops which was awesome.
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
