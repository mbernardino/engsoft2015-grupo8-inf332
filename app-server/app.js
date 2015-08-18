var express = require('express');
var app = express();
    
// Definir a route principal
app.get('/', function(req, res) {
  res.send('Welcome to API');
});

// Lista de Utilizadores
var users = [
  { id: 1, username: 'Leonardo', email: 'leonardo@tartaruga-ninja.com' },
  { id: 2, username: 'Donatello', email: 'donatello@tartaruga-ninja.com' },
  { id: 3, username: 'Michelangelo', email: 'Michelangelo@tartaruga-ninja.com' },
  { id: 4, username: 'Raphael', email: 'raphael@tartaruga-ninja.com' }

];

// Definir um endpoint da API
app.get('/api/get_users', function(req, res, next) {
  res.send(users);
})

// Aplicação disponível em http://127.0.0.1:9000/
app.listen(3000);
console.log("Server on!");
