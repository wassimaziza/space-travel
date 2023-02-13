-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`trip`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`trip` (
  `idTrip` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `date` DATE NULL,
  `description` VARCHAR(45) NULL,
  `price` INT NULL,
  `place` VARCHAR(45) NULL,
  `duration` INT NULL,
  `image` LONGTEXT NULL,
  PRIMARY KEY (`idTrip`),
  UNIQUE INDEX `idTrip_UNIQUE` (`idTrip` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`userInfo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`userInfo` (
  `iduserInfo` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `lastName` VARCHAR(45) NULL,
  `adress` VARCHAR(45) NULL,
  `password` VARCHAR(255) NOT NULL,
  `seatNumber` VARCHAR(45) NULL,
  `trip_idTrip` INT NOT NULL,
  PRIMARY KEY (`iduserInfo`, `trip_idTrip`),
  UNIQUE INDEX `iduserInfo_UNIQUE` (`iduserInfo` ASC) VISIBLE,
  INDEX `fk_userInfo_trip_idx` (`trip_idTrip` ASC) VISIBLE,
  CONSTRAINT `fk_userInfo_trip`
    FOREIGN KEY (`trip_idTrip`)
    REFERENCES `mydb`.`trip` (`idTrip`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
