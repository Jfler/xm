document.addEventListener("DOMContentLoaded",function(){
    var num = document.querySelector("#num");
    var num_wrong = document.querySelector(".num_wrong");
    var yzword = document.querySelector("#yzword");
    var yz_wrong = document.querySelector(".yz_wrong");
    var zhuce_btn = document.querySelector(".zhuce_btn");

     var xhr = new XMLHttpRequest();

    num.onblur = function(){
        var _num = num.value;
        var reg = /^1[3-9]\d{9}$/;
        if(!reg.test(_num) && _num != ''){
            num_wrong.innerHTML = '手机号码不合法';
        }else if(reg.test(_num)){
            num_wrong.innerHTML = "手机号输入正确";
            num_wrong.style.color = 'green';
        }

        xhr.onload = function(){
            if(xhr.status == 200 || xhr.status == 304){
                if(xhr.responseText == "false"){

                }else if(xhr.responseText == "true"){

                }else{
                     var res = JSON.parse(xhr.responseText);
                    console.log(res);
                     
                    var panduan = res.map(function(item){
                    if(_num == item.usernumber){
                        return false;
                    }
                    
                    });
                    if(panduan.indexOf(false)!=-1 && _num != ""){
                        num_wrong.innerHTML = "该用户已注册";
                        num_wrong.style.color = "red";
                    }
                }
               
            }
        }
        xhr.open("get","../api/denglu.php?",true);
        xhr.send(null);
    }
    yzword.onclick = function(){ 
        _num = num.value;
        if(_num== ''){
            num_wrong.innerHTML = "手机号不能为空";  
        }
    }

    var showCode = document.querySelector(".showCode");

    randomCode();

    showCode.onclick = function(){
        randomCode();
    }
    function randomCode(){
        var myCode = '';
        for(var i=0;i<4;i++){
            myCode += parseInt(Math.random()*10);   
        }
        showCode.innerHTML = myCode;
    }

    zhuce_btn.onclick = function(){
        _num = num.value;
        _yzword = yzword.value;
        myCode = showCode.innerHTML;
        if(_num== ''){
            num_wrong.innerHTML = "手机号不能为空";  
        }
        if(_yzword!=myCode && _yzword != ""){
            yz_wrong.innerHTML = "验证码输入错误";
            return false;
        }else if(_yzword == ""){
            yz_wrong.innerHTML = "验证码不能为空";
            return false;
        }
        yzword.value = '';

        if(num_wrong.innerHTML == "手机号输入正确" && _yzword == myCode){
           
            xhr.onreadystatechange = function(){
                var status = [200,304];
                if(xhr.readyState == 4 && status.indexOf(xhr.status)!= -1){
                    var res = xhr.responseText;
                    res ="true"?alert("注册成功"):alert("注册失败");
                }
            }
            xhr.open("get","../api/zhuce.php?_num="+_num+"&_yzword="+_yzword,true);
            xhr.send(null);
        }else{
            alert("注册失败");
        }
    }
    
}) 