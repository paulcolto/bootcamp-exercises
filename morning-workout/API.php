<?php

require_once 'DB/DB.php';
require_once 'DB/DB_functions.php';

connect('localhost', 'games', 'root', 'rootroot');

/* // get date from URL ($_GET)
if (isset($_GET['way'])) {

    switch($_GET['way']) {
        case 'asc':
        default:
        $orderway = 'ASC';
        break;
        case 'desc':
        $orderway = 'DESC';
        break;
    }
} else {
    $orderway = 'ASC';
} */

$query = 'SELECT *
    FROM `games`
    WHERE 1
    ';

$results = select($query, [], 'games');

header('Content-type: application/json');

echo json_encode($results);