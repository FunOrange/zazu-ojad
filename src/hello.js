module.exports = (pluginContext) => {
   return (term, env = {}) => {
      return new Promise((resolve, reject) => {
         resolve([
            {
               title: 'OJAD',
               subtitle: '',
               value: `http://www.gavo.t.u-tokyo.ac.jp/ojad/search/index/word:${term}`
            }
         ])
      })
   }
}
