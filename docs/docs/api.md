---
title: API
lang: en-US
hideTitle: true
---

<div class="row">
<div class="col-12 col-md-8 order-2 order-md-1">

## API


API is implemented through sending/receiving data in JSON format. The server part is written in [Go](https://golang.org/), the client part in [Vue](https://vuejs.org/), all sources are available in [GitHub](https://github.com/NightMan-1/QVNote).

This page describes only the general parameters, for more information you need read the source code.

#### Common API

```/api/config.write``` <span class="ml-1 mr-1">—</span> write the path to the directory with notes, used only when you first start

```/api/exit``` <span class="ml-1 mr-1">—</span> the shutdown of the server

```/api/ping``` <span class="ml-1 mr-1">—</span> used to determine server health

```/api/config.json``` <span class="ml-1 mr-1">—</span> allows you to see and change the current configuration

```/api/favorites.json``` <span class="ml-1 mr-1">—</span> manage your list of favorite notes

```/resources/*/*/*``` <span class="ml-1 mr-1">—</span> showing images from the data storage

```/api/statistic.json``` <span class="ml-1 mr-1">—</span> returns statistical information used on the main page

```/api/refresh_data.json``` <span class="ml-1 mr-1">—</span> starting reindexing and updating data

```/api/optimization.json``` <span class="ml-1 mr-1">—</span> running storage optimization <span class="ml-1 mr-1">—</span> all external images will be downloaded and placed in a directory with notes, it is necessary to work regardless of external servers

#### Notebooks

```/api/notebook_edit.json``` <span class="ml-1 mr-1">—</span> adding/deleting/moving/editing notebooks

```/api/notes_at_notebook.json``` <span class="ml-1 mr-1">—</span> returns a list of notes in notebook


#### Notes

```/api/note.json``` <span class="ml-1 mr-1">—</span> specific note, title, text and all options

```/api/note_edit.json``` <span class="ml-1 mr-1">—</span> creating/editing notes

```/api/note_move.json``` <span class="ml-1 mr-1">—</span> move/delete notes


#### Tags

```/api/tags.json``` <span class="ml-1 mr-1">—</span> returns a list of all tags

```/api/notes_with_tag.json``` <span class="ml-1 mr-1">—</span> list of notes with a specific tag

```/api/tag_edit.json``` <span class="ml-1 mr-1">—</span> editing tags


#### Search

```/api/search.json``` <span class="ml-1 mr-1">—</span> working with search

```/api/search_index.json``` <span class="ml-1 mr-1">—</span> start reindexing the search index






</div>
<div class="col-12 col-md-4 order-1 order-md-2 mb-4 mb-sm-0">
<div class="list-group" style="position: sticky; top: 1rem;">
  <router-link to="/docs/" class="list-group-item list-group-item-action">Quick start</router-link>
  <router-link to="/docs/sources.html" class="list-group-item list-group-item-action">Installation from sources</router-link>
  <router-link to="/docs/usage.html" class="list-group-item list-group-item-action">Usage</router-link>
  <router-link to="/docs/configuration.html" class="list-group-item list-group-item-action">Configuration</router-link>
  <router-link to="/docs/platform_features.html" class="list-group-item list-group-item-action">Platform features</router-link>
  <router-link to="/docs/api.html" class="list-group-item list-group-item-action active">API</router-link>
</div>
</div>


</div>