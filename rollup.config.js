import typescript from "rollup-plugin-typescript2";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/jdparser.min.js",
    format: "umd",
    name: "jdparser",
  },
  plugins: [typescript(), resolve(), commonjs(), terser()],
};
