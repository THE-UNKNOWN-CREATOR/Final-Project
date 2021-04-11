class Treasure
{
    constructor(x, y)
    {
        this.sprite = createSprite(x, y, 10, 10);
        this.sprite.addImage(tresIm);
        this.sprite.scale = 0.1
    }

    update(){
        if(this.sprite.isTouching(player.sprite)){
            this.sprite.destroy();
            clear();
            for(var i = 0; i < allSprites.length; i++){
                allSprites.get(i).destroy();
            }
            var ting = createElement("h2");
            ting.html("Kuro Found It.... \nThe Lost Treasure \n")
            ting.position(200, 100);
            noLoop();
        }
    }
}