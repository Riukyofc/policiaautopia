function renderHierarquia(){return `
<div class="page" id="page-hierarquia">
<div class="page-header"><h2>Organização da Corporação</h2><p>Estrutura que mantém a Segurança Pública de Utopia ágil, organizada e eficiente.</p></div>

<div class="grid-2 fade-up">
<div>
<div class="section-heading"><h3>Divisões Especializadas</h3></div>
<div class="grid-2" style="margin-bottom:0">
<div class="card"><div class="card-icon" style="background:rgba(26,94,186,0.1)"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" style="color:var(--blue)"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"/></svg></div><h3>R.P.M</h3><p>Rádio Patrulha Militar. Base da polícia, patrulhamento convencional.</p></div>
<div class="card"><div class="card-icon" style="background:rgba(15,23,42,0.1)"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" style="color:#1e293b"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"/></svg></div><h3>G.O.T</h3><p>Unidade Tática. Armamento pesado, ataques coordenados.</p></div>
<div class="card"><div class="card-icon" style="background:rgba(217,119,6,0.1)"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" style="color:#d97706"><path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"/></svg></div><h3>G.R.R / G.T.M</h3><p>Resposta Rápida (SPEED). Acompanhamentos extremos.</p></div>
<div class="card"><div class="card-icon" style="background:rgba(22,163,74,0.1)"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" style="color:#16a34a"><path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"/></svg></div><h3>G.R.A.E.R</h3><p>Unidade Aérea. Suporte tático e prioridade visual.</p></div>
</div>
</div>

<div>
<div class="card" style="padding:2rem">
<div class="section-heading"><h3>Hierarquia Militar</h3></div>
<div class="timeline">
<div class="tier"><div class="tier-dot" style="background:#d97706"></div><div class="tier-card"><div class="tier-label" style="color:#d97706">Alto Escalão</div><div class="tier-ranks"><span class="rank-badge">Coronel</span><span class="rank-badge">Ten. Coronel</span><span class="rank-badge">Major</span></div></div></div>
<div class="tier"><div class="tier-dot" style="background:var(--blue)"></div><div class="tier-card"><div class="tier-label" style="color:var(--blue)">Alto Comando</div><div class="tier-ranks"><span class="rank-badge">Capitão</span><span class="rank-badge">1º Tenente</span><span class="rank-badge">2º Tenente</span></div></div></div>
<div class="tier"><div class="tier-dot" style="background:#1e293b"></div><div class="tier-card"><div class="tier-label" style="color:#1e293b">Aspirante</div><div class="tier-ranks"><span class="rank-badge">Aspirante a Oficial</span></div></div></div>
<div class="tier"><div class="tier-dot" style="background:#64748b"></div><div class="tier-card"><div class="tier-label" style="color:#64748b">Subtenentes & Sargentos</div><div class="tier-ranks"><span class="rank-badge">Subtenente</span><span class="rank-badge">1º Sgt</span><span class="rank-badge">2º Sgt</span><span class="rank-badge">3º Sgt</span></div></div></div>
<div class="tier"><div class="tier-dot" style="background:#94a3b8"></div><div class="tier-card"><div class="tier-label" style="color:#94a3b8">Cabos & Soldados</div><div class="tier-ranks"><span class="rank-badge">Cabo</span><span class="rank-badge">Soldado</span><span class="rank-badge">Recruta</span></div></div></div>
</div>
</div>
</div>
</div>

<div class="grid-2 fade-up">
<div class="card" style="padding:1.5rem">
<div class="section-heading"><h3>Códigos Q</h3></div>
<div class="code-grid">
<div class="code-chip" data-copy="QAP"><span class="code">QAP</span><span class="desc">Na escuta</span></div>
<div class="code-chip" data-copy="QRR"><span class="code">QRR</span><span class="desc">Apoio</span></div>
<div class="code-chip" data-copy="QRL"><span class="code">QRL</span><span class="desc">Ocupado</span></div>
<div class="code-chip" data-copy="QRU"><span class="code">QRU</span><span class="desc">Ocorrência</span></div>
<div class="code-chip" data-copy="QRV"><span class="code">QRV</span><span class="desc">Às suas ordens</span></div>
<div class="code-chip" data-copy="QTX"><span class="code">QTX</span><span class="desc">Saindo</span></div>
<div class="code-chip" data-copy="QRX"><span class="code">QRX</span><span class="desc">Prioridade</span></div>
<div class="code-chip" data-copy="QTH"><span class="code">QTH</span><span class="desc">Localização</span></div>
<div class="code-chip" data-copy="QTI"><span class="code">QTI</span><span class="desc">A caminho</span></div>
<div class="code-chip" data-copy="QTA"><span class="code">QTA</span><span class="desc">Cancelar</span></div>
<div class="code-chip" data-copy="QRA"><span class="code">QRA</span><span class="desc">Identificação</span></div>
<div class="code-chip" data-copy="TKS"><span class="code">TKS</span><span class="desc">Obrigado</span></div>
</div>
<p style="font-size:0.72rem;color:var(--muted);margin-top:12px;text-align:center">Clique para copiar</p>
</div>
<div class="card" style="padding:1.5rem">
<div class="section-heading"><h3>Códigos de Situação</h3></div>
<div style="display:flex;flex-direction:column;gap:8px">
<div class="code-chip"><span class="code" style="color:#16a34a">CÓD 1</span><span class="desc">Baixo risco. Trânsito, rotina.</span></div>
<div class="code-chip"><span class="code" style="color:#d97706">CÓD 2</span><span class="desc">Média. Suspeita, verificação.</span></div>
<div class="code-chip"><span class="code" style="color:#dc2626">CÓD 3</span><span class="desc">Alta. Flagrante, suspeito armado.</span></div>
<div class="code-chip"><span class="code" style="color:var(--blue)">CÓD 4</span><span class="desc">Sob controle (área limpa).</span></div>
<div class="code-chip" style="border-color:rgba(220,38,38,0.3);background:rgba(220,38,38,0.04)"><span class="code" style="color:#991b1b">CÓD 5</span><span class="desc">Fogo aberto (Vermelho).</span></div>
<div class="code-chip"><span class="code" style="color:#6366f1">CÓD 6</span><span class="desc">Equipe no local investigando.</span></div>
</div>
</div>
</div>
</div>`;}
