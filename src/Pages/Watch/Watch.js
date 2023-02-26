import React from 'react';
import firstLogo from "../../images/icone/fir_logo_watch.png";
import secondLogo from "../../images/icone/sec_logo_watch.png";
import thirdLogo from "../../images/icone/th_logo_watch.png";
import firstImg from "../../images/home/first_watch.jpg";
import secondImg from "../../images/home/sec_watch.jpg";
import thirdImg from "../../images/home/th_watch.jpg";
import fourthImg1 from "../../images/home/sid_one_watch.jpg";
import fourthImg2 from "../../images/home/sid_two_watch.jpg";
import fourthImg3 from "../../images/home/sid_three_watch.jpg";

import "./Watch.css";
import WatchFourth from './WatchFourth';

function Watch() {
  return (
    <div>
        <section className="watch_wrapper">
            <div className="row first_watch">
                <div className="col-12">
                    <WatchFourth fourthImg1={firstLogo} title="Adventure awaits." price="From $799" />
                    </div>
                    <div className="col-12">
                    <img className="first_img" src={firstImg} alt="" />
                </div>
            </div>
            <div className="row second_watch sec_th_watch">
                <div className="col-lg-6 col-md-12 col-sm-12">
                <img className="price_des" src={secondImg} alt="" />
                </div>
                <div className="col-lg-6 col-sm-12 col-md-12"> 
                <WatchFourth fourthImg1={secondLogo} title="Healthy leap ahead." price="From $399" />
                </div>
            </div>
            <div className="row third_watch sec_th_watch">
                 <div className="col-lg-6">
                 <WatchFourth fourthImg1={thirdLogo} title="A great deal to love." price="From $2499" />
                 </div>
                <div className="col-lg-6">
                <img src={thirdImg} alt="" />
                </div>
            </div>
            <div className="fourth_watch">
                <h3 className="price_des">Which Apple Watch is right for you?</h3>
                <div className="row">
                <div className="col-lg-4 col-md-6">
                    <WatchFourth fourthImg1={fourthImg1}
                    title="Apple Watch Series 8" 
                    price="From $399" />
                 </div>
                <div className="col-lg-4 col-md-6">
                    <WatchFourth fourthImg1={fourthImg2}
                    title="Apple Watch Series SE" 
                    price="From $249" />
                 </div>
                <div className="col-lg-4 col-md-6">
                     <WatchFourth fourthImg1={fourthImg3}
                    title="Apple Watch Series Ultra" 
                    price="From $799" />
                 </div>

                </div>
            </div>
        </section>
    </div>
  )
}

export default Watch;