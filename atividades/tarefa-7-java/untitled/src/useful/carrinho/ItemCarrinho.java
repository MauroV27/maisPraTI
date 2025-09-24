package useful.carrinho;

import java.math.BigDecimal;

public class ItemCarrinho {
    private final Produto produto;
    private final int quantidade;

    public ItemCarrinho(Produto produto, int quantidade) {
        if (quantidade <= 0) {
            throw new IllegalArgumentException("A quantidade deve ser maior que zero.");
        }
        this.produto = produto;
        this.quantidade = quantidade;
    }

    public Produto getProduto() {
        return produto;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public Dinheiro getSubtotal() {
        BigDecimal subtotal = produto.getPreco().getValor()
                .multiply(new BigDecimal(quantidade))
                .setScale(2, BigDecimal.ROUND_HALF_EVEN);
        return new Dinheiro(subtotal, produto.getPreco().getMoeda());
    }
}
