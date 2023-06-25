
public class LocadoraDeCarros {
    private String nome;
    private String endereco;
    private String carros;
    private String clientes;
    private String locacoes;

    public LocadoraDeCarros(String nome, String endereco) {
        this.nome = nome;
        this.endereco = endereco;
    }

    public void cadastrarCarro(Carro carro) throws InterruptedException {
        carros.wait(carro.getAno());
    }

    public void cadastrarCliente(Cliente cliente) throws InterruptedException {
        clientes.wait();
    }

    public void realizarLocacao(Locacao locacao) throws CarroNaoDisponivelException {
        if (locacao.getCarro().isDisponivel()) {
            System.out.println("O carro não está disponível para locação.");
        }
        locacao.getCarro().alugar();

    }

    public void devolverCarro(Locacao locacao) {
        locacao.getCarro().devolver();

    }
}
