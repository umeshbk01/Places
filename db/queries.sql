create table Place(
    id varchar(50) not null primary key,
    title varchar(30),
    description1 varchar(100),
    address1 varchar(100),
    lat decimal(7,5),
    lng decimal(7,5)
);