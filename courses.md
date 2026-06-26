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
      {% assign ferienprogramm_planned = site.data.courses | where: "category", "ferienprogramm" | where: "status", "planned" %}
      {% assign ferienprogramm_reg = site.data.courses | where: "category", "ferienprogramm" | where: "status", "registration" %}
      {% assign ferienprogramm = ferienprogramm_planned | concat: ferienprogramm_reg %}
      {% for course in ferienprogramm %}
      <article class="card">
        <h3 data-lang="de">{{ course.title_de }}</h3>
        <h3 data-lang="en">{{ course.title_en }}</h3>
        <div class="course-meta-badges" data-lang="de">
          <span class="badge badge--ink">{{ course.meta.date_de }}</span>
          <span class="badge badge--ink">{{ course.meta.age_de }}</span>
        </div>
        <div class="course-meta-badges" data-lang="en">
          <span class="badge badge--ink">{{ course.meta.date_en }}</span>
          <span class="badge badge--ink">{{ course.meta.age_en }}</span>
        </div>
        <div class="course-meta-footer">
          {% if course.meta.location %}
          <span class="course-meta-row">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            {{ course.meta.location }}
          </span>
          {% endif %}
          <span class="course-meta-row" data-lang="de">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            {{ course.meta.size_de }}
          </span>
          <span class="course-meta-row" data-lang="en">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            {{ course.meta.size_en }}
          </span>
        </div>
        <p data-lang="de">{{ course.description_de }}</p>
        <p data-lang="en">{{ course.description_en }}</p>
        {% if course.registration_url %}
        {% if course.registration_opens and course.registration_opens != "" %}
        <a class="cta" href="{{ course.registration_url }}" target="_blank" rel="noreferrer" data-lang="de">Anmeldung ab {{ course.registration_opens }}</a>
        <a class="cta" href="{{ course.registration_url }}" target="_blank" rel="noreferrer" data-lang="en">Registration from {{ course.registration_opens }}</a>
        {% else %}
        <a class="cta" href="{{ course.registration_url }}" target="_blank" rel="noreferrer" data-lang="de">Zur Anmeldung</a>
        <a class="cta" href="{{ course.registration_url }}" target="_blank" rel="noreferrer" data-lang="en">Register</a>
        {% endif %}
        {% elsif course.registration_opens and course.registration_opens != "" %}
        <a class="cta disabled" data-lang="de">Anmeldung ab {{ course.registration_opens }}</a>
        <a class="cta disabled" data-lang="en">Registration from {{ course.registration_opens }}</a>
        {% else %}
        <a class="cta disabled" data-lang="de">Anmeldung bald</a>
        <a class="cta disabled" data-lang="en">Registration soon</a>
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
      {% assign planned_planned = site.data.courses | where: "status", "planned" %}
      {% assign planned_reg = site.data.courses | where: "status", "registration" %}
      {% assign planned_temp = planned_planned | concat: planned_reg %}
      {% assign planned = planned_temp | where_exp: "item", "item.category != 'ferienprogramm'" %}
      {% for course in planned %}
      <article class="card">
        <span class="badge">{{ course.id }}</span>
        <h3 data-lang="de">{{ course.title_de }}</h3>
        <h3 data-lang="en">{{ course.title_en }}</h3>
        <div class="course-meta-badges" data-lang="de">
          <span class="badge badge--ink">{{ course.meta.date_de }}</span>
          <span class="badge badge--ink">{{ course.meta.age_de }}</span>
        </div>
        <div class="course-meta-badges" data-lang="en">
          <span class="badge badge--ink">{{ course.meta.date_en }}</span>
          <span class="badge badge--ink">{{ course.meta.age_en }}</span>
        </div>
        <div class="course-meta-footer">
          <span class="course-meta-row" data-lang="de">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            {{ course.meta.size_de }}
          </span>
          <span class="course-meta-row" data-lang="en">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            {{ course.meta.size_en }}
          </span>
        </div>
        <p data-lang="de">{{ course.description_de }}</p>
        <p data-lang="en">{{ course.description_en }}</p>
        {% if course.registration_url %}
        {% if course.registration_opens and course.registration_opens != "" %}
        <a class="cta" href="{{ course.registration_url }}" target="_blank" rel="noreferrer" data-lang="de">Anmeldung ab {{ course.registration_opens }}</a>
        <a class="cta" href="{{ course.registration_url }}" target="_blank" rel="noreferrer" data-lang="en">Registration from {{ course.registration_opens }}</a>
        {% else %}
        <a class="cta" href="{{ course.registration_url }}" target="_blank" rel="noreferrer" data-lang="de">Zur Anmeldung</a>
        <a class="cta" href="{{ course.registration_url }}" target="_blank" rel="noreferrer" data-lang="en">Register</a>
        {% endif %}
        {% elsif course.registration_opens and course.registration_opens != "" %}
        <a class="cta disabled" data-lang="de">Anmeldung ab {{ course.registration_opens }}</a>
        <a class="cta disabled" data-lang="en">Registration from {{ course.registration_opens }}</a>
        {% else %}
        <a class="cta disabled" data-lang="de">Anmeldung bald</a>
        <a class="cta disabled" data-lang="en">Registration soon</a>
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
        <div class="course-meta-badges" data-lang="de">
          <span class="badge badge--ink">{{ course.meta.date_de }}</span>
          <span class="badge badge--ink">{{ course.meta.age_de }}</span>
        </div>
        <div class="course-meta-badges" data-lang="en">
          <span class="badge badge--ink">{{ course.meta.date_en }}</span>
          <span class="badge badge--ink">{{ course.meta.age_en }}</span>
        </div>
        {% if course.meta.size_de != "" %}
        <div class="course-meta-footer">
          <span class="course-meta-row" data-lang="de">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            {{ course.meta.size_de }}
          </span>
          <span class="course-meta-row" data-lang="en">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            {{ course.meta.size_en }}
          </span>
        </div>
        {% endif %}
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
