function PlayAudio(props) {
  const [slider_value, setSlider_value] = React.useState(0);
  const [bookmark_timestam, setBookmark_timestamp] = React.useState([null, 0]);

  let sound = props.sound;

  let filename = props.filename;

  //THIS IS FOR MANUAL SLIDER MOVEMENT
  function slider_handler(newValue) {
    setSlider_value(newValue);
  }

  const handleEnd = (songFileName) => {
    props.onEnd(songFileName);
  };

  const songinfo = () => {
    // alert(sound.duration());
    let SECONDS = sound.duration();
    // Show duration in hh:mm:ss
    var result = new Date(SECONDS * 1000).toISOString().substring(11, 19);
    alert("Track Duration - " + result + "\nor " + SECONDS + " Seconds");
  };

  return (
    <div>
      <br></br>
      <ProgressBar
        sound={sound}
        slider_move={slider_handler}
        current_seek={slider_value}
      />

      <p>{slider_value} Seconds</p>
      {/* <p>{slider_value > 60 ? slider_value / 60 : slider_value} minutes</p> */}

      <div className="d-flex justify-content-between m-2">
        <div>
          <button className="btn btn-lg btn-info" onClick={songinfo}>
            Track Info
          </button>
        </div>

        <div>
          <PlaybackControl
            seek_progressbar={slider_handler}
            current_seek={slider_value}
            sound={sound}
            filename={filename}
            onEnd={handleEnd}
          />
        </div>
      </div>
    </div>
  );
}
