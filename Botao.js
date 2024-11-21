/**
 * Botão do panico
 * @author murilo dos santos
 */

const botao = document.getElementById('button')
const lampadaimg = document.getElementById('lamp') 
let som = new Audio ("audio/som.mp3")

// lanterna (pré carregamento)
let stream, track
inicializarLanterna()

botao.addEventListener('mousedown', (event) => {
    event.preventDefault() //ignorar o comportamento padrão
    som.play();
 })
 botao.addEventListener('mouseup', (event) => {
    event.preventDefault() //ignorar o comportamento padrão
    som.pause();
 })
 botao.addEventListener('touchstart', (event) => {
    event.preventDefault() //ignorar o comportamento padrão
    som.play();
 })
 botao.addEventListener('touchend', (event) => {
    event.preventDefault() //ignorar o comportamento padrão
    som.pause();
 })

