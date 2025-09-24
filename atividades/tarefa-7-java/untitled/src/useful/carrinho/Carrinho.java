package useful.carrinho;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Carrinho {
    private final List<ItemCarrinho> itens;

    public Carrinho(List<ItemCarrinho> itens) {
        this.itens = Collections.unmodifiableList(new ArrayList<>(itens));
    }

    public List<ItemCarrinho> getItens() {
        return itens;
    }

    public Carrinho adicionarItem(Produto produto, int quantidade) {
        List<ItemCarrinho> novaLista = new ArrayList<>(itens);
        novaLista.add(new ItemCarrinho(produto, quantidade));
        return new Carrinho(novaLista);
    }

    public Carrinho removerItem(Produto produto) {
        List<ItemCarrinho> novaLista = new ArrayList<>(itens);
        novaLista.removeIf(i -> i.getProduto().equals(produto));
        return new Carrinho(novaLista);
    }

    public Carrinho aplicarCupom(BigDecimal percentual) {
        if (percentual.compareTo(BigDecimal.ZERO) < 0 || percentual.compareTo(new BigDecimal("0.30")) > 0) {
            throw new IllegalArgumentException("O cupom deve estar entre 0% e 30%.");
        }

        List<ItemCarrinho> novaLista = new ArrayList<>();
        for (ItemCarrinho item : itens) {
            Dinheiro precoComDesconto = item.getProduto().getPreco().aplicarDesconto(percentual);
            Produto produtoComDesconto = new Produto(item.getProduto().getNome(), precoComDesconto);
            novaLista.add(new ItemCarrinho(produtoComDesconto, item.getQuantidade()));
        }
        return new Carrinho(novaLista);
    }

    public Dinheiro getTotal() {
        BigDecimal total = BigDecimal.ZERO;
        Moeda moeda = null;
        for (ItemCarrinho item : itens) {
            if (moeda == null) moeda = item.getSubtotal().getMoeda();
            total = total.add(item.getSubtotal().getValor());
        }
        return new Dinheiro(total, moeda == null ? Moeda.BRL : moeda);
    }
}
