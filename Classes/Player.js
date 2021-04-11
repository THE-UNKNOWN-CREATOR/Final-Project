class Player extends Character
{
    constructor(x, y)
    {
        var s = "red";
        super(x, y, 20, 20, s);
        this.life = 3;
    }

    camFol()
    {
        camera.position.x = this.sprite.x;
        camera.position.y = this.sprite.y;

        if(this.sprite.y > 800){
            this.life--;
            Rewind();
        }

        if(this.life < 0){
            fill(255, 0, 0);
            text("You Died", 200, 100);
            this.sprite.destroy();
            var but = createButton("Restart");
            but.position(width/2, height/2);
            but.mousePressed(function(){
                setup();
                removeElements();
            })
        }
    }

    move(val)
    {
        if(!this.dead)
            if(keyIsDown(RIGHT_ARROW))
                this.sprite.velocityX = val;
            else
            if(keyIsDown(LEFT_ARROW))
                this.sprite.velocityX = -val;
            else
                this.sprite.velocityX = 0;
    }

    jump()
    {
        if(this.jumpy < this.time && key == " " && !this.dead)
        {
            this.sprite.velocityY = -5;
            this.jumpy++;
        }
    }

    changeColor(r)
    {
        this.c = r;
        this.sprite.shapeColor = this.c;
    }

    teleport(x, y){
        player.sprite.x = x;
        player.sprite.y = y;
    }
}