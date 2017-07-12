'use strict';
require('../../scss/base.scss');
require('../../scss/index.scss');

var deployAd = require('../mods/ui/deployAd');

var textareaEl = document.querySelector('textarea');
var btn = document.querySelector('input[type="button"]');

textareaEl.addEventListener('click',function(){
    textareaEl.value="";
},false);

btn.addEventListener('click',function(e){
    if(textareaEl.value=== ''){
        alert('广告代码区域不能为空！！')
        return;
    }
    deployAd(document.querySelector('.ad'),textareaEl.value);
},false);



if(module.hot){
    module.hot.accept();
}
