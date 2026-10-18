const spots = {
  shouxihu: {
    name: "瘦西湖",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Yangzhou_Slender_West_Lake.jpg/1280px-Yangzhou_Slender_West_Lake.jpg",
    bg: "002.PNG",
    season: "season-spring",
    poem: "二十四桥明月夜，玉人何处教吹箫",
    poemAuthor: "—— 杜牧《寄扬州韩绰判官》",
    desc: "瘦西湖是扬州的魂。湖形瘦长，亭台依水，垂柳画舫，一步一景。春有柳烟，夏有荷风，秋有月色，冬有残雪，是江南湖上园林的极致。",
    features: [
      "五亭桥、白塔、二十四桥，三步一景",
      "乘画舫穿桥而过，听船娘吴音软语",
      "「烟花三月下扬州」的最佳注脚",
      "晨雾未散时，如一幅水墨长轴徐徐展开"
    ],
    addr: "邗江区大虹桥路28号"
  },
  geyuan: {
    name: "个园",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Ge_Yuan_Garden%2C_Yangzhou.jpg/1280px-Ge_Yuan_Garden%2C_Yangzhou.jpg",
    bg: "003.PNG",
    season: "season-summer",
    poem: "宁可食无肉，不可居无竹",
    poemAuthor: "—— 苏轼《於潜僧绿筠轩》",
    desc: "个园以竹得名，以石取胜。春山如笑，夏山如滴，秋山如妆，冬山如睡——四季假山是中国园林史上的孤例，方寸之间见天地。",
    features: [
      "万竿修竹，取「竹」字半边为园名",
      "笋石、湖石、黄石、宣石叠出四季",
      "盐商审美：富而不俗，雅而不傲",
      "转角即画，移步换境，步步生莲"
    ],
    addr: "广陵区盐阜东路10号"
  },
  heyuan: {
    name: "何园",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/He_Garden%2C_Yangzhou.jpg/1280px-He_Garden%2C_Yangzhou.jpg",
    bg: "004.PNG",
    season: "season-autumn",
    poem: "回廊复道凌空起，片石山房入画来",
    poemAuthor: "—— 题何园",
    desc: "何园号称「晚清第一园」，复道回廊空中相连，片石山房为石涛叠石孤本。中西合璧，是扬州园林最纤细精致的一笔。",
    features: [
      "1500米复道回廊，如空中立交桥",
      "水心亭倒影、镜花水月之景",
      "洋楼与园林交织，旧时代的新意",
      "夜灯初上时，最似戏文里的扬州"
    ],
    addr: "广陵区徐凝门大街66号"
  },
  daming: {
    name: "大明寺",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Daming_Temple%2C_Yangzhou.jpg/1280px-Daming_Temple%2C_Yangzhou.jpg",
    bg: "005.PNG",
    season: "season-winter",
    poem: "鉴真东渡传钟磬，蜀冈高处见江南",
    poemAuthor: "—— 题大明寺",
    desc: "大明寺始建于南朝，鉴真大师曾在此传戒。古木参天，钟声悠远，栖灵塔高耸入云，佛意与文气交织，登塔可远眺瘦西湖全景。",
    features: [
      "鉴真纪念堂，唐风建筑肃穆庄严",
      "登栖灵塔俯瞰湖山如画",
      "欧阳修「平山堂」翰墨犹存",
      "晨钟暮鼓间，心自然静下来"
    ],
    addr: "邗江区平山堂东路8号"
  },
  dongguan: {
    name: "东关街",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Dongguan_Street%2C_Yangzhou.jpg/1280px-Dongguan_Street%2C_Yangzhou.jpg",
    bg: "006.PNG",
    season: "season-market",
    poem: "青砖小巷灯初上，一盏茶汤是扬州",
    poemAuthor: "—— 题东关街",
    desc: "东关街是扬州的市井脉搏。青砖灰瓦，石板悠长，老字号林立。白天是古街，夜里是人间烟火，一碗汤包、一盏魁龙珠，便是扬州慢。",
    features: [
      "富春、冶春、谢馥春等百年老字号",
      "扬州剪纸、漆器、评话非遗汇聚",
      "东关古渡，连着京杭大运河千年商脉",
      "夜游最妙：灯笼高悬，人影婆娑"
    ],
    addr: "广陵区东关街"
  }
};

/* ===== 花瓣 ===== */
function createPetals() {
  const container = document.getElementById('petals');
  const colors = [
    'radial-gradient(ellipse at 30% 30%, #ffb7c5, #f09199, #e87482)',
    'radial-gradient(ellipse at 30% 30%, #ffd6a5, #ffb347, #e8943a)',
    'radial-gradient(ellipse at 30% 30%, #c7f9cc, #80ed99, #57cc99)'
  ];
  for (let i = 0; i < 18; i++) {
    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.style.left = Math.random() * 100 + '%';
    petal.style.width = (Math.random() * 8 + 8) + 'px';
    petal.style.height = (Math.random() * 8 + 8) + 'px';
    petal.style.background = colors[i % colors.length];
    petal.style.animationDuration = (Math.random() * 6 + 6) + 's';
    petal.style.animationDelay = (Math.random() * 8) + 's';
    petal.style.opacity = Math.random() * .4 + .3;
    container.appendChild(petal);
  }
}
createPetals();

/* ===== 切换逻辑 ===== */
const buttons = document.querySelectorAll('.spot-btn');
const showEl = document.getElementById('show');
const bgLayer = document.getElementById('bg-layer');
const imgEl = document.getElementById('spot-img');
const nameEl = document.getElementById('spot-name');
const poemEl = document.getElementById('spot-poem');
const poemAuthorEl = document.getElementById('spot-poem-author');
const descEl = document.getElementById('spot-desc');
const featuresEl = document.getElementById('spot-features');
const addrEl = document.getElementById('spot-addr');

function render(key) {
  const s = spots[key];
  if (!s) return;

  showEl.classList.add('switching');

  // 背景淡出 → 换图 → 淡入
  bgLayer.style.opacity = '0';

  setTimeout(() => {
    bgLayer.style.backgroundImage = `url('${s.bg}')`;
    bgLayer.style.opacity = '1';

    // 季节色调
    document.body.className = '';
    document.body.classList.add(s.season);

    imgEl.src = s.img;
    nameEl.textContent = s.name;
    poemEl.textContent = s.poem;
    poemAuthorEl.textContent = s.poemAuthor;
    descEl.textContent = s.desc;
    addrEl.textContent = s.addr;

    featuresEl.innerHTML = '';
    s.features.forEach(f => {
      const li = document.createElement('li');
      li.textContent = f;
      featuresEl.appendChild(li);
    });

    showEl.classList.remove('switching');
  }, 400);
}

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('active')) return;
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    render(btn.dataset.id);
  });
});

// 初始化
document.body.classList.add('season-spring');
bgLayer.style.backgroundImage = "url('002.PNG')";
render('shouxihu');
(function () {
  const canvas = document.getElementById('fireworks');
  const ctx = canvas.getContext('2d');
  let W, H, dpr;

  function resize() {
    dpr = window.devicePixelRatio || 1;
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener('resize', resize);

  const PALETTE = [
    ['#ff4d4f', '#ffd666'],
    ['#d4af37', '#fff1b8'],
    ['#36cfc9', '#b7eb8f'],
    ['#ff7a45', '#ffe58f'],
    ['#ad8b00', '#fffbe6']
  ];

  const rockets = [];
  const particles = [];

  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  class Rocket {
    constructor(targetX, targetY) {
      this.x = targetX + rand(-30, 30);
      this.y = window.innerHeight;
      this.tx = targetX;
      this.ty = targetY;
      this.vy = rand(-11, -9);
      this.vx = (this.tx - this.x) / 40;
      this.color = PALETTE[Math.floor(Math.random() * PALETTE.length)];
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.vy += 0.18;
      particles.push(new Spark(this.x, this.y, this.color[0], true));
      if (this.vy >= 0 || this.y <= this.ty) {
        explode(this.x, this.y, this.color);
        return false;
      }
      return true;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = this.color[0];
      ctx.fill();
    }
  }

  class Spark {
    constructor(x, y, color, trail) {
      this.x = x;
      this.y = y;
      const a = Math.random() * Math.PI * 2;
      const s = trail ? rand(0.5, 1.5) : rand(2, 7);
      this.vx = Math.cos(a) * s;
      this.vy = Math.sin(a) * s;
      this.life = 1;
      this.decay = trail ? 0.08 : rand(0.012, 0.025);
      this.color = color;
      this.size = trail ? 1 : rand(1.5, 3);
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.vy += 0.045;
      this.vx *= 0.97;
      this.vy *= 0.97;
      this.life -= this.decay;
      return this.life > 0;
    }
    draw() {
      ctx.globalAlpha = Math.max(this.life, 0);
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.globalAlpha = 1;
    }
  }

  function explode(x, y, color) {
    const n = 70 + Math.floor(Math.random() * 40);
    for (let i = 0; i < n; i++) {
      const p = new Spark(x, y, Math.random() > 0.5 ? color[0] : color[1]);
      particles.push(p);
    }
  }

  function launch() {
    const x = rand(W * 0.2, W * 0.8);
    const y = rand(H * 0.15, H * 0.45);
    rockets.push(new Rocket(x, y));
  }

  window.addEventListener('click', (e) => {
    rockets.push(new Rocket(e.clientX, e.clientY));
  });

  let nextLaunch = 0;
  function loop(t) {
    ctx.fillStyle = 'rgba(20, 16, 12, 0.18)';
    ctx.fillRect(0, 0, W, H);

    if (t > nextLaunch) {
      launch();
      nextLaunch = t + rand(1600, 3000);
    }

    for (let i = rockets.length - 1; i >= 0; i--) {
      const r = rockets[i];
      r.draw();
      if (!r.update()) rockets.splice(i, 1);
    }

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.draw();
      if (!p.update()) particles.splice(i, 1);
    }

    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
})();
