// ── Inject all pages into the container ──
(function(){
  const container = document.getElementById('pages-container');
  container.innerHTML = renderHome() + renderRegras() + renderCursos() + renderHierarquia();

  // Populate quick reference modal
  document.getElementById('modal-body').innerHTML = `
    <h4 style="font-weight:800;margin-bottom:12px;color:var(--navy)">Códigos Q</h4>
    <div class="code-grid" style="margin-bottom:1.5rem">
      <div class="code-chip"><span class="code">QAP</span><span class="desc">Na escuta</span></div>
      <div class="code-chip"><span class="code">QRR</span><span class="desc">Apoio</span></div>
      <div class="code-chip"><span class="code">QRL</span><span class="desc">Ocupado</span></div>
      <div class="code-chip"><span class="code">QRU</span><span class="desc">Ocorrência</span></div>
      <div class="code-chip"><span class="code">QRV</span><span class="desc">Às suas ordens</span></div>
      <div class="code-chip"><span class="code">QRX</span><span class="desc">Prioridade</span></div>
      <div class="code-chip"><span class="code">QTH</span><span class="desc">Localização</span></div>
      <div class="code-chip"><span class="code">QTI</span><span class="desc">A caminho</span></div>
      <div class="code-chip"><span class="code">QTX</span><span class="desc">Saindo</span></div>
      <div class="code-chip"><span class="code">QTA</span><span class="desc">Cancelar</span></div>
      <div class="code-chip"><span class="code">QRA</span><span class="desc">Nome</span></div>
      <div class="code-chip"><span class="code">TKS</span><span class="desc">Obrigado</span></div>
    </div>
    <h4 style="font-weight:800;margin-bottom:12px;color:var(--navy)">Códigos de Situação</h4>
    <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:1.5rem">
      <div class="code-chip"><span class="code" style="color:#16a34a">CÓD 1</span><span class="desc">Baixo risco</span></div>
      <div class="code-chip"><span class="code" style="color:#d97706">CÓD 2</span><span class="desc">Média intensidade</span></div>
      <div class="code-chip"><span class="code" style="color:#dc2626">CÓD 3</span><span class="desc">Alta intensidade</span></div>
      <div class="code-chip"><span class="code" style="color:var(--blue)">CÓD 4</span><span class="desc">Sob controle</span></div>
      <div class="code-chip" style="border-color:rgba(220,38,38,0.3)"><span class="code" style="color:#991b1b">CÓD 5</span><span class="desc">Fogo aberto</span></div>
      <div class="code-chip"><span class="code" style="color:#6366f1">CÓD 6</span><span class="desc">Equipe no local</span></div>
    </div>
    <h4 style="font-weight:800;margin-bottom:12px;color:var(--navy)">Posições VTR</h4>
    <div class="code-grid">
      <div class="code-chip"><span class="code">P1</span><span class="desc">Motorista</span></div>
      <div class="code-chip"><span class="code">P2</span><span class="desc">Modulação</span></div>
      <div class="code-chip"><span class="code">P3</span><span class="desc">Apoio</span></div>
      <div class="code-chip"><span class="code" style="color:#dc2626">P4</span><span class="desc">Suspeito</span></div>
    </div>
  `;
})();
