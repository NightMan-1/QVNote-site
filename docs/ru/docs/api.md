---
title: API
lang: ru-RU
hideTitle: true
---

<div class="row">
<div class="col-12 col-md-8 order-2 order-md-1">

## API

API реализовано через отправку/получение данных в формате JSON. Серверная часть написана на [Go](https://golang.org/), клиентская на [Vue](https://vuejs.org/), все исходники доступны в [GitHub](https://github.com/NightMan-1/QVNote).

На этой странице описаны только общие параметры, для конкретной реализации необходимо смотреть исходный код.

#### Общие API

```/api/config.write``` <span class="ml-1 mr-1">—</span> запись пути к директории с заметками, используется только при первом запуске.

```/api/exit``` <span class="ml-1 mr-1">—</span> завершение работы сервера

```/api/ping``` <span class="ml-1 mr-1">—</span> используется для определения работоспособности сервера

```/api/config.json``` <span class="ml-1 mr-1">—</span> возвращает и позволяет менять текущую конфигурацию

```/api/favorites.json``` <span class="ml-1 mr-1">—</span> управление списком избранных записей

```/resources/*/*/*``` <span class="ml-1 mr-1">—</span> показ картинок из хранилища заметок

```/api/statistic.json``` <span class="ml-1 mr-1">—</span> возвращает статистическую информацию, используется на главной странице

```/api/refresh_data.json``` <span class="ml-1 mr-1">—</span> запуск переиндексации и обновления данных

```/api/optimization.json``` <span class="ml-1 mr-1">—</span> запуск оптимизации хранилища <span class="ml-1 mr-1">—</span> все внешние картинки будут скачены и помещены в директорию с заметками, это нужно для работы независимо от внешних серверов

#### Блокноты

```/api/notebook_edit.json``` <span class="ml-1 mr-1">—</span> добавление/удаление/перемещение/редактирование блокнотов

```/api/notes_at_notebook.json``` <span class="ml-1 mr-1">—</span> возвращает список заметок в блокноте


#### Заметки

```/api/note.json``` <span class="ml-1 mr-1">—</span> конкретная заметка, заголовок, текст и все параметры

```/api/note_edit.json``` <span class="ml-1 mr-1">—</span> создание/редактирование заметок

```/api/note_move.json``` <span class="ml-1 mr-1">—</span> перемещение/удаление заметок


#### Теги

```/api/tags.json``` <span class="ml-1 mr-1">—</span> возвращает список всех тегов

```/api/notes_with_tag.json``` <span class="ml-1 mr-1">—</span> список заметок с определенным тегом

```/api/tag_edit.json``` <span class="ml-1 mr-1">—</span> редактирование тегов


#### Поиск

```/api/search.json``` <span class="ml-1 mr-1">—</span> работа с поиском

```/api/search_index.json``` <span class="ml-1 mr-1">—</span> запуск переиндексации поискового индекса






</div>
<div class="col-12 col-md-4 order-1 order-md-2 mb-4 mb-sm-0">
<div class="list-group" style="position: sticky; top: 1rem;">
  <router-link to="/ru/docs/" class="list-group-item list-group-item-action">Быстрый старт</router-link>
  <router-link to="/ru/docs/sources.html" class="list-group-item list-group-item-action">Установка из исходников</router-link>
  <router-link to="/ru/docs/usage.html" class="list-group-item list-group-item-action">Использование</router-link>
  <router-link to="/ru/docs/configuration.html" class="list-group-item list-group-item-action">Настройка</router-link>
  <router-link to="/ru/docs/platform_features.html" class="list-group-item list-group-item-action">Особенности платформ</router-link>
  <router-link to="/ru/docs/api.html" class="list-group-item list-group-item-action active">API</router-link>
</div>
</div>


</div>
