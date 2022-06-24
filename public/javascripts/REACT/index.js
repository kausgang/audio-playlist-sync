// let sample_sound = new Howl({
//   src: "../../sample/sample.mp3",
//   html5: true,
// });

// let sample_filename = "sample.mp3.txt";
let sample_filename = lastPlayed;

let sample_sound = new Howl({
  src: "../../AUDIO/" + sample_filename,
  html5: true,
});

const rootelement = document.getElementById("root");
const root = ReactDOM.createRoot(rootelement);
root.render(
  <div>
    {/* <SelectAudio /> */}
    {/* <Container sound={sound} filename={filename} /> */}
    <Container sound={sample_sound} filename={sample_filename} />
  </div>
);
