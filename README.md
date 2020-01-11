## 心路历程
  最近调研了一下各个native方案。目标是找一个快速将H5页面生成APP的方案。     
将vue页面快速转换为native页面。      
首先原生编写门槛太高，放弃掉         
其次weex，rn本质上只是使用前端代码来进行页面编写，有一层翻译器将前端代码翻译为native代码。      
这种方案并不能发挥出页面快速迭代的优点，并且翻译过程中一定还有坑的存在。      
最终我决定使用hybrid APP形式来开发APP。      
通过内嵌页面，既保留页面功能的完整性，也可以灵活扩展。      
找了两个认为比较好的开源库。      
uniApp,一套代码多端运行，如果页面较为简单，对小程序的要求高，建议选择此方案。能预见的是随着平台的增加，对应的判断模块也会增多。      
开发，调试的困难不小。      
crodova，一套比较老的框架，前身是phonegap，通过内嵌页面的形式开发页面。      

## 创建项目
```
$ cordova create native cn.isjs.www HelloWorld
$ cordova platform add android --save  //增加android包
$ cordova platform add ios --save  //增加ios包
$ cordova requirements  //检查环境是否满足
```

## 修改配置
当修改了config.xml文件后，并不能动态的生成对应APP包。      
需要将之前的删掉重新添加，命令如下：
```
cordova plugin save
cordova platform rm ios
cordova platform add ios
```    

### 注意：
1. 报错：The CocoaPods repo has not been synced yet, this will take a long time (approximately 500MB as of Sept 2016). Please run `pod setup` first to sync the repo.
```
mkdir -p ~/.cocoapods/repos
git clone https://github.com/CocoaPods/Specs ~/.cocoapods/repos/master
```
2. platforms目录下文件不加入到版本管理中，每次项目构建重新生成    

3. 每次修改www目录下文件之后 重新build一下     
```
cordova build ios
```

npm run updateAnd
chcp.json
chcp.manifest 不要删除，删除后执行 cordova-hcp build
