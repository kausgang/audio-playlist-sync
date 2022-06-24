function FileBrowser(props) {
  const handleClick = (e) => {
    // console.log(e.target);
    let selectedSongName = e.target.innerHTML;
    // console.log(selectedSongName);
    // alert(selectedSongName);
    props.changeSong(selectedSongName);
  };

  return (
    <div>
      <List
        sx={{
          width: "90%",
          // maxWidth: 360,
          bgcolor: "background.paper",
          position: "relative",
          overflow: "auto",
          maxHeight: 300,
          "& ul": { padding: 0 },
          border: 1,
          borderRadius: "16px",
        }}
        subheader={<li />}
      >
        <ul>
          {mp3_files.map((file, index) => (
            <ListItem key={index}>
              <ListItemButton>
                <ListItemText primary={file} onClick={handleClick} />
              </ListItemButton>
            </ListItem>
          ))}
        </ul>
      </List>
    </div>
  );
}
