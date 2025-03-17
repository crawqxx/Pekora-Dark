function getPics() {
    const imgs = document.querySelectorAll('.gallery img');
    const fullPage = document.querySelector('#fullpage');
    const overlay = document.querySelector('#overlay');

    imgs.forEach(img => {
        img.addEventListener('click', function() {
            fullPage.style.backgroundImage = 'url(' + img.src + ')';
            fullPage.style.display = 'block';
            overlay.style.display = 'block'; 

            fullPage.style.opacity = 0;
            fullPage.style.transform = 'translate(-50%, -50%) scale(0)';
            overlay.style.opacity = 0;

            setTimeout(() => {
                overlay.style.transition = 'opacity 0.3s ease';
                overlay.style.opacity = 1; 
            }, 50);

            setTimeout(() => {
                fullPage.style.opacity = 1;
                fullPage.style.transform = 'translate(-50%, -50%) scale(1)';
            }, 50);
        });
    });

    fullPage.addEventListener('click', function() {
        fullPage.style.opacity = 0;
        fullPage.style.transform = 'translate(-50%, -50%) scale(0)';

        setTimeout(() => {
            overlay.style.transition = 'opacity 0.3s ease';
            overlay.style.opacity = 0;
        }, 0);

        setTimeout(() => {
            fullPage.style.display = 'none';
            overlay.style.display = 'none'; 
        }, 500);
    });
}

getPics();
