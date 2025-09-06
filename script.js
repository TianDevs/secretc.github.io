const introText = `Hello beeebbbb!! 🤗🤗
  
As i promise beb sunday ko sasabihin, so this is it.
Beb before you read it po wear your airpods po and 
gawin mo pong 30% volume yung laptop para po hindi
gano kalakas yung sound sa airpods mo. Click mo po
open messege beb kasi you can't say no naman hehe.`;

let i = 0;

function revealMessage() {
  document.querySelector(".btn").style.display = "none";
  const messageEl = document.getElementById("confession");
  messageEl.style.display = "block";
  typeWriterIntro();
}

function typeWriterIntro() {
  if (i < introText.length) {
    document.getElementById("confession").innerHTML += introText.charAt(i);
    i++;
    setTimeout(typeWriterIntro, 50);
  } else {
    document.getElementById("choices").style.display = "block";
  }
}

function sayYes() {
  document.getElementById("choices").style.display = "none";
  document.getElementById("confession").style.display = "none";

  document.getElementById("msgIcon").style.display = "block";
}

function openFrame() {
    document.getElementById("confessionFrame").style.display = "flex";
    const longMsg = `Before I start, I just want to say that I hope your day is as beautiful as you are. I also hope you ate your breakfast na, hehe. I chose this blue theme because I know it’s your favorite color, and I’ll send this to you at 2 AM since that’s one of your favorite number. 💖

    Hello beb, honestly, I don’t even know where to begin, huhu. I know it might be hard to believe what I’m about to say since we’ve never met in person even once, but after these 4 months of talking, I feel like that’s already enough for me to be honest about what I truly feel for you. Beb, you’ve become a big part of my everyday life. Your “goodmornings” and “goodnights” have become so special to me something I look forward to every single day.

    Beb, umm I genuinely like you. Yes, AAAARRRGGGHHHH. I still remember the moment I started falling for you. At first, I kept denying it to myself, but then I caught myself smiling, realizing I was thinking about you. Since then, my feelings for you just kept growing stronger each day.

    To be honest, at first, I tried holding back, but maybe I shouldn’t have. Ang hirap mo kasi landiin, beb, HAHAHA. Ang bilis mo pa naman ma-off lalo na kapag sa lalaki. But still, I admire you from afar, and I really, really like your humor. I feel like we have so much in common, and I can already imagine all the fun and amazing things we could do together.

    And you know what makes it even more special? Yung mga simpleng bagay natin. Like when we spend hours on calls together, updating each other about our day, playing games, laughing together, talking for the whole day about random things, and even ranting about our bad days. Those little moments made me realize how much I enjoy having you in my life. It feels like kahit gaano ka-busy or ka-stressful yung araw, everything becomes lighter when I’m talking to you.

    Sometimes I think to myself, “How can someone I haven’t even met in person make me this happy?” It’s funny and cringe at the same time but it’s true. Every time I hear your voice, every time you laugh at my jokes, every time you share something personal with me, I feel closer to you. Parang unti-unti, you’re becoming my safe space someone I can run to when I need comfort, someone I can open up to without fear of being judged.

    I also love how we can be silly together, how we can talk about the most random things, and still never run out of topics. I like how you share your stories with me, even your rants and bad days, because it shows you trust me enough to let me in. And that means a lot to me, beb. More than you know.

    Sometimes, when you’re hungry, I always wish I could be the one to buy food for you. Pero paano? Maybe I could order via Grab, but I don’t even know your exact address. I totally understand why you reject my offers, though I know it’s because you’re shy. But deep inside, I really want to be that person who takes care of you in little ways.

    Beb, I know this might come as a surprise to you, but I just want you to know that everything I feel is true. You’ve made such a big impact on my life in just a few months, and I can’t imagine my days without you anymore. I don’t need fancy words or anything grand to prove it I just need you to know that you’re really special to me.

    So here I am, taking the risk of being vulnerable and honest. I don’t know what your answer will be, but what I do know is that my feelings for you are real. And if you’ll let me, I want to be the one who makes you smile every day, the one you can lean on through good times and bad. That's all po. Goodnight beb. Have a sleep well and sweet dreams 💗💗💗.
    `;
  
    document.getElementById("longConfession").innerText = longMsg;

  // Play music
  const music = document.getElementById("bgMusic");
  music.currentTime = 0; // start at beginning
  music.play();
}

function closeFrame() {
  document.getElementById("confessionFrame").style.display = "none";

  // Pause music
  const music = document.getElementById("bgMusic");
  music.pause();
}

function moveNo() {
  const noBtn = document.getElementById("noBtn");
  const container = document.querySelector(".container");

  noBtn.style.position = "absolute";

  const containerRect = container.getBoundingClientRect();

  const x = Math.random() * (containerRect.width - noBtn.offsetWidth - 20);
  const y = Math.random() * (containerRect.height - noBtn.offsetHeight - 20);

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}, 500);
