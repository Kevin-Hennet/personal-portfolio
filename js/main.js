document.addEventListener("DOMContentLoaded", function() {
    const nameEl = document.querySelector(".name");
    const fullText = nameEl.textContent;  // grab text before clearing
    nameEl.textContent = "";              // clear it
    let index = 0;

    function type() {
        if (index < fullText.length) {
            nameEl.textContent += fullText.charAt(index);
            index++;
            let delay = fullText.charAt(index - 1) === ',' ? 300 : 100;
            setTimeout(type, delay);
        }
    }

    type(); // kick it off
});

