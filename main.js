/**
 * Handy extension! Works like this to color code..
 * TODO (orange)
 * ? (blue) Question / Help me out partner.
 * ! (red) Warning / We should not forget this.
 * regular green for miscellaneous comments.
 * 
 * Extension : Name: Better Comments
    Id: aaron-bond.better-comments
    Description: Improve your code commenting by annotating with alert, informational, TODOs, and more!
    Version: 3.0.2
    Publisher: Aaron Bond
    VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments
 */

function log() {
  console.log('hello world')
}

log();

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://weed-strain1.p.rapidapi.com/?ordering=-strain",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "d4ed0cb2eemsh12542596531d07ap1e5c64jsn4a714d53114c",
		"X-RapidAPI-Host": "weed-strain1.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});