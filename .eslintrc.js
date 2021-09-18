module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'next',
    'next/core-web-vitals',
    // 競合を避けるため、prettierは一番最後に書く
    'plugin:prettier/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2021,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx']
      }
    }
  },
  plugins: [],
  rules: {
    // prettier の設定
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'none',
        tabWidth: 2,
        semi: false,
        singleQuote: true,
        printWidth: 80,
        arrowParens: 'always', // アロー関数の引数に()を必要にする
        bracketSpacing: true, // { }のインデント確保
        endOfLine: 'lf',
        proseWrap: 'preserve',
        quoteProps: 'as-needed',
        useTabs: false
      }
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports' }
    ], // typeをimportするときは、import typeを使う
    '@typescript-eslint/explicit-module-boundary-types': ['error'], // 関数の返り値の型と、関数内のreturnの型を一致させる
    '@typescript-eslint/method-signature-style': ['error', 'property'], // functionの型をアロー関数で書く: func(arg: boolean): void -> func: (arg: boolean) => void
    '@typescript-eslint/no-unused-vars-experimental': 'warn', // 未使用の変数の削除
    '@typescript-eslint/no-unused-vars': 'error', // 未使用の変数がある場合エラーにする（デフォルトは warning）
    '@typescript-eslint/prefer-for-of': 'error', // for(let i... でiを使用してない場合は for of を使うように強制
    'react-hooks/rules-of-hooks': 'error', // React Hooks のための設定
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off', // prop types を使っていないので off
    'react/react-in-jsx-scope': 'off', // Next.js では React を import しなくてもよいので off にする
    'react/jsx-props-no-spreading': 'off', // <Component {...props}>を許可する
    'react/no-array-index-key': 'off', // 順序の入れ替えがない場合はok
    'react/destructuring-assignment': 'off', // component の props の destructuring を非必須にする
    'jsx-a11y/anchor-is-valid': 'off', // next/linkのchildのaタグの空hrefを許容する
    'jsx-no-lambda': 'off', // onClick={e => handleClick(e)} で引っかかるため無効化
    'import/prefer-default-export': 'off', // named-exportを許可
    'import/no-unresolved': 'off', // 絶対パスでのモジュールの読み込みをokにする
    'no-continue': 'off', // if文内のcontinueをokにする
    'no-restricted-syntax': 'off', // for (const a of A) を許可
    'no-magic-numbers': 'warn', // 無名関数は作らないこと
    'no-trailing-spaces': 'error', // 行末に不要な空白を残さないこと
    'no-useless-concat': 'error', // 無駄な文字列結合は行わないこと
    'object-shorthand': 'error', // オブジェクト定義時にショートハンドが利用できる場合は利用すること
    'prefer-arrow-callback': 'error', // コールバックにはアロー関数を利用すること
    'no-restricted-syntax': [
      'error',
      {
        selector: 'TSEnumDeclaration',
        message: "Don't use `enum` as a type."
      }
    ], // enum禁止
    'default-case': 'error', // switch文では必ずdefaultケースを作成すること
  }
}
