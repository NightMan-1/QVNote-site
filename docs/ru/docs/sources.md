---
title: Установка из исходников
lang: ru-RU
hideTitle: true
---

<div class="row">
<div class="col-12 col-md-8 order-2 order-md-1">

##  Установка из исходников

1. Установите последнюю стабильную версию [GoLang](https://golang.org/) и [NodeJS](https://nodejs.org/en/)
2. Скачайте исходники программы:  
`git clone https://github.com/NightMan-1/QVNote`
3. Перейдите в директорию с исходниками и установите зависимости:  
``` bash
npm install
export CGO_ENABLED=1; go mod download
export GO111MODULE=off; go get -u github.com/go-bindata/go-bindata/...
export GO111MODULE=off; go get -u github.com/josephspurrier/goversioninfo/cmd/goversioninfo

```
4. Подготовьте фронтенд:
``` bash
npm run build
cd templates && go-bindata -o ../bindata.go -fs ./... ../icon.ico && cd ..
```
5. Сборка для MacOS:
``` bash
mkdir QVNote.app; mkdir QVNote.app/Contents; mkdir QVNote.app/Contents/MacOS; mkdir QVNote.app/Contents/Resources
cp Info.plist QVNote.app/Contents; cp icon.icns QVNote.app/Contents/Resources
export CGO_ENABLED=1; export GOOS=darwin; export GOARCH=amd64; go build -o QVNote.app/Contents/MacOS/QVNote && chmod a+x QVNote.app/Contents/MacOS/QVNote
```
6. Сборка для Linux:
``` bash
export CGO_ENABLED=0; export GOOS=linux; export GOARCH=amd64; go build -o qvnote-linux-x64 && chmod a+x qvnote-linux-x64
```
7. Сборка для Windows:
``` bash
goversioninfo
export CGO_ENABLED=0; export GOOS=windows; export GOARCH=amd64; go build -a -gcflags=all="-l -B" -ldflags="-w -s -H windowsgui" -o QVNote-windows-x64.exe
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
