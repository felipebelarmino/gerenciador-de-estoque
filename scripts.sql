create table users (
    id_user bigint primary key generated always as identity,
    name varchar(100) not null,
    email varchar(100) not null unique,
    password varchar(255) not null,
    role varchar(20) not null,
    creation_date timestamp
    with
        time zone default now()
);

create table categories (
    id_category bigint primary key generated always as identity,
    name varchar(100) not null unique,
    description text
);

create table products (
    id_product bigint primary key generated always as identity,
    name varchar(100) not null,
    description text,
    unit_measure varchar(20) not null,
    minimum_stock numeric(10, 2) not null,
    current_stock numeric(10, 2) not null,
    id_category bigint not null references categories (id_category),
    creation_date timestamp
    with
        time zone default now()
);

create table suppliers (
    id_supplier bigint primary key generated always as identity,
    name varchar(100) not null,
    contact varchar(100),
    phone varchar(20),
    email varchar(100),
    address varchar(200),
    creation_date timestamp
    with
        time zone default now()
);

create table products_suppliers (
    id_product bigint not null references products (id_product),
    id_supplier bigint not null references suppliers (id_supplier),
    primary key (id_product, id_supplier)
);

create table stock_entries (
    id_entry bigint primary key generated always as identity,
    id_product bigint not null references products (id_product),
    quantity numeric(10, 2) not null,
    entry_date timestamp
    with
        time zone default now(),
        id_supplier bigint references suppliers (id_supplier),
        id_user bigint not null references users (id_user),
        observation text
);

create table stock_exits (
    id_exit bigint primary key generated always as identity,
    id_product bigint not null references products (id_product),
    quantity numeric(10, 2) not null,
    exit_date timestamp
    with
        time zone default now(),
        reason varchar(50) not null,
        id_user bigint not null references users (id_user),
        observation text
);

create table purchase_orders (
    id_order bigint primary key generated always as identity,
    order_date timestamp
    with
        time zone default now(),
        status varchar(20) not null,
        id_user bigint not null references users (id_user),
        observation text
);

create table order_items (
    id_order bigint not null references purchase_orders (id_order),
    id_product bigint not null references products (id_product),
    quantity numeric(10, 2) not null,
    primary key (id_order, id_product)
);

create table stock_alerts (
    id_alert bigint primary key generated always as identity,
    id_product bigint not null references products (id_product),
    alert_date timestamp
    with
        time zone default now(),
        status varchar(20) not null
);

create table stock_movements (
    id_movement bigint primary key generated always as identity,
    id_product bigint not null references products (id_product),
    quantity numeric(10, 2) not null,
    movement_date timestamp
    with
        time zone default now(),
        type varchar(20) not null,
        id_user bigint not null references users (id_user)
);