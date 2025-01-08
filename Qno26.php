<?php
// Multidimensional array storing student data
$students = [
    ['sn' => 1, 'name' => 'Rajesh', 'roll' => 25, 'webtech' => 56, 'dbms' => 89, 'economics' => 57, 'dsa' => 64, 'account' => 98],
    ['sn' => 2, 'name' => 'Hari', 'roll' => 5, 'webtech' => 56, 'dbms' => 89, 'economics' => 57, 'dsa' => 64, 'account' => 98],
    ['sn' => 3, 'name' => 'Shyam', 'roll' => 6, 'webtech' => 54, 'dbms' => 79, 'economics' => 57, 'dsa' => 69, 'account' => 98],
    ['sn' => 4, 'name' => 'Rita', 'roll' => 10, 'webtech' => 16, 'dbms' => 89, 'economics' => 56, 'dsa' => 64, 'account' => 98],
    ['sn' => 5, 'name' => 'Gita', 'roll' => 4, 'webtech' => 56, 'dbms' => 99, 'economics' => 57, 'dsa' => 69, 'account' => 98],
    ['sn' => 6, 'name' => 'Sita', 'roll' => 24, 'webtech' => 56, 'dbms' => 99, 'economics' => 57, 'dsa' => 24, 'account' => 98],
    ['sn' => 7, 'name' => 'Sita', 'roll' => 24, 'webtech' => 56, 'dbms' => 99, 'economics' => 57, 'dsa' => 24, 'account' => 98],
    ['sn' => 8, 'name' => 'Sita', 'roll' => 24, 'webtech' => 56, 'dbms' => 99, 'economics' => 57, 'dsa' => 24, 'account' => 98],
];

// Function to calculate total and result
function calculateResult($marks) {
    $total = $marks['webtech'] + $marks['dbms'] + $marks['economics'] + $marks['dsa'] + $marks['account'];
    $result = ($marks['webtech'] >= 40 && $marks['dbms'] >= 40 && $marks['economics'] >= 40 && $marks['dsa'] >= 40 && $marks['account'] >= 40) ? 'pass' : 'fail';
    return ['total' => $total, 'result' => $result];
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mark Ledger</title>
    <style>
        table {
            width: 80%;
            border-collapse: collapse;
            margin: 20px auto;
            text-align: center;
            font-family: Arial, sans-serif;
        }
        table, th, td {
            border: 1px solid black;
        }
        th, td {
            padding: 10px;
        }
        th {
            background-color: #f4f4f4;
        }
        .pass {
            background-color: #90ee90; /* Light green */
        }
        .fail {
            background-color: #ff9999; /* Light red */
        }
    </style>
</head>
<body>
    <h2 style="text-align: center;">Mark Ledger</h2>
    <table>
        <thead>
            <tr>
                <th>SN</th>
                <th>Name</th>
                <th>Roll</th>
                <th>Web Tech II</th>
                <th>DBMS</th>
                <th>Economics</th>
                <th>DSA</th>
                <th>Account</th>
                <th>Total</th>
                <th>Result</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($students as $student): ?>
                <?php
                $resultData = calculateResult($student);
                $total = $resultData['total'];
                $result = $resultData['result'];
                ?>
                <tr class="<?= $result; ?>">
                    <td><?= $student['sn']; ?></td>
                    <td><?= htmlspecialchars($student['name']); ?></td>
                    <td><?= $student['roll']; ?></td>
                    <td><?= $student['webtech']; ?></td>
                    <td><?= $student['dbms']; ?></td>
                    <td><?= $student['economics']; ?></td>
                    <td><?= $student['dsa']; ?></td>
                    <td><?= $student['account']; ?></td>
                    <td><?= $total; ?></td>
                    <td><?= ucfirst($result); ?></td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
</body>
</html>
