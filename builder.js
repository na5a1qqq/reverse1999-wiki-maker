/* ════════════════════════════════
   Wiki Builder — builder.js
════════════════════════════════ */

const IMG = {
  inspire: {
    '암석': 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Afflatus/Mineral.png',
    '천체': 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Afflatus/Star.png',
    '나무': 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Afflatus/Plant.png',
    '야수': 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Afflatus/Beast.png',
    '영혼': 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Afflatus/Spirit.png',
    '지능': 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Afflatus/Intellect.png',
  },
  dmg: {
    '정신적 외상': 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Damage/Mental.png',
    '현실적 외상': 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Damage/Reality.png',
  },
  stats: {
    attack:    'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Statistics/Attack.png',
    health:    'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Statistics/Health.png',
    realityDEF:'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Statistics/Reality_DEF.png',
    mentalDEF: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Statistics/Mental_DEF.png',
    technique: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Statistics/Technique.png',
  },
  insight: {
    'LV.30': 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Level30.png',
    'LV.40': 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Level40.png',
    'LV.50': 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Level50.png',
  },
  coinMat:     'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Sharpodonty.png',
  itemHeader:  'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Items/Header.png',
  itemDivider: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Items/Divider.png',
  itemFooter:  'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Items/Footer.png',
  priceIcons: {
    '감정가': 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Items/Connoisseur.png',
    '가격':   'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Items/Oneiric_Droplet.png',
  },
  culture: [
    'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/History/History1.png',
    'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/History/History2.png',
    'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/History/History3.png',
  ],
  cultureHeader: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/History/Header.png',
  cultureFooter: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/History/Footer.png',
};

/* ──────────────────────────────
   통찰 재료 아이템 목록
   → 각 등급별로 { name, img } 형태로 추가하세요.
   → img: GitHub Pages 절대경로 사용
   → name 입력 시 "이름×" 까지 자동으로 입력됩니다.
────────────────────────────── */
const INSIGHT_ITEMS = {
  // ────── 등급 2 (총 5개) ──────
  2: [
    { name: '덜덜 이빨', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Grade2/Trembling_Tooth.png' },
    { name: '암염', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Grade2/Magnesia_Crystal.png' },
    { name: '부서진 뼛조각', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Grade2/Shattered_Bones.png' },
    { name: '은광석', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Grade2/Silver_Ore.png' },
    { name: '청소 주문', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Grade2/Spell_of_Banishing.png' },
  ],

  // ────── 등급 3 (총 15개) ──────
  3: [
    { name: '암석의 서 낱장', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Page/Mineral_Wealth.png' },
    { name: '천체의 서 낱장', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Page/Starlit_Ascent.png' },
    { name: '나무의 서 낱장', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Page/Dancing_Veimen.png' },
    { name: '야수의 서 낱장', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Page/Beastly_Thirst.png' },
    { name: '액체 전율', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Grade3/Liquefied_Terror.png' },
    { name: '고운 소금', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Grade3/Milled_Magnesia.png' },
    { name: '정체불명의 뼈', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Grade3/Esoteric_Bones.png' },
    { name: '투박한 은괴', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Grade3/Rough_Silver_Ingot.png' },
    { name: '행운의 주문', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Grade3/Spell_of_Fortune.png' },
    { name: '로마 금화', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Grade3/Solidus.png' },
    { name: '마른 매미 날개', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Grade3/Cicada_Wings.png' },
    { name: '멈추지 않는 바퀴', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Grade3/Perpetual_Cog.png' },
    { name: '여우 꼬리', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Grade3/Fox_Tail.png' },
    { name: '루미나이트 광석', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Grade3/Luminite_Ore.png' },
    { name: '뾰족한 바늘', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Grade3/Sharp_Needle.png' },
  ],

  // ────── 등급 4 (총 16개) ──────
  4: [
    { name: '암석의 서 두루마리', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Scroll/Mineral_Wealth.png' },
    { name: '천체의 서 두루마리', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Scroll/Starlit_Ascent.png' },
    { name: '나무의 서 두루마리', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Scroll/Dancing_Veimen.png' },
    { name: '야수의 서 두루마리', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Scroll/Beastly_Thirst.png' },
    { name: '이빨 상자', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Grade4/Biting_Box.png' },
    { name: '맨드레이크 절임', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Grade4/Salted_Mandrake.png' },
    { name: '쌍두골', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Grade4/Bifurcated_Skeleton.png' },
    { name: '신성한 은괴', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Grade4/Holy_Silver.png' },
    { name: '스마트 버드', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Grade4/Prophetic_Bird.png' },
    { name: '날개 열쇠', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Grade4/Winged_Key.png' },
    { name: '굽은 거위 목', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Grade4/Goose_Neck.png' },
    { name: '풀 냄새 향', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Grade4/Golden_Grass_Incense.png' },
    { name: '붉게 칠해진 점토판', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Grade4/Red_Lacquer_Slab.png' },
    { name: '사금 딱정벌레', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Grade4/Golden_Beetle.png' },
    { name: '황금 펜듈럼', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Grade4/Clawed_Pendulum.png' },
    { name: '진심의 달걀', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Grade4/Jeweled_Egg.png' },
  ],

  // ────── 등급 5 (총 16개) ──────
  5: [
    { name: '암석의 서 전권', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Tome/Mineral_Wealth.png' },
    { name: '천체의 서 전권', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Tome/Starlit_Ascent.png' },
    { name: '나무의 서 전권', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Tome/Dancing_Veimen.png' },
    { name: '야수의 서 전권', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Tome/Beastly_Thirst.png' },
    { name: '침대 밑 괴물', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Grade5/Bogeyman.png' },
    { name: '썩지 않는 원숭이 손', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Grade5/Incorrupt_Monkeypaw.png' },
    { name: '유룡의 뼈 표본', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Grade5/Wyrmling_Skeleton.png' },
    { name: '은빛 탄환', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Grade5/Silver_Bullet.png' },
    { name: '미치광이 헛소리', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Grade5/Murmur_of_Insanity.png' },
    { name: '백금 점괘판', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Grade5/Platinum_Ouija.png' },
    { name: '희미한 나방 날개등', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Grade5/Glowing_Mothwing.png' },
    { name: '바퀴와 축의 심', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Grade5/Watch_Core.png' },
    { name: '적금 나침반', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Grade5/Golden_Compass.png' },
    { name: '금종 영혼의 병', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Grade5/Goldbell_Spirit_Bottle.png' },
    { name: '에메랄드 타블렛', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Grade5/Emerald_Slate.png' },
    { name: '뿌리상자에 담긴 토끼', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Grade5/Rhizobox_Rabbit.png' },
  ],

  // ────── 등급 6 (총 6개) ──────
  6: [
    { name: '선악과', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Grade6/Fruit_of_Good_and_Evil.png' },
    { name: '미스틸레인', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Grade6/Mistilteinn.png' },
    { name: '황금 양털', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Grade6/Golden_Fleece.png' },
    { name: '쌍두사 지팡이', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Grade6/Serpent_Scepter.png' },
    { name: '라인의 황금', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Grade6/Rheingold.png' },
    { name: '움직이는 공포의 밤', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Grade6/Walking_Terror.png' },
  ],
};

/* ──────────────────────────────
   WYSIWYG — 포커스 추적
────────────────────────────── */
let _focused = null;

document.addEventListener('focusin', e => {
  if (e.target.classList.contains('rich-editor') || e.target.classList.contains('form-input')) {
    _focused = e.target;
  }
});

/* ──────────────────────────────
   서식 적용 (WYSIWYG)
────────────────────────────── */
function applyFmt(type) {
  if (!_focused) { alert('먼저 텍스트 입력 칸을 클릭하세요.'); return; }

  if (_focused.classList.contains('rich-editor')) {
    _focused.focus();
    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0) return;
    const range = sel.getRangeAt(0);
    const selectedText = range.toString();

    let el;
    if (type === 'bold')         { el = document.createElement('strong'); }
    else if (type === 'italic')  { el = document.createElement('em'); }
    else if (type === 'keyword') { el = document.createElement('span'); el.className = 'keyword'; }
    else if (type === 'pct')     { el = document.createElement('span'); el.className = 'pct'; }

    if (el) {
      el.textContent = selectedText || '텍스트';
      range.deleteContents();
      range.insertNode(el);
      range.setStartAfter(el);
      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);
    }
    updatePreview();
    return;
  }

  if (_focused.classList.contains('form-input')) {
    const map = {
      bold:    ['<strong>', '</strong>'],
      italic:  ['<em>', '</em>'],
      keyword: ['<span class="keyword">', '</span>'],
      pct:     ['<span class="pct">', '</span>'],
    };
    const [o, c] = map[type] || ['',''];
    const s = _focused.selectionStart, e2 = _focused.selectionEnd;
    const sel = _focused.value.slice(s, e2);
    _focused.value = _focused.value.slice(0, s) + o + sel + c + _focused.value.slice(e2);
    _focused.selectionStart = s + o.length;
    _focused.selectionEnd   = s + o.length + sel.length;
    _focused.focus();
    updatePreview();
  }
}

/* ──────────────────────────────
   각주 — 새 흐름
   1. 본문에서 단어 드래그
   2. 각주 버튼 클릭 → 이름 입력 prompt
   3. 드래그한 단어 뒤에 [이름] 자동 삽입
   4. 각주 섹션에 해당 이름으로 자동 항목 추가
   5. 각주 섹션에서 내용 입력 → 툴팁 자동 반영
────────────────────────────── */
function insertFootnote() {
  if (!_focused || !_focused.classList.contains('rich-editor')) {
    alert('각주를 삽입할 텍스트 칸을 먼저 클릭하세요.');
    return;
  }

  _focused.focus();
  const sel = window.getSelection();
  if (!sel || sel.rangeCount === 0) return;

  // 선택된 텍스트 저장 (드래그한 단어)
  const range = sel.getRangeAt(0);
  const selectedText = range.toString();

  // 각주 이름 입력
  const fnName = prompt('각주 이름을 입력하세요:\n예) 1, 2, 코러스앙상블');
  if (!fnName || !fnName.trim()) return;
  const name = fnName.trim();

  // 이미 같은 이름의 각주가 있는지 확인
  const existing = Array.from(document.getElementById('footnote-list').children)
    .find(item => (item.querySelector('.fn-name') || {}).value === name);

  if (!existing) {
    // 각주 섹션에 자동 추가
    addFootnoteWithName(name);
  }

  // 본문에 삽입: 선택된 텍스트 + [이름] 각주 표시
  // fn-tip 내용은 각주 섹션의 내용과 연동 (updatePreview가 처리)
  const wrapper = document.createElement('span');
  wrapper.className = 'fn-tooltip';
  wrapper.setAttribute('data-fn', name);  // 각주 이름으로 연결
  wrapper.innerHTML = `<sup class="fn">[${escHtml(name)}]</sup><span class="fn-tip"></span>`;

  if (selectedText) {
    const textNode = document.createTextNode(selectedText);
    const frag = document.createDocumentFragment();
    frag.appendChild(textNode);
    frag.appendChild(wrapper);
    range.deleteContents();
    range.insertNode(frag);
  } else {
    range.insertNode(wrapper);
  }

  updatePreview();
}

/* 각주 이름으로 직접 추가 (insertFootnote 내부에서 호출) */
function addFootnoteWithName(name) {
  const wrap = document.createElement('div');
  wrap.className = 'repeat-item';
  repeatCounts['footnote-list'] = (repeatCounts['footnote-list'] || 0) + 1;
  wrap.innerHTML = `
    <div class="repeat-item-header">
      <span class="repeat-num">각주 ${repeatCounts['footnote-list']}</span>
      <button class="remove-btn" onclick="this.closest('.repeat-item').remove();updatePreview()">✕ 삭제</button>
    </div>
    <div class="form-group">
      <label class="form-label">각주 이름 <span class="form-label-sub">[${escHtml(name)}]</span></label>
      <input class="form-input fn-name" value="${escHtml(name)}" readonly style="background:#f0f0f0;color:#666;">
    </div>
    <div class="form-group">
      <label class="form-label">내용 <span class="form-label-sub">툴팁에 자동 반영</span></label>
      <div class="rich-editor fn-content" contenteditable="true" data-placeholder="각주 내용을 입력하세요."></div>
    </div>
  `;
  document.getElementById('footnote-list').appendChild(wrap);
  wrap.querySelectorAll('input').forEach(el => {
    el.addEventListener('input', updatePreview);
    el.addEventListener('focusin', () => { _focused = el; });
  });
  wrap.querySelectorAll('.rich-editor').forEach(el => {
    el.addEventListener('input', updatePreview);
    el.addEventListener('focusin', () => { _focused = el; });
  });
}

/* 수동으로 각주 추가 (각주 탭에서 + 버튼) */
function addFootnote() {
  const wrap = document.createElement('div');
  wrap.className = 'repeat-item';
  repeatCounts['footnote-list'] = (repeatCounts['footnote-list'] || 0) + 1;
  wrap.innerHTML = `
    <div class="repeat-item-header">
      <span class="repeat-num">각주 ${repeatCounts['footnote-list']}</span>
      <button class="remove-btn" onclick="this.closest('.repeat-item').remove();updatePreview()">✕ 삭제</button>
    </div>
    <div class="form-group">
      <label class="form-label">각주 이름</label>
      <input class="form-input fn-name" placeholder="예: 1, 2, 코러스앙상블">
    </div>
    <div class="form-group">
      <label class="form-label">내용 <span class="form-label-sub">툴팁에 자동 반영</span></label>
      <div class="rich-editor fn-content" contenteditable="true" data-placeholder="각주 내용을 입력하세요."></div>
    </div>
  `;
  document.getElementById('footnote-list').appendChild(wrap);
  wrap.querySelectorAll('input').forEach(el => {
    el.addEventListener('input', updatePreview);
    el.addEventListener('focusin', () => { _focused = el; });
  });
  wrap.querySelectorAll('.rich-editor').forEach(el => {
    el.addEventListener('input', updatePreview);
    el.addEventListener('focusin', () => { _focused = el; });
  });
}

/* ──────────────────────────────
   커스텀 드롭다운 (영감/데미지)
────────────────────────────── */
function initDropdowns() {
  buildCustomSelect('inspire-dd', 'ib-inspire', 'inspire-display', Object.entries(IMG.inspire));
  buildCustomSelect('dmg-dd', 'ib-dmg', 'dmg-display', Object.entries(IMG.dmg));
  document.addEventListener('click', e => {
    if (!e.target.closest('.custom-select-wrap')) {
      document.querySelectorAll('.custom-select-dropdown.open').forEach(d => d.classList.remove('open'));
    }
  });
}

function buildCustomSelect(ddId, hiddenId, displayId, entries) {
  const dd = document.getElementById(ddId);
  if (!dd) return;
  dd.innerHTML = '';
  entries.forEach(([label, imgSrc]) => {
    const opt = document.createElement('div');
    opt.className = 'custom-select-option';
    opt.innerHTML = `<img src="${imgSrc}" onerror="this.style.display='none'"> <span>${label}</span>`;
    opt.addEventListener('click', () => {
      document.getElementById(hiddenId).value = label;
      const disp = document.getElementById(displayId);
      disp.innerHTML = `<img src="${imgSrc}" style="width:18px;height:18px;object-fit:contain;margin-right:6px;" onerror="this.style.display='none'"> ${label}`;
      dd.querySelectorAll('.custom-select-option').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      dd.classList.remove('open');
      updatePreview();
    });
    dd.appendChild(opt);
  });
}

function toggleSelect(ddId) {
  const dd = document.getElementById(ddId);
  document.querySelectorAll('.custom-select-dropdown').forEach(d => { if (d.id !== ddId) d.classList.remove('open'); });
  dd.classList.toggle('open');
}

/* ──────────────────────────────
   이미지 업로드 / 삭제
────────────────────────────── */
function previewImg(input, prevId, dataId, clearId) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    const prev = document.getElementById(prevId);
    const data = document.getElementById(dataId);
    const btn  = document.getElementById(clearId);
    if (prev) { prev.src = e.target.result; prev.style.display = 'block'; }
    if (data) data.value = e.target.result;
    if (btn)  btn.style.display = 'block';
    updatePreview();
  };
  reader.readAsDataURL(file);
}

function clearImg(prevId, dataId, clearId) {
  const prev = document.getElementById(prevId);
  const data = document.getElementById(dataId);
  const btn  = document.getElementById(clearId);
  if (prev) { prev.src = ''; prev.style.display = 'none'; }
  if (data) data.value = '';
  if (btn)  btn.style.display = 'none';
  updatePreview();
}

function previewImgEl(input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    const wrap = input.closest('.img-upload-group') || input.closest('.repeat-item');
    if (!wrap) return;
    const prev = wrap.querySelector('.img-preview');
    const data = wrap.querySelector('input[type=hidden]');
    const btn  = wrap.querySelector('.img-clear-btn');
    if (prev) { prev.src = e.target.result; prev.style.display = 'block'; }
    if (data) data.value = e.target.result;
    if (btn)  btn.style.display = 'block';
    updatePreview();
  };
  reader.readAsDataURL(file);
}

function clearImgEl(btn) {
  const wrap = btn.closest('.img-upload-group') || btn.closest('.repeat-item');
  if (!wrap) return;
  const prev = wrap.querySelector('.img-preview');
  const data = wrap.querySelector('input[type=hidden]');
  if (prev) { prev.src = ''; prev.style.display = 'none'; }
  if (data) data.value = '';
  btn.style.display = 'none';
  updatePreview();
}

/* ──────────────────────────────
   rich-editor 값 가져오기/설정
────────────────────────────── */
function getEditor(id) {
  const el = document.getElementById(id);
  return el ? el.innerHTML : '';
}

function setEditor(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html || '';
}

function getEditorEl(el) {
  return el ? el.innerHTML : '';
}

function setEditorEl(el, html) {
  if (el) el.innerHTML = html || '';
}

/* ──────────────────────────────
   탭 전환
────────────────────────────── */
function switchTab(id) {
  document.querySelectorAll('.form-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.getElementById('sec-' + id).classList.add('active');
  event.target.classList.add('active');
}

/* ──────────────────────────────
   반복 항목 추가 헬퍼
────────────────────────────── */
let repeatCounts = {};
function addRepeatItem(containerId, html, label) {
  repeatCounts[containerId] = (repeatCounts[containerId] || 0) + 1;
  const n = repeatCounts[containerId];
  const wrap = document.createElement('div');
  wrap.className = 'repeat-item';
  wrap.innerHTML = `
    <div class="repeat-item-header">
      <span class="repeat-num">${label ? label + ' ' : ''}${n}</span>
      <button class="remove-btn" onclick="this.closest('.repeat-item').remove();updatePreview()">✕ 삭제</button>
    </div>${html}`;
  document.getElementById(containerId).appendChild(wrap);

  wrap.querySelectorAll('input,select').forEach(el => {
    el.addEventListener('input', updatePreview);
    el.addEventListener('change', updatePreview);
    el.addEventListener('focusin', () => { _focused = el; });
  });
  wrap.querySelectorAll('.rich-editor').forEach(el => {
    el.addEventListener('input', updatePreview);
    el.addEventListener('focusin', () => { _focused = el; });
  });
  wrap.querySelectorAll('input[type=file]').forEach(el => el.addEventListener('change', updatePreview));
}

/* ──────────────────────────────
   계승 이미지 — 순서대로 자동 제공 (최대 3개)
   → 추가 버튼 누를 때마다 순서대로 자동 세팅
   → 직접 수정하려면 아래 URL만 바꾸세요
────────────────────────────── */
const INHERIT_IMGS = [
  // 계승 1번 이미지
  'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Insight1.png',
  // 계승 2번 이미지
  'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Insight2.png',
  // 계승 3번 이미지
  'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Insight/Insight3.png',
];

/* ──────────────────────────────
   마도술 타입 아이콘 — 9개
   → 드롭다운으로 선택
   → 직접 수정하려면 아래 { name, img } 를 바꾸세요
────────────────────────────── */
const SPELL_TYPE_ICONS = [
  // { name: '아이콘 이름', img: 'URL' }
  { name: '공격', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Incantations/Attack.png' },
  { name: '디버프', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Incantations/Debuff.png' },
  { name: '버프', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Incantations/Buff.png' },
  { name: '치료', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Incantations/Health.png' },
  { name: '카운터', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Incantations/Counter.png' },
  { name: '채널', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Incantations/Channel.png' },
  { name: '순발력', img: 'https://na5a1qqq.github.io/reverse1999-wiki-maker/images/Incantations/Adaptive.png' },
];
function imgGroupHTML(label, previewClass) {
  return `
  <div class="form-group img-upload-group">
    <label class="form-label">${label}</label>
    <div class="img-upload-wrap">
      <input type="file" accept="image/*" onchange="previewImgEl(this)">
      <div class="img-upload-label">📁 업로드</div>
      <img class="img-preview ${previewClass}" style="max-height:60px;">
    </div>
    <input type="hidden" class="${previewClass.replace('-prev','-data')}">
    <button class="img-clear-btn" onclick="clearImgEl(this)">✕ 삭제</button>
  </div>`;
}

/* ──────────────────────────────
   통찰 재료 드롭다운 빌더
   → 등급 선택 시 INSIGHT_ITEMS[grade] 목록으로 드롭다운 구성
   → 아이템 선택 시 이미지 자동 세팅 + "이름×" 자동 입력
────────────────────────────── */
function buildMatGradeSelect(wrap) {
  const gradeSelect = wrap.querySelector('.mat-grade');
  const itemSelect  = wrap.querySelector('.mat-item-select');
  const txtInput    = wrap.querySelector('.mat-txt');
  const dataInput   = wrap.querySelector('.mat-img-data');
  const prevImg     = wrap.querySelector('.mat-img-prev');

  if (!gradeSelect || !itemSelect) return;

  function refreshItemList() {
    const grade = parseInt(gradeSelect.value);
    const items = INSIGHT_ITEMS[grade] || [];
    itemSelect.innerHTML = '<option value="">— 아이템 선택 —</option>';
    items.forEach((item, i) => {
      const opt = document.createElement('option');
      opt.value = i;
      opt.textContent = item.name;
      itemSelect.appendChild(opt);
    });
    // 아이템 목록이 없으면 안내
    if (items.length === 0) {
      const opt = document.createElement('option');
      opt.value = '';
      opt.textContent = '(아이템 없음 — builder.js에 추가하세요)';
      itemSelect.appendChild(opt);
    }
  }

  gradeSelect.addEventListener('change', () => {
    refreshItemList();
    // 선택 초기화
    if (dataInput) dataInput.value = '';
    if (prevImg)   { prevImg.src = ''; prevImg.style.display = 'none'; }
    updatePreview();
  });

  itemSelect.addEventListener('change', () => {
    const grade = parseInt(gradeSelect.value);
    const items = INSIGHT_ITEMS[grade] || [];
    const idx   = parseInt(itemSelect.value);
    if (isNaN(idx) || !items[idx]) return;
    const item = items[idx];
    // 이미지 세팅
    if (dataInput) dataInput.value = item.img;
    if (prevImg)   { prevImg.src = item.img; prevImg.style.display = 'block'; }
    // 이름× 자동 입력 (아이템 바꾸면 항상 갱신)
    if (txtInput) txtInput.value = item.name + '×';
    updatePreview();
  });

  // 초기 목록 구성
  refreshItemList();
}

/* ──────────────────────────────
   각 섹션 추가 함수
────────────────────────────── */
function addStory() {
  addRepeatItem('story-list', `
    <div class="form-group"><label class="form-label">에피소드 제목</label><input class="form-input story-title"></div>
    <div class="form-group"><label class="form-label">내용</label><div class="rich-editor story-content" contenteditable="true" data-placeholder="내용을 입력하세요."></div></div>
  `, '에피소드');
}

const INSIGHT_LEVELS = ['LV.30', 'LV.40', 'LV.50'];
function addInsight() {
  const list = document.getElementById('insight-list');
  if (list.children.length >= 3) { alert('최대 3단계까지 추가 가능합니다.'); return; }
  const cnt = list.children.length;
  const lv  = INSIGHT_LEVELS[cnt];
  const lvImg = IMG.insight[lv];

  repeatCounts['insight-list'] = (repeatCounts['insight-list'] || 0) + 1;
  const wrap = document.createElement('div');
  wrap.className = 'repeat-item';
  wrap.innerHTML = `
    <div class="repeat-item-header">
      <span class="repeat-num">${cnt} 통찰 → ${cnt+1} 통찰 <span style="background:var(--accent-bg);color:var(--accent);border-radius:3px;padding:1px 6px;font-size:10px;margin-left:4px;">${lv} 고정</span></span>
      <button class="remove-btn" onclick="this.closest('.repeat-item').remove();updateInsightAddBtn();updatePreview()">✕ 삭제</button>
    </div>
    <input type="hidden" class="ins-lv" value="${lv}">
    <div class="form-group"><label class="form-label">효과 설명</label><div class="rich-editor ins-desc" contenteditable="true" data-placeholder="효과를 입력하세요."></div></div>
    <div class="sub-title" style="margin-top:8px;">재료</div>
    <!-- 첫 번째 재료: 톱니동전 고정 -->
    <div class="mat-row-fixed" style="margin-bottom:6px;">
      <div style="display:flex;align-items:center;gap:6px;font-size:11px;color:var(--text-sub);background:var(--bg-hover);border-radius:4px;padding:4px 8px;">
        <img src="${IMG.coinMat}" style="width:28px;height:28px;object-fit:contain;" onerror="this.style.display='none'">
        <span style="color:var(--text-sub);font-size:10px;">(고정) 톱니 동전</span>
      </div>
      <div class="form-group" style="margin:0;"><label class="form-label" style="font-size:10px;">이름×수량</label><input class="form-input ins-coin-txt" style="font-size:11px;" value="톱니 동전×"></div>
    </div>
    <div class="ins-mats-list"></div>
    <button class="add-btn" style="margin-top:4px;font-size:11px;" onclick="addInsightMat(this)">＋ 재료 추가</button>
  `;
  list.appendChild(wrap);
  wrap.querySelectorAll('input,select').forEach(el => { el.addEventListener('input', updatePreview); el.addEventListener('focusin', () => { _focused = el; }); });
  wrap.querySelectorAll('.rich-editor').forEach(el => { el.addEventListener('input', updatePreview); el.addEventListener('focusin', () => { _focused = el; }); });
  updateInsightAddBtn();
  updatePreview();
}

function updateInsightAddBtn() {
  const cnt = document.getElementById('insight-list').children.length;
  const btn = document.getElementById('insight-add-btn');
  if (btn) btn.disabled = cnt >= 3;
}

function addInsightMat(btn) {
  const list = btn.previousElementSibling;
  const wrap = document.createElement('div');
  wrap.className = 'mat-row';
  wrap.style.cssText = 'display:grid;grid-template-columns:60px 80px 1fr auto;gap:6px;align-items:end;margin-bottom:8px;';
  wrap.innerHTML = `
    <!-- 이미지 미리보기 (드롭다운 선택 시 자동 세팅) -->
    <div class="img-upload-group" style="text-align:center;">
      <img class="mat-img-prev img-preview" style="max-height:36px;max-width:56px;">
      <input type="hidden" class="mat-img-data">
    </div>
    <!-- 등급 선택 (2~6) -->
    <div>
      <label class="form-label" style="font-size:10px;">등급</label>
      <select class="form-select mat-grade" style="font-size:11px;">
        <option value="2">등급 2</option>
        <option value="3" selected>등급 3</option>
        <option value="4">등급 4</option>
        <option value="5">등급 5</option>
        <option value="6">등급 6</option>
      </select>
    </div>
    <!-- 아이템 드롭다운 (등급에 따라 자동 구성) -->
    <div>
      <label class="form-label" style="font-size:10px;">아이템 선택 / 이름×수량</label>
      <select class="form-select mat-item-select" style="font-size:11px;margin-bottom:4px;"></select>
      <input class="form-input mat-txt" style="font-size:11px;" placeholder="이름×수량 직접 입력 가능">
    </div>
    <!-- 삭제 버튼 -->
    <div style="padding-top:18px;">
      <button onclick="this.closest('.mat-row').remove();updatePreview();" style="background:var(--red-bg);border:1px solid var(--red);color:var(--red);border-radius:4px;padding:4px 7px;cursor:pointer;font-size:11px;">✕</button>
    </div>
  `;
  list.appendChild(wrap);
  wrap.querySelectorAll('input,select').forEach(el => el.addEventListener('input', updatePreview));
  wrap.querySelectorAll('input,select').forEach(el => el.addEventListener('change', updatePreview));
  // 등급별 드롭다운 초기화
  buildMatGradeSelect(wrap);
}

function addMorph() {
  const idx = document.getElementById('morph-list').children.length + 1;
  addRepeatItem('morph-list', `
    <div class="form-group"><label class="form-label">형상 레벨</label><input class="form-input morph-lv" value="LV.${idx}"></div>
    <div class="form-group"><label class="form-label">효과 설명</label><div class="rich-editor morph-desc" contenteditable="true" data-placeholder="효과를 입력하세요."></div></div>
  `, '형상');
}

function addInherit() {
  const list = document.getElementById('inherit-list');
  if (list.children.length >= 3) { alert('계승은 최대 3개까지 추가 가능합니다.'); return; }
  const idx = list.children.length;  // 0, 1, 2
  const autoImg = INHERIT_IMGS[idx] || '';

  repeatCounts['inherit-list'] = (repeatCounts['inherit-list'] || 0) + 1;
  const wrap = document.createElement('div');
  wrap.className = 'repeat-item';
  wrap.innerHTML = `
    <div class="repeat-item-header">
      <span class="repeat-num">계승 ${repeatCounts['inherit-list']}</span>
      <button class="remove-btn" onclick="this.closest('.repeat-item').remove();updatePreview()">✕ 삭제</button>
    </div>
    <div class="form-group">
      <label class="form-label">계승 이미지 <span class="form-label-sub">자동 제공 (INHERIT_IMGS[${idx}])</span></label>
      <div style="display:flex;align-items:center;gap:8px;background:var(--bg-hover);border-radius:4px;padding:6px 10px;">
        <img src="${autoImg}" style="width:36px;height:36px;object-fit:contain;" onerror="this.style.display='none'">
        <span style="font-size:11px;color:var(--text-sub);">순서 자동 배정</span>
      </div>
      <input type="hidden" class="inh-img-data" value="${autoImg}">
    </div>
    <div class="form-group"><label class="form-label">효과 설명</label><div class="rich-editor inh-desc" contenteditable="true" data-placeholder="효과를 입력하세요."></div></div>
  `;
  list.appendChild(wrap);
  wrap.querySelectorAll('input,select').forEach(el => { el.addEventListener('input', updatePreview); el.addEventListener('focusin', () => { _focused = el; }); });
  wrap.querySelectorAll('.rich-editor').forEach(el => { el.addEventListener('input', updatePreview); el.addEventListener('focusin', () => { _focused = el; }); });
  // 계승 추가 버튼 활성화 여부 갱신
  const inheritBtn = document.getElementById('inherit-add-btn');
  if (inheritBtn) inheritBtn.disabled = document.getElementById('inherit-list').children.length >= 3;
  updatePreview();
}

function addSpell() {
  // 타입 아이콘 드롭다운 옵션 생성
  const typeOpts = SPELL_TYPE_ICONS.map((t, i) =>
    `<option value="${i}">${t.name}</option>`
  ).join('');

  repeatCounts['spell-list'] = (repeatCounts['spell-list'] || 0) + 1;
  const wrap = document.createElement('div');
  wrap.className = 'repeat-item';
  wrap.innerHTML = `
    <div class="repeat-item-header">
      <span class="repeat-num">스킬 ${repeatCounts['spell-list']}</span>
      <button class="remove-btn" onclick="this.closest('.repeat-item').remove();updatePreview()">✕ 삭제</button>
    </div>
    <div class="form-group"><label class="form-label">스킬명</label><input class="form-input spell-name"></div>
    ${imgGroupHTML('일러스트 이미지', 'spell-illust-prev')}
    <div class="form-group">
      <label class="form-label">타입 아이콘</label>
      <div style="display:flex;align-items:center;gap:8px;">
        <select class="form-select spell-type-select" style="flex:1;">
          <option value="">— 선택 —</option>
          ${typeOpts}
        </select>
        <img class="spell-type-preview" style="width:32px;height:32px;object-fit:contain;display:none;" onerror="this.style.display='none'">
      </div>
      <input type="hidden" class="spell-type-data">
    </div>
    <div class="form-group"><label class="form-label">최종술식 여부</label><select class="form-select spell-is-ult"><option value="0">일반 (1/2/3단계)</option><option value="1">최종술식</option></select></div>
    <div class="form-group"><label class="form-label">1단계 설명</label><div class="rich-editor spell-d1" contenteditable="true" data-placeholder="설명"></div></div>
    <div class="form-group"><label class="form-label">1단계 플레이버 <span class="form-label-sub">선택</span></label><input class="form-input spell-f1"></div>
    <div class="form-group"><label class="form-label">2단계 설명</label><div class="rich-editor spell-d2" contenteditable="true" data-placeholder="설명"></div></div>
    <div class="form-group"><label class="form-label">2단계 플레이버 <span class="form-label-sub">선택</span></label><input class="form-input spell-f2"></div>
    <div class="form-group"><label class="form-label">3단계 설명</label><div class="rich-editor spell-d3" contenteditable="true" data-placeholder="설명"></div></div>
    <div class="form-group"><label class="form-label">3단계 플레이버 <span class="form-label-sub">선택</span></label><input class="form-input spell-f3"></div>
  `;
  document.getElementById('spell-list').appendChild(wrap);
  wrap.querySelectorAll('input,select').forEach(el => { el.addEventListener('input', updatePreview); el.addEventListener('change', updatePreview); el.addEventListener('focusin', () => { _focused = el; }); });
  wrap.querySelectorAll('.rich-editor').forEach(el => { el.addEventListener('input', updatePreview); el.addEventListener('focusin', () => { _focused = el; }); });
  wrap.querySelectorAll('input[type=file]').forEach(el => el.addEventListener('change', updatePreview));

  // 타입 아이콘 드롭다운 연동
  const typeSelect  = wrap.querySelector('.spell-type-select');
  const typeData    = wrap.querySelector('.spell-type-data');
  const typePreview = wrap.querySelector('.spell-type-preview');
  typeSelect.addEventListener('change', () => {
    const idx = parseInt(typeSelect.value);
    if (!isNaN(idx) && SPELL_TYPE_ICONS[idx]) {
      const url = SPELL_TYPE_ICONS[idx].img;
      typeData.value = url;
      typePreview.src = url;
      typePreview.style.display = 'block';
    } else {
      typeData.value = '';
      typePreview.style.display = 'none';
    }
    updatePreview();
  });
}

function addCombo() {
  addRepeatItem('combo-list', `
    <div class="form-group"><label class="form-label">조합명</label><input class="form-input combo-name"></div>
    <div class="form-group"><label class="form-label">설명</label><div class="rich-editor combo-desc" contenteditable="true" data-placeholder="설명을 입력하세요."></div></div>
  `, '조합');
}

function addWish() {
  if (document.getElementById('wish-list').children.length >= 4) { alert('최대 4개'); return; }
  const ranks = ['1순위','2순위','3순위','4순위'];
  const idx = document.getElementById('wish-list').children.length;
  addRepeatItem('wish-list', `
    <div class="form-row">
      <div class="form-group"><label class="form-label">순위</label><input class="form-input wish-rank" value="${ranks[idx]}"></div>
      <div class="img-upload-group form-group">
        <label class="form-label">의지 이미지</label>
        <div class="img-upload-wrap"><input type="file" accept="image/*" onchange="previewImgEl(this)"><div class="img-upload-label">📁</div><img class="img-preview wish-img-prev" style="max-height:40px;"></div>
        <input type="hidden" class="wish-img-data">
        <button class="img-clear-btn" onclick="clearImgEl(this)">✕ 삭제</button>
      </div>
    </div>
  `, '');
}

function addEvalPro() {
  addRepeatItem('eval-pro-list', `
    <div class="form-group"><label class="form-label">장점 제목</label><input class="form-input eval-pro-title"></div>
    <div class="form-group"><label class="form-label">설명</label><div class="rich-editor eval-pro-desc" contenteditable="true" data-placeholder="설명을 입력하세요."></div></div>
  `, '장점');
}

function addEvalCon() {
  addRepeatItem('eval-con-list', `
    <div class="form-group"><label class="form-label">단점 제목</label><input class="form-input eval-con-title"></div>
    <div class="form-group"><label class="form-label">설명</label><div class="rich-editor eval-con-desc" contenteditable="true" data-placeholder="설명을 입력하세요."></div></div>
  `, '단점');
}

function addItem() {
  addRepeatItem('item-list', `
    <div class="form-row">
      <div class="form-group"><label class="form-label">물품명 (한국어)</label><input class="form-input item-name"></div>
      <div class="form-group"><label class="form-label">물품명 (영어)</label><input class="form-input item-en"></div>
    </div>
    ${imgGroupHTML('물품 이미지', 'item-img-prev')}
    <div class="form-row">
      <div class="form-group"><label class="form-label">가격 아이콘</label><select class="form-select item-price-type"><option value="">없음 (감정가 없음)</option><option value="감정가">감정가</option><option value="가격">가격</option></select></div>
      <div class="form-group"><label class="form-label">가격 숫자</label><input class="form-input item-price" type="number"></div>
    </div>
    <div class="form-group"><label class="form-label">설명</label><div class="rich-editor item-desc" contenteditable="true" data-placeholder="설명을 입력하세요."></div></div>
  `, '물품');
}

function addCulture() {
  addRepeatItem('culture-list', `
    <div class="form-row">
      <div class="form-group"><label class="form-label">제목 (한국어)</label><input class="form-input culture-title"></div>
      <div class="form-group"><label class="form-label">제목 (영어)</label><input class="form-input culture-en"></div>
    </div>
    <div class="form-group"><label class="form-label">본문 (줄바꿈 = 새 문단)</label><div class="rich-editor culture-text" style="min-height:120px;" contenteditable="true" data-placeholder="본문을 입력하세요."></div></div>
  `, '문화');
}

function addFieldBlock() {
  addRepeatItem('field-list', `
    <div class="form-group"><label class="form-label">도입 텍스트 <span class="form-label-sub">선택</span></label><div class="rich-editor field-intro" contenteditable="true" data-placeholder="도입 텍스트"></div></div>
    <label class="form-label" style="margin-bottom:6px;">대화 목록</label>
    <div class="field-rows"></div>
    <button class="add-btn" style="font-size:11px;margin-top:4px;" onclick="addFieldRow(this)">＋ 대화 추가</button>
  `, '대화');
}

function addFieldRow(btn) {
  const wrap = btn.previousElementSibling;
  const row = document.createElement('div');
  row.style.cssText = 'display:grid;grid-template-columns:1fr 2fr auto;gap:6px;margin-bottom:6px;align-items:start;';
  row.innerHTML = `
    <div><label class="form-label" style="font-size:10px;">트리거</label><input class="form-input field-trigger" style="font-size:11px;"></div>
    <div><label class="form-label" style="font-size:10px;">응답</label><div class="rich-editor field-resp" style="min-height:40px;font-size:11px;" contenteditable="true" data-placeholder="응답"></div></div>
    <div style="padding-top:18px;"><button onclick="this.closest('div').parentElement.remove();updatePreview();" style="background:var(--red-bg);border:1px solid var(--red);color:var(--red);border-radius:4px;padding:4px 7px;cursor:pointer;font-size:11px;">✕</button></div>
  `;
  wrap.appendChild(row);
  row.querySelectorAll('input').forEach(el => { el.addEventListener('input', updatePreview); el.addEventListener('focusin', () => { _focused = el; }); });
  row.querySelectorAll('.rich-editor').forEach(el => { el.addEventListener('input', updatePreview); el.addEventListener('focusin', () => { _focused = el; }); });
}

function addVoice() {
  addRepeatItem('voice-list', `
    <div class="form-row">
      <div class="form-group"><label class="form-label">상황</label><input class="form-input voice-key"></div>
      <div class="form-group"><label class="form-label">대사</label><div class="rich-editor voice-val" style="min-height:50px;" contenteditable="true" data-placeholder="대사"></div></div>
    </div>
  `, '');
}

function addCostume() {
  addRepeatItem('costume-list', `
    <div class="form-row">
      <div class="form-group"><label class="form-label">의상명</label><input class="form-input cos-name"></div>
      <div class="form-group"><label class="form-label">캡션</label><input class="form-input cos-caption"></div>
    </div>
    ${imgGroupHTML('메인 이미지', 'cos-img-prev')}
    <div class="form-group"><label class="form-label">획득 방법</label><input class="form-input cos-how"></div>
    <div class="form-row">
      <div class="form-group"><label class="form-label">시리즈 <span class="form-label-sub">선택</span></label><input class="form-input cos-series"></div>
      <div class="form-group"><label class="form-label">등급 <span class="form-label-sub">선택</span></label><input class="form-input cos-grade"></div>
    </div>
    ${imgGroupHTML('SD 이미지', 'cos-sd-prev')}
    ${imgGroupHTML('스탠딩 이미지 (접기용)', 'cos-standing-prev')}
  `, '의상');
}

/* ──────────────────────────────
   기타 — 목차 고정 섹션
   → "기타"는 고정 h2 섹션
   → 내용은 리스트 항목(ul>li)으로 들어감
   → 항목 제목(선택) + 내용으로 구성
────────────────────────────── */
function addEtc() {
  addRepeatItem('etc-list', `
    <div class="form-group">
      <label class="form-label">항목 제목 <span class="form-label-sub">선택 — 없으면 내용만 표시</span></label>
      <input class="form-input etc-title">
    </div>
    <div class="form-group">
      <label class="form-label">내용</label>
      <div class="rich-editor etc-content" style="min-height:80px;" contenteditable="true" data-placeholder="내용을 입력하세요."></div>
    </div>
  `, '항목');
}

/* ──────────────────────────────
   능력치 초기화
────────────────────────────── */
function initStats() {
  const container = document.getElementById('stats-list');
  if (container.children.length > 0) return;
  const maxLvMap = {0:30,1:40,2:50,3:60};
  [0,1,2,3].forEach(ins => {
    const wrap = document.createElement('div');
    wrap.className = 'repeat-item';
    wrap.innerHTML = `
      <div class="sub-title" style="margin:0 0 8px;">통찰 ${ins}</div>
      <div class="form-row">
        <div class="form-group"><label class="form-label">LV1 공격</label><input class="form-input stat-atk1-${ins}"></div>
        <div class="form-group"><label class="form-label">MAX 공격</label><input class="form-input stat-atk2-${ins}"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label class="form-label">LV1 HP</label><input class="form-input stat-hp1-${ins}"></div>
        <div class="form-group"><label class="form-label">MAX HP</label><input class="form-input stat-hp2-${ins}"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label class="form-label">LV1 현방</label><input class="form-input stat-rdef1-${ins}"></div>
        <div class="form-group"><label class="form-label">MAX 현방</label><input class="form-input stat-rdef2-${ins}"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label class="form-label">LV1 정방</label><input class="form-input stat-mdef1-${ins}"></div>
        <div class="form-group"><label class="form-label">MAX 정방</label><input class="form-input stat-mdef2-${ins}"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label class="form-label">치명타 기술</label><input class="form-input stat-tech-${ins}"></div>
        <div class="form-group"><label class="form-label">MAX 레벨</label><input class="form-input stat-maxlv-${ins}" value="${maxLvMap[ins]}"></div>
      </div>
    `;
    container.appendChild(wrap);
    wrap.querySelectorAll('input').forEach(el => el.addEventListener('input', updatePreview));
  });
}

/* ──────────────────────────────
   HTML 이스케이프
────────────────────────────── */
function escHtml(s) {
  return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

/* ══════════════════════════════
   데이터 수집
══════════════════════════════ */
function collectData() {
  const gv  = id => (document.getElementById(id)||{}).value || '';
  const ge  = id => (document.getElementById(id)||{}).innerHTML || '';
  const items = (cid, fn) => Array.from((document.getElementById(cid)||{children:[]}).children).map(fn);

  return {
    infobox: {
      nameKo:gv('ib-name-ko'), nameEn:gv('ib-name-en'),
      label1:gv('ib-label1'), label2:gv('ib-label2'),
      img1:gv('ib-img1-data'), img2:gv('ib-img2-data'),
      inspire:gv('ib-inspire'), dmg:gv('ib-dmg'),
      star:gv('ib-star'), role:gv('ib-role'),
      sign:gv('ib-sign-data'),
      cvKr:gv('ib-cv-kr'), cvUs:gv('ib-cv-us'), cvCn:gv('ib-cv-cn'), cvJp:gv('ib-cv-jp'),
    },
    chara: {
      medium:gv('ch-medium'), inspireDesc:gv('ch-inspire-desc'),
      scent:gv('ch-scent'), size:gv('ch-size'), desc:ge('ch-desc'),
      udimoImg:gv('ch-udimo-data'), udimoCap:gv('ch-udimo-cap'),
    },
    overview: { text:ge('ov-text'), quote:gv('ov-quote'), intro:ge('ov-intro') },
    official: { title:gv('of-title'), sub:gv('of-sub'), url:gv('of-url'), linkText:gv('of-link-text') },
    story: items('story-list', el => ({
      title:   (el.querySelector('.story-title')||{}).value||'',
      content: getEditorEl(el.querySelector('.story-content')),
    })),
    stats: [0,1,2,3].map(i => ({
      ins:i,
      atk1:(document.querySelector(`.stat-atk1-${i}`)||{}).value||'',
      atk2:(document.querySelector(`.stat-atk2-${i}`)||{}).value||'',
      hp1: (document.querySelector(`.stat-hp1-${i}`)||{}).value||'',
      hp2: (document.querySelector(`.stat-hp2-${i}`)||{}).value||'',
      rdef1:(document.querySelector(`.stat-rdef1-${i}`)||{}).value||'',
      rdef2:(document.querySelector(`.stat-rdef2-${i}`)||{}).value||'',
      mdef1:(document.querySelector(`.stat-mdef1-${i}`)||{}).value||'',
      mdef2:(document.querySelector(`.stat-mdef2-${i}`)||{}).value||'',
      tech: (document.querySelector(`.stat-tech-${i}`)||{}).value||'',
      maxlv:(document.querySelector(`.stat-maxlv-${i}`)||{}).value||'',
    })),
    insight: items('insight-list', el => {
      const matRows = Array.from(el.querySelectorAll('.ins-mats-list .mat-row')).map(row => ({
        data:  (row.querySelector('.mat-img-data')||{}).value||'',
        txt:   (row.querySelector('.mat-txt')||{}).value||'',
        grade: (row.querySelector('.mat-grade')||{}).value||'3',
      }));
      return {
        lv:      (el.querySelector('.ins-lv')||{}).value||'',
        desc:    getEditorEl(el.querySelector('.ins-desc')),
        coinTxt: (el.querySelector('.ins-coin-txt')||{}).value||'',
        mats:    matRows,
      };
    }),
    morph: {
      items: items('morph-list', el => ({
        lv:   (el.querySelector('.morph-lv')||{}).value||'',
        desc: getEditorEl(el.querySelector('.morph-desc')),
      })),
      eval: ge('morph-eval'),
    },
    inherit: {
      name: gv('inh-name'),
      items: items('inherit-list', el => ({
        img:  (el.querySelector('.inh-img-data')||{}).value||'',
        desc: getEditorEl(el.querySelector('.inh-desc')),
      })),
    },
    spell: items('spell-list', el => ({
      name:   (el.querySelector('.spell-name')||{}).value||'',
      illust: (el.querySelector('.spell-illust-data')||{}).value||'',
      type:   (el.querySelector('.spell-type-data')||{}).value||'',
      isUlt:  (el.querySelector('.spell-is-ult')||{}).value||'0',
      d1:getEditorEl(el.querySelector('.spell-d1')), f1:(el.querySelector('.spell-f1')||{}).value||'',
      d2:getEditorEl(el.querySelector('.spell-d2')), f2:(el.querySelector('.spell-f2')||{}).value||'',
      d3:getEditorEl(el.querySelector('.spell-d3')), f3:(el.querySelector('.spell-f3')||{}).value||'',
    })),
    combo: items('combo-list', el => ({
      name: (el.querySelector('.combo-name')||{}).value||'',
      desc: getEditorEl(el.querySelector('.combo-desc')),
    })),
    wish: items('wish-list', el => ({
      rank: (el.querySelector('.wish-rank')||{}).value||'',
      img:  (el.querySelector('.wish-img-data')||{}).value||'',
    })),
    eval: {
      text: ge('ev-text'),
      pros: items('eval-pro-list', el => ({
        title:(el.querySelector('.eval-pro-title')||{}).value||'',
        desc: getEditorEl(el.querySelector('.eval-pro-desc')),
      })),
      cons: items('eval-con-list', el => ({
        title:(el.querySelector('.eval-con-title')||{}).value||'',
        desc: getEditorEl(el.querySelector('.eval-con-desc')),
      })),
    },
    item: items('item-list', el => ({
      name:      (el.querySelector('.item-name')||{}).value||'',
      en:        (el.querySelector('.item-en')||{}).value||'',
      img:       (el.querySelector('.item-img-data')||{}).value||'',
      priceType: (el.querySelector('.item-price-type')||{}).value||'',
      price:     (el.querySelector('.item-price')||{}).value||'',
      desc:      getEditorEl(el.querySelector('.item-desc')),
    })),
    culture: items('culture-list', el => ({
      title: (el.querySelector('.culture-title')||{}).value||'',
      en:    (el.querySelector('.culture-en')||{}).value||'',
      text:  getEditorEl(el.querySelector('.culture-text')),
    })),
    field: items('field-list', el => {
      const rows = Array.from(el.querySelectorAll('.field-rows > div')).map(row => ({
        trigger: (row.querySelector('.field-trigger')||{}).value||'',
        resp:    getEditorEl(row.querySelector('.field-resp')),
      }));
      return { intro:getEditorEl(el.querySelector('.field-intro')), dialogs:rows };
    }),
    voice: items('voice-list', el => ({
      key: (el.querySelector('.voice-key')||{}).value||'',
      val: getEditorEl(el.querySelector('.voice-val')),
    })),
    costume: items('costume-list', el => ({
      name:     (el.querySelector('.cos-name')||{}).value||'',
      caption:  (el.querySelector('.cos-caption')||{}).value||'',
      img:      (el.querySelector('.cos-img-data')||{}).value||'',
      how:      (el.querySelector('.cos-how')||{}).value||'',
      series:   (el.querySelector('.cos-series')||{}).value||'',
      grade:    (el.querySelector('.cos-grade')||{}).value||'',
      sd:       (el.querySelector('.cos-sd-data')||{}).value||'',
      standing: (el.querySelector('.cos-standing-data')||{}).value||'',
    })),
    // 기타: 고정 "기타" h2 섹션 아래 리스트 항목들
    etc: {
      items: items('etc-list', el => ({
        title:   (el.querySelector('.etc-title')||{}).value||'',
        content: getEditorEl(el.querySelector('.etc-content')),
      })),
      date:   gv('etc-date'),
    },
    // 각주: 이름 + 내용 (툴팁 연동)
    footnote: items('footnote-list', el => ({
      name:    (el.querySelector('.fn-name')||{}).value||'',
      content: getEditorEl(el.querySelector('.fn-content')),
    })),
  };
}

/* ══════════════════════════════
   HTML 생성
══════════════════════════════ */
function generateHTML(d) {
  const esc  = s => escHtml(s);
  const safe = s => String(s||'');

  // 각주 맵 빌드: name → content (툴팁 자동 연동)
  const fnMap = {};
  (d.footnote || []).forEach(fn => { if (fn.name) fnMap[fn.name] = fn.content || ''; });

  // fn-tooltip의 fn-tip 내용을 각주 맵에서 채워서 반환
  function injectFnTips(html) {
    return html.replace(/data-fn="([^"]+)"[^>]*>(<sup[^>]*>[^<]*<\/sup>)<span class="fn-tip"><\/span>/g,
      (match, name, sup) => {
        const content = fnMap[name] || '';
        return `data-fn="${escHtml(name)}">${sup}<span class="fn-tip">${content}</span>`;
      });
  }

  const inspireImg = IMG.inspire[d.infobox.inspire] || '';
  const dmgImg     = IMG.dmg[d.infobox.dmg] || '';

  /* 능력치 */
  const statsRows = d.stats.map(s => `
    <tr><td class="insight-cell" rowspan="2">${s.ins}</td>
      <td class="lv-cell">1</td>
      <td class="val-cell">${esc(s.atk1)}</td><td class="val-cell">${esc(s.hp1)}</td>
      <td class="val-cell">${esc(s.rdef1)}</td><td class="val-cell">${esc(s.mdef1)}</td>
      <td class="val-cell">${esc(s.tech)}</td>
    </tr>
    <tr>
      <td class="lv-cell">${esc(s.maxlv)}</td>
      <td class="val-cell-alt">${esc(s.atk2)}</td><td class="val-cell-alt">${esc(s.hp2)}</td>
      <td class="val-cell-alt">${esc(s.rdef2)}</td><td class="val-cell-alt">${esc(s.mdef2)}</td>
      <td class="val-cell-alt">${esc(s.tech)}</td>
    </tr>`).join('');

  /* 통찰 */
  const insightBlocks = d.insight.map((ins, i) => {
    const lvImg = IMG.insight[ins.lv] || '';
    const matsHTML = ins.mats.map(m =>
      `<div class="insight-mat-item"><div class="insight-mat-img grade-${esc(m.grade)}">${m.data?`<img src="${m.data}">`:''}  </div><div class="insight-mat-txt">${esc(m.txt)}</div></div>`
    ).join('');
    return `
    <div class="insight-block">
      <div class="insight-block-head">${i} 통찰 → ${i+1} 통찰</div>
      <div class="insight-block-body">
        ${injectFnTips(safe(ins.desc))}
        <div class="insight-mat">
          <div class="insight-mat-item insight-mat-lv"><div class="insight-mat-img">${lvImg?`<img src="${lvImg}">`:''}  </div><div class="insight-mat-txt">${esc(ins.lv)}</div></div>
          <div class="insight-mat-item"><div class="insight-mat-img grade-3">${IMG.coinMat?`<img src="${IMG.coinMat}">`:''}  </div><div class="insight-mat-txt">${esc(ins.coinTxt)}</div></div>
          ${matsHTML}
        </div>
      </div>
    </div>`;
  }).join('');

  /* 형상 */
  const morphRows = d.morph.items.map(m =>
    `<tr><td class="kt-key">${esc(m.lv)}</td><td class="kt-val">${injectFnTips(safe(m.desc))}</td></tr>`
  ).join('');

  /* 계승 */
  const inheritRows = d.inherit.items.map(inh =>
    `<tr><td class="kt-key">${inh.img?`<img src="${inh.img}" class="kt-img">`:'&nbsp;'}</td><td class="kt-val">${injectFnTips(safe(inh.desc))}</td></tr>`
  ).join('');

  /* 마도술 */
  const spellBlocks = d.spell.map(sp => {
    const isUlt = sp.isUlt === '1';
    const typeImg = sp.type ? `<img src="${sp.type}" class="spell-img">` : '';
    const rows = isUlt
      ? `<tr><td class="s-grade" style="vertical-align:middle;"><div class="s-type-solo">${typeImg}</div></td><td class="s-val">${injectFnTips(safe(sp.d1))}${sp.f1?`<br><em>${esc(sp.f1)}</em>`:''}</td></tr>`
      : [{d:sp.d1,f:sp.f1,star:'✦'},{d:sp.d2,f:sp.f2,star:'✦✦'},{d:sp.d3,f:sp.f3,star:'✦✦✦'}]
          .filter(r=>r.d).map(r=>`
        <tr>
          <td class="s-grade"><div class="s-star">${r.star}</div><div class="s-type">${typeImg}</div></td>
          <td class="s-val">${injectFnTips(safe(r.d))}${r.f?`<br><em>${esc(r.f)}</em>`:''}</td>
        </tr>`).join('');
    return `
    <div class="spell-block">
      <div class="spell-head">${esc(sp.name)}</div>
      <div class="spell-illust-wrap">
        <div class="spell-illust-label">일러스트</div>
        <div class="spell-illust-cell">${sp.illust?`<img src="${sp.illust}">`:'<div class="spell-illust-ph">ILLUST</div>'}</div>
      </div>
      <table class="spell-table"><tr><th colspan="2">설명</th></tr>${rows}</table>
    </div>`;
  }).join('');

  /* 조합 */
  const comboItems = d.combo.map(c =>
    `<li><div class="combo-name">${injectFnTips(safe(c.name))}</div><div class="combo-desc">${injectFnTips(safe(c.desc))}</div></li>`
  ).join('');

  /* 의지 */
  const wishItems = d.wish.map(w =>
    `<div class="wish-item"><div class="wish-rank">${esc(w.rank)}</div><div class="wish-img">${w.img?`<img src="${w.img}">`:'&nbsp;'}</div></div>`
  ).join('');

  /* 평가 */
  const evalPros = d.eval.pros.map(p =>
    `<li><div class="combo-name">${safe(p.title)}</div><div class="combo-desc">${injectFnTips(safe(p.desc))}</div></li>`
  ).join('');
  const evalCons = d.eval.cons.map(c =>
    `<li><div class="combo-name">${safe(c.title)}</div><div class="combo-desc">${injectFnTips(safe(c.desc))}</div></li>`
  ).join('');

  /* 물품 */
  const itemCards = d.item.map(it => {
    const priceHTML = it.priceType && it.price
      ? `${IMG.priceIcons[it.priceType]?`<img src="${IMG.priceIcons[it.priceType]}" style="width:16px;height:16px;object-fit:contain;">`:''}${esc(it.price)}`
      : '감정가 없음';
    return `
    <div class="item-card">
      <div class="item-card-header">
        <img src="${IMG.itemHeader}">
        <div class="item-card-item-img">${it.img?`<img src="${it.img}">`:'&nbsp;'}</div>
      </div>
      <div class="item-card-body-wrap">
        <div class="item-card-name">${esc(it.name)}</div>
        <div class="item-card-en">${esc(it.en)}</div>
        <div class="item-card-divider"><img src="${IMG.itemDivider}"></div>
        <div class="item-card-price">${priceHTML}</div>
        <div class="item-card-desc">${safe(it.desc)}</div>
      </div>
      <div class="item-card-footer"><img src="${IMG.itemFooter}"></div>
    </div>`;
  }).join('');

  /* 문화 */
  const cultureCards = d.culture.map((c, i) => {
    const bgImg = IMG.culture[i] || '';
    return `
    <div class="culture-card">
      <div class="culture-card-header"><img src="${IMG.cultureHeader}" style="max-height:80px;object-fit:cover;object-position:top;"></div>
      <div class="culture-card-img">${bgImg?`<img src="${bgImg}" style="width:100%;height:auto;">`:'&nbsp;'}</div>
      <div class="culture-card-title">${esc(c.title)}<br><span class="culture-card-en">${esc(c.en)}</span></div>
      <div class="fold">
        <div class="fold-head"><span class="fold-arr">▶</span><span>[펼치기 · 접기]</span></div>
        <div class="fold-body">${safe(c.text)}</div>
      </div>
      <div class="culture-card-footer"><img src="${IMG.cultureFooter}" style="max-height:60px;object-fit:cover;object-position:bottom;"></div>
    </div>`;
  }).join('');

  /* 황무지 대사 */
  const fieldBlocks = d.field.map(fb => {
    const introRow = fb.intro ? `<tr><td class="f-plain" colspan="2">${safe(fb.intro)}</td></tr>` : '';
    const dialogRows = fb.dialogs.map(dg =>
      `<tr><td class="f-trigger">${esc(dg.trigger)}</td><td class="f-resp">${safe(dg.resp)}</td></tr>`
    ).join('');
    return `
    <div class="field-block">
      <div class="field-head">황무지 대화</div>
      <table class="field-table">${introRow}${dialogRows}</table>
    </div>`;
  }).join('');

  /* 음성 */
  const voiceRows = d.voice.map(v =>
    `<tr><td class="vk">${esc(v.key)}</td><td class="vv">${safe(v.val)}</td></tr>`
  ).join('');

  /* 의상 */
  const costumeBlocks = d.costume.map(cos => `
    <div class="costume-block">
      <div class="costume-head">${esc(cos.name)}</div>
      <div class="costume-main-img">${cos.img?`<img src="${cos.img}" style="max-width:240px;margin:0 auto;">`:'<div class="costume-main-img-ph">STANDING IMAGE</div>'}</div>
      <div class="costume-caption">${esc(cos.caption)}</div>
      <table class="costume-info-table">
        ${cos.series?`<tr><td class="ci-k">시리즈</td><td class="ci-v"><b>${esc(cos.series)}</b></td></tr>`:''}
        <tr><td class="ci-k">획득 방법</td><td class="ci-v">${esc(cos.how)}</td></tr>
        ${cos.grade?`<tr><td class="ci-k">등급</td><td class="ci-v"><b>${esc(cos.grade)}</b></td></tr>`:''}
        <tr><td class="ci-k">SD 일러스트</td><td class="ci-v">
          <div class="costume-sd-img">${cos.sd?`<img src="${cos.sd}" style="height:200px;width:auto;object-fit:contain;">`:'<div class="costume-sd-ph">SD IMAGE</div>'}</div>
        </td></tr>
        <tr><td class="ci-k">스탠딩 일러스트</td><td class="ci-v">
          <div class="fold">
            <div class="fold-head"><span class="fold-arr">▶</span><span>[ 펼치기 · 접기 ]</span></div>
            <div class="fold-body">${cos.standing?`<img src="${cos.standing}" style="max-width:56%;margin:0 auto;">`:'<div style="min-height:60px;"></div>'}</div>
          </div>
        </td></tr>
      </table>
    </div>`).join('');

  /* 기타 — 고정 h2 + 리스트 항목 */
  const ETC_NUM = 11;
  const etcListItems = (d.etc.items || []).map(item => {
    if (item.title) {
      return `<li><strong>${esc(item.title)}</strong><br>${injectFnTips(safe(item.content))}</li>`;
    }
    return `<li>${injectFnTips(safe(item.content))}</li>`;
  }).join('');
  const etcSection = `
    <h2 class="h2" id="s-etc"><span class="hn">${ETC_NUM}.</span>기타<a href="#" class="edit-link">[편집]</a></h2>
    ${etcListItems ? `<ul>${etcListItems}</ul>` : ''}`;
  const etcToc = `<li><a href="#s-etc"><span class="tn">${ETC_NUM}.</span><span>기타</span></a></li>`;

  /* 의상 목차 */
  const costumeTocNum = ETC_NUM + 1;
  const costumeToc = d.costume.length > 0
    ? `<li><a href="#s-costume"><span class="tn">${costumeTocNum}.</span><span>의상</span></a></li>` : '';

  /* 작중 행적 */
  const storySections = d.story.map((s, i) =>
    `<h3 class="h3" id="s3-${i+1}"><span class="hn">3.${i+1}.</span>${esc(s.title)}<a href="#" class="edit-link">[편집]</a></h3>${injectFnTips(safe(s.content))||'<p></p>'}`
  ).join('');
  const storyToc = d.story.map((s, i) =>
    `<li><a href="#s3-${i+1}"><span class="tn">3.${i+1}.</span><span>${esc(s.title)}</span></a></li>`
  ).join('');

  /* 각주 — 이름으로만, 번호 없음, 내용은 각주 맵에서 */
  const footnoteItems = d.footnote.map(fn =>
    `<div class="fn-item"><span class="fn-n">[${esc(fn.name)}]</span><span>${safe(fn.content)}</span></div>`
  ).join('');

  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(d.infobox.nameKo)} · ${esc(d.infobox.nameEn)} — Wiki</title>
<link href="https://fonts.googleapis.com/css2?family=IM+Fell+English:ital@0;1&family=Special+Elite&family=Noto+Serif+KR:wght@300;400;600&display=swap" rel="stylesheet">
<style>
:root{--cream:#ffffff;--cream-dk:#f8f9fa;--navy:#1A2744;--gold:#C8A84B;--gold-lt:#E2C97E;--text:#2A2015;--muted:#6B5C3E;--border:#986b58;--border-lt:#DDD0B0;--brown-hd:#5C3D22;--fn:'IM Fell English','Noto Serif KR',Georgia,serif;--ft:'Special Elite',monospace;--fk:'Noto Serif KR',serif;--topbar-h:46px;}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}html{scroll-behavior:smooth;}body{background:var(--cream);color:var(--text);font-family:var(--fk);font-size:14px;line-height:1.85;}a{color:#2255BB;text-decoration:none;}a:hover{text-decoration:underline;}img{max-width:100%;display:block;}::-webkit-scrollbar{width:5px;}::-webkit-scrollbar-track{background:var(--cream-dk);}::-webkit-scrollbar-thumb{background:var(--border);border-radius:3px;}[id]{scroll-margin-top:calc(var(--topbar-h)+8px);}
.topbar{background:var(--navy);border-bottom:2px solid var(--gold);height:var(--topbar-h);display:flex;align-items:center;justify-content:space-between;padding:0 24px;position:sticky;top:0;z-index:200;}.logo{font-family:var(--ft);font-size:13px;letter-spacing:3px;color:var(--gold);text-decoration:none!important;}.logo:hover{color:var(--gold-lt);}.search{display:flex;}.search input{background:white;border:1px solid #ccc;border-right:none;border-radius:3px 0 0 3px;color:var(--text);padding:5px 12px;font-family:var(--fk);font-size:12px;width:200px;outline:none;}.search input:focus{border-color:#888;}.search input::placeholder{color:#aaa;}.search button{background:#f1f3f5;border:1px solid #ccc;border-left:none;border-radius:0 3px 3px 0;color:var(--text);padding:5px 12px;font-family:var(--ft);font-size:10px;letter-spacing:1px;cursor:pointer;}.search button:hover{background:#e0e0e0;}
.page{max-width:980px;margin:0 auto;padding:20px 20px 80px;}.title-wrap{border-bottom:2px solid var(--navy);padding-bottom:10px;margin-bottom:14px;}.title{font-family:var(--fn);font-size:28px;font-weight:400;color:var(--navy);}.title-sub{font-family:var(--ft);font-size:10px;letter-spacing:2px;color:var(--muted);margin-top:3px;}.meta{font-family:var(--ft);font-size:9px;letter-spacing:1px;color:var(--muted);padding:4px 0 12px;border-bottom:1px solid var(--border-lt);margin-bottom:16px;display:flex;justify-content:space-between;}.article::after{content:'';display:block;clear:both;}
.article p{margin-bottom:10px;line-height:1.9;font-size:13px;}.article strong{font-weight:600;}.article em{font-style:italic;color:var(--muted);}.article ul,.article ol{padding-left:22px;margin-bottom:10px;}.article ul li{margin-bottom:12px;line-height:1.8;list-style:disc;padding-left:4px;}.article ul li::marker{color:#212529;font-size:16px;}
.keyword{color:#0077ff;font-weight:600;}.pct{color:#ff8400;font-weight:600;}.hb{color:#cf3939;}sup.fn{font-family:var(--ft);font-size:9px;color:#0263b8;vertical-align:super;}.fn-tooltip{position:relative;display:inline;cursor:pointer;}.fn-tooltip .fn-tip{display:none;position:absolute;bottom:120%;left:50%;transform:translateX(-50%);background:#fff;border:1px solid var(--border);border-radius:4px;padding:6px 10px;font-size:11px;color:var(--text);white-space:nowrap;box-shadow:0 2px 8px rgba(0,0,0,.15);z-index:100;font-family:var(--fk);font-style:normal;font-weight:normal;pointer-events:none;}.fn-tooltip:hover .fn-tip{display:block;}
.combo-name{font-family:var(--fk);font-size:13px;font-weight:600;color:var(--navy);margin-bottom:4px;margin-top:12px;}.article li:first-child .combo-name{margin-top:0;}.combo-desc{font-size:13px;line-height:1.8;color:var(--text);}
.h2{font-family:var(--fn);font-size:20px;font-weight:400;color:var(--navy);border-bottom:2px solid var(--navy);padding-bottom:5px;margin:28px 0 12px;display:flex;align-items:baseline;gap:8px;}.h3{font-family:var(--fn);font-size:16px;font-weight:400;color:var(--navy);border-bottom:1px solid var(--border);padding-bottom:4px;margin:20px 0 10px;display:flex;align-items:baseline;gap:8px;}.hn{font-family:var(--ft);font-size:16px;color:#0263b8;flex-shrink:0;}.edit-link{font-family:var(--ft);font-size:9px;color:#0275d8;margin-left:auto;font-weight:300;}.edit-link:hover{color:var(--muted);text-decoration:none;}
.infobox{display:block;margin:0 auto 20px;width:100%;max-width:800px;border:2px solid #986b58;font-size:12px;line-height:1.5;background:var(--cream-dk);}.ib-name{background:#252525;color:#9a785d;text-align:center;padding:10px 12px;border-bottom:1px solid var(--border);}.ib-name-ko{font-family:var(--fn);font-size:20px;font-weight:400;display:block;line-height:1.3;}.ib-name-en{font-family:var(--ft);font-size:11px;letter-spacing:2px;color:#9a785d;display:block;margin-top:2px;}.ib-imgs{display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid var(--border);background:#2A1E10;}.ib-img-cell{text-align:center;overflow:hidden;}.ib-img-cell img{width:100%;height:auto;display:block;object-fit:contain;}.ib-img-ph{height:auto;display:flex;align-items:center;justify-content:center;font-family:var(--ft);font-size:9px;letter-spacing:1px;color:rgba(200,168,75,.5);}.ib-labels{display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid var(--border);}.ib-label{text-align:center;padding:4px 8px;font-family:var(--fk);font-size:11px;background:#553d2d;color:#bb9d87;}.ib-t{width:100%;border-collapse:collapse;}.ib-t tr{border-bottom:1px solid var(--border-lt);}.ib-t tr:last-child{border-bottom:none;}.ib-t .ik{background:#d8b793;font-family:var(--fk);font-size:12px;color:#764b35;padding:5px 6px;vertical-align:middle;text-align:center;font-weight:600;}.ib-t .iv{padding:5px 7px;color:var(--text);font-size:12px;vertical-align:middle;background:var(--cream);word-break:keep-all;}.ib-t .iv-center{text-align:center;}.ib-chara-head{background:#252525;color:#9a785d;text-align:center;padding:6px;font-family:var(--fk);font-size:12px;font-weight:600;letter-spacing:1px;border-top:1px solid var(--border);border-bottom:1px solid var(--border);}.ib-t .ik-full{background:#d8b793;color:#764b35;font-family:var(--fk);font-size:11px;font-weight:600;padding:5px 9px;text-align:center;border-bottom:1px solid var(--border);word-break:keep-all;}.ib-t .iv-full{text-align:center;padding:7px 9px;color:var(--text);font-size:12px;line-height:1.7;background:var(--cream);}.ib-udimo{background:#d8b793;color:#764b35;text-align:center;padding:5px;font-family:var(--fk);font-size:11px;font-weight:600;letter-spacing:2px;}.ib-udimo-img{background:var(--cream-dk);text-align:center;padding:12px 8px;}.ib-udimo-img img{max-width:180px;margin:0 auto;}.ib-udimo-caption{text-align:center;font-family:var(--ft);font-size:10px;letter-spacing:2px;color:var(--muted);padding:4px;background:var(--cream-dk);}.stats-img{display:block;width:20px;height:auto;margin:0 auto;}.kt-img{display:block;width:35px;height:auto;margin:0 auto;}
.toc{border:1px solid var(--border);background:var(--cream-dk);display:inline-block;min-width:200px;padding:12px 16px;margin-bottom:18px;}.toc-title{font-family:var(--ft);font-size:13px;letter-spacing:3px;color:var(--muted);text-align:center;padding-bottom:8px;margin-bottom:8px;border-bottom:1px solid var(--border-lt);}.toc ol{list-style:none;padding:0;}.toc>ol>li{line-height:1.8;}.toc a{display:flex;align-items:baseline;gap:5px;color:var(--muted);font-size:12px;}.toc a:hover{color:var(--navy);text-decoration:none;}.tn{font-family:var(--ft);font-size:11px;color:#0263b8;min-width:22px;flex-shrink:0;}.toc .sub{padding-left:16px;margin-top:1px;list-style:none;}.toc .sub a{font-size:11px;}.toc .sub .tn{min-width:28px;font-size:9px;}
.intro-box{border:2px dashed #986b58;border-left:5px solid #000;padding:14px 18px;margin:10px 0;background:#f2e9de;font-size:13px;line-height:1.9;color:var(--text);}.intro-box .intro-red{color:#9a785d;}
.official-box{border:2px solid #986b58;margin:10px 0;overflow:hidden;}.official-head{background:#252525;color:#9a785d;text-align:center;padding:8px 12px;}.official-head .oh-title{font-family:var(--fk);font-size:14px;font-weight:600;display:block;}.official-head .oh-sub{font-family:var(--fk);font-size:17px;color:#9a785d;display:block;margin-top:2px;}.official-link{background:var(--cream-dk);padding:7px 12px;display:flex;align-items:center;justify-content:center;gap:8px;font-size:12px;border-top:1px solid var(--border);}.official-link a{color:#008000;}.official-link::before{content:'🔗';font-size:12px;}
.stat-table{width:100%;border-collapse:collapse;margin:10px 0;font-size:12px;border:2px solid #966a57;table-layout:fixed;}.stat-table th:first-child{width:60px;}.stat-table th{background:#252525;color:#9a785d;padding:8px 10px;text-align:center;font-family:var(--fk);font-size:11px;font-weight:600;border:1px solid #dddddd;}.stat-table td{padding:6px 10px;border:1px solid #dddddd;text-align:center;vertical-align:middle;}.stat-table .insight-cell{background:#553d2d;color:#bb9d87;font-weight:600;font-size:12px;}.stat-table .lv-cell{background:#d8b793;color:#764b35;font-size:11px;}.stat-table .val-cell,.stat-table .val-cell-alt{background:#f2e9de;}
.insight-block{border:2px solid #986b58;margin:12px 0;overflow:hidden;}.insight-block-head{background:#252525;color:#9a785d;text-align:center;padding:6px 12px;font-family:var(--fk);font-size:17px;font-weight:600;}.insight-block-body{background:#f2e9de;padding:10px 14px;font-size:12px;line-height:1.8;text-align:center;}.insight-mat{margin-top:8px;border-top:1px solid var(--border);padding-top:4px;display:flex;gap:3px;justify-content:center;}.insight-mat-item{flex:0 0 calc((100% - 15px)/6);background:#3F3F3F;color:#DEDEDE;text-align:center;font-size:10px;padding:0;border:2px solid #3f3f3f;}.insight-mat-img{background:#5a5a5a;padding:3px;display:block;line-height:0;}.insight-mat-img img{width:80%;height:auto;display:block;margin:0 auto;}.insight-mat-txt{background:#3f3f3f;color:#DEDEDE;font-size:12px;padding:3px 2px;text-align:center;}.insight-mat-lv .insight-mat-img{background:#212121;}.insight-mat-img.grade-2{border-bottom:6px solid #466541;}.insight-mat-img.grade-3{border-bottom:6px solid #555b7b;}.insight-mat-img.grade-4{border-bottom:6px solid #82638b;}.insight-mat-img.grade-5{border-bottom:6px solid #ead586;}.insight-mat-img.grade-6{border-bottom:6px solid #e3a829;}
.keyed-table{width:100%;border-collapse:collapse;margin:10px 0;font-size:12px;border:2px solid #986b58;}.keyed-table .kt-head{background:#252525;color:#9a785d;text-align:center;padding:6px;font-family:var(--fk);font-size:12px;font-weight:600;border:1px solid #dddddd;}.keyed-table .kt-key{background:#d8b793;padding:6px 10px;text-align:center;font-weight:600;border:1px solid #dddddd;vertical-align:middle;width:20%;}.keyed-table .kt-val{padding:6px 12px;border:1px solid #dddddd;background:#f2e9de;line-height:1.7;text-align:center;}.keyed-table .kt-sub{background:#553d2d;color:#bb9d87;text-align:center;padding:5px;font-family:var(--fk);font-size:11px;font-weight:600;border:1px solid #dddddd;}
.spell-block{border:2px solid #986b58;margin:12px 0;overflow:hidden;}.spell-head{background:#252525;color:#9a785d;text-align:center;padding:7px;font-family:var(--fk);font-size:13px;font-weight:600;border:1px solid #dddddd;}.spell-illust-wrap{border-bottom:1px solid var(--border);}.spell-illust-label{background:#553d2d;color:#bb9d87;font-family:var(--fk);font-size:10px;text-align:center;padding:3px;border:1px solid #dddddd;}.spell-illust-cell{background:#1A1210;display:flex;align-items:center;justify-content:center;min-height:100px;overflow:hidden;border:1px solid #dddddd;}.spell-illust-cell img{width:100%;display:block;object-fit:cover;}.spell-illust-ph{height:100px;display:flex;align-items:center;justify-content:center;font-family:var(--ft);font-size:9px;color:rgba(200,168,75,.3);letter-spacing:1px;}.spell-table{width:100%;border-collapse:collapse;}.spell-table th{background:#553d2d;color:#bb9d87;padding:6px;text-align:center;font-size:10px;font-family:var(--fk);font-weight:600;border:1px solid #dddddd;letter-spacing:1px;}.spell-table td{padding:6px 10px;border:1px solid #dddddd;font-size:12px;line-height:1.7;vertical-align:top;}.spell-table .s-grade{background:#f2e9de;text-align:center;font-family:var(--ft);color:var(--brown-hd);vertical-align:top;padding:0;width:20%;}.s-star{background:#d8b793;color:#764b35;text-align:center;padding:4px 0;font-size:13px;display:block;}.s-type{display:flex;align-items:center;justify-content:center;padding:4px 0;background:#f2e9de;margin:0;min-height:40px;width:100%;}.s-type-solo{display:flex;align-items:center;justify-content:center;padding:4px 0;background:#f2e9de;margin:0;width:100%;height:100%;min-height:60px;}.spell-table .s-grade .spell-img{display:block;width:100%;height:auto;margin:0 auto;}.spell-table .s-val{background:#f2e9de;display:table-cell;width:auto;font-size:12px;color:#363a3d;text-align:center;vertical-align:middle;padding:6px 10px;}.s-val em{display:block;font-style:italic;color:#363a3d;font-size:12px;margin-top:2px;padding-top:4px;border-top:2px solid #986b58;text-align:center;}
.wish-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:0;margin:10px 0;border:2px solid #986b58;}.wish-item{border:none;border-right:0.5px solid #dddddd;overflow:hidden;background:var(--cream-dk);text-align:center;}.wish-item:last-child{border-right:none;}.wish-rank{background:#553d2d;color:#bb9d87;font-family:var(--fk);font-size:10px;font-weight:600;padding:4px;border:1px solid #dddddd;}.wish-img{background:#f2e9de;min-height:80px;display:flex;align-items:center;justify-content:center;}.wish-img img{width:100%;display:block;object-fit:cover;}
.item-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:10px 0;align-items:start;}.item-card{position:relative;background:#f5f0e8;border:1px solid var(--border);overflow:hidden;font-family:'Batang','바탕',serif;display:flex;flex-direction:column;min-height:500px;}.item-card-header{position:relative;width:100%;line-height:0;}.item-card-header>img{width:100%;display:block;max-height:220px;object-fit:cover;object-position:top;}.item-card-item-img{position:absolute;top:50%;transform:translateY(-50%);left:0;right:0;display:flex;align-items:center;justify-content:center;height:160px;}.item-card-item-img img{max-width:75%;max-height:140px;object-fit:contain;}.item-card-body-wrap{flex:1;display:flex;flex-direction:column;}.item-card-name{font-size:18px;font-weight:700;text-align:center;color:#000;padding:6px 10px 2px;font-family:'Batang','바탕',serif;}.item-card-en{font-size:12px;text-align:center;color:#616161;padding-bottom:4px;}.item-card-divider{width:100%;line-height:0;}.item-card-divider img{width:100%;display:block;}.item-card-price{font-size:13px;font-weight:700;color:#40403D;padding:6px 10px 4px;display:flex;align-items:center;gap:4px;}.item-card-desc{font-size:12px;line-height:1.7;color:#40403D;padding:0 10px 14px;flex:1;}.item-card-footer{width:100%;line-height:0;margin-top:auto;}.item-card-footer img{width:100%;display:block;}
.culture-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:10px 0;align-items:start;}.culture-card{border:1px solid var(--border);overflow:hidden;display:flex;flex-direction:column;}.culture-card-header{width:100%;line-height:0;}.culture-card-header img{width:100%;display:block;max-height:80px;object-fit:cover;object-position:top;}.culture-card-img{background:#f3f3f3;min-height:120px;display:flex;align-items:center;justify-content:center;}.culture-card-img img{width:100%;display:block;object-fit:cover;}.culture-card-title{background:#f3f3f3;color:#0a0a0a;text-align:right;padding:5px 8px;font-family:var(--fk);font-size:11px;font-weight:600;}.culture-card-en{font-family:var(--ft);font-size:9px;letter-spacing:1px;color:#616161;text-align:right;}.culture-card .fold{margin:0;border:none;border-top:1px solid var(--border);}.culture-card .fold-head{background:#f3f3f3;padding:6px 10px;}.culture-card .fold-body{border-top:1px solid var(--border-lt);background:#f3f3f3;}.culture-card-footer{width:100%;line-height:0;margin-top:auto;}.culture-card-footer img{width:100%;display:block;max-height:60px;object-fit:cover;object-position:bottom;}
.fold{border:1px solid var(--border);margin:6px 0;}.fold-head{font-family:var(--fk);font-size:11px;color:var(--muted);padding:5px 10px;background:#f3f3f3;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;user-select:none;border-bottom:1px solid transparent;}.fold-head:hover{color:var(--navy);}.fold .fold-body{padding:15px 18px!important;display:none;line-height:1.5!important;background:#f3f3f3!important;}.fold .fold-body p{text-indent:12px!important;margin:0 0 2px 0!important;line-height:1.5!important;}.fold-body p:last-child{margin-bottom:0;}.fold.open .fold-body{display:block;}.fold.open .fold-head{border-bottom:1px solid var(--border-lt);}.fold-arr{font-size:10px;transition:transform .2s;flex-shrink:0;}.fold.open .fold-arr{transform:rotate(90deg);}
.field-block{border:2px solid #976b58;margin:12px 0;overflow:hidden;}.field-head{background:#252525;color:#9a785d;text-align:center;padding:7px;font-family:var(--fk);font-size:13px;font-weight:600;letter-spacing:2px;}.field-table{width:100%;border-collapse:collapse;}.field-table td{padding:8px 12px;border:1px solid var(--border-lt);font-size:12px;line-height:1.7;vertical-align:middle;}.field-table .f-plain{background:#f2e9de;text-align:center;}.field-table .f-trigger{background:#252525;color:#9a785d;text-align:center;font-family:var(--fk);font-size:11px;font-weight:600;width:120px;border:1px solid #dddddd;}.field-table .f-resp{background:#f2e9de;}
.voice-table{width:100%;border-collapse:collapse;margin:10px 0;font-size:12px;border:2px solid #986b58;}.voice-table .v-head{background:#252525;color:#9a785d;text-align:center;padding:7px;font-family:var(--fk);font-size:13px;font-weight:600;letter-spacing:2px;}.voice-table .vk{background:#d8b793;color:#764b35;padding:5px 8px;text-align:center;font-family:var(--fk);font-size:12px;font-weight:600;border:1px solid var(--border-lt);width:120px;vertical-align:middle;}.voice-table .vv{padding:5px 12px;border:1px solid #dddddd;background:#f2e9de;color:#363a3d;line-height:1.7;font-style:italic;}
.costume-block{border:2px solid #986b58;margin:12px 0;overflow:hidden;}.costume-head{background:#252525;color:#9a785d;text-align:center;padding:6px;font-family:var(--fk);font-size:12px;font-weight:600;border:1px solid #dddddd;}.costume-main-img{text-align:center;background:#f4efe8;padding:12px;}.costume-main-img img{max-width:240px;margin:0 auto;}.costume-main-img-ph{min-height:200px;display:flex;align-items:center;justify-content:center;font-family:var(--ft);font-size:9px;color:rgba(200,168,75,.4);letter-spacing:1px;}.costume-caption{background:#553d2d;color:#bb9d87;text-align:center;padding:5px;font-family:var(--fk);font-size:11px;}.costume-info-table{width:100%;border-collapse:collapse;}.costume-info-table .ci-k{background:#d8b793;color:#764b35;padding:6px 10px;text-align:center;font-family:var(--fk);font-size:11px;font-weight:600;border:1px solid #dddddd;width:100px;vertical-align:middle;}.costume-info-table .ci-v{padding:6px 12px;border:1px solid var(--border-lt);background:#f2e9de;font-size:12px;vertical-align:top;text-align:center;}.costume-sd-img{display:flex;align-items:center;justify-content:center;min-height:80px;background:var(--cream-dk);}.costume-sd-img img{object-fit:contain;}.costume-sd-ph{min-height:80px;display:flex;align-items:center;justify-content:center;font-family:var(--ft);font-size:9px;color:rgba(200,168,75,.4);}
.footnotes{margin-top:28px;padding-top:10px;border-top:1px solid var(--border-lt);}.fn-item{display:flex;gap:8px;line-height:1.6;font-size:11px;color:var(--muted);margin-bottom:3px;}.fn-n{font-family:var(--ft);font-size:10px;color:#0263b8;flex-shrink:0;}
@media(max-width:640px){.infobox{width:100%;margin:0 0 16px 0;}.title{font-size:22px;}.search{display:none;}.wish-grid,.culture-grid{grid-template-columns:1fr 1fr;}.item-grid{grid-template-columns:1fr;}.culture-grid{grid-template-columns:1fr;}}
</style>
</head>
<body>
<div class="topbar"><a href="#" class="logo">WIKI</a><div class="search"><input type="text" placeholder="문서 검색..."><button>SEARCH</button></div></div>
<div class="page">
<div class="title-wrap"><h1 class="title">${esc(d.infobox.nameKo)} · ${esc(d.infobox.nameEn)}</h1><div class="title-sub">CHARACTER WIKI</div></div>
<div class="meta"><span>마지막 수정: ${esc(d.etc.date||'')}</span></div>
<div class="article">

<div class="infobox">
  <div class="ib-name"><span class="ib-name-ko">${esc(d.infobox.nameKo)}</span><span class="ib-name-en">${esc(d.infobox.nameEn)}</span></div>
  <div class="ib-imgs">
    <div class="ib-img-cell">${d.infobox.img1?`<img src="${d.infobox.img1}">`:'<div class="ib-img-ph">IMAGE</div>'}</div>
    <div class="ib-img-cell">${d.infobox.img2?`<img src="${d.infobox.img2}">`:'<div class="ib-img-ph">INSIGHT</div>'}</div>
  </div>
  <div class="ib-labels"><div class="ib-label">${esc(d.infobox.label1||'기본')}</div><div class="ib-label">${esc(d.infobox.label2||'통찰')}</div></div>
  <table class="ib-t">
    <colgroup><col style="width:20%"><col style="width:30%"><col style="width:20%"><col style="width:30%"></colgroup>
    <tr>
      <td class="ik">영감</td>
      <td class="iv iv-center">${inspireImg?`<img src="${inspireImg}" class="stats-img">`:''}${esc(d.infobox.inspire)}</td>
      <td class="ik">데미지 유형</td>
      <td class="iv iv-center">${dmgImg?`<img src="${dmgImg}" class="stats-img">`:''}${esc(d.infobox.dmg)}</td>
    </tr>
    <tr><td class="ik">성급</td><td class="iv iv-center">${esc(d.infobox.star)}</td><td class="ik">역할 태그</td><td class="iv iv-center">${esc(d.infobox.role)}</td></tr>
    ${d.infobox.sign?`<tr><td class="ik">서명</td><td class="iv iv-center" colspan="3"><img src="${d.infobox.sign}" style="display:block;margin:0 auto;width:120px;height:auto;"></td></tr>`:''}
    <tr><td class="ik">성우</td><td class="iv iv-center" colspan="3">🇰🇷 ${esc(d.infobox.cvKr||'■')}<br>🇺🇸 ${esc(d.infobox.cvUs||'■')}<br>🇨🇳 ${esc(d.infobox.cvCn||'■')}<br>🇯🇵 ${esc(d.infobox.cvJp||'■')}</td></tr>
  </table>
</div>

<div class="infobox">
  <div class="ib-chara-head">캐릭터 정보</div>
  <table class="ib-t">
    <colgroup><col style="width:20%"><col style="width:30%"><col style="width:20%"><col style="width:30%"></colgroup>
    <tr><td class="ik">매개체</td><td class="iv iv-center">${esc(d.chara.medium)}</td><td class="ik">영감</td><td class="iv iv-center">${esc(d.chara.inspireDesc)}</td></tr>
    <tr><td class="ik">조향 노트</td><td class="iv iv-center">${esc(d.chara.scent)}</td><td class="ik">규격</td><td class="iv iv-center">${esc(d.chara.size)}</td></tr>
    <tr><td class="ik-full" colspan="4">작품 소개</td></tr>
    <tr><td class="iv-full" colspan="4">${safe(d.chara.desc)}</td></tr>
  </table>
  <div class="ib-udimo">UDIMO</div>
  <div class="ib-udimo-img">${d.chara.udimoImg?`<img src="${d.chara.udimoImg}">`:'<div style="height:130px;display:flex;align-items:center;justify-content:center;font-size:9px;color:rgba(200,168,75,.3);">IMAGE</div>'}</div>
  <div class="ib-udimo-caption">${esc(d.chara.udimoCap)}</div>
</div>

<div class="toc">
  <div class="toc-title">목차</div>
  <ol>
    <li><a href="#s1"><span class="tn">1.</span><span>개요</span></a></li>
    <li><a href="#s2"><span class="tn">2.</span><span>공식 소개</span></a></li>
    <li><a href="#s3"><span class="tn">3.</span><span>작중 행적</span></a>${storyToc?`<ol class="sub">${storyToc}</ol>`:''}</li>
    <li><a href="#s4"><span class="tn">4.</span><span>성능</span></a>
      <ol class="sub">
        <li><a href="#s4-1"><span class="tn">4.1.</span><span>능력치</span></a></li>
        <li><a href="#s4-2"><span class="tn">4.2.</span><span>통찰</span></a></li>
        <li><a href="#s4-3"><span class="tn">4.3.</span><span>형상</span></a></li>
        <li><a href="#s4-4"><span class="tn">4.4.</span><span>계승</span></a></li>
        <li><a href="#s4-5"><span class="tn">4.5.</span><span>마도술</span></a></li>
      </ol>
    </li>
    <li><a href="#s5"><span class="tn">5.</span><span>운영</span></a>
      <ol class="sub">
        <li><a href="#s5-1"><span class="tn">5.1.</span><span>추천 조합</span></a></li>
        <li><a href="#s5-2"><span class="tn">5.2.</span><span>추천 의지</span></a></li>
      </ol>
    </li>
    <li><a href="#s6"><span class="tn">6.</span><span>평가</span></a>
      <ol class="sub">
        <li><a href="#s6-1"><span class="tn">6.1.</span><span>장점</span></a></li>
        <li><a href="#s6-2"><span class="tn">6.2.</span><span>단점</span></a></li>
      </ol>
    </li>
    <li><a href="#s7"><span class="tn">7.</span><span>물품</span></a></li>
    <li><a href="#s8"><span class="tn">8.</span><span>문화</span></a></li>
    <li><a href="#s9"><span class="tn">9.</span><span>황무지 대사</span></a></li>
    <li><a href="#s10"><span class="tn">10.</span><span>음성</span></a></li>
    ${etcToc}
    ${costumeToc}
  </ol>
</div>

<h2 class="h2" id="s1"><span class="hn">1.</span>개요<a href="#" class="edit-link">[편집]</a></h2>
<div class="intro-box">${injectFnTips(safe(d.overview.text))}${d.overview.quote?`<br><span class="intro-red">${esc(d.overview.quote)}</span>`:''}</div>
${d.overview.intro?`<p>${injectFnTips(safe(d.overview.intro))}</p>`:''}

<h2 class="h2" id="s2"><span class="hn">2.</span>공식 소개<a href="#" class="edit-link">[편집]</a></h2>
<div class="official-box">
  <div class="official-head"><span class="oh-title">${esc(d.official.title)}</span><span class="oh-sub">${esc(d.official.sub)}</span></div>
  <div class="official-link"><a href="${esc(d.official.url)||'#'}">${esc(d.official.linkText||'링크')}</a></div>
</div>

<h2 class="h2" id="s3"><span class="hn">3.</span>작중 행적<a href="#" class="edit-link">[편집]</a></h2>
${storySections||'<p></p>'}

<h2 class="h2" id="s4"><span class="hn">4.</span>성능<a href="#" class="edit-link">[편집]</a></h2>
<h3 class="h3" id="s4-1"><span class="hn">4.1.</span>능력치<a href="#" class="edit-link">[편집]</a></h3>
<table class="stat-table">
  <thead><tr>
    <th>통찰</th><th>레벨</th>
    <th><img src="${IMG.stats.attack}" class="stats-img">공격</th>
    <th><img src="${IMG.stats.health}" class="stats-img">HP</th>
    <th><img src="${IMG.stats.realityDEF}" class="stats-img">현실 방어</th>
    <th><img src="${IMG.stats.mentalDEF}" class="stats-img">정신 방어</th>
    <th><img src="${IMG.stats.technique}" class="stats-img">치명타 기술</th>
  </tr></thead>
  <tbody>${statsRows}</tbody>
</table>

<h3 class="h3" id="s4-2"><span class="hn">4.2.</span>통찰<a href="#" class="edit-link">[편집]</a></h3>
${insightBlocks}

<h3 class="h3" id="s4-3"><span class="hn">4.3.</span>형상<a href="#" class="edit-link">[편집]</a></h3>
<table class="keyed-table"><tr><td class="kt-head" colspan="2">형상</td></tr>${morphRows}</table>
${d.morph.eval?`<p>${injectFnTips(safe(d.morph.eval))}</p>`:''}

<h3 class="h3" id="s4-4"><span class="hn">4.4.</span>계승<a href="#" class="edit-link">[편집]</a></h3>
<table class="keyed-table">
  <tr><td class="kt-head" colspan="2">계승</td></tr>
  <tr><td class="kt-sub" colspan="2">${esc(d.inherit.name)}</td></tr>
  ${inheritRows}
</table>

<h3 class="h3" id="s4-5"><span class="hn">4.5.</span>마도술<a href="#" class="edit-link">[편집]</a></h3>
${spellBlocks}

<h2 class="h2" id="s5"><span class="hn">5.</span>운영<a href="#" class="edit-link">[편집]</a></h2>
<h3 class="h3" id="s5-1"><span class="hn">5.1.</span>추천 조합<a href="#" class="edit-link">[편집]</a></h3>
<ul>${comboItems}</ul>
<h3 class="h3" id="s5-2"><span class="hn">5.2.</span>추천 의지<a href="#" class="edit-link">[편집]</a></h3>
<div class="wish-grid">${wishItems}</div>

<h2 class="h2" id="s6"><span class="hn">6.</span>평가<a href="#" class="edit-link">[편집]</a></h2>
${d.eval.text?`<p>${injectFnTips(safe(d.eval.text))}</p>`:''}
<h3 class="h3" id="s6-1"><span class="hn">6.1.</span>장점<a href="#" class="edit-link">[편집]</a></h3>
<ul>${evalPros}</ul>
<h3 class="h3" id="s6-2"><span class="hn">6.2.</span>단점<a href="#" class="edit-link">[편집]</a></h3>
<ul>${evalCons}</ul>

<h2 class="h2" id="s7"><span class="hn">7.</span>물품<a href="#" class="edit-link">[편집]</a></h2>
<div class="item-grid">${itemCards}</div>

<h2 class="h2" id="s8"><span class="hn">8.</span>문화<a href="#" class="edit-link">[편집]</a></h2>
<div class="culture-grid">${cultureCards}</div>

<h2 class="h2" id="s9"><span class="hn">9.</span>황무지 대사<a href="#" class="edit-link">[편집]</a></h2>
${fieldBlocks}

<h2 class="h2" id="s10"><span class="hn">10.</span>음성<a href="#" class="edit-link">[편집]</a></h2>
<table class="voice-table">
  <tr><td class="v-head" colspan="2">음성<p><i>— VOICE —</i></p></td></tr>
  ${voiceRows}
</table>

${etcSection}
${d.costume.length>0?`<h2 class="h2" id="s-costume"><span class="hn">${costumeTocNum}.</span>의상<a href="#" class="edit-link">[편집]</a></h2>${costumeBlocks}`:''}

<div class="footnotes">${footnoteItems}</div>
</div>
</div>
<script>
document.querySelectorAll('.fold-head').forEach(function(h){h.addEventListener('click',function(){h.parentElement.classList.toggle('open');});});
document.querySelectorAll('a[href^="#"]').forEach(function(link){link.addEventListener('click',function(e){var id=this.getAttribute('href').slice(1);if(!id)return;var t=document.getElementById(id);if(!t)return;e.preventDefault();window.scrollTo({top:t.getBoundingClientRect().top+window.pageYOffset-54,behavior:'smooth'});});});
(function(){var inp=document.querySelector('.search input'),btn=document.querySelector('.search button');function doSearch(){var q=inp.value.trim();if(!q)return;document.querySelectorAll('.hl').forEach(function(e){e.outerHTML=e.innerHTML;});hl(document.querySelector('.article'),q);var f=document.querySelector('.hl');if(f)f.scrollIntoView({behavior:'smooth',block:'center'});else alert('검색 결과 없음');}function hl(n,q){if(n.nodeType===3){var i=n.nodeValue.toLowerCase().indexOf(q.toLowerCase());if(i!==-1){var s=document.createElement('span');s.className='hl';s.style.cssText='background:#ffe066;color:#000;border-radius:2px;padding:0 1px;';s.appendChild(document.createTextNode(n.nodeValue.slice(i,i+q.length)));n.parentNode.insertBefore(document.createTextNode(n.nodeValue.slice(0,i)),n);n.parentNode.insertBefore(s,n);n.parentNode.insertBefore(document.createTextNode(n.nodeValue.slice(i+q.length)),n);n.parentNode.removeChild(n);}}else if(n.nodeType===1&&n.nodeName!=='SCRIPT'&&n.nodeName!=='STYLE'){Array.from(n.childNodes).forEach(function(c){hl(c,q);});}}btn.addEventListener('click',doSearch);inp.addEventListener('keydown',function(e){if(e.key==='Enter')doSearch();});inp.addEventListener('input',function(){if(!inp.value.trim())document.querySelectorAll('.hl').forEach(function(e){e.outerHTML=e.innerHTML;});});})();
<\/script>
</body>
</html>`;
}

/* ══════════════════════════════
   미리보기
══════════════════════════════ */
let previewTimer = null;
function updatePreview() {
  clearTimeout(previewTimer);
  previewTimer = setTimeout(() => {
    try { document.getElementById('preview-frame').srcdoc = generateHTML(collectData()); }
    catch(e) { console.error(e); }
  }, 400);
}

/* ══════════════════════════════
   JSON 저장/불러오기
══════════════════════════════ */
function exportJSON() {
  const blob = new Blob([JSON.stringify(collectData(),null,2)],{type:'application/json'});
  const a = Object.assign(document.createElement('a'),{href:URL.createObjectURL(blob),download:'wiki.json'});
  a.click(); URL.revokeObjectURL(a.href);
}
function importJSON() { document.getElementById('json-import-input').click(); }
function handleJSONImport(e) {
  const file = e.target.files[0]; if (!file) return;
  const r = new FileReader();
  r.onload = ev => {
    try { loadData(JSON.parse(ev.target.result)); updatePreview(); alert('불러오기 완료!'); }
    catch { alert('JSON 오류'); }
  };
  r.readAsText(file); e.target.value='';
}

function loadData(d) {
  const sv = (id,v) => { const el=document.getElementById(id); if(el) el.value=v||''; };
  const se = (id,v) => { const el=document.getElementById(id); if(el) el.innerHTML=v||''; };
  const ib=d.infobox||{};
  sv('ib-name-ko',ib.nameKo); sv('ib-name-en',ib.nameEn);
  sv('ib-label1',ib.label1); sv('ib-label2',ib.label2);
  ['img1','img2'].forEach(k=>{if(ib[k]){const p=document.getElementById(`ib-${k}-prev`);if(p){p.src=ib[k];p.style.display='block';}const d2=document.getElementById(`ib-${k}-data`);if(d2)d2.value=ib[k];const c=document.getElementById(`ib-${k}-clear`);if(c)c.style.display='block';}});
  sv('ib-star',ib.star); sv('ib-role',ib.role);
  if(ib.sign){const p=document.getElementById('ib-sign-prev');if(p){p.src=ib.sign;p.style.display='block';}const d2=document.getElementById('ib-sign-data');if(d2)d2.value=ib.sign;const c=document.getElementById('ib-sign-clear');if(c)c.style.display='block';}
  sv('ib-cv-kr',ib.cvKr); sv('ib-cv-us',ib.cvUs); sv('ib-cv-cn',ib.cvCn); sv('ib-cv-jp',ib.cvJp);
  const ch=d.chara||{};
  sv('ch-medium',ch.medium); sv('ch-inspire-desc',ch.inspireDesc); sv('ch-scent',ch.scent); sv('ch-size',ch.size);
  se('ch-desc',ch.desc);
  if(ch.udimoImg){const p=document.getElementById('ch-udimo-prev');if(p){p.src=ch.udimoImg;p.style.display='block';}const d2=document.getElementById('ch-udimo-data');if(d2)d2.value=ch.udimoImg;}
  sv('ch-udimo-cap',ch.udimoCap);
  const ov=d.overview||{}; se('ov-text',ov.text); sv('ov-quote',ov.quote); se('ov-intro',ov.intro);
  const of=d.official||{}; sv('of-title',of.title); sv('of-sub',of.sub); sv('of-url',of.url); sv('of-link-text',of.linkText);
  se('morph-eval',d.morph?.eval); sv('inh-name',d.inherit?.name); se('ev-text',d.eval?.text);
  sv('etc-date',d.etc?.date);

  const lists=['story-list','insight-list','morph-list','inherit-list','spell-list','combo-list','wish-list','eval-pro-list','eval-con-list','item-list','culture-list','field-list','voice-list','costume-list','etc-list','footnote-list'];
  lists.forEach(id=>{document.getElementById(id).innerHTML='';});
  repeatCounts={};

  (d.story||[]).forEach(s=>{addStory();const l=document.getElementById('story-list').lastElementChild;l.querySelector('.story-title').value=s.title||'';setEditorEl(l.querySelector('.story-content'),s.content);});
  (d.insight||[]).forEach(ins=>{addInsight();const l=document.getElementById('insight-list').lastElementChild;setEditorEl(l.querySelector('.ins-desc'),ins.desc);l.querySelector('.ins-coin-txt').value=ins.coinTxt||'';});
  (d.morph?.items||[]).forEach(m=>{addMorph();const l=document.getElementById('morph-list').lastElementChild;l.querySelector('.morph-lv').value=m.lv||'';setEditorEl(l.querySelector('.morph-desc'),m.desc);});
  (d.inherit?.items||[]).forEach(inh=>{addInherit();const l=document.getElementById('inherit-list').lastElementChild;setEditorEl(l.querySelector('.inh-desc'),inh.desc);});
  (d.spell||[]).forEach(sp=>{addSpell();const l=document.getElementById('spell-list').lastElementChild;l.querySelector('.spell-name').value=sp.name||'';l.querySelector('.spell-is-ult').value=sp.isUlt||'0';['d1','d2','d3'].forEach(k=>{setEditorEl(l.querySelector(`.spell-${k}`),sp[k]);});['f1','f2','f3'].forEach(k=>{const el=l.querySelector(`.spell-${k}`);if(el)el.value=sp[k]||'';});});
  (d.combo||[]).forEach(c=>{addCombo();const l=document.getElementById('combo-list').lastElementChild;l.querySelector('.combo-name').value=c.name||'';setEditorEl(l.querySelector('.combo-desc'),c.desc);});
  (d.wish||[]).forEach(w=>{addWish();const l=document.getElementById('wish-list').lastElementChild;l.querySelector('.wish-rank').value=w.rank||'';});
  (d.eval?.pros||[]).forEach(p=>{addEvalPro();const l=document.getElementById('eval-pro-list').lastElementChild;l.querySelector('.eval-pro-title').value=p.title||'';setEditorEl(l.querySelector('.eval-pro-desc'),p.desc);});
  (d.eval?.cons||[]).forEach(c=>{addEvalCon();const l=document.getElementById('eval-con-list').lastElementChild;l.querySelector('.eval-con-title').value=c.title||'';setEditorEl(l.querySelector('.eval-con-desc'),c.desc);});
  (d.item||[]).forEach(it=>{addItem();const l=document.getElementById('item-list').lastElementChild;l.querySelector('.item-name').value=it.name||'';l.querySelector('.item-en').value=it.en||'';l.querySelector('.item-price-type').value=it.priceType||'';l.querySelector('.item-price').value=it.price||'';setEditorEl(l.querySelector('.item-desc'),it.desc);});
  (d.culture||[]).forEach(c=>{addCulture();const l=document.getElementById('culture-list').lastElementChild;l.querySelector('.culture-title').value=c.title||'';l.querySelector('.culture-en').value=c.en||'';setEditorEl(l.querySelector('.culture-text'),c.text);});
  (d.field||[]).forEach(fb=>{addFieldBlock();const l=document.getElementById('field-list').lastElementChild;setEditorEl(l.querySelector('.field-intro'),fb.intro);(fb.dialogs||[]).forEach(dg=>{addFieldRow(l.querySelector('.add-btn'));const rows=l.querySelectorAll('.field-rows>div');const row=rows[rows.length-1];row.querySelector('.field-trigger').value=dg.trigger||'';setEditorEl(row.querySelector('.field-resp'),dg.resp);});});
  (d.voice||[]).forEach(v=>{addVoice();const l=document.getElementById('voice-list').lastElementChild;l.querySelector('.voice-key').value=v.key||'';setEditorEl(l.querySelector('.voice-val'),v.val);});
  (d.costume||[]).forEach(cos=>{addCostume();const l=document.getElementById('costume-list').lastElementChild;l.querySelector('.cos-name').value=cos.name||'';l.querySelector('.cos-caption').value=cos.caption||'';l.querySelector('.cos-how').value=cos.how||'';l.querySelector('.cos-series').value=cos.series||'';l.querySelector('.cos-grade').value=cos.grade||'';});
  // 기타
  (d.etc?.items||[]).forEach(s=>{addEtc();const l=document.getElementById('etc-list').lastElementChild;l.querySelector('.etc-title').value=s.title||'';setEditorEl(l.querySelector('.etc-content'),s.content);});
  // 각주
  (d.footnote||[]).forEach(fn=>{addFootnote();const l=document.getElementById('footnote-list').lastElementChild;l.querySelector('.fn-name').value=fn.name||'';setEditorEl(l.querySelector('.fn-content'),fn.content);});
  updateInsightAddBtn();
}

/* ══════════════════════════════
   HTML 내보내기
══════════════════════════════ */
function exportHTML() {
  const a = Object.assign(document.createElement('a'),{href:URL.createObjectURL(new Blob([generateHTML(collectData())],{type:'text/html'})),download:'wiki.html'});
  a.click(); URL.revokeObjectURL(a.href);
}

/* ══════════════════════════════
   초기화
══════════════════════════════ */
function resetAll() {
  if (!confirm('모든 내용을 초기화할까요?')) return;
  ['story-list','insight-list','morph-list','inherit-list','spell-list','combo-list','wish-list','eval-pro-list','eval-con-list','item-list','culture-list','field-list','voice-list','costume-list','etc-list','footnote-list']
    .forEach(id=>{document.getElementById(id).innerHTML='';});
  document.querySelectorAll('.form-input,.form-select').forEach(el=>{el.value='';});
  document.querySelectorAll('.rich-editor').forEach(el=>{el.innerHTML='';});
  document.querySelectorAll('.img-preview').forEach(el=>{el.style.display='none';el.src='';});
  document.querySelectorAll('input[type=hidden]').forEach(el=>{el.value='';});
  document.querySelectorAll('.img-clear-btn').forEach(el=>{el.style.display='none';});
  repeatCounts={};
  initStats();
  updateInsightAddBtn();
  updatePreview();
}

/* ══════════════════════════════
   전역 노출
══════════════════════════════ */
window.switchTab=switchTab; window.updatePreview=updatePreview;
window.addStory=addStory; window.addInsight=addInsight; window.addInsightMat=addInsightMat;
window.addMorph=addMorph; window.addInherit=addInherit; window.addSpell=addSpell;
window.addCombo=addCombo; window.addWish=addWish; window.addEvalPro=addEvalPro; window.addEvalCon=addEvalCon;
window.addItem=addItem; window.addCulture=addCulture; window.addFieldBlock=addFieldBlock; window.addFieldRow=addFieldRow;
window.addVoice=addVoice; window.addCostume=addCostume; window.addEtc=addEtc; window.addFootnote=addFootnote;
window.importJSON=importJSON; window.exportJSON=exportJSON; window.exportHTML=exportHTML; window.resetAll=resetAll;
window.handleJSONImport=handleJSONImport; window.applyFmt=applyFmt; window.insertFootnote=insertFootnote;
window.toggleSelect=toggleSelect; window.previewImg=previewImg; window.previewImgEl=previewImgEl;
window.clearImg=clearImg; window.clearImgEl=clearImgEl; window.updateInsightAddBtn=updateInsightAddBtn;

/* ══════════════════════════════
   rich-editor / input 이벤트
══════════════════════════════ */
document.querySelectorAll('.rich-editor').forEach(el => {
  el.addEventListener('input', updatePreview);
  el.addEventListener('focusin', () => { _focused = el; });
});
document.querySelectorAll('.form-area .form-input, .form-area .form-select').forEach(el => {
  el.addEventListener('input', updatePreview);
  el.addEventListener('change', updatePreview);
  el.addEventListener('focusin', () => { _focused = el; });
});

/* ══════════════════════════════
   초기 실행
══════════════════════════════ */
initDropdowns();
initStats();
updatePreview();
