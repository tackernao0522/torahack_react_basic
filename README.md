## JSXとは

1. JavaScriptの拡張言語
2. HTMLライクな記述 + JavaScriptの構文が使える
3. JSXは最終的にReact要素を生成する

```
const BlueButton = () => {
    return (
        <Button className={'btn-blue'}>
            Click me!
        </Button>
    )
}
```

・コンパイル時
  1. JSX->React.createElementの式に変換
  2. React要素を生成

・React.createElementを使った構文は直感的ではない
->JSXと使うことで楽に記述できる

# JSXを使わない場合 React.createElementはReact要素を生成する式
```
React.createElement(
    'button',
    {className: 'btn-blue'},
    'click me!'
)
```

## JSXの基礎文法①

1. Reactライブラリをimportする
2. return文の中がJSXの構文
基本的にはHTMLと同じ
classはclassNameと記述する
3. 拡張子は.jsでも.jsxでも良い

```
import React from 'react';

const BlueButton = () => {
    return (
        <button className={'btn-blue'}>
            Click me!
        </button>
    )
}

export default BlueButton;
```

## JSXの基礎文法②

1. キャメルケースで記述
2. {}内で変数を扱える
3. 閉じタグが必要

```
import React from 'react';

const Thumbnail = () => {
    const caption = 'トラハックのかっこいい写真'
    const imagePath = '/img/torahack.png'

    return (
        <div>
            <p>{caption}</p>
            <img src={imagePath} alt={'トラハック'} />
        </div>
    )
}

export default Thumbnail;
```

## 特殊なJSXの構文

1. JSXは必ず階層構造
最上位コンポーネントは並列にできない。
2. React.Fragmentで囲む
HTMLタグとして出力されない
3. React.Fragmentは省略形で書ける

# Error
```
return (
    <p>新・日本一わかりやすいReact入門</p>
    <p>JSXの基礎文法を解説します。</p>
)
```

# OK
```
return (
    <React.Fragmant>
        <p>新・日本一わかりやすいReact入門</p>
        <p>JSXの基礎文法を解説します。</p>
    </React.Fragmant>
)
```

# OK
```
return (
    <>
        <p>新・日本一わかりやすいReact入門</p>
        <p>JSXの基礎文法を解説します。</p>
    </>
)
```

## create-react-appとは (コマンド: npx create-react-app react-basic)

+ 最も簡単にReactの開発寛容を構築できる
+ 本来のReact環境構築は以下の設定が必要
    トランスパイラのBable
    バンドラーのWebpack
    ->Reactの初学者がやるべきではない!

## コンポーネントとは

+ 見た目と機能を持つUI部品
+ コンポーネントを組み合わせてページを作る
+ 大きく2種類のコンポーネントに分かれる
① class Component(クラスコンポーネント)
② Functional Component(関数コンポーネント)

(例)
### Class Component
```
import React, {Component} from 'react';

class Button extends Component {
    render() {
        return <button>Say, {this.props.hello}</button>
    }
}

export default Button;
```

### Functional Component(記述量が少ない, 昔はClassでないとできないことがあった、　React Hooksの登場->同じ機能が使える)
```
import React from 'react';

const Button = (props) => {
    return <button>Say, {props.hello}</button>;
};

export default Button;
```

## なぜコンポーネントを使うのか

+ 再利用する為
同じ記述を何度もする必要がない

+ コードの見通しを良くする為
1コンポーネント = 1ファイル
別ファイルに分けることで読みやすくなる

+ 変更に強くする為
修正は一箇所だけでOK

## コンポーネントの基本的な使い方

### App.jsx (親)
```
import Article from "./components/Article";

function App() {
    return (
        <div>
            <Article />
        </div>
    );
}

export default App;
```

### components/Article.jsx (子)
```
const Article = () => {
    return (
        <h2>こんにちは</h2>
    );
};

export default Article;
```

+ ファイル名は大文字
+ 子コンポーネントでexport
+ 親コンポーネントでimport

## propsでデータを受け渡す

### App.jsx
```
import Article from "./components/Article";

function App() {
    return (
        <div>
            <Article
                title={'新・日本一わかりやすいReact入門'}
                content={'今日のトピックはpropsについて。'}
            />
    );
}

export default App;
```

### components/Article.jsx
```
const Article = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.conent}</p>
        </div>
    );
};

export default Article;
```

+ 子コンポーネントの引数にpropsを指定する
+ 親から子にデータを渡す

## propsで受け渡せるデータ

+ propsのデータは{}に記述
+ 文字列、数値、真偽値、配列、オブジェクト、日付などなんでもOK
+ 変数を渡すことも可能
+ 文字列は{}なしでもOK

```
import Article from "./components/Article";

function App() {
    const authorName = 'Torahack'
    const now = new Date()
    return (
        <div>
            <Article
                title={'新・日本一わかりやすいReact入門'}
                content='今日のトピックはpropsについて。'
                order={3}
                isPublishd={true}
                authorName={authorName}
                updatedAt={now}
            />
        </div>
    );
}

export default App;
```

### コンポーネントの再利用

+ 同じコンポーネントをいくつも呼び出すことができる
+ 配列データをmap()メソッドで処理するのが一般的

```
import Article from "./components/Article";

function App() {
    return (
        <div>
            <Article
                title={'新・日本一わかりやすいReact入門4'}
                content={'今日のトピックはpropsについて。'}
            />
            <Article
                title={'新・日本一わかりやすいReact入門5}
                content={'今日のトピックはuseStateについて。'}
            />
            <Article
                title={'新・日本一わかりやすいReact入門6}
                content={'今日のトピックはuseEffectについて。'}
            />
        </div>
    )
}

export default App;
```

## コンポーネントを分けよう

+ 1ファイル = 1コンポーネントにする
+ なぜコンポーネントを分けるのか？<br>
  責務を明確にする（何のためのパーツなのか）<br>
  大規模アプリでも管理しやすくするため <br>
  再利用するため

## JavaScriptのモジュール機能

・プログラムをモジュールという単位に分割する
・原則は1ファイル = 1モジュール
・必要なときに必要なモジュールのみ読み込む

```
import Article from "./components/Article";

function App() {
    return (
        <Article
            title={'新・日本一わかりやすいReact入門基礎編5'}
            content={'importとexportを使いこなそう'}
        />
    );
}
```

## default export (名前なしexport)

```
// アロー関数のdefault export
const Title = (props) => {
    return <h2>{props.title}</h2>
};
export default Title;
```

```
// 名前付き関数のdefault export
export default function Title(props) {
    return <h2>{props.title}</h2>
};
```

+ 推奨されるexport方法
+ 1ファイル = 1export
+ 1度宣言したアロー関数をdefault export
+ 名前付き関数宣言と同時にdefault export

## default import (名前なしimport)

+ default exportしたモジューつをそのまま読み込む
+ importモジュール名 from 'ファイルパス'

```
// Article.jsx(export元)
const Article = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </div>
    );
};
export default Article;
```

```
// App.jsx(import先)
import Article from "./components/Article";

function App() {
    return (
        <Article
            title={'新・日本一わかりやすいReact入門'}
            content={'importとexportを使いこなそう'}
        />
    );
}
```

## 名前付きexport

```
helper.js
export const addTax = (price) => {
    return Math.floor(price * 1.1);
}
export const getWild = () => {
    console.log('Get wild and touch);
}

```
index.js
export {default as Article} from './Article';
export {default as Content} from './Content';
export {default as Title} from './Title'; // defaultという名前のモジューつをTitleという名前でexport
```

+ 1ファイルから複数モジュールをexportしたいとき
+ Reactではエントリポイントでよく使う
+ エントリポイントでは別名exportも併用する

## 名前付きimport

```
import {Content, Title} from "./index";

const Article = (props) => {
    return (
        <div>
            <Title title={props.title} />
            <Content content={props.content} />
        </div>
    );
};

export default Article;
```

+ 1ファイルから複数モジューつを読み込む
+ エントリポイントから複数コンポーネントを読み込む

## コンポーネントの状態を管理

### Hooksとは

+ クラスコンポーネントでしか使えなかったが...<br>
  コンポーネント内で状態を管理するstate <br>
  コンポーネントの時間の流れに基づくライフサイクル <br>

+ __Hooks__により関数コンポーネントでも使えるようになった
+ __Hooks__ = クラスコンポーネントの機能に接続する

## なぜstateを使うのか

+ Reactコンポーネント内の値を書き換えたい...<br>
  コンポーネント内の要素をDOMで直接書き換える X<br>
  新しい値を使って再描画(再レンダリング)させる ◯<br>

+ Reactコンポーネントが再描画するきっかけは？<br>
  __state__が変更されたとき<br>
  __props__が変更されたとき

## useStateの使い方

1. useStateによるstateの宣言
```
const [state, setState] = useState(initialize);
// state = 現在の状態 setState = 更新関数 initialize = 初期値
```

2. stateの更新
```
setState(newState)
// setState = 更新関数 newState = 新しい値
```

3. 具体例
```
const [message, setMessage] = useState('Torahack is cool');
const [likes, setLikes] = useState(0);
const [isPublished, setIsPublished] = useState(false);
setIsPublished(true);
```

## propsとstateの違い

+ 両者ともに再描画のきっかけになるが...<br>
  propsは引数のようにコンポーネントに渡される値<br>
  stateはコンポーネントの内部で宣言・制御される値

## stateをpropsに渡す
```
const Article = (props) => {
    const [isPublished, setIsPublished] = useState(false)
    const publishArticle = () => {
        setIsPublished(true)
    }
    return (
        <div>
            <Title title={props.title} />
            <Content content={props.content} />
            <PublishButton isPublished={isPublished} onClick={publishArticle} />
        </div>
    );
};
```

+ 更新関数はそのままpropsとして渡さず関数化する
+ 関数をpropsに渡すときは注意する

## stateをpropsに渡す
```
const PublishButton = (props) => {
    return (
        <button onClick={() => props.onClick()}>
            公開状態: {props.isPublished.toString()}
        </button>
    )
}
export default PublishButton;
```
+ props.conClick)()はpublishArticle()
+ HTMLのbuttonが持つonClickイベントに渡す

## propsへ関数を渡す際の注意点

### OKな関数の渡し方
```
<PublishButton isPublished={isPublished} onClick={publishArticle} />
<PublishButton isPublished={isPublished} onClick={() => publishArticle()} />
```

### NGな関数の渡し方(無限レンダリングが起きる)
```
<PublishButton isPublished={isPublished} onClick={publishArticle()} />
```
+ コールバック関数か関数自体を渡す ◯
+ propsに渡すときに関数を実行しない x
