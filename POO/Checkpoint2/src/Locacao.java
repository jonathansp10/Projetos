import java.time.LocalDate;

public class Locacao {
    private Veiculo veiculo;
    private Cliente cliente;
    private LocalDate dataInicial;
    private LocalDate dataFinal;
    private double valorTotal;

    public Locacao(Veiculo veiculo, Cliente cliente, LocalDate dataInicial, LocalDate dataFinal) {
        this.veiculo = veiculo;
        this.cliente = cliente;
        this.dataInicial = dataInicial;
        this.dataFinal = dataFinal;
        this.valorTotal = calcularValorTotal();
    }

    public Locacao(Carro carro1, Cliente cliente1, LocalDate dataInicial, LocalDate dataFinal) {

    }

    public double calcularValorTotal() {
        int diasLocacao = 0;
        double i;
        i = diasLocacao ; veiculo.getCategoria().getClass();
        return i;
    }

    public Veiculo getCarro() {
        Veiculo o = null;
        return null;
    }
}
