window.onload = function(){
    var img = document.getElementById("neko");
    var count = document.getElementById("score");
    var score = 0;
    var audio = new Audio('pop.mp3');

    // click event
    document.body.addEventListener("keydown", function(){
        score++;
        count.innerHTML = score;
        img.src = 'open.png';
        audio.load();
        audio.play();
        audio.volume = 0.3;
    });

    document.body.addEventListener("keyup", function(){
        img.src = 'close.png';
    });

    document.body.addEventListener("mousedown", function(){
        score++;
        count.innerHTML = score;
        img.src = 'open.png';
        audio.load();
        audio.play();
        audio.volume = 0.3;
    });
    
    document.body.addEventListener("mouseup", function(){
        img.src = 'close.png';
    });
}
