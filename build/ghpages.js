const ghpages = require('gh-pages')

ghpages.publish('dist', {
  message: '[auto] Update gh pages'
}, (e) => {
  console.error(e)
})