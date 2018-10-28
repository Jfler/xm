document.addEventListener("DOMContentLoaded",function(){
    var name = document.querySelector("#name");
    var name_wrong = document.querySelector(".name_wrong");
    var mmword = document.querySelector("#mmword");
    var mima_wrong = document.querySelector(".mima_wrong");
    var denglu_btn = document.querySelector(".denglu_btn");

    var xhr = new XMLHttpRequest();

     name.onblur = function(){
        var _name = name.value;
        var reg = /^1[3-9]\d{9}$/;
        if(!reg.test(_name) && _name != ''){
            name_wrong.innerHTML = '手机号码不合法';
        }

        xhr.onload = function(){
            if(xhr.status == 200 || xhr.status == 304){
                var res = JSON.parse(xhr.responseText);
                     
                var panduan = res.map(function(item){
                     console.log(item.usernumber)
                    if(_name != item.usernumber){
                        return "false";
                    }
                    else{
                        return "true";
                    }
                });                    
                     
                if(panduan.indexOf("true") == -1 && _name != ""){
                    name_wrong.innerHTML = "该用户未注册";
                    name_wrong.style.color = "red";
                }              
            }
        }
        xhr.open("get","../api/denglu.php?",true);
        xhr.send(null);
    }

    denglu_btn.onclick = function(){
        _name = name.value;
        var _mmword = mmword.value;
        xhr.onload = function(){
            if(xhr.status == 200 || xhr.status == 304){
                var res = JSON.parse(xhr.responseText);
                var pd = res.map(function(item){
                    if(_name == item.usernumber && _mmword == item.yzword){
                        return "true";
                    }
                });
                if(pd.indexOf("true")!=-1){
                    // alert("登录成功");
                    location.href = "../index.html?username="+_name;
                }else{
                    alert("密码错误");
                }
            }
        }
        if(_name == ''){
            name_wrong.innerHTML = '用户名不能为空';
            return false;
        }else if(_mmword == ''){
            mima_wrong.innerHTML = '密码不能为空';
            return false;
        }
        xhr.open("get","../api/denglu.php?",true);
        xhr.send(null);
    }
})