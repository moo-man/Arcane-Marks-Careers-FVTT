function loadTables() {

game.socket.emit("getFiles", "modules/arcane-marks-careers/tables", {}, resp => {
    for (var file of resp.files)
    {
      console.log(file);
    }
  })
}