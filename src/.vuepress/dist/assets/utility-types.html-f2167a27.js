const e=JSON.parse('{"key":"v-01ce0921","path":"/basis/typescript/utility-types.html","title":"工具类型","lang":"zh-CN","frontmatter":{"description":"TS在全局内置了很多Utility Types，来对已有类型做一些处理，然后获得我们想要的新类型: type --> [type utils] --> newType 1 Partial 作用：它会将Type内所有属性置为可选，返回一个给定类型Type的子集。 示例： ```js interface Todo { title: string; desc...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/blog/basis/typescript/utility-types.html"}],["meta",{"property":"og:site_name","content":"前端笔记"}],["meta",{"property":"og:title","content":"工具类型"}],["meta",{"property":"og:description","content":"TS在全局内置了很多Utility Types，来对已有类型做一些处理，然后获得我们想要的新类型: type --> [type utils] --> newType 1 Partial 作用：它会将Type内所有属性置为可选，返回一个给定类型Type的子集。 示例： ```js interface Todo { title: string; desc..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-09T14:41:52.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-09T14:41:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"工具类型\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-09T14:41:52.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1 Partial<Type>","slug":"_1-partial-type","link":"#_1-partial-type","children":[]},{"level":2,"title":"2 Required<Type>","slug":"_2-required-type","link":"#_2-required-type","children":[]},{"level":2,"title":"3 Readonly<Type>","slug":"_3-readonly-type","link":"#_3-readonly-type","children":[]},{"level":2,"title":"4 Record<Keys,Type>","slug":"_4-record-keys-type","link":"#_4-record-keys-type","children":[]},{"level":2,"title":"5 Pick<Type, Keys>","slug":"_5-pick-type-keys","link":"#_5-pick-type-keys","children":[]},{"level":2,"title":"6 Omit<Type, Keys>","slug":"_6-omit-type-keys","link":"#_6-omit-type-keys","children":[]},{"level":2,"title":"7 Exclude<Type, ExcludedUnion>","slug":"_7-exclude-type-excludedunion","link":"#_7-exclude-type-excludedunion","children":[]},{"level":2,"title":"8 Extract<Type, Union>","slug":"_8-extract-type-union","link":"#_8-extract-type-union","children":[]},{"level":2,"title":"9 NonNullable<Type>","slug":"_9-nonnullable-type","link":"#_9-nonnullable-type","children":[]},{"level":2,"title":"10 Parameters<Type>","slug":"_10-parameters-type","link":"#_10-parameters-type","children":[]},{"level":2,"title":"11 ConstructorParameters<Type>","slug":"_11-constructorparameters-type","link":"#_11-constructorparameters-type","children":[]},{"level":2,"title":"12 ReturnType<Type>","slug":"_12-returntype-type","link":"#_12-returntype-type","children":[]},{"level":2,"title":"13 InstanceType<Type>","slug":"_13-instancetype-type","link":"#_13-instancetype-type","children":[]},{"level":2,"title":"14 ThisParameterType<Type>","slug":"_14-thisparametertype-type","link":"#_14-thisparametertype-type","children":[]},{"level":2,"title":"15 OmitThisParameter<Type>","slug":"_15-omitthisparameter-type","link":"#_15-omitthisparameter-type","children":[]}],"git":{"createdTime":1694270512000,"updatedTime":1694270512000,"contributors":[{"name":"stormzhangbx","email":"13128814051@163.com","commits":1}]},"readingTime":{"minutes":8.23,"words":2470},"filePathRelative":"basis/typescript/utility-types.md","localizedDate":"2023年9月9日","autoDesc":true}');export{e as data};