
document.addEventListener('DOMContentLoaded',function(){

    var params = decodeURI(location.search);
    var uname = "";
    if(params.split("?")[1]){
        uname = params.split("?")[1].split("=")[1];
        if(uname != ""){
            $(".u_name").html("用户:"+uname);
        }
    }
    
    


    // 吸顶菜单
    var top_nav = document.querySelector(".top_nav");
    var nav = document.querySelector(".nav"); 
    window.onscroll =function(){
        if(window.scrollY >= 48){
            top_nav.className = "top_nav_stop";
            nav.className = "nav_stop";
        }else if(window.scrollY < 48){
            top_nav.className = "top_nav";
            nav.className = "nav";
        }
    };

    // 更多选项展开
    var gengduo = document.querySelector(".gengduo");
    var yc = document.querySelector(".yc");

    gengduo.onclick = function(){
        if(gengduo.innerHTML == "更多选项(尺寸,颜色等)"){
            yc.style.display = "block";
            gengduo.innerHTML = "精简选项";
            gengduo.className = "gengduo_up";
        }else if(gengduo.innerHTML != "更多选项(尺寸,颜色等)"){
            yc.style.display = "none";
            gengduo.innerHTML = "更多选项(尺寸,颜色等)";
            gengduo.className = "gengduo";
        }
    }


    // 商品列表
    var listbox = document.querySelector(".listbox");

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        var status = [200,304];
        if(xhr.readyState == 4 && status.indexOf(xhr.status) != -1){
            var res = JSON.parse(xhr.responseText);
            showlist(res);
        }
    }
    xhr.open("get","../api/msglist.php?",true);
    xhr.send(null);


    // 价格排序
    var jg_up = document.querySelector('.jg_up');
    var jiag = document.querySelector('.jiag');
    jiag.onclick = function(){
        if(this.children[0].className =="jg_up"){

            xhr.onreadystatechange = function(){
                var status = [200,304];
                if(xhr.readyState == 4 && status.indexOf(xhr.status) != -1){
                    if(xhr.responseText != ""){
                        var res = JSON.parse(xhr.responseText);
                        showlist(res);
                    }    
                }
            }
            xhr.open("get","../api/paixu.php?decide="+false,true);
            xhr.send(null);
            jg_up.className = "jg_down";
        }else if(this.children[0].className == "jg_down"){
            console.log(77)
            xhr.onreadystatechange = function(){
                var status = [200,304];
                if(xhr.readyState == 4 && status.indexOf(xhr.status) != -1){
                    if(xhr.responseText != ""){
                        var res = JSON.parse(xhr.responseText);
                        showlist(res);
                    }    
                }
            }
            xhr.open("get","../api/paixu.php?decide="+true,true);
            xhr.send(null);
            jg_up.className = "jg_up";

        }
           
    }
    // 折扣排序
    var zk_up = document.querySelector('.zk_up');
    var zhek = document.querySelector('.zhek');
    zhek.onclick = function(){
        if(this.children[0].className =="zk_up"){

            xhr.onreadystatechange = function(){
                var status = [200,304];
                if(xhr.readyState == 4 && status.indexOf(xhr.status) != -1){
                    if(xhr.responseText != ""){
                        var res = JSON.parse(xhr.responseText);
                        showlist(res);
                    }    
                }
            }
            xhr.open("get","../api/paixu.php?zhekou="+false,true);
            xhr.send(null);
            zk_up.className = "zk_down";
        }else if(this.children[0].className == "zk_down"){
            console.log(77)
            xhr.onreadystatechange = function(){
                var status = [200,304];
                if(xhr.readyState == 4 && status.indexOf(xhr.status) != -1){
                    if(xhr.responseText != ""){
                        var res = JSON.parse(xhr.responseText);
                        showlist(res);
                    }    
                }
            }
            xhr.open("get","../api/paixu.php?zhekou="+true,true);
            xhr.send(null);
            zk_up.className = "zk_up";
        }
           
    }

    // 上架时间排序
    var sj_up = document.querySelector('.sj_up');
    var shangjia = document.querySelector('.shangjia');
    shangjia.onclick = function(){
        if(this.children[0].className =="sj_up"){

            xhr.onreadystatechange = function(){
                var status = [200,304];
                if(xhr.readyState == 4 && status.indexOf(xhr.status) != -1){
                    if(xhr.responseText != ""){
                        var res = JSON.parse(xhr.responseText);
                        showlist(res);
                    }    
                }
            }
            xhr.open("get","../api/paixu.php?judeg="+false,true);
            xhr.send(null);
            sj_up.className = "sj_down";
        }else if(this.children[0].className == "sj_down"){
            console.log(77)
            xhr.onreadystatechange = function(){
                var status = [200,304];
                if(xhr.readyState == 4 && status.indexOf(xhr.status) != -1){
                    if(xhr.responseText != ""){
                        var res = JSON.parse(xhr.responseText);
                        showlist(res);
                    }    
                }
            }
            xhr.open("get","../api/paixu.php?judeg="+true,true);
            xhr.send(null);
            sj_up.className = "sj_up";
        }
           
    }

    // 渲染
    function showlist(res){
        listbox.innerHTML = res.map(function(item){
            return `<li class="showlist" guid="${item.guid}">
                    <div class="imgbox">
                        <img src="${item.imgurl}" alt="" />
                        <p class="xianshi">${item.zhekou}</p>
                        <div class="sold_size">
                            <p>可售尺码</p>
                            <span>${item.size}</span>
                        </div>
                    </div>                                
                    <span class="name">${item.name}</span>
                    <a href="" class="styles">${item.styles}</a> 
                    <div class="price">
                        <span class="yuanjia">￥<i>${item.sale}</i></span>
                        <span class="xianjia"><del>￥${item.price}</del></span>
                    </div> 
                </li>`;
        }).join("");
    }

    // 跳转
    listbox.onclick = function(e){
        if(e.target.tagName.toLowerCase() == 'img'){
            var li = e.target.parentElement.parentElement;
            var guid = li.getAttribute('guid');
            location.href = "details.html?guid="+guid+"&username="+uname;
        }
    }

    // 关闭侧边栏
    $(".close").on("click",function(){
        $(".cbbox").remove();
    })
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
})
