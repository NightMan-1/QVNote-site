---
title: Инструкция по использованию
lang: ru-RU
hideTitle: true
---

<div class="row">
<div class="col-12 col-md-8 order-2 order-md-1">

## Инструкция по использованию

<div class="alert alert-info mb-0 pb-0 font-italic">

**Доступ к заметкам возможен через встроенный браузер или открыв страницу [http://localhost:8000](http://localhost:8000) в любом браузере**

</div>


#### Главный экран

<img src="/images/usage/ru/s1.png" class="shadow mb-4" />

Здесь показана статистика использования. В левой колонке список блокнотов. На страницу можно попасть при нажатии на логотип **QVNote** в левом верхнем углу.

#### Блокноты

<img src="/images/usage/ru/s2.png" class="shadow mb-4" />

Список блокнотов размещен в левой колонке. При нажатии на название блокнота открывается список заметок в блокноте и первая (самая верхняя) заметка. Заметки отсортированы по дате добавления. Выбранные блокноты и заметки подсвечиваются.

<div class="alert alert-info mb-4 mt-3">
<div class="row">
<div class="col-12 col-md-4">
<img src="/images/usage/ru/s4.png" class="shadow mb-2 mb-sm-0" />
</div>
<div class="col-12 col-md-8 font-italic">
Для создания нового блокнота нажмите кнопку <i class="fas fa-cog text-dark ms-1 me-1"></i> и затем <i class="fas fa-book text-dark ms-1 me-1"></i> в левом верхнем углу экрана. Редактирование/удаление блокнотов происходит через настройки.
</div>
</div>
</div>


#### Чтение заметок

<img src="/images/usage/ru/s3.png" class="shadow mb-4" />

Во время чтения заметки, в правом верхнем углу расположены несколько кнопок:

<ul style="list-style: none; padding-left: 1rem;">
<li><i class="fas fa-external-link-alt text-dark"></i> <span class="ms-1 me-1">—</span> открытие оригинала статьи по внешней ссылке</li>
<li><i class="fas fa-info-circle text-info"></i> <span class="ms-1 me-1">—</span> показ даты создания заметки, списка тегов и прочей информации</li>
<li><i class="fas fa-edit text-success"></i> <span class="ms-1 me-1">—</span> редактирование заметки</li>
<li><i class="fas fa-trash text-danger"></i> <span class="ms-1 me-1">—</span> удаление заметки (удаление происходит в корзину)</li>
<li><i class="fas fa-exchange-alt text-black-50"></i> <span class="ms-1 me-1">—</span> перемещение заметки в другой блокнот</li>
<li><i class="fas text-black-50 fa-book-reader"></i> <span class="ms-1 me-1">—</span> включение/отключения режима чтения</li>
<li><i class="far fa-star text-black-50"></i> <span class="ms-1 me-1">—</span> добавление/удаление из списка избранных заметок (Favorite)</li>
</ul>

#### Создание/редактирование заметок

<div class="alert alert-info mb-4 mt-3">
<div class="row">
<div class="col-12 col-md-4">
<img src="/images/usage/ru/s4.png" class="shadow mb-2 mb-sm-0" />
</div>
<div class="col-12 col-md-8 font-italic">
Перейти в режим создания новой заметки можно нажатием кнопки <i class="fas fa-edit text-dark ms-1 me-1"></i> в левом верхнем углу экрана.
</div>
</div>
</div>

<img src="/images/usage/ru/s5.png" class="shadow mb-4" />

Во время создания/изменения заметки необходимо указать ее название, можно добавить ссылку на исходную статью (например, при копировании заметки с внешнего сайта) и теги.
Редактор заметки сделан на основе [Quill Rich Text Editor](https://quilljs.com/). Отображение заметок при просмотре может не совпадать с видом в редакторе, например, удаляются лишние пробелы, некоторое форматирование, настройка шрифтов, размера текста и прочее. Возможно переключится в режим редактирования HTML через нажатие кнопки <i class="fas fa-code ms-1 me-1"></i> в верхнем правом углу экрана.

Для сохранения используйте кнопку <i class="fas fa-save text-success ms-1 me-1"></i>

Для перехода в режим просмотра заметки используйте кнопку <i class="fas fa-eye text-primary ms-1 me-1"></i>

Во время добавления тегов будет показан список существующих, при добавлении отсутствующего он будет автоматически добавлен в общий список.

#### Теги

<div class="row">
<div class="col-12 col-md-4">
<img src="/images/usage/ru/s6.png" class="shadow mb-4" />
</div>
<div class="col-12 col-md-8">
Переключение отображения списка тегов или списка блокнотов, осуществляется соответственными кнопками в левом низу экрана.
</div>
</div>

Добавление новых тегов происходит автоматически при добавлении/изменении заметок. Удаление/переименование тегов осуществляется через настройки.

#### Настройки

<div class="alert alert-info mb-4 mt-3">
<div class="row">
<div class="col-12 col-md-4">
<img src="/images/usage/ru/s4.png" class="shadow mb-2 mb-sm-0" />
</div>
<div class="col-12 col-md-8 font-italic">
Для открытия страницы настроек нажмите кнопку <i class="fas fa-cog text-dark ms-1 me-1"></i> и выберите "настройки".
</div>
</div>
</div>

<img src="/images/usage/ru/s7.png" class="shadow mb-4" />

На странице настроек можно настроить режим запуска, включить/отключить открытие браузера при запуске, показывать/скрывать консоль, переключать языковые настройки и другое.

Отдельно выведены кнопки для глобальный действий <span class="ms-1 me-1">—</span> обновление списка заметок, переиндексация поискового индекса и оптимизация хранилища.

На странице __"Блокноты"__ (кнопка в левом меню на странице с настройками) возможно переименовать и удалить любой блокнот.

На страница __"Теги"__ <span class="ms-1 me-1">—</span> переименовать и удалить любой тег.


<div class="alert alert-success mb-4 pb-0 font-italic">

Что то не работает? Есть пожелания/идеи по функционалу? Напишите на [GitHub](https://github.com/NightMan-1/QVNote/issues)

</div>



</div>
<div class="col-12 col-md-4 order-1 order-md-2 mb-4 mb-sm-0">
<div class="list-group" style="position: sticky; top: 1rem;">
  <router-link to="/ru/docs/" class="list-group-item list-group-item-action">Быстрый старт</router-link>
  <router-link to="/ru/docs/sources.html" class="list-group-item list-group-item-action">Установка из исходников</router-link>
  <router-link to="/ru/docs/usage.html" class="list-group-item list-group-item-action active">Использование</router-link>
  <router-link to="/ru/docs/configuration.html" class="list-group-item list-group-item-action">Настройка</router-link>
  <router-link to="/ru/docs/platform_features.html" class="list-group-item list-group-item-action">Особенности платформ</router-link>
  <router-link to="/ru/docs/api.html" class="list-group-item list-group-item-action">API</router-link>
</div>
</div>


</div>
