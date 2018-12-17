---
layout: home
---

<div class="c-post--intro">
  <div class="c-beat-logo">
    {% include svgs/vox-logo.html %}
    {% include svgs/beat-logo.html %}
  </div>

  <div class="c-seal">
    {% include svgs/vox-logo-new.html %}
  </div>

  <div class="c-about-main">
    {% for post in site.posts reversed %}
      <a class="nav-items" href="{{ post.url | escape }}">{{ post.title | escape }}</a>
    {% endfor %}
    <a class="nav-items" href="https://trello.com/b/FIvvcEd4/beat-curation-board" target="_blank">Submit an Idea</a>
  </div>

  <div class="c-post-tag-left">
    VOX PRODUCT
  </div>

  <div class="c-post-tag-right">
    FEBRUARY 2019
  </div>

  <div style="height: 10vw;"></div>
  <div style="height: 10vw;"></div>

</div>
