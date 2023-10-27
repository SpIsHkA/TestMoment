// Получаем ссылки на див и кнопку закрытия
const notification = document.getElementById("notification");
const icon_close = document.getElementById("icon_close");

// При клике на кнопку, скрываем уведомление
icon_close.addEventListener("click", function() {
    notification.style.display = "none";
});

// Тесты про грибы
document.addEventListener("DOMContentLoaded", function () {
    const openPopup = document.getElementById("mushroom_watch");
    const popup = document.getElementById("popup");
    const overlay = document.getElementById("overlay");
    const popupImage = document.getElementById("popupImage");
    const closePopup = document.getElementById("closePopup");

    // Список рандомных картинок
    const randomImages = [
        "./img/mushrooms/mushroom_results/result_1.1.png",
        "./img/mushrooms/mushroom_results/result_1.2.png",
        "./img/mushrooms/mushroom_results/result_1.3.png",
        "./img/mushrooms/mushroom_results/result_1.4.png",
        "./img/mushrooms/mushroom_results/result_1.5.png",
        // Добавьте здесь больше картинок по вашему выбору
    ];

    // При клике на див "Открыть попап"
    openPopup.addEventListener("click", function () {
        const randomIndex = Math.floor(Math.random() * randomImages.length);
        const randomImageUrl = randomImages[randomIndex];

        popupImage.src = randomImageUrl;

        // Открываем модальное окно
        popup.style.display = "block";
        overlay.style.display = "block";

        // Блокируем прокрутку страницы
        document.body.style.overflow = "hidden";
    });

    // При клике на кнопку "Закрыть попап"
    closePopup.addEventListener("click", function () {
        popup.style.display = "none";
        overlay.style.display = "none";

        // Восстанавливаем прокрутку страницы
        document.body.style.overflow = "auto";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const openPopup = document.getElementById("mushroom_trip");
    const popup = document.getElementById("popup");
    const overlay = document.getElementById("overlay");
    const popupImage = document.getElementById("popupImage");
    const closePopup = document.getElementById("closePopup");

    // Список рандомных картинок
    const randomImages = [
        "./img/mushrooms/mushroom_results/result_2.1.png",
        "./img/mushrooms/mushroom_results/result_2.2.png",
        "./img/mushrooms/mushroom_results/result_2.3.png",
        "./img/mushrooms/mushroom_results/result_2.4.png",
        "./img/mushrooms/mushroom_results/result_2.5.png",
        // Добавьте здесь больше картинок по вашему выбору
    ];

    // При клике на див "Открыть попап"
    openPopup.addEventListener("click", function () {
        const randomIndex = Math.floor(Math.random() * randomImages.length);
        const randomImageUrl = randomImages[randomIndex];

        popupImage.src = randomImageUrl;

        // Открываем модальное окно
        popup.style.display = "block";
        overlay.style.display = "block";

        // Блокируем прокрутку страницы
        document.body.style.overflow = "hidden";
    });

    // При клике на кнопку "Закрыть попап"
    closePopup.addEventListener("click", function () {
        popup.style.display = "none";
        overlay.style.display = "none";

        // Восстанавливаем прокрутку страницы
        document.body.style.overflow = "auto";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const openPopup = document.getElementById("mushroom_magic");
    const popup = document.getElementById("popup");
    const overlay = document.getElementById("overlay");
    const popupImage = document.getElementById("popupImage");
    const closePopup = document.getElementById("closePopup");

    // Список рандомных картинок
    const randomImages = [
        "./img/mushrooms/mushroom_results/result_3.1.png",
        "./img/mushrooms/mushroom_results/result_3.2.png",
        "./img/mushrooms/mushroom_results/result_3.3.png",
        "./img/mushrooms/mushroom_results/result_3.4.png",
        // Добавьте здесь больше картинок по вашему выбору
    ];

    // При клике на див "Открыть попап"
    openPopup.addEventListener("click", function () {
        const randomIndex = Math.floor(Math.random() * randomImages.length);
        const randomImageUrl = randomImages[randomIndex];

        popupImage.src = randomImageUrl;

        // Открываем модальное окно
        popup.style.display = "block";
        overlay.style.display = "block";

        // Блокируем прокрутку страницы
        document.body.style.overflow = "hidden";
    });

    // При клике на кнопку "Закрыть попап"
    closePopup.addEventListener("click", function () {
        popup.style.display = "none";
        overlay.style.display = "none";

        // Восстанавливаем прокрутку страницы
        document.body.style.overflow = "auto";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const openPopup = document.getElementById("mushroom_lechos");
    const popup = document.getElementById("popup");
    const overlay = document.getElementById("overlay");
    const popupImage = document.getElementById("popupImage");
    const closePopup = document.getElementById("closePopup");

    // Список рандомных картинок
    const randomImages = [
        "./img/mushrooms/mushroom_results/result_4.1.png",
        "./img/mushrooms/mushroom_results/result_4.2.png",
        "./img/mushrooms/mushroom_results/result_4.3.png",
        "./img/mushrooms/mushroom_results/result_4.4.png",
        "./img/mushrooms/mushroom_results/result_4.5.png",
        // Добавьте здесь больше картинок по вашему выбору
    ];

    // При клике на див "Открыть попап"
    openPopup.addEventListener("click", function () {
        const randomIndex = Math.floor(Math.random() * randomImages.length);
        const randomImageUrl = randomImages[randomIndex];

        popupImage.src = randomImageUrl;

        // Открываем модальное окно
        popup.style.display = "block";
        overlay.style.display = "block";

        // Блокируем прокрутку страницы
        document.body.style.overflow = "hidden";
    });

    // При клике на кнопку "Закрыть попап"
    closePopup.addEventListener("click", function () {
        popup.style.display = "none";
        overlay.style.display = "none";

        // Восстанавливаем прокрутку страницы
        document.body.style.overflow = "auto";
    });
});

// Тесты про brawl stars
document.addEventListener("DOMContentLoaded", function () {
    const openPopup = document.getElementById("mushroom_who");
    const popup = document.getElementById("popup");
    const overlay = document.getElementById("overlay");
    const popupImage = document.getElementById("popupImage");
    const closePopup = document.getElementById("closePopup");

    // Список рандомных картинок
    const randomImages = [
        "./img/brawl_stars/brawl_stars_results/result_1.1.png",
        "./img/brawl_stars/brawl_stars_results/result_1.2.png",
        "./img/brawl_stars/brawl_stars_results/result_1.3.png",
        "./img/brawl_stars/brawl_stars_results/result_1.4.png",
        "./img/brawl_stars/brawl_stars_results/result_1.5.png",
        // Добавьте здесь больше картинок по вашему выбору
    ];

    // При клике на див "Открыть попап"
    openPopup.addEventListener("click", function () {
        const randomIndex = Math.floor(Math.random() * randomImages.length);
        const randomImageUrl = randomImages[randomIndex];

        popupImage.src = randomImageUrl;

        // Открываем модальное окно
        popup.style.display = "block";
        overlay.style.display = "block";

        // Блокируем прокрутку страницы
        document.body.style.overflow = "hidden";
    });

    // При клике на кнопку "Закрыть попап"
    closePopup.addEventListener("click", function () {
        popup.style.display = "none";
        overlay.style.display = "none";

        // Восстанавливаем прокрутку страницы
        document.body.style.overflow = "auto";
    });
});

// Тесты про brawl stars
document.addEventListener("DOMContentLoaded", function () {
    const openPopup = document.getElementById("mushroom_super");
    const popup = document.getElementById("popup");
    const overlay = document.getElementById("overlay");
    const popupImage = document.getElementById("popupImage");
    const closePopup = document.getElementById("closePopup");

    // Список рандомных картинок
    const randomImages = [
        "./img/brawl_stars/brawl_stars_results/result_2.1.png",
        "./img/brawl_stars/brawl_stars_results/result_2.2.png",
        "./img/brawl_stars/brawl_stars_results/result_2.3.png",
        "./img/brawl_stars/brawl_stars_results/result_2.4.png",
        "./img/brawl_stars/brawl_stars_results/result_2.5.png",
        // Добавьте здесь больше картинок по вашему выбору
    ];

    // При клике на див "Открыть попап"
    openPopup.addEventListener("click", function () {
        const randomIndex = Math.floor(Math.random() * randomImages.length);
        const randomImageUrl = randomImages[randomIndex];

        popupImage.src = randomImageUrl;

        // Открываем модальное окно
        popup.style.display = "block";
        overlay.style.display = "block";

        // Блокируем прокрутку страницы
        document.body.style.overflow = "hidden";
    });

    // При клике на кнопку "Закрыть попап"
    closePopup.addEventListener("click", function () {
        popup.style.display = "none";
        overlay.style.display = "none";

        // Восстанавливаем прокрутку страницы
        document.body.style.overflow = "auto";
    });
});

// Тесты про brawl stars
document.addEventListener("DOMContentLoaded", function () {
    const openPopup = document.getElementById("mushroom_lootbox");
    const popup = document.getElementById("popup");
    const overlay = document.getElementById("overlay");
    const popupImage = document.getElementById("popupImage");
    const closePopup = document.getElementById("closePopup");

    // Список рандомных картинок
    const randomImages = [
        "./img/brawl_stars/brawl_stars_results/result_3.1.png",
        "./img/brawl_stars/brawl_stars_results/result_3.2.png",
        "./img/brawl_stars/brawl_stars_results/result_3.3.png",
        "./img/brawl_stars/brawl_stars_results/result_3.4.png",
        "./img/brawl_stars/brawl_stars_results/result_3.5.png",
        // Добавьте здесь больше картинок по вашему выбору
    ];

    // При клике на див "Открыть попап"
    openPopup.addEventListener("click", function () {
        const randomIndex = Math.floor(Math.random() * randomImages.length);
        const randomImageUrl = randomImages[randomIndex];

        popupImage.src = randomImageUrl;

        // Открываем модальное окно
        popup.style.display = "block";
        overlay.style.display = "block";

        // Блокируем прокрутку страницы
        document.body.style.overflow = "hidden";
    });

    // При клике на кнопку "Закрыть попап"
    closePopup.addEventListener("click", function () {
        popup.style.display = "none";
        overlay.style.display = "none";

        // Восстанавливаем прокрутку страницы
        document.body.style.overflow = "auto";
    });
});

// Тесты про brawl stars
document.addEventListener("DOMContentLoaded", function () {
    const openPopup = document.getElementById("mushroom_real");
    const popup = document.getElementById("popup");
    const overlay = document.getElementById("overlay");
    const popupImage = document.getElementById("popupImage");
    const closePopup = document.getElementById("closePopup");

    // Список рандомных картинок
    const randomImages = [
        "./img/brawl_stars/brawl_stars_results/result_4.1.png",
        "./img/brawl_stars/brawl_stars_results/result_4.2.png",
        "./img/brawl_stars/brawl_stars_results/result_4.3.png",
        "./img/brawl_stars/brawl_stars_results/result_4.4.png",
        "./img/brawl_stars/brawl_stars_results/result_4.5.png",
        // Добавьте здесь больше картинок по вашему выбору
    ];

    // При клике на див "Открыть попап"
    openPopup.addEventListener("click", function () {
        const randomIndex = Math.floor(Math.random() * randomImages.length);
        const randomImageUrl = randomImages[randomIndex];

        popupImage.src = randomImageUrl;

        // Открываем модальное окно
        popup.style.display = "block";
        overlay.style.display = "block";

        // Блокируем прокрутку страницы
        document.body.style.overflow = "hidden";
    });

    // При клике на кнопку "Закрыть попап"
    closePopup.addEventListener("click", function () {
        popup.style.display = "none";
        overlay.style.display = "none";

        // Восстанавливаем прокрутку страницы
        document.body.style.overflow = "auto";
    });
});