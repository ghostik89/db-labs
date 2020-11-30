---27
INSERT INTO `mydb`.`product_state` (`ID`, `PRODUCT_STATE`) VALUES ('8', 'some state');

---28
INSERT INTO `mydb`.`auditory_of_games` (`DESCRIPTION`) VALUES ('New auditory');

---29
INSERT INTO `mydb`.`category` (`NAME`, `DESCRIPTION`) VALUES ('Some', 'Some');

---30
INSERT INTO `mydb`.`users_order_products` (`COUNT`, `user_ID`, `user_owns_product_ID`, `product_state_ID`) VALUES ('20', '1', '1', '3');

---31
INSERT INTO `mydb`.`products` (`NAME`, `COUNT`, `DESCRIPTION`, `game_series_ID`, `published_houses_ID`, `article_ID`, `auditory_of_games_ID`, `category_ID`) VALUES ('Game', '67', 'game', '2', '2', '2', '2', '2');

---32
INSERT INTO `mydb`.`user_owns_product` (`COUNT`, `user_ID`, `products_ID`) VALUES ('78', '2', '2');

---33
INSERT INTO `mydb`.`roles_has_user` (`roles_ID`, `user_ID`) VALUES ('2', '1');

---34
INSERT INTO `mydb`.`published_houses` (`NAME`, `INFO`) VALUES ('Some', 'Some');

---35
INSERT INTO `mydb`.`game_series` (`DESCRIPTION`) VALUES ('Some');
