/**
 * Botão do panico
 * @author murilo dos santos
 */

const botao = document.getElementById ('button') 
let som = new Audio ("audio/brazil-eas-alarm-blood-moon-260034.mp3")

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

 async function ligar() {
    if (track) {
        try {
            await track.applyConstraints({ advanced: [{ torch: true }] })
        } catch (error) {
            console.error(`Erro ao inicializar a lanterna: ${error}`)
        }
    }
}


 async function desligar() {
    if (track) {
        try {
            await track.applyConstraints({ advanced: [{ torch: false }] })
        } catch (error) {
            console.error(`Erro ao inicializar a lanterna: ${error}`)
        }
    }
}

