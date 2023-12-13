import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
// import eslint from "@rollup/plugin-eslint";
import terser from "@rollup/plugin-terser";
import { babel } from "@rollup/plugin-babel";
import filesize from "rollup-plugin-filesize";
import serve from "rollup-plugin-serve";

import pkg from "./package.json" assert { type: "json" };
const formatName = "hbl-calendar";

export default {
  input: "./src/calendar.js",
  output: [
    // CommonJS，适用于 Node 和 Browserify/Webpack
    {
      file: pkg.main,
      format: "cjs",
    },
    // 将软件包保存为 ES 模块文件
    {
      file: pkg.module,
      format: "esm",
    },
    // 页面中引入
    {
      file: pkg.browser,
      format: "umd",
      name: formatName,
    },
  ],
  // 配置监听处理
  watch: {
    exclude: 'node_modules/**'
  },
  plugins: [
    json(),
    nodeResolve(),
    commonjs(),
    // eslint({}),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
    }),
    terser(),
    serve("lib"),
    filesize()
  ]
}