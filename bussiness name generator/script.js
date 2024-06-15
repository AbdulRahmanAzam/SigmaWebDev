/*
bussiness name generator, which contains the 3 different different names of Adjectives, SHop Name and Another word;

Adjectives:
Crazy
Amazing
Fire

Shop name:
Engine
Foods
Garments

Another word:
Bros
Limited
Hub

*/


var Adjectives = ["Adjectives", "Amazing", "Fire"];

function Adjective(){
    var rand = Math.random() * 10;
    if(rand <= 3.33){
        return "Crazy";
    }else if(rand < 6.66 && rand > 3.33){
        return "Amazing";
    }else{
        return "Fire";
    }
};

var Shopname = ()=> {
    var rand = Math.random() * 10;
    if(rand <= 3.33){
        return "Engine";
    }else if(rand < 6.66 && rand > 3.33){
        return "Foods";
    }else{
        return "Garments";
    }
};

var AnotherWord = ()=> {
    var rand = Math.random() * 10;
    if(rand <= 3.33){
        return "Bros";
    }else if(rand < 6.66 && rand > 3.33){
        return "Limited";
    }else{
        return "Hub";
    }
};

console.log(Adjective() + " " + Shopname() + " " + AnotherWord());