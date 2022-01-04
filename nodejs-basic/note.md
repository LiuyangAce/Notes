# npm
  - 全局安装
    npm install xxx -g
  - 全局卸载
    npm uninstall xxx -g
  - 局部安装
    npm init -y 创建package.json -y:所有都是yes

    dependencies ???
    devDependencies ???

    npm view xxx version  查看当前版本
    npm view xxx versions 查看所有版本
    
  # 版本
    "jquery": "^3.6.0"
    major: 3 主版本, minor: 6 次版本, patch: 0 补丁号 补丁号为奇数表示不稳定的版本
    # npm 版本符号
    - ^ : 锁定到major
    - ~ : 锁定到minor
    - 空: 锁定到patch
    - *: 最新版本
    配合 npm update 使用