# Hello PWA World

https://ginpei.github.io/pwa-hello-world/

## PWAとは
- Progressive Web app - WebからWebアプリが作れる
- 端末にインストールして使える
- AndroidやMicrosoft store, iOSにも登録可能

## インストールするとどうなる
- オフラインでも動く
- プッシュ通知、バックグラウンド同期
- ぬるぬるする動きも作れる
- インストール方法とアイコン指定が独特

## 要件
Chromeデベロッパーツールの中に入っているよ

### 注意
- Webページの再読み込み = Service workerの再読み込み、ではない
- Service Workerの再読み込み時は一度unregisterする
- Webページから独立してるのでDOMの操作ができない
- Webページなので閉じてしまうとアプリはバックグラウンド通信できない

### iOSに関しての注意
- Github pagesで共有しても通知は一切来ない

**オフライン対応**
- キャッシュをWebページに返す
- Devtools -> Application 内のOfflineにチェックを入れる
- 再読み込みしても表示されれば成功！
- Audits内のアイコンが切り替わるとインストール可能な状態になる

**インストールしたアプリの削除**
`chrome://apps/`から削除

**スマホでの見た目の確認**
- iOS - シミュレーターの使用
- URL横の\[i]\をDrag and Dropする

**PWAはレスが早い**
- オフラインでも、SWを通じてキャッシュを読み込むのでそうなる

クライアント - Webページ以外のクライアントもありえる
Controller = service worker