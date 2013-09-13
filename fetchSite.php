<?php

include_once('functions.inc.php');

header('Content-Type: application/json');

if (!isset($_GET['statusbar'])) {
    echo json_encode(array('status' => 'statusbar not set'));
    exit;
}

if ($_GET['statusbar'] == '') {
    echo json_encode(array('status' => 'statusbar empty'));
    exit;
}

$statusbar = $_GET['statusbar'];
$site = getWebPage($statusbar);

if ($site['errno'] != 0) {
    echo json_encode(array('status' => 'curl error'));
    exit;
}

$keyword = getKeyword($site);
echo json_encode(array('status' => 'success', 'keyword' => $keyword));
