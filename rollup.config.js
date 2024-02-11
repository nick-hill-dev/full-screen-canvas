import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'

export default [
  {
    input: `dist/index.js`,
    plugins: [esbuild()],
    output: [
      {
        file: `demos/fullScreenCanvas.js`,
        format: 'cjs',
        sourcemap: true,
        exports: 'default',
      },
    ]
  },
  {
    input: `dist/index.js`,
    plugins: [dts()],
    output: {
      file: `demos/fullScreenCanvas.d.ts`,
      format: 'es',
    },
  }
]