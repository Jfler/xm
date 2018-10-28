<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "zouxiu";

    $conn = new mysqli($servername,$username,$password,$dbname);
    if($conn->connect_error){
        die($conn->connect_error);
    }
    $conn->set_charset("utf8");

    // 价格排序
    $decide = isset($_GET["decide"])?$_GET["decide"]:"";
    if($decide == "true"){
        $sql = 'select * from msg ORDER BY sale desc';

        $result = $conn->query($sql);
        $arr = $result->fetch_all(MYSQLI_ASSOC);
        echo json_encode($arr,JSON_UNESCAPED_UNICODE);
        $result->close();
        $conn->close();
    }else if($decide == "false"){
        $sql = 'select * from msg ORDER BY sale asc';

        $result = $conn->query($sql);
        $arr = $result->fetch_all(MYSQLI_ASSOC);
        echo json_encode($arr,JSON_UNESCAPED_UNICODE);
        $result->close();
        $conn->close();
    }

    // 折扣排序
     $zhekou = isset($_GET["zhekou"])?$_GET["zhekou"]:"";
    if($zhekou == "true"){
        $sql = 'select * from msg ORDER BY zk desc';

        $result = $conn->query($sql);
        $arr = $result->fetch_all(MYSQLI_ASSOC);
        echo json_encode($arr,JSON_UNESCAPED_UNICODE);
        $result->close();
        $conn->close();
    }else if($zhekou == "false"){
        $sql = 'select * from msg ORDER BY zk asc';

        $result = $conn->query($sql);
        $arr = $result->fetch_all(MYSQLI_ASSOC);
        echo json_encode($arr,JSON_UNESCAPED_UNICODE);
        $result->close();
        $conn->close();
    }

    // 时间排序
    $judeg = isset($_GET["judeg"])?$_GET["judeg"]:"";
    
    if($judeg == "true"){
        $sql = 'select * from msg ORDER BY data desc';
        $result = $conn->query($sql);
        $arr = $result->fetch_all(MYSQLI_ASSOC);
        echo json_encode($arr,JSON_UNESCAPED_UNICODE);
        $result->close();
        $conn->close();
    }else if($judeg == "false"){
        $sql = 'select * from msg ORDER BY data asc';
        $result = $conn->query($sql);
        $arr = $result->fetch_all(MYSQLI_ASSOC);
        echo json_encode($arr,JSON_UNESCAPED_UNICODE);
        $result->close();
        $conn->close();
    }

    
?>