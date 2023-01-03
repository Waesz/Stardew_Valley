-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: progwebserveur
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `astucesvillageois`
--

DROP TABLE IF EXISTS `astucesvillageois`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `astucesvillageois` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `text` varchar(2000) NOT NULL,
  `idVillageois` int NOT NULL,
  `approved` tinyint NOT NULL,
  `idUser` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idVillageois` (`idVillageois`),
  KEY `astucesvillageois_fk_id_idx` (`idUser`),
  CONSTRAINT `astucesvillageois_fk_id` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`),
  CONSTRAINT `astucesvillageois_ibfk_1` FOREIGN KEY (`idVillageois`) REFERENCES `villageois` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `astucesvillageois`
--

LOCK TABLES `astucesvillageois` WRITE;
/*!40000 ALTER TABLE `astucesvillageois` DISABLE KEYS */;
INSERT INTO `astucesvillageois` VALUES (28,'le titre de mon astuce 1','le texte de mon astuce 1',0,0,27),(29,'le titre de mon astuce 2','le texte de mon astuce 2',1,0,27),(30,'le titre de mon astuce 3','le texte de mon astuce 3',0,0,27),(31,'le titre de mon astuce 4','le texte de mon astuce 4',1,0,27),(32,'le titre de mon astuce 5','le texte de mon astuce 5',0,0,27),(33,'le titre de mon astuce 6','le texte de mon astuce 6',1,0,27),(34,'le titre ','yzazdazpijaodijdoijoaij',1,0,28);
/*!40000 ALTER TABLE `astucesvillageois` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(45) NOT NULL,
  `pseudo` varchar(45) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `lastName` varchar(45) DEFAULT NULL,
  `password` varchar(100) NOT NULL,
  `isAdmin` tinyint NOT NULL,
  PRIMARY KEY (`id`,`email`,`pseudo`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (25,'z','pokp','pokpo','pokpok','$2b$10$Ga9igZjcIa8cByX.PQUXOO2Vp9Drj/MknEQ37n.LB9LrMXzXRm88.',0),(26,'zaf','asdzd','yan','yan','$2b$10$orUr7IuGpDFd6FFZ6FXJneBz6KD1KugIyAKhUOd8rSIdxU4UtiCeS',0),(27,'yan','yan','yan','yan','$2b$10$bvrsiJfnUPQHfh69eIcdcuPzFuXtLHhAprFxR/tgmsUou7yFp4m/C',0),(28,'yani@yani.com','yani','yanis','yani','$2b$10$wW3m.k397KyGmY9j6XaG2uc2A8OmDtIUwNV4qjtSMXHXyEID26pLO',0),(29,'iuohoiuhfiouh','aizufhaiouh','yani','azdhuaoi','$2b$10$8q6HMZQ6hkkhlwshbOxIGej9L786X.ND.yNs43RBevajW6WCGxQg6',0),(30,'yanibet','yan','yan','yan','$2b$10$OTmJr8qG8LAEATuyuF2NG.MNLCV4k8AcAFHg7LBSmBDRytR8WK3h6',0),(31,'yanibet2','oijoij','azdoap','pijojo','$2b$10$F6G25GksI0W/O.y5XvwIAuYpRxYkswXB.EVwslK.TysaCAAkrzrY6',0),(32,'yanibet3','yani','yani','yani','$2b$10$co1NfDwH3guN8xKmMG38.uHJgvN0PHeKHIzVNVy61NAS4ALqAZVY.',0);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `villageois`
--

DROP TABLE IF EXISTS `villageois`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `villageois` (
  `id` int NOT NULL,
  `Nom` varchar(45) NOT NULL,
  `Vit` varchar(45) NOT NULL,
  `Adresse` varchar(45) NOT NULL,
  `Mariage` varchar(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `villageois`
--

LOCK TABLES `villageois` WRITE;
/*!40000 ALTER TABLE `villageois` DISABLE KEYS */;
INSERT INTO `villageois` VALUES (0,'Emily','Pélican Ville','2 allée des Saules','Oui'),(1,'Alex','Pélican Ville','1 Chemin de la Rivière','Oui');
/*!40000 ALTER TABLE `villageois` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-03 18:24:27
