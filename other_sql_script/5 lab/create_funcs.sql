--- procedures

---1. show all products
DELIMITER $$
    create procedure `ShowAllProducts`()
    begin
        SELECT *
        FROM mydb.products;
    end $$
DELIMITER ;

--- 2. Show product by id
 DELIMITER $$
    create procedure showPorductById(in _id int)
    begin
        SELECT * FROM mydb.products where (products.ID = _id);
    end $$
DELIMITER ;

--- 3. show all products on way by user id
 DELIMITER $$
    create procedure showAllFavoriteProductsByUserId(in _id int)
    begin
		SELECT * FROM mydb.user_owns_product 
		left join users_order_products on
		user_owns_product.user_ID = users_order_products.user_owns_product_ID
		where (user_owns_product.user_ID = _id);    
	end $$
DELIMITER ;

---funcs
---1. Create user
DELIMITER $$
CREATE FUNCTION registerUser(
	_name varchar(40),
    _email varchar(40),
    _password varchar(40)
) 
RETURNS boolean
DETERMINISTIC
BEGIN
    DECLARE isCreate boolean;

    if _name not like '' and _email not like '' and _password not like ''
		then 
        INSERT INTO `mydb`.`user` (`NAME`, `EMAIL`, `PASSWORD`) VALUES (_name, _email, _password);
        set isCreate = true;
	else
			set isCreate = false;
	end if;

	RETURN (isCreate);
END$$
DELIMITER ;

---2. count all user owns product by id
---todo update this!!!
DELIMITER $$
CREATE FUNCTION countAllOwnsProductsByUserId(
	_id int
) 
RETURNS int
DETERMINISTIC
BEGIN
    DECLARE counter int;
	SELECT count(COUNT) into counter FROM mydb.user_owns_product where user_ID = _id;
	RETURN (counter);
END$$
DELIMITER ;


---3. calc bill for users basket