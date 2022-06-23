function PlayAudio(props) {
  const [slider_value, setSlider_value] = React.useState(0);
  const [bookmark_timestam, setBookmark_timestamp] = React.useState([null, 0]);

  let sound = props.sound;

  let filename = props.filename;

  //THIS IS FOR MANUAL SLIDER MOVEMENT
  function slider_handler(newValue) {
    setSlider_value(newValue);
  }

  function save_bookmark(bookmark_name, timestamp) {
    //API call to TO SAVE IT IN SERVER
    if (bookmark_name !== null) {
      fetch("/create_bookmark", {
        method: "POST",
        body: JSON.stringify({
          filename: filename,
          bookmark_name: bookmark_name,
          timestamp: timestamp,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then((response) => {
        const status = response.status;
        console.log("status = ", status);

        if (status !== 200) {
          alert("error occured writing to bookmark record");
        } else {
          // if(bookmark_name!==null)
          // alert("Bookmark created successfully");

          setBookmark_timestamp([bookmark_name, timestamp]);
        }
      });
    }
  }

  // SEEK PROGRESSBAR AND AUDIO IF BOOKMARK IS CLICKED
  function bookmark_seek(timestamp) {
    setSlider_value(parseInt(timestamp));
  }

  // RESET BOOKMARK_TIMESTAMP TO STOP RERENDERING BOOKMARK_LIST
  function reset_bookmark_timestamp() {
    setBookmark_timestamp([null, 0]);
  }

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
          />
        </div>
      </div>
    </div>
  );
}
