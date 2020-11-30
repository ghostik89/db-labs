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

---36
UPDATE `mydb`.`game_series` SET `DESCRIPTION` = 'Какая-то классная серия игр' WHERE (`ID` = '11');

---37
DELETE FROM `mydb`.`published_houses` WHERE (`ID` = '11');

---38
DELETE FROM `mydb`.`game_series` WHERE (`ID` = '11');

---39 from test table
SELECT  lastname FROM employees ORDER BY lastname;

---40
SELECT NAME FROM mydb.user where NAME like 'C%';

---41
SELECT * FROM mydb.article where ARTICLE_TEXT like '%orem%';

---42
SELECT * FROM mydb.comments where comments.TEXT like '%n';

---43
SELECT * FROM mydb.comments where comments.TEXT like 'n%';

---44
SELECT * FROM mydb.category where category.NAME like 'Д%';

---46
SELECT min(COUNT) FROM mydb.user_owns_product;

---47
SELECT max(COUNT) FROM mydb.user_owns_product;

---48
SELECT max(COUNT) as max_count, min(COUNT) as min_count FROM mydb.user_owns_product;

---49
SELECT count(COUNT) as count_all FROM mydb.user_owns_product;

---51
SELECT sum(COUNT) as count_all FROM mydb.user_owns_product;

---52
SELECT avg(COUNT) as count_all FROM mydb.user_owns_product;

---53
SELECT avg(COUNT) as count_all FROM mydb.users_order_products;

---54
SELECT count(COUNT) as count_all FROM mydb.users_order_products;

---55
SELECT product_state_ID, COUNT(*) FROM mydb.users_order_products group by product_state_ID;

---56
SELECT user_ID, COUNT(*) FROM mydb.users_order_products group by user_ID;

---57
SELECT product_state_ID, COUNT(*) as count_all
FROM mydb.users_order_products 
group by product_state_ID 
having count_all < 10;

---58
SELECT roles_ID, COUNT(*) as count_all
FROM mydb.roles_has_user 
group by roles_ID 
having count_all < 10;

---59
select game_series_ID, count(*) as count_all
from mydb.products
group by game_series_ID
having count_all < 10;

---60
select published_houses_ID, count(*) as count_all
from mydb.products
group by published_houses_ID
having count_all < 10;

---61
select published_houses_ID, count(*) as count_all
from mydb.products
group by published_houses_ID;

---62
SELECT NAME, DESCRIPTION FROM mydb.products order by DESCRIPTION;

---63
SELECT NAME, DESCRIPTION FROM mydb.products order by DESCRIPTION desc;

---64
SELECT NAME, DESCRIPTION FROM mydb.products order by DESCRIPTION asc;

---65
SELECT NAME, EMAIL FROM mydb.user order by NAME;

---66
SELECT NAME, EMAIL FROM mydb.user order by NAME desc;

---67
SELECT * FROM mydb.user_owns_product where products_ID in (select ID from mydb.users_order_products);

---68
SELECT * FROM mydb.product_state where PRODUCT_STATE in (select product_state_ID from mydb.users_order_products);

---67
insert into mydb.test_table select ID, NAME from mydb.user;

---68
select ID from mydb.user_owns_product
union
select ID from mydb.users_order_products;

---69
select ID from mydb.user_owns_product
union all
select ID from mydb.users_order_products;

---70
select * from mydb.user_owns_product
join mydb.article on article.ARTICLE_TEXT;

---71
select * from mydb.user_owns_product
join mydb.article on article.ID = user_owns_product.ID;

---72
select * from mydb.user_owns_product
left join mydb.article on article.ID = user_owns_product.ID;

---73
select * from mydb.products
left join mydb.article on article.ID = products.ID;

---74
select * from mydb.products
left join mydb.article on article.ID = products.article_ID
right join mydb.category on category.ID = products.ID;

---75
select * from mydb.products
left join mydb.article on article.ID = products.article_ID
right join mydb.category on category.ID = products.category_ID;

---76
select article_ID, category_ID from mydb.products
left join mydb.article on article.ID = products.article_ID
right join mydb.category on category.ID = products.category_ID;

---77
select * from mydb.category
left join mydb.article on article.ID = category.ID;

---78