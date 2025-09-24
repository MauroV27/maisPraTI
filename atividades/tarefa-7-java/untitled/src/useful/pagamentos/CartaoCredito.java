package useful.pagamentos;

import java.math.BigDecimal;

public class CartaoCredito extends FormaPagamento {
    private String numeroCartao;

    public CartaoCredito(String numeroCartao) {
        this.numeroCartao = numeroCartao;
    }

    @Override
    public void validarPagamento() {
        if (numeroCartao == null || !numeroCartao.matches("\\d{16}")) {
            throw new PagamentoInvalidoException("Número de cartão inválido. Deve conter 16 dígitos.");
        }
    }

    @Override
    public void processarPagamento(BigDecimal valor) {
        validarPagamento();
        System.out.println("Pagamento de R$ " + valor + " processado no cartão de crédito " + numeroCartao);
    }
}