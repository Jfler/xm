<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "zouxiu";

    $conn = new mysqli($servername,$username,$password,$dbname);

    if($conn->connect_error){
        die($conn->connect_error);
    }

    $conn->set_charset('utf8');

    $sql = 'select * from msg';
    $result = $conn->query($sql);
    $arr = $result->fetch_all(MYSQLI_ASSOC);
    echo json_encode($arr,JSON_UNESCAPED_UNICODE);
    $result->close();
    $conn->close();
?>