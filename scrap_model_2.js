
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

const result = {crawler: {}};

console.log(`Running [Crawler → Query (scrape) a provided URL based on CSS selectors]...`);
result.crawler.pageData = await lib.crawler.query['@0.0.1'].selectors({
  url: `https://news.ycombinator.com/`,
  userAgent: `stdlib/crawler/query`,
  includeMetadata: false,
  selectorQueries: [
    {
      'selector': `tr[id]:not([id="pagespace"])`,
      'resolver': `map`,
      'mapQueries': [
        {
          'selector': 'a.storylink',
          'resolver': 'text'
        },
        {
          'selector': 'a.storylink',
          'resolver': 'attr',
          'attr': 'href'
        }
      ]
    }
  ]
});

return result;
