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
    
    $_num = isset($_GET["_num"])?$_GET["_num"]:"";
    $_yzword = isset($_GET["_yzword"])?$_GET["_yzword"]:"";

    $sql = 'insert into denglu (usernumber,yzword) values ("'.$_num.'","'.$_yzword.'")';
    $res = $conn->query($sql);
    if($res){
        echo "true";
    }else{
        echo "false";
    }
    $conn->close();

?>