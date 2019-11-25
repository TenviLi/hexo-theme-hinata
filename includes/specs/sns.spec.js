const { doc, type, defaultValue } = require("../common/utils").descriptors;

module.exports = {
    [type]: "object",
    [doc]: "Sns Link icon settings",
    "*": {
        [type]: "object",
        [doc]: "Path or URL to the menu item, and/or link icon class names",
        icon: {
            [required]: true,
            [type]: "string",
            [doc]: "Link icon class names"
        },
        url: {
            [required]: true,
            [type]: "string",
            [doc]: "Path or URL to the menu item"
        }
    },
    [defaultValue]: {
        facebook: { icon: "fb", url: "https://www.facebook.com" },
        "google plus": { icon: "gp", url: "https://plus.google.com" },
        github: { icon: "github", url: "https://github.com/gylidian" },
        instagram: { icon: "ins", url: "https://www.instagram.com" },
        behance: { icon: "be", url: "https://www.behance.net" }
    }
};
