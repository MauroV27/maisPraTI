import tarefa.Questao1;
import tarefa.Questao2;
import tarefa.Questao3;
import tarefa.Questao4;
import tarefa.Questao5;
import tarefa.Questao6;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {

    public static void printBonito( String str ){
        System.out.println("\n --- " + str + " --- \n");
    }

    public static void main(String[] args) {

        //TIP Press <shortcut actionId="ShowIntentionActions"/> with your caret at the highlighted text
        // to see how IntelliJ IDEA suggests fixing it.
        printBonito("Executando questão 1");
        Questao1.execute();

        printBonito("Executando questão 2");
        Questao2.execute();

        printBonito("Executando questão 3");
        Questao3.execute();

        printBonito("Executando questão 4");
        Questao4.execute();

        printBonito("Executando questão 5");
        Questao5.execute();

        printBonito("Executando questão 6");
        Questao6.execute();

    }
}