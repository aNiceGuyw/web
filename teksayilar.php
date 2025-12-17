<!DOCTYPE html>
<head>
    <title>Tek Sayılar</title>
    <style>
                body {
            background-color: rgb(21 30 59);
            color: white;
            font-size: 25px;
        }
    </style>
</head>
<body>

<h1>Ardışık tek sayılar </h1>

<?php
for ($i = 1; $i <= 100; $i++) {
    if ($i % 2 == 1) {
        echo $i . " ";
    }
}
?>

</body>
</html>
