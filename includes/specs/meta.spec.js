const { doc, type, defaultValue } = require("../common/utils").descriptors;

module.exports = {
    favicon: {
        [type]: "string",
        [doc]: "Path or URL to the website's icon",
        [defaultValue]: "/images/favicon.ico"
    },
    rss: {
        [type]: "string",
        [doc]: "Path or URL to RSS atom.xml",
        [defaultValue]: null
    },
    logo: {
        [type]: ["string", "object"],
        [defaultValue]: "/images/logo.png",
        [doc]:
            "Path or URL to the website's logo to be shown on the left of the navigation bar or footer"
    }
};
