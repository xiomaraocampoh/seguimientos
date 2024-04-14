const sala1 = Array(10).fill(false);
const sala2 = Array(10).fill(false);
// Esta función muestra la disponibilidad de asientos en ambas salas de cine y muestra la disponibilidad de cada asiento en cada sala
function verDisponibilidad() {
  alert("Sala 1:");
  alert(sala1.map((asiento, i) => asiento? `[X] Asiento ${i + 1}` : `[ ] Asiento ${i + 1}`).join("\n"));
  alert("Sala 2:");
  alert(sala2.map((asiento, i) => asiento? `[X] Asiento ${i + 1}` : `[ ] Asiento ${i + 1}`).join("\n"));
}
//Esta función permite al usuario reservar un asiento en una sala específica y le Pide al usuario que ingrese el número de sala y el número de asiento. Si el asiento está disponible, reserva el asiento y muestra un mensaje indicando que el asiento ha sido reservado. Si el asiento ya está reservado o el número de sala no es válido, muestra un mensaje de error.
function reservarAsiento() {
  const sala = prompt("Ingresa el número de la sala (1 o 2)");
  const asiento = parseInt(prompt("Ingresa el número del asiento (1 a 10)")) - 1;

  if (sala === "1" &&!sala1[asiento]) {
    sala1[asiento] = true;
    alert(`Asiento ${asiento + 1} de la sala 1 reservado. Precio de la boleta: $7000`);
  } else if (sala === "2" &&!sala2[asiento]) {
    sala2[asiento] = true;
    alert(`Asiento ${asiento + 1} de la sala 2 reservado. Precio de la boleta: $7000`);
  } else {
    alert("El asiento ya está reservado o la sala no es válida.");
  }
}
//Esta función calcula y muestra el monto total de dinero recolectado de las ventas de entradas en ambas salas utilizando la funcion flecha reduce () para iterar sobre el arreglo de asientos y sumar el precio de la boleta para cada asiento reservado.
function verBalance() {
  const precioBoleta = 7000; // Precio de la boleta
  const totalSala1 = sala1.reduce((total, asiento) => total + (asiento? precioBoleta : 0), 0);
  const totalSala2 = sala2.reduce((total, asiento) => total + (asiento? precioBoleta : 0), 0);
  const totalGeneral = totalSala1 + totalSala2;

  alert(`Total recaudado en la sala 1: ${totalSala1}`);
  alert(`Total recaudado en la sala 2: ${totalSala2}`);
  alert(`Total general recaudado: ${totalGeneral}`);
}
//Esta función verifica si hay asientos disponibles en alguna de las salas. Si hay asientos disponibles, muestra un mensaje indicando que el usuario puede disfrutar de la película. Si no hay asientos disponibles en ninguna de las salas, muestra un mensaje indicando que no hay asientos disponibles.
function verPelicula() {
  const ocupacionSala1 = sala1.filter(asiento => asiento).length;
  const ocupacionSala2 = sala2.filter(asiento => asiento).length;

  if (ocupacionSala1 < 10) {
    alert("Hay asientos disponibles en la sala 1. Disfruta de la película!");
  } else if (ocupacionSala2 < 10) {
    alert("Hay asientos disponibles en la sala 2. Disfruta de la película!");
  } else {
    alert("No hay asientos disponibles en ninguna de las salas. Lo sentimos.");
  }
}
while (true) {
  const opcion = prompt("Ingresa tu opción:Bienvenido a la sala de cine"+ " \nSelecciona una opción:" +"1. Ver disponibilidad de asientos"+ 
  " 2. Reservar asiento"+ " 3. Ver ocupación sala" + " 4. Ver balance" + " 5. Salir" );

  switch (opcion) {
    case "1":
      verDisponibilidad();
      break;
    case "2":
      reservarAsiento();
      break;
    case "3":
      verPelicula();
      break;
    case "4":
      verBalance();
      break;
    case "5":
      alert("¡Hasta luego!");
      break;
    default:
      alert("Opción no válida. Intenta de nuevo.");
  }
}