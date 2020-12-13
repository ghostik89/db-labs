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
DELIMITER $$
CREATE FUNCTION countAllOwnsProductsByUserId(
	_id int
) 
RETURNS varchar(40)
DETERMINISTIC
BEGIN
    DECLARE counter int;
    declare message varchar(40) default 'This user haven\t products';
    
	SELECT count(*) into counter FROM mydb.user_owns_product where user_ID = _id;
    if counter > 0 then
		set message = concat('This user has ', counter,' products');
    end if;
	RETURN (message);
END$$
DELIMITER ;


---3. calc bill for users basket
DELIMITER $$
CREATE FUNCTION createBillForUserById(
	_id int,
    _state int
) 
RETURNS varchar(60)
DETERMINISTIC
BEGIN
    DECLARE counterState int;
    declare message varchar(60) default 'This user haven\t products in that product state';
    
	SELECT sum(user_owns_product.price*users_order_products.user_owns_product_ID) into counterState
	FROM mydb.users_order_products
	join mydb.user_owns_product on users_order_products.user_owns_product_ID = users_order_products.ID
	where users_order_products.user_ID = 1 and users_order_products.product_state_ID = 6;
    
    if counterState > 0 then
		case
			when _state = 1
				then set message = concat('Total price for products which lefts store is ', counterState);
			when _state = 2
				then set message = concat('Total price for products in warehouse is ', counterState);
			when _state = 3
				then set message = concat('Total price for products in way is ', counterState);
			when _state = 4
				then set message = concat('Total price for products wich delivered is ', counterState);
			when _state = 6
				then set message = concat('Total price for products in busket is ', counterState);
        end case;
    end if;
	
    RETURN (message);
END$$
DELIMITER ;