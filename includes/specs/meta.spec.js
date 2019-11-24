const { doc, type, defaultValue } = require('../common/utils').descriptors;

module.exports = {
    favicon: {
        [type]: 'string',
        [doc]: 'Path or URL to the website\'s icon',
        [defaultValue]: '/images/favicon.svg',
    },
    rss: {
        [type]: 'string',
        [doc]: 'Path or URL to RSS atom.xml',
        [defaultValue]: null
    }
};