<?php


$request = $_SERVER['REQUEST_URI'];

switch ($request) {
    case '/' :
        require __DIR__ . '../view/dashboard.php';
        break;
    case '/invoice' :
        require __DIR__ . '../view/invoice.view.php';
        break;
    case '/companies' :
        require __DIR__ . '../view/companies.view.php';
        break;
    case '/contact' :
        require __DIR__ . '../view/contact.view.php';
        break;
    case '/dashboard' :
        require __DIR__ . '../view/admin/dashboard.php';
        break;
    case '/addContact' :
        require __DIR__ . '../view/admin/addContact.php';
        break;
    case '/addInvoice' :
        require __DIR__ . '../view/admin/addInvoice.php';
        break;
    case '/addCompany' :
        require __DIR__ . '../view/admin/addCompany.php';
        break;
    default:
        echo 'Error 404';
        break;
}