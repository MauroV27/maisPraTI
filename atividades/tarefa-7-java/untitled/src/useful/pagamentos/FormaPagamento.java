package useful.pagamentos;

import java.math.BigDecimal;

public abstract class FormaPagamento {
    public abstract void validarPagamento();
    public abstract void processarPagamento(BigDecimal valor);
}
