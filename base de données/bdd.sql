-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: web_serv
-- ------------------------------------------------------
-- Server version	8.0.27

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
-- Table structure for table `astuces`
--

DROP TABLE IF EXISTS `astuces`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `astuces` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `text` varchar(255) NOT NULL,
  `idVillageois` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `astuces`
--

LOCK TABLES `astuces` WRITE;
/*!40000 ALTER TABLE `astuces` DISABLE KEYS */;
/*!40000 ALTER TABLE `astuces` ENABLE KEYS */;
UNLOCK TABLES;

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
  PRIMARY KEY (`id`),
  KEY `idVillageois` (`idVillageois`),
  CONSTRAINT `astucesvillageois_ibfk_1` FOREIGN KEY (`idVillageois`) REFERENCES `villageois` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `astucesvillageois`
--

LOCK TABLES `astucesvillageois` WRITE;
/*!40000 ALTER TABLE `astucesvillageois` DISABLE KEYS */;
INSERT INTO `astucesvillageois` VALUES (1,'Alex','Alex le villageois',1,1),(2,'Emily','Emily la villageoise',0,1);
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
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'test@test.com','JD','John','Doe','123456789',1),(5,'XXa','WWx','VV','BB','zefijzf',0),(8,'DxxxD','AfA','a','b','ABC',0),(10,'yaniask@','YBx','Yani','Betroune','heyitsme',0),(11,'weldi','regi','regz','azpazj','ihnon',0),(14,'B','TY','name','undefined','ssssssssz',0),(16,'test','test','A1','B1','$2b$05$zCOmUn9V55ONlNc4Y4H9M.DzAay4XU7zyb3nKjnEutFMbnaJz3OJu',0),(17,'test2','test2','A12','B12','$2b$05$Yp0/3jZRtQb.QOvnkcKtGOl6/nrbgqf3.YsOD6zdUwjnyw6iAbvTW',0),(18,'yan@yan','yanyan','yan','yan','$2b$05$b2O0ymG/L9ibukECPEQJzOgVJBqreYFoFFTS5fgg.nTC4.jAGyKIi',0),(19,'yan','yan','yanya','yaniss','$2b$10$L/xYiO8yBqgPOrw.QcYSGu1B25nxQEee.7xCx6PDVynOZxpiIYXlK',0),(20,'oi','oijoij','qoijoa','affaij','$2b$10$i7NrtAbwkFtnuRh4R1R8s.br/wV8nhJUbD2hfW8Tn7t.hNKgXMvte',0),(21,'','',NULL,NULL,'$2b$10$oN2jJ3n/ztzyJa8VYPztqOIjB/iVL1XR.ByN4IMQ/Gt/VEf.YBaFi',0),(22,'','',NULL,NULL,'$2b$10$CBDy7V.J7GhEwKKbf4evqec6DKuJc.LbcBYFfiBwauJrNrafJBNuW',0),(23,'','',NULL,NULL,'$2b$10$.Z9f2GqKUNeuUsNfexHV2eMtkK9EH9HY0ASqFJMn28Y0j288hB8vG',0),(24,'','',NULL,NULL,'$2b$10$aYOs17S71rzfvUmZY5zy5eu.h0ZnnBvdDNjRakuN9ZP/NUZMigV9O',0),(25,'','',NULL,NULL,'$2b$10$4TnAlmudQemGEzjCPgRKX.2.E59/yznxROhaCA0flVna5h/i8XsdC',0),(26,'wass','wass','wass','wass','$2b$10$GM4FtZp6oic1qyrRoKlI3uxRba2ChcvJZX57vV2zx9/9V72Xfvm0G',0);
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

-- Dump completed on 2022-12-30 22:03:18
