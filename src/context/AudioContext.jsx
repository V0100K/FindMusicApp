// import { createContext, useState } from "react";
// import tracksList from "../assets/tracksList.js";
//
// const defaultTrack = tracksList[0];
//
// const audio = new Audio(defaultTrack.src);
//
// export const AudioContext = createContext({});
//
// const AudioProvider = ({ children }) => {
//     const [currentTrack, setCurrentTrack] = useState(defaultTrack);
//     const [isPlaying, setPlaying] = useState(false);
//     const [volume, setVolume] = useState(0.5); // Добавляем состояние для громкости
//
//     const handleToggleAudio = (track) => {
//         if (currentTrack.id !== track.id) {
//             setCurrentTrack(track);
//             setPlaying(true);
//
//             audio.src = track.src;
//             audio.currentTime = 0;
//             audio.play();
//
//             return;
//         }
//
//         if (isPlaying) {
//             audio.pause();
//             setPlaying(false);
//         } else {
//             audio.play();
//             setPlaying(true);
//         }
//     };
//
//
//
//
//
//     // Функция для управления громкостью
//     const handleVolumeChange = (value) => {
//         audio.volume = value; // Устанавливаем громкость
//         setVolume(value); // Обновляем состояние громкости
//
//         console.log(audio.volume)
//     }
//
//     const valueVol = {
//         currentTrack,
//         isPlaying,
//         handleToggleAudio,
//         volume, // Передаем состояние громкости в контекст
//         handleVolumeChange // Передаем функцию управления громкостью в контекст
//     };
//
//
//
//
//     const value = { audio, currentTrack, isPlaying, handleToggleAudio };
//
//     return (
//         <AudioContext.Provider value={valueVol}>{children}</AudioContext.Provider>
//     );
// };
//
// export default AudioProvider;

// AudioContext
import { createContext, useState, useEffect } from "react";
import tracksList from "../assets/tracksList.js";

const defaultTrack = tracksList[0];

const audio = new Audio(defaultTrack.src);

export const AudioContext = createContext({});

const AudioProvider = ({ children }) => {
    const [currentTrack, setCurrentTrack] = useState(defaultTrack);
    const [isPlaying, setPlaying] = useState(false);
    const [volume, setVolume] = useState(0.4);

    const handleToggleAudio =  (track) => {
        if (currentTrack.id !== track.id) {
            setCurrentTrack(track);
            setPlaying(true);

            audio.src = track.src;
            audio.currentTime = 0;
            audio.play();

            return;
        }

        if (isPlaying) {
            audio.pause();
            setPlaying(false);
        } else {
            audio.play();
            setPlaying(true);
        }
        console.log(track.src)
        console.log(audio.src)
    };

    const handleVolumeChange = (value) => {
        audio.volume = value;
        setVolume(value);
        console.log("Volume changed to", value);
    };

    useEffect(() => {
        audio.addEventListener("ended", () => {
            setPlaying(false);
        });

        return () => {
            audio.removeEventListener("ended", () => {
                setPlaying(false);

            });
        };
    }, []);

    const value = {
        currentTrack,
        isPlaying,
        volume,
        audio,
        handleToggleAudio,
        handleVolumeChange,
    };

    return (
        <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
    );
};

export default AudioProvider;

