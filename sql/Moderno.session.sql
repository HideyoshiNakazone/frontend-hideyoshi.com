CREATE SCHEMA moderno;

CREATE TABLE moderno.CLIENTE (
    id SERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL,
	user_name VARCHAR(80) NOT NULL,
    passwd VARCHAR(80) NOT NULL,
	date TIMESTAMP NOT NULL
);

CREATE UNIQUE INDEX ident ON moderno.CLIENTE (user_id);
CREATE UNIQUE INDEX uname ON moderno.CLIENTE (user_name);
CREATE UNIQUE INDEX date_creation ON moderno.CLIENTE (date);
