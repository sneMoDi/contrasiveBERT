/* JavaScript: script.js */
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function toggleMenu() {
    const nav = document.getElementById('navbar');
    nav.classList.toggle('show');
  }

  document.querySelectorAll("#navbar button").forEach(btn => {
    btn.addEventListener("click", () => {
      const nav = document.getElementById("navbar");
      if (nav.classList.contains("show")) {
        nav.classList.remove("show");
      }
    });
  });

document.addEventListener("DOMContentLoaded", function () {
    const tokens = document.querySelectorAll(".token");
    const arrows = document.querySelectorAll(".arrow");
    const outputTokens = document.querySelectorAll(".output");

    function animateTokens() {
        tokens.forEach((token, index) => {
            setTimeout(() => {
                token.classList.add("fade-in");
            }, index * 500);
        });

        arrows.forEach((arrow, index) => {
            setTimeout(() => {
                arrow.classList.add("fade-in");
            }, 1500 + index * 500);
        });

        outputTokens.forEach((output, index) => {
            setTimeout(() => {
                output.classList.add("fade-in");
            }, 2500 + index * 500);
        });

        // Reset animation every 6 seconds
        setTimeout(() => {
            tokens.forEach(token => token.classList.remove("fade-in"));
            arrows.forEach(arrow => arrow.classList.remove("fade-in"));
            outputTokens.forEach(output => output.classList.remove("fade-in"));

            // Restart the animation smoothly
            setTimeout(() => {
                animateTokens();
            }, 500);
        }, 5000); // Total time before resetting
    }

    animateTokens();
});

document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".timeline-item");
    items.forEach((item, index) => {
      setTimeout(() => {
        item.style.opacity = 1;
      }, index * 400);
    });
  });


  function showLinks(topicId) {
    const containers = document.querySelectorAll('.link-container');
    containers.forEach(div => div.style.display = 'none');
    document.getElementById(topicId).style.display = 'block';
  }