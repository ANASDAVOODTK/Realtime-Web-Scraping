# Realtime-Web-Scraping-
Scrape Webpages using JS and Autocode


<!DOCTYPE html>
<html>

<head>

  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
  <meta charset="utf-8">
  <title>Introducing the Crawler Query API: Scrape Webpages via CSS · Autocode</title>
  <link rel="shortcut icon" href="https://content.public.files.stdlib.com/shared/static/branding/favicon-01.png" type="image/png" />
  <meta name="description" content="Hey everyone,">
  <meta name="keywords" content="autocode, webhooks, build webhooks, build apis, build scripts, code generation, api, api development, api publishing, function as a service, functions as a service, serverless, microservice, microservices, faas, baas, baas, iaas, function, service, standard library, deployment, app, node, node.js, workflows">
  

  <meta property="og:site_name" content="Introducing the Crawler Query API: Scrape Webpages via CSS · Autocode">
  <meta property="og:title" content="Introducing the Crawler Query API: Scrape Webpages via CSS · Autocode">
  <meta property="og:url" content="https://autocode.com/community/announcements/introducing-the-crawler-query-api-scrape-webpages-via-css/">
  <meta property="og:type" content="website">
  <meta property="og:description" content="Hey everyone,">
  <meta property="og:image" content="https://content.public.files.stdlib.com/shared/static/social/autocode-512.png">

  <meta name="twitter:title" content="Introducing the Crawler Query API: Scrape Webpages via CSS · Autocode">
  <meta name="twitter:image" content="https://content.public.files.stdlib.com/shared/static/social/autocode-512.png">
  <meta name="twitter:url" content="https://autocode.com/community/announcements/introducing-the-crawler-query-api-scrape-webpages-via-css/">
  <meta name="twitter:card" content="summary">
  <meta name="twitter:description" content="Hey everyone,">
  <meta name="twitter:site" content="@AutocodeHQ">
  <meta name="twitter:creator" content="@keithwhor">

  <script src="https://js.stripe.com/v3/"></script>

  <script src="https://tools.autocode.com/globals/a7c810/globals.js"></script>
  <script src="/compile/a7c810/script.js"></script>
  <script src="https://browser.sentry-cdn.com/5.16.1/bundle.min.js" integrity="sha384-XeIbINcUQP10HtmVHwZigannjNDpoQRe+uhAoW9J5HU5dHFpilP164LjqO78xtIB" crossorigin="anonymous"></script>
  <link rel="stylesheet" type="text/css" href="/compile/a7c810/style.css">
  <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
  <script async src="https://platform.twitter.com/oct.js" type="text/javascript"></script>

  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-74140727-5"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-74140727-5');
    gtag('config', 'AW-881288691');
  </script>

</head>

<body>
  <noscript>
    <article>
<p>Hey everyone,</p>
<p>Another week, another update. We&#39;ve published a few minor changes to Standard Library and Autocode in the past couple of weeks, namely;</p>
<ul>
<li>Better Autocomplete support in Maker Mode</li>
<li>Customize / Configure environment variables from GitHub-based template projects, where applicable</li>
</ul>
<p>This week we&#39;re launching a new Standard Library API on the <code>crawler</code> namespace, namely the <code>crawler.query</code> API. It&#39;s available at <a href="https://standardlibrary.com/@crawler/lib/query/">standardlibrary.com/@crawler/lib/query/</a>. Right now, this API lets you seamlessly query data from webpages based on CSS selectors via the <code>.selectors</code> endpoint. This is useful for running scheduled tasks to scrape new website data.</p>
<h1 id="crawler-query-scraping-example">Crawler Query (Scraping) Example</h1>
<p>A quick example of the <code>crawler.query</code> API is using it to scrape the top 30 stories on Hacker News right now. To do that, use this link;</p>
<p><a href="https://autocode.standardlibrary.com/new/?workflow=crawler%2Fquery%2Fselectors">autocode.standardlibrary.com/new/?workflow=crawler%2Fquery%2Fselectors</a></p>
<p>This will open up an interface that looks something like this;</p>
<p><img src="https://standardlibrary-dotcom.s3.amazonaws.com/static/blog/introducing-the-crawler-query-api-scrape-webpages-via-css/maker-mode-autocode-example.png" alt="Maker Mode Example"></p>
<p>This is a part of <a href="https://autocode.com/">Autocode</a> called <strong>Maker Mode</strong> and can be used to pre-generate API logic. You can edit the code at any time by clicking on the code example to the right. You can see I&#39;ve already pre-filled the following settings;</p>
<ul>
<li><strong>url</strong> is <code>https://news.ycombinator.com/</code></li>
<li><strong>userAgent</strong> is <code>standardlibrary/crawler/query</code> (this is the default)</li>
<li><strong>includeMetadata</strong> is <code>False</code> (if <code>True</code>, will return additional metadata in a <code>meta</code> field in the response)</li>
<li><strong>selectorQueries</strong> is an array with one object, the values being <code>{&quot;selector&quot;:&quot;a.storylink&quot;,&quot;resolver&quot;:&quot;text&quot;}</code></li>
</ul>
<p>These settings generate the code;</p>
<pre><code class="language-javascript">// Store API Responses
const result = {crawler: {}};

console.log(`Running [Crawler → Query (scrape) a provided URL based on CSS selectors]...`);
result.crawler.pageData = await lib.crawler.query[&#39;@0.0.1&#39;].selectors({
  url: `https://news.ycombinator.com/`,
  userAgent: `standardlibrary/crawler/query`,
  includeMetadata: false,
  selectorQueries: [
    {
      &#39;selector&#39;: `a.storylink`,
      &#39;resolver&#39;: `text`
    }
  ]
});</code></pre>
<p>This can now be run by hitting <strong>Run Code</strong> in the bottom right. As of writing this, the Hacker News Front Page looks like this:</p>
<p><img src="https://standardlibrary-dotcom.s3.amazonaws.com/static/blog/introducing-the-crawler-query-api-scrape-webpages-via-css/hn-top-5.png" alt="HN Top 5"></p>
<p>So my returned response was (I&#39;ve truncated to only five results):</p>
<pre><code class="language-json">{
  &quot;url&quot;: &quot;https://news.ycombinator.com/&quot;,
  &quot;userAgent&quot;: &quot;standardlibrary/crawler/query&quot;,
  &quot;queryResults&quot;: [
    [
      {
        &quot;text&quot;: &quot;Zig cc: A drop-in replacement for GCC/Clang&quot;
      },
      {
        &quot;text&quot;: &quot;I got my file from Clearview AI&quot;
      },
      {
        &quot;text&quot;: &quot;A Novel Mechanical Ventilator Designed for Mass Scale Production&quot;
      },
      {
        &quot;text&quot;: &quot;Little Snitch and the deprecation of kernel extensions&quot;
      },
      {
        &quot;text&quot;: &quot;Doctors turn to social media to develop Covid-19 treatments in real time&quot;
      }
    ]
  ]
}</code></pre>
<p>And that&#39;s it! That&#39;s how easy the <code>crawler.query</code> API is to use.</p>
<h1 id="web-scraping-next-steps">Web Scraping, Next Steps</h1>
<p>You might be wondering how to customize this further. First, the <code>resolver</code> object attribute can take one of <strong>four</strong> values: <code>text</code>, <code>html</code>, <code>attr</code> and <code>map</code>.</p>
<ul>
<li><code>text</code> returns the element text</li>
<li><code>html</code> returns the element HTML</li>
<li><code>attr</code> returns an HTML attribute of the element, you must add an additional <code>attr</code> key with a value like <code>&quot;attr&quot;: &quot;href&quot;</code></li>
<li><code>map</code> returns a nested CSS selector query, this requires an additional <code>mapQueries</code> attribute expecting another array of <code>selectorQueries</code></li>
</ul>
<h1 id="using-resolver-attr">Using <strong><code>&quot;resolver&quot;: &quot;attr&quot;</code></strong></h1>
<p>For this query:</p>
<pre><code class="language-javascript">result.crawler.pageData = await lib.crawler.query[&#39;@0.0.1&#39;].selectors({
  url: `https://news.ycombinator.com/`,
  userAgent: `standardlibrary/crawler/query`,
  includeMetadata: false,
  selectorQueries: [
    {
      &#39;selector&#39;: `a.storylink`,
      &#39;resolver&#39;: `attr`,
      &#39;attr&#39;: `href`
    }
  ]
});</code></pre>
<p>We would expect a response that looks like this:</p>
<pre><code>{
  &quot;url&quot;: &quot;https://news.ycombinator.com/&quot;,
  &quot;userAgent&quot;: &quot;standardlibrary/crawler/query&quot;,
  &quot;queryResults&quot;: [
    [
      {
        &quot;attr&quot;: &quot;https://andrewkelley.me/post/zig-cc-powerful-drop-in-replacement-gcc-clang.html&quot;
      },
      {
        &quot;attr&quot;: &quot;https://onezero.medium.com/i-got-my-file-from-clearview-ai-and-it-freaked-me-out-33ca28b5d6d4&quot;
      },
      {
        &quot;attr&quot;: &quot;https://arxiv.org/abs/2003.10405&quot;
      },
      {
        &quot;attr&quot;: &quot;https://blog.obdev.at/little-snitch-and-the-deprecation-of-kernel-extensions/&quot;
      },
      {
        &quot;attr&quot;: &quot;https://www.bloomberg.com/news/articles/2020-03-24/covid-19-mysteries-yield-to-doctors-new-weapon-crowd-sourcing&quot;
      }
    ]
  ]
}</code></pre><h1 id="using-resolver-map">Using <strong><code>&quot;resolver&quot;: &quot;map&quot;</code></strong></h1>
<p>We can use <code>map</code> to make subqueries (called <code>mapQueries</code>) against a selector to parse data in parallel. For example, if we want to combine the above two queries (get both title and URL simultaneously)...</p>
<pre><code class="language-javascript">result.crawler.pageData = await lib.crawler.query[&#39;@0.0.1&#39;].selectors({
  url: `https://news.ycombinator.com/`,
  userAgent: `standardlibrary/crawler/query`,
  includeMetadata: false,
  selectorQueries: [
    {
      &#39;selector&#39;: `tr[id]:not([id=&quot;pagespace&quot;])`,
      &#39;resolver&#39;: `map`,
      &#39;mapQueries&#39;: [
        {
          &#39;selector&#39;: &#39;a.storylink&#39;,
          &#39;resolver&#39;: &#39;text&#39;
        },
        {
          &#39;selector&#39;: &#39;a.storylink&#39;,
          &#39;resolver&#39;: &#39;attr&#39;,
          &#39;attr&#39;: &#39;href&#39;
        }
      ]
    }
  ]
});</code></pre>
<p>And we&#39;ll get a result like this...</p>
<pre><code class="language-json">{
  &quot;url&quot;: &quot;https://news.ycombinator.com/&quot;,
  &quot;userAgent&quot;: &quot;standardlibrary/crawler/query&quot;,
  &quot;queryResults&quot;: [
    [
      {
        &quot;mapResults&quot;: [
          [
            {
              &quot;text&quot;: &quot;Zig cc: A drop-in replacement for GCC/Clang&quot;
            }
          ],
          [
            {
              &quot;attr&quot;: &quot;https://andrewkelley.me/post/zig-cc-powerful-drop-in-replacement-gcc-clang.html&quot;
            }
          ]
        ]
      },
      {
        &quot;mapResults&quot;: [
          [
            {
              &quot;text&quot;: &quot;I got my file from Clearview AI&quot;
            }
          ],
          [
            {
              &quot;attr&quot;: &quot;https://onezero.medium.com/i-got-my-file-from-clearview-ai-and-it-freaked-me-out-33ca28b5d6d4&quot;
            }
          ]
        ]
      },
      {
        &quot;mapResults&quot;: [
          [
            {
              &quot;text&quot;: &quot;A Novel Mechanical Ventilator Designed for Mass Scale Production&quot;
            }
          ],
          [
            {
              &quot;attr&quot;: &quot;https://arxiv.org/abs/2003.10405&quot;
            }
          ]
        ]
      },
      {
        &quot;mapResults&quot;: [
          [
            {
              &quot;text&quot;: &quot;Little Snitch and the deprecation of kernel extensions&quot;
            }
          ],
          [
            {
              &quot;attr&quot;: &quot;https://blog.obdev.at/little-snitch-and-the-deprecation-of-kernel-extensions/&quot;
            }
          ]
        ]
      },
      {
        &quot;mapResults&quot;: [
          [
            {
              &quot;text&quot;: &quot;Doctors turn to social media to develop Covid-19 treatments in real time&quot;
            }
          ],
          [
            {
              &quot;attr&quot;: &quot;https://www.bloomberg.com/news/articles/2020-03-24/covid-19-mysteries-yield-to-doctors-new-weapon-crowd-sourcing&quot;
            }
          ]
        ]
      }
    ]
  ]
}</code></pre>
<p><strong>Please Note:</strong> With the current version of the API, you can only use <code>map</code> at the top-level of <code>selectorQueries</code>.</p>
<h1 id="thats-it">That&#39;s it!</h1>
<p>We hope you enjoy playing around with scraping web page data. We&#39;ll have more tutorials incoming on how you can leverage this API more successfully. In the meantime, we encourage you to keep using <a href="https://autocode.com">Autocode</a> or jump into <a data-slack-button href="#" onclick="return false;">our Slack Community</a> to say hello. Looking forward to more!</p>
<div class="signature">
  <div class="signature-name">Keith Horwood</div>
  <div class="signature-title">Founder and CEO, Standard Library</div>
</div>
</article>
  </noscript>
  
  <script type="application/ld+json">
    {
  "@context": "https://schema.org/",
  "@type": "Article",
  "url": "https://autocode.com/community/announcements/introducing-the-crawler-query-api-scrape-webpages-via-css",
  "headline": "Introducing the Crawler Query API: Scrape Webpages via CSS",
  "name": "Introducing the Crawler Query API: Scrape Webpages via CSS",
  "articleBody": "Hey everyone, Another week, another update. We&#39;ve published a few minor changes to Standard Library and Autocode in the past couple of weeks, namely; Better Autocomplete support in Maker Mode Customize / Configure environment variables from GitHub-based template projects, where applicable This week we&#39;re launching a new Standard Library API on the crawler namespace, namely the crawler.query API. It&#39;s available at stdlib.com/@crawler/lib/query/. Right now, this API lets you seamlessly query data from webpages based on CSS selectors via the .selectors endpoint. This is useful for running scheduled tasks to scrape new website data. Crawler Query (Scraping) Example A quick example of the crawler.query API is using it to scrape the top 30 stories on Hacker News right now. To do that, use this link; autocode.stdlib.com/new/?workflow=crawler%2Fquery%2Fselectors This will open up an interface that looks something like this; This is a part of Autocode called Maker Mode and can be used to pre-generate API logic. You can edit the code at any time by clicking on the code example to the right. You can see I&#39;ve already pre-filled the following settings; url is https://news.ycombinator.com/ userAgent is stdlib/crawler/query (this is the default) includeMetadata is False (if True, will return additional metadata in a meta field in the response) selectorQueries is an array with one object, the values being {&quot;selector&quot;:&quot;a.storylink&quot;,&quot;resolver&quot;:&quot;text&quot;} These settings generate the code; // Store API Responses const result = {crawler: {}}; console.log(`Running [Crawler → Query (scrape) a provided URL based on CSS selectors]...`); result.crawler.pageData = await lib.crawler.query[&#39;@0.0.1&#39;].selectors({   url: `https://news.ycombinator.com/`,   userAgent: `stdlib/crawler/query`,   includeMetadata: false,   selectorQueries: [     {       &#39;selector&#39;: `a.storylink`,       &#39;resolver&#39;: `text`     }   ] }); This can now be run by hitting Run Code in the bottom right. As of writing this, the Hacker News Front Page looks like this: So my returned response was (I&#39;ve truncated to only five results): {   &quot;url&quot;: &quot;https://news.ycombinator.com/&quot;,   &quot;userAgent&quot;: &quot;stdlib/crawler/query&quot;,   &quot;queryResults&quot;: [     [       {         &quot;text&quot;: &quot;Zig cc: A drop-in replacement for GCC/Clang&quot;       },       {         &quot;text&quot;: &quot;I got my file from Clearview AI&quot;       },       {         &quot;text&quot;: &quot;A Novel Mechanical Ventilator Designed for Mass Scale Production&quot;       },       {         &quot;text&quot;: &quot;Little Snitch and the deprecation of kernel extensions&quot;       },       {         &quot;text&quot;: &quot;Doctors turn to social media to develop Covid-19 treatments in real time&quot;       }     ]   ] } And that&#39;s it! That&#39;s how easy the crawler.query API is to use. Web Scraping, Next Steps You might be wondering how to customize this further. First, the resolver object attribute can take one of four values: text, html, attr and map. text returns the element text html returns the element HTML attr returns an HTML attribute of the element, you must add an additional attr key with a value like &quot;attr&quot;: &quot;href&quot; map returns a nested CSS selector query, this requires an additional mapQueries attribute expecting another array of selectorQueries Using &quot;resolver&quot;: &quot;attr&quot; For this query: result.crawler.pageData = await lib.crawler.query[&#39;@0.0.1&#39;].selectors({   url: `https://news.ycombinator.com/`,   userAgent: `stdlib/crawler/query`,   includeMetadata: false,   selectorQueries: [     {       &#39;selector&#39;: `a.storylink`,       &#39;resolver&#39;: `attr`,       &#39;attr&#39;: `href`     }   ] }); We would expect a response that looks like this: {   &quot;url&quot;: &quot;https://news.ycombinator.com/&quot;,   &quot;userAgent&quot;: &quot;stdlib/crawler/query&quot;,   &quot;queryResults&quot;: [     [       {         &quot;attr&quot;: &quot;https://andrewkelley.me/post/zig-cc-powerful-drop-in-replacement-gcc-clang.html&quot;       },       {         &quot;attr&quot;: &quot;https://onezero.medium.com/i-got-my-file-from-clearview-ai-and-it-freaked-me-out-33ca28b5d6d4&quot;       },       {         &quot;attr&quot;: &quot;https://arxiv.org/abs/2003.10405&quot;       },       {         &quot;attr&quot;: &quot;https://blog.obdev.at/little-snitch-and-the-deprecation-of-kernel-extensions/&quot;       },       {         &quot;attr&quot;: &quot;https://www.bloomberg.com/news/articles/2020-03-24/covid-19-mysteries-yield-to-doctors-new-weapon-crowd-sourcing&quot;       }     ]   ] }Using &quot;resolver&quot;: &quot;map&quot; We can use map to make subqueries (called mapQueries) against a selector to parse data in parallel. For example, if we want to combine the above two queries (get both title and URL simultaneously)... result.crawler.pageData = await lib.crawler.query[&#39;@0.0.1&#39;].selectors({   url: `https://news.ycombinator.com/`,   userAgent: `stdlib/crawler/query`,   includeMetadata: false,   selectorQueries: [     {       &#39;selector&#39;: `tr[id]:not([id=&quot;pagespace&quot;])`,       &#39;resolver&#39;: `map`,       &#39;mapQueries&#39;: [         {           &#39;selector&#39;: &#39;a.storylink&#39;,           &#39;resolver&#39;: &#39;text&#39;         },         {           &#39;selector&#39;: &#39;a.storylink&#39;,           &#39;resolver&#39;: &#39;attr&#39;,           &#39;attr&#39;: &#39;href&#39;         }       ]     }   ] }); And we&#39;ll get a result like this... {   &quot;url&quot;: &quot;https://news.ycombinator.com/&quot;,   &quot;userAgent&quot;: &quot;stdlib/crawler/query&quot;,   &quot;queryResults&quot;: [     [       {         &quot;mapResults&quot;: [           [             {               &quot;text&quot;: &quot;Zig cc: A drop-in replacement for GCC/Clang&quot;             }           ],           [             {               &quot;attr&quot;: &quot;https://andrewkelley.me/post/zig-cc-powerful-drop-in-replacement-gcc-clang.html&quot;             }           ]         ]       },       {         &quot;mapResults&quot;: [           [             {               &quot;text&quot;: &quot;I got my file from Clearview AI&quot;             }           ],           [             {               &quot;attr&quot;: &quot;https://onezero.medium.com/i-got-my-file-from-clearview-ai-and-it-freaked-me-out-33ca28b5d6d4&quot;             }           ]         ]       },       {         &quot;mapResults&quot;: [           [             {               &quot;text&quot;: &quot;A Novel Mechanical Ventilator Designed for Mass Scale Production&quot;             }           ],           [             {               &quot;attr&quot;: &quot;https://arxiv.org/abs/2003.10405&quot;             }           ]         ]       },       {         &quot;mapResults&quot;: [           [             {               &quot;text&quot;: &quot;Little Snitch and the deprecation of kernel extensions&quot;             }           ],           [             {               &quot;attr&quot;: &quot;https://blog.obdev.at/little-snitch-and-the-deprecation-of-kernel-extensions/&quot;             }           ]         ]       },       {         &quot;mapResults&quot;: [           [             {               &quot;text&quot;: &quot;Doctors turn to social media to develop Covid-19 treatments in real time&quot;             }           ],           [             {               &quot;attr&quot;: &quot;https://www.bloomberg.com/news/articles/2020-03-24/covid-19-mysteries-yield-to-doctors-new-weapon-crowd-sourcing&quot;             }           ]         ]       }     ]   ] } Please Note: With the current version of the API, you can only use map at the top-level of selectorQueries. That&#39;s it! We hope you enjoy playing around with scraping web page data. We&#39;ll have more tutorials incoming on how you can leverage this API more successfully. In the meantime, we encourage you to keep using Autocode or jump into our Slack Community to say hello. Looking forward to more!   Keith Horwood   Founder and CEO, Standard Library",
  "wordCount": 1801,
  "author": {
    "@type": "Person",
    "name": "Keith Horwood"
  },
  "contributor": {
    "@type": "Person",
    "name": "Keith Horwood"
  },
  "publisher:": {
    "@type": "Person",
    "name": "Keith Horwood"
  },
  "datePublished": "2020-03-25T03:21:13.250Z",
  "thumbnailUrl": "https://polybit-apps.s3.amazonaws.com/stdlib/users/keith/profile/image.png?1594331471434",
  "image": "https://autocode.com/static/social/autocode-512.png",
  "timeRequired": "PT10M"
}
  </script>
  
  <script>

    var PREFETCH = {
      valid: true,
      data: JSON.parse(u_atob("eyJibG9nUG9zdCI6eyJpZCI6MTgyLCJ0aXRsZSI6IkludHJvZHVjaW5nIHRoZSBDcmF3bGVyIFF1ZXJ5IEFQSTogU2NyYXBlIFdlYnBhZ2VzIHZpYSBDU1MiLCJzbHVnIjoiaW50cm9kdWNpbmctdGhlLWNyYXdsZXItcXVlcnktYXBpLXNjcmFwZS13ZWJwYWdlcy12aWEtY3NzIiwiY29udGVudHMiOiJIZXkgZXZlcnlvbmUsXG5cbkFub3RoZXIgd2VlaywgYW5vdGhlciB1cGRhdGUuIFdlJ3ZlIHB1Ymxpc2hlZCBhIGZldyBtaW5vciBjaGFuZ2VzIHRvIFN0YW5kYXJkIExpYnJhcnkgYW5kIEF1dG9jb2RlIGluIHRoZSBwYXN0IGNvdXBsZSBvZiB3ZWVrcywgbmFtZWx5O1xuXG4tIEJldHRlciBBdXRvY29tcGxldGUgc3VwcG9ydCBpbiBNYWtlciBNb2RlXG4tIEN1c3RvbWl6ZSAvIENvbmZpZ3VyZSBlbnZpcm9ubWVudCB2YXJpYWJsZXMgZnJvbSBHaXRIdWItYmFzZWQgdGVtcGxhdGUgcHJvamVjdHMsIHdoZXJlIGFwcGxpY2FibGVcblxuVGhpcyB3ZWVrIHdlJ3JlIGxhdW5jaGluZyBhIG5ldyBTdGFuZGFyZCBMaWJyYXJ5IEFQSSBvbiB0aGUgYGNyYXdsZXJgIG5hbWVzcGFjZSwgbmFtZWx5IHRoZSBgY3Jhd2xlci5xdWVyeWAgQVBJLiBJdCdzIGF2YWlsYWJsZSBhdCBbc3RkbGliLmNvbS9AY3Jhd2xlci9saWIvcXVlcnkvXShodHRwczovL3N0ZGxpYi5jb20vQGNyYXdsZXIvbGliL3F1ZXJ5LykuIFJpZ2h0IG5vdywgdGhpcyBBUEkgbGV0cyB5b3Ugc2VhbWxlc3NseSBxdWVyeSBkYXRhIGZyb20gd2VicGFnZXMgYmFzZWQgb24gQ1NTIHNlbGVjdG9ycyB2aWEgdGhlIGAuc2VsZWN0b3JzYCBlbmRwb2ludC4gVGhpcyBpcyB1c2VmdWwgZm9yIHJ1bm5pbmcgc2NoZWR1bGVkIHRhc2tzIHRvIHNjcmFwZSBuZXcgd2Vic2l0ZSBkYXRhLlxuXG4jIENyYXdsZXIgUXVlcnkgKFNjcmFwaW5nKSBFeGFtcGxlXG5cbkEgcXVpY2sgZXhhbXBsZSBvZiB0aGUgYGNyYXdsZXIucXVlcnlgIEFQSSBpcyB1c2luZyBpdCB0byBzY3JhcGUgdGhlIHRvcCAzMCBzdG9yaWVzIG9uIEhhY2tlciBOZXdzIHJpZ2h0IG5vdy4gVG8gZG8gdGhhdCwgdXNlIHRoaXMgbGluaztcblxuW2F1dG9jb2RlLnN0ZGxpYi5jb20vbmV3Lz93b3JrZmxvdz1jcmF3bGVyJTJGcXVlcnklMkZzZWxlY3RvcnNdKGh0dHBzOi8vYXV0b2NvZGUuc3RkbGliLmNvbS9uZXcvP3dvcmtmbG93PWNyYXdsZXIlMkZxdWVyeSUyRnNlbGVjdG9ycylcblxuVGhpcyB3aWxsIG9wZW4gdXAgYW4gaW50ZXJmYWNlIHRoYXQgbG9va3Mgc29tZXRoaW5nIGxpa2UgdGhpcztcblxuIVtNYWtlciBNb2RlIEV4YW1wbGVdKGh0dHBzOi8vc3RkbGliLWRvdGNvbS5zMy5hbWF6b25hd3MuY29tL3N0YXRpYy9ibG9nL2ludHJvZHVjaW5nLXRoZS1jcmF3bGVyLXF1ZXJ5LWFwaS1zY3JhcGUtd2VicGFnZXMtdmlhLWNzcy9tYWtlci1tb2RlLWF1dG9jb2RlLWV4YW1wbGUucG5nKVxuXG5UaGlzIGlzIGEgcGFydCBvZiBbQXV0b2NvZGVdKGh0dHBzOi8vYXV0b2NvZGUuY29tLykgY2FsbGVkICoqTWFrZXIgTW9kZSoqIGFuZCBjYW4gYmUgdXNlZCB0byBwcmUtZ2VuZXJhdGUgQVBJIGxvZ2ljLiBZb3UgY2FuIGVkaXQgdGhlIGNvZGUgYXQgYW55IHRpbWUgYnkgY2xpY2tpbmcgb24gdGhlIGNvZGUgZXhhbXBsZSB0byB0aGUgcmlnaHQuIFlvdSBjYW4gc2VlIEkndmUgYWxyZWFkeSBwcmUtZmlsbGVkIHRoZSBmb2xsb3dpbmcgc2V0dGluZ3M7XG5cbi0gKip1cmwqKiBpcyBgaHR0cHM6Ly9uZXdzLnljb21iaW5hdG9yLmNvbS9gXG4tICoqdXNlckFnZW50KiogaXMgYHN0ZGxpYi9jcmF3bGVyL3F1ZXJ5YCAodGhpcyBpcyB0aGUgZGVmYXVsdClcbi0gKippbmNsdWRlTWV0YWRhdGEqKiBpcyBgRmFsc2VgIChpZiBgVHJ1ZWAsIHdpbGwgcmV0dXJuIGFkZGl0aW9uYWwgbWV0YWRhdGEgaW4gYSBgbWV0YWAgZmllbGQgaW4gdGhlIHJlc3BvbnNlKVxuLSAqKnNlbGVjdG9yUXVlcmllcyoqIGlzIGFuIGFycmF5IHdpdGggb25lIG9iamVjdCwgdGhlIHZhbHVlcyBiZWluZyBge1wic2VsZWN0b3JcIjpcImEuc3RvcnlsaW5rXCIsXCJyZXNvbHZlclwiOlwidGV4dFwifWBcblxuVGhlc2Ugc2V0dGluZ3MgZ2VuZXJhdGUgdGhlIGNvZGU7XG5cbmBgYGphdmFzY3JpcHRcbi8vIFN0b3JlIEFQSSBSZXNwb25zZXNcbmNvbnN0IHJlc3VsdCA9IHtjcmF3bGVyOiB7fX07XG5cbmNvbnNvbGUubG9nKGBSdW5uaW5nIFtDcmF3bGVyIOKGkiBRdWVyeSAoc2NyYXBlKSBhIHByb3ZpZGVkIFVSTCBiYXNlZCBvbiBDU1Mgc2VsZWN0b3JzXS4uLmApO1xucmVzdWx0LmNyYXdsZXIucGFnZURhdGEgPSBhd2FpdCBsaWIuY3Jhd2xlci5xdWVyeVsnQDAuMC4xJ10uc2VsZWN0b3JzKHtcbiAgdXJsOiBgaHR0cHM6Ly9uZXdzLnljb21iaW5hdG9yLmNvbS9gLFxuICB1c2VyQWdlbnQ6IGBzdGRsaWIvY3Jhd2xlci9xdWVyeWAsXG4gIGluY2x1ZGVNZXRhZGF0YTogZmFsc2UsXG4gIHNlbGVjdG9yUXVlcmllczogW1xuICAgIHtcbiAgICAgICdzZWxlY3Rvcic6IGBhLnN0b3J5bGlua2AsXG4gICAgICAncmVzb2x2ZXInOiBgdGV4dGBcbiAgICB9XG4gIF1cbn0pO1xuYGBgXG5cblRoaXMgY2FuIG5vdyBiZSBydW4gYnkgaGl0dGluZyAqKlJ1biBDb2RlKiogaW4gdGhlIGJvdHRvbSByaWdodC4gQXMgb2Ygd3JpdGluZyB0aGlzLCB0aGUgSGFja2VyIE5ld3MgRnJvbnQgUGFnZSBsb29rcyBsaWtlIHRoaXM6XG5cbiFbSE4gVG9wIDVdKGh0dHBzOi8vc3RkbGliLWRvdGNvbS5zMy5hbWF6b25hd3MuY29tL3N0YXRpYy9ibG9nL2ludHJvZHVjaW5nLXRoZS1jcmF3bGVyLXF1ZXJ5LWFwaS1zY3JhcGUtd2VicGFnZXMtdmlhLWNzcy9obi10b3AtNS5wbmcpXG5cblNvIG15IHJldHVybmVkIHJlc3BvbnNlIHdhcyAoSSd2ZSB0cnVuY2F0ZWQgdG8gb25seSBmaXZlIHJlc3VsdHMpOlxuXG5gYGBqc29uXG57XG4gIFwidXJsXCI6IFwiaHR0cHM6Ly9uZXdzLnljb21iaW5hdG9yLmNvbS9cIixcbiAgXCJ1c2VyQWdlbnRcIjogXCJzdGRsaWIvY3Jhd2xlci9xdWVyeVwiLFxuICBcInF1ZXJ5UmVzdWx0c1wiOiBbXG4gICAgW1xuICAgICAge1xuICAgICAgICBcInRleHRcIjogXCJaaWcgY2M6IEEgZHJvcC1pbiByZXBsYWNlbWVudCBmb3IgR0NDL0NsYW5nXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwidGV4dFwiOiBcIkkgZ290IG15IGZpbGUgZnJvbSBDbGVhcnZpZXcgQUlcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJ0ZXh0XCI6IFwiQSBOb3ZlbCBNZWNoYW5pY2FsIFZlbnRpbGF0b3IgRGVzaWduZWQgZm9yIE1hc3MgU2NhbGUgUHJvZHVjdGlvblwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcInRleHRcIjogXCJMaXR0bGUgU25pdGNoIGFuZCB0aGUgZGVwcmVjYXRpb24gb2Yga2VybmVsIGV4dGVuc2lvbnNcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJ0ZXh0XCI6IFwiRG9jdG9ycyB0dXJuIHRvIHNvY2lhbCBtZWRpYSB0byBkZXZlbG9wIENvdmlkLTE5IHRyZWF0bWVudHMgaW4gcmVhbCB0aW1lXCJcbiAgICAgIH1cbiAgICBdXG4gIF1cbn1cbmBgYFxuXG5BbmQgdGhhdCdzIGl0ISBUaGF0J3MgaG93IGVhc3kgdGhlIGBjcmF3bGVyLnF1ZXJ5YCBBUEkgaXMgdG8gdXNlLlxuXG4jIFdlYiBTY3JhcGluZywgTmV4dCBTdGVwc1xuXG5Zb3UgbWlnaHQgYmUgd29uZGVyaW5nIGhvdyB0byBjdXN0b21pemUgdGhpcyBmdXJ0aGVyLiBGaXJzdCwgdGhlIGByZXNvbHZlcmAgb2JqZWN0IGF0dHJpYnV0ZSBjYW4gdGFrZSBvbmUgb2YgKipmb3VyKiogdmFsdWVzOiBgdGV4dGAsIGBodG1sYCwgYGF0dHJgIGFuZCBgbWFwYC5cblxuLSBgdGV4dGAgcmV0dXJucyB0aGUgZWxlbWVudCB0ZXh0XG4tIGBodG1sYCByZXR1cm5zIHRoZSBlbGVtZW50IEhUTUxcbi0gYGF0dHJgIHJldHVybnMgYW4gSFRNTCBhdHRyaWJ1dGUgb2YgdGhlIGVsZW1lbnQsIHlvdSBtdXN0IGFkZCBhbiBhZGRpdGlvbmFsIGBhdHRyYCBrZXkgd2l0aCBhIHZhbHVlIGxpa2UgYFwiYXR0clwiOiBcImhyZWZcImBcbi0gYG1hcGAgcmV0dXJucyBhIG5lc3RlZCBDU1Mgc2VsZWN0b3IgcXVlcnksIHRoaXMgcmVxdWlyZXMgYW4gYWRkaXRpb25hbCBgbWFwUXVlcmllc2AgYXR0cmlidXRlIGV4cGVjdGluZyBhbm90aGVyIGFycmF5IG9mIGBzZWxlY3RvclF1ZXJpZXNgXG5cbiMgVXNpbmcgKipgXCJyZXNvbHZlclwiOiBcImF0dHJcImAqKlxuXG5Gb3IgdGhpcyBxdWVyeTpcblxuYGBgamF2YXNjcmlwdFxucmVzdWx0LmNyYXdsZXIucGFnZURhdGEgPSBhd2FpdCBsaWIuY3Jhd2xlci5xdWVyeVsnQDAuMC4xJ10uc2VsZWN0b3JzKHtcbiAgdXJsOiBgaHR0cHM6Ly9uZXdzLnljb21iaW5hdG9yLmNvbS9gLFxuICB1c2VyQWdlbnQ6IGBzdGRsaWIvY3Jhd2xlci9xdWVyeWAsXG4gIGluY2x1ZGVNZXRhZGF0YTogZmFsc2UsXG4gIHNlbGVjdG9yUXVlcmllczogW1xuICAgIHtcbiAgICAgICdzZWxlY3Rvcic6IGBhLnN0b3J5bGlua2AsXG4gICAgICAncmVzb2x2ZXInOiBgYXR0cmAsXG4gICAgICAnYXR0cic6IGBocmVmYFxuICAgIH1cbiAgXVxufSk7XG5gYGBcblxuV2Ugd291bGQgZXhwZWN0IGEgcmVzcG9uc2UgdGhhdCBsb29rcyBsaWtlIHRoaXM6XG5cbmBgYFxue1xuICBcInVybFwiOiBcImh0dHBzOi8vbmV3cy55Y29tYmluYXRvci5jb20vXCIsXG4gIFwidXNlckFnZW50XCI6IFwic3RkbGliL2NyYXdsZXIvcXVlcnlcIixcbiAgXCJxdWVyeVJlc3VsdHNcIjogW1xuICAgIFtcbiAgICAgIHtcbiAgICAgICAgXCJhdHRyXCI6IFwiaHR0cHM6Ly9hbmRyZXdrZWxsZXkubWUvcG9zdC96aWctY2MtcG93ZXJmdWwtZHJvcC1pbi1yZXBsYWNlbWVudC1nY2MtY2xhbmcuaHRtbFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImF0dHJcIjogXCJodHRwczovL29uZXplcm8ubWVkaXVtLmNvbS9pLWdvdC1teS1maWxlLWZyb20tY2xlYXJ2aWV3LWFpLWFuZC1pdC1mcmVha2VkLW1lLW91dC0zM2NhMjhiNWQ2ZDRcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJhdHRyXCI6IFwiaHR0cHM6Ly9hcnhpdi5vcmcvYWJzLzIwMDMuMTA0MDVcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJhdHRyXCI6IFwiaHR0cHM6Ly9ibG9nLm9iZGV2LmF0L2xpdHRsZS1zbml0Y2gtYW5kLXRoZS1kZXByZWNhdGlvbi1vZi1rZXJuZWwtZXh0ZW5zaW9ucy9cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJhdHRyXCI6IFwiaHR0cHM6Ly93d3cuYmxvb21iZXJnLmNvbS9uZXdzL2FydGljbGVzLzIwMjAtMDMtMjQvY292aWQtMTktbXlzdGVyaWVzLXlpZWxkLXRvLWRvY3RvcnMtbmV3LXdlYXBvbi1jcm93ZC1zb3VyY2luZ1wiXG4gICAgICB9XG4gICAgXVxuICBdXG59XG5gYGBcblxuIyBVc2luZyAqKmBcInJlc29sdmVyXCI6IFwibWFwXCJgKipcblxuV2UgY2FuIHVzZSBgbWFwYCB0byBtYWtlIHN1YnF1ZXJpZXMgKGNhbGxlZCBgbWFwUXVlcmllc2ApIGFnYWluc3QgYSBzZWxlY3RvciB0byBwYXJzZSBkYXRhIGluIHBhcmFsbGVsLiBGb3IgZXhhbXBsZSwgaWYgd2Ugd2FudCB0byBjb21iaW5lIHRoZSBhYm92ZSB0d28gcXVlcmllcyAoZ2V0IGJvdGggdGl0bGUgYW5kIFVSTCBzaW11bHRhbmVvdXNseSkuLi5cblxuYGBgamF2YXNjcmlwdFxucmVzdWx0LmNyYXdsZXIucGFnZURhdGEgPSBhd2FpdCBsaWIuY3Jhd2xlci5xdWVyeVsnQDAuMC4xJ10uc2VsZWN0b3JzKHtcbiAgdXJsOiBgaHR0cHM6Ly9uZXdzLnljb21iaW5hdG9yLmNvbS9gLFxuICB1c2VyQWdlbnQ6IGBzdGRsaWIvY3Jhd2xlci9xdWVyeWAsXG4gIGluY2x1ZGVNZXRhZGF0YTogZmFsc2UsXG4gIHNlbGVjdG9yUXVlcmllczogW1xuICAgIHtcbiAgICAgICdzZWxlY3Rvcic6IGB0cltpZF06bm90KFtpZD1cInBhZ2VzcGFjZVwiXSlgLFxuICAgICAgJ3Jlc29sdmVyJzogYG1hcGAsXG4gICAgICAnbWFwUXVlcmllcyc6IFtcbiAgICAgICAge1xuICAgICAgICAgICdzZWxlY3Rvcic6ICdhLnN0b3J5bGluaycsXG4gICAgICAgICAgJ3Jlc29sdmVyJzogJ3RleHQnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAnc2VsZWN0b3InOiAnYS5zdG9yeWxpbmsnLFxuICAgICAgICAgICdyZXNvbHZlcic6ICdhdHRyJyxcbiAgICAgICAgICAnYXR0cic6ICdocmVmJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59KTtcbmBgYFxuXG5BbmQgd2UnbGwgZ2V0IGEgcmVzdWx0IGxpa2UgdGhpcy4uLlxuXG5gYGBqc29uXG57XG4gIFwidXJsXCI6IFwiaHR0cHM6Ly9uZXdzLnljb21iaW5hdG9yLmNvbS9cIixcbiAgXCJ1c2VyQWdlbnRcIjogXCJzdGRsaWIvY3Jhd2xlci9xdWVyeVwiLFxuICBcInF1ZXJ5UmVzdWx0c1wiOiBbXG4gICAgW1xuICAgICAge1xuICAgICAgICBcIm1hcFJlc3VsdHNcIjogW1xuICAgICAgICAgIFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiWmlnIGNjOiBBIGRyb3AtaW4gcmVwbGFjZW1lbnQgZm9yIEdDQy9DbGFuZ1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiYXR0clwiOiBcImh0dHBzOi8vYW5kcmV3a2VsbGV5Lm1lL3Bvc3QvemlnLWNjLXBvd2VyZnVsLWRyb3AtaW4tcmVwbGFjZW1lbnQtZ2NjLWNsYW5nLmh0bWxcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJtYXBSZXN1bHRzXCI6IFtcbiAgICAgICAgICBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidGV4dFwiOiBcIkkgZ290IG15IGZpbGUgZnJvbSBDbGVhcnZpZXcgQUlcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImF0dHJcIjogXCJodHRwczovL29uZXplcm8ubWVkaXVtLmNvbS9pLWdvdC1teS1maWxlLWZyb20tY2xlYXJ2aWV3LWFpLWFuZC1pdC1mcmVha2VkLW1lLW91dC0zM2NhMjhiNWQ2ZDRcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJtYXBSZXN1bHRzXCI6IFtcbiAgICAgICAgICBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidGV4dFwiOiBcIkEgTm92ZWwgTWVjaGFuaWNhbCBWZW50aWxhdG9yIERlc2lnbmVkIGZvciBNYXNzIFNjYWxlIFByb2R1Y3Rpb25cIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImF0dHJcIjogXCJodHRwczovL2FyeGl2Lm9yZy9hYnMvMjAwMy4xMDQwNVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIm1hcFJlc3VsdHNcIjogW1xuICAgICAgICAgIFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiTGl0dGxlIFNuaXRjaCBhbmQgdGhlIGRlcHJlY2F0aW9uIG9mIGtlcm5lbCBleHRlbnNpb25zXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IFwiaHR0cHM6Ly9ibG9nLm9iZGV2LmF0L2xpdHRsZS1zbml0Y2gtYW5kLXRoZS1kZXByZWNhdGlvbi1vZi1rZXJuZWwtZXh0ZW5zaW9ucy9cIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJtYXBSZXN1bHRzXCI6IFtcbiAgICAgICAgICBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidGV4dFwiOiBcIkRvY3RvcnMgdHVybiB0byBzb2NpYWwgbWVkaWEgdG8gZGV2ZWxvcCBDb3ZpZC0xOSB0cmVhdG1lbnRzIGluIHJlYWwgdGltZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiYXR0clwiOiBcImh0dHBzOi8vd3d3LmJsb29tYmVyZy5jb20vbmV3cy9hcnRpY2xlcy8yMDIwLTAzLTI0L2NvdmlkLTE5LW15c3Rlcmllcy15aWVsZC10by1kb2N0b3JzLW5ldy13ZWFwb24tY3Jvd2Qtc291cmNpbmdcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgXVxufVxuYGBgXG5cbioqUGxlYXNlIE5vdGU6KiogV2l0aCB0aGUgY3VycmVudCB2ZXJzaW9uIG9mIHRoZSBBUEksIHlvdSBjYW4gb25seSB1c2UgYG1hcGAgYXQgdGhlIHRvcC1sZXZlbCBvZiBgc2VsZWN0b3JRdWVyaWVzYC5cblxuIyBUaGF0J3MgaXQhXG5cbldlIGhvcGUgeW91IGVuam95IHBsYXlpbmcgYXJvdW5kIHdpdGggc2NyYXBpbmcgd2ViIHBhZ2UgZGF0YS4gV2UnbGwgaGF2ZSBtb3JlIHR1dG9yaWFscyBpbmNvbWluZyBvbiBob3cgeW91IGNhbiBsZXZlcmFnZSB0aGlzIEFQSSBtb3JlIHN1Y2Nlc3NmdWxseS4gSW4gdGhlIG1lYW50aW1lLCB3ZSBlbmNvdXJhZ2UgeW91IHRvIGtlZXAgdXNpbmcgW0F1dG9jb2RlXShodHRwczovL2F1dG9jb2RlLmNvbSkgb3IganVtcCBpbnRvIDxhIGRhdGEtc2xhY2stYnV0dG9uIGhyZWY9XCIjXCIgb25jbGljaz1cInJldHVybiBmYWxzZTtcIj5vdXIgU2xhY2sgQ29tbXVuaXR5PC9hPiB0byBzYXkgaGVsbG8uIExvb2tpbmcgZm9yd2FyZCB0byBtb3JlIVxuXG48ZGl2IGNsYXNzPVwic2lnbmF0dXJlXCI+XG4gIDxkaXYgY2xhc3M9XCJzaWduYXR1cmUtbmFtZVwiPktlaXRoIEhvcndvb2Q8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInNpZ25hdHVyZS10aXRsZVwiPkZvdW5kZXIgYW5kIENFTywgU3RhbmRhcmQgTGlicmFyeTwvZGl2PlxuPC9kaXY+IiwiY3JlYXRlZF9hdCI6IjIwMjAtMDMtMjVUMDM6MjE6MTMuMjUwWiIsInB1Ymxpc2hlZF9hdCI6IjIwMjAtMDMtMjVUMTU6NTM6MDUuMTIyWiIsInB1Ymxpc2hlZCI6dHJ1ZSwiY292ZXJfaW1hZ2VfdXJsIjoiIiwidGh1bWJuYWlsX2ltYWdlX3VybCI6IiIsInVzZXIiOnsidXNlcm5hbWUiOiJrZWl0aCIsImZvcm1hdHRlZF9uYW1lIjoiS2VpdGggSG9yd29vZCIsImZ1bGxfaW1hZ2VfdXJsIjoiaHR0cHM6Ly9wb2x5Yml0LWFwcHMuczMuYW1hem9uYXdzLmNvbS9zdGRsaWIvdXNlcnMva2VpdGgvcHJvZmlsZS9pbWFnZS5wbmc/MTU5NDMzMTQ3MTQzNCIsInR3aXR0ZXJfaWQiOiJrZWl0aHdob3IifX0sInNsdWciOiJpbnRyb2R1Y2luZy10aGUtY3Jhd2xlci1xdWVyeS1hcGktc2NyYXBlLXdlYnBhZ2VzLXZpYS1jc3MifQ==")),
      error: JSON.parse(u_atob("bnVsbA=="))
    };

    var app = new Application();

    Sentry.init({
      dsn: 'https://15e7bd01a1af440ea68d11876b2bd41a@o202832.ingest.sentry.io/5266064',
      environment: GLOBALS.ENVIRONMENT
    });

    window.addEventListener('DOMContentLoaded', function () {

      function isUnsupportedBrowser() {
        return window.navigator.userAgent.indexOf('MSIE ') > 0;
      }

      function createUnsupportedBrowserEl() {
        var el = document.createElement('div');
        el.setAttribute('style', 'position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);');
        var text = document.createElement('div');
        text.setAttribute('style', 'white-space: nowrap; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;');
        text.innerHTML = 'We\'re sorry, Autocode is not supported in your browser.<br />For the best experience we recommend <a href="https://www.google.com/chrome/">Google Chrome</a>.'
        el.appendChild(text);
        return el;
      }

      if (isUnsupportedBrowser()) {
        document.body.appendChild(createUnsupportedBrowserEl());
      } else {
        app.appendTo(document.body);
      }

    });
  </script>

</body>

</html>
