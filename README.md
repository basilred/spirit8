# Посадочная страница Spirit8

Это свёрстанная с использованием [БЭМ-методологии](https://ru.bem.info/method/) страница из рассылки сайта htmlacademy.ru.

## Что внутри?

За основу взят стандартный [Project-stub](https://github.com/bem/project-stub/), в порядок сборки включен Борщик для фриза статики, а для автоматического обновления страницы при разработке подключен browser-sync.

### Блок `slider`

Настраиваемый слайдер чего-либо с возможностью задать поведение параметрами в BEMJSON:
- в аттрибуте `data-bem` блока задается параметр `items`, указывающий какое количество объектов будет выведено в одном слайде.
- объекты для вывода в слайдер должны находиться в массиве `data` блока.

Слайдер по количеству объектов в поле `data` автоматически рассчитает нужное количество элементов управления `slider__pin`.

## Как собрать?

Сборка ничем не отличается от стандартной. `npm i` установит зависимости, `npm start` запустит разработческий сервер, обернёт его browser-sync'ом, и откроет собранную страницу в браузере.
