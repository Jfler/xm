<?php
// 连接数据库
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "zouxiu";

    $conn = new mysqli($servername,$username,$password,$dbname);
    if($conn->connect_error){
        die($conn->connect_error);
    }
    $conn->set_charset("utf8");
    
    $guid = isset($_GET["guid"])?$_GET["guid"]:"";
    $imgurl = isset($_GET["imgurl"])?$_GET["imgurl"]:"";
    $name = isset($_GET["name"])?$_GET["name"]:"";
    $price = isset($_GET["price"])?$_GET["price"]:"";
    $sale = isset($_GET["sale"])?$_GET["sale"]:"";
    $yanse = isset($_GET["yanse"])?$_GET["yanse"]:"";
    $size = isset($_GET["size"])?$_GET["size"]:"";
    $styles = isset($_GET["styles"])?$_GET["styles"]:"";
    $num = isset($_GET["num"])?$_GET["num"]:"";

    $sql = 'insert into usercat (guid,imgurl,name,price,sale,yanse,size,styles,num) values ("'.$guid.'","'.$imgurl.'","'.$name.'","'.$price.'","'.$sale.'","'.$yanse.'","'.$size.'","'.$styles.'","'.$num.'")';
    $res = $conn->query($sql);
    if($res){
        echo "true";
    }else{
        echo "false";
    }
    $conn->close();

?>