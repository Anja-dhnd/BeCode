-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mer. 01 sep. 2021 à 07:47
-- Version du serveur : 5.7.31
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `accouting`
--

-- --------------------------------------------------------

--
-- Structure de la table `companiess`
--

DROP TABLE IF EXISTS `companiess`;
CREATE TABLE IF NOT EXISTS `companiess` (
  `idcompanies` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(20) NOT NULL,
  `VAT_number` int(11) NOT NULL,
  `country` varchar(20) NOT NULL,
  `company_idcompany` int(11) NOT NULL,
  `invoices_idinvoices` int(11) NOT NULL,
  PRIMARY KEY (`idcompanies`),
  KEY `company_idcompany` (`company_idcompany`),
  KEY `invoices_idinvoices` (`invoices_idinvoices`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `companiess`
--

INSERT INTO `companiess` (`idcompanies`, `Name`, `VAT_number`, `country`, `company_idcompany`, `invoices_idinvoices`) VALUES
(1, 'Hegmann-Kuphal', 54407404, 'Mexico', 100, 10),
(2, 'King-Tromp', 25347050, 'Namibia', 101, 17),
(3, 'Spencer-Wehner', 73087748, 'Lesotho', 102, 23),
(4, 'Pagac-Kub', 19102979, 'Peru', 103, 24),
(5, 'Collins-Eichmann', 62389402, 'Niue', 104, 21),
(6, 'Streich-Jerde', 64502014, 'Barbados', 105, 20),
(7, 'Cruickshank Ltd', 74197620, 'Singapore', 106, 19),
(8, 'Schuppe LLC', 78106970, 'Togo', 107, 18),
(9, 'Macejkovic-Ziemann', 69510137, 'French Guiana', 110, 16),
(10, 'Walker Group', 7128530, 'Fiji', 112, 15),
(11, 'Reilly-Dietrich', 85218628, 'Seychelles', 111, 22),
(12, 'Ratke-DuBuque', 20729653, 'El Salvador', 120, 2),
(13, 'Kihn Inc', 83052330, 'Kenya', 122, 6),
(14, 'Hamill Ltd', 69218385, 'Colombia', 115, 1),
(15, 'Kulas Group', 76149436, 'Malawi', 0, 0),
(16, 'Renner-Kunze', 11055570, 'Trinidad and Tobago', 0, 0),
(17, 'Lueilwitz LLC', 28112488, 'Reunion', 0, 0),
(18, 'Frami Inc', 18289923, 'Burundi', 0, 0),
(19, 'Zboncak Group', 32372052, 'New Caledonia', 0, 0),
(20, 'Hintz-Carter', 22682628, 'Croatia', 0, 0),
(21, 'McClure-Upton', 8398406, 'Cameroon', 0, 0),
(22, 'Feest LLC', 80227137, 'Sierra Leone', 0, 0),
(23, 'Volkman Group', 78720022, 'Djibouti', 0, 0),
(24, 'Kirlin-Satterfield', 45824517, 'United Kingdom', 0, 0),
(25, 'Shanahan-Rippin', 128339, 'Cyprus', 0, 0),
(26, 'Hane-Christiansen', 19205212, 'Comoros', 0, 0),
(27, 'Doyle Group', 11412472, 'Switzerland', 0, 0),
(28, 'Luettgen-Considine', 70803587, 'Nauru', 0, 0),
(29, 'Grant-Legros', 98417919, 'Albania', 0, 0),
(30, 'Schumm-Corkery', 65745182, 'Fiji', 0, 0),
(31, 'Cummerata and Sons', 51837051, 'New Zealand', 0, 0),
(32, 'Gaylord Inc', 92499805, 'Equatorial Guinea', 0, 0),
(33, 'Turner Ltd', 43788996, 'India', 0, 0),
(34, 'Shields Inc', 74926459, 'Turkey', 0, 0),
(35, 'Carter and Sons', 94631388, 'Mayotte', 0, 0),
(36, 'Jacobson-Schulist', 5416677, 'Saint Martin', 0, 0),
(37, 'Cummerata-Bauch', 52840722, 'Hong Kong', 0, 0),
(38, 'Ritchie Inc', 57065878, 'Trinidad and Tobago', 0, 0),
(39, 'Glover PLC', 6906795, 'Haiti', 0, 0),
(40, 'Fritsch Inc', 88486604, 'Hungary', 0, 0),
(41, 'Marquardt Inc', 86015806, 'Niger', 0, 0),
(42, 'Moen Group', 19623054, 'Seychelles', 0, 0),
(43, 'Ullrich Ltd', 46166760, 'Portugal', 0, 0),
(44, 'Erdman-Conn', 27742143, 'Kyrgyz Republic', 0, 0),
(45, 'Cartwright-Bahringer', 14388880, 'Fiji', 0, 0),
(46, 'Barton-Hermiston', 30102194, 'Reunion', 0, 0),
(47, 'Fisher PLC', 9719170, 'Trinidad and Tobago', 0, 0),
(48, 'Larson-Wisoky', 65253786, 'Cape Verde', 0, 0),
(49, 'Johnson PLC', 32723823, 'El Salvador', 0, 0),
(50, 'Hackett and Sons', 95989884, 'Italy', 0, 0),
(51, 'Reilly-Murray', 69328961, 'Reunion', 0, 0),
(52, 'Moen-Kirlin', 45571510, 'Barbados', 0, 0),
(53, 'Farrell-Maggio', 12182428, 'Swaziland', 0, 0),
(54, 'Kiehn-Hermiston', 60134202, 'Saint Lucia', 0, 0),
(55, 'Balistreri Inc', 26889276, 'Botswana', 0, 0),
(56, 'Rowe LLC', 69107771, 'Switzerland', 0, 0),
(57, 'Rosenbaum Inc', 12095582, 'Eritrea', 0, 0),
(58, 'Carroll Group', 83601194, 'Aruba', 0, 0),
(59, 'Mosciski LLC', 77188212, 'Saudi Arabia', 0, 0);

-- --------------------------------------------------------

--
-- Structure de la table `company`
--

DROP TABLE IF EXISTS `company`;
CREATE TABLE IF NOT EXISTS `company` (
  `idcompany` int(11) NOT NULL AUTO_INCREMENT,
  `client` varchar(45) DEFAULT NULL,
  `provider` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idcompany`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `company`
--

INSERT INTO `company` (`idcompany`, `client`, `provider`) VALUES
(1, 'Bernhard', 'Abbott Inc'),
(2, 'Amani', 'Haag Ltd'),
(3, 'Veda', 'McDermott, Huel and Bradtke'),
(4, 'Kirk', 'Johnston-Rosenbaum'),
(5, 'Stephan', 'Hudson, Crist and Osinski'),
(6, 'Irma', 'Rempel PLC'),
(7, 'Kayden', 'Lehner-Wolff'),
(8, 'Cydney', 'Kautzer LLC'),
(9, 'Rudy', 'Tromp Inc'),
(10, 'Minnie', 'Botsford, Wuckert and Kautzer'),
(11, 'Brody', 'Ritchie, Bednar and Langworth'),
(12, 'Cleta', 'Hessel, Von and Gorczany'),
(13, 'Dallin', 'Von, Wisoky and Pfeffer'),
(14, 'Darion', 'Abernathy-Corkery'),
(15, 'Jacques', 'Steuber, Hegmann and Lindgren'),
(16, 'Cole', 'Parker, Dickens and Abshire'),
(17, 'Blaise', 'Cartwright, Cormier and Thompson'),
(18, 'Marcella', 'Robel-Zboncak'),
(19, 'Olen', 'Mertz, Gislason and Paucek'),
(20, 'Toby', 'Torp-Lang'),
(21, 'Christelle', 'Shanahan-Daniel'),
(22, 'Melany', 'Eichmann-Borer'),
(23, 'Arvel', 'Hessel Ltd'),
(24, 'Wiley', 'Abernathy-Mueller'),
(25, 'Stella', 'Trantow-Nienow'),
(26, 'Pasquale', 'Kohler, Kuvalis and Bahringer'),
(27, 'Hoyt', 'Jacobson and Sons'),
(28, 'Alex', 'Lakin LLC'),
(29, 'Precious', 'Considine, Cronin and Parker'),
(30, 'Graciela', 'Farrell, Gutmann and Anderson'),
(31, 'Veda', 'Keeling, Quitzon and Heathcote'),
(32, 'Deborah', 'Bradtke-McCullough'),
(33, 'Rodrigo', 'Fay Inc'),
(34, 'Brigitte', 'Carroll Ltd'),
(35, 'Eudora', 'Orn, Bernhard and Beer'),
(36, 'Gudrun', 'Schaden, Klocko and Hilpert'),
(37, 'Margie', 'Bauch-Cormier'),
(38, 'Shemar', 'Johnston-Kuhic'),
(39, 'Lance', 'Stamm-McGlynn'),
(40, 'Jean', 'Dare, Koepp and Moore'),
(41, 'Zola', 'Bailey-Hudson'),
(42, 'Richie', 'Ferry, Turcotte and Padberg'),
(43, 'Madge', 'Collins and Sons'),
(44, 'Dejah', 'Will-Ratke'),
(45, 'Winnifred', 'Spencer, Herman and Hyatt'),
(46, 'Macey', 'Powlowski Inc'),
(47, 'Alia', 'Purdy, Hills and Larkin'),
(48, 'Fernando', 'Christiansen Inc'),
(49, 'Mark', 'Waelchi-Jones'),
(50, 'Eric', 'Frami, Rice and Hegmann'),
(51, 'Anastasia', 'Sauer-McLaughlin'),
(52, 'Monroe', 'Collier-Wilderman'),
(53, 'Evalyn', 'McDermott, Keebler and Fadel'),
(54, 'Flavie', 'Nitzsche and Sons');

-- --------------------------------------------------------

--
-- Structure de la table `invoices`
--

DROP TABLE IF EXISTS `invoices`;
CREATE TABLE IF NOT EXISTS `invoices` (
  `idinvoices` int(11) NOT NULL AUTO_INCREMENT,
  `Number_of_the_invoice` int(11) DEFAULT NULL,
  `Date_of_the_invoice` datetime DEFAULT NULL,
  PRIMARY KEY (`idinvoices`)
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `invoices`
--

INSERT INTO `invoices` (`idinvoices`, `Number_of_the_invoice`, `Date_of_the_invoice`) VALUES
(1, 7214, '1987-10-24 00:00:00'),
(2, 2496, '1973-11-05 00:00:00'),
(3, 2464, '2006-04-11 00:00:00'),
(4, 5234, '2003-08-29 00:00:00'),
(5, 3312, '1984-06-15 00:00:00'),
(6, 2258, '1990-02-14 00:00:00'),
(7, 1340, '1980-10-28 00:00:00'),
(8, 3374, '2004-11-18 00:00:00'),
(9, 5585, '1995-05-08 00:00:00'),
(10, 7219, '2004-08-03 00:00:00'),
(11, 2378, '1996-12-24 00:00:00'),
(12, 8099, '2001-04-24 00:00:00'),
(13, 5078, '1996-04-17 00:00:00'),
(14, 7736, '1981-05-25 00:00:00'),
(15, 7402, '2006-09-18 00:00:00'),
(16, 3571, '2006-07-19 00:00:00'),
(17, 3012, '2011-03-03 00:00:00'),
(18, 2093, '1996-12-03 00:00:00'),
(19, 8511, '2002-08-03 00:00:00'),
(20, 5632, '2020-11-15 00:00:00'),
(21, 8468, '1982-08-03 00:00:00'),
(22, 8708, '1977-09-24 00:00:00'),
(23, 8471, '1997-04-28 00:00:00'),
(24, 3195, '1999-07-07 00:00:00'),
(25, 8167, '1982-02-12 00:00:00'),
(26, 1007, '1997-08-07 00:00:00'),
(27, 3180, '2018-09-14 00:00:00'),
(28, 6434, '1976-03-22 00:00:00'),
(29, 3115, '2021-01-14 00:00:00'),
(30, 2745, '2012-10-05 00:00:00'),
(31, 4194, '1970-08-15 00:00:00'),
(32, 5533, '1998-12-23 00:00:00'),
(33, 6717, '2013-12-17 00:00:00'),
(34, 1080, '2020-01-21 00:00:00'),
(35, 5438, '1997-04-26 00:00:00'),
(36, 8546, '1999-02-09 00:00:00'),
(37, 2712, '2017-06-12 00:00:00'),
(38, 4083, '1998-03-21 00:00:00'),
(39, 2177, '2002-08-20 00:00:00'),
(40, 7787, '2021-05-14 00:00:00'),
(41, 7772, '2006-04-18 00:00:00'),
(42, 2392, '1971-10-24 00:00:00'),
(43, 4753, '1978-05-17 00:00:00'),
(44, 8964, '1975-10-22 00:00:00'),
(45, 4983, '2013-12-06 00:00:00'),
(46, 5995, '1973-10-31 00:00:00'),
(47, 2466, '2001-11-15 00:00:00'),
(48, 6722, '1980-01-01 00:00:00'),
(49, 1762, '1979-12-06 00:00:00'),
(50, 4353, '1988-08-29 00:00:00'),
(51, 6933, '1994-04-07 00:00:00'),
(52, 4398, '1983-01-31 00:00:00'),
(53, 8858, '2003-02-15 00:00:00'),
(54, 1121, '2015-01-18 00:00:00'),
(55, 3754, '1989-06-26 00:00:00'),
(56, 3877, '1995-02-25 00:00:00'),
(57, 4589, '1971-12-04 00:00:00'),
(58, 3451, '1996-02-05 00:00:00'),
(59, 6304, '2002-04-12 00:00:00'),
(60, 3979, '1971-07-30 00:00:00'),
(61, 4884, '1982-09-11 00:00:00'),
(62, 4339, '1986-03-16 00:00:00'),
(63, 2799, '1984-06-07 00:00:00'),
(64, 6993, '2016-03-14 00:00:00'),
(65, 2245, '2017-12-24 00:00:00'),
(66, 8238, '1972-07-31 00:00:00'),
(67, 7575, '1989-07-12 00:00:00'),
(68, 8893, '1994-04-11 00:00:00'),
(69, 7204, '2021-06-06 00:00:00'),
(70, 8481, '1998-01-17 00:00:00'),
(71, 3807, '2011-12-07 00:00:00'),
(72, 2078, '2000-02-07 00:00:00'),
(73, 6710, '2002-03-06 00:00:00'),
(74, 8209, '1981-09-26 00:00:00'),
(75, 3871, '2018-10-10 00:00:00'),
(76, 1907, '2020-07-14 00:00:00');

-- --------------------------------------------------------

--
-- Structure de la table `peoples`
--

DROP TABLE IF EXISTS `peoples`;
CREATE TABLE IF NOT EXISTS `peoples` (
  `first_name` varchar(20) DEFAULT NULL,
  `last_name` varchar(20) DEFAULT NULL,
  `email` varchar(20) DEFAULT NULL,
  `idpeoples` int(11) NOT NULL AUTO_INCREMENT,
  `invoices_idinvoices` int(11) NOT NULL,
  `companiess_id` int(11) NOT NULL,
  PRIMARY KEY (`idpeoples`),
  KEY `invoices_idinvoices` (`invoices_idinvoices`),
  KEY `companiess_id` (`companiess_id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `peoples`
--

INSERT INTO `peoples` (`first_name`, `last_name`, `email`, `idpeoples`, `invoices_idinvoices`, `companiess_id`) VALUES
('Lenore', 'Price', 'treichel@hotmail.com', 1, 50, 30),
('Cecile', 'Corwin', 'florida21@gmail.com', 2, 51, 31),
('Ladarius', 'Jacobson', 'rschoen@conroy.biz', 3, 52, 32),
('Hailee', 'Donnelly', 'bpaucek@rogahn.com', 4, 53, 33),
('Hettie', 'Jacobson', 'ulises89@gmail.com', 5, 54, 34),
('Marisa', 'Gutkowski', 'brendon39@yahoo.com', 6, 55, 35),
('Mathew', 'Hegmann', 'fisher.andy@west.com', 7, 56, 36),
('Marge', 'Rempel', 'tconroy@kutch.com', 8, 57, 37),
('Brando', 'Casper', 'bjacobs@gmail.com', 9, 58, 38),
('Elisha', 'Trantow', 'maud92@hotmail.com', 10, 59, 39),
('Pamela', 'Gorczany', 'althea76@little.biz', 11, 60, 40),
('Mossie', 'Torp', 'deshawn53@gmail.com', 12, 61, 41),
('Lavada', 'Krajcik', 'bmoen@gutkowski.info', 13, 64, 44),
('Jerrold', 'McCullough', 'qterry@kutch.com', 14, 62, 42),
('Justice', 'Schneider', 'rtowne@hotmail.com', 15, 63, 43),
('Hortense', 'Purdy', 'letha88@hotmail.com', 16, 0, 0),
('Herminia', 'Kling', 'harold54@gmail.com', 17, 0, 0),
('Kathryn', 'Kerluke', 'norene92@labadie.org', 18, 0, 0),
('Garth', 'Haley', 'hcorwin@yahoo.com', 19, 0, 0),
('Bridgette', 'Rutherford', 'skuhic@gmail.com', 20, 0, 0),
('Matilde', 'Ryan', 'jkuhlman@yahoo.com', 21, 0, 0),
('Marlene', 'Schmidt', 'okling@stehr.biz', 22, 0, 0),
('Grace', 'Carroll', 'xschumm@gmail.com', 23, 0, 0),
('Joaquin', 'McCullough', 'bernhard72@rohan.org', 24, 0, 0),
('Harold', 'Mitchell', 'ybarton@weimann.com', 25, 0, 0),
('Carlo', 'Halvorson', 'smertz@fisher.org', 26, 0, 0),
('Xzavier', 'Mraz', 'ahayes@lubowitz.com', 27, 0, 0),
('Hobart', 'Champlin', 'ethyl21@hotmail.com', 28, 0, 0),
('Zachery', 'Schuster', 'ibecker@hessel.info', 29, 0, 0),
('Kamryn', 'Ledner', 'cwisozk@lakin.biz', 30, 0, 0),
('Lela', 'Toy', 'erna42@yahoo.com', 31, 0, 0),
('Verner', 'Morissette', 'jeromy80@hotmail.com', 32, 0, 0),
('Stefanie', 'Kemmer', 'ewolf@gmail.com', 33, 0, 0),
('Ole', 'Cruickshank', 'ahackett@kutch.org', 34, 0, 0),
('Abdiel', 'Gerhold', 'holly49@parker.com', 35, 0, 0),
('Jaylon', 'Cole', 'shawna06@hotmail.com', 36, 0, 0),
('Violet', 'Carroll', 'gabshire@hotmail.com', 37, 0, 0),
('Brady', 'Rolfson', 'angeline41@bogan.com', 38, 0, 0),
('Birdie', 'Schmidt', 'enid97@block.biz', 39, 0, 0),
('Ervin', 'Hyatt', 'wschroeder@yahoo.com', 40, 0, 0),
('Allene', 'Marquardt', 'keven02@moore.biz', 41, 0, 0),
('Carleton', 'Huel', 'rmayert@price.biz', 42, 0, 0),
('Sally', 'Smith', 'qhermiston@yahoo.com', 43, 0, 0),
('Amy', 'Koelpin', 'yprosacco@koepp.org', 44, 0, 0),
('Juvenal', 'Hintz', 'emarvin@hartmann.com', 45, 0, 0),
('Alize', 'Harber', 'qdietrich@gmail.com', 46, 0, 0),
('Wilhelmine', 'Tillman', 'olin50@yahoo.com', 47, 0, 0),
('Reta', 'Stiedemann', 'rgoldner@yahoo.com', 48, 0, 0),
('Darion', 'Rippin', 'ona26@mueller.org', 49, 0, 0),
('Aida', 'Schulist', 'savanna56@yahoo.com', 50, 0, 0),
('Donny', 'Senger', 'lorenzo37@yahoo.com', 51, 0, 0),
('Patience', 'Stark', 'lola17@hotmail.com', 52, 0, 0);

-- --------------------------------------------------------

--
-- Structure de la table `session`
--

DROP TABLE IF EXISTS `session`;
CREATE TABLE IF NOT EXISTS `session` (
  `idsession` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `password` varchar(200) NOT NULL,
  `email` varchar(100) NOT NULL,
  PRIMARY KEY (`idsession`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `session`
--

INSERT INTO `session` (`idsession`, `username`, `password`, `email`) VALUES
(1, 'evrard', 'L)w6B9E_tI_y@LFg', 'sibo10@gmail.com'),
(2, 'anais', 'L)w6B9E_tI_y@LFg1', 'ania@gmail.com'),
(3, 'maxim', 'L)w6B9E_tI_y@LFg2', 'max@gmail.com'),
(4, 'mathieu', 'L)w6B9E_tI_y@LFg3', 'math@gmail.com');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
