package tarefa;

import useful.pagamentos.*;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class Questao5 {
    public static void execute() {
        List<FormaPagamento> pagamentos = new ArrayList<>();
        pagamentos.add(new CartaoCredito("1234567812345678"));   // válido
        pagamentos.add(new Boleto("12345678901234567890123456789012345678901234567")); // válido
        pagamentos.add(new Pix("email@exemplo.com")); // válido
        pagamentos.add(new CartaoCredito("1234"));    // inválido

        for (FormaPagamento pagamento : pagamentos) {
            try {
                pagamento.processarPagamento(new BigDecimal("150.00"));
            } catch (PagamentoInvalidoException e) {
                System.out.println("Erro: " + e.getMessage());
            }
        }
    }

    public static void main(String[] args) {
        execute();
    }
}