/**
 * Links úteis
 * 
 * https://www.youtube.com/playlist?list=PLntvgXM11X6pi7mW0O4ZmfUI1xDSIbmTm (Curso youtube)
 * 
 */

/**
 * Tipos de variáveis
 * 
 * const -> após o valor ser atribuído, não pode mais ser alterado.
 * let -> permite alteração de valores com o mesmo tipo que foi atribuido inicialmente.
 * var -> permite atribuição de qualquer tipo de dado.
 */

// Tipos Primitivos - Fundamentais

let nome = 'Amanda Heloisa'//string
let idade = 20 //inteiro
let altura = 1.60 //decimal
let linda = true //boolean

//Object

let pessoa = {
    nome: 'Amanda Heloisa', //um objeto pode ter variáveis dentro deles
    idade: 20,
    altura: 1.60,
    linda: true,
    falar: (mensagem) => console.log(mensagem), //um objeto pode ter funções dentro dele
}

const carro = {
    marca: 'Ford',
    ano: 2009,
    dono: pessoa //um objeto pode ter outros objetos dentro dele,
}

