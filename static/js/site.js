(() => {
  const root = document.documentElement;
  if (!root.dataset.theme) {
    root.dataset.theme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  const navToggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const open = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
        navToggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
        navToggle.focus();
      }
    });
    nav.addEventListener('click', (event) => {
      if (event.target.closest('a')) {
        navToggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
      }
    });
  }

  const themeToggle = document.querySelector('[data-theme-toggle]');
  if (themeToggle) {
    const updateThemeLabel = () => {
      const dark = root.dataset.theme === 'dark';
      themeToggle.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} theme`);
    };
    updateThemeLabel();
    themeToggle.addEventListener('click', () => {
      const current = root.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      const next = current === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      updateThemeLabel();
      try { localStorage.setItem('aau-nlp-theme', next); } catch (error) {}
    });
  }

  document.querySelectorAll('[data-portrait]').forEach((portrait) => {
    const showFallback = () => {
      const wrap = portrait.closest('[data-portrait-wrap]');
      const fallback = wrap?.querySelector('[data-portrait-fallback]');
      portrait.hidden = true;
      if (fallback) fallback.hidden = false;
    };

    portrait.addEventListener('error', showFallback);
    if (portrait.complete && portrait.naturalWidth === 0) showFallback();
  });

  document.querySelectorAll('[data-trajectory]').forEach((trajectory) => {
    const start = new Date(`${trajectory.dataset.start}T12:00:00`);
    let horizonMonths = Number(trajectory.dataset.horizonMonths || 0);
    if (trajectory.classList.contains('person-timeline--phd') || trajectory.classList.contains('person-timeline--incoming')) {
      const anniversary = new Date(start.getFullYear() + 3, start.getMonth(), start.getDate(), 12);
      const extended = new Date() > anniversary;
      horizonMonths = extended ? 48 : 36;
      trajectory.dataset.horizonMonths = String(horizonMonths);
      const duration = extended ? '3–4 years' : '3 years';
      trajectory.querySelector('[data-trajectory-end-label]').textContent = duration;
      trajectory.querySelector('.person-timeline-window').hidden = !extended;
      trajectory.setAttribute('aria-label', trajectory.getAttribute('aria-label').replace(/3(?:–4)? years/, duration));
    }
    const explicitEnd = trajectory.dataset.end
      ? new Date(`${trajectory.dataset.end}T12:00:00`)
      : null;
    const end = explicitEnd || (horizonMonths
      ? new Date(start.getFullYear(), start.getMonth() + horizonMonths, start.getDate(), 12)
      : null);

    if (Number.isNaN(start.getTime())) return;

    const now = new Date();
    let progress = now < start ? 0 : 100;
    if (end && !Number.isNaN(end.getTime())) {
      progress = ((now - start) / (end - start)) * 100;
      progress = Math.max(0, Math.min(100, progress));
    }

    trajectory.style.setProperty('--trajectory-progress', `${progress.toFixed(2)}%`);
    trajectory.classList.toggle('is-future', progress === 0);
    trajectory.classList.toggle('is-complete', Boolean(explicitEnd) && progress === 100);
    trajectory.classList.toggle('is-open', !end);
  });

  const filters = document.querySelector('[data-publication-filters]');
  if (filters) {
    const search = filters.querySelector('[data-pub-search]');
    const faculty = filters.querySelector('[data-pub-faculty]');
    const theme = filters.querySelector('[data-pub-theme]');
    const year = filters.querySelector('[data-pub-year]');
    const cards = [...document.querySelectorAll('[data-publication]')];
    const count = document.querySelector('[data-pub-count]');
    const empty = document.querySelector('[data-pub-empty]');
    const controls = { q: search, faculty, theme, year };
    const restoreFilters = () => {
      const params = new URLSearchParams(window.location.search);
      Object.entries(controls).forEach(([key, control]) => {
        const value = params.get(key) || '';
        control.value = control === search || [...control.options].some(option => option.value === value) ? value : '';
      });
    };
    const updateURL = () => {
      const url = new URL(window.location.href);
      Object.entries(controls).forEach(([key, control]) => {
        if (control.value.trim()) url.searchParams.set(key, control.value.trim());
        else url.searchParams.delete(key);
      });
      history.replaceState(null, '', url);
    };
    restoreFilters();

    const applyFilters = () => {
      const query = search.value.trim().toLowerCase();
      let visible = 0;
      cards.forEach((card) => {
        const matchesSearch = !query || card.textContent.toLowerCase().includes(query);
        const matchesFaculty = !faculty.value || card.dataset.faculty.split(';').includes(faculty.value);
        const matchesTheme = !theme.value || card.dataset.theme.split(';').includes(theme.value);
        const matchesYear = !year.value || card.dataset.year === year.value;
        card.hidden = !(matchesSearch && matchesFaculty && matchesTheme && matchesYear);
        if (!card.hidden) visible += 1;
      });
      count.textContent = `${visible} publication${visible === 1 ? '' : 's'}`;
      empty.hidden = visible !== 0;
    };

    const onChange = () => { applyFilters(); updateURL(); };
    filters.addEventListener('input', onChange);
    filters.addEventListener('change', onChange);
    filters.querySelector('[data-pub-clear]').addEventListener('click', () => {
      filters.reset(); onChange(); search.focus();
    });
    window.addEventListener('popstate', () => { restoreFilters(); applyFilters(); });
    applyFilters();
  }
})();
