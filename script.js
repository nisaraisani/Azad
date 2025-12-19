// 🌙 Dark Mode
const toggle = document.getElementById("darkToggle");
if (toggle) {
  toggle.onclick = () => document.body.classList.toggle("dark");
}

// 📰 Static Urdu News (GitHub Safe)
const newsData = [
  {
    title: "بلوچستان میں ترقیاتی منصوبوں کا اعلان",
    desc: "حکومت نے بلوچستان میں نئے ترقیاتی منصوبوں کا اعلان کر دیا ہے۔"
  },
  {
    title: "سیاسی صورتحال پر اہم اجلاس",
    desc: "ملکی سیاسی صورتحال پر اعلیٰ سطحی اجلاس منعقد ہوا۔"
  },
  {
    title: "کھیلوں کی دنیا کی تازہ خبریں",
    desc: "قومی ٹیم نے شاندار کارکردگی کا مظاہرہ کیا۔"
  },
  {
    title: "ٹیکنالوجی میں نئی جدت",
    desc: "مصنوعی ذہانت کے نئے ٹولز متعارف کرا دیے گئے۔"
  }
];

const container = document.getElementById("newsContainer");
const breaking = document.getElementById("breakingText");

// Breaking News
breaking.textContent = newsData[0].title;

// Show News Cards
newsData.forEach(news => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <h3>${news.title}</h3>
    <p>${news.desc}</p>
  `;
  container.appendChild(div);
});
