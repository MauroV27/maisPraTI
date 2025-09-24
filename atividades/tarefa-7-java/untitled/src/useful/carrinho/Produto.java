package useful.carrinho;

public class Produto {
    private final String nome;
    private final Dinheiro preco;

    public Produto(String nome, Dinheiro preco) {
        if (nome == null || nome.trim().isEmpty()) {
            throw new IllegalArgumentException("O nome do produto não pode ser vazio.");
        }
        this.nome = nome;
        this.preco = preco;
    }

    public String getNome() {
        return nome;
    }

    public Dinheiro getPreco() {
        return preco;
    }
}

