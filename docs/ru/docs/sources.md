---
title: Установка из исходников
lang: ru-RU
hideTitle: true
---

<div class="row">
<div class="col-12 col-md-8 order-2 order-md-1">

##  Установка из исходников

1. Установите последние версии [GoLang](https://golang.org/) и [NodeJS](https://nodejs.org/en/)
2. Скачайте исходники программы:  
`git clone https://github.com/NightMan-1/QVNote`
3. Перейдите в директорию с исходниками и установите зависимости:  
``` bash
npm install
go get -u github.com/go-bindata/go-bindata/...
go get -u github.com/blevesearch/bleve
go get -u github.com/blevesearch/snowballstem
go get -u github.com/dustin/go-humanize
go get -u github.com/imroc/req
go get -u github.com/json-iterator/go
go get -u github.com/kataras/iris
go get -u github.com/iris-contrib/middleware/cors
go get -u github.com/google/uuid
go get -u github.com/siddontang/ledisdb/config
go get -u github.com/siddontang/ledisdb/ledis
go get -u github.com/json-iterator/go
go get -u github.com/marcsauter/single
go get -u github.com/josephspurrier/goversioninfo/cmd/goversioninfo
go get -u github.com/syndtr/goleveldb/leveldb
go get -u github.com/go-ini/ini
go get -u github.com/zserge/lorca
```
4. Дополнительные требования для Windows:
``` bash
go get -u github.com/gen2brain/beeep
go get -u github.com/gen2brain/dlgs
go get -u github.com/getlantern/systray
go get -u github.com/gonutz/w32
```
5. Дополнительные требования для Mac OS:
``` bash
go get -u github.com/gen2brain/beeep
go get -u github.com/gen2brain/dlgs
go get -u github.com/getlantern/systray
go get -u github.com/gonutz/w32
```
6. Компиляция исходников:
``` bash
npm run build
go-bindata templates/... icon.ico
goversioninfo
go build
```

</div>
<div class="col-12 col-md-4 order-1 order-md-2 mb-4 mb-sm-0">
<div class="list-group" style="position: sticky; top: 1rem;">
  <router-link to="/ru/docs/" class="list-group-item list-group-item-action">Быстрый старт</router-link>
  <router-link to="/ru/docs/sources.html" class="list-group-item list-group-item-action active">Установка из исходников</router-link>
  <router-link to="/ru/docs/usage.html" class="list-group-item list-group-item-action">Использование</router-link>
  <router-link to="/ru/docs/configuration.html" class="list-group-item list-group-item-action">Настройка</router-link>
  <router-link to="/ru/docs/platform_features.html" class="list-group-item list-group-item-action">Особенности платформ</router-link>
  <router-link to="/ru/docs/api.html" class="list-group-item list-group-item-action">API</router-link>
</div>
</div>


</div>
