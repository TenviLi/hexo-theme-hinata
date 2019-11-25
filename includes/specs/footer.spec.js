const { doc, type, defaultValue } = require("../common/utils").descriptors;

module.exports = {
    [type]: "object",
    [doc]: "Footer section link settings",
    [defaultValue]: {
        "Follow Me": {
            Weibo: "https://www.weibo.com",
            Zhihu: "https://www.zhihu.com",
            Instagram: "https://www.instagram.com",
            Twitter: "https://twitter.com",
            Github: "https://github.com/gylidian"
        },
        Resources: {
            Designmodo: "//designmodo.com/",
            Jenkov: "//tutorials.jenkov.com/",
            "Tympanus.net": "//tympanus.net/codrops/",
            Uisdc: "//www.uisdc.com/",
            "scotch.io": "//scotch.io",
            "css-tricks": "//css-tricks.com"
        },
        "My Friends": {
            Demo1: "https://github.com/gylidian",
            Demo2: "https://github.com/gylidian",
            Demo3: "https://github.com/gylidian",
            Demo4: "https://github.com/gylidian",
            Demo5: "https://github.com/gylidian"
        }
    },
    "*": {
        [type]: "object",
        [doc]: "Single column links settings",
        "*": {
            [type]: "string",
            [doc]: "Path or URL to the footer column item",
            [required]: true,
            [defaultValue]: "https://github.com/gylidian"
        }
    }
};
