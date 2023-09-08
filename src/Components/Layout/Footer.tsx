import React, { useEffect, useRef, useState } from 'react'
import { AiFillBackward, AiFillForward } from 'react-icons/ai';
import { BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs';
import '../Styles/style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '@services/Redux/Actions';
import songs from "../../data.json";
import { RootState } from '@services/Redux/Store';

interface FooterProps {

}
interface song {
    songName: string,
    filePath: string,
    coverPhoto: string,
    totalTime: string,
    meanTime: number,
    index: number
}

const Footer: React.FC<FooterProps> = () => {
    const [start, setStart] = useState<number>(1);
    const dispatch = useDispatch();
    const [currentSong, setCurrentSong] = useState<song>({
        songName: "",
        filePath: "",
        coverPhoto: "",
        totalTime: "",
        meanTime: 0,
        index: 0
    })
    const music = useSelector((music: RootState) => music.songChange);

    const audioref = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(music.playing);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);

    useEffect(() => {
        var z = songs[music.index];
        setCurrentSong({ ...z })

    }, [music])

    const initialVal = () => {
        if ((currentTime || duration) === 0) return 0;
        else { return (currentTime / duration) * 100; }
    }

    const togglePlayPause = () => {
        if (audioref.current!.paused) {
            audioref.current!.play();
            setIsPlaying(true);
        } else {
            audioref.current!.pause();
            setIsPlaying(false);
        }
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStart(Number(e.target.value))
        audioref.current!.currentTime = (Number(start) * Number(audioref.current!.duration)) / 100;

    }
    const handleTimeUpdate = () => {
        setCurrentTime(audioref.current!.currentTime);
        setDuration(audioref.current!.duration);
    }

    const handlePreviousTrack = () => {
        dispatch(decrement())
    }

    const handleNextTrack = () => {
        dispatch(increment());
    }
    return (
        <div className="footer">
            <div className="footerChildren">
                <div id="rangeBar">
                    <audio src={`${currentSong.filePath}`} ref={audioref} onTimeUpdate={handleTimeUpdate} autoPlay />
                    <input type="range" min={0} max={100} value={initialVal()} className="range" style={{ color: 'black' }} onChange={handleChange} />
                </div>
                <div className="icons">
                    <AiFillBackward className="footerButtons" onClick={handlePreviousTrack} />
                    <div onClick={togglePlayPause}>{isPlaying ? <BsFillPauseFill className="footerButtons" /> : <BsFillPlayFill className="footerButtons" />}</div>
                    <AiFillForward className="footerButtons" onClick={handleNextTrack} />
                </div>
            </div>

        </div>
    );
};

export default Footer;
