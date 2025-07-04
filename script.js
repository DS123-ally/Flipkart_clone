document.querySelectorAll('.product-card button').forEach(function(btn) {
    btn.addEventListener('click', function() {
        alert('Added to cart! (Demo)');
    });
});
const buttons = document.querySelectorAll(".product-card button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Product added to cart!");
    });
});

function handleCategoryChange(select) {
    const value = select.value;
    if (value) {
        window.location.href = value;
    }
}
const thumbnails = document.querySelectorAll('.thumb');
const banners = document.querySelectorAll('.main-banner img');

thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('mouseover', () => {
        banners.forEach(img => img.classList.remove('active-banner'));
        banners[index].classList.add('active-banner');
    });
});