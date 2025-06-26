document.addEventListener('DOMContentLoaded', () => {
    // Typing Effect for Hero Section
    const typingElement = document.querySelector('.typing-effect');
    if (typingElement) {
        const textToType = typingElement.getAttribute('data-text');
        typingElement.textContent = ''; // Clear initial text
        let i = 0;
        let isDeleting = false;
        let charIndex = 0;
        const speed = 70; // Typing speed in ms
        const deleteSpeed = 40; // Deleting speed in ms
        const pauseBetweenWords = 1000; // Pause before typing next word

        function typeWriter() {
            const currentText = textToType.substring(0, charIndex);
            typingElement.textContent = currentText;

            if (!isDeleting && charIndex < textToType.length) {
                charIndex++;
            } else if (isDeleting && charIndex > 0) {
                charIndex--;
            }

            if (!isDeleting && charIndex === textToType.length) {
                // If you want it to delete and retype, enable this:
                // isDeleting = true;
                // setTimeout(typeWriter, pauseBetweenWords);
                // If you want it to type once and stop, do nothing:
                return;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                i++; // Go to next phrase (if you have multiple phrases in data-text)
                setTimeout(typeWriter, pauseBetweenWords);
            }

            const currentTypingSpeed = isDeleting ? deleteSpeed : speed;
            setTimeout(typeWriter, currentTypingSpeed);
        }
        typeWriter();
    }

    // Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger-menu');
    const navList = document.querySelector('.nav-list');

    if (hamburger && navList) {
        hamburger.addEventListener('click', () => {
            navList.classList.toggle('active');
            hamburger.classList.toggle('open'); // Optional: for animating hamburger icon
        });

        // Close menu when a link is clicked (for single-page navigation)
        navList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navList.classList.contains('active')) {
                    navList.classList.remove('active');
                    hamburger.classList.remove('open');
                }
            });
        });
    }

    // Dynamic Copyright Year
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Smooth Scrolling for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
 // --- LOGIKA KIRIM PESAN KE WHATSAPP ---
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah form untuk refresh halaman

            // Ambil nilai dari input form
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Nomor WhatsApp tujuan (ganti dengan nomor Anda, termasuk kode negara tanpa + atau 00)
            const whatsappNumber = '622219508488'; // Contoh: Ganti dengan nomor WhatsApp Anda (misal: 62812xxxxxxxxx)

            // Buat pesan yang akan dikirim ke WhatsApp
            // Gunakan encodeURIComponent untuk memastikan teks aman di URL
            const whatsappMessage = `Halo, saya ${encodeURIComponent(name)} (${encodeURIComponent(email)}).%0A%0A${encodeURIComponent(message)}`;

            // Buat URL WhatsApp API
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

            // Buka WhatsApp di tab/jendela baru
            window.open(whatsappURL, '_blank');

            // Opsional: Reset form setelah pengiriman
            contactForm.reset();

            // Opsional: Tampilkan pesan sukses ke pengguna
            alert('Pesan Anda akan dialihkan ke WhatsApp. Silakan kirim pesan dari sana!');
        });
    }

    
});
