document.addEventListener('DOMContentLoaded',function(){
    
    var output = document.querySelector(".output");
    var btnClear = document.querySelector(".btnClear");
    var number = document.querySelector(".number");
    var zongjia = document.querySelector(".zongjia");
    var all = document.querySelector(".all");
    var son = document.querySelector(".son");

    var params = decodeURI(location.search);
    var uname = "";
    if(params.split("?")[1]){
        uname = params.split("?")[1].split("=")[1];
        if(uname != ""){
            $(".u_name").html("用户:"+uname);
        }
    }

    var goodMsg;

    render();

    var $allCheckbox = $(":checkbox").filter(".all");
    var $sCheckbox = $(":checkbox").not(".all");

    $allCheckbox.on("click",function(){
        $sCheckbox.prop("checked",this.checked);
        changeAllChecked();
    })

    $(".son").on("click",function(){
        changeAllChecked();
    })

    function changeAllChecked(){
        var len = $sCheckbox.length;
        var checkedlen = $sCheckbox.filter(":checked").length;
        if(len == checkedlen){
            $allCheckbox.prop("checked",true);
            $(".clearAll").on("click",function(){
                Cookie.removeCookie("goodMsg",Cookie.getCookie('goodMsg'),"/");
                render();
                $("#carkuang").show();
            })
        }else{
            $allCheckbox.prop("checked",false);
        }
    }
    

    function render(){
            goodMsg = Cookie.getCookie('goodMsg');//

            if(goodMsg === ''){
                goodMsg = [];
                $("#spkuang").hide();
                $("#jiesuan").hide();
            }else{
                goodMsg = JSON.parse(goodMsg);
                $("#carkuang").hide();                
            }
            
            var total = 0;
            var shul = 0;
            var price_z = 0;
            
            output.innerHTML = goodMsg.map(function(item){
                shul = item.num;
                price_z = item.sale;
                total += item.sale*item.num;
                return `<li class="dange" guid="${item.guid}">
                            <p class="check">
                                <input type="checkbox" class="son"/>
                            </p>
                            <div class="shangp">
                                <img src="${item.imgurl}" height="88" width="66" alt="" />
                                <div class="tex">
                                    <span>${item.name}</span>
                                    <span>${item.styles}</span>
                                    <span>颜色 : ${item.yanse}  尺码 : ${item.size}</span>
                                </div>
                            </div>
                            <div class="sp_price">
                                <p><del>￥${item.price}</del></p>
                                <p>￥${item.sale}</p>
                            </div>
                            <div class="num">
                                <input type="button" value="-" class="jian">
                                <input type="number" value="${item.num}" class="number"/>
                                <input type="button" value="+" class="zeng">
                            </div>
                            <div class="sp_sc">
                               <span>移致收藏夹</span>
                               <span class="btnClear">删除</span>
                            </div>
                        </li>`;
            }).join('');
 
            $(".zeng").on("click",function(){
                if($(this).val() == "+"){
                    
                    var num = $(this).prev().val()*1;
                            num++;
                        $(".number").val(num);  
                        
                    if($(this).parent().parent().children(":first").children().prop("checked")){
                        
                        $(".shuliang").html(num);
                        zongjia.innerText = "￥" + price_z*num;

                    }
                }
                
            })
            $(".jian").on("click",function(){
                if($(this).val() == "-"){
                    
                    var num = $(this).next().val()*1;
                            num--;
                        $(".number").val(num);  
                        
                    if($(this).parent().parent().children(":first").children().prop("checked")){
                        
                        $(".shuliang").html(num);
                        zongjia.innerText = "￥" + price_z*num;

                    }
                }
                
            })
        
             $(".btnClear").on("click",function(){

                if(this.className = "btnClear"){

                    var currentLi = this.parentElement.parentElement;

                    var id = currentLi.getAttribute('guid');

                    for(var i=0;i<goodMsg.length;i++){
                        if(goodMsg[i].guid == id){

                            goodMsg.splice(i,1);
                            break;
                        }
                    }
                    Cookie.setCookie('goodMsg',JSON.stringify(goodMsg),null,"/");
                    render();

                }
                
            })
             if(goodMsg == ""){
                $("#spkuang").hide();
                $("#jiesuan").hide();
                $("#carkuang").show();
                if($("#carkuang").show()){
                    $(".tiaoxuan").click(function (e) {
                        e.preventDefault();
                        location.href = "../index.html?username="+uname;
                        console.log(666);
                    });
                }
                
            }
        }


        
})