module.exports = (pluginContext) => {
   return (term, env = {}) => {
      return new Promise((resolve, reject) => {
         resolve([
            {
               icon: 'fa-hand-spock-o',
               title: 'OJAD',
               subtitle: 'Look up pitch accent.',
               value: `http://www.gavo.t.u-tokyo.ac.jp/ojad/search/index/word:${term}`
            }
         ])
      })
   }
}
