var words = ["Communities form\nas we circulate our thoughts and ideas\n online.",
"Identities represented\n in memes are fluid.",
"We contain multitudes.\nOuridentities can be as multiple as\n the online platforms that we use.",
"We appropriate ourselves\n by redefining our identities online.",
"love", "We are more likely to \nfind a group we belong to online \nthan offline.\Algorithm > Probability IRL",
"404",
"As we glitch, we reject the binary.",
"Glitches expose the underlying binary system.",
"Hashtags.",
"We declare ourselves 4ever free online.",
"Internet is not a Utopia. We glitch to create a Utopia."
];

var index = 0;
var a;
var g;
var b;
var r;
var x;
var y;
var size;
var r1;
var g1;
var b1;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(10);
  textSize(100);
  r = random(100);
  g = random (255);
  b = random(255);
  a = random (200, 255);
  fill(r, g, b, a);
  textSize(100);
  text("Hello, World_", (width/2) - 50, height/2);
  fill(r1, g1, b1, 255);
  textSize(30);
  text(words[index], x , y);
}

function mouseClicked() {
  index = floor(random(words.length));
  console.log(index);

  if (index == words.length) {
    index = 0;
  }
  x = random(10, width * 0.6);
  y = random(60, height* 0.65);

  r1 = random (100, 220);
  g1 = random (100, 255);
  b1 = random (100, 255);
}


function windowResized() {
   resizeCanvas(windowWidth, windowHeight);
  }
