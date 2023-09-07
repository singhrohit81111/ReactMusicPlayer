
import songs from '../data.json'
import Footer from './Footer';
import SongImage from './SongImage';
import Navbar from './Navbar';
import { useDispatch } from 'react-redux';
import { addSong } from '../Redux/Actions';

function Home() {
  const dispatch = useDispatch();
  const handleClick = (song: any) => {
    dispatch(addSong(song))
  }

  return (
    <>
      <Navbar />
      <div className='content'>
        <div className='songs'>
          {songs.map(song => {
            return <div className='songDetail' onClick={() => { handleClick(song) }}>
              <div className='song'>
                <div className='songImage'><img src={song.coverPhoto} style={{ height: "4vh" }} /></div>
                <div>{song.songName}</div>

              </div>
              <div className='remainingDetails'>
                <div>{song.totalTime}</div>

              </div>
            </div>
          })}
        </div>
        <SongImage />
      </div>
      <Footer />
    </>
  )
}

export default Home;
