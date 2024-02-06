function submitText(){
    var userText = document.querySelector("#userText").value;

    var futureDate = new Date(userText);
    var presentDate = new Date();

    var diff = (futureDate - presentDate)/1000;
    var button = document.querySelectorAll(".timeCount");
    if(diff<0){
        button[0].value = 0;
        button[1].value = 0;
        button[2].value = 0;
        button[3].value = 0;
        
        return;
    } 

    button[0].value = Math.floor((diff)/(24*3600));
    button[1].value = Math.floor((diff)/(3600)%24);
    button[2].value = Math.floor((diff/60)%60);
    button[3].value = Math.floor((diff)%60);
}

setInterval(() => {
    submitText();
}, 1000);

