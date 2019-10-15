<?php

connect('localhost', 'games', 'root', 'rootroot');

$query = 'SELECT *
    FROM `games`';

header('Content-type: application/json');

echo json_encode($query);
