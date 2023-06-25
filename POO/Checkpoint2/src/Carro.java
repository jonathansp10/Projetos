class Carro extends Veiculo {
    private String tipoCombustivel;
    private CategoriaCarro categoria;

    public Carro(String placa, String modelo, int ano, String tipoCombustivel, CategoriaCarro categoria) {
        super(placa, modelo, ano);
        this.tipoCombustivel = tipoCombustivel;
        this.categoria = categoria;
    }

    public String getTipoCombustivel() {
        return tipoCombustivel;
    }

    public CategoriaCarro getCategoria() {
        return categoria;
    }

    // Sobrescrita do método alugar
    @Override
    public boolean alugar() {
        if (isDisponivel()) {
            setDisponivel(false);
            return true;
        }
        return false;
    }

    // Sobrescrita do método devolver
    @Override
    public void devolver() {
        setDisponivel(true);
    }

}