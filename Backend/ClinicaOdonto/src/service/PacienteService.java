package service;

import model.Paciente;

import java.util.Optional;

public class PacienteService {

    public Paciente buscarPacientePorId(Integer id){

        Optional<Paciente> paciente = Optional.empty();

    }

    public Paciente atualizarPaciente (Integer id, Paciente paciente){
        return daoPaciente.atualizar(id, paciente)
    }

    public Paciente atualizarPaciente (Integer id, Paciente paciente){
        return daoPaciente.atualizar(id, paciente)
    }
}
