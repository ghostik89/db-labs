---19. show all by category id
SELECT * FROM mydb.products where (`category_ID` = 1);

---20. show all by auditory id
SELECT * FROM mydb.products where (`auditory_of_games_ID` = 2);

---21. show all by published house id
SELECT * FROM mydb.products where (`published_houses_ID` = 2);

---22. show all products in favorite list in user
select * from `mydb`.`favorite_products` where (`user_ID` = '1');

---23. show all products in busket by user id
select * from `mydb`.`users_order_products` where (`user_ID` = '1') and (`product_state_ID` = '6');

---24. show all products by owner id
select * from `mydb`.`user_owns_product` where (`user_ID` = '4');

---25. show all products on way by user id
SELECT * FROM mydb.user_owns_product 
left join users_order_products on
user_owns_product.user_ID = users_order_products.user_owns_product_ID
where (user_owns_product.user_ID = 4);

---26. show all articles
SELECT * FROM mydb.article; 

