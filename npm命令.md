
检查npm管理包
npm -v

vue用一行代码删除所有依赖（小妙招）
第一步执行：
npm install rimraf -g
第二步执行：

rimraf node_modules

1、清理依赖包 
del node_modules
2、强制清理依赖
npm cache clear --force



//获取当前npm服务器地址
npm config get registry
//切换npm 淘宝镜像
npm config set registry https://registry.npm.taobao.org


npm ---》
别名：install 简写为i
全局：--global 简写为-g
开发：--save-dev 简写为-D
产品：--save 简写为S


//将模块安装到项目的node_modules目录中，但不写入package.json
npm install x

//不会将模块安装到项目的node_modules，而是会安装到node.js的node_modules目录中
npm install --global x：

//将模块安装进项目的node_modules目录中，并写入package.json的dependencies中 
npm install --save x：

//将模块安装进项目的node_modules目录中，并写入package.json的devDependencies中 
npm install --save-dev x：

//安装时忽略所有peerDependencies，忽视依赖冲突，采用npm版本4到版本6的样式去安装依赖，已有的依赖不会覆盖。
// 建议用--legacy-peer-deps 比较保险一点
npm install --legacy-peer-deps
//会无视冲突，并强制获取远端npm库资源，当有资源冲突时覆盖掉原先的版本。
npm install --force



//全局安装webpack
npm install -g webpack
 //安装到你的项目目录
npm install --save-dev webpack
 //初始化package.json
npm init
 //使用webpack构建本地服务器
npm install --save-dev webpack-dev-server
 //运行本地服务器
npm run server
 // npm一次性安装多个依赖模块，模块之间用空格隔开
npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react
 //css-loader 和 style-loader
npm install --save-dev style-loader css-loader
 //安装less-loader和less： 
npm install less less-loader --save-dev
 //postcss-loader 和 autoprefixer（自动添加前缀的插件）
npm install --save-dev postcss-loader autoprefixer
 //自动根据模版生成html插件
npm install --save-dev html-webpack-plugin
 //分离CSS和JS文件
npm install --save-dev extract-text-webpack-plugin