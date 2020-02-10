---
title: Usage
lang: en-US
hideTitle: true
---

<div class="row">
<div class="col-12 col-md-8 order-2 order-md-1">

## Usage manual

<div class="alert alert-info mb-0 pb-0 font-italic">

You can access your notes via the built-in browser in standalone mode or by opening a page http://localhost:8000 in any browser

</div>

#### Dashboard

<img src="/images/usage/en/s1.png" class="shadow-lg mb-4" />

Here you can see the usage statistics. The left column contains a list of notebooks. The page can be accessed by clicking on the QVNote logo in the upper left corner.

#### Notebooks

<img src="/images/usage/en/s2.png" class="shadow-lg mb-4" />

The notebook list is located in the left column. Clicking on the notebook title opens the list of notebook notes and the first (topmost) note. The notes are sorted by date of addition. The selected notebooks and notes are highlighted.

<div class="alert alert-info mb-4 mt-3">
<div class="row">
<div class="col-12 col-md-4">
<img src="/images/usage/en/s4.png" class="shadow-lg mb-2 mb-sm-0" />
</div>
<div class="col-12 col-md-8 font-italic">
To create a new notebook, click button <i class="fas fa-cog text-dark ml-1 mr-1"></i> and then <i class="fas fa-book text-dark ml-1 mr-1"></i> in the upper left corner of the screen. Editing/deleting notebooks is possible through settings page.
</div>
</div>
</div>


#### Reading notes

<img src="/images/usage/en/s3.png" class="shadow-lg mb-4" />

While reading the note, in the upper right corner there are several buttons:

<ul style="list-style: none; padding-left: 1rem;">
<li><i class="fas fa-external-link-alt text-dark"></i> <span class="ml-1 mr-1">—</span> opening the original article via an external link</li>
<li><i class="fas fa-info-circle text-info"></i> <span class="ml-1 mr-1">—</span> display the date the note was created, the tag list, and other information</li>
<li><i class="fas fa-edit text-success"></i> <span class="ml-1 mr-1">—</span> editing a note</li>
<li><i class="fas fa-trash text-danger"></i> <span class="ml-1 mr-1">—</span> delete a note to recycle bin</li>
<li><i class="fas fa-exchange-alt text-black-50"></i> <span class="ml-1 mr-1">—</span> move a note to another notebook</li>
<li><i class="fas text-black-50 fa-book-reader"></i> <span class="ml-1 mr-1">—</span> enable/disable reading mode</li>
<li><i class="far fa-star text-black-50"></i> <span class="ml-1 mr-1">—</span> adding/removing from the list of Favorite notes</li>
</ul>

#### Adding/editing notes

<div class="alert alert-info mb-4 mt-3">
<div class="row">
<div class="col-12 col-md-4">
<img src="/images/usage/en/s4.png" class="shadow-lg mb-2 mb-sm-0" />
</div>
<div class="col-12 col-md-8 font-italic">
You can enter the new note creation mode by pressing the button <i class="fas fa-edit text-dark ml-1 mr-1"></i> in top left corner of the screen.
</div>
</div>
</div>

<img src="/images/usage/en/s5.png" class="shadow-lg mb-4" />

When you create a note, you must specify its name, you can add a link to the original article (for example, when copying a note from an external site) and tags. Editor notes are made on the basis of the [Quill Rich Text Editor](https://quilljs.com/). The display of notes may not coincide with the view in the editor, for example, extra spaces, some formatting, font settings, text size, etc.are removed. It is possible to switch to HTML editing mode by pressing the button <i class="fas fa-code ml-1 mr-1"></i> in the upper left corner of the screen.

To save, use the button <i class="fas fa-save text-success ml-1 mr-1"></i>

To switch to the note view mode, use the <i class="fas fa-eye text-primary ml-1 mr-1"></i> button

When you add tags, a list of existing tags is displayed, and when you add a missing tag, it is automatically added to the tags list.

#### Tags

<div class="row">
<div class="col-12 col-md-4">
<img src="/images/usage/en/s6.png" class="shadow-lg mb-4" />
</div>
<div class="col-12 col-md-8">
Switch to the list of tags and back to the list of notebooks, you can select the appropriate button at the left bottom of the screen.
</div>
</div>

New tags are added automatically when notes are added/changed. Deleting/renaming tags is done through settings page.

#### Settings page

<div class="alert alert-info mb-4 mt-3">
<div class="row">
<div class="col-12 col-md-4">
<img src="/images/usage/en/s4.png" class="shadow-lg mb-2 mb-sm-0" />
</div>
<div class="col-12 col-md-8 font-italic">
To open the settings page, press <i class="fas fa-cog text-dark ml-1 mr-1"></i> and select "settings".
</div>
</div>
</div>

<img src="/images/usage/en/s7.png" class="shadow-lg mb-4" />

On the settings page, you can configure the browser to open when the program starts, show/hide the console, switch language settings, and more.

Buttons for global actions are displayed separately <span class="ml-1 mr-1">—</span> updating the list of notes, reindexing the search index and optimizing the storage.

On the __"Notebooks"__ page (the button in the left menu on the settings page) it is possible to rename and delete any notebook.

The __"Tags"__ page works in a similar way.


<div class="alert alert-success mb-4 pb-0 font-italic">

Something not working? Have suggestions/ideas for functionality? Write on [GitHub](https://github.com/NightMan-1/QVNote/issues)

</div>



</div>
<div class="col-12 col-md-4 order-1 order-md-2 mb-4 mb-sm-0">
<div class="list-group" style="position: sticky; top: 1rem;">
  <router-link to="/docs/" class="list-group-item list-group-item-action">Quick start</router-link>
  <router-link to="/docs/sources.html" class="list-group-item list-group-item-action">Installation from sources</router-link>
  <router-link to="/docs/usage.html" class="list-group-item list-group-item-action active">Usage</router-link>
  <router-link to="/docs/configuration.html" class="list-group-item list-group-item-action">Configuration</router-link>
  <router-link to="/docs/platform_features.html" class="list-group-item list-group-item-action">Platform features</router-link>
  <router-link to="/docs/api.html" class="list-group-item list-group-item-action">API</router-link>
</div>
</div>


</div>