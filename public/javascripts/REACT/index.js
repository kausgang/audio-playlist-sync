let sample_sound = new Howl({
  src: "../../sample/sample.mp3",
  html5: true,
});

let sample_filename = "sample.mp3.txt";

// var sound = new Howl({
//   src: {audio},
//   html5: true,
// });

// GET FILENAME
// let filename = sound._src.split("/").pop();
// console.log(filename)

const rootelement = document.getElementById("root");
const root = ReactDOM.createRoot(rootelement);
root.render(
  <div>
    {/* <SelectAudio /> */}
    {/* <Container sound={sound} filename={filename} /> */}
    <Container sound={sample_sound} filename={sample_filename} />
  </div>
);
