document.getElementById('loadMoreBtn').addEventListener('click', function() {
    // Woh saare elements select karein jisme 'more-box' class hai
    var hiddenBoxes = document.querySelectorAll('.more-box');
    
    // Loop chala kar sabse 'd-none' class hata dein
    hiddenBoxes.forEach(function(box) {
        box.classList.remove('d-none');
        // Optional: Thoda smooth animation ke liye fade-in class add kar sakte hain
        box.classList.add('animate__animated', 'animate__fadeIn'); 
    });

    // Button ko hide kar dein (kyunki sab show ho gaya)
    this.style.display = 'none';
});