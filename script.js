/* ============ ⚙️ الإعدادات: غيّر أي حاجة من هنا بس ============ */
const CONFIG = {
  herName: "يارا",
  myName: "خالد",
  anniversary: "2026-05-09",               // تاريخ الذكرى
  song: { file: "song.mp3", title: "بتمون", artist: "إليسا" },
  video: "message.mp4",
  videoQuote: "ثم إنكِ الشيء الوحيد الذي لم تقتله العادة، ولا التكرار، يأتي كل مرة فأبتهج كأول مرة",
  finalMessage: "إنتي أحلى حاجة حصلتلي يا يارا. بحبك النهاردة وبكرة وكل يوم، وهفضل جنبك دايمًا 🤍",
  // رسائل الصباح (واحدة كل يوم)
  morningMessages: [
    "يوم جديد وإنتي فيه، يبقى أكيد هيكون حلو ☀️",
    "صحيتي النهاردة؟ يبقى الدنيا فرحانة بيكي 🌷",
    "أول حاجة بفكر فيها كل صباح هي إنتي 🤍",
    "ابتسمي، عشان فيه حد بيحبك أوي 💕",
    "النهاردة هتعدي حلو، وأنا معاكي في كل خطوة 🌸",
    "إنتي سبب إن صباحي بيبقى أحلى ☕",
    "خدي نفس عميق، إنتي قدها وقدود 💪"
  ],
  // الذكريات (الصور في مجلد assets) — مترتبة بالتاريخ
  memories: [
    { img: "p1.jpg", title: "أول محادثة", date: "2026-05-09", caption: "الصورة اللي كانت السبب إننا نتعرف. ماكنتش أعرف إن صورة واحدة هتفتحلي أحلى باب في حياتي 🌹" },
    { img: "p4.jpg", title: "أول ميعاد", date: "2026-08-09", caption: "أول يوم خرجنا فيه، وأول مرة أشوفك بجد. يوم عمري ما هنساه 💍" },
    { img: "p3.jpg", title: "أحلى ذكرى", date: "2026-08-10", caption: "أول عيد ميلاد في حياتي، وإنتي اللي عملتيهولي. أحلى ذكرى عندي 🎂" },
    { img: "p5.jpg", title: "أضحك لحظة", date: "2026-08-10", caption: "أنا كنت فرحان من قلبي، وإنتي كنتي مهيبرة وشبه اللي شاربين حاجة بس كنت مبسوط أوي. أحلى هبل في الدنيا 😂" },
    { img: "p2.jpg", title: "أكتر صورة لينا", date: "2026-08-12", caption: "دي أكتر صورة لينا مع بعض بحبها، وإحنا واقفين جنب بعض. عقبال وقفتنا واحنا متجوزين 🤍" },
    { img: "p6.jpg", title: "صورتي المفضلة ليكي", date: "2026-09-07", caption: "دي أكتر صورة بحبها ليكي. بصي لابتسامتك دي، تعرفي إنك قمر؟ 🌷" }
  ],
  // الجواب (كل سطر فاضي = فقرة جديدة)
  letter: `بطوطي حبيب قلبي،
أنا مش عارف أبدأ كلامي إزاي، ولا حتى عارف إذا كان فيه كلام ممكن يوصفلك إنتي بالنسبالي إيه وقد إيه أنا بحبك، بس كل اللي عايزك تعرفيه إنك من أغلى وأجمل الحاجات اللي حصلتلي في حياتي، وإن وجودك فيها فارق معايا أكتر ما تتخيلي.

عايزك تعرفي إني فخور بيكي أوي، فخور بيكي وبكل حاجة بتعمليها، وبكل مرة بتحاولي فيها حتى لو محدش شايف تعبك، وفخور بقوتك حتى في الأوقات اللي إنتي نفسك مش حاسة فيها إنك قوية. أنا شايف كل مجهود بتعمليه، وشايف قد إيه بتحاولي، وعارف إن مش كل الأيام بتكون سهلة عليكي، بس صدقيني أنا مؤمن بيكي وبقدرتك إنك تعدّي أي حاجة.

وعايزك تفهمي إن اللي إنتي بتمري بيه دلوقتي مجرد فترة، مهما كانت صعبة أو طويلة، هتعدّي، وهييجي يوم تبصي وراكي وتستغربي إزاي كل ده عدى. متضغطيش على نفسك، ومتطلبيش من نفسك تكوني قوية طول الوقت، عادي تتعبي، وعادي تزعلي، وعادي يكون عندك أيام مش قادرة تعملي فيها أي حاجة. إنتي مش مطالبة تثبتي لأي حد إنك قوية، وأنا مش مستني منك تكوني في أحسن حالاتك عشان أحبك.

أنا عايزك تعرفي إني مش موجود في حياتك بس عشان أشاركك اللحظات الحلوة والضحك والخروجات، أنا موجود كمان في الأيام الصعبة، في وقت تعبك وزعلك وخوفك، وفي كل مرة تحسي فيها إن الدنيا تقيلة عليكي. نفسي أكون الشخص اللي تقدري ترجعي له وإنتي مش محتاجة تشرحي أي حاجة، الشخص اللي تحسي معاه إنك مش لوحدك وإن فيه حد شايل معاكي، حتى لو مش قادر يحل كل حاجة، بس عمره ما هيسيب إيدك.

وبجد أنا مش متخيل حياتي من غيرك، بقيتي جزء من يومي وتفكيري وكل تفاصيل حياتي، ووجودك لوحده بيخلّي حاجات كتير أحلى. أنا بحبك في كل حالاتك، لما تكوني مبسوطة ولما تكوني زعلانة، لما تكوني قوية ولما تكوني محتاجة حد يسندك، ومش محتاج منك أي حاجة غير إنك تكوني إنتي.

نفسي تشوفي نفسك بعيني ولو لمرة واحدة، عشان تعرفي إنتي جميلة ومميزة وقد إيه تستاهلي كل حاجة حلوة في الدنيا. ومتخليش أي فترة صعبة تعدّي عليكي تخليكي تنسي قيمتك أو تشككي في نفسك، لأنك بالنسبالي شخص يستحق كل الحب والفخر والسعادة.

وأخيرًا، عايزك تفتكري دايمًا إنك مش لوحدك، وإن مهما الأيام كانت صعبة أنا هفضل جنبك، أشجعك وأطمنك وأفكرك إنك تقدري، وهفضل أفرح لفرحتك وأزعل لزعلك وأتمنى أشوفك دايمًا أحسن وأسعد واحدة في الدنيا.

أنا بحبك أوي، وفخور بيكي أوي، ومهما كتبت مش هعرف أوصفلك مكانتك عندي. وكل اللي أتمناه إنك تفضلي دايمًا عارفة إن فيه قلب بيحبك بجد، ومؤمن بيكي، ومختارك كل يوم.

بحبك، وهفضل دايمًا في ضهرك ومعاكي.
— ${"خالد"}`,
  // أسباب الحب (٥٠ مثال — عدّلهم أو زوّد عليهم)
  reasons: [
    "ابتسامتك بتحسّن يومي كله","بتخلّي اللحظات العادية سحر","بحب إزاي شايفة الدنيا","سعادتك أهم حاجة عندي","عشان وأنا معاكي بحس إني في بيتي",
    "ضحكتك بتشفي أي تعب","قلبك طيب أوي","عشان إنتي قوية حتى لما مش حاسة","طريقة كلامك بتفرحني","إنتي أمان ليا",
    "عشان بتحاولي دايمًا","عيونك فيها حاجة تطمّن","بتفهميني من غير ما أتكلم","إنتي أحلى صدفة في حياتي","عشان بتفرحي بالحاجات الصغيرة",
    "هزارك الحلو معايا","حنيتك على اللي حواليكي","إنتي مختلفة عن أي حد","عشان بتخلّيني أحسن","بحب هيصتك الجميلة",
    "عشان صوتك بيهديني","إنتي أول فكرة في يومي","احتواؤك ليا","عشان بتصدقيني","طموحك بيلهمني",
    "اهتمامك بأدق تفاصيلي","عشان إنتي إنتي","خجلك الحلو","بتخلّي الأيام الصعبة أخف","وجودك بس بيفرق",
    "عشان اخترتيني","دعواتك ليا","بحب إزاي بتتأثري","شخصيتك القوية والرقيقة مع بعض","إنتي حلمي اللي اتحقق",
    "بتديني أمل","عشان ريحة وجودك حلوة","فرحتك بتفرحني أكتر منك","إنتي كل الحاجات الحلوة","عشان معاكي مفيش ملل",
    "قدرتك على السماح","بحب قد إيه بتحبيني","طريقتك لما بتتنرفزي كمان 😂","عشان بتشجعيني","نظرتك ليا",
    "إنتي مستقبلي","عشان بتخلّيني أبتسم من غير سبب","إنتي دنيتي","عشان كل يوم بحبك أكتر"
  ],
  // مفاجآت الهدية اليومية (type: text | photo | video | song)
  surprises: [
    { type: "text", text: "إنتي أحلى حاجة في يومي، ومهما حصل فيه إنتي دايمًا الجزء الحلو 🌷" },
    { type: "photo", img: "p6.jpg", text: "بصي لابتسامتك دي، قمر بجد 🌸" },
    { type: "text", text: "وعد مني: هفضل أفرح لفرحتك وأسندك في تعبك 🤍" },
    { type: "video", src: "message.mp4", text: "كلمتين من قلبي ليكي 🎥" },
    { type: "photo", img: "p1.jpg", text: "ذكرى بداية حكايتنا 🌹" },
    { type: "song", text: "شغّلي أغنيتنا النهاردة 🎵 (بتمون - إليسا)" },
    { type: "text", text: "لو الدنيا زعلتك النهاردة، افتكري إن في قلب مستنيكي وبيحبك 💕" }
  ],
  moods: [
    { id: "happy", icon: "😊", label: "مبسوطة", fx: "✨", dir: "up", msg: "الله! فرحتك دي هي أحلى حاجة في يومي. افضلي مبسوطة كده على طول يا قلبي 🌞" },
    { id: "sad", icon: "🥺", label: "زعلانة", fx: "🤍", dir: "down", msg: "تعالي هنا يا حبيبتي. نفسي أحضنك أكبر حضن دلوقتي. الأيام الصعبة مابتدومش، ومش لازم تواجهي كل حاجة لوحدك." },
    { id: "tired", icon: "😴", label: "تعبانة", fx: "🌙", dir: "side", msg: "خدي استراحة صغيرة يا حبيبتي. مش لازم تكوني مثالية ولا منتجة كل ثانية. أنا فخور بيكي، وسامحي نفسك زي ما بتسامحي الناس." },
    { id: "stressed", icon: "😣", label: "متوترة", fx: "🍃", dir: "slow", msg: "خدي نفس عميق معايا… شهيق… زفير. كل حاجة هتتحل واحدة واحدة، وإنتي أقوى مما فاكرة." },
    { id: "miss", icon: "💭", label: "وحشتك", fx: "💌", dir: "up", msg: "وإنتي كمان وحشتيني أوي. كل لحظة بعيد فيها عنك بتفكرني قد إيه إنتي غالية عندي، وقريب هنتقابل 🤍" }
  ]
};

/* ================= الكود ================= */
const $ = (s) => document.querySelector(s);
const store = {
  get(k, d) { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
};
const todayKey = new Date().toISOString().slice(0, 10);
const dayNum = Math.floor(Date.now() / 864e5);
const fmt = (d) => new Date(d).toLocaleDateString("ar-EG", { year: "numeric", month: "long", day: "numeric" });

// عناصر عائمة (قلوب ونجوم)
function floaty(list, n = 1, dur = 8) {
  for (let i = 0; i < n; i++) {
    const e = document.createElement("span");
    e.className = "fl"; e.textContent = list[Math.floor(Math.random() * list.length)];
    e.style.cssText = `left:${Math.random() * 100}%;font-size:${14 + Math.random() * 22}px;animation-duration:${dur + Math.random() * 5}s`;
    $("#floaty").appendChild(e); setTimeout(() => e.remove(), (dur + 6) * 1000);
  }
}
setInterval(() => floaty(["💗", "✨", "🌸", "⭐", "💕"]), 1800);

// الافتتاح
$("#introName").textContent = CONFIG.herName;
$("#startBtn").onclick = () => {
  $("#intro").classList.add("out"); $("#main").hidden = false; $("#nav").hidden = false; go(0);
  setTimeout(() => ($("#intro").hidden = true), 1000); scrollTo(0, 0);
};
$("#today").textContent = fmt(new Date());
$("#morningMsg").textContent = CONFIG.morningMessages[dayNum % CONFIG.morningMessages.length];
const days = Math.floor((Date.now() - new Date(CONFIG.anniversary)) / 864e5);
$("#daysCount").textContent = days >= 0 ? `بقالنا ${days} يوم مع بعض 🤍` : "";

// الهدية اليومية (بتتذكر لو اتفتحت النهاردة)
const gb = $("#giftBox"), gOut = $("#giftOut");
function showGift() {
  const s = CONFIG.surprises[dayNum % CONFIG.surprises.length];
  gb.classList.add("open"); gOut.hidden = false;
  gOut.innerHTML = `<p>${s.text}</p>` + (s.type === "photo" ? `<img src="${s.img}" alt="">` : s.type === "video" ? `<video src="${s.src}" controls playsinline></video>` : s.type === "song" ? `<button class="btn" onclick="go('music');document.getElementById('playBtn').click()">شغّلي الأغنية</button>` : "");
  const h = store.get("opened", {}); h[todayKey] = true; store.set("opened", h); floaty(["🎉", "💖", "✨"], 12, 5);
}
gb.onclick = showGift;
if (store.get("opened", {})[todayKey]) showGift();

// الأسباب
let lastR = -1;
$("#reasonBtn").onclick = () => {
  let i; do { i = Math.floor(Math.random() * CONFIG.reasons.length); } while (i === lastR && CONFIG.reasons.length > 1);
  lastR = i; const o = $("#reasonOut"); o.hidden = false; o.style.animation = "none"; o.offsetWidth; o.style.animation = "";
  o.textContent = CONFIG.reasons[i]; floaty(["💗"], 5, 5);
  const h = store.get("reasonsSeen", []); if (!h.includes(i)) { h.push(i); store.set("reasonsSeen", h); }
};

// الذكريات
const lb = $("#lightbox");
CONFIG.memories.forEach((m) => {
  const b = document.createElement("button"); b.className = "polaroid";
  b.innerHTML = `<img src="${m.img}" alt="${m.title}" loading="lazy"><b>${m.title}</b><span>${m.caption}</span>`;
  b.onclick = () => { lb.querySelector("img").src = m.img; lb.querySelector("p").textContent = m.caption; lb.hidden = false; };
  $("#gallery").appendChild(b);
  $("#timeline").insertAdjacentHTML("beforeend", `<li><b>${m.title}</b><small>${fmt(m.date)}</small></li>`);
});
lb.onclick = () => (lb.hidden = true);

// المزاج
CONFIG.moods.forEach((m) => {
  const b = document.createElement("button"); b.className = "mood"; b.innerHTML = `<span>${m.icon}</span>${m.label}`;
  b.onclick = () => {
    document.querySelectorAll(".mood").forEach((x) => x.classList.remove("on")); b.classList.add("on");
    const o = $("#moodOut"); o.hidden = false; o.style.animation = "none"; o.offsetWidth; o.style.animation = ""; o.textContent = m.msg;
    const dur = m.dir === "slow" ? 12 : m.dir === "side" ? 9 : 6;
    for (let i = 0; i < 14; i++) setTimeout(() => {
      floaty([m.fx], 1, dur);
      const last = $("#floaty").lastChild; if (m.dir === "down") last.style.cssText += ";bottom:auto;top:-30px;animation-name:down";
    }, i * 120);
    const h = store.get("moods", {}); h[todayKey] = m.id; store.set("moods", h);
  };
  $("#moods").appendChild(b);
});
document.head.insertAdjacentHTML("beforeend", "<style>@keyframes down{to{transform:translateY(115vh);opacity:0}}</style>");

// الفيديو + الجملة (كلمة ورا كلمة)
$("#quote").innerHTML = CONFIG.videoQuote.split(" ").map((w, i) => `<span style="transition-delay:${i * 0.35}s">${w}</span>`).join(" ") + " 🤍";
$("#vid").src = CONFIG.video;
new IntersectionObserver((e, ob) => e.forEach((x) => { if (x.isIntersecting) { $("#quote").classList.add("show"); ob.disconnect(); } }), { threshold: 0.4 }).observe($("#videoPage"));

// الجواب
$("#env").onclick = function () {
  this.classList.add("open"); const l = $("#letterBox"); l.hidden = false;
  l.innerHTML = CONFIG.letter.replace("${\"خالد\"}", CONFIG.myName).split("\n\n").map((p) => `<p>${p.replace(/\n/g, "<br>")}</p>`).join("");
  setTimeout(() => l.scrollIntoView({ behavior: "smooth", block: "start" }), 500);
};

// الموسيقى (من غير تشغيل تلقائي)
const au = $("#audio"); au.src = CONFIG.song.file;
$("#songTitle").textContent = CONFIG.song.title; $("#songArtist").textContent = CONFIG.song.artist;
$("#bars").innerHTML = "<i></i>".repeat(18);
document.querySelectorAll("#bars i").forEach((b, i) => (b.style.animationDelay = (i % 6) * 0.12 + "s"));
$("#playBtn").onclick = () => (au.paused ? au.play().catch(() => {}) : au.pause());
const sync = () => { const p = !au.paused; $("#playBtn").textContent = p ? "❚❚" : "▶"; $("#bars").classList.toggle("on", p); $("#cover").classList.toggle("spin", p); };
au.onplay = au.onpause = au.onended = sync;
au.ontimeupdate = () => ($("#seek").value = (au.currentTime / (au.duration || 1)) * 100);
$("#seek").oninput = (e) => (au.currentTime = (e.target.value / 100) * (au.duration || 0));

// النهاية
$("#hugBtn").onclick = () => {
  $("#ending").hidden = false; $("#endMsg").textContent = CONFIG.finalMessage;
  let n = 0; const t = setInterval(() => { floaty(["❤", "💖", "✨", "💕", "🌸"], 4, 5); if (++n > 30) clearInterval(t); }, 150);
  $("#ending").appendChild($("#floaty"));
};
$("#closeEnd").onclick = () => { $("#ending").hidden = true; document.body.prepend($("#floaty")); };

// التبويبات: صفحة واحدة بتتنقل بين الأقسام بالزراير
const pages = [...document.querySelectorAll(".page")]; let cur = 0;
$("#final").appendChild($("footer"));
pages.forEach((p, i) => {
  const t = document.createElement("button"); t.className = "tab"; t.innerHTML = `<b>${p.dataset.tab}</b>${p.dataset.name}`; t.onclick = () => go(i);
  $("#tabs").appendChild(t);
  if (i > 0 && i < pages.length - 1) { const n = document.createElement("button"); n.className = "btn pgnext"; n.textContent = "الصفحة اللي بعدها ←"; n.onclick = () => go(i + 1); p.appendChild(n); }
});
document.addEventListener("click", (e) => { if (e.target.dataset.go === "next") go(cur + 1); });
$("#prev").onclick = () => go(cur - 1); $("#next").onclick = () => go(cur + 1);
function go(t) {
  const i = typeof t === "string" ? pages.findIndex((p) => p.id === t) : t;
  if (i < 0 || i >= pages.length) return;
  cur = i; $("#vid").pause();
  pages.forEach((p, k) => p.classList.toggle("active", k === i));
  document.querySelectorAll(".tab").forEach((b, k) => { b.classList.toggle("on", k === i); if (k === i) b.scrollIntoView({ inline: "center", block: "nearest" }); });
  $("#prev").disabled = i === 0; $("#next").disabled = i === pages.length - 1;
  scrollTo(0, 0); if (pages[i].id === "videoPage") $("#quote").classList.add("show");
}
