<?php

function invoice()
{
    include("../model/connecte.php");

    $requestSQL =
        "SELECT Number_of_the_invoice,Date_of_the_invoice 
      FROM invoices ORDER 
      BY Date_of_the_invoice DESC LIMIT 5";

    $requete = $bdd->prepare($requestSQL);

    $requete->execute();
    $invoicie = $requete->fetchAll();

    $requete->closeCursor();

    return $invoicie;
}





