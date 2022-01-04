# npm
  # 全局安装
    npm install xxx -g
  # 全局卸载
    npm uninstall xxx -g
  # 局部安装
    - 创建package.json -y:所有都是yes
      1.npm init -y
      2.npm install jquery -S/--save
      2.npm install jquery -D/--save-dev
        dependencies 依赖 用在生产环境 e.g webpack【打包完放到生产环境中 就不用它了】
        devDependencies dev依赖 用在开发环境 e.g jquery vue...

      npm view xxx version  查看当前版本
      npm view xxx versions 查看所有版本

      ** package.json 没有包版本信息的时候
      npm 默认下载的最高版本到node_modules【当然也可以下载指定版本】
      这时候你修改"dependencies"的版本信息 它安装的版本信息肯定是不会变的(你懂我意思吧)
    
  # 版本
    "jquery": "^3.6.0"
    major: 3 主版本, minor: 6 次版本, patch: 0 补丁号 补丁号为奇数表示不稳定的版本
    # npm 版本符号
    - ^ : 锁定到major
    - ~ : 锁定到minor
    - 空: 锁定到patch
    - *: 最新版本
    配合 npm update使用 

      * 拿到别人的的package.json 然后npm i 下载的包版本号 跟npm 版本符号有关 锁定到指定版本 其他位数就是最高版本 【看不懂描述 就去看看视频 或者自己操作下子】
        *npm list 
        *npm outdated
        *npm update