

const denominations = [50000,20000,10000,5000, 2000, 1000];
//Esta función solicita al usuario que ingrese el monto de dinero que desea retirar y devuelve el monto ingresado como un número flotante.
function getWithdrawalAmount() {
  const userInput = prompt("¿Cuánto dinero deseas retirar  ?");
  return parseFloat(userInput);
}
// Función que calcula utilizando un map la cantidad de billetes necesarios para el retiro 
function calculateBilletsNeeded(amount) {
  return denominations.map(denomination => {
    const billetsNeeded = Math.floor(amount / denomination);
    amount -= billetsNeeded * denomination;
    return billetsNeeded;
  });
}

// Función que verifica si el monto de retiro es válido. Para que el monto sea válido, debe ser mayor a 0 y un número entero.
function isValidWithdrawalAmount(amount) {
  return amount > 0 && amount % 1 === 0;
}
//Esta función ejecuta la transacción del cajero automático. Primero, se solicita al usuario que ingrese el monto de dinero que desea retirar. Si el monto es válido, se calcula la cantidad de billetes necesarios para cada denominación y se muestra un mensaje al usuario con la cantidad de billetes necesarios. Si el monto no es válido, se muestra un mensaje de alerta al usuario.
function ATMTransaction() {
  const withdrawalAmount = getWithdrawalAmount();

  if (!isValidWithdrawalAmount(withdrawalAmount)) {
    alert("El monto solicitado no es válido.");
    return;
  }

  const billetsNeeded = calculateBilletsNeeded(withdrawalAmount);

  alert("Para retirar $" + withdrawalAmount + ", necesitas:");
  denominations.forEach((denomination, index) => {
    if (billetsNeeded[index] > 0) {
      alert("- " + billetsNeeded[index] + " billetes de $" + denomination);
    }
  });
}


ATMTransaction();