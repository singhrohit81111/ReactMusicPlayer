import { useEffect, useState } from 'react';
import './style.scss';
import { useSelector } from 'react-redux';
import ss from '../data.json';

interface details{
  songName:string,
  filePath:string,
  coverPhoto:string,
  totalTime:string,
  meanTime:number,
  index:number

}
export default function SongImage() {
  const currentSongDetails=useSelector((song:any)=>{return song.songChange});;
  console.log(currentSongDetails.index);
  const[data,setData]=useState<details>({
    songName:"",
    filePath:"",
    coverPhoto:"",
    totalTime:"",
    meanTime:0,
    index:0
  })
  useEffect(()=>{
    var z=ss[currentSongDetails.index];
    setData({...z})
    console.log(data);
    
  },[currentSongDetails])
  
  return (
    <div className='currentSongImage'>
      {data?<img src={data.coverPhoto} alt="No Image"/>:<div>No data</div>}
      <div className=''>
        <div>{data.songName}</div>
        <div>{data.totalTime}</div>
      </div>
    </div>
  )
}
