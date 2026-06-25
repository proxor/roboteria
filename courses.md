---
layout: default
title: Kurse
permalink: /courses/
---

<section class="section">
  <div class="shell">
    <div class="section-title">
      <span data-lang="de">Ferienprogramm Herrsching am Ammersee</span>
      <span data-lang="en">Holiday Programme Herrsching am Ammersee</span>
    </div>
    <p data-lang="de"><strong>Anmeldung startet am 12. Juli 2026 um 10:00 Uhr</strong> beim <a href="https://herrsching.feripro.de/" target="_blank" rel="noreferrer">Ferienprogramm Herrsching am Ammersee</a> – nicht verpassen!</p>
    <p data-lang="en"><strong>Registration opens on 12 July 2026 at 10:00</strong> via the <a href="https://herrsching.feripro.de/" target="_blank" rel="noreferrer">Ferienprogramm Herrsching am Ammersee</a> – don't miss it!</p>
    <div class="card-grid">
      {% assign ferienprogramm = site.data.courses | where: "category", "ferienprogramm" | where_exp: "item", "item.status == 'planned' or item.status == 'registration'" %}
      {% for course in ferienprogramm %}
      <article class="card">
        <h3 data-lang="de">{{ course.title_de }}</h3>
        <h3 data-lang="en">{{ course.title_en }}</h3>
        <div class="course-meta" data-lang="de">
          <div>{{ course.meta.date_de }}</div>
          {% if course.meta.location %}<div>{{ course.meta.location }}</div>{% endif %}
          <div>{{ course.meta.age_de }}</div>
          <div>{{ course.meta.size_de }}</div>
        </div>
        <div class="course-meta" data-lang="en">
          <div>{{ course.meta.date_en }}</div>
          {% if course.meta.location %}<div>{{ course.meta.location }}</div>{% endif %}
          <div>{{ course.meta.age_en }}</div>
          <div>{{ course.meta.size_en }}</div>
        </div>
        <p data-lang="de">{{ course.description_de }}</p>
        <p data-lang="en">{{ course.description_en }}</p>
        {% if course.status == "registration" %}
        {% assign reg_url = course.registration_url | default: "https://vhs-starnbergammersee.de" %}
        <a class="cta" href="{{ reg_url }}" target="_blank" rel="noreferrer" data-lang="de">Zur Anmeldung</a>
        <a class="cta" href="{{ reg_url }}" target="_blank" rel="noreferrer" data-lang="en">Register</a>
        {% else %}
        {% if course.registration_opens and course.registration_opens != "" %}
        <a class="cta disabled" data-lang="de">Anmeldung ab {{ course.registration_opens }}</a>
        <a class="cta disabled" data-lang="en">Registration from {{ course.registration_opens }}</a>
        {% else %}
        <a class="cta disabled" data-lang="de">Anmeldung bald</a>
        <a class="cta disabled" data-lang="en">Registration soon</a>
        {% endif %}
        {% endif %}
      </article>
      {% endfor %}
    </div>
  </div>
</section>

<section class="section">
  <div class="shell">
    <div class="section-title">
      <span data-lang="de">Geplante Kurse</span>
      <span data-lang="en">Planned courses</span>
    </div>
    <div class="card-grid">
      {% assign planned = site.data.courses | where_exp: "item", "item.status == 'planned' or item.status == 'registration'" | where_exp: "item", "item.category != 'ferienprogramm'" %}
      {% for course in planned %}
      <article class="card">
        <span class="badge">{{ course.id }}</span>
        <h3 data-lang="de">{{ course.title_de }}</h3>
        <h3 data-lang="en">{{ course.title_en }}</h3>
        <div class="course-meta" data-lang="de">
          <div>{{ course.meta.date_de }}</div>
          <div>{{ course.meta.age_de }}</div>
          <div>{{ course.meta.size_de }}</div>
        </div>
        <div class="course-meta" data-lang="en">
          <div>{{ course.meta.date_en }}</div>
          <div>{{ course.meta.age_en }}</div>
          <div>{{ course.meta.size_en }}</div>
        </div>
        <p data-lang="de">{{ course.description_de }}</p>
        <p data-lang="en">{{ course.description_en }}</p>
        {% if course.status == "registration" %}
        {% assign reg_url = course.registration_url | default: "https://vhs-starnbergammersee.de" %}
        <a class="cta" href="{{ reg_url }}" target="_blank" rel="noreferrer" data-lang="de">Zur Anmeldung</a>
        <a class="cta" href="{{ reg_url }}" target="_blank" rel="noreferrer" data-lang="en">Register</a>
        {% else %}
        {% if course.registration_opens and course.registration_opens != "" %}
        <a class="cta disabled" data-lang="de">Anmeldung ab {{ course.registration_opens }}</a>
        <a class="cta disabled" data-lang="en">Registration from {{ course.registration_opens }}</a>
        {% else %}
        <a class="cta disabled" data-lang="de">Anmeldung bald</a>
        <a class="cta disabled" data-lang="en">Registration soon</a>
        {% endif %}
        {% endif %}
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
          <div>{{ course.meta.date_de }}</div>
          <div>{{ course.meta.age_de }}</div>
          {% if course.meta.size_de != "" %}<div>{{ course.meta.size_de }}</div>{% endif %}
        </div>
        <div class="course-meta" data-lang="en">
          <div>{{ course.meta.date_en }}</div>
          <div>{{ course.meta.age_en }}</div>
          {% if course.meta.size_en != "" %}<div>{{ course.meta.size_en }}</div>{% endif %}
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
