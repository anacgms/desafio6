let sobreMim={
        Name:"Ana Carolina",
        Age:25,
        color:"Blue"
}
sobreMim.time = "Flamengo";
delete sobreMim.color;
console.log(sobreMim)

let cadastro = [
    {
         nome: "Beatriz",
         idade: 24,
         telefone: 31091443,
         amigos: ["Mariana", "Ricardo", "Ana", "Caroline"]
     }, 
     {
         nome: "Ana",
         idade: 25,
         telefone: 3123123,
         amigos: ["Beatriz", "Leticia", "Andreia", "Bruno"]
     }, 
     {
         nome: "Caroline",
         idade: 24,
         telefone: 4342342,
         amigos: ["Juliana", "Lohanny", "Mateus", "João"]
     }, 
     {
         nome: "Vania",
         idade: 49,
         telefone: 3123123,
         amigos: ["Ana Celia", "Renata", "Vera", "Max"]
     }, 
     {
         nome: "Andreia",
         idade: 45,
         telefone: 2312312,
         amigos: ["Ana", "Jo", "Fernando", "Andressa"]
    }
 ];

 for(let contador = 0; contador < cadastro.length; contador++ ){
     console.log(cadastro[contador].amigos[contador])
 }





