import React from 'react';

interface StopWatchButtonProps {
    timerOn: boolean;
    handleStart: () => void;
    handleStop: () => void;
    handleReset: () => void;
    handleLap: () => void;
    lapTimes: number[];
}

const StopWatchButton: React.FC<StopWatchButtonProps> = ({
    timerOn,
    handleStart,
    handleStop,
    handleReset,
    handleLap,
    lapTimes,
}) => {
    return (
        <div>                      
            {timerOn ? (                                                   //If else statement, If timer is on, then show stop & lap button, otherwise show the start & reset
                <>
                    <button onClick={handleStop}>Stop</button>
                    <button onClick={handleLap}>Lap</button>
                </>
            ) : (
                <>
                    <button onClick={handleStart}>Start</button>
                    <button onClick={handleReset}>Reset</button>
                </>
            )}
        </div>
    );
}

export default StopWatchButton;