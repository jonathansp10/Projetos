import java.time.LocalDate;
import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) throws InterruptedException {
        LocadoraDeCarros locadora = new LocadoraDeCarros("Minha Locadora", "Rua Principal");

        CategoriaCarro categoria = new CategoriaCarro("Econômico", 50.0);
        Carro carro1 = new Carro("ABC1234", "Fiat Palio", 2020, "Gasolina", categoria);

        Cliente cliente1 = new Cliente("João", "99999999", "joao@example.com");

        LocalDate dataInicial = LocalDate.of(2023, 6, 1);
        LocalDate dataFinal = LocalDate.of(2023, 6, 7);
        Locacao locacao1 = new Locacao(carro1, cliente1, dataInicial, dataFinal);

        try {
            locadora.realizarLocacao(locacao1);
            System.out.println("Locação realizada com sucesso.");
        } catch (CarroNaoDisponivelException e) {
            System.out.println("Erro ao realizar locação: " + e.getMessage());
        }

        locadora.devolverCarro(locacao1);
        System.out.println("Carro devolvido.");

        // Exemplo de uso de Collections
        locadora.cadastrarCarro(carro1);
        locadora.cadastrarCliente(cliente1);

        // Outros exemplos de uso de Collections
        Map<String, Cliente> mapaClientes = new HashMap<>();
    }
}