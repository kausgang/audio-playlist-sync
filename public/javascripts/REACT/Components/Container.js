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

  const changeSong = (selectedSongName) => {
    console.log(selectedSongName);

    // CHANGE SOUND SOURCE
    let songSource = "../../AUDIO/" + selectedSongName;
    let new_sound = new Howl({
      src: songSource,
      html5: true,
    });
    setSound(new_sound);

    setFilename(selectedSongName);
  };

  return (
    <div>
      <FileBrowser changeSong={changeSong} />

      <div>
        <PlayAudio sound={sound} filename={filename} />
      </div>
    </div>
  );
}
