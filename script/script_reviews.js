// Заглушка для отзывов
document.addEventListener('DOMContentLoaded', function () {
    const reviewsContainer = document.querySelector('.reviews');

    for (let i = 1; i <= 5; i++) {
        const review = document.createElement('div');
        review.classList.add('review');

        const title = document.createElement('h3');
        title.textContent = `Отзыв ${i}`;

        const content = document.createElement('p');
        content.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.';

        review.appendChild(title);
        review.appendChild(content);

        reviewsContainer.appendChild(review);
    }
});
