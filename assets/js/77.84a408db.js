(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{416:function(e,t,o){"use strict";o.r(t);var r=o(25),s=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"how-to-create-your-own-blog-100-for-free"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-create-your-own-blog-100-for-free"}},[e._v("#")]),e._v(" How to Create Your Own Blog 100% for Free")]),e._v(" "),t("p",[e._v("I was tired of the Facebook echo chamber and the Instagram vanity mirror and missed the glory days of Myspace and the blogosphere. So I decided to quit Facebook and make my own blog. In my last post to Facebook, I declared you can create a blog 100% for free and I promised myself that one of my first blog posts would be how to do so.")]),e._v(" "),t("p",[e._v("So here we are. There are a few requirements that I needed for my blog, which is why I settled on using "),t("a",{attrs:{href:"https://vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vuepress"),t("OutboundLink")],1),e._v(". I came up with these requirements by working backwards from what I would want in an ideal blogging solution.")]),e._v(" "),t("ol",[t("li",[e._v("Everything must be free.")]),e._v(" "),t("li",[e._v("Blog posts should be created as easily as committing a markdown file.")]),e._v(" "),t("li",[e._v("My blog should be extensible with "),t("a",{attrs:{href:"https://vuejs.org/v2/guide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("p",[e._v("Vuepress seems to meet all of these requirements so I decided to just use it out of the box. If you are familiar with Github, you can copy my blog to start your own "),t("a",{attrs:{href:"https://github.com/cpadilla/christofer-rocks/releases/tag/2.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("Otherwise, I'm going to cover the general instructions to set up your own blog, without going too deeply in the specifics.")]),e._v(" "),t("h2",{attrs:{id:"creating-your-first-vuepress-site"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-your-first-vuepress-site"}},[e._v("#")]),e._v(" Creating your first Vuepress site")]),e._v(" "),t("p",[e._v("To start, I basically just followed the excellent guide I found "),t("a",{attrs:{href:"https://blog.logrocket.com/how-create-portfolio-blog-using-vuepress-markdown/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(". It does a great job introducing you to Vuepress enough for you to begin customizing your blog yourself. It says you should have a blog up and running in around 10 minutes, but I think that's a little generous.")]),e._v(" "),t("p",[e._v("Still, it goes over everything you really need to know and it shouldn't take you too long to get set up. It then barely goes over how to deploy your blog as a website, so that is the step I will cover in more detail next.")]),e._v(" "),t("h2",{attrs:{id:"using-github-pages-to-host-your-blog-for-free"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-github-pages-to-host-your-blog-for-free"}},[e._v("#")]),e._v(" Using Github pages to host your blog for free")]),e._v(" "),t("p",[e._v("The gist of how this works is as follows: You will use Github to host the source code of your blog for you. Github offers a feature called "),t("a",{attrs:{href:"https://pages.github.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github pages"),t("OutboundLink")],1),e._v(", which we will then utilize to turn your source code into a real website.")]),e._v(" "),t("p",[e._v("The way this works is that you build your website from the source code, which generates the output in a folder called "),t("code",[e._v("dist")]),e._v(". You then upload that folder to github on a special "),t("code",[e._v("gh-pages")]),e._v(" branch, which is how Github pages knows where to find your static site (basically the end product, or the final html file that is your entire blog). This site is now available for the world wide web to access thru a url like "),t("em",[e._v("mywebsite.github.io/blog")]),e._v(". If you want to spend money on your site, you can buy a domain name via "),t("a",{attrs:{href:"https://www.godaddy.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GoDaddy"),t("OutboundLink")],1),e._v(" or "),t("a",{attrs:{href:"http://domains.google.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Domains"),t("OutboundLink")],1),e._v(" to have your "),t("em",[e._v("mywebsite.github.io/blog")]),e._v(" url redirect to a cooler name like "),t("em",[e._v("myadventures.blog")]),e._v(". You can get domains for pretty cheap. (My "),t("a",{attrs:{href:"christofer.rocks"}},[e._v("christofer.rocks")]),e._v(" domain was only $15 for 1 year.)")]),e._v(" "),t("p",[e._v("Ok. If you're still with me, here's how to do it.")]),e._v(" "),t("ol",[t("li",[e._v("Create a "),t("a",{attrs:{href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github"),t("OutboundLink")],1),e._v(" account.")]),e._v(" "),t("li",[e._v("Host your code in a "),t("a",{attrs:{href:"https://github.com/new",target:"_blank",rel:"noopener noreferrer"}},[e._v("new repository"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("li",[e._v("Go to your repository settings. For example, mine is at "),t("a",{attrs:{href:"https://github.com/cpadilla/christofer-rocks/settings",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/cpadilla/christofer-rocks/settings"),t("OutboundLink")],1),e._v(", although you obviously can't access my settings; your url should be something similar.")]),e._v(" "),t("li",[e._v("Scroll down to the Github Pages settings. Under source, you want to change the branch dropdown to "),t("code",[e._v("gh-pages")]),e._v(".")]),e._v(" "),t("li",[e._v("Follow the steps on the official "),t("a",{attrs:{href:"https://vuepress.vuejs.org/guide/deploy.html#github-pages",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vuepress documentation"),t("OutboundLink")],1),e._v(" page on deploying to GitHub pages. You pretty much just need to create the following shell script and run it.")])]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[e._v("#!/usr/bin/env sh")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# abort on errors")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-e")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# build")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run docs:build\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# navigate into the build output directory")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" docs/.vuepress/dist\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# if you are deploying to a custom domain")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# echo 'www.example.com' > CNAME")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" init\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-A")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" commit "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-m")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'deploy'")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# if you are deploying to https://<USERNAME>.github.io")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# if you are deploying to https://<USERNAME>.github.io/<REPO>")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" -\n")])])]),t("p",[e._v("That's all there is to it! It's not that bad at all and now creating blog posts is as easy as creating a new markdown file and deploying it. Keep in mind that what is deployed in the "),t("code",[e._v("gh-pages")]),e._v(" repo doesn't necessarily match up with what you commit to your main github repo that contains the source code.")]),e._v(" "),t("p",[e._v("Finally, if you do decide to spend money and obtain a custom domain, you can follow "),t("a",{attrs:{href:"https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain",target:"_blank",rel:"noopener noreferrer"}},[e._v("these"),t("OutboundLink")],1),e._v(" steps to redirect your GitHub page to your new domain. Don't forget to uncomment out the relevant line in your deploy script!")]),e._v(" "),t("p",[e._v("Hopefully, this guide will help you create your own blog and stake your claim in internet territory without the need of social media platforms. This is great because not only can you host all types of media, but you can also use Vue and HTML to create and share unique components as well such as panoramas, tweets and other widgets. It's truly the wild west of the web!")]),e._v(" "),t("TagLinks"),e._v(" "),t("Comments")],1)}),[],!1,null,null,null);t.default=s.exports}}]);