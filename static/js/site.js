(() => {
  const root = document.documentElement;
  const navToggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const open = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        navToggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
        navToggle.focus();
      }
    });
  }

  const themeToggle = document.querySelector('[data-theme-toggle]');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = root.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      const next = current === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
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

  const filters = document.querySelector('[data-publication-filters]');
  if (filters) {
    const search = filters.querySelector('[data-pub-search]');
    const faculty = filters.querySelector('[data-pub-faculty]');
    const theme = filters.querySelector('[data-pub-theme]');
    const year = filters.querySelector('[data-pub-year]');
    const cards = [...document.querySelectorAll('[data-publication]')];
    const count = document.querySelector('[data-pub-count]');
    const empty = document.querySelector('[data-pub-empty]');

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

    filters.addEventListener('input', applyFilters);
    filters.addEventListener('change', applyFilters);
  }
})();
