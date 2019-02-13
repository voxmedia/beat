---
layout: home
---

{% assign default_paths = site.pages | map: "path" %}
{% assign page_paths = site.header_pages | default: default_paths %}
<div class="hamburger">
  <div class="hamburger-box">
    <div class="hamburger-inner"></div>
  </div>
</div>

{% if page_paths %}
<nav class="c-nav projects">
  <div class="nav-items">
    <a href="/">Home</a>
    {% for post in site.posts reversed %}
      <a class="" href="{{ post.url | escape }}">{{ post.title | escape }}</a>
    {% endfor %}
    <!--<a class="" href="https://voxproduct.typeform.com/to/HYilPS" target="_blank">Sign Up</a>-->
  </div>
</nav>
{% endif %}

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
    <!--<a class="" href="https://voxproduct.typeform.com/to/HYilPS" target="_blank">Sign Up</a>-->
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
