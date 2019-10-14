<?php

include 'data.php';
require_once 'Celebrity.php';

$celebrities = [];

foreach($data as $value)
{
    $obj = new Celebrity;
    $obj->fromArray($value);
    $celebrities[] = $obj;
}

header('Content-Type: application/json');

echo json_encode($celebrities);