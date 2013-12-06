chrome.browserAction.onClicked.addListener(function(tab) {
var color='#'+Math.floor(Math.random()*16777215).toString(16);
console.log('"'+color+'"');
document.body.style.backgroundColor='"'+color+'"';
document.getElementById("focus").innerHTML="NOPE";
});

function doThis()
{
	console.log("we are here");
	document.getElementById("focus").innerHTML="NOPE";
}


window.onload=doThis;
