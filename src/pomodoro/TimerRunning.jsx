
import React, { useState } from "react";
import StopButton from "./StopButton";
import classNames from "../utils/class-names";

function TimerRunning({isTimerRunning, playPause, timerValues, setTimerValues}){

return (
<div className="row">
        <div className="col">
          <div
            className="btn-group btn-group-lg mb-2"
            role="group"
            aria-label="Timer controls"
          >
            <button
              type="button"
              className="btn btn-primary"
              data-testid="play-pause"
              title="Start or pause timer"
              onClick={playPause}
            >
              
              <span
                className={classNames({
                  oi: true,
                  "oi-media-play": !isTimerRunning,
                   "oi-media-pause": isTimerRunning,
                })}
              />
            </button>
            <StopButton
              type="button"
              className="btn btn-secondary"
              title="Stop the session"
              classStop="oi oi-media-stop"
              isTimerRunning={isTimerRunning}
              timerValues={timerValues}
              setTimerValues={setTimerValues}
              playPause={playPause}
            />
          </div>
        </div>
      </div>
    )
}

export default TimerRunning; 