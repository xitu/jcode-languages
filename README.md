# JCode Custom Lang

码上掘金自定义语言合集

## 使用说明

![](https://p5.ssl.qhimg.com/t010e5342c2f84b519b.png)

#### 1. `Script Tab` 下选择 `Custom`

#### 2. 第一行输入对应语言的Hashbang，比如：

```js
#!/jcode/lang/wenyan https://xitu.github.io/jcode-languages/dist/lang-wenyan.json
```

接着输入该语言代码，如

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

#### 3. 在脚本依赖中引入 `https://cdn.jsdelivr.net/npm/jcode-tools` 和依赖的语言解析脚本，如 `https://cdn.jsdelivr.net/npm/@wenyanlang/core/index.min.js`

#### 4. `Markup Tab` 下对自定义语言进行解析，比如：

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

#### 5. Server端语言

目前码上掘金通过[CodeX-API](https://github.com/akira-cn/CodeX-API)支持Server端编程语言。

比如Rust语言：

[例子](https://code.juejin.cn/pen/7123427292306817060)

```html
<div id="app"></div>
<script type="module">
import {CodeXClient, logger} from 'https://cdn.jsdelivr.net/npm/jcode-tools@^0.10.2/dist/jcode-tools.esm.js';
(async () => {
  window.console = logger(app);
  console.log('提交代码，请稍候');

  try {
    const code = new CodeXClient(); // 默认会从CustomCode中获取
    const result = await code.runCode();
    if(result.error) {
      console.error(result.error);
    }
    console.log(result.output);
  } catch(ex) {
    console.error(ex);
  }
})();
</script>
```

### 支持语言

目前官方支持了9种语言：

| 语言 | json 文件 | 示例 | 运行时 |
| --- | --- | --- | --- |
| [glsl](src/lang-lua.js) | [lang-glsl](https://xitu.github.io/jcode-languages/dist/lang-glsl.json) | [🎯 glsl-demo](https://code.juejin.cn/pen/7116418967081582623) | [glsl-doodle](https://github.com/akira-cn/glsl-doodle)
| [live & coffee](src/lang-coffee.js) | [lang-coffee](https://xitu.github.io/jcode-languages/dist/lang-coffee.json) | [☕️ coffee-demo](https://code.juejin.cn/pen/7118946974367219726) [🎢 live-demo](https://code.juejin.cn/pen/7118944247788601352) | [coffeescript](https://github.com/jashkenas/coffeescript/) [livescript](https://github.com/gkz/LiveScript)|
| [lua](src/lang-lua.js) | [lang-lua](https://xitu.github.io/jcode-languages/dist/lang-lua.json) | [♟ lua-demo](https://code.juejin.cn/pen/7117234319281618974) | [fengari-lua](https://github.com/fengari-lua/fengari-web) |
| [markdown](src/lang-markdown.js) | [lang-markdown](https://xitu.github.io/jcode-languages/dist/lang-markdown.json) | [📓 markdown-demo](https://code.juejin.cn/pen/7117484770900049928) | [markdedjs](https://github.com/markedjs/marked) |
| [python](src/lang-python.js) | [lang-python](https://xitu.github.io/jcode-languages/dist/lang-python.json) | [🐍 python-demo](https://code.juejin.cn/pen/7117216879185231902) | [brython](https://github.com/brython-dev/brython) |
| [scheme](src/lang-scheme.js) | [lang-scheme](https://xitu.github.io/jcode-languages/dist/lang-scheme.json) | [🐵 scheme-demo](https://code.juejin.cn/pen/7117496697122455588) | [lips](https://github.com/jcubic/lips) |
| [sql](src/lang-sql.js) | [lang-sql](https://xitu.github.io/jcode-languages/dist/lang-sql.json) | [🦗 sql-demo](https://code.juejin.cn/pen/7117569541948833823) | [jSQL](https://github.com/Pamblam/jSQL) |
| [webslides](src/lang-webslides.js) | [lang-webslides](https://xitu.github.io/jcode-languages/dist/lang-webslides.json) | [🐙 webslides-demo](https://code.juejin.cn/pen/7115222187925045256) | [webslides.md](https://github.com/xitu/webslides.md) |
| [文言文](src/lang-wenyan.js) | [lang-wenyan](https://xitu.github.io/jcode-languages/dist/lang-wenyan.json) | [🐧 wenyan-demo](https://code.juejin.cn/pen/7117404732288663582) | [wenyan-lang](https://github.com/wenyan-lang/wenyan) |

以及多种Server端语言：

| 语言 | json 文件 | 示例 |
| --- | --- | --- | 
| c/c++ | [lang-cpp](https://xitu.github.io/jcode-languages/dist/lang-cpp.json) | [🐵 c-demo](https://code.juejin.cn/pen/7124117611972935716) [🙉 c++-demo](https://code.juejin.cn/pen/7124118398396530719)
| dart | [lang-dart](https://xitu.github.io/jcode-languages/dist/lang-dart.json) | [🦆 dart-demo](https://code.juejin.cn/pen/7124194532933468168)
| erlang | [lang-erlang](https://xitu.github.io/jcode-languages/dist/lang-erlang.json) | [🦄 erl-demo](https://code.juejin.cn/pen/7124262663164542989)
| golang | [lang-go](https://xitu.github.io/jcode-languages/dist/lang-go.json) | [🐱 go-demo](https://code.juejin.cn/pen/7124119816633319438)
| java | [lang-java](https://xitu.github.io/jcode-languages/dist/lang-java.json) | [☕️ java-demo](https://code.juejin.cn/pen/7124119426709848095)
| javascript | [lang-javascript](https://xitu.github.io/jcode-languages/dist/lang-javascript.json) | [🦋 nodejs-demo-async](https://code.juejin.cn/pen/7121977600011927589)
| perl | [lang-perl](https://xitu.github.io/jcode-languages/dist/lang-perl.json) | [🐪 perl-demo](https://code.juejin.cn/pen/7124188849688805412)
| php | [lang-php](https://xitu.github.io/jcode-languages/dist/lang-php.json) | [🐘 php-demo](https://code.juejin.cn/pen/7124185922190606373)
| python | [lang-python](https://xitu.github.io/jcode-languages/dist/lang-python.json) | [🐍 python-demo](https://code.juejin.cn/pen/7124120405828173831) |
| ruby | [lang-ruby](https://xitu.github.io/jcode-languages/dist/lang-ruby.json) | [🦑 ruby-demo](https://code.juejin.cn/pen/7124181246045290532) |
| rust | [lang-rust](https://xitu.github.io/jcode-languages/dist/lang-rust.json) | [🦁 rust-demo](https://code.juejin.cn/pen/7123427292306817060) |
| zig | [lang-zig](https://xitu.github.io/jcode-languages/dist/lang-zig.json) | [🦉 zig-demo](https://code.juejin.cn/pen/7123497832207613988) |

## 如何扩展我的自定义语言

#### 准备语法高亮JSON文件

码上掘金支持JSON格式的Monaco Editor语法高亮配置，而通常的Monaco Editor语法高文件是JS文件，需要转成对应的JSON。

可以fork本代码仓库，直接将语法高亮JS文件复制到src目录，然后运行`npm run build`，会自动构建并生成dist目录下对应的JSON文件。

之后可以自己发布这个JSON，或者给本项目提交PR，代码合并后，就可以直接通过：

`https://xitu.github.io/jcode-languages/dist/lang-你的语言类型.json`

来访问了。

#### 设置hashbang

语法为：

```
#!/jcode/lang/你的语言类型 https://xitu.github.io/jcode-languages/dist/lang-你的语言类型.json
```

然后就可以按照上面的使用说明，写自己的自定义语言代码了。
