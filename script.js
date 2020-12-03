let html            = "";
//JS Animation for the Drop Down
$('.dropdownText').hide();

const $dropBtn = $('.dropBtn');

$dropBtn.click(function(){
	
	const $btn = $(this);
	const $liText = $(this).next();
	
	if($liText.is(':visible')){
		$btn.text('Show Me');	
	}else{
		$btn.text('Hide Me');
	};
	
	$liText.slideToggle(500);
	$btn.parent().toggleClass('highlight');
		
});
//Dice Game 

class Dice{
    side = 0;
    roll(){
        this.side = Math.floor(Math.random() * 6) + 1; 
    }
}
let score = "";

class Player{
    constructor(name){
        this.name = name;
        this.playerSet = [new Dice(), new Dice()];
    }
    roll(){
        $.each(this.playerSet, function(i, dice){
            dice.roll();
        });
        this.score();
    }
    score(){
        if(this.playerSet[0].side === 1 || this.playerSet[1].side){
            this.total = 0;
        }else if(this.playerSet[0].side === this.playerSet[1].side){
            this.total = (playerSet[0].side + playerSet[1].side) * 2;
        }else{
            this.total = playerSet[0].side + playerSet[1].side;
        }
    }
}
let players = [];

players.push(new Player("You"));
players.push(new Player("Opponent"));


$('#startBtn').click(function(){
    $.each(players, function(i, player){
        player.roll();
    });
    document.getElementById("myDice1").src = "images/d" + players[0].playerSet[0].side + ".jpeg";
    document.getElementById("myDice2").src = "images/d" + players[0].playerSet[1].side + ".jpeg";
    document.getElementById("theirDice1").src = "images/d" + players[1].playerSet[0].side + ".jpeg";
    document.getElementById("theirDice2").src = "images/d" + players[1].playerSet[1].side + ".jpeg";

    $('#score0').text(players[0].playerSet[0].side + players[0].playerSet[1].side);
    $('#score1').text(players[1].playerSet[0].side + players[1].playerSet[1].side);
    $('#current0').text(players[0].playerSet[0].side + players[0].playerSet[1].side);
    $('#current1').text(players[1].playerSet[0].side + players[1].playerSet[1].side);

});

$('#stopBtn').click(function(){
    document.getElementById("myDice1").src = "images/d1.jpeg";
    document.getElementById("myDice2").src = "images/d1.jpeg";
    document.getElementById("theirDice1").src = "images/d1.jpeg";
    document.getElementById("theirDice2").src = "images/d1.jpeg";

    $('#score0').text("-");
    $('#score1').text("-");
    $('#current0').text("-");
    $('#current1').text("-");
});