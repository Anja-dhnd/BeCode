<?php
use App\html;
use App\DataBase;

require_once realpath('vendor/autoload.php');

$html = new html();
echo $html->getHtml();
?>

<head>
    <?php
    echo $html->meta();
    ?>
    <title>COGIP login</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css">
    <link href="assets/css/style.css" rel="stylesheet" type="text/css">
</head>

<body>
<div class="login">
    <h1>Login</h1>
    <form action="controller/auth.php" method="post">
        <label for="username">
            <i class="fas fa-user"></i>
        </label>
        <input type="text" name="username" placeholder="Username" id="username" required>
        <label for="password">
            <i class="fas fa-lock"></i>
        </label>
        <input type="password" name="password" placeholder="Password" id="password" required>
        <input type="submit" value="Login">
    </form>
</div>

<!--<a href="view/dashboard.view.php">Dashboard</a><br>-->
<!--<a href="view/contact.view.php">Contact</a> <br>-->
<!--<a href="view/invoicie.view.php">Invoice</a><br>-->
<!--<a href="view/companies.view.php">Companies</a><br>-->
<!--<a href="view/client.view.php">Page client</a><br>-->
<!--<a href="view/provider.view.php">Page provider</a><br>-->
<!--<a href="view/invoicie1.view.php">Page invoice</a><br>-->
<!--<a href="view/companiespage.view.php">Page Companies</a><br>-->
<!--<a href="view/contact_page.view.php">Page Contact</a><br>-->
<!--<a href="view/company.detail.joint.view.php">Company Detail</a><br>-->
<!--<a href="view/invoice.detail.joint.view.php">Invoice Detail</a><br>-->
<!--<a href="view/contact.detail.joint.view.php">Contact Detail</a><br>-->
</body>

</html>











<?php

$html->footer();

?>