CREATE SCHEMA IF NOT EXISTS `dados191n` DEFAULT CHARACTER SET latin1 ;
USE `dados191n` ;

-- -----------------------------------------------------
-- Table `dados191n`.`caes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dados191n`.`caes` (
  `cao_codigo` INT(11) NOT NULL AUTO_INCREMENT,
  `cao_dtcadastro` TIMESTAMP NULL DEFAULT NULL,
  `cao_nome` VARCHAR(45) NULL DEFAULT NULL,
  `cao_sexo` VARCHAR(45) NULL DEFAULT NULL,
  `cao_raca` VARCHAR(45) NULL DEFAULT NULL,
  `cao_idade` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`cao_codigo`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `dados191n`.`pessoas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dados191n`.`pessoas` (
  `pes_codigo` INT(11) NOT NULL AUTO_INCREMENT,
  `pes_dtcadastro` TIMESTAMP NULL DEFAULT NULL,
  `pes_nome` VARCHAR(45) NULL DEFAULT NULL,
  `pes_email` VARCHAR(25) NULL DEFAULT NULL,
  `pes_endereco` VARCHAR(45) NULL DEFAULT NULL,
  `pes_cidade` VARCHAR(45) NULL DEFAULT NULL,
  `pes_telefone` VARCHAR(40) NULL DEFAULT NULL,
  PRIMARY KEY (`pes_codigo`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `dados191n`.`adocoes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dados191n`.`adocoes` (
  `ado_codigo` INT NOT NULL AUTO_INCREMENT,
  `pes_codigo` INT NULL,
  `cao_codigo` INT NULL,
  PRIMARY KEY (`ado_codigo`),
  CONSTRAINT `cod_pes_codigo`
    FOREIGN KEY (`pes_codigo`)
    REFERENCES `dados191n`.`pessoas` (`pes_codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `cod_cao_codigo`
    FOREIGN KEY (`cao_codigo`)
    REFERENCES `dados191n`.`caes` (`cao_codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

