/* -- Glow effect -- */

const blob = document.getElementById("blob");

window.onpointermove = event => { 
  const { clientX, clientY } = event;
  
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3000, fill: "forwards" });
}

/* -- Text effect -- */
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelectorAll("#navheader h1, #navheader h2").forEach((element) => {
  let interval = null;

  element.onmouseover = (event) => {
    let iteration = 0;
    const originalText = event.target.dataset.value;

    clearInterval(interval);

    interval = setInterval(() => {
      event.target.innerText = originalText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return originalText[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= originalText.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  };
});

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const enhance = element => {
  const text = element.innerText.split("");
  console.log(text);
  
  element.innerText = "";
  text.forEach((value, index) => {
    const outer = document.createElement("span");
    outer.className = "outer";
    const inner = document.createElement("span");
    inner.className = "inner";
    inner.style.animationDelay = `${rand(-5000, 0)}ms`;
    const letter = document.createElement("span");
    letter.className = "letter";
    letter.innerText = value;
    letter.style.animationDelay = `${index * 1000 }ms`;
    inner.appendChild(letter);    
    outer.appendChild(inner);    
    element.appendChild(outer);
  });
}

document.querySelectorAll("line1").forEach(enhance);