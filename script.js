const contacts = [
    { name: "Email", link: "#email" },
    { name: "Telepon", link: "#phone" }
];

const dropdown = document.getElementById('contact-dropdown');

contacts.forEach(contact => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = contact.link;
    a.textContent = contact.name;
    li.appendChild(a);
    dropdown.appendChild(li);
});

const articles = [
    {
        title: "Tentang Perusahaan Kami",
        content: "Kami adalah perusahaan yang sangat berkomitmen untuk memberikan solusi terbaik dan paling inovatif bagi klien kami. Dengan pengalaman bertahun-tahun di industri ini, kami siap membantu Anda mencapai semua tujuan bisnis yang Anda impikan."
    },
    {
        title: "Visi dan Misi",
        content: "Visi kami adalah untuk menjadi pemimpin yang diakui dalam industri ini, sementara misi kami adalah untuk memberikan layanan yang berkualitas tinggi dan memuaskan kepada semua klien kami tanpa terkecuali."
    },
    {
        title: "Nilai-Nilai Perusahaan",
        content: "Kami menjunjung tinggi nilai-nilai seperti integritas, inovasi, dan komitmen yang kuat terhadap kepuasan pelanggan, yang menjadi dasar dari setiap tindakan dan keputusan yang kami ambil."
    }
];

const articlesContainer = document.getElementById('articles-container');

articles.forEach(article => {
    const articleElement = document.createElement('article');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    h1.textContent = article.title;
    p.textContent = article.content;

    articleElement.appendChild(h1);
    articleElement.appendChild(p);
    articlesContainer.appendChild(articleElement);
});

document.querySelectorAll('nav li').forEach(item => {
  item.addEventListener('mouseover', () => {
    const dropdown = item.querySelector('.dropdown');
    if (dropdown) {
      dropdown.style.display = 'block';
    }
  });

  item.addEventListener('mouseout', () => {
    const dropdown = item.querySelector('.dropdown');
    if (dropdown) {
      dropdown.style.display = 'none';
    }
  });
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.getElementById('nextBtn').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
});

function updateSlider() {
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentSlide) {
            slide.classList.add('active');
        }
    });
}

function handleSubmit(event) {
    event.preventDefault();
    alert("Pesan Anda telah berhasil dikirim!");
    document.querySelector("form").reset();
}
document.querySelector("form").addEventListener("submit", handleSubmit);
