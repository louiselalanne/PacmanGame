var pacman, fantasma, obstaculo1, obstaculo2, obstaculo3;
var pills, pontos, edges;
var pacmananime, fantasmaanime, obsanime1, obsanime2, obsanime3,obsanime4;
var TotPontos = 0;
var pontuacao = 0;
var ComerPontos = 0;
var numpontos,x_coor,y_coor;

function criarpontos(numpontos,x_coor,y_coor) {
    for (var i=0; i< numpontos; i++)
  {
    pontos = createSprite(x_coor+20*i,y_coor,5,5);
    pontos.shapeColor="orange";
    pills.add(pontos);
    TotPontos++;
  }
  }

function setup(){

  //criando o pacman e o fantasma
  pacman = createSprite(20, 20);
  pacman.addAnimation('pacmananime', "pacman1.png","pacman6.png");
  pacman.scale = 0.12;
  pacman.setCollider('circle',0,0,100);

  fantasma = createSprite(380, 20);
  fantasma.addAnimation("fantasmaanime", "fantasma.png");
  fantasma.scale = 0.13;

  //criando obstáculos
  obstaculo1 = createSprite(195,76);
  obstaculo1.addAnimation("obsanime1","obstaculo1.png");
  obstaculo1.scale = 1.7;
  obstaculo2 = createSprite(195,250);
  obstaculo2.addAnimation("obsanime2", "obstaculo2.png");
  obstaculo2.scale = 0.26;
  obstaculo3 = createSprite(100,250);
  obstaculo3.addAnimation("obsanime3", "obstaculo3.png");
  obstaculo3.scale = 0.5;
  obstaculo4 = createSprite(300,250);
  obstaculo4.addAnimation("obsanime4","obstaculo3.png");
  obstaculo4.scale = 0.5;
      
  //criando pontos comprimidos
  pills = new Group();

  //criando a primeira linha de pontos
  criarpontos(16,50,30);
  //criando a segunda linha de pontos
  criarpontos(16,50,120);
  //criando a 3ª linha de pontos
  criarpontos(6,50,180);
  //criando a 4ª linha de pontos
  criarpontos(6,245,180);
  //criando a 5ª linha de pontos
  criarpontos(6,50,330);
  //criando a 6ª linha de pontos
  criarpontos(6,245,330);
  //criar bordas
  edges = createEdgeSprites();    
  

}



function draw()
{ 
  background("black");
  //Sprite Navegando e Fantasma
  //Seta para a esquerda para mover o pacman para a esquerda
  if (keyIsDown(LEFT_ARROW))
  {
    pacman.setSpeedAndDirection(5,180);
    pacman.rotation = 180;
    if (pacman.x <fantasma.x)
    {
      fantasma.setSpeedAndDirection(5, 180);
    }
    if (pacman.x >fantasma.x)
    {
      fantasma.setSpeedAndDirection(5, 360);
    }
  }
  //Seta para a direita para mover o pacman para a direita
  if (keyIsDown(RIGHT_ARROW))
  {
    pacman.setSpeedAndDirection(5,360);
    pacman.rotation = 360;
    //Se o pacman está atrás do fantasma, o fantasma vai em direção a ele
    if (pacman.x <fantasma.x)
    {
      fantasma.setSpeedAndDirection(5, 180);
    }
    //Se o pacman está à frente do fantasma, o fantasma vai em direção a ele
    if (pacman.x >fantasma.x)
    {
      fantasma.setSpeedAndDirection(5, 360);
    }
  }
  //seta para cima para mover o pacman para cima
  if (keyIsDown(UP_ARROW))
  {
    pacman.setSpeedAndDirection(5,270);
    pacman.rotation = 270;
    if (pacman.y <fantasma.y)
    {
      fantasma.setSpeedAndDirection(5, 270);
    }
    if (pacman.y >fantasma.y)
    {
      fantasma.setSpeedAndDirection(5, 90);
    }
  }
  //seta para baixo para mover o pacman para baixo
  if (keyIsDown(DOWN_ARROW))
  {
    pacman.setSpeedAndDirection(5,90);
    pacman.rotation = 90;
    if (pacman.y <fantasma.y)
    {
      fantasma.setSpeedAndDirection(5, 270);
    }
    if (pacman.y >fantasma.y)
    {
      fantasma.setSpeedAndDirection(5, 90);
    }
  }
  // verificar se o pacman está tocando nos pontos
  for (var i = 0;i<TotPontos;i++){
    if (pills.get(i) != undefined && pills.get(i).isTouching(pacman))
    {
      pills.get(i).destroy();
      pontuacao = pontuacao + 50;
      ComerPontos++;
      //playSound("Apple-Bite.mp3", false);
    }
  }
  //mostrar pontuação na tela  
  fill("orange");
  text(pontuacao,20,20);
 
  if ( ComerPontos== TotPontos){
    var sucesso = createSprite(200,200);
    sucesso.addAnimation("ganhou", "voceganhou.png");
    sucesso.scale = 1;
    pacman.destroy();
    fantasma.destroy();
  }
  
    pacman.collide(obstaculo1);
    pacman.collide(obstaculo2);
    pacman.collide(obstaculo3);
    pacman.collide(obstaculo4);

  if (fantasma.isTouching(pacman)) 
  {
    pacman.destroy();
    fantasma.destroy();
    var fimDeJogo = createSprite(200, 200);
    fimDeJogo.addAnimation("perdeu","fimdejogo.png");
  }
  if (fantasma.isTouching(edges))
  {
    fantasma.bounceOff(edges);
  }
  if (fantasma.isTouching(obstaculo1))
  {
    fantasma.bounceOff(obstaculo1);
  }
  if (fantasma.isTouching(obstaculo2))
  {
   fantasma.bounceOff(obstaculo2);
  }
  if (fantasma.isTouching(obstaculo3))
  {
    fantasma.bounceOff(obstaculo3);
  }
  if (fantasma.isTouching(obstaculo4))
  {
    fantasma.bounceOff(obstaculo4);
  }
  //reposicionar pacman na tela
  if (pacman.isTouching(edges))
  {
    if (pacman.x > 400)
    {
      pacman.x = 20;
    }
    if (pacman.x < 0)
    {
      pacman.x = 380;
    }
    if (pacman.y > 400)
    {
      pacman.y = 20;
    }
    if (pacman.y < 0)
    {
      pacman.y = 380;
    }
  }
  
  drawSprites();
}
