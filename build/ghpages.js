const ghpages = require('gh-pages')

ghpages.publish('dist', {
  message: '[auto] Update gh pages',
  user: {
    name: 'ShikaSD',
    email: 'andreiishikov@gmail.com'
  }
}, (e) => {
  console.error(e)
})
