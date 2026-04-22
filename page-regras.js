function renderRegras(){return `
<div class="page" id="page-regras">
<div class="page-header"><h2>Manual de Conduta</h2><p>Procedimentos operacionais, abordagens, uso da força e estrutura de viaturas.</p></div>
<div class="tabs" data-group="regras">
<button class="tab active" data-tab="forca">Uso da Força</button>
<button class="tab" data-tab="abordagem">Abordagem & Prisão</button>
<button class="tab" data-tab="vtr">Procedimentos VTR</button>
</div>

<div class="tab-content active" data-tab-group="regras" data-tab="forca">
<div class="grid-2">
<div class="card" style="padding:2rem">
<div class="section-heading"><h3>Níveis de Força</h3></div>
<div class="force-item"><div class="force-num">1</div><div><h4>Presença Física</h4><p>Previne crimes apenas pela presença do uniforme.</p></div></div>
<div class="force-item"><div class="force-num">2</div><div><h4>Verbalização</h4><p>Comunicação para resolver conflitos (uso constante).</p></div></div>
<div class="force-item"><div class="force-num">3</div><div><h4>Controle de Contato</h4><p>Defesa pessoal básica, controle de mãos livres.</p></div></div>
<div class="force-item"><div class="force-num">4</div><div><h4>Controle Físico</h4><p>Submissão, algemas, spray de pimenta.</p></div></div>
<div class="force-item"><div class="force-num">5</div><div><h4>Táticas Não Letais</h4><p>Uso de Taser/Spark após esgotar tentativas anteriores.</p></div></div>
<div class="force-item"><div class="force-num" style="background:rgba(220,38,38,0.12);color:#dc2626">6</div><div><h4>Força Letal</h4><p>Último recurso. Respeitar o Triângulo: Habilidade, Oportunidade e Risco.</p></div></div>
</div>
<div class="dark-card">
<h3 style="margin-bottom:1rem">⚠️ Triângulo da Força Letal</h3>
<p style="color:rgba(255,255,255,0.7);margin-bottom:1rem">Para aplicar o nível 6, o oficial deve avaliar 3 pontos cruciais:</p>
<div style="display:flex;flex-direction:column;gap:10px">
<div style="display:flex;gap:10px;align-items:flex-start"><span style="color:#f87171;font-weight:800">✓</span><span style="color:rgba(255,255,255,0.85)"><strong>Habilidade:</strong> O suspeito possui arma capaz de causar danos graves?</span></div>
<div style="display:flex;gap:10px;align-items:flex-start"><span style="color:#f87171;font-weight:800">✓</span><span style="color:rgba(255,255,255,0.85)"><strong>Oportunidade:</strong> O suspeito está usando sua habilidade para ferir?</span></div>
<div style="display:flex;gap:10px;align-items:flex-start"><span style="color:#f87171;font-weight:800">✓</span><span style="color:rgba(255,255,255,0.85)"><strong>Risco:</strong> A vida do policial ou de terceiros está em risco iminente?</span></div>
</div>
</div>
</div>
</div>

<div class="tab-content" data-tab-group="regras" data-tab="abordagem">
<div class="grid-2">
<div>
<div class="card" style="padding:2rem">
<div class="section-heading"><h3>Legalidade de Revista</h3></div>
<div style="display:flex;flex-direction:column;gap:10px">
<div style="padding:1rem;background:var(--bg);border-radius:10px;border:1px solid var(--border)"><strong style="color:var(--blue)">Denúncia:</strong> Características batem com denúncia (cor, placa, roupa). Confere legalidade.</div>
<div style="padding:1rem;background:var(--bg);border-radius:10px;border:1px solid var(--border)"><strong style="color:var(--blue)">Ocultação Facial / Colete:</strong> Uso de máscara, coldre ou coletes sem identificação configuram crime.</div>
<div style="padding:1rem;background:var(--bg);border-radius:10px;border:1px solid var(--border)"><strong style="color:var(--blue)">Revista Feminina:</strong> Deve ser feita por oficial feminina. O método da "caixa" é PROIBIDO.</div>
</div>
</div>
<div class="dark-card" style="margin-top:1.5rem;background:linear-gradient(135deg,var(--blue),var(--navy))">
<h3 style="margin-bottom:.75rem">📜 Lei de Miranda</h3>
<p style="font-style:italic;border-left:3px solid rgba(255,255,255,0.3);padding-left:12px;color:rgba(255,255,255,0.85);margin-bottom:.75rem">"Você tem o direito de permanecer em silêncio; tudo o que disser poderá ser usado contra você. Você tem direito a uma ligação e a um advogado."</p>
<p style="font-size:0.78rem;color:rgba(255,255,255,0.5)">* Não ler a lei não anula o crime, mas implica em redução de pena (Art. 70).</p>
</div>
</div>
<div class="card" style="padding:2rem">
<div class="section-heading"><h3>Níveis de Abordagem</h3></div>
<div style="display:flex;flex-direction:column;gap:12px">
<div style="padding:1.25rem;background:var(--bg);border-radius:12px;border:1px solid var(--border)"><div style="display:flex;align-items:center;gap:8px;margin-bottom:6px"><div style="width:8px;height:8px;border-radius:50%;background:#16a34a"></div><strong style="font-size:0.82rem">CÓDIGO 1 — Baixo Risco</strong></div><p style="font-size:0.82rem;color:var(--muted)">Ocorrências rotineiras, trânsito. Diálogo é primordial.</p></div>
<div style="padding:1.25rem;background:var(--bg);border-radius:12px;border:1px solid var(--border)"><div style="display:flex;align-items:center;gap:8px;margin-bottom:6px"><div style="width:8px;height:8px;border-radius:50%;background:#d97706"></div><strong style="font-size:0.82rem">CÓDIGO 2 — Suspeita</strong></div><p style="font-size:0.82rem;color:var(--muted)">Sem confirmação visual. Teste de resíduo. Movimentos bruscos geram algema.</p></div>
<div style="padding:1.25rem;background:var(--bg);border-radius:12px;border:1px solid var(--border)"><div style="display:flex;align-items:center;gap:8px;margin-bottom:6px"><div style="width:8px;height:8px;border-radius:50%;background:#dc2626"></div><strong style="font-size:0.82rem">CÓDIGO 3 — Flagrante</strong></div><p style="font-size:0.82rem;color:var(--muted)">Confirmação do delito. Mãos na cabeça, afastar do veículo, algemar e revistar.</p></div>
</div>
</div>
</div>
</div>

<div class="tab-content" data-tab-group="regras" data-tab="vtr">
<div class="grid-2">
<div class="card" style="padding:2rem">
<div class="section-heading"><h3>Funções na Viatura (VTR)</h3></div>
<div style="display:flex;flex-direction:column;gap:10px">
<div class="force-item"><div class="force-num" style="font-size:0.85rem;font-weight:900">P1</div><div><h4>Motorista</h4><p>Comanda a barca e mantém a manutenção.</p></div></div>
<div class="force-item"><div class="force-num" style="font-size:0.85rem">P2</div><div><h4>Modulação</h4><p>Responsável pelo rádio, GPS e comandar a abordagem.</p></div></div>
<div class="force-item"><div class="force-num" style="font-size:0.85rem">P3</div><div><h4>Apoio</h4><p>Verifica perímetro, auxilia na comunicação apenas se requisitado.</p></div></div>
<div class="force-item"><div class="force-num" style="font-size:0.85rem;background:rgba(220,38,38,0.1);color:#dc2626">P4</div><div><h4>Vago (Lado Leste)</h4><p>Destinado ao suspeito. Ocupar o P4 como oficial gera punição.</p></div></div>
</div>
</div>
<div class="card" style="padding:2rem">
<div class="section-heading"><h3>Funções em Abordagem (QSV)</h3></div>
<div style="display:flex;flex-direction:column;gap:12px">
<div style="padding:1rem;border-left:4px solid var(--blue);background:rgba(26,94,186,0.04);border-radius:0 10px 10px 0"><strong style="color:var(--navy);display:block;margin-bottom:4px">Primária:</strong><span style="font-size:0.85rem;color:var(--muted)">Descem da QSV e são responsáveis diretos pela abordagem verbal e física.</span></div>
<div style="padding:1rem;border-left:4px solid var(--muted);background:var(--bg);border-radius:0 10px 10px 0"><strong style="display:block;margin-bottom:4px">Secundária:</strong><span style="font-size:0.85rem;color:var(--muted)">Descem e mantêm-se ao lado da viatura até os indivíduos saírem.</span></div>
<div style="padding:1rem;border-left:4px solid var(--border);background:var(--bg);border-radius:0 10px 10px 0"><strong style="display:block;margin-bottom:4px">Terciária:</strong><span style="font-size:0.85rem;color:var(--muted)">Permanecem na VTR para resposta rápida a fugas ou segurança 360°.</span></div>
</div>
</div>
</div>
</div>
</div>`;}
