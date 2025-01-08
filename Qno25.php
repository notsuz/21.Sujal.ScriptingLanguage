<?php
$info = [
    'name' => 'Ram Bahadur',
    'address' => 'Lalitpur',
    'email' => 'info@ram.com',
    'phone' => '98454545',
    'website' => 'www.ram.com'
];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Info Table</title>
    <style>
        table {
            width: 50%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        table, th, td {
            border: 1px solid black;
        }
        th, td {
            padding: 10px;
            text-align: left;
        }   
    </style>
</head>
<body>
    <?php print_r($info); ?>
    <table>
        <?php foreach ($info as $key => $value): ?>
            <tr>
                <th><?= ucfirst($key); ?></th>
                <td>
                    <?php if ($key == 'email'): ?>
                        <a href="mailto:<?= $value; ?>"><?= $value; ?></a>
                    <?php elseif ($key == 'website'): ?>
                        <a href="https://<?= $value; ?>" target="_blank"><?= $value; ?></a>
                    <?php else: ?>
                        <?= $value; ?>
                    <?php endif; ?>
                </td>
            </tr>
        <?php endforeach; ?>
    </table>
</body>
</html>
