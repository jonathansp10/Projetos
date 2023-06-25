abstract class Veiculo {
    private String placa;
    private String modelo;
    private int ano;
    private boolean disponivel;

    public Veiculo(String placa, String modelo, int ano) {
        this.placa = placa;
        this.modelo = modelo;
        this.ano = ano;
        this.disponivel = true;
    }

    public String getPlaca() {
        return placa;
    }

    public String getModelo() {
        return modelo;
    }

    public int getAno() {
        return ano;
    }

    public boolean isDisponivel() {
        return disponivel;
    }

    public void setDisponivel(boolean disponivel) {
        this.disponivel = disponivel;
    }

    // Métodos abstratos alugar e devolver
    public abstract boolean alugar();

    public abstract void devolver();

    public Object getCategoria() {
        return null;
    }

}