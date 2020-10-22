



function returnIdle(idle,id,clas){
    document.getElementById("img"+id).innerHTML=`<img class='${clas}' src="${idle}" alt="">`;
}
function deadStill(deadStill,id,clas){
  document.getElementById("img"+id).innerHTML=`<img class='${clas}' src="${deadStill}" alt="">`
}

 
function knightAttackSound() {
    var audio = document.getElementById("knightAttack");
    audio.play();
  }

function thiefAttackSound() {
    var audio = document.getElementById("thiefAttack");
    audio.play();
  }

class Character{
  constructor(idle,att,dead,deadStill,clas,name,hp,id){
    this.name=name;
    this.hp=hp;
    this.id=id;
    this.idle=idle;
    this.clas=clas;
    this.att=att;
    this.dead=dead;
    this.deadStill=deadStill;
  }

  display = function(){

    document.getElementById("img"+this.id).innerHTML=`<img class='${this.clas}' src="${this.idle}" alt="">`;    
    document.getElementById(this.id).innerHTML=`${this.name} <br> Health: ${this.hp} <br>`;
  }

  
  attack=function (opponent,item){
    var newHp = Math.max(0,opponent.hp - item.iDamage);
    opponent.hp=newHp;
    opponent.display();
    document.getElementById("img"+this.id).innerHTML=`<img class='${this.clas}' src="${this.att}" alt="">`;
    setTimeout(returnIdle, 1600,this.idle,this.id,this.clas);
    document.getElementById("console").innerHTML+=` <br> ${this.name} attacks with ${item.iName} and deals ${item.iDamage} damage! ${item.wImg} `;
    
    
      if (opponent.hp<=70){
        document.getElementById("healthbar"+opponent.id).src="img/hp1.png";
      }
      if (opponent.hp<=30){
        document.getElementById("healthbar"+opponent.id).src="img/hp2.png";
      }
      if (opponent.hp<=0){
        document.getElementById("healthbar"+opponent.id).src="img/hpdead.png";
        document.getElementById("img"+opponent.id).innerHTML=`<img class='${opponent.clas}' src="${opponent.dead}" alt="">`
        setTimeout(deadStill, 1500,opponent.deadStill,opponent.id,opponent.clas);
        document.getElementById("console").innerHTML+=` <br> ${this.name} wins the battle!`;
        document.getElementById("win").style.display = "block";
        document.getElementById("attack1").disabled = true;
        document.getElementById("attack2").disabled = true;
      }
    
  }
  
  

}
///////////////////////////////////////////////////////stamina//hp
const c1 = new Character("img/knight/idle.gif","img/knight/attack.gif","img/knight/dead.gif","img/knight/deadStill.png","c1","Link",100,"c1");
const c2 = new Character("img/thief/idle.gif","img/thief/attack.gif","img/thief/dead.gif","img/thief/deadStill.png","c2","Thief",100,"c2");


c1.display();
c2.display();


class Item{
  constructor(iName, iDamage,wImg){
    this.iName=iName;
    this.iDamage=iDamage;
    this.wImg=wImg;
    
  }
}

const item1=new Item("Sword", 20,`<img class='weapon' src="img/Sword.png" alt=""></img>`);
const item2=new Item("Dagger",10,`<img class='weapon' src="img/Dagger.jpg" alt=""></img>`);
const item3=new Item('Rock', 5,`<img class='weapon' src="img/Rock.png" alt=""></img>`);

var items=[item1,item2,item3];

function select(){
  let selection = Math.floor(Math.random()*3)
  return items[selection];
}

window.setInterval(function() {
  var elem = document.getElementById('console');
  elem.scrollTop = elem.scrollHeight;
}, 100);


