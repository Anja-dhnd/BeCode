<?php

Class Database
{
    function get_connection() {
		try {
            // db connection
            $dsn = "mysql:host=localhost;dbname=accouting;charset=utf8";
            $username = "MEma";
            $password = "L)w6B9E_tI_y@LFg";
            $bdd = new PDO($dsn, $username, $password);
            // Configuration driver : exceptions
            $bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); // Obligatory for further
        }
		catch(Exception $e) {
			die("Error : " . $e->getMessage());
		}
		finally {
            return ($bdd);
		}
	}
	
}
