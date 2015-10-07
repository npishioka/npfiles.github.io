<?php
header("Access-Control-Allow-Origin: *");
$str = $_POST["sampleVal"];
$str = '我は' . $str . 'である';

echo $str;    // ここで値がJavascript側に返される
?>
