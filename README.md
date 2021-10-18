## JSXとは

1. JavaScriptの拡張言語
2. HTMLライクな記述 + JavaScriptの構文が使える
3. JSXは最終的にReact要素を生成する

const BlueButton = () => {
    return (
        <Button className={'btn-blue'}>
            Click me!
        </Button>
    )
}
・コンパイル時
  1. JSX->React.createElementの式に変換
  2. React要素を生成

・React.createElementを使った構文は直感的ではない
->JSXと使うことで楽に記述できる

# JSXを使わない場合 React.createElementはReact要素を生成する式
React.createElement(
    'button',
    {className: 'btn-blue'},
    'click me!'
)

## JSXの基礎文法①

1. Reactライブラリをimportする
2. return文の中がJSXの構文
基本的にはHTMLと同じ
classはclassNameと記述する
3. 拡張子は.jsでも.jsxでも良い

import React from 'react';

const BlueButton = () => {
    return (
        <button className={'btn-blue'}>
            Click me!
        </button>
    )
}

export default BlueButton;

## JSXの基礎文法②

1. キャメルケースで記述
2. {}内で変数を扱える
3. 閉じタグが必要

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

## 特殊なJSXの構文

1. JSXは必ず階層構造
最上位コンポーネントは並列にできない。
2. React.Fragmentで囲む
HTMLタグとして出力されない
3. React.Fragmentは省略形で書ける

# Error
return (
    <p>新・日本一わかりやすいReact入門</p>
    <p>JSXの基礎文法を解説します。</p>
)

# OK
return (
    <React.Fragmant>
        <p>新・日本一わかりやすいReact入門</p>
        <p>JSXの基礎文法を解説します。</p>
    </React.Fragmant>
)

# OK
return (
    <>
        <p>新・日本一わかりやすいReact入門</p>
        <p>JSXの基礎文法を解説します。</p>
    </>
)

## create-react-appとは (コマンド: npx create-react-app react-basic)

・最も簡単にReactの開発寛容を構築できる
・本来のReact環境構築は以下の設定が必要
    トランスパイラのBable
    バンドラーのWebpack
    ->Reactの初学者がやるべきではない!
