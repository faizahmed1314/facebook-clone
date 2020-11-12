import React from "react";
import "./Feed.css";
import StoryReal from "./StoryReal";
import MessageSender from "./MessageSender";
import Post from "./Post";
function Feed() {
  return (
    <div className="feed">
      <StoryReal />
      <MessageSender />
      <Post
        profilepic="https://netstorage-legit.akamaized.net/images/bd00d9358adfe705.jpg?imwidth=900"
        timestamp="10/12/20"
        username="niloy"
        message="This is a post"
        image="https://miro.medium.com/max/1000/0*wZAcNrIWFFjuJA78"
      />
      <Post
        profilepic="https://img.etimg.com/thumb/msid-59821212,width-650,imgsize-207608,,resizemode-4,quality-100/.jpg"
        timestamp="12/12/2020"
        username="jahid"
        message="this is another post"
        image="https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg"
      />
      <Post />
    </div>
  );
}

export default Feed;
