# test-ad如何应用
## 前期准备
### 下载后在当前文件加下运行如下命令
``` cnpm install ```
### 绑定host
```127.0.0.1 test.sina.com.cn```
## 启动服务
``` npm run start ```

## 用法
在chrome模拟手机环境下打开http://test.sina.com.cn     

![用法说明](https://github.com/skyujilong/test-ad/blob/master/pages/img/test01.jpg)


## 测试用例
```javascript
<script>
   ADEZ_slotid = 1027580;
   ADEZ_sync = true;
</script>
<script src="//pic.ggxt.net/sdk/js/core.m.js" charset="utf-8"></script>

```

粘贴上述代码到textarea文本区，进行执行。执行结果如下：

![执行结果](https://github.com/skyujilong/test-ad/blob/master/pages/img/result.jpg)
