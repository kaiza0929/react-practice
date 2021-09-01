sudo sysctl fs.inotify.max_user_watches=50000<br>
yarn start<br>
yarnでもpackage.jsonは使う(package-lock.jsonはない)<br>
mainブランチでは直接作業やコミットをせず、developブランチとマージする。(gitflowモデルでは他にもブランチがある)<br>
reduxの正規化 -> idの配列と{id: idに対応するオブジェクト} https://www.google.com/search?q=allids+redux&oq=allids+redux&aqs=chrome..69i57.3563j0j7&sourceid=chrome&ie=UTF-8<br>
型定義でジェネリクスを使う(type Hoge\<T\>)  https://book.yyts.org/features/generics/type-parameter-constraint<br>