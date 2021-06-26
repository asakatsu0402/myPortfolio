# プロジェクト

My Portfolio Site

## ファイル構成

```text
app/
 ├─ backend
 │   └─ ...
 ├─ frontend
 │   └─ ...
     ├─ src/          /***** コーディング *****/
     │   ├─ images/          /***** 画像 *****/
     │   │    └─ ...
     │   ├─ layouts/          /***** レイアウトコンポーネント (Header, Footer, Mainなど) *****/
     │   │    └─ ...
     │   ├─ components/          /***** ページ別コンポーネント (Header, Footer, Mainなど) *****/
     │   │    ├─ atoms          /***** 単一コンポーネント（タグなど） *****/
     │   │    │   └─ ...  
     │   │    └─ morecules/          /***** まとまりコンポーネント（セクション, フォームなど、ページ別で管理） *****/
     │   │        └─ ...
     │   ├─ config/          /***** 配列や設定など （ハードコーディング系） *****/
     │   │    ├─ firebaseConfig.ts
     │   │    └─ ...
     │   ├─ functions/          /***** 関数 （APIなど） *****/
     │   │    └─ ...
     │   ├─ pages/          /***** ページ （申請書, マスター管理, ステータス） *****/
     │   │    └─ ...
     │   ├─ stylesheets/          /***** スタイル （申請書, マスター管理, ステータス） *****/
     │   │    └─ ...
     │   └─ ...
     └─ ...
```

## 始め方

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `FontAwesomeProを使用可能にする`
* bashにて下記SHELLコードを叩く
  [導入方法](https://doc.clickup.com/d/h/3en54-1314/9c1d3d000882f5b)

```
$ export NPM_TOKEN="E4668237-B355-4A7D-9494-9E283B18955B"
```
