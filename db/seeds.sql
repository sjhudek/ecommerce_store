-- Inserting data into the categories table
INSERT INTO category (category_name)
VALUES ('Electronics'),
       ('Apparel'),
       ('Groceries'),
       ('Books');

-- Inserting data into the tags table
INSERT INTO tag (tag_name)
VALUES ('Bestseller'),
       ('New Arrival'),
       ('Sale'),
       ('Organic');

-- Inserting data into the products table
-- NOTE: The category_id references the IDs from the categories table. Make sure they align with what's in your database.
-- Similarly, the tags will need to be associated using a many-to-many relationship, often represented by a junction table like product_tags.

INSERT INTO product (product_name, price, stock, category_id)
VALUES ('Laptop', 1000, 10, 1), -- Electronics
       ('T-Shirt', 20, 100, 2), -- Apparel
       ('Apple', 0.5, 200, 3), -- Groceries
       ('Fiction Book', 15, 30, 4); -- Books

-- If you have a product_tags table for the many-to-many relationship between products and tags, you'd insert like this:

-- Assuming the Laptop (product_id: 1) has the tags 'Bestseller' (tag_id: 1) and 'New Arrival' (tag_id: 2)
INSERT INTO product_tag (product_id, tag_id)
VALUES (1, 1),
       (1, 2);
