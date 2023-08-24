package br.com.digitalhouse.dao;

import br.com.digitalhouse.model.Dentista;

import java.util.List;
import java.util.Optional;

public interface IDao <T>{
    T criar (T dentista);

    Optional<T> buscarPorId(Integer id);

    List<T> buscarTodosOs();

    T atualizar(T dentista);

    void excluir(Integer id);
}
