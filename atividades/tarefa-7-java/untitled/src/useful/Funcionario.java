package useful;

import java.math.BigDecimal;

public abstract class Funcionario {
    protected String nome;
    protected BigDecimal salario;

    public Funcionario(String nome, BigDecimal salario) {
        if (salario == null || salario.compareTo(BigDecimal.ZERO) <= 0) {
            throw new IllegalArgumentException("O salário deve ser positivo.");
        }
        if (nome == null || nome.trim().isEmpty()) {
            throw new IllegalArgumentException("O nome não pode ser nulo ou vazio.");
        }
        this.nome = nome;
        this.salario = salario;
    }

    public String getNome() {
        return nome;
    }

    public BigDecimal getSalario() {
        return salario;
    }

    public abstract BigDecimal calcularBonus();
}