package tarefa;

import useful.ProdutoV1;

public class Questao1 {
    public static void execute() {
        try {
            ProdutoV1 p1 = new ProdutoV1("Notebook", 3500.00, 10);
            p1.exibirInfo();

            p1.setPreco(3200.00);
            p1.setQuantidadeEmEstoque(15);
            p1.exibirInfo();

            System.out.println("\nTestando atribuições inválidas...");

            try {
                p1.setPreco(-50);
            } catch (IllegalArgumentException e) {
                System.out.println("Erro: " + e.getMessage());
            }

            try {
                p1.setNome("");
            } catch (IllegalArgumentException e) {
                System.out.println("Erro: " + e.getMessage());
            }

            try {
                p1.setQuantidadeEmEstoque(-3);
            } catch (IllegalArgumentException e) {
                System.out.println("Erro: " + e.getMessage());
            }

        } catch (IllegalArgumentException e) {
            System.out.println("Erro ao criar produto: " + e.getMessage());
        }
    }

    public static void main(String[] args) {
        execute();
    }
}
