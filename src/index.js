import { extname } from 'path'
import { createFilter } from 'rollup-pluginutils'

export default function svg (options = {}) {
  return {
    name: 'rawsvg',

    transform (code, id) {
      if (extname(id) !== '.svg') {
        return null
      }

      const content = JSON.stringify(code.trim())

      return { code: `export default ${content}`, map: { mappings: '' } }
    }
  }
}
