// //Novamente utilizando um operador, clone o objeto c​lothes​ acima e adicione a este clone um objeto ​shoes​ com propriedade​ colors: 
// ['yellow', 'purple'] ​de modo que fique igual aos objetos p​ants, shirts ​e​ socks

const clothes = {
    pants: { colors: ['black', 'blue'] },
    shirts: { colors: ['white', 'red'] },
    socks: { colors: ['beige', 'gray'] },
  };

const tenis = { tenis:{colors:['yellow', 'purple']}}
const vestuario = {...clothes, ...tenis}

console.log(vestuario)
