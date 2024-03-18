const isMobile = document.documentElement.clientWidth < 768;
const isTablet = document.documentElement.clientWidth < 1140;

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('catalog-btn').onclick = function (event) {
        event.stopPropagation();
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

//Верстка #1
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
        icon: 'icon-stroy.svg',
    },
    {
        title: 'Сельскохозяйственное оборудование',
        icon: 'icon-selhoz.svg',
    },
    {
        title: 'Оборудование для металлообработки',
        icon: 'icon-metall.svg',
    },
    {
        title: 'Оборудование для нанесения пенополиуретанового уплотнения',
        icon: 'icon-penourino.svg',
    },
    {
        title: 'Экструзионное оборудование',
        icon: 'icon-eztruz.svg',
    },
    {
        title: 'Упаковочное оборудование',
        icon: 'icon-upakovka.svg',
    },
    {
        title: 'Пищевое оборудование',
        icon: 'icon-food.svg',
    },
    {
        title: 'Автоматизация производства',
        icon: 'icon-automat.svg',
    },
];

const catalogItems = catalog.map((item) => {
    return `<a href="#" class="hero__catalog-item  p-lg-3 py-lg-4 me-lg-4 me-sm-4 mb-lg-4 col-lg-3 col-md-4 cold-sm-12 "> 
                      <div class="zi-10 col-lg-12">
                          <h3 class="hero__catalog-text tt-none col-lg-7 mb-sm-4">
                              ${item.title}
                          </h3>
                      </div>
                      <div class="zi-10 col-lg-12 d-flex">
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

//Верстка #2

const produkt = [
    {
        name: 'Станок для выпрямления и резки арматуры модели GT5-14B ',
        day: '46 дней',
        cityStart: 'Гуанчжоу',
        cityEnd: 'Омск',
        ves: '250 кг.',
        cost: '40 500$',
        img: 'gt514b.webp',
    },
    {
        name: 'Запуск машины для полировки меха модели GI-30',
        day: '52 дня',
        cityStart: 'Гуанчжоу',
        cityEnd: 'Киров',
        ves: '600 кг.',
        cost: '64 700$',
        img: 'gi30.webp',
    },
    {
        name: 'Запуск линии по производству фанеры',
        day: '96 дней',
        cityStart: 'Шэньчжэнь',
        cityEnd: 'Новосибирск',
        ves: '500 тонн.',
        cost: '149 500 $',
        img: 'fanera.webp',
    },
];

const produktItems = produkt.map((item) => {
    return `
    <div
    class="hero__project-item mb-lg-5 col-lg-12 p-lg-4 d-flex flex-wrap justify-content-between"
>
    <div
        class="hero__project-descr col-lg-5 col-md-12 col-sm-12 d-flex flex-column justify-content-center"
    >
        <div class="hero__project-name mb-lg-4 col-lg-12">
            <p>
                ${item.name}
            </p>
        </div>
        <div class="col-lg-12 d-flex justify-content-between">
            <div
                class="hero__project-long-box col-lg-12 d-flex justify-content-between align-items-center"
            >
                <img src="images/icon/start_pin.svg" />
                <img
                    class="hero__project-long-box-img"
                    src="images/icon/dash-line.svg"
                    alt=""
                />
                <span class="hero__project-long">  ${item.day}</span>
                <img src="images/icon/end_pin.svg" />
            </div>
        </div>
        <div
            class="hero__project-city col-lg-12 d-flex justify-content-between"
        >
            <span>  ${item.cityStart}</span><span>  ${item.cityEnd}</span>
        </div>
        <div
            class="col-lg-12 my-lg-4 d-flex justify-content-between"
        >
            <div
                class="hero__project-param col me-lg-1 d-flex justify-content-between"
            >
                <span>Вес груза:</span>
                <span>  ${item.ves}</span>
            </div>
            <div
                class="hero__project-param ms-lg-1 col d-flex justify-content-between"
            >
                <span>Стоимость:</span>
                <span>  ${item.cost}</span>
            </div>
        </div>
        <div class="col-lg-12 d-flex justify-content-start">
            <a href="#" class="btn-transparent">Подробнее</a>
        </div>
    </div>
    <div
        class="col-lg-5 offset-lg-2 offset-md-0 offset-sm-0 col-md-12 col-sm-12 d-flex justify-content-end"
    >
        <img
            class="hero__project-img"
            src="images/hero/product/${item.img}"
            alt=""
        />
    </div>
</div>
    `;
});
document.querySelector('.hero__project-items ').innerHTML =
    produktItems.join('');
