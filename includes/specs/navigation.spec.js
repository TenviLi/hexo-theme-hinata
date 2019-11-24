const { doc, type, defaultValue } = require("../common/utils").descriptors;

module.exports = {
    [type]: "object",
    [doc]: "Navigation bar link settings",
    [defaultValue]: {
        Home: "/",
        Archives: "/archives",
        Categories: "/categories",
        Tags: "/tags",
        About: "/about"
    },
    "*": {
        [type]: "string",
        [doc]: "Path or URL to the menu item"
    }
};
