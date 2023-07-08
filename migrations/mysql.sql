CREATE TABLE helmet_stock (
  id int NOT NULL AUTO_INCREMENT,
  merk_helm varchar(255) DEFAULT NULL,
  size varchar(5) DEFAULT NULL,
  warna varchar(255) DEFAULT NULL,
  stock int DEFAULT NULL,
  harga int DEFAULT NULL,
  tgl_masuk date DEFAULT NULL,
  PRIMARY KEY (id)
) 