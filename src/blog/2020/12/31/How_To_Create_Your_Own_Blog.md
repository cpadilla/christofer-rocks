---
title: How to Create Your Own Blog 100% for Free
date: Thursday, December 31, 2020
description: A guide on how I created my own blog and how you can too.
author: Christofer Padilla
type: article
tags: ["Guides"]
---

# How to Create Your Own Blog 100% for Free

I was tired of the Facebook echo chamber and the Instagram vanity mirror and missed the glory days of Myspace and the blogosphere. So I decided to quit Facebook and make my own blog. In my last post to Facebook, I declared you can create a blog 100% for free and I promised myself that one of my first blog posts would be how to do so.

So here we are. There are a few requirements that I needed for my blog, which is why I settled on using [Vuepress](https://vuepress.vuejs.org/). I came up with these requirements by working backwards from what I would want in an ideal blogging solution.

1. Everything must be free.
2. Blog posts should be created as easily as committing a markdown file.
3. My blog should be extensible with [Vue](https://vuejs.org/v2/guide/).

Vuepress seems to meet all of these requirements so I decided to just use it out of the box. If you are familiar with Github, you can copy my blog to start your own [here](https://github.com/cpadilla/christofer-rocks/releases/tag/2.0).

Otherwise, I'm going to cover the general instructions to set up your own blog, without going too deeply in the specifics.

## Creating your first Vuepress site

To start, I basically just followed the excellent guide I found [here](https://blog.logrocket.com/how-create-portfolio-blog-using-vuepress-markdown/). It does a great job introducing you to Vuepress enough for you to begin customizing your blog yourself. It says you should have a blog up and running in around 10 minutes, but I think that's a little generous.

Still, it goes over everything you really need to know and it shouldn't take you too long to get set up. It then barely goes over how to deploy your blog as a website, so that is the step I will cover in more detail next.

## Using Github pages to host your blog for free

The gist of how this works is as follows: You will use Github to host the source code of your blog for you. Github offers a feature called [Github pages](https://pages.github.com/), which we will then utilize to turn your source code into a real website.

The way this works is that you build your website from the source code, which generates the output in a folder called `dist`. You then upload that folder to github on a special `gh-pages` branch, which is how Github pages knows where to find your static site (basically the end product, or the final html file that is your entire blog). This site is now available for the world wide web to access thru a url like *mywebsite.github.io/blog*. If you want to spend money on your site, you can buy a domain name via [GoDaddy](https://www.godaddy.com/) or [Google Domains](http://domains.google.com/) to have your *mywebsite.github.io/blog* url redirect to a cooler name like *myadventures.blog*. You can get domains for pretty cheap. (My [christofer.rocks](christofer.rocks) domain was only $15 for 1 year.)

Ok. If you're still with me, here's how to do it.

1. Create a [Github](https://github.com/) account.
2. Host your code in a [new repository](https://github.com/new).
3. Go to your repository settings. For example, mine is at [https://github.com/cpadilla/christofer-rocks/settings](https://github.com/cpadilla/christofer-rocks/settings), although you obviously can't access my settings; your url should be something similar.
4. Scroll down to the Github Pages settings. Under source, you want to change the branch dropdown to `gh-pages`.
5. Follow the steps on the official [Vuepress documentation](https://vuepress.vuejs.org/guide/deploy.html#github-pages) page on deploying to GitHub pages. You pretty much just need to create the following shell script and run it.

```sh
#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
```

That's all there is to it! It's not that bad at all and now creating blog posts is as easy as creating a new markdown file and deploying it. Keep in mind that what is deployed in the `gh-pages` repo doesn't necessarily match up with what you commit to your main github repo that contains the source code.

Finally, if you do decide to spend money and obtain a custom domain, you can follow [these](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain) steps to redirect your GitHub page to your new domain. Don't forget to uncomment out the relevant line in your deploy script!

Hopefully, this guide will help you create your own blog and stake your claim in internet territory without the need of social media platforms. This is great because not only can you host all types of media, but you can also use Vue and HTML to create and share unique components as well such as panoramas, tweets and other widgets. It's truly the wild west of the web!

<TagLinks />

<Comments />
