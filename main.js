var canvas = new fabric.Canvas("myCanvas");

playerX = 10;
playerY = 10;

blockImgWidth = 30;
blockImgHeight = 30;

playerObject = "";
blockImgObject = "";

function player_update() {
    fabric.Image.fromURL("player.png", function(Img) {
        playerObject = Img;

        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);

        playerObject.set({
            top:playerY,
            left:playerX
        })
        canvas.add(playerObject);
    })
}

function new_image() {
    fabric.Image.fromURL(get_image, function(Img) {
        blockImgObject = Img;

        blockImgObject.scaleToWidth(blockImgWidth);
        blockImgHeight.scaleToHeight(blockImgHeight);

        blockImgObject.set({
            top:playerY,
            left:playerX
        })  
        canvas.add(blockImgObject);
    })
}