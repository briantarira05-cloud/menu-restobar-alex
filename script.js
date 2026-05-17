document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Classic Menu Toggle
    const mobileBtn = document.getElementById('mobile-btn');
    const navLinks = document.getElementById('nav-links');

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('show');
            // Toggle icon between bars and times (close)
            const icon = mobileBtn.querySelector('i');
            if (navLinks.classList.contains('show')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // 2. Dynamic Gallery Injection (Only on index.html)
    const track1 = document.getElementById('track1');
    const track2 = document.getElementById('track2');

    if (track1 || track2) {
        // Selección Top 10 de las fotos más apetitosas (100% seguras)
        const baseImages = [
            "huevo-pro.jpg", "IMG_8381.jpg", "IMG_8382.jpg", "IMG_8383.jpg", 
            "IMG_8366.jpg", "IMG_8367.jpg", "IMG_8370.jpg", "IMG_8371.jpg", 
            "IMG_8372.jpg", "IMG_8373.jpg", "IMG_8374.jpg"
        ];
        
        // Repetimos para llenar la pasarela infinita
        const images = [...baseImages, ...baseImages, ...baseImages];

        const half = Math.ceil(images.length / 2);
        const firstHalf = images.slice(0, half);
        const secondHalf = images.slice(half);

        const generateHTML = (arr) => arr.map(img => `<img src="images/${img}" alt="Plato de Restobar Alex" loading="lazy">`).join('');

        if(track1) track1.innerHTML = generateHTML(firstHalf) + generateHTML(firstHalf);
        if(track2) track2.innerHTML = generateHTML(secondHalf) + generateHTML(secondHalf);
    }

    // 3. Generate QR Code (Only on contacto.html)
    const qrContainer = document.getElementById("qrcode");
    if(qrContainer) {
        // Change this to your final Vercel URL
        const websiteURL = "https://restobar-alex.vercel.app"; 
        qrContainer.innerHTML = ""; 
        
        // Generate a new QR with Black and Gold colors
        new QRCode(qrContainer, {
            text: websiteURL,
            width: 150,
            height: 150,
            colorDark : "#000000", // Black code
            colorLight : "#f4c025", // Gold background
            correctLevel : QRCode.CorrectLevel.H
        });
    }
});
