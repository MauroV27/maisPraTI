package tarefa;

import useful.IMeioTransporte;
import useful.Carro;
import useful.Trem;
import useful.Bicicleta;

import java.util.ArrayList;
import java.util.List;

public class Questao4 {
    public static void execute() {
        List<IMeioTransporte> meios = new ArrayList<>();
        meios.add(new Carro());
        meios.add(new Bicicleta());
        meios.add(new Trem());

        for (IMeioTransporte m : meios) {
            System.out.println("\nTestando: " + m);
            try {
                m.acelerar();
                m.acelerar();
                System.out.println("Velocidade após acelerar: " + m.getVelocidade() + " km/h");
                m.frear();
                System.out.println("Velocidade após frear: " + m.getVelocidade() + " km/h");
            } catch (IllegalStateException e) {
                System.out.println("Erro: " + e.getMessage());
            }
        }
    }

    public static void main(String[] args) {
        execute();
    }
}