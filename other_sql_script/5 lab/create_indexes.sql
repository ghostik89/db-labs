---1
select name from mydb.user where name like '%a';
ALTER TABLE user ADD INDEX NAME (NAME);

---2
alter table mydb.user add index (EMAIL);

---3
select published_houses_ID from products;
alter table products add index published_houses_IDx (published_houses_ID);
