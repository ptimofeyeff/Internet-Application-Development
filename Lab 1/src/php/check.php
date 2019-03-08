<?php
    session_start();

    $currentTime = date("H:i:s", strtotime("+3 hour"));
    $start = microtime(true);

    $x = (float) $_POST['X'];
    $y = (float) str_replace(",",".", $_POST['Y']);
    $r = (float) $_POST['R_value'];



    function check($x, $y, $r){
        return($x >= 0 && $x <= $r/2 && $y <= 0 && $y >= -$r) ||
            ($x >=0 && $y >= 0 && $x*$x + $y*$y <= $r*$r) ||
            ($x <= 0 && $y <= 0 && $y >= -$r*0.5 -$x);
    }

    if ( (!in_array($x, array(-2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2)))
        || !is_numeric($y) || $y < -3 || $y > 3
        || (!in_array($r, array(1, 1.5, 2, 2.5, 3)))){
        http_response_code(400);
        return;
    }

    $isCheck = check($x,$y,$r);
    $time = microtime(true) - $start;
    $result = array($x, $y, $r, $isCheck, $currentTime, $time);

    if(!isset($_SESSION['history'])){
        $_SESSION['history'] = array();
    }

    array_push($_SESSION['history'], $result);
    include "table.php";

?>