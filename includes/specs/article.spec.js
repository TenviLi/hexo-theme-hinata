const { doc, type, defaultValue } = require('../common/utils').descriptors;

module.exports = {
    [type]: 'object',
    [doc]: 'Article display settings',
    thumbnail: {
        [type]: 'boolean',
        [doc]: 'Whether to show article thumbnail images',
        [defaultValue]: true
    },
    readtime: {
        [type]: 'boolean',
        [doc]: 'Whether to show estimate article reading time',
        [defaultValue]: true
    }
};