require("../includes/helpers/config")(hexo);

// Debug helper
hexo.extend.helper.register("console", function() {
    console.log(arguments);
});
