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

//////////////////////// это верстальщетские скрипты, что бы не плодить портянки

const catalog = [
    {
        title: 'Оборудование для деревообработки',
        icon: 'icon-derevo.svg',
    },
    {
        title: 'Оборудование для производства бетона и бетонных изделий',
        icon: 'icon-beton.svg',
    },
    {
        title: 'Строительное оборудование',
        icon: 'icon-derevo.svg',
    },
    {
        title: 'Сельскохозяйственное оборудование',
        icon: 'icon-derevo.svg',
    },
    {
        title: 'Оборудование для металлообработки',
        icon: 'icon-derevo.svg',
    },
    {
        title: 'Оборудование для нанесения пенополиуретанового уплотнения',
        icon: 'icon-derevo.svg',
    },
    {
        title: 'Экструзионное оборудование',
        icon: 'icon-derevo.svg',
    },
    {
        title: 'Упаковочное оборудование',
        icon: 'icon-derevo.svg',
    },
    {
        title: 'Пищевое оборудование',
        icon: 'icon-derevo.svg',
    },
    {
        title: 'Автоматизация производства',
        icon: 'icon-derevo.svg',
    },
];

const catalogItems = catalog.map((item) => {
    return `<a href="#" class="hero__catalog-item  p-lg-3 py-lg-4 me-lg-4  mb-lg-4 col-lg-3 "> 
                      <div class="col-lg-12">
                          <h3 class="hero__catalog-text col-lg-7">
                              ${item.title}
                          </h3>
                      </div>
                      <div class="col-lg-12 d-flex">
                          <div class="hero__catalog-item-arrow-icon col-lg-6 d-flex align-items-end">
                              <img src="images/icon/arow-tuda-green.svg" />
                          </div>
                          <div class="hero__catalog-item-prod-icon col-lg-6 d-flex justify-content-end">
                              <img
                              class="hero__catalog-item-prod-icon-un"
                                  src="images/icon/catalog/${item.icon}"
                                  alt=""
                              />
                              <img
                              class="hero__catalog-item-prod-icon-hover"
                                  src="images/icon/catalog/h-${item.icon}"
                                  alt=""
                              />
                          
                      </div>
                  </div></a>`;
});

document.querySelector('.hero__catalog-items ').innerHTML =
    catalogItems.join('');
