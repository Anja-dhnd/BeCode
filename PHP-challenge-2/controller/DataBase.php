<?php
// same doc than connecte.php but recreating to avoid git conflict

namespace App;

use PDO;

class DataBase
{
    public function dbConnexion() {

        try
        {
            $bdd = new PDO('mysql:host=localhost;dbname=accouting','root','user');
        }
        catch(Exception $e)
        {
         die('Erreur : '.$e->getMessage());
         }

    }
}