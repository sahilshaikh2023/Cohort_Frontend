const reels = [
  {
    username: "rahul_01",
    likeCount: 1200,
    isLiked: true,
    shareCount: 45,
    commentCount: 32,
    caption: "Morning vibes 🌄",
    userProfile: "https://randomuser.me/api/portraits/men/11.jpg",
    video: "./video/video1.mp4",
    isFollowed: true
  },
  {
    username: "sneha_creates",
    likeCount: 980,
    isLiked: false,
    shareCount: 30,
    commentCount: 21,
    caption: "Art in progress 🎨",
    userProfile: "https://randomuser.me/api/portraits/women/12.jpg",
    video: "./video/video2.mp4",
    isFollowed: false
  },
  {
    username: "tech_aman",
    likeCount: 1500,
    isLiked: true,
    shareCount: 60,
    commentCount: 40,
    caption: "Coding life 💻",
    userProfile: "https://randomuser.me/api/portraits/men/13.jpg",
    video: "./video/video3.mp4",
    isFollowed: true
  },
  {
    username: "fit_with_riya",
    likeCount: 2000,
    isLiked: false,
    shareCount: 75,
    commentCount: 55,
    caption: "Workout routine 🔥",
    userProfile: "https://randomuser.me/api/portraits/women/14.jpg",
    video: "./video/video4.mp4",
    isFollowed: true
  },
  {
    username: "travel_diary",
    likeCount: 1750,
    isLiked: true,
    shareCount: 50,
    commentCount: 28,
    caption: "Exploring mountains 🏔️",
    userProfile: "https://randomuser.me/api/portraits/men/15.jpg",
    video: "./video/video5.mp4",
    isFollowed: false
  },
  {
    username: "foodie_lover",
    likeCount: 890,
    isLiked: false,
    shareCount: 20,
    commentCount: 15,
    caption: "Delicious bites 🍕",
    userProfile: "https://randomuser.me/api/portraits/women/16.jpg",
    video: "./video/video6.mp4",
    isFollowed: true
  },
  {
    username: "dance_star",
    likeCount: 2200,
    isLiked: true,
    shareCount: 80,
    commentCount: 70,
    caption: "Dance mode on 💃",
    userProfile: "https://randomuser.me/api/portraits/men/17.jpg",
    video: "./video/video7.mp4",
    isFollowed: false
  },
  {
    username: "daily_vlogger",
    likeCount: 1340,
    isLiked: false,
    shareCount: 35,
    commentCount: 22,
    caption: "My daily routine 📹",
    userProfile: "https://randomuser.me/api/portraits/women/18.jpg",
    video: "./video/video8.mp4",
    isFollowed: true
  },
  {
    username: "nature_clicks",
    likeCount: 1600,
    isLiked: true,
    shareCount: 48,
    commentCount: 30,
    caption: "Nature love 🌿",
    userProfile: "https://randomuser.me/api/portraits/men/19.jpg",
    video: "./video/video9.mp4",
    isFollowed: false
  },
  {
    username: "music_beats",
    likeCount: 2100,
    isLiked: false,
    shareCount: 65,
    commentCount: 44,
    caption: "Feel the music 🎧",
    userProfile: "https://randomuser.me/api/portraits/women/20.jpg",
    video: "./video/video10.mp4",
    isFollowed: true
  }
];


var sum = " ";

reels.forEach(function(elem){
      sum = sum + `      <div class="reel">
                                   <video autoplay muted loop src="${elem.video}"></video>
                                   <div class="bottom">

                                          <div class="user">
                                                 <img src="${elem.userProfile}"
                                                        alt="">
                                                 <h4>${elem.username}</h4>
                                                 <button>${elem.isFollowed?'Unfollow':'Follow'}</button>
                                          </div>
                                          <h3>${elem.caption}</h3>
                                   </div>
                                   <div class="right">
                                          <div class="love">
                                                 <h4  class="love_icon icons"> ${elem.isLiked?'<i class=" dil ri-heart-3-fill"></i>':'<i class="ri-heart-3-line"></i>'}</h4>
                                                 <h6>${elem.likeCount}</h6>
                                          </div>
                                          <div class="comment">
                                                 <h4  class="comment_icon icons"> <i class="ri-chat-3-line"></i></h4>
                                                 <h6>${elem.commentCount}</h6>
                                          </div>
                                          <div class="share">
                                                 <h4  class="love_icon icons"><i class="ri-send-ins-line"></i></h4>
                                                 <h6>${elem.shareCount}</h6>
                                          </div>
                                          <div class="menu">
                                                 <h4  class="love_icon icons "> <i class="ri-more-2-fill"></i></h4>
                                                 
                                          </div>
                                         
                                   </div>

                            </div>`;
})

var allReel =document.querySelector(".all_reel");

allReel.innerHTML =sum ;


