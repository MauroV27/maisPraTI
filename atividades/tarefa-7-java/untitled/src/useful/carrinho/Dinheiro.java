package useful.carrinho;

import java.math.BigDecimal;
import java.util.Objects;

public final class Dinheiro {
    private final BigDecimal valor;
    private final Moeda moeda;

    public Dinheiro(BigDecimal valor, Moeda moeda) {
        if (valor == null || valor.compareTo(BigDecimal.ZERO) < 0) {
            throw new IllegalArgumentException("O valor não pode ser negativo.");
        }
        if (moeda == null) {
            throw new IllegalArgumentException("A moeda não pode ser nula.");
        }
        this.valor = valor.setScale(2, BigDecimal.ROUND_HALF_EVEN);
        this.moeda = moeda;
    }

    public BigDecimal getValor() {
        return valor;
    }

    public Moeda getMoeda() {
        return moeda;
    }

    public Dinheiro aplicarDesconto(BigDecimal percentual) {
        if (percentual.compareTo(BigDecimal.ZERO) < 0 || percentual.compareTo(new BigDecimal("0.30")) > 0) {
            throw new IllegalArgumentException("O desconto deve estar entre 0% e 30%.");
        }
        BigDecimal desconto = valor.multiply(percentual);
        BigDecimal novoValor = valor.subtract(desconto).setScale(2, BigDecimal.ROUND_HALF_EVEN);
        return new Dinheiro(novoValor, moeda);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Dinheiro)) return false;
        Dinheiro dinheiro = (Dinheiro) o;
        return valor.equals(dinheiro.valor) && moeda == dinheiro.moeda;
    }

    @Override
    public int hashCode() {
        return Objects.hash(valor, moeda);
    }

    @Override
    public String toString() {
        return moeda + " " + valor;
    }
}
