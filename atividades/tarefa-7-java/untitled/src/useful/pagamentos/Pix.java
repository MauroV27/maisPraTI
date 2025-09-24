package useful.pagamentos;

import java.math.BigDecimal;

public class Pix extends FormaPagamento {
    private String chavePix;

    public Pix(String chavePix) {
        this.chavePix = chavePix;
    }

    @Override
    public void validarPagamento() {
        if (chavePix == null || chavePix.trim().isEmpty()) {
            throw new PagamentoInvalidoException("Chave Pix inválida.");
        }
    }

    @Override
    public void processarPagamento(BigDecimal valor) {
        validarPagamento();
        System.out.println("Pagamento de R$ " + valor + " processado via Pix chave: " + chavePix);
    }
}
