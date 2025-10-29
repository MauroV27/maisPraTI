-- 1. CRIAÇÃO DA TABELA CARDAPIO
CREATE TABLE CARDAPIO (
    cod_cardapio INT PRIMARY KEY,
    nome_cafe VARCHAR(100) UNIQUE NOT NULL, -- Nome deve ser único
    descricao_cafe VARCHAR(255),
    preco_unitario DECIMAL(5, 2) NOT NULL
);

-- 2. CRIAÇÃO DA TABELA COMANDA
CREATE TABLE COMANDA (
    cod_comanda INT PRIMARY KEY,
    data_venda VARCHAR(20) NOT NULL, -- Usando VARCHAR para a data, conforme os dados de teste 'YYYY-MM-DD HH:MM:SS'
    num_mesa INT NOT NULL,
    nome_cliente VARCHAR(100)
);

-- 3. CRIAÇÃO DA TABELA ITEM_COMANDA (Tabela de Relacionamento)
CREATE TABLE ITEM_COMANDA (
    cod_comanda INT NOT NULL,
    cod_cardapio INT NOT NULL,
    quantidade INT NOT NULL,
    
    -- Definição das chaves primárias e estrangeiras
    PRIMARY KEY (cod_comanda, cod_cardapio),
    
    FOREIGN KEY (cod_comanda) REFERENCES COMANDA(cod_comanda),
    FOREIGN KEY (cod_cardapio) REFERENCES CARDAPIO(cod_cardapio)
);

------------------------------------------------------
-- INSERÇÃO DOS DADOS DE TESTE
------------------------------------------------------

-- 4. INSERÇÃO NA TABELA CARDAPIO
INSERT INTO CARDAPIO (cod_cardapio, nome_cafe, descricao_cafe, preco_unitario) VALUES
(101, 'Expresso Simples', 'Grãos 100% Arábica', 4.50),
(102, 'Cappuccino Clássico', 'Expresso, leite vaporizado e espuma de leite', 8.00),
(103, 'Café com Leite', 'Café coado e leite quente', 6.50),
(104, 'Mocha de Caramelo', 'Expresso, chocolate, caramelo e chantilly', 12.00),
(105, 'Chá de Limão', 'Infusão de chá preto com rodela de limão', 5.00);


-- 5. INSERÇÃO NA TABELA COMANDA
INSERT INTO COMANDA (cod_comanda, data_venda, num_mesa, nome_cliente) VALUES
(1, '2025-10-27 10:30:00', 5, 'Ana Silva'),
(2, '2025-10-27 11:15:00', 2, 'Bruno Souza'),
(3, '2025-10-28 09:00:00', 1, 'Carlos Mello'),
(4, '2025-10-28 14:00:00', 7, 'Diana Gomes');


-- 6. INSERÇÃO NA TABELA ITEM_COMANDA
INSERT INTO ITEM_COMANDA (cod_comanda, cod_cardapio, quantidade) VALUES
-- Comanda 1 (Dois tipos de itens)
(1, 101, 2),
(1, 103, 1),

-- Comanda 2 (Um tipo de item)
(2, 102, 1),

-- Comanda 3 (Dois tipos de itens)
(3, 104, 1),
(3, 105, 2),

-- Comanda 4 (Um tipo de item, mas 3 unidades)
(4, 101, 3);