document.addEventListener('DOMContentLoaded', () => {
    // Sticky header
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');

    navToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        const isActive = nav.classList.contains('active');
        navToggle.setAttribute('aria-label', isActive ? 'Close navigation' : 'Open navigation');
        navToggle.querySelector('i').classList.toggle('fa-bars');
        navToggle.querySelector('i').classList.toggle('fa-times');
    });

    // Smooth scrolling for nav links
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                    // Close mobile nav after clicking a link
                    nav.classList.remove('active');
                    navToggle.setAttribute('aria-label', 'Open navigation');
                    navToggle.querySelector('i').classList.add('fa-bars');
                    navToggle.querySelector('i').classList.remove('fa-times');
                }
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('cryptoChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
                label: 'BTC Price (USD)',
                data: [30000, 32000, 35000, 34000, 36000],
                borderColor: '#00d4ff',
                backgroundColor: 'rgba(0, 212, 255, 0.2)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: { color: '#b0b0b0', font: { size: 12 } },
                    grid: { color: 'rgba(255, 255, 255, 0.1)' }
                },
                x: {
                    ticks: { color: '#b0b0b0', font: { size: 12 } },
                    grid: { display: false }
                }
            },
            plugins: {
                legend: {
                    labels: { color: '#ffffff', font: { size: 14 } }
                },
                tooltip: {
                    backgroundColor: 'rgba(44, 44, 46, 0.9)',
                    titleColor: '#ffffff',
                    bodyColor: '#b0b0b0',
                    borderColor: '#00d4ff',
                    borderWidth: 1
                }
            }
        }
    });
});