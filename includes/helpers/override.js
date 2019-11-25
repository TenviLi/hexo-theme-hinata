/**
 * Helper functions that override Hexo built-in helpers.
 *
 * @example
 *     <%- _js() %>
 *     <%- _css() %>
 */

module.exports = function(hexo) {
    
    hexo.extend.helper.register("_js", function(url, defer = false, async = false) {
        const urlFor = hexo.extend.helper.get("url_for").bind(this);
        if (!url.endsWith(".js") && !url.includes("?")) {
            url += ".js";
        }
        return `<script src="${urlFor(
            url
        )}"${async ? " async" : ""}${defer ? " defer" : ""}></script>`;
    });

    hexo.extend.helper.register("_css", function(url) {
        const urlFor = hexo.extend.helper.get("url_for").bind(this);
        if (!url.endsWith(".css") && !url.includes("?")) {
            url += ".css";
        }
        return `<link rel="stylesheet" href="${urlFor(url)}">`;
    });
};
