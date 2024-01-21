// We are importing React and useful hooks
import React, { useState, useEffect } from 'react';
import StopWatch from './StopWatch';
import StopWatchButton from './StopWatchButton';

//start of of our function App that will be rendered + all the nuanced logic that needs to be immlemented
function App() {
    const [time, setTime] = useState(0);
    const [timerOn, setTimerOn] = useState(false);
    const [lapTimes, setLapTimes] = useState([]);

    useEffect(() => {
        let interval: NodeJS.Timeout; //this sets the interval variable type to be the return type of our setInterval 

        if (timerOn) {
            interval = setInterval(() => {                        //this updates out time state every 10 miliseconds, and rerenders the webpage
                setTime((prevTime) => prevTime + 1);
            }, 10);
        } else {
            clearInterval(interval);                             //clean up time! for unmount. 
        }
 
        return () => clearInterval(interval);                   //prevents memory leaks 
    }, [timerOn]);

    const handleReset = () => {                                //when you press reset, eveythig goes back to orginal state 
        setTimerOn(false);
        setTime(0);
        setLapTimes([]);
    };

    const handleLap = () => {
        setLapTimes((prevLapTimes) => [...prevLapTimes, time]); //array takes previous state of time (all of them), and then adds creates newState with the new time            
    };

    return (
        <div>
            <StopWatch                                                   //Giving stopWatch component here props to use for itself  
                timerOn={timerOn}                                       //False or true state passed
                handleStart={() => setTimerOn(true)}                   //Function given to start timer
                handleStop={() => setTimerOn(false)}                  //Function given to stop timer
                handleReset={handleReset}                            //Function given to reset states
                handleLap={handleLap}                               //Function given to handle laps
                lapTimes={lapTimes}                                //Array of lap times given
                time={time}                                       //Currrent time 
            />
        </div>
    );
}

export default App;