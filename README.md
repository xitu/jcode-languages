# JCode Custom Lang

码上掘金自定义语言合集

## 使用说明

1. `Script Tab` 下选择 `Custom`

2. 第一行输入对应语言的Hashbang，比如：

```js
#!/jcode/lang/wenyan https://xitu.github.io/jcode-languages/dist/lang-wenyan.json
```

3. 接着输入该语言代码

```wenyan
吾嘗觀「「控制秘術」」之書。方悟「等待指針按下」「等待指針移動」之義。
吾嘗觀「「畫譜」」之書。方悟「備紙」「擇筆」「蘸色」「落筆」「運筆」「提筆」「設色」「裱畫」之義。

吾有一術。名之曰「繪製」。欲行是術。必先得一物。曰「紙」。
行是術以俟其毕。
是術曰。
  恆為是。
    且施「等待指針移動」於「紙」。以俟其毕。名之曰「指針」。
    夫「指針」之「「經數」」者。名之曰「經數」。
    夫「指針」之「「緯數」」者。名之曰「緯數」。
    夫「指針」之「「鍵值」」者。名之曰「鍵值」。
    夫「指針」之「「前經」」者。名之曰「橫」。
    夫「指針」之「「前緯」」者。名之曰「縱」。
    施「落筆」於「紙」於「橫」於「縱」。
    若「鍵值」等於零者。施「提筆」於「紙」。乃止也。
    施「運筆」於「紙」於「經數」於「緯數」。
    施「提筆」於「紙」。
    施「設色」於「紙」。
  云云。
是謂「繪製」之術也。

施「備紙」於五百。於五百。名之曰「紙」。
施「蘸色」於「紙」於「「花青」」。
施「擇筆」於「紙」於五。
施「裱畫」於「紙」於「「app」」。

恆為是。
  且施「等待指針按下」於「紙」。以俟其毕。名之曰「指針」。
  且施「繪製」於「紙」。以俟其毕。
云云。
```

4. 在脚本依赖中引入 `https://unpkg.com/jcode-tools` 和依赖的语言解析脚本，如 `https://unpkg.com/@wenyanlang/core/index.min.js`

5. `Markup Tab` 下对自定义语言进行解析：

```html
<div id="app"></div>
<script>
  (async function() {
    const code = await JCode.getCustomCode();
    const jscode = Wenyan.compile(code, {
      logCallback: () => {},
      importPaths: ['https://akira-cn.github.io/wenyan-demos/'],
      allowHttp: true,
    });
    Wenyan.evalCompiled(`(async () => {${jscode}})()`);
  }());
</script>
```

### 支持语言

| 语言 | json 文件 | 示例 | 运行时 |
| --- | --- | --- | --- |
| [glsl](src/lang-lua.js) | [lang-glsl](https://xitu.github.io/jcode-languages/dist/lang-glsl.json) | [glsl-demo](https://code.juejin.cn/pen/7116418967081582623) | [glsl-doodle](https://github.com/akira-cn/glsl-doodle)
| [lua](src/lang-lua.js) | [lang-lua](https://xitu.github.io/jcode-languages/dist/lang-lua.json) | [lua-demo](https://code.juejin.cn/pen/7117234319281618974) | [fengari-lua](https://github.com/fengari-lua/fengari-web) |
| [markdown](src/lang-markdown.js) | [lang-markdown](https://xitu.github.io/jcode-languages/dist/lang-markdown.json) | [markdown-demo](https://code.juejin.cn/pen/7117484770900049928) | [markdedjs](https://github.com/markedjs/marked) |
| [python](src/lang-python.js) | [lang-python](https://xitu.github.io/jcode-languages/dist/lang-python.json) | [python-demo](https://code.juejin.cn/pen/7117216879185231902) | [brython](https://github.com/brython-dev/brython) |
| [scheme](src/lang-scheme.js) | [lang-scheme](https://xitu.github.io/jcode-languages/dist/lang-scheme.json) | [scheme-demo](https://code.juejin.cn/pen/7117496697122455588) | [lips](https://github.com/jcubic/lips) |
| [sql](src/lang-sql.js) | [lang-scheme](https://xitu.github.io/jcode-languages/dist/lang-sql.json) | [sql-demo](https://code.juejin.cn/pen/7117569541948833823) | [jSQL](https://github.com/Pamblam/jSQL) |
| [webslides](src/lang-webslides.js) | [lang-webslides](https://xitu.github.io/jcode-languages/dist/lang-webslides.json) | [webslides-demo](https://code.juejin.cn/pen/7115222187925045256) | [webslides.md](https://github.com/xitu/webslides.md) |
| [文言文](src/lang-wenyan.js) | [lang-wenyan](https://xitu.github.io/jcode-languages/dist/lang-wenyan.json) | [wenyan-demo](https://code.juejin.cn/pen/7117404732288663582) | [wenyan-lang](https://github.com/wenyan-lang/wenyan) |