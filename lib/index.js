// Dependencies
var Request = require("request")
  , Fs = require("fs")
  , Ul = require("ul")
  , IsThere = require("is-there")
  , Cheerio = require("cheerio")
  ;

function WDownloader(options) {
    var self = this;
    if (self.constructor !== WDownloader) {
        return new WDownloader(options);
    }
    self.dest = options.dest || options.domain;
}

WDownloader.prototype.downloadPage = function (path, callback) {
    var self = this;
    Request(self.dest + path, function (err, res, body) {
        if (err) { return callback(err); }
        // TODO What happens if the body is empty?
        if (!body) { return callback(); }
        var $ = Cheerio.load(body);
    });
};

WDownloader.prototype.download = function (dest, callback) {
    Fs.mkdir(dest, function (err) {
        if (err) { return callback(err); }
    });
};

module.exports = WDownloader;
