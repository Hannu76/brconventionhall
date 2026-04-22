document.addEventListener('DOMContentLoaded', () => {
    
    /* ==========================================================================
       Navbar Scroll Effect
       ========================================================================== */
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    /* ==========================================================================
       Mobile Menu Toggle
       ========================================================================== */
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });

    const closeMenu = () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    closeMenuBtn.addEventListener('click', closeMenu);

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    /* ==========================================================================
       Scroll Reveal Animations
       ========================================================================== */
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 100; // Trigger point

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('active');
            }
        });
    };

    // Trigger once on load
    revealOnScroll();
    
    // Trigger on scroll
    window.addEventListener('scroll', revealOnScroll);

    /* ==========================================================================
       WhatsApp Booking Form Logic
       ========================================================================== */
    const whatsappForm = document.getElementById('whatsappForm');
    
    // Replace this with the actual business WhatsApp number (including country code)
    const BUSINESS_WHATSAPP_NUMBER = '919912192939';

    whatsappForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get Form Values
        const name = document.getElementById('name').value;
        const mobile = document.getElementById('mobile').value;
        const eventType = document.getElementById('eventType').value;
        
        // Format Date
        const dateInput = document.getElementById('date').value;
        const dateObj = new Date(dateInput);
        const dateFormatted = dateObj.toLocaleDateString('en-IN', {
            day: 'numeric', month: 'short', year: 'numeric'
        });

        const timeSlot = document.getElementById('timeSlot').value;
        const guestCount = document.getElementById('guestCount').value;
        const message = document.getElementById('message').value;

        // Construct Message Template
        let textMessage = `Hello Bhramaramba Convention Hall team! I am looking to book the hall for a *${eventType}* on *${dateFormatted}*. We are expecting around *${guestCount} guests* for the *${timeSlot}* slot. My name is *${name}* (Ph: ${mobile}). Please let me know the availability and pricing. Thank you!`;

        if (message.trim() !== '') {
            textMessage += `\n\nAdditional Requirements:\n${message}`;
        }

        // Encode message for URL
        const encodedMessage = encodeURIComponent(textMessage);
        
        // WhatsApp URL
        const whatsappUrl = `https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encodedMessage}`;

        // Open WhatsApp in new tab
        window.open(whatsappUrl, '_blank');
    });

});
