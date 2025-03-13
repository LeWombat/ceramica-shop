module.exports = {
  apps: [
    {
      name: 'samosik-online',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      }
    }
  ]
} 