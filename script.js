function GameDetails(servername, serverurl, mapname, maxplayers, steamid, gamemode, volume, language) {
  // Create a string of HTML with the details
  const details = `
    <h2>${servername}</h2>
    <p><strong>Map:</strong> ${mapname}</p>
    <p><strong>Max Players:</strong> ${maxplayers}</p>
    <p><strong>Game Mode:</strong> ${gamemode}</p>
    <p><strong>Language:</strong> ${language}</p>
  `;

  // Insert into the page
  document.getElementById("game-details").innerHTML = details;
}

// Example usage:
/* GameDetails(
  "My Server",
  "http://example.com",
  "Dust II",
  16,
  "STEAM_0:1:123456",
  "Deathmatch",
  "80%",
  "English"
); */

function SetStatusChanged(status) {
  const setstatus = `
    <p><strong>Status:</strong> ${status}</p>
  `;

  document.getElementById("set-status").innerHTML = setstatus;
}

//SetStatusChanged("loading");

function DownloadingFile(fileName) {
  const downfile = `
    <p><strong>Downloading File:</strong> ${fileName}</p>
  `;

  document.getElementById("downloading-file").innerHTML = downfile;
}

//DownloadingFile("a.map")

function SetFilesNeeded(needed) {
  const filesneeded = `
    <p><strong>Files left to download:</strong> ${needed}</p>
  `;

  document.getElementById("files-needed").innerHTML = filesneeded;
}


//SetFilesNeeded("12")
