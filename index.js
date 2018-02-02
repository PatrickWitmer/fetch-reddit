const fetch = require('node-fetch');

(() => {
  console.log('start!');
  fetch('https://www.reddit.com/r/skullcandy.json').then((response) => {
    console.log('response: ', response);
    return response.json();
  }).then((json) => {
    console.log('JSON', json);
    console.log('posts: ', json.data);
    const posts = json.data.children;

    for (var x in posts) {
      console.log('POST #', x);
      console.log('title: ', posts[x].data.title);
      console.log('url: ', posts[x].data.url);
      console.log('score: ', posts[x].data.score);
    }
  })
})();