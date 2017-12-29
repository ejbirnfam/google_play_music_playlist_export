var playlist = document.querySelectorAll('.song-table tr.song-row');  
var output_string = "";
for (var i = 0; i < playlist.length; i++) {
	var artist = playlist[i].querySelectorAll('td[data-col="artist"')[0].textContent;
	var title = playlist[i].querySelectorAll('td[data-col="title"')[0].textContent;
	var new_artist = artist.replace(/\s+/g, " ").replace(/^\s|\s$/g, "");
	var new_title = title.replace(/\s+/g, " ").replace(/^\s|\s$/g, "");
	output_string = output_string + new_artist + "," + new_title + "," + "\n";
}
console.log(output_string);