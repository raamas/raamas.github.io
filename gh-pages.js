var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'master',
        repo: 'https://github.com/raamas/raamas.github.io', // Update to point to your repository  
        user: {
            name: 'Omar Cordoba', // update to use your name
            email: 'omardenilson007@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)