import { useState } from "react";
import VideoRecorder from "../components/Recorder/VideoRecorder";
import AudioRecorder from "../components/Recorder/AudioRecorder";

import classes from "./RecordView.module.css";

const RecordView = () => {
  let [recordOption, setRecordOption] = useState("video");
  const toggleRecordOption = (type) => {
    return () => {
      setRecordOption(type);
    };
  };
  return (
    <div className={classes.recordContainer}>
      <h1>React Media Recorder</h1>
      <div className={classes["button-flex"]}>
        <button onClick={toggleRecordOption("video")}>Record Video</button>
        <button onClick={toggleRecordOption("audio")}>Record Audio</button>
      </div>
      <div>
        {recordOption === "video" ? <VideoRecorder /> : <AudioRecorder />}
      </div>
    </div>
  );
};
export default RecordView;
