import React from 'react'

function WatchFourth(props) {
  return (
    <div>
            <img src={props.fourthImg1} alt="" />
            <div className="watch_des">
                <p>{props.title}</p>
                <p>{props.price}</p>
                <button className="btn btn-primary bt">Buy</button>
            </div>
    </div>
  )
}

export default WatchFourth;