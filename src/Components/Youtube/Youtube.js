// import React, { useState, useEffect } from "react";

// // https://www.googleapis.com/youtube/v3/search?key=AIzaSyC5SWCs0ShnDz3Nd4cMrI_i9TZKh8yd8I0&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=6

// function Youtube() {
//   const [youTubeVideos, setYoutube] = useState([]);

//  useEffect(() => {
//     fetch(
//       "https://www.googleapis.com/youtube/v3/search?key=AIzaSyC5SWCs0ShnDz3Nd4cMrI_i9TZKh8yd8I0&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=6"
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         const youTubeVideos = data.items;
//         setYoutube(youTubeVideos);
//       });
//   }, []);

 
//     return (
//       <div className="allVideosWrapper">
//         <div className="container">
//           <div className="row h-100 align-items-center justify-content-center text-center">
//             <div className="col-12">
//               <div className="title-wraper bold video-title-wrapper">
//                 Latest Videos
//               </div>
//             </div>
//             {youTubeVideos.map((singleVideo) => {
//               let vidId = singleVideo.id.videoId;
//               let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
//               let videoWrapper = (
//                 <div key={vidId} className="col-sm-12 col-md-4">
//                   <div className="singleVideoWrapper">
//                     <div className="videoThumbnail">
//                       <a href={vidLink} target="_blank">
//                         <img src={singleVideo.snippet.thumbnails.high.url} />
//                       </a>
//                     </div>
//                     <div className="videoInfoWrapper">
//                       <div className="videoTitle">
//                         <a href={vidLink} target="_blank">
//                           {singleVideo.snippet.title}
//                         </a>
//                       </div>
//                       <div className="videoDesc">
//                         {singleVideo.snippet.description}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//               return videoWrapper;
//             })}
//           </div>
//         </div>
//       </div>
//     );
//   }


// export default Youtube;


import React, { Component } from "react";

// https://www.googleapis.com/youtube/v3/search?key=AIzaSyB4xNW_TeLDTO9tKxmHQAZskoy9Na0sxR0&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=1

class Youtube extends Component {
  constructor() {
    super();
    this.state = {
      youTubeVideos: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyC5SWCs0ShnDz3Nd4cMrI_i9TZKh8yd8I0&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=6"
    )
      .then((response) => response.json())
      .then((data) => {
        const youTubeVideos = data.items;
        this.setState({ youTubeVideos });
      });
  }

  render() {
    return (
      <div className="allVideosWrapper">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold video-title-wrapper">
                Latest Videos
              </div>
            </div>
            {this.state.youTubeVideos.map((singleVideo, i) => {
              let vidId = singleVideo.id.videoId;
              let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
              let videoWrapper = (
                <div key={i} className="col-sm-12 col-md-4">
                  <div className="singleVideoWrapper">
                    <div className="videoThumbnail">
                      <a href={vidLink} target="_blank">
                        <img src={singleVideo.snippet.thumbnails.high.url} />
                      </a>
                    </div>
                    <div className="videoInfoWrapper">
                      <div className="videoTitle">
                        <a href={vidLink} target="_blank">
                          {singleVideo.snippet.title}
                        </a>
                      </div>
                      <div className="videoDesc">
                        {singleVideo.snippet.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
              return videoWrapper;
            })}

            {this.videoWrapper}
          </div>
        </div>
      </div>
    );
  }
}

export default Youtube;