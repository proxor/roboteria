---
layout: default
title: Blog
permalink: /blog/
---

<section class="section">
  <div class="shell">
    <div class="section-title">
      <span>Neuigkeiten</span>
    </div>
    <div class="card-grid" style="margin-top: 1.5rem;">
      {% for post in site.posts %}
      <article class="card blog-card">
        {% if post.image %}
        <div class="blog-card-image">
          <img src="{{ post.image }}" alt="{{ post.title }}">
        </div>
        {% endif %}
        <p class="post-date">{{ post.date | date: "%d.%m.%Y" }}</p>
        <h3>{{ post.title }}</h3>
        <p>{{ post.excerpt }}</p>
        <a class="cta secondary" href="{{ post.url }}">Weiterlesen</a>
      </article>
      {% endfor %}
    </div>
  </div>
</section>
