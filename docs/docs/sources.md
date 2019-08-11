---
title: Installation from source
lang: en-US
hideTitle: true
---

<div class="row">
<div class="col-12 col-md-8 order-2 order-md-1">

##  Installation from source

1. Install the latest versions of [GoLang](https://golang.org/) and [NodeJS](https://nodejs.org/en/)
2. Download the source code:  
`git clone https://github.com/NightMan-1/QVNote`
3. Go to the source folder and install the dependencies for GUI:  
`npm install`
4. Install dependencies for server part:  
``` bash
go get -u github.com/go-bindata/go-bindata/...
go get -u github.com/blevesearch/bleve
go get -u github.com/blevesearch/snowballstem
go get -u github.com/dustin/go-humanize
go get -u github.com/imroc/req
go get -u github.com/json-iterator/go
go get -u github.com/kataras/iris
go get -u github.com/iris-contrib/middleware/cors
go get -u github.com/gofrs/uuid
go get -u github.com/siddontang/ledisdb/config
go get -u github.com/siddontang/ledisdb/ledis
go get -u github.com/json-iterator/go
go get -u github.com/marcsauter/single
go get -u github.com/josephspurrier/goversioninfo/cmd/goversioninfo
go get -u github.com/syndtr/goleveldb/leveldb
go get -u github.com/go-ini/ini
```
5. Additional requirements for Windows:
``` bash
go get -u github.com/gen2brain/beeep
go get -u github.com/gen2brain/dlgs
go get -u github.com/getlantern/systray
go get -u github.com/gonutz/w32
```
6. Additional requirements for Mac OS:
``` bash
go get -u github.com/gen2brain/beeep
go get -u github.com/gen2brain/dlgs
go get -u github.com/getlantern/systray
go get -u github.com/gonutz/w32
```
7. Compile the source code:
``` bash
npm run build
go-bindata templates/... icon.ico
goversioninfo
go build
```

</div>
<div class="col-12 col-md-4 order-1 order-md-2 mb-4 mb-sm-0">
<div class="list-group" style="position: sticky; top: 1rem;">
  <router-link to="/docs/" class="list-group-item list-group-item-action">Quick start</router-link>
  <router-link to="/docs/sources.html" class="list-group-item list-group-item-action active">Installation from sources</router-link>
  <router-link to="/docs/usage.html" class="list-group-item list-group-item-action">Usage</router-link>
  <router-link to="/docs/configuration.html" class="list-group-item list-group-item-action">Configuration</router-link>
  <router-link to="/docs/platform_features.html" class="list-group-item list-group-item-action">Platform features</router-link>
  <router-link to="/docs/api.html" class="list-group-item list-group-item-action">API</router-link>
</div>
</div>


</div>