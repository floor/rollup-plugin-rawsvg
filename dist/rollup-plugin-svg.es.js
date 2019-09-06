import { extname } from 'path'
import { createFilter } from 'rollup-pluginutils'

export default function svg (options = {}) {
  const filter = createFilter(options.include, options.exclude)

  return {
    name: 'svg',

    transform (code, id) {
      if (!filter(id) || extname(id) !== '.svg') {
        return null
      }

      const content = JSON.stringify(code.trim())

      return { code: `export default ${content}`, map: { mappings: '' } }
    }
  }
}
