# Gitlab OSS Integration 

Gitlab和OSS集成主要是为了让gitlab的代码打包文件存放到aliyun的OSS服务上.

主要流程如下:

```flow
st=>start: 下载GITLAB代码
e=>end: 下载Gitlab代码成功
downloadApi=>operation: 下载Api
cond=>condition: 是否最新的commit对应文件已经上传过OSS?
upload=>inputoutput: 异步upload to oss
return=>inputoutput: 返回oss下载链接,如果还没有上传到OSS完返回为空
cond1=>condition: 前端判断链接是否为空?
download=>inputoutput: 可以下载
wait=>inputoutput: 等待下载，前端显示等待，提供一个刷新按钮

st->downloadApi->cond
cond(yes)->return->cond1
cond(no)->upload->return
cond1(yes)->wait->download
cond1(no)->download->e
```
