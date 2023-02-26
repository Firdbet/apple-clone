import React from 'react';
import whiteWatch from "../../images/icone/watch_white.png";
import blackWatch from "../../images/icone/watch_black.png";
import cardLogo from "../../images/icone/card_logo.png";
import cny from "../../images/icone/cny-logo.png";
import MainLinks from './MainLinks';


function Main() {
  return (
    <div>
  
  <div className="middle-section">
        <div className="container-wrapper">
           <h1>iPhone 14 Pro</h1>
           <h3>Pro.Beyond.</h3>
         <MainLinks />
        </div>
      </div> 

      <div className="third-section">
        <div className="container-wrapper">
            <div className="absolute-po">
               <h1>iPhone 14</h1>
             <h3>Big and bigger</h3>
                <div className="learn-link">
                <MainLinks />
                </div> 
            </div>  
        </div>
      </div>

      <div className="fourth-section">
        <div className="container-wrapper">
            <img src={whiteWatch} alt="" />
            <h2>A healthy leap ahead</h2>
            <div className="learn-link">
            <MainLinks />
            </div> 
         </div>
    </div> 
    
 <div className="side-container">
    <div className="left-side side-wrapper">
         <div className="container-wrapper">
            <img src={blackWatch} alt="" />
            <h5>Adventure awaits.</h5>
            <div className="learn-link">
            <MainLinks />
            </div> 
         </div>
    </div>

    <div className="right-side side-wrapper">
        <div className="container-wrapper">
            <div className="right">
                <img src="images/icone/applefitness_logo.png" alt="" />
                <h5 className="white">New Artist Spotlight workout <div>with music by Beyonce</div></h5>
                <div className="learn-link">
                    <ul>
                        <li><a href="#">See what's new <i className="fa-solid fa-greater-than"></i></a></li>
                        <li><a href="#">Try it free <i className="fa-solid fa-greater-than"></i></a></li>
                    </ul>
                </div> 
            </div>
          
        </div>
    </div>
</div> 


<div className="side-container">
    <div className="left-side-second side-wrapper">
        <div className="container-wrapper">
            <h2>A gift for every wish.</h2>
            <h5>Find something for everyone <div>this Lunar New Year.</div></h5>
            <div className="learn-link">
                <ul>
                    <li><a href="#">Shop the gift guide <i className="fa-solid lower fa-greater-than"></i></a></li>
                </ul>
           </div> 
           <img src={cny} alt="" />
        </div>
        
    </div>

    <div className="right-side-second side-wrapper">
        <div className="container-wrapper">
            <h1>iPad</h1>
           <h5>Lovable. Drawable. Magical.</h5>
           <div className="learn-link">
           <MainLinks />
           </div>      
        </div>
       
    </div>
</div> 

<div className="side-container">
    <div className="left-side-third side-wrapper">
         <div className="container-wrapped">
            <h1>AirPods Pro</h1>
            <h5>Rebuilt from the sound up.</h5>
            <div className="learn-link">
            <MainLinks />
           </div>      
         </div>
    </div>

    <div className="right-side-third side-wrapper">
        <div className="container-wrapped">
           <img src={cardLogo} alt="" />
           <h5>Get up to 3% Daily Cash black <div>with every purchase.</div></h5>
            <div className="learn-link">
            <MainLinks />
            </div>
        </div>
    </div>
</div>  

    </div>
  )
}

export default Main;