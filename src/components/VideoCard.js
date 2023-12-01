import React from 'react'

const VideoCard = ({info}) => {

 // console.log("INFO",info)

  if (!info) {
    return null; // or handle the case when info is undefined
  }

   
  const{statistics,snippet}=info;
  const{title,thumbnails,channelTitle}=snippet;
  return (
    <div className='p-2 m-2 w-72 shadow-lg'><img className='rounded-lg' alt="thumbnail" src={thumbnails.medium.url}></img>
    <ul><li className='font-bold'>{title}</li>
    <li className='font-thin'>{channelTitle}</li> 
    <li>{statistics.viewCount} views</li></ul></div>
  )
}
export const AdVideoCard=({info})=>{return<div className='p-1 m-1 border border-red-600'><VideoCard info={info}/></div> }

export default VideoCard;