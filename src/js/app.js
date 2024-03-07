const isMobile = document.documentElement.clientWidth < 768;
const isTablet = document.documentElement.clientWidth < 1140;

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('catalog-btn').onclick = function (event) {
        event.stopPropagation(); // Остановить всплытие события, чтобы клик на кнопке не срабатывал на внешний обработчик
        document.getElementById('catalog').classList.toggle('catalog-open');
        document.getElementById('dropIconTog').classList.toggle('btn-reverse');
    };

    const catalogBlock = document.getElementById('catalog');

    document.addEventListener('click', function (event) {
        const catalogElement = document.getElementById('catalog');
        const targetElement = event.target;

        if (
            !catalogElement.contains(targetElement) &&
            !targetElement.matches('#catalog-btn')
        ) {
            catalogElement.classList.remove('catalog-open');
            document
                .getElementById('catalog-btn')
                .classList.remove('btn-reverse');
        }
    });
});
