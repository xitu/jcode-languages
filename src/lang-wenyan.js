#!/jcode/lang/wenyan

// wy-language.js
export default {
  storageType: "元|物|爻|術|言|列|數",
  constantNumeric: "負|·|又|零|〇|一|二|三|四|五|六|七|八|九|十|百|千|萬|億|兆|京|垓|秭|穰|溝|澗|正|載|極|分|釐|毫|絲|忽|微|纖|沙|塵|埃|渺|漠",
  constantLang: "陰|陽|其",
  keywordsModifier: "吾有|今有|有",
  keywordsType: "數|列|言|術|爻|物",
  keywordsControl: "乃行是術曰|若其不然者|乃止是遍|乃歸空無|欲行是術|若其然者|其物如是|乃得矣|恆為是|之術也|必先得|是術曰|之物也|云云|其餘|中之|為是|之長|乃止|若非|或若|乃得|是謂|蓋謂|或云|者|若|遍|充|銜|凡|也",
  keywordsOperator: "中有陽乎|所餘幾何|中無陰乎|不等於|不大於|不小於|等於|大於|小於|加|乘|除|變|以|於|減",
  keywordsOther: "不知何禍歟|不復存矣|如事不諧|姑妄行此|吾嘗觀|之禍歟|乃作罷|名之曰|書之|以施|之禍|嗚呼|之義|昔之|方悟|是矣|今有|吾有|之書|物之|夫|中|今|取|噫|曰|施|豈|有",
  tokenizer: {
      root: [
          [/(注曰|疏曰|批曰)。「「/, 'comment', '@blockComment'],
          [/(注曰|疏曰|批曰).*$/, 'comment'],
          [/^#!.*$/, 'comment'],
          [/「「/, 'string', '@string'],
          [/「/, 'variable.name', '@variableName'],
          [/。/, 'delimiter'],
          [/@constantNumeric/, "constant.numeric"],
          [/@constantLang/, "constant.language"],
          [/@keywordsModifier/, "keyword"],
          [/@keywordsType/, "type"],
          [/@keywordsControl/, "keyword.control"],
          [/@keywordsOperator/, "operators"],
          [/@keywordsOther/, "keyword"],
          [/@storageType/, "storage.type"]
      ],
      blockComment:[
          [/[^」]+/, 'comment'],
          [/」」/, 'comment', '@pop'],
          [/[」]/, 'comment']
      ],
      string:[
          [/[^」]+/, 'string'],
          [/」」/, 'string', '@pop'],
          [/[」]/, 'string']
      ],
      variableName:[
          [/[^」]+/, 'variable.name'],
          [/」/, 'variable.name', '@pop']
      ]
  },
  brackets:[['「','」','bracket']]
};