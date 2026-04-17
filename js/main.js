/* ============================================================
   Java Design Patterns — Main JavaScript
   ============================================================ */

// ── Search Data ─────────────────────────────────────────────
const SEARCH_INDEX = [
  // OOP
  { name: 'OOP Concepts', cat: 'Core', url: '../../pages/oop/index.html', icon: '🧬' },
  // SOLID
  { name: 'SOLID Principles', cat: 'Core', url: '../../pages/solid/index.html', icon: '🏛️' },
  // Principles
  { name: 'Design Principles', cat: 'Core', url: '../../pages/principles/index.html', icon: '💡' },
  // Creational
  { name: 'Singleton', cat: 'Creational', url: '../../pages/creational/singleton.html', icon: '1️⃣' },
  { name: 'Factory Method', cat: 'Creational', url: '../../pages/creational/factory.html', icon: '🏭' },
  { name: 'Abstract Factory', cat: 'Creational', url: '../../pages/creational/abstract-factory.html', icon: '🏗️' },
  { name: 'Builder', cat: 'Creational', url: '../../pages/creational/builder.html', icon: '🔨' },
  { name: 'Prototype', cat: 'Creational', url: '../../pages/creational/prototype.html', icon: '📋' },
  // Structural
  { name: 'Adapter', cat: 'Structural', url: '../../pages/structural/adapter.html', icon: '🔌' },
  { name: 'Bridge', cat: 'Structural', url: '../../pages/structural/bridge.html', icon: '🌉' },
  { name: 'Composite', cat: 'Structural', url: '../../pages/structural/composite.html', icon: '🌳' },
  { name: 'Decorator', cat: 'Structural', url: '../../pages/structural/decorator.html', icon: '🎨' },
  { name: 'Facade', cat: 'Structural', url: '../../pages/structural/facade.html', icon: '🏢' },
  { name: 'Flyweight', cat: 'Structural', url: '../../pages/structural/flyweight.html', icon: '🪶' },
  { name: 'Proxy', cat: 'Structural', url: '../../pages/structural/proxy.html', icon: '🔒' },
  // Behavioral
  { name: 'Chain of Responsibility', cat: 'Behavioral', url: '../../pages/behavioral/chain-of-responsibility.html', icon: '⛓️' },
  { name: 'Command', cat: 'Behavioral', url: '../../pages/behavioral/command.html', icon: '📝' },
  { name: 'Interpreter', cat: 'Behavioral', url: '../../pages/behavioral/interpreter.html', icon: '🔤' },
  { name: 'Iterator', cat: 'Behavioral', url: '../../pages/behavioral/iterator.html', icon: '🔄' },
  { name: 'Mediator', cat: 'Behavioral', url: '../../pages/behavioral/mediator.html', icon: '📡' },
  { name: 'Memento', cat: 'Behavioral', url: '../../pages/behavioral/memento.html', icon: '💾' },
  { name: 'Observer', cat: 'Behavioral', url: '../../pages/behavioral/observer.html', icon: '👁️' },
  { name: 'State', cat: 'Behavioral', url: '../../pages/behavioral/state.html', icon: '🔁' },
  { name: 'Strategy', cat: 'Behavioral', url: '../../pages/behavioral/strategy.html', icon: '♟️' },
  { name: 'Template Method', cat: 'Behavioral', url: '../../pages/behavioral/template-method.html', icon: '📐' },
  { name: 'Visitor', cat: 'Behavioral', url: '../../pages/behavioral/visitor.html', icon: '🚶' },
  // Unique Patterns from Guide
  { name: 'Complete Reference Guide', cat: 'Reference', url: '../../design-patterns-guide.html', icon: '📚' },
  { name: 'Object Pool', cat: 'Creational', url: '../../design-patterns-guide.html#object-pool', icon: '🏊' },
  { name: 'Null Object', cat: 'Behavioral', url: '../../design-patterns-guide.html#null-object', icon: '🚫' },
  // Architectural
  { name: 'MVC', cat: 'Architectural', url: '../../design-patterns-guide.html#mvc', icon: '🏗️' },
  { name: 'MVVM', cat: 'Architectural', url: '../../design-patterns-guide.html#mvvm', icon: '📱' },
  { name: 'Repository', cat: 'Architectural', url: '../../design-patterns-guide.html#repository', icon: '📦' },
  { name: 'CQRS', cat: 'Architectural', url: '../../design-patterns-guide.html#cqrs', icon: '⚡' },
  { name: 'Event Sourcing', cat: 'Architectural', url: '../../design-patterns-guide.html#event-sourcing', icon: '📜' },
  { name: 'Saga', cat: 'Architectural', url: '../../design-patterns-guide.html#saga', icon: '🏹' },
  { name: 'Circuit Breaker', cat: 'Architectural', url: '../../design-patterns-guide.html#circuit-breaker', icon: '🔌' },
  { name: 'Strangler Fig', cat: 'Architectural', url: '../../design-patterns-guide.html#strangler-fig', icon: '🌿' },
];

// ── Sidebar HTML ─────────────────────────────────────────────
function getSidebarHTML(rootPath = '') {
  return `
    <div class="sidebar-section">
      <div class="sidebar-label">Getting Started</div>
      <ul class="sidebar-nav">
        <li><a href="${rootPath}index.html"><span class="nav-icon">🏠</span> Home</a></li>
        <li><a href="${rootPath}pages/oop/index.html"><span class="nav-icon">🧬</span> OOP Concepts</a></li>
        <li><a href="${rootPath}pages/solid/index.html"><span class="nav-icon">🏛️</span> SOLID Principles</a></li>
        <li><a href="${rootPath}pages/principles/index.html"><span class="nav-icon">💡</span> Design Principles</a></li>
        <li><a href="${rootPath}design-patterns-guide.html"><span class="nav-icon">📚</span> Complete Guide</a></li>
      </ul>
    </div>
    <div class="sidebar-divider"></div>
    <div class="sidebar-section">
      <div class="sidebar-label">Creational Patterns</div>
      <ul class="sidebar-nav">
        <li><a href="${rootPath}pages/creational/index.html"><span class="cat-dot" style="background:var(--creational)"></span> Overview</a></li>
        <li><a href="${rootPath}pages/creational/singleton.html"><span class="cat-dot" style="background:var(--creational)"></span> Singleton</a></li>
        <li><a href="${rootPath}pages/creational/factory.html"><span class="cat-dot" style="background:var(--creational)"></span> Factory Method</a></li>
        <li><a href="${rootPath}pages/creational/abstract-factory.html"><span class="cat-dot" style="background:var(--creational)"></span> Abstract Factory</a></li>
        <li><a href="${rootPath}pages/creational/builder.html"><span class="cat-dot" style="background:var(--creational)"></span> Builder</a></li>
        <li><a href="${rootPath}pages/creational/prototype.html"><span class="cat-dot" style="background:var(--creational)"></span> Prototype</a></li>
        <li><a href="${rootPath}design-patterns-guide.html#object-pool"><span class="cat-dot" style="background:var(--creational)"></span> Object Pool</a></li>
      </ul>
    </div>
    <div class="sidebar-divider"></div>
    <div class="sidebar-section">
      <div class="sidebar-label">Structural Patterns</div>
      <ul class="sidebar-nav">
        <li><a href="${rootPath}pages/structural/index.html"><span class="cat-dot" style="background:var(--structural)"></span> Overview</a></li>
        <li><a href="${rootPath}pages/structural/adapter.html"><span class="cat-dot" style="background:var(--structural)"></span> Adapter</a></li>
        <li><a href="${rootPath}pages/structural/bridge.html"><span class="cat-dot" style="background:var(--structural)"></span> Bridge</a></li>
        <li><a href="${rootPath}pages/structural/composite.html"><span class="cat-dot" style="background:var(--structural)"></span> Composite</a></li>
        <li><a href="${rootPath}pages/structural/decorator.html"><span class="cat-dot" style="background:var(--structural)"></span> Decorator</a></li>
        <li><a href="${rootPath}pages/structural/facade.html"><span class="cat-dot" style="background:var(--structural)"></span> Facade</a></li>
        <li><a href="${rootPath}pages/structural/flyweight.html"><span class="cat-dot" style="background:var(--structural)"></span> Flyweight</a></li>
        <li><a href="${rootPath}pages/structural/proxy.html"><span class="cat-dot" style="background:var(--structural)"></span> Proxy</a></li>
      </ul>
    </div>
    <div class="sidebar-divider"></div>
    <div class="sidebar-section">
      <div class="sidebar-label">Behavioral Patterns</div>
      <ul class="sidebar-nav">
        <li><a href="${rootPath}pages/behavioral/index.html"><span class="cat-dot" style="background:var(--behavioral)"></span> Overview</a></li>
        <li><a href="${rootPath}pages/behavioral/chain-of-responsibility.html"><span class="cat-dot" style="background:var(--behavioral)"></span> Chain of Responsibility</a></li>
        <li><a href="${rootPath}pages/behavioral/command.html"><span class="cat-dot" style="background:var(--behavioral)"></span> Command</a></li>
        <li><a href="${rootPath}pages/behavioral/interpreter.html"><span class="cat-dot" style="background:var(--behavioral)"></span> Interpreter</a></li>
        <li><a href="${rootPath}pages/behavioral/iterator.html"><span class="cat-dot" style="background:var(--behavioral)"></span> Iterator</a></li>
        <li><a href="${rootPath}pages/behavioral/mediator.html"><span class="cat-dot" style="background:var(--behavioral)"></span> Mediator</a></li>
        <li><a href="${rootPath}pages/behavioral/memento.html"><span class="cat-dot" style="background:var(--behavioral)"></span> Memento</a></li>
        <li><a href="${rootPath}pages/behavioral/observer.html"><span class="cat-dot" style="background:var(--behavioral)"></span> Observer</a></li>
        <li><a href="${rootPath}pages/behavioral/state.html"><span class="cat-dot" style="background:var(--behavioral)"></span> State</a></li>
        <li><a href="${rootPath}pages/behavioral/strategy.html"><span class="cat-dot" style="background:var(--behavioral)"></span> Strategy</a></li>
        <li><a href="${rootPath}pages/behavioral/template-method.html"><span class="cat-dot" style="background:var(--behavioral)"></span> Template Method</a></li>
        <li><a href="${rootPath}pages/behavioral/visitor.html"><span class="cat-dot" style="background:var(--behavioral)"></span> Visitor</a></li>
        <li><a href="${rootPath}design-patterns-guide.html#null-object"><span class="cat-dot" style="background:var(--behavioral)"></span> Null Object</a></li>
      </ul>
    </div>
    <div class="sidebar-divider"></div>
    <div class="sidebar-section">
      <div class="sidebar-label">Architectural Patterns</div>
      <ul class="sidebar-nav">
        <li><a href="${rootPath}design-patterns-guide.html#mvc"><span class="cat-dot" style="background:var(--architectural)"></span> MVC / MVVM</a></li>
        <li><a href="${rootPath}design-patterns-guide.html#cqrs"><span class="cat-dot" style="background:var(--architectural)"></span> CQRS / Event Sourcing</a></li>
        <li><a href="${rootPath}design-patterns-guide.html#saga"><span class="cat-dot" style="background:var(--architectural)"></span> Saga Pattern</a></li>
        <li><a href="${rootPath}design-patterns-guide.html#circuit-breaker"><span class="cat-dot" style="background:var(--architectural)"></span> Circuit Breaker</a></li>
      </ul>
    </div>
    <div style="height:24px"></div>
  `;
}

// ── Init Sidebar ─────────────────────────────────────────────
function initSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;
  const rootPath = sidebar.dataset.root || '';
  sidebar.innerHTML = getSidebarHTML(rootPath);

  // Mark active link
  const current = window.location.pathname;
  sidebar.querySelectorAll('a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && current.endsWith(href.replace(/^.*\//, ''))) {
      a.classList.add('active');
    }
  });
}

// ── Mobile Menu Toggle ───────────────────────────────────────
function initMenuToggle() {
  const toggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');
  if (!toggle || !sidebar) return;

  toggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !toggle.contains(e.target)) {
      sidebar.classList.remove('open');
    }
  });
}

// ── Copy-to-Clipboard ────────────────────────────────────────
function initCodeCopy() {
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const block = btn.closest('.code-block');
      const code = block ? block.querySelector('code') : null;
      if (!code) return;
      try {
        await navigator.clipboard.writeText(code.innerText);
        btn.textContent = '✓ Copied!';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.textContent = 'Copy';
          btn.classList.remove('copied');
        }, 2000);
      } catch (err) {
        btn.textContent = 'Error';
      }
    });
  });
}

// ── Accordion ────────────────────────────────────────────────
function initAccordion() {
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const isOpen = header.classList.contains('open');
      // Close all
      document.querySelectorAll('.accordion-header').forEach(h => {
        h.classList.remove('open');
        const body = h.nextElementSibling;
        if (body) body.classList.remove('open');
      });
      // Open clicked (if was closed)
      if (!isOpen) {
        header.classList.add('open');
        const body = header.nextElementSibling;
        if (body) body.classList.add('open');
      }
    });
  });
}

// ── Search ───────────────────────────────────────────────────
function getAbsoluteUrl(relUrl) {
  // Resolve URL relative to the current document
  const a = document.createElement('a');
  a.href = relUrl;
  return a.href;
}

function initSearch() {
  const input = document.getElementById('search-input');
  const results = document.getElementById('search-results');
  const sidebar = document.getElementById('sidebar');
  if (!input || !results) return;

  const rootPath = sidebar ? (sidebar.dataset.root || '') : '';

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { results.classList.remove('visible'); results.innerHTML = ''; return; }

    const matches = SEARCH_INDEX.filter(item =>
      item.name.toLowerCase().includes(q) || item.cat.toLowerCase().includes(q)
    ).slice(0, 8);

    if (matches.length === 0) {
      results.innerHTML = `<div class="search-result-item"><span class="result-name" style="color:var(--text-muted)">No results found</span></div>`;
    } else {
      results.innerHTML = matches.map(item => {
        // Build correct URL relative to the page's root
        const url = rootPath + item.url.replace('../../', '');
        return `
          <a href="${url}" class="search-result-item">
            <span style="font-size:1.2rem">${item.icon}</span>
            <span>
              <div class="result-name">${item.name}</div>
              <div class="result-cat">${item.cat}</div>
            </span>
          </a>`;
      }).join('');
    }
    results.classList.add('visible');
  });

  document.addEventListener('click', (e) => {
    if (!input.contains(e.target) && !results.contains(e.target)) {
      results.classList.remove('visible');
    }
  });
}

// ── Syntax Highlight Helper ──────────────────────────────────
function initHighlight() {
  if (typeof hljs !== 'undefined') {
    document.querySelectorAll('pre code').forEach(block => {
      hljs.highlightElement(block);
    });
  }
}

// ── DOMContentLoaded ─────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initSidebar();
  initMenuToggle();
  initCodeCopy();
  initAccordion();
  initSearch();
  initHighlight();
});
