(function initAvatar() {
  document.body.insertAdjacentHTML('afterbegin', 
  `<style>

    .avatar {
        font-size: 16px;
        width: 3em;
        height: 3em;
        border-radius: 50%;
        color: #FFF;
        background-color: #E93B81;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }

    .avatar::after {
        content: attr(data-label);
        font-family: sans-serif;
    }

  </style>`);
})()

const avatars = document.querySelectorAll('.avatar');

avatars.forEach(avatar => {
    const charCodeRed = avatar.dataset.label.charCodeAt(0);
    const charCodeGreen = avatar.dataset.label.charCodeAt(1) || charCodeRed;
    
    const red = Math.pow(charCodeRed, 7) % 200; // To avoid colliding with font-color
    const green = Math.pow(charCodeGreen, 7) % 200; // To avoid colliding with font-color
    const blue = (red + green) % 200; // To avoid colliding with font-color

    avatar.style.background = `rgb(${red}, ${blue}, ${green})`;
})