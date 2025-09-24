package tarefa;

import useful.Desenvolvedor;
import useful.Funcionario;
import useful.Gerente;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class Questao3 {

    public static void execute() {
        List<Funcionario> funcionarios = new ArrayList<>();
        funcionarios.add(new Gerente("Ana", new BigDecimal("10000")));
        funcionarios.add(new Desenvolvedor("Carlos", new BigDecimal("8000")));
        funcionarios.add(new Desenvolvedor("Marina", new BigDecimal("7000")));
        funcionarios.add(new Gerente("Roberto", new BigDecimal("12000")));

        for (Funcionario f : funcionarios) {
            System.out.println(f.getNome() + " - Salário: R$ " + f.getSalario() +
                    " | Bônus: R$ " + f.calcularBonus());
        }
    }

    public static void main(String[] args) {
        execute();
    }

}
