---
layout: home
---
<div class="c-post--intro">
  <div class="c-beat-logo">
    {% include svgs/vox-logo.html %}
    {% include svgs/beat-logo.html %}
  </div>

  <div class="c-seal">
    {% include svgs/seal.html %}
  </div>

  <div class="c-about-main">
    {% for post in site.posts reversed %}
      <a class="nav-items" href="#{{ post.title | escape }}">{{ post.title | escape }}</a>
    {% endfor %}
  </div>

  <div class="c-post-tag-left">
    VOX PRODUCT
  </div>

  <div class="c-post-tag-right">
    JANUARY 2017
  </div>
</div>
