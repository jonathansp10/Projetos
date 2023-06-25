class CarroNaoDisponivelException extends Exception {
    private final String mensagem;

    public CarroNaoDisponivelException(String mensagem) {
        super(mensagem);
        this.mensagem = mensagem;
    }

}