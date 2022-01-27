//1 - crie uma função que exiba uma mensagem no console
function helloWorld(){
    console.log('Hello World!')
}

helloWorld();

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
function mrRobot(name){
    console.log(`Olá ${name}, seja bem-vindo!`)
}

mrRobot('Elliot');

//3 - crie uma função que receba seu nome, idade, e estilo musical preferido (parâmetros) e exiba no console
function info(nam, age, mus){
    console.log(`Olá ${nam}, você informou que tem ${age} anos e curte ${mus}.`)
};

info('Elliot', '27', 'Rock')

//4 - crie uma função que receba o seu filme favorito, musica favorita (parâmetros) e exiba no console
function cultureFavs(mov, mus){
    console.log(`Então seu filme favorito é ${mov} e sua música favorita é ${mus}?! Os meus também!`)
}

cultureFavs('The Careful Massacre of the Bourgeoisie', 'Radio Nowhere');

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função
function triplo(n){
    return 3*n;
}

console.log(triplo(3));