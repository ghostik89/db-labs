--- 1. user and his comments
create view `user_comments` as 
select user.NAME, comments.TEXT from mydb.user
join mydb.comments on user.ID = comments.user_ID;


--- 2. full info about product
create view `full_info_about_product` as 
SELECT 
	products.NAME, 
    products.DESCRIPTION, 
    game_series.DESCRIPTION as gameSeriesDescr,
	published_houses.NAME as pubName, 
    category.NAME as categoryName
 FROM mydb.products
join mydb.game_series on game_series.ID = products.game_series_ID
join mydb.published_houses on published_houses.ID = products.published_houses_ID
join mydb.category on category.ID = products.category_ID;