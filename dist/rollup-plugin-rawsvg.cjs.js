'use strict'

var path = require('path')

function rawsvg (options) {
  if (options === void 0) options = {}

  return {
    name: 'rawsvg',

    transform: function transform (code, id) {
      if (path.extname(id) !== '.svg') {
        return null
      }
      const content = JSON.stringify(code.trim())

      return { code: `export default ${content}`, map: { mappings: '' } }
    }
  }
}

module.exports = rawsvg
