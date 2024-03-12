import React from 'react';
import Post from '../common/Post';
import Vote from './Vote';
const posts=[
  {id:0,title:"build reddit", author:"mansiii", upvotes:9},
  {id:1,title:"build esziet", author:"shagun"},
{id:2,title:"build rsvst", author:"abhay"},
{id:3,title:"build asevddas", author:"bachhi"},
]
const style={
  wrapper:'space-y-2.5',
  postContainer:'cursor-pointer',
}
const Feed = () => {
  return (
    <div className={style.wrapper}>
    {posts.map((post)=>(
      <Post {...post}/>
    ))}
    </div>
   
  )
}
export default Feed;