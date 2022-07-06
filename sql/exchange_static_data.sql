-- DROP TABLE przm.tb_exchange;
CREATE TABLE przm.tb_exchange (
  id serial primary key,
  uuid uuid default gen_random_uuid(),
  name text,
  code text,
  create_time timestamptz default now(),
  jdata jsonb default '{}',
  state text default 'active'
)

-- Ascendex
INSERT INTO przm.tb_exchange
(name, code, jdata, state)
VALUES('Ascendex', 'ascendex', '{}'::jsonb, 'active');

-- Bitfinex
INSERT INTO przm.tb_exchange
(name, code, jdata, state)
VALUES('Bitfinex', 'bitfinex', '{}'::jsonb, 'active');

-- Bitfinex2
INSERT INTO przm.tb_exchange
(name, code, jdata, state)
VALUES('Bitfinex2', 'bitfinex2', '{}'::jsonb, 'active');

-- Bitget
INSERT INTO przm.tb_exchange
(name, code, jdata, state)
VALUES('Bitget', 'bitget', '{}'::jsonb, 'active');

-- Bitmex
INSERT INTO przm.tb_exchange
(name, code, jdata, state)
VALUES('Bitmex', 'bitmex', '{}'::jsonb, 'active');

-- Bybit
INSERT INTO przm.tb_exchange
(name, code, jdata, state)
VALUES('Bybit', 'bybit', '{}'::jsonb, 'active');

-- Delta
INSERT INTO przm.tb_exchange
(name, code, jdata, state)
VALUES('Delta', 'delta', '{}'::jsonb, 'active');

-- Deribit
INSERT INTO przm.tb_exchange
(name, code, jdata, state)
VALUES('Deribit', 'deribit', '{}'::jsonb, 'active');

-- Ftx
INSERT INTO przm.tb_exchange
(name, code, jdata, state)
VALUES('Ftx', 'ftx', '{}'::jsonb, 'active');

-- Gate.io
INSERT INTO przm.tb_exchange
(name, code, jdata, state)
VALUES('Gate.io', 'gateio', '{}'::jsonb, 'active');

-- Huobi
INSERT INTO przm.tb_exchange
(name, code, jdata, state)
VALUES('Huobi', 'huobi', '{}'::jsonb, 'active');

-- Huobi
INSERT INTO przm.tb_exchange
(name, code, jdata, state)
VALUES('Huobi', 'huobi', '{}'::jsonb, 'active');

-- Kucoin
INSERT INTO przm.tb_exchange
(name, code, jdata, state)
VALUES('Kucoin', 'kucoin', '{}'::jsonb, 'active');

-- Okex
INSERT INTO przm.tb_exchange
(name, code, jdata, state)
VALUES('Okex', 'okex', '{}'::jsonb, 'active');

-- Okex5
INSERT INTO przm.tb_exchange
(name, code, jdata, state)
VALUES('Okex5', 'okex5', '{}'::jsonb, 'active');

INSERT INTO przm.tb_exchange
(name, code, jdata, state)
VALUES('Luno', 'luno', '{}'::jsonb, 'active');
