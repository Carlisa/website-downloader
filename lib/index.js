

function WDownloader(options) {
    var self = this;
    if (self.constructor !== WDownloader) {
        return new WDownloader(options);
    }
}

module.exports = WDownloader;
