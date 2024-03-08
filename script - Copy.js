function moveButton() {
    var button = document.getElementById('noBtn');
    var newX = Math.random() * (window.innerWidth - button.clientWidth);
    var newY = Math.random() * (window.innerHeight - button.clientHeight);
    button.style.position = 'absolute';
    button.style.left = newX + 'px';
    button.style.top = newY + 'px';
}

document.getElementById('yesBtn').addEventListener('click', function() {
    document.body.innerHTML = `
        <div class="container">
            <h2>Right Answer, Now Follow Me  on Instagram</h2>
            <p>My Instagram: <a href="https://www.instagram.com/sabamekanarishvilii/" target="_blank">sabamekanarishvilii</a></p>
        </div>
    `;
});
