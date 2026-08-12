import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default [
  {
    input: 'lib/index.ts',
    output: [
      { dir: 'dist', format: 'cjs', sourcemap: true, exports: 'auto' },
      { dir: 'esm', format: 'esm', sourcemap: true, exports: 'auto' },
    ],
    external: ['@tiptap/core', '@tiptap/extension-image', '@tiptap/pm', 'tslib'],
    plugins: [
      typescript({
        tsconfig: false,
        compilerOptions: {
          target: 'es6',
          module: 'ESNext',
          moduleResolution: 'node',
          esModuleInterop: true,
          jsx: 'react',
          lib: ['es5', 'es6', 'dom'],
          declaration: false,
          declarationMap: false,
          sourceMap: true,
        },
      }),
      nodeResolve({
        extensions: ['.mjs', '.js', '.json', '.ts'],
      }),
    ],
  },
];
