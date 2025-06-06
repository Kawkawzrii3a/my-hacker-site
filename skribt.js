// Matrix effect
var c = document.getElementById("matrix");
var ctx = c.getContext("2d");

// full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

var letters = "アァイィウヴエェオカガキギクグケゲコゴサザシジスズセゼソゾタダチッヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモヤユヨラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
letters = letters.split("");

var fontSize = 12;
var columns = c.width / fontSize;
var drops = [];

for (var x = 0; x < columns; x++) drops[x] = 1;

function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "#0F0";
    ctx.font = fontSize + "px arial";

    for (var i = 0; i < drops.length; i++) {
        var text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > c.height && Math.random() > 0.975)
            drops[i] = 0;

        drops[i]++;
    }
}

setInterval(draw, 33);
