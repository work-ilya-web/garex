var parallaxImg = document.querySelector('.promo__tree_right');
var parallaxImgLeft = document.querySelector('.promo__tree_left');
var promo = document.querySelector('.promo');

function handleMouseMove(e) {
    // Проверяем ширину экрана
    if (window.innerWidth > 1200) {
        var rect = promo.getBoundingClientRect();
        var xAxis = (e.clientX - rect.left - rect.width / 1.2) / 25;
        var yAxis = (e.clientY - rect.top - rect.height / 1.2) / 25;
        var xAxisLeft = -(e.clientX + rect.left - rect.width / 1.2) / 12.5; // Изменяем знак
        var yAxisLeft = -(e.clientY + rect.top - rect.height / 1.2) / 12.5; // Изменяем знак
        parallaxImg.style.transform = 'translate(' + xAxis + 'px, ' + yAxis + 'px)';
        parallaxImgLeft.style.transform = 'translate(' + xAxisLeft + 'px, ' + yAxisLeft + 'px)';
    }
}

// Добавляем обработчик события для движения мыши
promo.addEventListener('mousemove', handleMouseMove);

// Добавляем обработчик события для изменения размеров окна
window.addEventListener('resize', function() {
    // Вызываем обработчик движения мыши при изменении размеров окна
    handleMouseMove({ clientX: 0, clientY: 0 });
});
