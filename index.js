
const express = require('express');
const app = express();
const port = 5000;

// vertel gebruik maken van viewengine en welke EJS
app.set("views", "views");
app.set("view engine", "ejs");

// vertel aan webserver waar publieke best zitten = bestanden die gebruiker mag gebruiken afb lettertyp etc
app.use(express.static('public'));
// webserver luister naar GET-commando van homepagina

const kunstwerken =  require('./data/musea.json')

app.get("/", function(request, response){
response.render("home", {
    works: kunstwerken.archief
  });
});


app.get("/contact", function(request, response){
  response.render("contact");
});


app.get("/collectie", function(request, response){
  response.render("collectie", {
    works: kunstwerken.archief
  });
});


app.get("/collectie/:workid", function(request, response) {
  response.render('detail', {
    work: kunstwerken.archief[request.params.workid]
  });
});



app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'));
// luister op poort
/*app.listen(port,function(){
console.log('luister op poort: '+ port);
}); */
