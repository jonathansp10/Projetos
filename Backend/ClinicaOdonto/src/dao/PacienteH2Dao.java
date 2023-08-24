package dao;

public class PacienteH2Dao implements IDao<Paciente, Integer>{

    private static final String SQL_BUSCA_POR_ID = "SELECT * FROM Paciente WHERE id = ?";
    private static final String SQL_CRIACAO = """
            INSERT INTO Paciente(nome, sobrenome, rg, data_cadastro) VALUES(?, ?, ?, ?);
            INSERT INTO Endereco(rua, numero, cidade, bairro) VALUES(?, ?, ?, ?);
            """;
    private static final String SQL_ATUALIZACAO = """
            UPDATE Paciente SET nome = ?, sobrenome = ?, rg = ?, data_cadastro = ? WHERE id = ?;
            UPDATE Endereco SET rua = ?, numero = ?, cidade = ?, bairro = ? WHERE id = ?;
            """;
    private static final String SQL_EXCLUSAO = "DELETE FROM Paciente WHERE id = ?";

}


