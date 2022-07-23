export default {
	tokenPostfix: '.zig',
	defaultToken: 'invalid',
  keywords: [
    'align', 'and', 'anyerror', 'asm', 'async', 'await', 'break', 'cancel', 
    'catch', 'comptime', 'const', 'continue', 'defer', 'else', 'enum', 
    'errdefer', 'error', 'export', 'extern', 'fn', 'for', 'if', 'inline', 
    'nakedcc', 'noalias', 'or', 'orelse', 'packed', 'pub', 'resume', 'return', 
    'section', 'stdcallcc', 'struct', 'suspend', 'switch', 'test', 'this', 'try', 
    'union', 'unreachable', 'use', 'var', 'volatile', 'while',
    'noasync', 'usingnamespace', 'anytype', 'anyframe',
    'true', 'false', 'null', 'undefined',
  ],

  typeKeywords: [
    'bool', 'c_int', 'c_long', 'c_longlong', 'c_longdouble', 'c_short', 'c_uint', 
    'c_ulong', 'c_ulonglong', 'c_ushort', 'c_void', 'f16', 'f32', 'f64', 'f128', 
    'i2', 'i3', 'i4', 'i5', 'i6', 'i7', 'i8', 'i16', 'i29', 'i32', 'i64', 'i128', 
    'isize', 'noreturn', 'promise', 'type', 'u2', 'u3', 'u4', 'u5', 'u6', 'u7', 'u8', 
    'u16', 'u29', 'u32', 'u64', 'u128', 'usize', 'void', 
  ],

  operators: [
    '=', '>', '<', '!', '~', '?', ':', '==', '<=', '>=', '!=',
    '&&', '||', '++', '--', '+', '-', '*', '/', '&', '|', '^', '%',
    '<<', '>>', '>>>', '+=', '-=', '*=', '/=', '&=', '|=', '^=',
    '%=', '<<=', '>>=', '>>>='
  ],

  // we include these common regular expressions
  symbols:  /[=><!~?:&|+\-*\/\^%]+/,

  // C# style strings
  escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,

  // The main tokenizer for our languages
  tokenizer: {
    root: [
      // identifiers and keywords
      [/[a-z_$][\w$]*/, { cases: { '@typeKeywords': 'keyword',
                                   '@keywords': 'keyword',
                                   '@default': 'identifier' } }],
      [/[A-Z][\w\$]*/, 'type.identifier' ],  // to show class names nicely

      // whitespace
      { include: '@whitespace' },

      // delimiters and operators
      [/[{}()\[\]]/, '@brackets'],
      [/[<>](?!@symbols)/, '@brackets'],
      [/@symbols/, { cases: { '@operators': 'operator',
                              '@default'  : '' } } ],

      // @ annotations.
      // As an example, we emit a debugging log message on these tokens.
      // Note: message are supressed during the first load -- change some lines to see them.
      [/@\s*[a-zA-Z_\$][\w\$]*/, { token: 'annotation', log: 'annotation token: $0' }],

      // numbers
      [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
      [/0[xX][0-9a-fA-F]+/, 'number.hex'],
      [/\d+/, 'number'],

      // delimiter: after number because of .\d floats
      [/[;,.]/, 'delimiter'],

      // strings
      [/"([^"\\]|\\.)*$/, 'string.invalid' ],  // non-teminated string
      [/"/,  { token: 'string.quote', bracket: '@open', next: '@string' } ],

      // characters
      [/'[^\\']'/, 'string'],
      [/(')(@escapes)(')/, ['string','string.escape','string']],
      [/'/, 'string.invalid']
    ],

    comment: [
      [/[^\/*]+/, 'comment' ],
      [/\/\*/,    'comment', '@push' ],    // nested comment
      ["\\*/",    'comment', '@pop'  ],
      [/[\/*]/,   'comment' ]
    ],

    string: [
      [/[^\\"]+/,  'string'],
      [/@escapes/, 'string.escape'],
      [/\\./,      'string.escape.invalid'],
      [/"/,        { token: 'string.quote', bracket: '@close', next: '@pop' } ]
    ],

    whitespace: [
      [/[ \t\r\n]+/, 'white'],
      [/\/\*/,       'comment', '@comment' ],
      [/\/\/.*$/,    'comment'],
    ],
  },
};
