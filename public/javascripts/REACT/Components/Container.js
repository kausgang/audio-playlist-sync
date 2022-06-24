// const { default: FileBrowser } = require("./FileBrowser");

function Container(props) {
  //LOAD SAMPLE AUDIO WHEN COMPONENT LOADS

  // const [slider_value, setSlider_value] = React.useState(0);
  // const [bookmark_timestam, setBookmark_timestamp] = React.useState([null, 0]);
  const [sound, setSound] = React.useState(sample_sound);
  const [filename, setFilename] = React.useState(props.filename);

  const [isHidden, setIsHidden] = React.useState(true);

  var style = {};
  if (isHidden) {
    style.display = "none";
  }

  const songEnded = () => {
    console.log("ended");
  };

  const changeSong = (selectedSongName) => {
    console.log(selectedSongName);

    // if song changed stop previous sound
    sound.stop();
    // CHANGE SOUND SOURCE
    let songSource = "../../AUDIO/" + selectedSongName;
    let new_sound = new Howl({
      src: songSource,
      html5: true,
    });

    setSound(new_sound);

    setFilename(selectedSongName);

    //make a ajax call to save filename
    fetch("/", {
      method: "POST",
      body: JSON.stringify({
        filename: selectedSongName,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => {
      const status = response.status;
      console.log("status = ", status);
    });
  };

  // NOT IMPLEMENTED AS THIS FUNCTION IS CALLED MANY TIMES FOR SOME REASON
  const nextsong = () => {};

  return (
    <div>
      <div className="d-flex justify-content-center mt-4">
        <div className="d-flex flex-column">
          <div className="text-primary">
            <b>Files in ./public/AUDIO folder</b>
          </div>
          <FileBrowser changeSong={changeSong} />
        </div>
      </div>

      {/* <br /> */}
      <div>
        {/* {" "} */}
        <div className="text-danger"> Now Playing - </div>
        <div>
          <b>{filename}</b>
        </div>
      </div>

      <div>
        <PlayAudio sound={sound} filename={filename} onEnd={nextsong} />
      </div>
    </div>
  );
}
