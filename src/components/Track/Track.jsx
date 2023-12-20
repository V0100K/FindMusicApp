// import { useContext } from "react";
// import { AudioContext } from "../../context/AudioContext";
// import style from "./track.module.scss";
// import { IconButton } from "@mui/material";
// import { PlayArrow, Pause, VolumeUp} from "@mui/icons-material";
// import secondsToMMSS from "./../../assets/utils/secondsToMMSS";
// import cn from "classnames";
//
// const Track = (track) => {
//     const { id, preview, title, artists, duration } = track;
//
//     const { handleToggleAudio, currentTrack, isPlaying, volume, handleVolumeChange } =
//         useContext(AudioContext);
//
//
//
//
//     const isCurrentTrack = currentTrack.id === id;
//
//     const formattedDuration = secondsToMMSS(duration);
//
//     return (
//         <div className={cn(style.track, isCurrentTrack && style.playing)}>
//             <IconButton onClick={() => handleToggleAudio(track)}>
//                 {isCurrentTrack && isPlaying ? <Pause /> : <PlayArrow />}
//             </IconButton>
//             <img className={style.preview} src={preview} alt="" />
//             <div className={style.credits}>
//                 <b>{title}</b>
//                 <p>{artists}</p>
//             </div>
//             <p>{formattedDuration}</p>
//
//
//             {/* Элемент управления громкостью */}
//             <div className={style.volumeControl}>
//                 <VolumeUp />
//                 <input
//                     type="range"
//                     min="0"
//                     max="1"
//                     step="0.01"
//                     value={volume}
//                     onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
//                 />
//             </div>
//
//
//
//         </div>
//     );
// };
//
// export default Track;


// // Track.jsx
// import { useContext } from "react";
// import { AudioContext } from "../../context/AudioContext";
// import style from "./track.module.scss";
// import { IconButton } from "@mui/material";
// import { PlayArrow, Pause, VolumeUp } from "@mui/icons-material";
// import secondsToMMSS from "../../assets/utils/secondsToMMSS";
// import cn from "classnames";
//
// const Track = ({ id, preview, title, artists, duration }) => {
//     const { handleToggleAudio, currentTrack, isPlaying, volume, handleVolumeChange } =
//         useContext(AudioContext);
//     const isCurrentTrack = currentTrack.id === id;
//     const formattedDuration = secondsToMMSS(duration);
//
//     return (
//         <div className={cn(style.track, isCurrentTrack && style.playing)}>
//             <IconButton onClick={() => handleToggleAudio({ id, preview, title, artists, duration })}>
//                 {isCurrentTrack && isPlaying ? <Pause /> : <PlayArrow />}
//             </IconButton>
//             <img className={style.preview} src={preview} alt="" />
//             <div className={style.credits}>
//                 <b>{title}</b>
//                 <p>{artists}</p>
//             </div>
//             <p>{formattedDuration}</p>
//             {isCurrentTrack && (
//                 <div className={style.volumeControl}>
//                     <VolumeUp />
//                     <input
//                         type="range"
//                         min="0"
//                         max="1"
//                         step="0.01"
//                         value={volume}
//                         onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
//                     />
//                 </div>
//             )}
//         </div>
//     );
// };
//
// export default Track;



import { useContext } from "react";
import { AudioContext } from "../../context/AudioContext";
import style from "./track.module.scss";
import { IconButton } from "@mui/material";
import { PlayArrow, Pause, VolumeUp } from "@mui/icons-material";
import secondsToMMSS from "../../assets/utils/secondsToMMSS";
import cn from "classnames";

const Track = (track) => {
    const { id, preview, title, artists, duration } = track;

    const { handleToggleAudio, currentTrack, isPlaying, volume, handleVolumeChange } =
        useContext(AudioContext);

    const isCurrentTrack = currentTrack.id === id;

    const formattedDuration = secondsToMMSS(duration);

    return (
        <div className={cn(style.track, isCurrentTrack && style.playing)}>
            <IconButton onClick={() => handleToggleAudio(track)}>
                {isCurrentTrack && isPlaying ? <Pause /> : <PlayArrow />}
            </IconButton>
            <img className={style.preview} src={preview} alt="" />
            <div className={style.credits}>
                <b>{title}</b>
                <p>{artists}</p>
            </div>
            <p>{formattedDuration}</p>

            {isCurrentTrack && (
                <div className={style.volumeControl}>
                    <VolumeUp />
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                    />
                </div>
            )}

        </div>
    );
};

export default Track;