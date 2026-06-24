document.getElementById('current-year').textContent = new Date().getFullYear();
// Animated Current Year Display
document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.getElementById('current-year');
    
    // Create a span element for each digit
    const currentYear = new Date().getFullYear().toString();
    yearElement.innerHTML = ''; // Clear the existing content
    
    // Add each digit with separate styling
    for (let i = 0; i < currentYear.length; i++) {
        const digitSpan = document.createElement('span');
        digitSpan.textContent = currentYear[i];
        digitSpan.style.display = 'inline-block';
        digitSpan.style.transition = 'all 0.5s ease';
        digitSpan.style.transform = 'translateY(-20px)';
        digitSpan.style.opacity = '0';
        
        // Add different colors for each digit
        const colors = ['#2E7D32', '#1B5E20', '#4CAF50', '#FFD700'];
        digitSpan.style.color = colors[i % colors.length];
        digitSpan.style.fontWeight = '700';
        
        yearElement.appendChild(digitSpan);
        
        // Animate each digit with a slight delay
        setTimeout(() => {
            digitSpan.style.transform = 'translateY(0)';
            digitSpan.style.opacity = '1';
        }, 100 * i);
    }
    
    // Add hover effect to the year container
    yearElement.addEventListener('mouseover', function() {
        const digits = this.querySelectorAll('span');
        digits.forEach((digit, index) => {
            setTimeout(() => {
                digit.style.transform = 'translateY(-5px)';
                digit.style.textShadow = '0 5px 10px rgba(0,0,0,0.2)';
            }, 50 * index);
        });
    });
    
    yearElement.addEventListener('mouseout', function() {
        const digits = this.querySelectorAll('span');
        digits.forEach((digit, index) => {
            setTimeout(() => {
                digit.style.transform = 'translateY(0)';
                digit.style.textShadow = 'none';
            }, 50 * index);
        });
    });
    
    // Add a subtle pulse animation every few seconds
    setInterval(() => {
        const digits = yearElement.querySelectorAll('span');
        const randomDigit = Math.floor(Math.random() * digits.length);
        
        digits[randomDigit].style.transform = 'scale(1.2)';
        setTimeout(() => {
            digits[randomDigit].style.transform = 'scale(1)';
        }, 300);
    }, 3000);
});

// Smooth scroll untuk semua link dengan hash
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animasi tahun di footer
document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.getElementById('current-year');
    
    // Create a span element for each digit
    const currentYear = new Date().getFullYear().toString();
    yearElement.innerHTML = '';
    
    for (let i = 0; i < currentYear.length; i++) {
        const digitSpan = document.createElement('span');
        digitSpan.textContent = currentYear[i];
        digitSpan.style.display = 'inline-block';
        digitSpan.style.transition = 'all 0.5s ease';
        digitSpan.style.transform = 'translateY(-20px)';
        digitSpan.style.opacity = '0';
        
        const colors = ['#2E7D32', '#1B5E20', '#4CAF50', '#FFD700'];
        digitSpan.style.color = colors[i % colors.length];
        digitSpan.style.fontWeight = '700';
        
        yearElement.appendChild(digitSpan);
        
        setTimeout(() => {
            digitSpan.style.transform = 'translateY(0)';
            digitSpan.style.opacity = '1';
        }, 100 * i);
    }
    
    // Efek hover tahun
    yearElement.addEventListener('mouseover', function() {
        const digits = this.querySelectorAll('span');
        digits.forEach((digit, index) => {
            setTimeout(() => {
                digit.style.transform = 'translateY(-5px)';
                digit.style.textShadow = '0 5px 10px rgba(0,0,0,0.2)';
            }, 50 * index);
        });
    });
    
    yearElement.addEventListener('mouseout', function() {
        const digits = this.querySelectorAll('span');
        digits.forEach((digit, index) => {
            setTimeout(() => {
                digit.style.transform = 'translateY(0)';
                digit.style.textShadow = 'none';
            }, 50 * index);
        });
    });
    
    // Animasi AOS
    AOS.init();
});
