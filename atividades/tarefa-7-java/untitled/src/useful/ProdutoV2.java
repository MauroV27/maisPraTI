package useful;

public class ProdutoV2 extends  ProdutoV1{
    public ProdutoV2(String nome, double preco, int quantidadeEmEstoque) {
        super(nome, preco, quantidadeEmEstoque);
    }

    public void aplicarDesconto(double porcentagem) {
        if (porcentagem < 0 || porcentagem > 50) {
            throw new IllegalArgumentException("Desconto inválido. Deve estar entre 0 e 50%.");
        }
        double novoPreco = getPreco() - (getPreco() * (porcentagem / 100));
        setPreco(novoPreco);
    }

}
