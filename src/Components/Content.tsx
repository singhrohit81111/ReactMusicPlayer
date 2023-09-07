import React from 'react'
import { useDispatch } from 'react-redux';
import { addSong } from '../Redux/Actions';
import songs from '../data.json';
import SongImage from './SongImage';

export default function Content() {
    const dispatch = useDispatch();
    const handleClick = (song: any) => {
        dispatch(addSong(song))
    }
    return (
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
    )
}
