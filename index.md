---
layout: default
title: Roboteria
---

<section class="hero">
  <div class="shell hero-grid">
    <div class="hero-card">
      <div class="hero-eyebrow">
        <span class="badge badge--green" data-lang="de">MINT-Kinderklub</span>
        <span class="badge badge--green" data-lang="en">STEM kids club</span>
        <span class="hero-location">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          Herrsching am Ammersee
        </span>
      </div>
      <h1 data-lang="de">Roboteria: Programmieren lernen mit <span class="text-accent">micro:bit</span></h1>
      <h1 data-lang="en">Roboteria: Learn to code with <span class="text-accent">micro:bit</span></h1>
      <div class="hero-pills">
        <span class="pill" data-lang="de">8–12 Jahre</span>
        <span class="pill" data-lang="en">Ages 8–12</span>
        <span class="pill" data-lang="de">Kleine Gruppen</span>
        <span class="pill" data-lang="en">Small groups</span>
        <span class="pill" data-lang="de">Hands-on</span>
        <span class="pill" data-lang="en">Hands-on</span>
      </div>
      <p data-lang="de">Roboteria ist der MINT-Kinderklub für 8- bis 14-Jährige in Herrsching am Ammersee. In kleinen Gruppen programmieren, tüfteln und bauen Kinder echte Projekte — und gehen aus jeder Stunde mit einem Erfolgserlebnis.</p>
      <p data-lang="en">Roboteria is the STEM kids club for ages 8–14 in Herrsching am Ammersee. In small groups, children code, tinker, and build real projects — leaving every session with a sense of achievement.</p>
      <a class="cta" href="/courses/" data-lang="de">Zu den Kursen</a>
      <a class="cta" href="/courses/" data-lang="en">See courses</a>
      <a class="cta secondary" href="https://www.vhs-starnbergammersee.de/ueber-uns/unsere-kursleitungen/prochor-kammerzell-665-L-4048" target="_blank" rel="noreferrer" data-lang="de">Anmeldung bei der VHS</a>
      <a class="cta secondary" href="https://www.vhs-starnbergammersee.de/ueber-uns/unsere-kursleitungen/prochor-kammerzell-665-L-4048" target="_blank" rel="noreferrer" data-lang="en">Register at VHS</a>
    </div>
    <div class="hero-image" style="position: relative;">
      <img src="/stuff/microbit_werbefoto.jpg" alt="micro:bit in action">
      <div class="hero-float-card">
        <span class="hero-float-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
        </span>
        <div>
          <div class="hero-float-title" data-lang="de">Jede Stunde</div>
          <div class="hero-float-title" data-lang="en">Every session</div>
          <p class="hero-float-sub" data-lang="de">ein Erfolgserlebnis</p>
          <p class="hero-float-sub" data-lang="en">ends with a win</p>
        </div>
      </div>
      <div class="pixel-dots pixel-dots--yellow" aria-hidden="true" style="position: absolute; top: -18px; right: -18px; z-index: 0;">
        <span></span><span></span><span></span><span></span><span></span>
        <span></span><span></span><span></span><span></span><span></span>
        <span></span><span></span><span></span><span></span><span></span>
        <span></span><span></span><span></span><span></span><span></span>
      </div>
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
    <div class="section-heading-row">
      <div class="section-heading">
        <p class="eyebrow" data-lang="de">Geplante Kurse</p>
        <p class="eyebrow" data-lang="en">Upcoming courses</p>
        <h2 data-lang="de">Nächste Termine</h2>
        <h2 data-lang="en">Next sessions</h2>
      </div>
      <a class="cta secondary" href="/courses/" data-lang="de">Alle Kurse</a>
      <a class="cta secondary" href="/courses/" data-lang="en">All courses</a>
    </div>
    <div class="card-grid">
      {% assign planned = site.data.courses | where: "status", "planned" %}
      {% for course in planned %}
      <article class="card" style="display: flex; flex-direction: column; gap: 0.75rem;">
        {% if forloop.first %}
        <span class="card-icon card-icon--blue">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--blue-600)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2M15 20v2M2 15h2M20 15h2M2 9h2M20 9h2M9 2v2M9 20v2"/></svg>
        </span>
        {% else %}
        <span class="card-icon card-icon--green">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--green-600)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        </span>
        {% endif %}
        <span class="badge">{{ course.id }}</span>
        <h3 data-lang="de">{{ course.title_de }}</h3>
        <h3 data-lang="en">{{ course.title_en }}</h3>
        <p data-lang="de">{{ course.description_de | truncatewords: 28 }}</p>
        <p data-lang="en">{{ course.description_en | truncatewords: 28 }}</p>
        <div class="card-badges">
          <span class="badge badge--ink" data-lang="de">{{ course.age_de }}</span>
          <span class="badge badge--ink" data-lang="en">{{ course.age_en }}</span>
          <span class="badge badge--green" data-lang="de">{{ course.date_de }}</span>
          <span class="badge badge--green" data-lang="en">{{ course.date_en }}</span>
        </div>
        <div class="card-foot">
          <span data-lang="de">{{ course.size_de }}</span>
          <span data-lang="en">{{ course.size_en }}</span>
          <a class="cta" style="margin-top: 0;" href="https://vhs-starnbergammersee.de" target="_blank" rel="noreferrer" data-lang="de">Zur Anmeldung</a>
          <a class="cta" style="margin-top: 0;" href="https://vhs-starnbergammersee.de" target="_blank" rel="noreferrer" data-lang="en">Register</a>
        </div>
      </article>
      {% endfor %}
    </div>
  </div>
</section>

<section class="section section--dark" style="position: relative; overflow: hidden;">
  <div class="pixel-dots pixel-dots--white" aria-hidden="true" style="position: absolute; top: 24px; right: 36px; opacity: 0.5;">
    <span></span><span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span><span></span>
  </div>
  <div class="shell" style="position: relative;">
    <div class="section-heading">
      <p class="eyebrow" data-lang="de">Was wir machen</p>
      <p class="eyebrow" data-lang="en">What we do</p>
      <h2 data-lang="de">Bayerisch-modern, am Ammersee verwurzelt</h2>
      <h2 data-lang="en">Rooted at the Ammersee, built for the future</h2>
      <p style="max-width: 560px; margin-top: 0.75rem;" data-lang="de">Kinder lernen am besten, wenn sie selbst machen. Darum bauen sie bei uns echte Projekte — in kleinen Gruppen, mit Technik, die sie verstehen.</p>
      <p style="max-width: 560px; margin-top: 0.75rem;" data-lang="en">Kids learn best when they build things themselves. That's why every session ends with a working project they took home.</p>
    </div>
    <div class="values-grid">
      <div>
        <span class="dark-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
        </span>
        <h3 data-lang="de">Hands-on statt Theorie</h3>
        <h3 data-lang="en">Hands-on, not theory</h3>
        <p data-lang="de">Anfassbar, praktisch, projektbasiert.</p>
        <p data-lang="en">Tangible, practical, project-based.</p>
      </div>
      <div>
        <span class="dark-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        </span>
        <h3 data-lang="de">Jede Stunde ein Erfolgserlebnis</h3>
        <h3 data-lang="en">Every session, a win</h3>
        <p data-lang="de">Ermutigend und ergebnisorientiert — die Kinder gehen stolz nach Hause.</p>
        <p data-lang="en">Encouraging and outcome-driven — kids leave proud every time.</p>
      </div>
      <div>
        <span class="dark-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        </span>
        <h3 data-lang="de">Klein &amp; begleitet</h3>
        <h3 data-lang="en">Small &amp; supported</h3>
        <p data-lang="de">Kleine Gruppen mit persönlicher Betreuung.</p>
        <p data-lang="en">Small groups with personal attention.</p>
      </div>
      <div>
        <span class="dark-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
        </span>
        <h3 data-lang="de">Zugänglich &amp; günstig</h3>
        <h3 data-lang="en">Accessible &amp; affordable</h3>
        <p data-lang="de">Technik, die man mit einfachen Mitteln auch zuhause weitermachen kann.</p>
        <p data-lang="en">Technology you can explore further at home with simple tools.</p>
      </div>
    </div>
  </div>
</section>

<section class="section" style="background: var(--paper);">
  <div class="shell">
    <div class="section-heading">
      <p class="eyebrow" data-lang="de">Roboteria-Merch</p>
      <p class="eyebrow" data-lang="en">Roboteria Merch</p>
      <h2 data-lang="de">Zeig, dass du dabei warst!</h2>
      <h2 data-lang="en">Show you were there!</h2>
    </div>
    <div class="card-grid">
      <article class="card" style="grid-column: 1 / -1;">
        <p data-lang="de">T-Shirts, Hoodies und mehr mit dem Roboteria-Logo &ndash; perfekt als Erinnerung an deinen Kurs oder als Geschenkidee. Alle Artikel werden auf Bestellung gedruckt und direkt nach Hause geliefert.</p>
        <p data-lang="en">T-shirts, hoodies, and more with the Roboteria logo &ndash; a great keepsake from your course or a gift idea. All items are printed on demand and shipped directly to your door.</p>
        <a class="cta" href="https://roboteria.myspreadshop.de/" target="_blank" rel="noreferrer" data-lang="de">Zum Shop</a>
        <a class="cta" href="https://roboteria.myspreadshop.de/" target="_blank" rel="noreferrer" data-lang="en">Visit the shop</a>
      </article>
    </div>
  </div>
</section>

<section class="section" style="background: var(--paper-soft);">
  <div class="shell">
    <div class="section-heading-row">
      <div class="section-heading">
        <p class="eyebrow" data-lang="de">micro:bit Projekte</p>
        <p class="eyebrow" data-lang="en">micro:bit projects</p>
        <h2 data-lang="de">Ideen zum Bauen</h2>
        <h2 data-lang="en">Ideas to build</h2>
      </div>
      <a class="cta secondary" href="/projects/" data-lang="de">Mehr Projekte</a>
      <a class="cta secondary" href="/projects/" data-lang="en">More projects</a>
    </div>
    <div class="card-grid">
      <article class="card" style="display: flex; flex-direction: column; gap: 0.5rem;">
        <span class="card-icon card-icon--blue">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--blue-600)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M12 1v3M12 20v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M1 12h3M20 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></svg>
        </span>
        <span class="badge badge--ink" data-lang="de">Projektidee</span>
        <span class="badge badge--ink" data-lang="en">Project idea</span>
        <h3 data-lang="de">Leuchtender Kompass</h3>
        <h3 data-lang="en">Glowing compass</h3>
        <p data-lang="de">Wir nutzen den Kompass-Sensor, um eine Richtung mit LEDs zu markieren.</p>
        <p data-lang="en">Use the compass sensor to highlight a direction with LEDs.</p>
      </article>
      <article class="card" style="display: flex; flex-direction: column; gap: 0.5rem;">
        <span class="card-icon card-icon--green">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--green-600)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
        </span>
        <span class="badge badge--ink" data-lang="de">Projektidee</span>
        <span class="badge badge--ink" data-lang="en">Project idea</span>
        <h3 data-lang="de">Schrittzähler</h3>
        <h3 data-lang="en">Step counter</h3>
        <p data-lang="de">Ein Projekt mit dem Beschleunigungssensor für Bewegungserkennung.</p>
        <p data-lang="en">A project using the accelerometer to detect movement.</p>
      </article>
      <article class="card" style="display: flex; flex-direction: column; gap: 0.5rem;">
        <span class="card-icon card-icon--yellow">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--yellow-600)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
        </span>
        <span class="badge badge--ink" data-lang="de">Projektidee</span>
        <span class="badge badge--ink" data-lang="en">Project idea</span>
        <h3 data-lang="de">Mini-Musikbox</h3>
        <h3 data-lang="en">Mini music box</h3>
        <p data-lang="de">Wir programmieren kleine Melodien und steuern sie über Buttons.</p>
        <p data-lang="en">Program short melodies and control them with buttons.</p>
      </article>
    </div>
  </div>
</section>
