console.log("Ejercicio 1");

var cantidadDeGatos = 10;

for (var num = 1; num <= cantidadDeGatos; num++) {
  var emoticon;
  if (num % 3 === 1) {
    emoticon = "😺";
  } else if (num % 3 === 2) {
    emoticon = "😸";
  } else {
    emoticon = "😹";
  }
  console.log(`Gato #${num}: ${emoticon}`);
}

console.log("Ejercicio 2");

var cantidadDeGatos1 = 5;
var cantidadDePasos1 = 3;

for (var i = 1; i <= cantidadDeGatos1; i++) {
  var gatoInfo = `Gato #${i}: 🐈 `;

  for (var j = 1; j <= cantidadDePasos1; j++) {
    gatoInfo += "🐾";
  }

  console.log(gatoInfo);
}

console.log("Ejercicio 3");

var cantidadDeGatos2 = 10;
var cantidadDePasos2 = 4;

for (var i = 1; i <= cantidadDeGatos2; i++) {
  var gatoInfo = `Gato #${i}: 🐈 `;

  if (i % 2 === 0) {
    gatoInfo += " 🐈‍⬛";
  }

  for (var j = 1; j <= cantidadDePasos2; j++) {
    gatoInfo += "🐾";
  }

  console.log(gatoInfo);
}
