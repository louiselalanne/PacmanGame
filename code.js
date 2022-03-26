var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["8b726675-f54b-47c1-8cf2-5858254cd055","a5df0ce1-2280-4dc4-a925-0e4ea3c56112","ebca0a39-001c-4105-8995-f695fc90cc5a","161555aa-be77-4777-9fc7-906086f43b95","79b5943d-f92a-4d84-958a-5171d7641d12","53254542-d08d-4ee3-949d-28f3ce1856a2","8b773162-580e-41b1-b3d2-2f67c54327cd","c1d2f319-637d-45cf-9277-c9b8f593b1f7"],"propsByKey":{"8b726675-f54b-47c1-8cf2-5858254cd055":{"name":"fimdejogo.png_1","sourceUrl":null,"frameSize":{"x":187,"y":93},"frameCount":1,"looping":true,"frameDelay":12,"version":"oYEl_.ihwQvtz_IDrjIt4Vw5Lw.cjpmL","loadedFromSource":true,"saved":true,"sourceSize":{"x":187,"y":186},"rootRelativePath":"assets/8b726675-f54b-47c1-8cf2-5858254cd055.png"},"a5df0ce1-2280-4dc4-a925-0e4ea3c56112":{"name":"Voceganhou.png_1","sourceUrl":null,"frameSize":{"x":171,"y":123},"frameCount":1,"looping":true,"frameDelay":12,"version":"klFwsa2zVb_1NhJlb2HMvQmaDINKIJWx","loadedFromSource":true,"saved":true,"sourceSize":{"x":171,"y":123},"rootRelativePath":"assets/a5df0ce1-2280-4dc4-a925-0e4ea3c56112.png"},"ebca0a39-001c-4105-8995-f695fc90cc5a":{"name":"fantasma","sourceUrl":null,"frameSize":{"x":512,"y":492},"frameCount":1,"looping":true,"frameDelay":12,"version":"TK6u8mDYAPDOLCx3jNlnxPA2mpupRfdJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":492},"rootRelativePath":"assets/ebca0a39-001c-4105-8995-f695fc90cc5a.png"},"161555aa-be77-4777-9fc7-906086f43b95":{"name":"pacman","sourceUrl":null,"frameSize":{"x":140,"y":140},"frameCount":6,"looping":true,"frameDelay":1,"version":"azSlNPxfJ81jILaxp7dV1ZkpMtP98Nl_","loadedFromSource":true,"saved":true,"sourceSize":{"x":280,"y":420},"rootRelativePath":"assets/161555aa-be77-4777-9fc7-906086f43b95.png"},"79b5943d-f92a-4d84-958a-5171d7641d12":{"name":"voceganhou","sourceUrl":null,"frameSize":{"x":454,"y":336},"frameCount":1,"looping":true,"frameDelay":12,"version":"Q3sXawGYZvMuW4F6LNyNGQkJJcTNlXCG","loadedFromSource":true,"saved":true,"sourceSize":{"x":454,"y":336},"rootRelativePath":"assets/79b5943d-f92a-4d84-958a-5171d7641d12.png"},"53254542-d08d-4ee3-949d-28f3ce1856a2":{"name":"obstaculo","sourceUrl":"assets/v3/animations/rdehWjgdm_M7xHWOIendp8PZecZ_eVXSyMkYgSHiNUA/53254542-d08d-4ee3-949d-28f3ce1856a2.png","frameSize":{"x":302,"y":46},"frameCount":1,"looping":true,"frameDelay":4,"version":"V74yqMCfaidN6_RqdJ8JmVuRhExy93yS","loadedFromSource":true,"saved":true,"sourceSize":{"x":302,"y":46},"rootRelativePath":"assets/v3/animations/rdehWjgdm_M7xHWOIendp8PZecZ_eVXSyMkYgSHiNUA/53254542-d08d-4ee3-949d-28f3ce1856a2.png"},"8b773162-580e-41b1-b3d2-2f67c54327cd":{"name":"obstaculo_2","sourceUrl":"assets/v3/animations/rdehWjgdm_M7xHWOIendp8PZecZ_eVXSyMkYgSHiNUA/8b773162-580e-41b1-b3d2-2f67c54327cd.png","frameSize":{"x":47,"y":203},"frameCount":1,"looping":true,"frameDelay":4,"version":"c_c4.Vs_cODHUzxFChHzpKupkYbLZMK8","loadedFromSource":true,"saved":true,"sourceSize":{"x":47,"y":203},"rootRelativePath":"assets/v3/animations/rdehWjgdm_M7xHWOIendp8PZecZ_eVXSyMkYgSHiNUA/8b773162-580e-41b1-b3d2-2f67c54327cd.png"},"c1d2f319-637d-45cf-9277-c9b8f593b1f7":{"name":"obstaculo_3","sourceUrl":"assets/v3/animations/rdehWjgdm_M7xHWOIendp8PZecZ_eVXSyMkYgSHiNUA/c1d2f319-637d-45cf-9277-c9b8f593b1f7.png","frameSize":{"x":93,"y":93},"frameCount":1,"looping":true,"frameDelay":4,"version":"L62QdZD9nIG7xr4vZ3ajdv8gA38IEoCg","loadedFromSource":true,"saved":true,"sourceSize":{"x":93,"y":93},"rootRelativePath":"assets/v3/animations/rdehWjgdm_M7xHWOIendp8PZecZ_eVXSyMkYgSHiNUA/c1d2f319-637d-45cf-9277-c9b8f593b1f7.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//criando o pacman e o fantasma
var pacman = createSprite(20, 20);
pacman.setAnimation("pacman");
pacman.scale = 0.15;
var fantasma = createSprite(380, 20);
fantasma.setAnimation("fantasma");
fantasma.scale = 0.04;
background("black");
//Criando Obstáculos
var obstaculo1 = createSprite(195,76);
obstaculo1.setAnimation("obstaculo");
var obstaculo2 = createSprite(195,250);
obstaculo2.setAnimation("obstaculo_2");
var obstaculo3 = createSprite(100,250);
obstaculo3.setAnimation("obstaculo_3");
var obstaculo4 = createSprite(300,250);
obstaculo4.setAnimation("obstaculo_3");
//Criando pontos comprimidos
var pills = createGroup();
var pontos;
var TotPontos = 0;
var pontuacao = 0;
var ComerPontos = 0;
function criarpontos(numpontos,x_coor,y_coor) {
  for (var i=0; i< numpontos; i++)
{
  pontos = createSprite(x_coor+20*i,y_coor,5,5);
  pontos.shapeColor="orange";
  pills.add(pontos);
 TotPontos++;
}
}
//Criando primeira linha de pontos
criarpontos(16,50,30);
//Criando segunda linha de pontos
criarpontos(16,50,120);
//Criando 3ª linha de pontos
criarpontos(6,50, 180);
//Criando 4ª linha de pontos
criarpontos(6,245,180);
//Criando 5ª linha de pontos
criarpontos(6,50,330);
//Criando 6ª linha de pontos
criarpontos(6,245,330);
createEdgeSprites();
function draw(){ 
  background("black");
  //Seta esquerda para mover o pacman para a esquerda
  if (keyDown("left"))
  {
    pacman.setSpeedAndDirection(5,180);
    pacman.rotation = 180;
    if (pacman.x<fantasma.x){
      fantasma.setSpeedAndDirection(5, 180);
    }
    if (pacman.x>fantasma.x){
      fantasma.setSpeedAndDirection(5, 360);
    }
  }
  //Seta direita para mover o pacman para a direita
  if (keyDown("right"))
  {
    pacman.setSpeedAndDirection(5,360);
    pacman.rotation = 360;
    if (pacman.x < fantasma.x) {
      fantasma.setSpeedAndDirection(5, 180);
    }
    if (pacman.x > fantasma.x) {
      fantasma.setSpeedAndDirection(5, 360);
    }
  }
  //seta para cima para mover o pacman para cima
  if (keyDown("up"))
  {
    pacman.setSpeedAndDirection(5,270);
    pacman.rotation = 270;
    if (pacman.y < fantasma.y) {
      fantasma.setSpeedAndDirection(5, 270);
    }
    if (pacman.y > fantasma.y) {
      fantasma.setSpeedAndDirection(5, 90);
    }
  }
  //seta para baixo para mover o pacman para baixo
  if (keyDown("down"))
  {
    pacman.setSpeedAndDirection(5,90);
    pacman.rotation = 90;
    if (pacman.y < fantasma.y) {
      fantasma.setSpeedAndDirection(5, 270);
    }
    if (pacman.y > fantasma.y) {
      fantasma.setSpeedAndDirection(5, 90);
    }
  }
  
 
  for (var i = 0; i < TotPontos; i++) {
    if (pills.get(i) != undefined && pills.get(i).isTouching(pacman)) {
      pills.get(i).destroy();
      pontuacao = pontuacao+50;
      ComerPontos++;
    }
  }
  fill("orange");
  text(pontuacao, 20, 20);
  if (ComerPontos == TotPontos) {
  var sucesso = createSprite(200,200);
  sucesso.setAnimation("voceganhou");
  sucesso.scale = 0.5;
  pacman.destroy();
  }
  pacman.collide(obstaculo1);
  pacman.collide(obstaculo2);
  pacman.collide(obstaculo3);
  pacman.collide(obstaculo4);
  if (pacman.isTouching(fantasma)) {
    pacman.destroy();
    fantasma.destroy();
    var v = createSprite(200, 200);
    v.setAnimation("fimdejogo.png_1");
  }
  if (fantasma.isTouching(edges)) {
   fantasma.bounceOff(edges);
  }
  if (fantasma.isTouching(obstaculo1)) {
   fantasma.bounceOff(obstaculo1);
  }
  if (fantasma.isTouching(obstaculo2)) {
   fantasma.bounceOff(obstaculo2);
  }
  if (fantasma.isTouching(obstaculo3)) {
   fantasma.bounceOff(obstaculo3);
  }
  if (fantasma.isTouching(obstaculo4)) {
   fantasma.bounceOff(obstaculo4);
  }
  if (pacman.isTouching(edges)) {
    if (pacman.x > 400) {
      pacman.x = 0;
    }
    if (pacman.y > 400) {
      pacman.y = 0;
    }
    if (pacman.x < 0) {
      pacman.x = 400;
    }
    if (pacman.y < 0) {
      pacman.y = 400;
    }
  }
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
