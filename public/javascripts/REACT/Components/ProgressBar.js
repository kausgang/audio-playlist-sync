function ProgressBar(props) {
  // COLLECT THE SOUND FILE TO FIND DURATION

  let sound = props.sound;

  const [duration, setDuration] = React.useState(0);

  const collect_value = (event, newvalue) => {
    // UPDATE THE SLIDER IN PARENT IF SLIDER IS DRAGGED
    props.slider_move(newvalue);
    // UPDATE SONG SEEK IF SLIDER IS DRAGGED
  };

  // DO IT IN COMPONENT DIDUPDATE
  // FIND OUT MAX DURATION OF THE AUDIO FILE AND SEND THAT AS PROPS TO SLIDER COMPONENT
  React.useEffect(() => {
    setDuration(sound.duration());
  });

  return (
    <div>
      <Slider
        max={duration > 100 ? duration : 100}
        defaultValue={props.slider_value}
        value={props.current_seek}
        onChange={collect_value}
      />
      {/* IT'LL TAKE TIME TO LOAD THE AUDIO. TO BEGIN WITH, MAKE SLIDER LENGTH=100(DEFAULT LENGTH OF SLIDER).
      IF USER CHANGES THE SLIDER, MAKE DURATION=SOUND DURATION */}

      {/* <Slider max={10} defaultValue={props.slider_value} value={props.current_seek} onChange={collect_value} /> */}
    </div>
  );
}

// BELOW CODE SHOWS THE BASIC OPERATION IN CLASS BASED APPROACH

// class ProgressBar extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   collect_value = (e, newvalue) => {
//     this.props.value(newvalue);
//   };
//   render() {
//     return (
//       <div>
//         <Slider onChange={this.collect_value} />
//       </div>
//     );
//   }
// }
