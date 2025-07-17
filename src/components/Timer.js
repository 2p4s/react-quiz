import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  //create min variable
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(
    function () {
      //track it so we can clear it when unloaded, otherwise it will go nuts
      const id = setInterval(function () {
        dispatch({ type: "tick" }); //call the tick state every second
      }, 1000);
      //clean up to stop timer when done
      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      <p>
        {mins < 10 && "0"}
        {mins}:{seconds < 10 && "0"}
        {seconds}
      </p>
    </div>
  );
}

export default Timer;
