class System{

    constructor(){}

    authenticate(actualCode,enteredCode){
        textSize(50);
        fill("black");
        text(code,300,300)
        if(actualCode === enteredCode.toUpperCase()) {
           console.log(enteredCode);
            return true
        }
        else{
            console.log(enteredCode);
            return false
        }
    }

}
