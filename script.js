// Sakura animation script
function createSakura() {
    const container = document.querySelector('.sakura-container');
    const sakura = document.createElement('div');
    sakura.classList.add('sakura', `flower${Math.floor(Math.random() * 4) + 1}`);
    sakura.style.left = Math.random() * 100 + 'vw';
    sakura.style.animationDuration = Math.random() * 3 + 2 + 's';
    sakura.style.backgroundColor = ['#FF9933', '#00008B', '#138808', '#7C00FE'][Math.floor(Math.random() * 4)];
    container.appendChild(sakura);
    setTimeout(() => {
        sakura.remove();
    }, 5000);
}

// Add sakura petals every 300 milliseconds
setInterval(createSakura, 300);
