// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
    // options...
    devServer:{
      proxy: {
        '^/api':{
          target: 'http://localhost:2343',
          ws:true,
          changeOrigin: true,
        },
      }

    }
  }