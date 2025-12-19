const breakingNews = [
    "بلوچستان میں ترقیاتی منصوبوں کا اعلان",
    "ملکی حالات پر اہم سیاسی بیان",
    "کھیلوں کی دنیا سے تازہ خبریں",
    "ٹیکنالوجی میں نئی جدت"
];

let i = 0;
const text = document.getElementById("breakingText");

setInterval(() => {
    text.textContent = breakingNews[i];
    i = (i + 1) % breakingNews.length;
}, 3000);
