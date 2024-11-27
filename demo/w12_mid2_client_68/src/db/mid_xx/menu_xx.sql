CREATE TABLE menu_xx (
    id int NOT NULL,
    title text,
    category text,
    price real,
    img text,
    descrip text,
    primary key (id)
);

INSERT INTO menu_xx (id, title, category, price, img, descrip)
VALUES
(1,'buttermilk pancakes','breakfast',15.59,'/mid_xx/item-1.jpeg','Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores ut iusto quas quia dignissimos ullam.'),
(2,'diner double','dessert',13.99,'/mid_xx/item-2.jpeg','Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores ut iusto quas quia dignissimos ullam. Enim voluptas, expedita '),
(3,'godzilla milkshake','shakes',6.99,'/mid_xx/item-3.jpeg','Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores ut iusto quas quia dignissimos ullam. Enim voluptas, expedita'),
(4,'Country Delight','lunch',20.99,'/mid_xx/item-4.jpeg','Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores ut iusto quas quia dignissimos ullam. Enim voluptas, expedita'),
(5,'Egg Attack','breakfast',2.99,'/mid_xx/item-5.jpeg','Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores ut iusto quas quia dignissimos ullam. Enim voluptas, expedita'),
(6,'Oreo Dream','shakes',18.99,'/mid_xx/item-6.jpeg','Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores ut iusto quas quia dignissimos ullam. Enim voluptas, expedita'),
(7,'Bacon Overflow','breakfast',8.99,'/mid_xx/item-7.jpeg','Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores ut iusto quas quia dignissimos ullam. Enim voluptas, expedita'),
(8,'American Classic','lunch',12.99,'/mid_xx/item-8.jpeg','Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores ut iusto quas quia dignissimos ullam. Enim voluptas, expedita'),
(9,'Quarantine Buddy','lunch',13.99,'/mid_xx/item-9.jpeg','Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores ut iusto quas quia dignissimos ullam. Enim voluptas, expedita')

INSERT INTO menu_xx (id, title, category, price, img, descrip)
VALUES
(7,'Bacon Overflow','breakfast',8.99,'/mid_xx/item-7.jpeg','Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores ut iusto quas quia dignissimos ullam. Enim voluptas, expedita'),
(8,'American Classic','lunch',12.99,'/mid_xx/item-8.jpeg','Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores ut iusto quas quia dignissimos ullam. Enim voluptas, expedita'),
(9,'Quarantine Buddy','lunch',13.99,'/mid_xx/item-9.jpeg','Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores ut iusto quas quia dignissimos ullam. Enim voluptas, expedita')

truncate table menu_xx