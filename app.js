// ── UTILS ──────────────────────────────────────────
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

// ── LOADING SCREEN ──────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const l = $('#loading');
    l.style.opacity = '0';
    setTimeout(() => { l.style.display = 'none'; setupApp(); }, 500);
  }, 1200);
});

function setupApp() {
  setupTheme();
  setupSidebar();
  setupNavigation();
  setupSearch();
  setupTabs();
  setupAccordions();
  setupModal();
  setupProgress();
  setupScrollAnimations();
}

// ── THEME ──────────────────────────────────────────
function setupTheme() {
  const btn = $('#theme-btn');
  const stored = localStorage.getItem('pm-theme') || 'light';
  setTheme(stored);
  btn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
  });
}
function setTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  localStorage.setItem('pm-theme', t);
  const btn = $('#theme-btn');
  btn.innerHTML = t === 'dark'
    ? `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"/></svg>`
    : `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"/></svg>`;
}

// ── SIDEBAR & MOBILE ────────────────────────────────
function setupSidebar() {
  const sidebar = $('#sidebar');
  const overlay = $('#sidebar-overlay');
  const menuBtn = $('#menu-btn');
  menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('visible');
  });
  overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('visible');
  });
}

// ── NAVIGATION ──────────────────────────────────────
function setupNavigation() {
  const navItems = $$('.nav-item[data-page]');
  const pages = $$('.page');
  const heroBtn1 = $('#hero-btn-manual');
  const heroBtn2 = $('#hero-btn-materiais');

  function navigate(pageId) {
    pages.forEach(p => p.classList.remove('active'));
    navItems.forEach(n => n.classList.remove('active'));
    const target = $(`#page-${pageId}`);
    const navItem = $(`.nav-item[data-page="${pageId}"]`);
    if (target) target.classList.add('active');
    if (navItem) navItem.classList.add('active');
    // update breadcrumb
    const labels = { home: 'Início', regras: 'Manual de Conduta', cursos: 'Materiais', hierarquia: 'Hierarquia' };
    $('#breadcrumb-current').textContent = labels[pageId] || pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // close mobile sidebar
    $('#sidebar').classList.remove('open');
    $('#sidebar-overlay').classList.remove('visible');
  }

  navItems.forEach(item => {
    item.addEventListener('click', () => navigate(item.dataset.page));
  });

  if (heroBtn1) heroBtn1.addEventListener('click', () => navigate('regras'));
  if (heroBtn2) heroBtn2.addEventListener('click', () => navigate('cursos'));

  // start on home
  navigate('home');
}

// ── READING PROGRESS ────────────────────────────────
function setupProgress() {
  const bar = $('#progress-bar');
  window.addEventListener('scroll', () => {
    const h = document.documentElement;
    const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    bar.style.width = pct + '%';
  });
}

// ── SEARCH ──────────────────────────────────────────
const SEARCH_DATA = [
  { section: 'Hierarquia', title: 'Coronel / Tenente Coronel / Major', text: 'Alto Escalão da corporação' },
  { section: 'Hierarquia', title: 'Capitão / Tenente', text: 'Alto Comando' },
  { section: 'Hierarquia', title: 'Sargento / Subtenente', text: 'Subtenentes e Sargentos' },
  { section: 'Hierarquia', title: 'Cabo / Soldado / Recruta', text: 'Base da corporação' },
  { section: 'Código Q', title: 'QAP', text: 'Na escuta' },
  { section: 'Código Q', title: 'QRR', text: 'Apoio terrestre' },
  { section: 'Código Q', title: 'QRU', text: 'Ocorrência' },
  { section: 'Código Q', title: 'QRX', text: 'Cessar comunicação / Prioridade' },
  { section: 'Código Q', title: 'QRL', text: 'Ocupado' },
  { section: 'Código Q', title: 'QRV', text: 'Às suas ordens' },
  { section: 'Código Q', title: 'QTX', text: 'Saindo de serviço' },
  { section: 'Código Q', title: 'QTH', text: 'Localização' },
  { section: 'Código Q', title: 'QTI', text: 'A caminho' },
  { section: 'Código Q', title: 'QTA', text: 'Cancelar mensagem' },
  { section: 'Código Q', title: 'QRA', text: 'Identificação / Nome' },
  { section: 'Código Q', title: 'TKS', text: 'Obrigado' },
  { section: 'Situação', title: 'Código 0', text: 'Em patrulha rotineira' },
  { section: 'Situação', title: 'Código 1', text: 'Baixo risco - trânsito, rotina' },
  { section: 'Situação', title: 'Código 2', text: 'Média intensidade - suspeita, verificação' },
  { section: 'Situação', title: 'Código 3', text: 'Alta intensidade - flagrante, suspeito armado' },
  { section: 'Situação', title: 'Código 4', text: 'Sob controle - área limpa' },
  { section: 'Situação', title: 'Código 5', text: 'Fogo aberto - Código Vermelho' },
  { section: 'Situação', title: 'Código 6', text: 'Equipe no local investigando' },
  { section: 'Unidades', title: 'R.P.M', text: 'Rádio Patrulha Militar - patrulhamento convencional' },
  { section: 'Unidades', title: 'G.O.T', text: 'Grupo de Operações Táticas - armamento pesado, alto risco' },
  { section: 'Unidades', title: 'G.R.R / G.T.M', text: 'Resposta Rápida - acompanhamentos extremos (SPEED)' },
  { section: 'Unidades', title: 'G.R.A.E.R', text: 'Unidade Aérea - suporte tático' },
  { section: 'Procedimentos', title: 'Lei de Miranda', text: 'Direito ao silêncio, ligação e advogado' },
  { section: 'Procedimentos', title: 'Força Letal - Triângulo', text: 'Habilidade, Oportunidade e Risco iminente' },
  { section: 'Procedimentos', title: 'P1 - Motorista', text: 'Comanda a viatura e manutenção' },
  { section: 'Procedimentos', title: 'P2 - Modulação', text: 'Responsável pelo rádio, GPS e abordagem' },
  { section: 'Procedimentos', title: 'P3 - Apoio', text: 'Verifica perímetro e auxilia na comunicação' },
  { section: 'Conduta', title: 'Corrupção Zero', text: 'Venda de armas gera Wipe e banimento' },
  { section: 'Conduta', title: 'À Paisana', text: 'Policiais fora de serviço não podem interferir em QRUs' },
  { section: 'Conduta', title: 'Áreas Restritas', text: 'Arsenal e celas são restritos a civis' },
];

function setupSearch() {
  const input = $('#search-input');
  const results = $('#search-results');

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { results.style.display = 'none'; return; }
    const matches = SEARCH_DATA.filter(d => d.title.toLowerCase().includes(q) || d.text.toLowerCase().includes(q));
    if (!matches.length) { results.style.display = 'none'; return; }
    results.innerHTML = matches.slice(0, 8).map(m =>
      `<div class="s-item" data-section="${m.section}"><strong>${m.section}</strong>${m.title} — <em>${m.text}</em></div>`
    ).join('');
    results.style.display = 'block';
    $$('.s-item', results).forEach(item => {
      item.addEventListener('click', () => {
        showToast(`Navegando para: ${item.dataset.section}`);
        input.value = '';
        results.style.display = 'none';
      });
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-wrap')) results.style.display = 'none';
  });
}

// ── TABS ─────────────────────────────────────────────
function setupTabs() {
  $$('.tabs').forEach(tabsEl => {
    const tabs = $$('.tab', tabsEl);
    const targetGroup = tabsEl.dataset.group;
    const contents = $$(`[data-tab-group="${targetGroup}"]`);
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));
        tab.classList.add('active');
        const target = $(`[data-tab-group="${targetGroup}"][data-tab="${tab.dataset.tab}"]`);
        if (target) target.classList.add('active');
      });
    });
  });
}

// ── ACCORDIONS ───────────────────────────────────────
function setupAccordions() {
  $$('.acc-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const body = trigger.nextElementSibling;
      const isOpen = trigger.classList.contains('open');
      // close all in same parent
      const parent = trigger.closest('.acc-list');
      if (parent) {
        $$('.acc-trigger', parent).forEach(t => {
          t.classList.remove('open');
          t.nextElementSibling.style.maxHeight = null;
        });
      }
      if (!isOpen) {
        trigger.classList.add('open');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });
}

// ── QUICK REF MODAL ──────────────────────────────────
function setupModal() {
  const modal = $('#qref-modal');
  const openBtns = $$('[data-open-modal="qref"]');
  const closeBtn = $('#modal-close');
  openBtns.forEach(btn => btn.addEventListener('click', () => modal.classList.add('open')));
  closeBtn.addEventListener('click', () => modal.classList.remove('open'));
  modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('open'); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') modal.classList.remove('open'); });
}

// ── TOAST ────────────────────────────────────────────
function showToast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

// ── SCROLL ANIMATIONS ────────────────────────────────
function setupScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  $$('.fade-up').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.16,1,0.3,1)';
    observer.observe(el);
  });
}

// ── COPY TO CLIPBOARD ────────────────────────────────
document.addEventListener('click', e => {
  const chip = e.target.closest('.code-chip[data-copy]');
  if (chip) {
    navigator.clipboard.writeText(chip.dataset.copy).then(() => showToast(`"${chip.dataset.copy}" copiado!`));
  }
});
