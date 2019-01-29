import vue from 'rollup-plugin-vue'; // Handle .vue SFC files
import babel from 'rollup-plugin-babel';

export default {
    input: 'src/wrapper.js', // Path relative to package.json
    output: {
        name: 'ElElement',
        exports: 'named',
    },
    plugins: [
        vue({
            css: true, // Dynamically inject css as a <style> tag
            compileTemplate: true, // Explicitly convert template to render function
        }),
        babel({
            runtimeHelpers: true,
            exclude: 'node_modules/**' // only transpile our source code
          })
    ],
};