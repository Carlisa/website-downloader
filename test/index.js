// Dependencies
var WDownloader = require("../lib");

// Download Google index page
var google = new WDownloader({
    routes: ["/"]
});

google.download(__dirname + "/google", function (err) {
    console.log(err || "Downloaded Google.com");
});
