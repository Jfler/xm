
var params = decodeURI(location.search);
var uname = "";
if(params.split("?")[1]){
    uname = params.split("?")[1].split("=")[1];
    if(uname != null){
        $(".u_name").html("用户:"+uname);
    }
}


$("#main").find("a").click(function (e) {
    e.preventDefault();
    location.href = "html/msglist.html?username="+uname;
});