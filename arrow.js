class Arrow{
    constructor(x,y,angle){
       
        var options = {
            friction:0.001,
            stiffness:0.05
           
        }
        this.body = Bodies.rectangle(x,y,20,5,options);
        this.width = 20;
        this.height = 5;
        World.add(world,this.body);
        this.image = loadImage("arrow.png");
    }
    display(){
        
        if(this.body.position.x>900 && this.body.position.x<1344&&this.body.position.y>380 && this.body.position.y <580)
        {
            if(this.body.position.x>=900&&this.body.position.x<=1100 && this.body.position.y>=464&&this.body.position.y<=493 ){
               if(flag==0){
                points+=10;
                flag = 1;
                }
              }
              if(this.body.position.x>900&&this.body.position.x<1100&&this.body.position.y>451&&arrow1.body.position.y<462||
                this.body.position.y>496&&arrow1.body.position.y<505){
                if(flag==0){
                    points+=9;
                    flag = 1;
                    }
             }
             if(this.body.position.x>900 &&this.body.position.x<1100 && this.body.position.y> 506 && this.body.position.y<520||
                this.body.position.y>436&&arrow1.body.position.y<450){
                if(flag==0){
                    points+=8;
                    flag = 1;
                    }
             }
             if(this.body.position.x>900&&this.body.position.x<1100&& this.body.position.y>423&& this.body.position.y<437||
                this.body.position.y>519&&arrow1.body.position.y<533){
                if(flag==0){
                    points+=7;
                    flag = 1;
                    }
                    
                }
                
                if(this.body.position.x>900&&this.body.position.x<1100&& this.body.position.y>400&& this.body.position.y<424||
                    this.body.position.y>533&&arrow1.body.position.y<555){
                    if(flag==0){
                        points+=6;
                        flag = 1;
                        }
            
                    }
             
       // console.log(this.body.position.x);
            this.body.isStatic=true;
        }
        else
            {
                this.body.isStatic=false;
            }
        var angle = this.body.angle;
        rectMode(CENTER);
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        image(this.image,0,0,100,10);
        pop();
    }
}