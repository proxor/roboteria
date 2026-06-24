---
layout: default
title: Roboteria
---

<section class="hero">
  <div class="shell hero-grid">
    <div class="hero-card">
      <h1 data-lang="de">Roboteria: Programmieren lernen mit micro:bit</h1>
      <h1 data-lang="en">Roboteria: Learn to code with micro:bit</h1>
      <div class="hero-pills">
        <span class="pill" data-lang="de">8-12 Jahre</span>
        <span class="pill" data-lang="en">Ages 8-12</span>
        <span class="pill" data-lang="de">Kleine Gruppen</span>
        <span class="pill" data-lang="en">Small groups</span>
        <span class="pill" data-lang="de">Hands-on</span>
        <span class="pill" data-lang="en">Hands-on</span>
      </div>
      <p data-lang="de">Ich bin Prochor Kammerzell und leite Kinderkurse bei der VHS StarnbergAmmersee. In Roboteria entdecken Kinder spielerisch, wie Technologie funktioniert - mit dem BBC micro:bit und kreativen Projekten.</p>
      <p data-lang="en">I am Prochor Kammerzell, teaching kids courses at VHS StarnbergAmmersee. In Roboteria, children explore how technology works through creative projects with the BBC micro:bit.</p>
      <a class="cta" href="/courses/" data-lang="de">Zu den Kursen</a>
      <a class="cta" href="/courses/" data-lang="en">See courses</a>
      <a class="cta secondary" href="https://www.vhs-starnbergammersee.de/ueber-uns/unsere-kursleitungen/prochor-kammerzell-665-L-4048" target="_blank" rel="noreferrer" data-lang="de">Anmeldung bei der VHS</a>
      <a class="cta secondary" href="https://www.vhs-starnbergammersee.de/ueber-uns/unsere-kursleitungen/prochor-kammerzell-665-L-4048" target="_blank" rel="noreferrer" data-lang="en">Register at VHS</a>
    </div>
    <div class="hero-image">
      <img src="/stuff/microbit_werbefoto.jpg" alt="micro:bit in action">
    </div>
  </div>
</section>

{% assign latest_post = site.posts | first %}
{% if latest_post %}
<section class="section" style="padding: 1.75rem 0;">
  <div class="shell">
    <div class="section-title">
      <span data-lang="de">Neuigkeiten</span>
      <span data-lang="en">News</span>
    </div>
    <a href="{{ latest_post.url }}" class="news-strip">
      {% if latest_post.image %}
      <div class="news-strip-image">
        <img src="{{ latest_post.image }}" alt="{{ latest_post.title }}">
      </div>
      {% endif %}
      <div class="news-strip-body">
        <p class="post-date">{{ latest_post.date | date: "%d.%m.%Y" }}</p>
        <h3>{{ latest_post.title }}</h3>
        <p>{{ latest_post.excerpt }}</p>
      </div>
      <div class="news-strip-arrow">→</div>
    </a>
    <a class="cta secondary" href="/blog/" data-lang="de" style="margin-top: 0.75rem;">Alle Beiträge</a>
    <a class="cta secondary" href="/blog/" data-lang="en" style="margin-top: 0.75rem;">All posts</a>
  </div>
</section>
{% endif %}

<section class="section" style="background: var(--paper);">
  <div class="shell">
    <div class="section-title">
      <span data-lang="de">Geplante Kurse</span>
      <span data-lang="en">Upcoming courses</span>
    </div>
    <div class="card-grid" style="margin-top: 1rem;">
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
        <p data-lang="de">{{ course.description_de | truncatewords: 30 }}</p>
        <p data-lang="en">{{ course.description_en | truncatewords: 30 }}</p>
        <a class="cta" href="https://vhs-starnbergammersee.de" target="_blank" rel="noreferrer" data-lang="de">Zur Anmeldung</a>
        <a class="cta" href="https://vhs-starnbergammersee.de" target="_blank" rel="noreferrer" data-lang="en">Register</a>
      </article>
      {% endfor %}
    </div>
    <a class="cta secondary" href="/courses/" data-lang="de" style="margin-top: 1.25rem;">Alle Kurse</a>
    <a class="cta secondary" href="/courses/" data-lang="en" style="margin-top: 1.25rem;">All courses</a>
  </div>
</section>

<section class="section">
  <div class="shell">
    <div class="section-title">
      <span data-lang="de">Was wir machen</span>
      <span data-lang="en">What we do</span>
    </div>
    <div class="card-grid">
      <article class="card">
        <h3 data-lang="de">Programmieren mit Sinn</h3>
        <h3 data-lang="en">Coding with purpose</h3>
        <p data-lang="de">Kinder lernen die Grundlagen des Programmierens, indem sie echte Projekte bauen und ihre Ideen sofort sehen.</p>
        <p data-lang="en">Kids learn the basics of programming by building real projects and seeing instant results.</p>
      </article>
      <article class="card">
        <h3 data-lang="de">Projektorientiert</h3>
        <h3 data-lang="en">Project-based</h3>
        <p data-lang="de">Von Kompass bis Musikbox: Wir setzen in jeder Einheit ein greifbares Projekt um.</p>
        <p data-lang="en">From compass to music box: every session ends with a tangible project.</p>
      </article>
      <article class="card">
        <h3 data-lang="de">Kleine Gruppen</h3>
        <h3 data-lang="en">Small groups</h3>
        <p data-lang="de">Maximal 8 Teilnehmer:innen pro Kurs - so bleibt Zeit fuer individuelle Fragen.</p>
        <p data-lang="en">Up to 8 participants so there is time for individual questions.</p>
      </article>
    </div>
  </div>
</section>

<section class="section" style="background: var(--paper);">
  <div class="shell">
    <div class="section-title">
      <span data-lang="de">Roboteria-Merch</span>
      <span data-lang="en">Roboteria Merch</span>
    </div>
    <div class="card-grid" style="margin-top: 1rem;">
      <article class="card" style="grid-column: 1 / -1;">
        <h3 data-lang="de">Zeig, dass du dabei warst!</h3>
        <h3 data-lang="en">Show you were there!</h3>
        <p data-lang="de">T-Shirts, Hoodies und mehr mit dem Roboteria-Logo &ndash; perfekt als Erinnerung an deinen Kurs oder als Geschenkidee. Alle Artikel werden auf Bestellung gedruckt und direkt nach Hause geliefert.</p>
        <p data-lang="en">T-shirts, hoodies, and more with the Roboteria logo &ndash; a great keepsake from your course or a gift idea. All items are printed on demand and shipped directly to your door.</p>
        <a class="cta" href="https://roboteria.myspreadshop.de/" target="_blank" rel="noreferrer" data-lang="de">Zum Shop</a>
        <a class="cta" href="https://roboteria.myspreadshop.de/" target="_blank" rel="noreferrer" data-lang="en">Visit the shop</a>
      </article>
    </div>
  </div>
</section>

<section class="section">
  <div class="shell">
    <div class="section-title">
      <span data-lang="de">micro:bit Projekte</span>
      <span data-lang="en">micro:bit projects</span>
    </div>
    <div class="card-grid">
      <article class="card">
        <span class="badge" data-lang="de">Projektidee</span>
        <span class="badge" data-lang="en">Project idea</span>
        <h3 data-lang="de">Leuchtender Kompass</h3>
        <h3 data-lang="en">Glowing compass</h3>
        <p data-lang="de">Wir nutzen den Kompass-Sensor, um eine Richtung mit LEDs zu markieren.</p>
        <p data-lang="en">Use the compass sensor to highlight a direction with LEDs.</p>
      </article>
      <article class="card">
        <span class="badge" data-lang="de">Projektidee</span>
        <span class="badge" data-lang="en">Project idea</span>
        <h3 data-lang="de">Schrittzaehler</h3>
        <h3 data-lang="en">Step counter</h3>
        <p data-lang="de">Ein Projekt mit dem Beschleunigungssensor fuer Bewegungserkennung.</p>
        <p data-lang="en">A project using the accelerometer to detect movement.</p>
      </article>
      <article class="card">
        <span class="badge" data-lang="de">Projektidee</span>
        <span class="badge" data-lang="en">Project idea</span>
        <h3 data-lang="de">Mini-Musikbox</h3>
        <h3 data-lang="en">Mini music box</h3>
        <p data-lang="de">Wir programmieren kleine Melodien und steuern sie ueber Buttons.</p>
        <p data-lang="en">Program short melodies and control them with buttons.</p>
      </article>
    </div>
    <a class="cta" href="/projects/" data-lang="de">Mehr Projekte</a>
    <a class="cta" href="/projects/" data-lang="en">More projects</a>
  </div>
</section>
