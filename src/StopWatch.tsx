import React from 'react';
import StopWatchButton from './StopWatchButton';

interface StopWatchProps {                   //Just want my StopWatch component to knwo the type of props it will receive
    timerOn: boolean;
    handleStart: () => void;
    handleStop: () => void;
    handleReset: () => void;
    handleLap: () => void;
    lapTimes: number[];
    time: number;
}

const StopWatch: React.FC<StopWatchProps> = ({                        
    timerOn,                                        //Giving it all the props
    handleStart,
    handleStop,
    handleReset,
    handleLap,
    lapTimes,
    time,
}) => {
    return (
        <div>
            <h1 className='timer'>                                  
                <span>{("0" + Math.floor((time / 360000))).slice(-2)}:</span>                 
                <span>{("0" + Math.floor((time % 360000) / 6000)).slice(-2)}:</span>          
                <span>{("0" + Math.floor((time % 6000) / 100)).slice(-2)}</span>              
            </h1>
            <StopWatchButton                                                                 //Props Given for the StopWatch Buttons
                timerOn={timerOn}
                handleStart={handleStart}
                handleStop={handleStop}
                handleReset={handleReset}
                handleLap={handleLap}
                lapTimes={lapTimes}
            />
            {lapTimes.length > 0 && (                               //If lapTimes array has one component or more, thern create a list for the lapped times 
                <div>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {lapTimes.map((lapTime, index) => (                         //Gives a unique index value to each mapped item 
                            <li key={index}>
                                {("0" + Math.floor((lapTime / 360000))).slice(-2)}:
                                {("0" + Math.floor((lapTime % 360000) / 6000)).slice(-2)}:
                                {("0" + Math.floor((lapTime % 6000) / 100)).slice(-2)}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default StopWatch;
