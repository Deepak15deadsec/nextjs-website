module.exports = {
  apps: [{
    script: 'npm start'
  }],

  deploy: {
    production: {
      key: 'key.pem',
      user: 'ubuntu',
      host: '44.211.55.116',
      ref: 'origin/main',
      repo: 'git@github.com:AVNI-Ad-Tech/avni-landing-webapp.git',
      path: '/home/ubuntu',
      'pre-deploy-local': '',
      'post-deploy': 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes'
    }
  }
};