import { useEffect, useState } from 'react';
import '../Styles/style.scss';
import { useSelector } from 'react-redux';
import songs from '../../data.json';
import { RootState } from '../../services/Redux/Store';

interface details {
  songName: string,
  filePath: string,
  coverPhoto: string,
  totalTime: string,
  meanTime: number,
  index: number

}
export default function SongImage() {
  const currentSongDetails = useSelector((song: RootState) => { return song.songChange });;
  const [data, setData] = useState<details>({
    songName: "",
    filePath: "",
    coverPhoto: "",
    totalTime: "",
    meanTime: 0,
    index: 0
  })
  useEffect(() => {
    var song = songs[currentSongDetails.index];
    setData({ ...song })

  }, [currentSongDetails])


  return (
    <div className='currentSongImage'>
      {data ? <img src={data.coverPhoto} alt="No Image" /> : <div>No data</div>}
      <div className='songInfo'>
        <div>{data.songName}</div>
        <div>{data.totalTime}</div>
      </div>
    </div>
  )
}
