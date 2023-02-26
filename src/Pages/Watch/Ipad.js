import React from 'react';
import WatchFourth from './WatchFourth';
import promoImg from "../../images/home/ipad_pro.jpg";

import "./Watch.css";

function Ipad() {
  return (
    <div>
       <div className="row ipad_section sec_th_watch">
                <div className="col-lg-6 col-md-12 col-sm-12">
                <img className="price_des" src={promoImg} alt="" />
                </div>
                <div className="col-lg-6 col-sm-12 col-md-12"> 
                <WatchFourth title="iPad" price="From $499" />
                </div>
            </div>
    </div>
  )
}

export default Ipad;