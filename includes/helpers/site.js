/**
 * Helper functions related the site properties.
 *
 * @example
 *    <%- duration() %>
 *    <%- word_count(content) %>
 */
const moment = require('moment');

module.exports = function (hexo) {
    /**
     * Export moment.duration
     */
    hexo.extend.helper.register('duration', function () {
        return moment.duration.apply(moment, arguments);
    });

    /**
     * Get the word count of a paragraph.
     */
    hexo.extend.helper.register('word_count', function (content) {
        content = content.replace(/<\/?[a-z][^>]*>/gi, '');
        content = content.trim();
        return content ? (content.match(/[\u00ff-\uffff]|[a-zA-Z]+/g) || []).length : 0;
    });
}