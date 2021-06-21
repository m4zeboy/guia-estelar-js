const Carro = {
    marca: "Chevrolet",
    velocidade: "100 km/h",
    lugares: 5,
    ano: 2016,
    ligar() {
        console.log('Carro ligado')
    },
    acelerar(velocidade) {
        console.log(`Acelerando até a ${velocidade} km/h`)
    }
}