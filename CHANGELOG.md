# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.0.4](https://github.com/gylidian/hexo-theme-hinata/compare/v0.0.3...v0.0.4) (2019-11-25)


### Features

* **helpers/site:** add helper `duration` ([32de132](https://github.com/gylidian/hexo-theme-hinata/commit/32de132c7c909924719c2f857d1131aa53be5fcf))
* **helpers/site:** add helper `word_count`, it can count the number of words in an article ([5aaff6b](https://github.com/gylidian/hexo-theme-hinata/commit/5aaff6b531bfc9f35959cf3144bd1eb44f3534dc))


### Bug Fixes

* **footer.spec:** fix ReferenceError: required is not defined ([9b5e649](https://github.com/gylidian/hexo-theme-hinata/commit/9b5e649c704b463f87f9573fde3165f42cfef913))
* **footer.spec:** fix Unexpected token ; ([177a92f](https://github.com/gylidian/hexo-theme-hinata/commit/177a92f796ba78419ad94108788257aedbb69499))
* **helpers:** fix ReferenceError: hexo is not defined in override.js ([df41fe6](https://github.com/gylidian/hexo-theme-hinata/commit/df41fe685a93a0a9c042ab95285d7dca28fcc804))
* **helpers:** remove the requirement of module 'hexo-util' in page.js ([5331d02](https://github.com/gylidian/hexo-theme-hinata/commit/5331d020dee5b4080d9589a40e573795166e9995))
* **layout:** add CSS classes ([6589094](https://github.com/gylidian/hexo-theme-hinata/commit/658909464b572a7a68cca733a53432c9b64cb7fb))
* **layout:** change "slideshow" in "index" from "post" to "posts"` ([7434361](https://github.com/gylidian/hexo-theme-hinata/commit/7434361918dc20121ed7da728f972928720c604f))
* **layout:** fix Error: Partial common/scripts does not exist. (in layout.ejs) ([25136b5](https://github.com/gylidian/hexo-theme-hinata/commit/25136b50be8ac095f27a6d79e84de67d0c79aa22))
* **layout:** fix ReferenceError: posts is not defined, in index&slideshow ([9f0581d](https://github.com/gylidian/hexo-theme-hinata/commit/9f0581df7a1aef7a49d21180844e501350ba29ae))
* **layout:** remove the extra '}' displayed next to word_count ([2b46ebc](https://github.com/gylidian/hexo-theme-hinata/commit/2b46ebc03afdcd15e34cfb34e8f68f7ac7eb16a2))
* **layout/common/footer:** fix Error: Could not find matching close tag for "<%" ([9e2c47d](https://github.com/gylidian/hexo-theme-hinata/commit/9e2c47d7bcacdc7f5d20289a2a5c550441a9df9e))
* **layout/common/footer:** fix the culprit for the misplacement of footer links ([8aa4275](https://github.com/gylidian/hexo-theme-hinata/commit/8aa4275348c6f326a48fd5eecc916e7f69cfa1e3))
* **layout/index/article:** fix the culprit for the misplacement of article list layout ([05c3c01](https://github.com/gylidian/hexo-theme-hinata/commit/05c3c01485649845fc61d36617b7cdf13ef387c0))
* **layout/index/slideshow:** fix Partial index/slideshow does not exist. (in index.ejs) ([f5f4fb2](https://github.com/gylidian/hexo-theme-hinata/commit/f5f4fb248a780d6bc7ef61fb30f3d5ecb26fee71))
* **layout/post:** change `posts` to `site.posts` ([ce20025](https://github.com/gylidian/hexo-theme-hinata/commit/ce20025b9ed82f855c5f582c9f0b20f91167375f))
* **layout/post:** fix Error: Cannot read property '_content' of undefined ([07579b4](https://github.com/gylidian/hexo-theme-hinata/commit/07579b4c7dd52209e5d19d80e3e06bbc915b6ca3))
* **layout/post:** fix Error: post is not defined ([e3aed1c](https://github.com/gylidian/hexo-theme-hinata/commit/e3aed1c18b65be5253522128d08005b824f4aa6b))
* **layout/post:** fix SyntaxError: missing ) after argument list ([83c60b5](https://github.com/gylidian/hexo-theme-hinata/commit/83c60b50e4b5c5172c4656e0fb41840f35e33915))
* **layout/post:** fix the fucking error about `post.content` & `post._content` ([e1f7491](https://github.com/gylidian/hexo-theme-hinata/commit/e1f7491f1e904803f8539a1097ffcfb644d5dc10))
* **layout/post:** fix the missing { ([f971261](https://github.com/gylidian/hexo-theme-hinata/commit/f971261631722bd385dbeab0618634c6bfbb837e))
* **layout/post/read-next:** it is found that 'list tags()' will cause serious typographical disorder ([8c9fdaf](https://github.com/gylidian/hexo-theme-hinata/commit/8c9fdafd61666d99b0412d844121e6f1c71f5735))
* **spec:** fix ReferenceError: required is not defined in sns.spec ([cecc6c9](https://github.com/gylidian/hexo-theme-hinata/commit/cecc6c9e5274b489743000bdd7e74caa871be53f))

### [0.0.3](https://github.com/gylidian/hexo-theme-hinata/compare/v0.0.2...v0.0.3) (2019-11-25)


### Features

* **config:** make config support article.readtime setting ([4f1a572](https://github.com/gylidian/hexo-theme-hinata/commit/4f1a5727e793e9edf921eff9090b4e1c333bb6d4))
* **config:** support the setting for article.thumbnail ([a0c08f9](https://github.com/gylidian/hexo-theme-hinata/commit/a0c08f99671f007597fc88f33f4c8bd59722d7e6))
* **helper:** add helpers for post: `has_thumbnail`,`get_thumbnail` ([54c42ef](https://github.com/gylidian/hexo-theme-hinata/commit/54c42ef537fb9414d4dc226c69fae390bf1268b7))
* **layout:** completed the article part of the loop of the homepage layout ([ffcc417](https://github.com/gylidian/hexo-theme-hinata/commit/ffcc4177360e4a01bf9c3490f07b44c600dc7386))
* **layout:** completed the general layout of the index page ([4a879f5](https://github.com/gylidian/hexo-theme-hinata/commit/4a879f51b791e18f4e81c474c50d6caed6b0cb18))
* **layout:** completed the slideshow part of the homepage layout ([7709b8a](https://github.com/gylidian/hexo-theme-hinata/commit/7709b8a12cd766a9078a9a122bd10b6e9da3522b))
* **layout:** finished layout of post ([be55ddf](https://github.com/gylidian/hexo-theme-hinata/commit/be55ddf59f6381b70315499825ece3048d3a46c8))
* **layout:** paginator ojbk ([863c9d1](https://github.com/gylidian/hexo-theme-hinata/commit/863c9d1cc57c47760f8c85349ae47a563c93bd96))
* **layout&config:** support set sns icon links ([77d5462](https://github.com/gylidian/hexo-theme-hinata/commit/77d54621f44b20ef96945d8a360cabe2da53bc15))

### 0.0.2 (2019-11-24)


### Features

* **config:** add helpers `get_config`,`has_config` ([d0b60e1](https://github.com/gylidian/hexo-theme-hinata/commit/d0b60e1141b1ef7151909ab69c12a9787ced73c9))
* **config:** support Footer section link settings ([a1e2c29](https://github.com/gylidian/hexo-theme-hinata/commit/a1e2c291426a3bc99452c314d1026feba99778cf))
* **config:** support setting site navigation links ([0f4c67f](https://github.com/gylidian/hexo-theme-hinata/commit/0f4c67f6c39dc384a7605b781a24d8c7830617ef))
* **config:** support site logo setting ([effdc39](https://github.com/gylidian/hexo-theme-hinata/commit/effdc39e33f82e88b27f513c682cab163b59dd51))
* **head:** completed the `head` part of the overall layout of the website ([3ad062f](https://github.com/gylidian/hexo-theme-hinata/commit/3ad062f7d9ae6351dc865c1373fe4f36f189d1c0))
* **head:** make head support config `favicon` ([92d9b24](https://github.com/gylidian/hexo-theme-hinata/commit/92d9b24ea07512cd9df910ab9d1fae2f4f177f9f))
* **head:** make head support config `rss` ([dfd48ef](https://github.com/gylidian/hexo-theme-hinata/commit/dfd48efe94549226df04a1840e1115587f92b3c9))
* **helper:** add helper `_js` ([dc439e8](https://github.com/gylidian/hexo-theme-hinata/commit/dc439e8d41edf46b508c0c5c312a8160b8ca6d8f))
* **includes/common/utils:** add parameter validation descriptors ([b0f209e](https://github.com/gylidian/hexo-theme-hinata/commit/b0f209e41b9588410de1223cac810e42a2c21a5c))
* **layout:** complete script layout of the entire website ([626d670](https://github.com/gylidian/hexo-theme-hinata/commit/626d670b42f51ca84e7c93ddb609b43fe182ba36))
* **layout:** finish site's footer ([086c187](https://github.com/gylidian/hexo-theme-hinata/commit/086c187fd3402a3aa460c62f395fea962f33afd4))
* **layout.ejs:** completed the general layout of the website ([ac6ea3b](https://github.com/gylidian/hexo-theme-hinata/commit/ac6ea3be76a6b9570726538af5652cc77f5a2d38))


### Bug Fixes

* fix several errors about referencing navigation config ([9c5442c](https://github.com/gylidian/hexo-theme-hinata/commit/9c5442cb7a4546628c2626e2d3066acc1bc3c763))
