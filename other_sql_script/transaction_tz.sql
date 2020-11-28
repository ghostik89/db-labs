---1. create new product
INSERT INTO `mydb`.`products` (`NAME`, `COUNT`, `DESCRIPTION`, `game_series_ID`, `published_houses_ID`, `article_ID`, `auditory_of_games_ID`, `category_ID`) VALUES ('New product', '89', 'Some dicr', '3', '3', '3', '3', '3');

---2. update product
UPDATE `mydb`.`products` 
SET `NAME` = 'Бустре Войны искры1' 
WHERE (`ID` = '1') and (`game_series_ID` = '2') and (`published_houses_ID` = '3') and (`article_ID` = '1') and (`auditory_of_games_ID` = '5') and (`category_ID` = '3');

---3. delete product
DELETE FROM `mydb`.`products` 
WHERE (`ID` = '11') and (`game_series_ID` = '3') and (`published_houses_ID` = '3') and (`article_ID` = '3') and (`auditory_of_games_ID` = '3') and (`category_ID` = '3');

---4. Register userss
INSERT INTO `mydb`.`user` (`NAME`, `EMAIL`, `PASSWORD`) VALUES ('Some people', 'some@some.com', 'adsd');

---5. update usesr
UPDATE `mydb`.`user` SET `PASSWORD` = 'adsd1' WHERE (`ID` = '11');

---6. create article
INSERT INTO `mydb`.`article` (`ARTICLE_TEXT`, `user_ID`) VALUES ('New article', '1');

---7. update article
UPDATE `mydb`.`article` SET `ARTICLE_TEXT` = 'New article. for update' WHERE (`ID` = '11') and (`user_ID` = '1');

---8. delete article
DELETE FROM `mydb`.`article` WHERE (`ID` = '11') and (`user_ID` = '1');

---9. create comment
INSERT INTO `mydb`.`comments` (`TEXT`, `user_owns_product_ ID`, `user_ID`) VALUES ('Совсем', '1', '1');

---10. update comment
UPDATE `mydb`.`comments` SET `TEXT` = 'Нормальный продукт' WHERE (`ID` = '1');

---11. delete comment
DELETE FROM `mydb`.`comments` WHERE (`ID` = '1');

---12. add product to favorite list
INSERT INTO `mydb`.`favorite_products` (`products_ID`, `user_ID`) VALUES ('1', '2');

---13. add product to basket
INSERT INTO `mydb`.`users_order_products` (`COUNT`, `user_ID`, `user_owns_product_ ID`, `product_state_ID`) VALUES ('45', '1', '1', '6');

---14. Buy product
UPDATE `mydb`.`users_order_products` SET `product_state_ID` = '1' WHERE (`ID` = '11') and (`user_ID` = '1') and (`user_owns_product_ ID` = '1') and (`product_state_ID` = '6');

