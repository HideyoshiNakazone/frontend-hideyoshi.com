CREATE SCHEMA IF NOT EXISTS store;

CREATE TABLE IF NOT EXISTS store.CLIENTE (
    id SERIAL PRIMARY KEY,
	user_name VARCHAR(40) NOT NULL,
    email VARCHAR(80) NOT NULL,
    userid VARCHAR(40) NOT NULL,
    passwd VARCHAR(80) NOT NULL,
    salt VARCHAR(30) NOT NULL,

	create_date TIMESTAMP
);

CREATE UNIQUE INDEX IF NOT EXISTS uname ON store.CLIENTE (user_name);

CREATE OR REPLACE FUNCTION novo_cliente()
    RETURNS TRIGGER AS $$
        BEGIN
            NEW.create_date := NOW();
            RETURN NEW;
        END;
    $$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS novo_cliente ON store.cliente;
CREATE TRIGGER novo_cliente
    BEFORE INSERT ON store.CLIENTE
    FOR EACH ROW EXECUTE PROCEDURE novo_cliente();