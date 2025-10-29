A cafeteria BomGosto deseja controlar as suas vendas de café. A BomGosto controla suas vendas a partir de uma comanda. Uma comanda tem um código único, data, o número da mesa do cliente e o nome do cliente registrados. Nos itens da comanda é possível relacionar vários cafés listados no cardápio que foram vendidos. Cada item da comanda possui o código do cardápio e a quantidade requisitada deste e, não é possível inserir o mesmo código de cardápio mais de uma vez na mesma comanda. No cardápio é apresentado o nome único do café, a descrição da sua composição e o preço unitário.

Desenvolva os scripts SQL para atender cada uma das questões abaixo:

| OBS 1: Para facilitar os testes usei os dados sql nesse site aqui que permite executar sql online https://www.programiz.com/sql/online-compiler

| OBS 2: Os dados no arquivo data.sql foram gerados com IA para me ajudar a entender as respostas

Para as tabelas no banco de dados usei essa estrutura aqui (representando com ts, pois acho mais fácil de entender e mais bonito de formatado)

```ts
export interface Cardapio {
	cod_cardapio: number;
	nome_cafe: string;
	descricao_cafe: string;
	preco_unitario: number;
}

export interface Comanda {
	cod_comanda: number;
	data_venda: Date;
	num_mesa: number;
	nome_cliente: string;
}

export interface ItemComanda {
	cod_comanda: number;
	cod_cardapio: number;
	quantidade: number;
}
```

1. Faça uma listagem do cardápio ordenada por nome;

```sql
SELECT
    nome_cafe,
    descricao_cafe,
    preco_unitario
FROM
    CARDAPIO
ORDER BY
    nome_cafe;
```

2. Apresente todas as comandas (código, data, mesa e nome do cliente) e os itens da comanda (código comanda, nome do café, descricão, quantidade, preço unitário e preço total do café) destas ordenados data e código da comanda e, também o nome do café;

```sql
SELECT
    C.cod_comanda,
    C.data_venda,
    C.num_mesa,
    C.nome_cliente,
    CA.nome_cafe,
    CA.descricao_cafe,
    IC.quantidade,
    CA.preco_unitario,
    (IC.quantidade * CA.preco_unitario) AS preco_total_item
FROM
    COMANDA C
JOIN
    ITEM_COMANDA IC ON C.cod_comanda = IC.cod_comanda
JOIN
    CARDAPIO CA ON IC.cod_cardapio = CA.cod_cardapio
ORDER BY
    C.data_venda,
    C.cod_comanda,
    CA.nome_cafe;
```

3. Liste todas as comandas (código, data, mesa e nome do cliente) mais uma coluna com o valor total da comanda. Ordene por data esta listagem;

```sql
SELECT
    C.cod_comanda,
    C.data_venda,
    C.num_mesa,
    C.nome_cliente,
    SUM(IC.quantidade * CA.preco_unitario) AS valor_total_comanda
FROM
    COMANDA C
JOIN
    ITEM_COMANDA IC ON C.cod_comanda = IC.cod_comanda
JOIN
    CARDAPIO CA ON IC.cod_cardapio = CA.cod_cardapio
GROUP BY
    C.cod_comanda,
    C.data_venda,
    C.num_mesa,
    C.nome_cliente
ORDER BY
    C.data_venda,
    C.cod_comanda;
```

4. Faça a mesma listagem das comandas da questão anterior (3?), mas traga apenas as comandas que possuem mais do que um tipo de café na comanda;

```sql
SELECT
    C.cod_comanda,
    C.data_venda,
    C.num_mesa,
    C.nome_cliente,
    SUM(IC.quantidade * CA.preco_unitario) AS valor_total_comanda
FROM
    COMANDA C
JOIN
    ITEM_COMANDA IC ON C.cod_comanda = IC.cod_comanda
JOIN
    CARDAPIO CA ON IC.cod_cardapio = CA.cod_cardapio
GROUP BY
    C.cod_comanda,
    C.data_venda,
    C.num_mesa,
    C.nome_cliente
HAVING
    COUNT(IC.cod_cardapio) > 1
ORDER BY
    C.data_venda,
    C.cod_comanda;
```

5. Qual o total de faturamento por data? ordene por data esta consulta.

```sql
SELECT
    C.data_venda,
    SUM(IC.quantidade * CA.preco_unitario) AS total_faturamento_dia
FROM
    COMANDA C
JOIN
    ITEM_COMANDA IC ON C.cod_comanda = IC.cod_comanda
JOIN
    CARDAPIO CA ON IC.cod_cardapio = CA.cod_cardapio
GROUP BY
    C.data_venda
ORDER BY
    C.data_venda;
```
