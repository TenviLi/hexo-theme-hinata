require("../includes/helpers/config")(hexo);
require("../includes/helpers/override")(hexo);
require("../includes/helpers/page")(hexo);

// Debug helper
hexo.extend.helper.register("console", function() {
    console.log(arguments);
});
