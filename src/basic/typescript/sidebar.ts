import { SidebarArrayOptions } from "vuepress-theme-hope"

const sidebar: SidebarArrayOptions = [
  {
    text: '配置',
    collapsible: true,
    prefix: '/basic/typescript/config',
    children: [
      { text: '基础', link: 'basic' },
      { text: 'files、extends、include、exclude', link: 'files-extends-include-exclude' },
      { text: 'references', link: 'references-composite' },
      { text: 'baseUrl、paths', link: 'baseurl-paths' },
      { text: 'esModuleinterop', link: 'esmoduleInterop-importhelpers' },
      { text: 'isolatedModules', link: 'isolatedmodules' },
      { text: 'jsx', link: 'jsx' },
      { text: 'lib', link: 'lib' },
      { text: 'moduleResolution', link: 'moduleresolution' },
      { text: 'nounusedLocals、nounusedParameters', link: 'nounusedlocals-nounusedparameters' },
      { text: 'paths', link: 'paths' },
      { text: 'rootDir、out、outDir、outFile', link: 'rootdir-out-outdir-outfile' },
      { text: 'strict', link: 'strict' },
      { text: 'target、module', link: 'target-module' },
      { text: 'target', link: 'target' },
      { text: 'types', link: 'types' }
    ]
  },
  {
    text: '声明文件',
    collapsible: true,
    prefix: '/basic/typescript/declaration',
    children: [
      { text: 'declare global', link: 'declare-global' },
      { text: '声明模块', link: 'declare-module' },
      { text: '声明模块1', link: 'declare-module1' },
      { text: '声明模块2', link: 'declare-module2' },
      { text: 'declare', link: 'edeclare' },
      { text: '生成声明文件', link: 'generate-declaration-file-by-ts' },
      { text: '使用一个不含声明文件的依赖', link: 'use-a-dependency-without-declaration-file' }
    ]
  },
  { text: '使用对象或数组的值或键创建联合类型', link: '/basic/typescript/create-union-type-use-array-object' },
  { text: '声明空间', link: '/basic/typescript/declaration-spaces' },
  { text: 'extends 关键字', link: '/basic/typescript/extends' },
  { text: '全局模块、文件模块', link: '/basic/typescript/global-file-module' },
  { text: '仅导入、导出类型', link: '/basic/typescript/import-require-for-importing-type-only' },
  { text: '整合 ESLint', link: '/basic/typescript/integrate-eslint' },
  { text: '字面量推断', link: '/basic/typescript/literal-inference' },
  { text: '模块系统', link: '/basic/typescript/module' },
  { text: 'namespace', link: '/basic/typescript/namespace' },
  { text: '基础', link: '/basic/typescript/note' },
  { text: '常见符号', link: '/basic/typescript/symbol' },
  { text: '类型别名、接口', link: '/basic/typescript/type-alias-vs-interface' },
  { text: '类型声明、类型推断、类型断言', link: '/basic/typescript/type-annotation-inference-assertion' },
  { text: '类型操作', link: '/basic/typescript/type-manipulation' },
  { text: '类型判断式', link: '/basic/typescript/type-predicates' },
  { text: '工具类型', link: '/basic/typescript/utility-types' }
]

export default sidebar