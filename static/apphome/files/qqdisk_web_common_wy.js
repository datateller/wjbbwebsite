
if(typeof(WEIYUN_WEB)=="undefined"||!WEIYUN_WEB){var WEIYUN_WEB={};WEIYUN_WEB.version="1.0.0.1";WEIYUN_WEB.author="The Club Dev Team, ISRD, Tencent Inc.";}
WEIYUN_WEB.Utils=(function(){var _kBytes=1024;var _mBytes=1048576;var _gBytes=1073741824;var _uppuv=function(){if(typeof pgvMain=='function'){pgvMain("",{tagParamName:'WYTAG',virtualURL:'web/index.html',virtualDomain:"www.weiyun.com"});}}
var _obj2str=function(o){var r=[];if(typeof o=="string")return"\""+o.replace(/([\'\"\\])/g,"\\$1").replace(/(\n)/g,"\\n").replace(/(\r)/g,"\\r").replace(/(\t)/g,"\\t")+"\"";if(typeof o=="object"){if(!o.sort){for(var i in o){r.push("\""+i+"\":"+_obj2str(o[i]));}
if(!!document.all&&!/^\n?function\s*toString\(\)\s*\{\n?\s*\[native code\]\n?\s*\}\n?\s*$/.test(o.toString)){r.push("toString:"+o.toString.toString());}
r="{"+r.join()+"}";}else{for(var i=0;i<o.length;i++){r.push(_obj2str(o[i]));}
r="["+r.join(',')+"]";}
return r;}
return o.toString();}
var _getCurrTime=function(){var now=new Date();var _month=(10>(now.getMonth()+1))?'0'+(now.getMonth()+1):now.getMonth()+1;var _day=(10>now.getDate())?'0'+now.getDate():now.getDate();var _hour=(10>now.getHours())?'0'+now.getHours():now.getHours();var _minute=(10>now.getMinutes())?'0'+now.getMinutes():now.getMinutes();var _second=(10>now.getSeconds())?'0'+now.getSeconds():now.getSeconds();return now.getFullYear()+'-'+_month+'-'+_day+' '+_hour+':'+_minute+':'+_second;}
var _checkCookie=function(){return!!(QQVIP.cookie.get('uin')||QQVIP.cookie.get('clientuin'));}
var _logOut=function(){var _list=['clientuin','clientkey','skey','uin','indep'];for(i in _list){QQVIP.cookie.del(_list[i],"weiyun.com");}
location.replace(location.href);}
var _showUserTips=function(){var token=QQVIP.security.getAntiCSRFToken();var _url="http://www.weiyun.com/php/getuserinfo.php?cmd=10014&g_tk="+token;var _urlRef=location.href;if(_urlRef.indexOf("?")!=-1){_param=_urlRef.split("?")[1];}
if(_checkCookie()){var _jsLd=new QQVIP.JsLoader();_jsLd.load(_url);_com_getUserInfo=function(json){if(json.result==0){$('nickName').innerHTML=json.data.nickname;QQVIP.dataCenter.save('qqdisk_userInfo',json.data);WEIYUN_WEB.FileOp.getPsUserInfo();}else{_toLogin();}}}else{_toLogin();}}
var _formatFilesize=function(filesize){var _result='';if(filesize<_kBytes){_result=filesize+'B';}else if(filesize<_mBytes){_result=filesize/_kBytes;if(isNaN(_result))
_result='未知';else
_result=_result.toFixed(2)+'K';}else if(filesize<_gBytes){_result=filesize/_mBytes;if(isNaN(_result))
_result='未知';else
_result=_result.toFixed(2)+'M';}else{_result=filesize/_gBytes;if(isNaN(_result))
_result='未知';else
_result=_result.toFixed(2)+'G';}
return _result;};var _checkDirPath=function(){var _obj=$('pathInfo');var _lis=_obj.getElementsByTagName('a');if(_lis.length>18){return 1029;}else{return 0;}}
var _checkFileName=function(name){var regExp=/[/\:*?"<>|]/;
        if (regExp.test(name)) {
            return 3003;
        }
        var tempName = name;
        var oriLen = name.length;
        tempName = tempName.replace(/\s/g, "");
        if (oriLen != 0 && tempName.length == 0) {
            return 3007;
        }
        if (name.length > 128) {
            return 3004;
        } else if (name.length == 0) {
            return 3005;
        }
        return 0;
    }
    var _init = function () {
        //初始化flash对象
        WEIYUN_WEB.flashObj = null;
        WEIYUN_WEB.flash.initFlash($('upload'), "100", "27", 1);
        if (QQVIP.userAgent.ie < 7) {
            $('iframe_mask').style.display = 'none';
        }
        if (navigator.userAgent.indexOf("MSIE") == -1) {
            if ($('copy').innerHTML == "复制") {
                $('copy').innerHTML = "复制<embed name=\"clipboardswf\" class=\"clipboardswf\" id=\"clipboardswf\" onmouseover=\"WEIYUN_WEB.Utils.setCopyText()\" devicefont=\"false\" src=\"http://www.weiyun.com/web/clipboard.swf\" menu=\"false\" allowscriptaccess=\"sameDomain\" swliveconnect=\"true\" wmode=\"transparent\" type=\"application/x-shockwave-flash\" height=\"20\" width=\"40\">";}}
_killFocus();setTimeout(function(){WEIYUN_WEB.Utils.showUserTips();},0);$('loading').style.display="";};var _isChinese=function(str){var _rex=/[u00-uFF]/;return!_rex.test(str);}
var _strlen=function(str){var _strlength=0;for(i=0;i<str.length;i++){if(_isChinese(str.charAt(i))==true)
_strlength=_strlength+2;else
_strlength=_strlength+1;}
return _strlength;}
var _cutStr=function(str,length,type){var _len=_strlen(str);if(type==1){var _strArr=str.split(".");if(_strArr.length!=1){var _postFix=_strArr[_strArr.length-1];_strArr.pop();_len=_strlen(_strArr.join(""));if(_len-_postFix.length-1<=length&&_postFix.length<5){return str;}}else{if(_len-1<=length){return str;}}}else{if(_len-1<=length){return str;}}
var ret=[];var _slen=str.length;if(type==1){var _strArr=str.split(".");if(_strArr.length!=1){_slen=_strArr[0].length;}}
var _realLen=0;for(var i=0;i<_slen&&_realLen<length;i++){if(_isChinese(str.charAt(i))==true){_realLen+=2;}else{_realLen+=1;}
ret.push(str.charAt(i).toString());}
(_len>length)&&(ret.push("..."));if(type==1){var _strArr=str.split(".");if(_strArr.length!=1){var _tail=_strArr[_strArr.length-2];(_len>length)&&(ret.push(_tail[_tail.length-1]));var _postFixName=_strArr[_strArr.length-1];var _tmp=[];if(_postFixName.length>4){for(var i=0;i<4;i++){_tmp.push(_postFixName.charAt(i).toString());}
_postFixName=_tmp.join("");}
var _postFix="."+_postFixName;ret.push(_postFix);}else{ret.push(str[str.length-1]);}}else{ret.push(str[str.length-1]);}
return ret.join("");}
var _checkFileType=function(type,flag){type=type.toLowerCase();type=(type=="docx"||type=="wps")?"doc":type;type=(type=="xlsx")?"xls":type;type=(type=="pptx")?"ppt":type;var _fileTypeArr=['avi','doc','fla','htm','html','mod','mov','mp3','mp4','msg','pdf','ppt','psd','rar','wav','wma','wmv','xls','zip','gif','jpg','png','txt','swf'];for(var i=0;i<_fileTypeArr.length;i++){if(type==_fileTypeArr[i]){return type;}}
var _default="file";if(flag==1){_default="normal";}
return _default;}
var _copyToClipboard=function(){var clipBoardContent=$('shareUrlAddr').innerHTML;window.clipboardData.setData("Text",clipBoardContent);$('copyRst').style.display="";}
var _setCopyText=function(){var clipBoardContent=$('shareUrlAddr').innerHTML;window.document.clipboardswf.SetVariable('str',clipBoardContent);}
var _reachBottom=function(){var scrollTop=0;var clientHeight=0;var scrollHeight=0;if(document.documentElement&&document.documentElement.scrollTop){scrollTop=document.documentElement.scrollTop;}else if(document.body){scrollTop=document.body.scrollTop;}
if(document.body.clientHeight&&document.documentElement.clientHeight){clientHeight=(document.body.clientHeight<document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;}else{clientHeight=(document.body.clientHeight>document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;}
scrollHeight=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight);if(scrollTop+clientHeight>=scrollHeight-250){return true;}else{return false;}}
var _backtoTop=function(){jQuery.scrollTo(0,1000);}
var _killFocus=function(){var _arr=['A','BUTTON'];QQVIP.object.each(_arr,function(v){$e(v).each(function(o){o.onfocus=function(){this.blur();};});});}
var _initVideo=function(){var Q=QZFL,D=Q.dom,Ev=Q.event,El=Q.element;var x,_videoBox,_mask,_videoEl;var _playBtn=El.get('a.video-play-btn',D.get('download_link')).elements[0];if(Q.media.getFlashVersion().toNumber()>0){Ev.addEvent(_playBtn,'click',function(_e){Ev.preventDefault(_e);_videoBox=D.get('video_box');_videoEl=El.get('.video-el',_videoBox).elements[0];if(!_mask){_mask=D.get('mask');Ev.addEvent(_mask,'click',function(){_hide();});}
if(!x){x=El.get('a.-x',_videoBox).elements[0];Ev.addEvent(x,'click',function(_e1){Ev.preventDefault(_e1);_hide();});}
_show();});var _show=function(){var flashHtml=Q.media.getFlashHtml({wmode:"window",flashvars:["vid=e010763bw0u","autoplay=1","adplay=0","searchbar=0","showend=0"].join("&amp;"),src:"http://imgcache.qq.com/tencentvideo_v1/player/TPout.swf?max_age=86400&amp;v=20121129",quality:"high",bgcolor:"#000000",width:"700",height:"434",align:"middle",allowfullscreen:"true",type:"application/x-shockwave-flash",pluginspage:"http://get.adobe.com/cn/flashplayer/"});_videoEl.innerHTML=flashHtml;_videoBox.style.display='';_mask.style.display='';_mask.style.cssText='display:block;height:'+Math.max(document.body.offsetHeight,document.documentElement.offsetHeight)+'px;';_logCommit({"log_data":[{"rst":0,"service_id":4,"op":9114,"subop":0}]});};var _hide=function(){_mask.style.display='none';_videoBox.style.display='none';setTimeout(function(){_videoEl.innerHTML='';},20);};}else{_playBtn.style.display='none';}};var _drawImage=function(ImgD,iwidth,iheight){var image=new Image();image.src=ImgD.src;if(image.width>0&&image.height>0){flag=true;if(image.width/image.height>=iwidth/iheight){if(image.width>iwidth){ImgD.width=iwidth;ImgD.height=(image.height*iwidth)/image.width;}else{ImgD.width=image.width;ImgD.height=image.height;}}else{if(image.height>iheight){ImgD.height=iheight;ImgD.width=(image.width*iheight)/image.height;}else{ImgD.width=image.width;ImgD.height=image.height;}}}}
var _logCommit=function(data){try{document.domain="weiyun.com";}catch(e){}
var _url='http://tj.cgi.weiyun.com/wy_log.fcg';var _userInfo=QQVIP.dataCenter.get('qqdisk_userInfo');var _uin=_userInfo?_userInfo.uin:0;var _param={"req_header":{"client_ip":"","cmd":"wy_log_flow_bat","dev_id":"","weiyun_ver":"","source":"weiyunWeb","os_ver":"","uin":_uin,"os_type":4,"msg_seq":1,"proto_ver":2,"rsp_compressed":1,"encrypt":0,"net_type":0,"dev_type":9001},"req_body":data};_param=_obj2str(_param);var _arr=_param.split("}{");_param=_arr.join("},{");var _xhr=new QQVIP.XHR(_url,null,'POST',_param,true,true);_xhr.send();_xhr.onSuccess=function(json){var _str=json["text"];var _obj=eval('('+_str+')');}}
function _toLogin(){var loc=location,mainURL=loc.protocol+'//'+loc.host,isAppBox=loc.href.indexOf(mainURL+'/appbox/')==0,isQPlus=loc.href.indexOf(mainURL+'/qplus/')==0,path=isAppBox?'/appbox':(isQPlus?'/qplus':'');loc.href=mainURL+path+'/web/login.html?from='+encodeURIComponent(loc.href);}
return{showUserTips:_showUserTips,logOut:_logOut,checkCookie:_checkCookie,checkFileName:_checkFileName,getCurrTime:_getCurrTime,obj2str:_obj2str,cutStr:_cutStr,checkFileType:_checkFileType,init:_init,formatFilesize:_formatFilesize,killFocus:_killFocus,reachBottom:_reachBottom,drawImage:_drawImage,backtoTop:_backtoTop,copyToClipboard:_copyToClipboard,setCopyText:_setCopyText,checkDirPath:_checkDirPath,initVideo:_initVideo,logCommit:_logCommit};})();/*  |xGv00|5f82b7b9cbea4f08e4e4195833d4f46c */