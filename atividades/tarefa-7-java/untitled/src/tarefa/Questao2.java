package tarefa;

import useful.ProdutoV2;

public class Questao2 {
    public static void execute() {
        ProdutoV2 p1 = new ProdutoV2("Smartphone", 2000.00, 5);
        p1.exibirInfo();

        System.out.println("\nAplicando desconto válido de 20%...");
        p1.aplicarDesconto(20);
        p1.exibirInfo();

        System.out.println("\nTestando descontos inválidos...");
        try {
            p1.aplicarDesconto(-10);
        } catch (IllegalArgumentException e) {
            System.out.println("Erro: " + e.getMessage());
        }

        try {
            p1.aplicarDesconto(70);
        } catch (IllegalArgumentException e) {
            System.out.println("Erro: " + e.getMessage());
        }
    }

    public static void main(String[] args) {
        execute();
    }
}
