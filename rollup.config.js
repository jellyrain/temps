import { uglify } from 'rollup-plugin-uglify'

export default {
    input: 'src/main.js',
    output: {
        file: 'dist/temps.min.js',
        format: 'umd',
        name: 'temps'
    },
    plugins: [
        uglify(),
    ]
}