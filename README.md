sudo sysctl fs.inotify.max_user_watches=30000<br>
yarn start<br>
yarnでもpackage.jsonは使う(package-lock.jsonはない)<br>
mainブランチでは直接作業やコミットをせず、developブランチとマージする。(gitflowモデルでは他にもブランチがある)<br>