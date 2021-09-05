const express = require("express");
const rotas = express();

const controladorConsultores = require("./modulos/consultores/controlador/ControladorConsultores");
const loginConsultor = require("./modulos/consultores/controlador/login");
const verificarToken = require("./filtros/verificarToken");

const verificaExistencia = require("./validacoes/VerificaExistencia")
const controladorUnidade = require('./modulos/unidades/controlador/ControladorUnidade')

const controladorAgendamento = require("./modulos/agendamentos/controlador/ControladorAgendamentos")

rotas.post("/consultores", controladorConsultores.cadastrarConsultor);
rotas.post("/login", loginConsultor);

rotas.use(verificarToken);

rotas.get('/unidades', controladorUnidade.listar)
rotas.post('/unidades', controladorUnidade.criar)
rotas.put('/unidades/:id', verificaExistencia, controladorUnidade.atualizar)
rotas.delete('/unidades/:id', verificaExistencia, controladorUnidade.apagar)

rotas.post('/agendamentos', controladorAgendamento.criar)
rotas.get('/agendamentos/:consultor_id', controladorAgendamento.listar)
rotas.delete('/agendamentos/:agendamento_id', controladorAgendamento.apagar)

module.exports = rotas;