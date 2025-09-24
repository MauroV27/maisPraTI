package tarefa;

import useful.carrinho.Produto;
import useful.carrinho.Carrinho;
import useful.carrinho.Dinheiro;
import useful.carrinho.Moeda;

import java.math.BigDecimal;
import java.util.Collections;

public class Questao6 {
    public static void execute() {
        Produto p1 = new Produto("Notebook", new Dinheiro(new BigDecimal("3500.00"), Moeda.BRL));
        Produto p2 = new Produto("Mouse", new Dinheiro(new BigDecimal("150.00"), Moeda.BRL));

        Carrinho carrinho = new Carrinho(Collections.emptyList());
        carrinho = carrinho.adicionarItem(p1, 1);
        carrinho = carrinho.adicionarItem(p2, 2);

        System.out.println("Total sem desconto: " + carrinho.getTotal());

        Carrinho carrinhoComDesconto = carrinho.aplicarCupom(new BigDecimal("0.20"));
        System.out.println("Total com 20% de desconto: " + carrinhoComDesconto.getTotal());

        Carrinho carrinhoRemovido = carrinhoComDesconto.removerItem(p2);
        System.out.println("Total após remover Mouse: " + carrinhoRemovido.getTotal());

        try {
            carrinho.aplicarCupom(new BigDecimal("0.50"));
        } catch (IllegalArgumentException e) {
            System.out.println("Erro: " + e.getMessage());
        }
    }

    public static void main(String[] args) {
        execute();
    }
}
