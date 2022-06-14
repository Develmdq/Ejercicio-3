const hoy = new Date();
const nacimiento = new Date(1973, 2, 15);
const posteriorAlNacimiento = hoy > nacimiento;
const diaNacimiento = nacimiento.getDate();
const mesNacimiento = nacimiento.getMonth() + 1;
const anyoNacimiento = nacimiento.getFullYear();


console.log(hoy)
console.log(nacimiento);
console.log(posteriorAlNacimiento);
console.log(diaNacimiento);
console.log(mesNacimiento);
console.log(anyoNacimiento);
