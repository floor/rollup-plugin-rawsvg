'use strict'

var path = require('path')
var rollupPluginutils = require('rollup-pluginutils')

function svg (options) {
  if (options === void 0) options = {}

  var filter = rollupPluginutils.createFilter(options.include, options.exclude)

  return {
    name: 'svg',

    transform: function transform (code, id) {
      if (!filter(id) || path.extname(id) !== '.svg') {
        return null
      }
      const content = JSON.stringify(code.trim())

      return { code: `export default ${content}`, map: { mappings: '' } }
    }
  }
}

module.exports = svg
