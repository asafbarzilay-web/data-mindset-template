// ===================================================================
// YOUR PANELS. This file is yours; the dashboard page itself is the course's.
// One list per lesson; a panel is { title, view, render(el) }.
// render(el) fills the card's body, reading ONE view in `analysis`:
//   db.schema('analysis').from('<view>').select('*')
// The page shows numbers; the view does the counting.
// ===================================================================
const BOARDS = {
  example: [
    { title: 'Taps per screen', view: 'example_taps_per_screen', render: async (el) => {
        const { data, error } = await db.schema('analysis').from('example_taps_per_screen')
          .select('*').order('taps', { ascending: false });
        if (error) { el.innerHTML = '<p class="muted">Run <code>analysis/example_taps_per_screen.sql</code> in Supabase (SQL Editor) to see this example.</p>'; return; }
        el.innerHTML = `<div class="scroll"><table><thead><tr><th>app</th><th>screen</th><th>taps</th></tr></thead><tbody>${
          data.map(r => `<tr><td>${esc(r.app)}</td><td>${esc(r.screen)}</td><td class="num">${r.taps}</td></tr>`).join('')}</tbody></table></div>`;
      } }
  ],
  'unit-01': [],
  'unit-02': [],
  'unit-08': []
};

