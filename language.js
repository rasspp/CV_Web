function toggleLanguage() {
   const languageToggle = document.getElementById("language-toggle");
   const currentLanguage = languageToggle.innerText;

   if (currentLanguage === "Indonesia") {
      languageToggle.innerText = "English";

      // *** Terjemahkan konten
      //   todo Navbar
      document.querySelector(".navbar").querySelector(".link-education").innerText = "Education";
      document.querySelector(".navbar").querySelector(".link-about-me").innerText = "About Me";
      document.querySelector(".navbar").querySelector(".link-experience").innerText = "Experience";
      document.querySelector(".navbar").querySelector(".link-skills").innerText = "Skills";

      //   todo Header CV
      document.querySelector("header").querySelector(".judul-header").innerText = "Curriculum Vitae";
      document.querySelector("header").querySelector(".teks-header").innerText = "Jl. Coconut Gutter, Palembang, South Sumatera, (30153)";

      //   todo title section
      document.getElementById("tentang-saya").querySelector("h2").innerText = "About Me";
      document.getElementById("pendidikan-terakhir").querySelector("h2").innerText = "Education";
      document.getElementById("pengalaman").querySelector("h2").innerText = "Experience";
      document.getElementById("keahlian").querySelector("h2").innerText = "Skills";

      //   todo Paragraf section
      // paragraf 1 about me
      document.getElementById("tentang-saya").querySelector(".p-1").innerText =
         "I am a Fullstack Developer with primary expertise in the Mern Stack tech (Mongo db, Express, React, Node js). Besides JavaScript, I also master PHP language, although not as good as JavaScript. I have experience as a Freelance Web Developer for more than 1 year, starting when I was in 2nd grade of vocational high school and self-taught during the COVID-19 pandemic.";

      // paragraf 2 about me
      document.getElementById("tentang-saya").querySelector(".p-2").innerText =
         "I am committed to continuously learning and expanding my skills without fear of facing challenges. I believe that strong teamwork is the key to success in building projects. I am ready to provide solutions and achieve common goals. Don't hesitate to contact me anytime. Thank you.";

      //  pendidikan terakhir
      document.getElementById("pendidikan-terakhir").querySelector("p").innerText =
         "In the first year, I learned about virtual networking in Cisco, assembling PCs, designing, and building local networks. However, in the second year, learning shifted to online systems due to the coronavirus pandemic. Here, I took the initiative to self-study programming to fill my spare time.";

      //  pendidikan terakhir
      document.getElementById("pendidikan-terakhir").querySelector("h3").innerText = "High School Utama Bakti Palembang";

      //  pengalaman tanggal
      document.getElementById("pengalaman").querySelector(".h4-1").innerText = "Jun 2022 - Dec 2022";
      document.getElementById("pengalaman").querySelector(".h4-2").innerText = "Jan 2022 - Now";

      //  pengalaman
      document.getElementById("pengalaman").querySelector("p").innerText =
         "I am committed to continuously learning and expanding my skills wit   hout fear of facing challenges. I believe that strong teamwork is the key to success in building projects. I am ready to provide solutions and achieve common goals. Do not hesitate to contact me anytime. Thank you.";

      //  pengalaman paragraf 2
      document.getElementById("pengalaman").querySelector(".p-2").innerText =
         "I am a freelance web developer who not only masters front-end, but also has full-stack skills to create websites from scratch. I have extensive experience in working on small projects, including assisting SMEs in creating websites to improve their business efficiency. I take full responsibility for every project I handle, ensuring that the work is completed well and on time. Good communication with clients is my priority to ensure customer satisfaction. This experience has sharpened my skills in efficient website development and organized project management.";

      //    ? ***  ---------------------------------- Else ----------------------------------------------------------
   } else {
      languageToggle.innerText = "Indonesia";

      // *** Kembalikan konten ke bahasa Indonesia
      //   todo Navbar
      document.querySelector(".navbar").querySelector(".link-education").innerText = "Pendidikan Terakhir";
      document.querySelector(".navbar").querySelector(".link-about-me").innerText = "Tentang Saya";
      document.querySelector(".navbar").querySelector(".link-experience").innerText = "Pengalaman";
      document.querySelector(".navbar").querySelector(".link-skills").innerText = "Keahlian";

      //   todo Header CV
      document.querySelector("header").querySelector(".judul-header").innerText = "Daftar Riwayat Hidup";
      document.querySelector("header").querySelector(".teks-header").innerText = "Jl. Talang Kelapa, Palembang, Sumatera Selatan, (30153)";

      //   todo title section
      document.getElementById("tentang-saya").querySelector("h2").innerText = "Tentang Saya";
      document.getElementById("pendidikan-terakhir").querySelector("h2").innerText = "Pendidikan Terakhir";
      document.getElementById("pengalaman").querySelector("h2").innerText = "Pengalaman";
      document.getElementById("keahlian").querySelector("h2").innerText = "Keahlian";

      //   todo Paragraf section
      // paragraf 1 about me
      document.getElementById("tentang-saya").querySelector(".p-1").innerText =
         "Saya adalah seorang Fullstack Developer dengan keahlian utama dalam tech Mern Stack (Mongo db, Express, React, Node js). Selain JavaScript, saya juga menguasai bahasa PHP, meskipun belum sebaik JavaScript. Saya telah memiliki pengalaman sebagai Freelance Web Developer selama lebih dari 1 tahun, dimulai ketika saya kelas 2 SMK dan belajar secara otodidak saat masa pandemi COVID-19.";

      // paragraf 2 about me
      document.getElementById("tentang-saya").querySelector(".p-2").innerText =
         "Saya berkomitmen untuk terus belajar dan memperluas keterampilan saya tanpa takut menghadapi tantangan. Saya percaya bahwa kerjasama tim yang kuat merupakan kunci kesuksesan dalam membangun proyek. Saya siap memberikan solusi dan mencapai tujuan yang bersama. Jangan ragu untuk menghubungi saya kapan saja. Terima kasih.";

      //  pendidikan terakhir
      document.getElementById("pendidikan-terakhir").querySelector("p").innerText =
         "Dalam tahun pertama, saya belajar tentang virtual jaringan di Cisco, merakit PC, membuat desain, dan membangun jaringan lokal. Namun, pada tahun kedua, pembelajaran beralih ke sistem online karena pandemi virus corona. Di sini, saya mengambil inisiatif untuk belajar pemrogramman secara otodidak untuk mengisi waktu luang saya.";

      //  pendidikan terakhir
      document.getElementById("pendidikan-terakhir").querySelector("h3").innerText = "SMK Utama Bakti Palembang";

      //  pengalaman tanggal
      document.getElementById("pengalaman").querySelector(".h4-1").innerText = "Jun 2022 - Des 2022";
      document.getElementById("pengalaman").querySelector(".h4-2").innerText = "Jan 2022 - Sekarang";

      //  pengalaman paragraf 1
      document.getElementById("pengalaman").querySelector(".p-1").innerText =
         "Saya berkomitmen untuk terus belajar dan memperluas keterampilan saya tanpa takut menghadapi tantangan. Saya percaya bahwa kerjasama tim yang kuat merupakan kunci kesuksesan dalam membangun proyek. Saya siap memberikan solusi dan mencapai tujuan yang bersama. Jangan ragu untuk menghubungi saya kapan saja. Terima kasih.";

      //  pengalaman paragraf 2
      document.getElementById("pengalaman").querySelector(".p-2").innerText =
         "Saya adalah seorang freelancer web developer yang tidak hanya menguasai front-end, tetapi juga memiliki keterampilan full-stack untuk membuat website dari awal hingga jadi. Saya memiliki pengalaman yang luas dalam mengerjakan proyek kecil, termasuk membantu UMKM membuat website untuk meningkatkan efisiensi usaha mereka. Saya mengambil tanggung jawab penuh dalam setiap proyek yang saya tangani, memastikan pekerjaan diselesaikan dengan baik dan tepat waktu. Komunikasi yang baik dengan klien adalah prioritas saya untuk memastikan kepuasan pelanggan. Pengalaman ini telah mengasah keterampilan saya dalam pengembangan website yang efisien dan manajemen proyek yang terorganisir.";
   }
}
