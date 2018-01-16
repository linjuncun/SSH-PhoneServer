window.onload=function(){
    var aInput=document.getElementsByTagName('input');
    var oUser=aInput[0];
    var oPwd=aInput[1]
    var aI=document.getElementsByTagName('i')[0];
    
    
    
    //用户名检测
    
    oUser.onfocus=function(){
        aI.innerHTML='';
        oUser.removeAttribute("placeholder");
    }
    
    oUser.onkeyup=function(){
        
    }
    
    oUser.onblur=function(){
        var tel = /1[3|4|5|7|8][0-9]\d{8}$/;
        if(!tel.test(this.value)){
            aI.innerHTML='<i>手机号不正确</>';
             return false;
        }else if(this.value==""){
            aI.innerHTML='<i>手机号不可为空</i>';
            return false;
        }
    }
    
    //密码检测
    
    oPwd.onfocus=function(){
        if(oUser.value==""){
            aI.innerHTML='<i>手机号不可为空</i>';
            return false;
        }
        oPwd.removeAttribute("placeholder");
    }
    oPwd.onblur=function(){
        if(this.value==""){
            aI.innerHTML='<i>密码不可为空</i>';
           return false;
        }
        oPwd.setAttribute("placeholder");
        oPwd.style.placeholder='<i>请输入确认密码</i>';
        return false;
    }
}
