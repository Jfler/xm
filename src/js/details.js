document.addEventListener('DOMContentLoaded',function(){
    var datu = document.querySelector(".datu");
    var dt = document.querySelector(".dt");
    var zhekou = document.querySelector(".zhekou");
    var brand = document.querySelector(".brand");
    var styles = document.querySelector(".styles");
    var styles_x = document.querySelector(".styles_x");
    var xianjia = document.querySelector(".xianjia");
    var yuanjia = document.querySelector(".yuanjia");
    var size = document.querySelector(".size");
    var number = document.querySelector("#number");
    var xj = document.querySelector(".xj");
    var yanse = document.querySelector(".yanse");
    var zengjia = document.querySelector(".zengjia");
    var carbag = document.querySelector(".carbag");

    
    var params = decodeURI(location.search);

    params = params.slice(1,-1);

    var paramsArr = params.split("&");
    var obj = {};
    paramsArr.forEach(function(item){
                
        var arr = item.split("=");
        obj[arr[0]] = arr[1];
    })
    console.log(obj);
    if(obj.username != null){
        $(".u_name").html("用户:"+obj.username);   

    }



    var currentObj = {};
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        var status = [200,304];
        if(xhr.readyState == 4 && status.indexOf(xhr.status) != -1){
            var res = xhr.responseText;
            if(typeof res == "string"){
                res =  JSON.parse(res);
                res.forEach(function(item, idx) {
                    if(obj.guid == idx){
                        currentObj = item;
                        datu.innerHTML = '<img src="'+item.imgurl+'">';
                        dt.innerHTML = '<img src="'+item.tu01url+'">';
                        styles.innerHTML = item.styles;
                        styles_x.innerHTML = item.styles;
                        zhekou.innerHTML = "["+item.zhekou+"]";
                        xianjia.innerHTML = "￥"+item.sale;
                        brand.innerHTML = item.name;
                        yanse.innerHTML = item.yanse;
                        size.innerHTML = item.size;
                        yuanjia.innerHTML = "￥"+item.price;

                        number.oninput = function(){
                            xj.innerHTML = "￥"+item.sale * this.value;
                        }
                    }
                })
            }   
        }
    }
    xhr.open("get","../api/msglist.php?",true);
    xhr.send(null);

    // 传入cookie
    var jia = document.querySelector(".jia");
    var jiaArr = Cookie.getCookie("goodMsg") || [];
    if(typeof(jiaArr) == "string"){
        jiaArr = JSON.parse(jiaArr);
    }


    $(".jianshao").on("click",function(){
        if($(this).val("-")){
            if(number.value >0){
                number.value--;
            }      
        }
        
    })

    $(".zengjia").on("click",function(){
        if($(this).val("+")){
            number.value++;
        }
    })


    // 点击添加购物车
    jia.onclick = function(){
        if(obj.username != null){
            var i;
            var res = jiaArr.some(function(item,guid){
                i = guid;
                return item.guid == currentObj.guid;
            })
            console.log(jiaArr)
            if(res){
                    jiaArr[i].num++;
                    Cookie.setCookie("goodMsg",JSON.stringify(jiaArr),null,"/");
                    $(".qty").html(jiaArr[i].num*1);
                    $(".num").html(jiaArr[i].num);

            }else{
                var mygoods = {
                    guid : currentObj.guid,
                    imgurl : currentObj.imgurl,
                    name : currentObj.name,
                    price : currentObj.price,
                    sale : currentObj.sale,
                    yanse : currentObj.yanse,
                    size : currentObj.size, 
                    styles : currentObj.styles,
                    num : number.value
                }
                jiaArr.push(mygoods);
                $(".qty").html(number.value);         
            }
            Cookie.setCookie("goodMsg",JSON.stringify(jiaArr),null,"/"); 

        
            xhr.onreadystatechange = function(){
                var status = [200,304];
                if(xhr.readyState == 4 && status.indexOf(xhr.status)!= -1){
                    var res = xhr.responseText;
                    // res ="true"?alert("添加成功"):alert("添加失败");
                }
            }
            xhr.open("get","../api/usercat.php?guid="+currentObj.guid+"&imgurl="+currentObj.imgurl+"&name="+currentObj.name+"&price="+currentObj.price+"&sale="+currentObj.sale+"&yanse="+currentObj.yanse+"&size="+currentObj.size+"&styles="+currentObj.styles+"&num="+number.value,true);
            xhr.send(null);

            carbox(jiaArr);
        }else{
            alert("请先登录");
        }
    }


    // 顶部购物车
    function carbox(jiaArr){
        carbag.innerHTML = jiaArr.map(function(item){
            return `<li guid="${item.guid}">
                        <div class="car_l">
                            <img src="${item.imgurl}">
                        </div>
                        <div class="car_r">
                            <p>${item.name}</p>
                            <p>
                                <span>${item.styles}</span><span>${item.yanse}</span>
                            </p>
                            <p><span>￥ ${item.sale}</span>&nbsp;&times;&nbsp;<span>${item.num}</span></p>
                            <span class="det">删除</span>
                        </div>
                    </li>`;
        }).join("");
    }
    var $carbag = $(".carbag");
    var len = jiaArr.length;
    if(len>=1){
        $carbag.show();
    }else if(len<1){
        $(".carbox").html("还没有添加商品哦");
        $carbag.hide();
    }

    // 点击顶部购物袋跳转
    $(".chakan").on("click",function(){
        location.href = "car.html?username="+obj.username;
    })

    // 点击购物袋跳转
   $(".shopbag").on("click",function(){
        if(obj.username != null){      
            location.href = "car.html?username="+obj.username;
        }else{                 
            alert("请先登录");
        }
    })
    
    // 点击购买跳转
    $(".mai").on("click",function(){
        if(obj.username != null){
            location.href = "car.html?username="+obj.username;      
        }else{
            alert("请先登录");
        }
    })



    // 关闭侧边栏
    $(".close").on("click",function(){
        $(".cbbox").remove();
    })

    // 评论区吸顶
    var pinglun = document.querySelector(".pinglun"); 
    window.onscroll =function(){
        if(window.scrollY >= 888){
            pinglun.className = "pinglun_stop";
        }else if(window.scrollY < 888){
            pinglun.className = "pinglun";
        }
    }
    
    // 返回顶部效果
    var to_top = document.querySelector('.to_top');
    var timer;

    to_top.onclick = function(){
        clearInterval(timer);
        timer = setInterval(function(){
            var currentPos = window.scrollY;
            if(currentPos <= 0){
                currentPos = 0;
                clearInterval(timer);
            }       
            var speed = Math.ceil(currentPos/10);
            window.scrollBy(0,-speed);
        }, 30)
    }

    // tab切换
    $(".msgxx").on("click",function(){
        $(".shipai").show();
        $(".zouxiu").hide();
        $(".fw").hide();
        $(this).css({"background":"#ea7144","color":"#fff"});
    })
    $(".comment").on("click",function(){
        $(".shipai").show();
        $(".zouxiu").hide();
        $(".fw").hide();
        $(".msgxx").css({"background":"#f3f3f3","color":"#333"});
    })
    $(".promise").on("click",function(){
        $(".zouxiu").show();
        $(".shipai").hide();
        $(".fw").hide();
        $(".msgxx").css({"background":"#f3f3f3","color":"#333"});
    })
    $(".fuwu").on("click",function(){
        $(".fw").show();
        $(".shipai").hide();
        $(".zouxiu").hide();
        $(".aside").hide();
        $(".msgxx").css({"background":"#f3f3f3","color":"#333"});
    })
})