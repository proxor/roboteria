---
layout: default
title: Kurse
permalink: /courses/
---

<section class="section">
  <div class="shell">
    <div class="section-title">
      <span data-lang="de">Geplante Kurse</span>
      <span data-lang="en">Planned courses</span>
    </div>
    <div class="card-grid">
      {% assign planned = site.data.courses | where: "status", "planned" %}
      {% for course in planned %}
      <article class="card">
        <span class="badge">{{ course.id }}</span>
        <h3 data-lang="de">{{ course.title_de }}</h3>
        <h3 data-lang="en">{{ course.title_en }}</h3>
        <div class="course-meta" data-lang="de">
          <div>{{ course.date_de }}</div>
          <div>{{ course.age_de }}</div>
          <div>{{ course.size_de }}</div>
        </div>
        <div class="course-meta" data-lang="en">
          <div>{{ course.date_en }}</div>
          <div>{{ course.age_en }}</div>
          <div>{{ course.size_en }}</div>
        </div>
        <p data-lang="de">{{ course.description_de }}</p>
        <p data-lang="en">{{ course.description_en }}</p>
        <a class="cta" href="https://vhs-starnbergammersee.de" target="_blank" rel="noreferrer" data-lang="de">Zur Anmeldung</a>
        <a class="cta" href="https://vhs-starnbergammersee.de" target="_blank" rel="noreferrer" data-lang="en">Register</a>
      </article>
      {% endfor %}
    </div>
  </div>
</section>

<section class="section">
  <div class="shell">
    <div class="section-title">
      <span data-lang="de">Vergangene Kurse</span>
      <span data-lang="en">Past courses</span>
    </div>
    <div class="card-grid">
      {% assign past = site.data.courses | where: "status", "past" %}
      {% for course in past %}
      <article class="card">
        <span class="badge">{{ course.id }}</span>
        <h3 data-lang="de">{{ course.title_de }}</h3>
        <h3 data-lang="en">{{ course.title_en }}</h3>
        <div class="course-meta" data-lang="de">
          <div>{{ course.date_de }}</div>
          <div>{{ course.age_de }}</div>
          {% if course.size_de != "" %}<div>{{ course.size_de }}</div>{% endif %}
        </div>
        <div class="course-meta" data-lang="en">
          <div>{{ course.date_en }}</div>
          <div>{{ course.age_en }}</div>
          {% if course.size_en != "" %}<div>{{ course.size_en }}</div>{% endif %}
        </div>
        <p data-lang="de">{{ course.description_de }}</p>
        <p data-lang="en">{{ course.description_en }}</p>
        {% if course.url %}
        <a class="cta" href="{{ course.url }}" data-lang="de">Zur Kursseite</a>
        <a class="cta" href="{{ course.url }}" data-lang="en">Course page</a>
        {% endif %}
      </article>
      {% endfor %}
    </div>
  </div>
</section>
