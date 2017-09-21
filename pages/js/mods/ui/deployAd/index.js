'use strict';
var html = require('./iframe.tpl');
var mustache = require('mustache');

/**
 * 渲染广告
 * @param  {[type]} el      部署位置
 * @param  {[type]} text    部署代码
 * @param  {[type]} options 部署选项
 * @return {[type]}         [description]
 */
module.exports = function(el, text, options) {
    text = text.replace(/[\r\n]/g, '');
    options = Object.assign({
        width: '100%',
        height: 'auto',
        success: function() {}
    }, options);
    var iframe = document.createElement('iframe');
    iframe.scrolling = 'no';
    iframe.frameborder = '0';
    iframe.style.display = 'none';
    iframe.style.width = options.width;
    iframe.style.height = options.height === 'auto' ? 0 : options.height;

    var onload = function(){
        var win, doc, body, height;
        iframe.style.display = 'block';
        if(options.height === 'auto'){
            //加一个延时器，防止因为有些事根据img的
            //大小定义的宽高，导致的异常
            setTimeout(function(){
                win = iframe.contentWindow;
                if(win){
                    doc = win.document;
                    if(doc){
                        body = doc.body;
                        //height = Math.max(body.scrollHeight, body.offsetHeight);
                        height = body.offsetHeight;
                    }
                }
                height = height || 0;
                iframe.style.height = height + 'px'
            },100);
        }else{
            iframe.style.height = options.height + 'px'
        }
    }
    iframe.addEventListener('load',onload,false);

    var div = document.createElement('div');
    div.style.fontSize = '0';
    div.style.textAlign = 'center';

    setTimeout(function(){
        div.appendChild(iframe)
        el.appendChild(div);
    });

    var _html = mustache.render(html,{
        scripts:text
    });

    _html = _html.replace(/\"/g, '\\"');

    var src = [
		'javascript',
		':(function(){',
			'document.open();',
			'document.write("',_html,'");',
			'document.close();',
		'})();',
	].join('');

    iframe.src=src;
};
