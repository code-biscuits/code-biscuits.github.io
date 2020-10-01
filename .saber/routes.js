
    export default [
      {
          path: "/",
          meta: {
            __relative: 'index.vue',
            __pageId: '88e53dc8'
          },
          component: function() {
            
            return import(/* webpackChunkName: "page--index-vue" */ "/Users/cmgriffing/code-biscuits.github.io/pages/index.vue?saberPage=88e53dc8")
            
          }
        },
      
      // An addtional route to catch all other requests, i.e. 404 page
      {
        path: '*',
        name: 404,
        component: function () {
          return import(/* webpackChunkName: "404-page" */ "/Users/cmgriffing/code-biscuits.github.io/node_modules/saber/vue-app/404.vue")
        }
      }
    ]