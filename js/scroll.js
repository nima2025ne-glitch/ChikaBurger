const scrollAmount = 200;

function setupScroll(btnLeft, btnRight, content) {
  btnLeft.addEventListener('click', (event) => {
    event.preventDefault(); // جلو گیری از بالا رفتن صفحه
    content.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  });

  btnRight.addEventListener('click', (event) => {
    event.preventDefault();
    content.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });
}

// تمام اسکرول‌بارها رو بگیر
const scrollContainers = document.querySelectorAll('.scroll-container');

scrollContainers.forEach(container => {
  const btnLeft = container.querySelector('.scroll-btn.left');
  const btnRight = container.querySelector('.scroll-btn.right');
  const content = container.querySelector('.content2');

  // فقط اگر هر ۳ عنصر پیدا شدن، setupScroll اجرا بشه
  if (btnLeft && btnRight && content) {
    setupScroll(btnLeft, btnRight, content);
  }
});
