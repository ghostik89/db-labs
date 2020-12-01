---1. create new product
INSERT INTO `mydb`.`products` (`NAME`, `COUNT`, `DESCRIPTION`, `game_series_ID`, `published_houses_ID`, `article_ID`, `auditory_of_games_ID`, `category_ID`) VALUES ('New product', '89', 'Some dicr', '3', '3', '3', '3', '3');

---2. update product
UPDATE `mydb`.`products` 
SET `NAME` = 'Бустре Войны искры1' WHERE (`ID` = '1');

---3. delete product
DELETE FROM `mydb`.`products` WHERE (`ID` = '13');

---4. Register users
INSERT INTO `mydb`.`user` (`NAME`, `EMAIL`, `PASSWORD`) VALUES ('Some people', 'some@some.com', 'adsd');

---5. update usesr
UPDATE `mydb`.`user` SET `PASSWORD` = 'adsd2' WHERE (`ID` = '11');

---6. create article
INSERT INTO `mydb`.`article` (`ARTICLE_TEXT`, `user_ID`) VALUES ('New article', '1');

---7. update article
UPDATE `mydb`.`article` SET `ARTICLE_TEXT` = 'New article. for update' WHERE (`ID` = '12');

---8. delete article
DELETE FROM `mydb`.`article` WHERE (`ID` = '12');

---9. create comment
INSERT INTO `mydb`.`comments` (`TEXT`, `user_owns_product_ ID`, `user_ID`) VALUES ('Совсем', '1', '1');

---10. update comment
UPDATE `mydb`.`comments` SET `TEXT` = 'Нормальный продукт' WHERE (`ID` = '4');

---11. delete comment
DELETE FROM `mydb`.`comments` WHERE (`ID` = '4');

---12. add product to favorite list
INSERT INTO `mydb`.`favorite_products` (`products_ID`, `user_ID`) VALUES ('1', '2');

---13. add product to basket
INSERT INTO `mydb`.`users_order_products` (`COUNT`, `user_ID`, `user_owns_product_ID`, `product_state_ID`) VALUES ('45', '1', '1', '6');

---14. Buy product
UPDATE `mydb`.`users_order_products` SET `product_state_ID` = '1' WHERE (`ID` = '12');
