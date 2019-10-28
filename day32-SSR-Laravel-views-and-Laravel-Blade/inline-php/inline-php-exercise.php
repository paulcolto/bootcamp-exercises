<?php
// prepare any data that we will need for rendering
$title = 'Inline PHP practice';

$vehicles = [
    'Bicycle' => 50,
    'Car' => 150,
    'Train' => 110
];

$messages = [
    'Preparing to do some stuff...',
    'Doing amazing stuff...',
    'Stuff is done.'
];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>
        <?= $title; ?>
    </title>
</head>
<body>
    <h1><?= $title; ?></h1>
    
    <table>
    <tr>
        <th>Means of transport</th>
        <th>Max. speed (km/h)</th>
    <tr>
    <?php foreach($vehicles as $key => $value) : ?>

    <tr>
        <td><?= $key; ?></td>
        <td><?= $value; ?></td>
        
    </tr>
    <?php endforeach; ?>

    </table>


    
</body>
</html>