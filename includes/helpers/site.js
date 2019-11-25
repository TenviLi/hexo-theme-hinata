/**
 * Helper functions related the site properties.
 *
 * @example
*     <%- word_count(content) %>
 */

module.exports = function (hexo) {
    /**
     * Get the word count of a paragraph.
     */
    hexo.extend.helper.register('word_count', function (content) {
        content = content.replace(/<\/?[a-z][^>]*>/gi, '');
        content = content.trim();
        return content ? (content.match(/[\u00ff-\uffff]|[a-zA-Z]+/g) || []).length : 0;
    });
}