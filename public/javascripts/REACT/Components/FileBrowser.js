function FileBrowser() {
  const handleClick = (e) => {
    // console.log(e.target.innerHTML);
    let selectedSongName = e.target.innerHTML;
    console.log(selectedSongName);
    alert(selectedSongName);
  };

  return (
    <div>
      {/* <ul>{listItems}</ul> */}
      <List
        sx={{
          width: "100%",
          //   maxWidth: 360,
          bgcolor: "background.paper",
          position: "relative",
          overflow: "auto",
          maxHeight: 300,
          "& ul": { padding: 0 },
          border: 1,
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
