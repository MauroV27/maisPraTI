package useful.pagamentos;

import java.math.BigDecimal;

public class Boleto extends FormaPagamento {
    private String codigoBarras;

    public Boleto(String codigoBarras) {
        this.codigoBarras = codigoBarras;
    }

    @Override
    public void validarPagamento() {
        if (codigoBarras == null || !codigoBarras.matches("\\d{47}")) {
            throw new PagamentoInvalidoException("Código de barras inválido. Deve conter 47 dígitos.");
        }
    }

    @Override
    public void processarPagamento(BigDecimal valor) {
        validarPagamento();
        System.out.println("Pagamento de R$ " + valor + " processado via boleto " + codigoBarras);
    }
}