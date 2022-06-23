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

  function select_song(selected_song) {
    // CHANGE SOUND SOURCE
    let new_sound = new Howl({
      src: selected_song,
      html5: true,
    });
    setSound(new_sound);

    setFilename(selected_song.split("/").pop());

    // CHANGE DISPLAY OF PLAYAUDIO
    setIsHidden(false);
  }

  return (
    <div>
      <div style={style}>
        <p className="text-danger m-2">
          Song selection is now disabled. Refresh page to change song
        </p>
      </div>

      <FileBrowser />
      {/* <div className="mt-3">
        <SelectAudio select_song={select_song} mp3_files={mp3_files} />
      </div>

      <div style={style}>
        <PlayAudio sound={sound} filename={filename} />
      </div> */}
    </div>
  );
}
