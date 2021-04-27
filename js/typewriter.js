var app = document.getElementById('typewriter');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Smarter Solutions')
    .pauseFor(2500)
    .deleteAll()
    .start();