package br.com.digitalhouse.service;

import br.com.digitalhouse.model.Dentista;

import java.util.List;
import java.util.Optional;

public interface DentistaService {

    Dentista criarDentista (Dentista dentista);

    Optional <Dentista> buscarDentistaPorId(Integer id);

    List <Dentista> buscarTodosOsDentistas();

    Dentista atualizarDentista(Dentista dentista);

   void excluirDentista(Integer id);
}
