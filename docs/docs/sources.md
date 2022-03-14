---
title: Installation from source
lang: en-US
hideTitle: true
---

<div class="row">
<div class="col-12 col-md-8 order-2 order-md-1">

##  Installation from source

1. Install the latest stable version of [GoLang](https://golang.org/) and [NodeJS](https://nodejs.org/en/)
2. Download the source code:  
`git clone https://github.com/NightMan-1/QVNote`
3. Go to the source folder and install the dependencies:  
``` bash
npm install
export CGO_ENABLED=1; go mod download
export GO111MODULE=off; go get -u github.com/go-bindata/go-bindata/...
export GO111MODULE=off; go get -u github.com/josephspurrier/goversioninfo/cmd/goversioninfo

```
4. Prepare frontend:
``` bash
npm run build
cd templates && go-bindata -o ../bindata.go -fs ./... ../icon.ico && cd ..
```
5. Building MacOS binary:
``` bash
mkdir QVNote.app; mkdir QVNote.app/Contents; mkdir QVNote.app/Contents/MacOS; mkdir QVNote.app/Contents/Resources
cp Info.plist QVNote.app/Contents; cp icon.icns QVNote.app/Contents/Resources
export CGO_ENABLED=1; export GOOS=darwin; export GOARCH=amd64; go build -o QVNote.app/Contents/MacOS/QVNote && chmod a+x QVNote.app/Contents/MacOS/QVNote
```
6. Building Linux binary:
``` bash
export CGO_ENABLED=0; export GOOS=linux; export GOARCH=amd64; go build -o qvnote-linux-x64 && chmod a+x qvnote-linux-x64
```
7. Building Windows binary:
``` bash
goversioninfo
export CGO_ENABLED=0; export GOOS=windows; export GOARCH=amd64; go build -a -gcflags=all="-l -B" -ldflags="-w -s -H windowsgui" -o QVNote-windows-x64.exe
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