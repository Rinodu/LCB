// ============================================================
// INFERNO — Limbus Company Canto Archive
// File konten terpisah dari kode aplikasi (limbus-inferno.html)
// Supaya nambah/edit konten (mis. Canto X nanti) tidak perlu
// menyentuh kode fungsional sama sekali — cukup edit file ini.
//
// Terakhir diverifikasi/diperbarui: 11 Agustus 2026
// Status "certainty" pada beberapa entri:
//   "canon"  = dikonfirmasi resmi oleh Project Moon / dalam cerita
//   "mixed"  = campuran fakta cerita + interpretasi/analisis penulis app ini
//   "theory" = spekulasi komunitas, BUKAN fakta yang dikonfirmasi
// ============================================================

const CANTOS = [
  {
    id:"prologue", num:"PROLOG", title:"Selva Oscura", focus:"Kelahiran Dante · Hutan Gelap",
    accent:"#7a6a8f", image:"images/dante.png", sigil:"⏱",
    sections:[
      { h:"Terjebak di Hutan Gelap", p:[
        "Cerita dibuka di sebuah hutan gelap. Seseorang terpojok oleh tiga pemburu bernama Lion, Wolf, dan Panther, yang sudah lama memburunya atas perintah 'sang majikan'. Orang ini kepergok sedang mengukir sesuatu — namanya sengaja disamarkan dalam narasi supaya pembaca belum tahu apa itu — dan interupsi mendadak itu membuatnya kesal, sampai dia sempat melawan verbal ketiga pemburu tersebut.",
        "Lion menjelaskan bahwa apa yang sedang dilakukan orang ini sebenarnya tidak melanggar Tabu kota manapun secara teknis. Alasannya sederhana: belum pernah ada yang terpikir untuk melakukannya sebelumnya, jadi belum ada aturan yang secara khusus melarangnya. Meski begitu, ketiga pemburu tetap sangat antusias untuk membunuhnya — sebagian karena perintah atasan mereka, sebagian lagi karena jarang ada kesempatan membunuh seseorang 'sepenting' itu.",
        "Setiap kali orang ini berusaha bicara, yang terdengar hanyalah suara detak jam, sebab kepalanya sudah digantikan sebuah prostetik jam mekanis. Bersamaan dengan itu, dia mulai menyadari ingatannya perlahan-lahan menghilang. Panther bahkan sempat kecewa karena tidak keburu bertanya di mana 'bintang' mereka berada — tanpa sadar, orang itu sendiri sudah lebih dulu lupa jawabannya."
      ]},
      { h:"Penyelamatan", p:[
        "Tepat sebelum ketiga pemburu itu berhasil membunuhnya, sebuah bus besar tiba-tiba muncul entah dari mana. Beberapa orang turun untuk membelanya, tetapi mereka kalah telak dan dibantai dengan cepat oleh trio pemburu tersebut.",
        "Sesaat sebelum kehilangan kesadaran sepenuhnya, orang ini sempat diberi pesan singkat: 'ikuti bintang mereka'. Tepat setelah itu, Vergilius — seorang Fixer yang jauh lebih kuat dari siapa pun di tempat itu — turun dari bus dan mencincang habis para penyerang tanpa kesulitan berarti."
      ]},
      { h:"Bangun di Dalam Bus", p:[
        "Orang itu, yang belakangan kita kenal bernama Dante, terbangun di dalam bus. Vergilius bertanya bagaimana keadaannya, tetapi cepat sadar bahwa dia tidak bisa memahami ucapan Dante — yang terdengar hanyalah detak jam. Vergilius memperkenalkan diri, lalu meminta seorang gadis kecil bernama Charon, sang sopir bus, untuk melanjutkan perjalanan.",
        "Ketika ditanya apakah dia masih mengingat sesuatu, Dante hanya menggeleng pelan. Faust maju untuk memastikan apakah 'Dante' benar-benar namanya. Pada titik inilah Dante menyadari sesuatu yang aneh: dia bisa mendengar kata-kata Faust dengan jelas, bukan sekadar detak jam seperti sebelumnya. Faust lalu menjelaskan alasannya — Dante ternyata bisa berbicara lewat pikiran kepada siapa pun dari 'para Sinner', yaitu orang-orang yang tadi berusaha membelanya di hutan.",
        "Vergilius kemudian meminta para Sinner memperkenalkan diri satu demi satu: Gregor, Rodion, Sinclair, Yi Sang, Ishmael, Heathcliff, Don Quixote, Hong Lu, Ryoshu, Meursault, Outis, dan Faust — genap dua belas orang, yang kelak akan jadi rekan seperjalanan Dante."
      ]},
      { h:"Tawaran yang Awalnya Ditolak", p:[
        "Vergilius menjelaskan bahwa Dante akan menjabat sebagai Executive Manager bagi para Sinner ini, dengan tugas utama membawa mereka ke sebuah tempat bernama 'Inferno'. Dante awalnya menolak. Dia ragu menerima peran sebesar itu, apalagi begitu tahu tujuan akhirnya adalah tempat bernama Inferno — nama yang jelas tidak terdengar ramah. Bahkan janji bahwa dia akan mendapatkan kembali ingatan dan kepala aslinya pun belum cukup meyakinkannya.",
        "Titik baliknya datang dari Faust, yang mengucapkan sesuatu yang tanpa sengaja menyentuh sisi paling dalam diri Dante: begitu semua misinya selesai, dia akan bisa 'mengukir Aspect-nya sendiri'. Kalimat itu memicu ingatan langsung ke apa yang sedang dia kerjakan tepat sebelum diserang di hutan tadi. Mengikuti instingnya sendiri, Dante akhirnya setuju untuk bekerja sama.",
        "Setelah kesepakatan tercapai, mereka baru sadar bahwa selama percakapan panjang tadi berlangsung, bus Mephistopheles ternyata belum bergerak sama sekali. Dari titik inilah, perjalanan LCB (Limbus Company Bus) yang sesungguhnya baru dimulai."
      ]}
    ],
    quote:"“Aku hanya perlu mengikuti bintang mereka.”",
    song:null, songNote:null,
    philosophy:[
      "Prolog ini membuka pertanyaan filosofis paling mendasar dari seluruh cerita: <strong>siapa 'aku' begitu ingatan dan identitas lama dihapus secara paksa?</strong> Dante secara sukarela melepas kepalanya sendiri — sebuah tindakan yang secara harfiah memutus apa yang dalam filsafat disebut continuity of personal identity, yaitu konsep tentang apa yang membuat 'dirimu hari ini' tetap bisa dianggap sama dengan 'dirimu kemarin', meski ingatan dan tubuh terus berubah.",
      "Ini menggemakan problem klasik dalam filsafat pikiran: kalau ingatan, wajah, bahkan suara aslimu semuanya hilang, apa yang sebenarnya tersisa dari 'diri'? Faust menjawab pertanyaan itu secara tidak langsung lewat konsep <strong>Aspect</strong> — menyiratkan bahwa identitas sejati bukan terletak pada ingatan atau bentuk fisik, melainkan pada sesuatu yang jauh lebih dalam, sesuatu yang bahkan bisa 'diukir ulang' dari awal.",
      "Belum ada tema musik Mili untuk Canto ini, jadi tidak ada lirik yang bisa dianalisis di sini. Tapi keheningan itu sendiri sebetulnya cocok dengan temanya: Dante, di titik cerita ini, memang belum punya suara sendiri. Yang tersisa hanya detak jam."
    ]
  },
  {
    id:"canto1", num:"CANTO I", title:"The Outcast", focus:"Fokus: Gregor · District 4, Old G Corp",
    accent:"#a67c3d", image:"images/gregor.png", sigil:"🪲",
    sections:[
      { h:"Perjalanan ke District 4", p:[
        "LCB berangkat menuju District 4, tempat cabang lama Lobotomy Corporation berada di kawasan kumuh yang disebut Backstreets. Di tengah perjalanan, bus mereka kehabisan bahan bakar, memaksa mereka melawan sekelompok preman jalanan supaya bisa 'memberi makan' bus itu dengan Enkephalin — cairan yang diekstrak langsung dari sistem saraf manusia hidup. Momen ini membuat Dante dan Sinclair sama-sama ngeri melihatnya.",
        "Semakin dekat ke tujuan, mereka berpapasan dengan sekelompok orang berwujud serangga — mirip dengan fitur fisik Gregor sendiri. Mereka adalah para veteran Old G Corp dari Smoke War, dan ternyata Gregor sendiri pernah dijadikan subjek propaganda utama perusahaan itu selama masa perang. Para veteran menolak membiarkan LCB lewat begitu saja, sehingga Gregor terpaksa turun tangan memimpin negosiasi — yang pada akhirnya tetap berujung kekerasan."
      ]},
      { h:"Fixer Pemandu: Yuri, Aya, Hopkins", p:[
        "Di pintu masuk fasilitas, LCB bertemu tiga Fixer yang disewa khusus untuk memandu mereka: Yuri, Aya, dan Hopkins. Yuri sendiri adalah mantan karyawan cabang L Corp yang justru menjadi tujuan mereka. Gregor dan Yuri langsung akrab satu sama lain — keduanya sama-sama pernah menjadi bagian dari Wing yang sudah runtuh, dan sama-sama mengalami diskriminasi akibat masa lalu itu. Gregor melihat banyak kemiripan dirinya sendiri dalam diri Yuri.",
        "Aya bersikap santai dan ramah sejak awal, sementara Hopkins pada mulanya cenderung meremehkan penampilan para Sinner yang terlihat berantakan. Sikap itu berubah cepat begitu mereka mulai benar-benar bekerja sama di lapangan."
      ]},
      { h:"Pengkhianatan di Dalam Fasilitas", p:[
        "Begitu memasuki fasilitas, mereka mendapati tempat itu dipenuhi Abnormality dan sisa-sisa pasukan Old G Corp. Dalam pertempuran ini, Aya tewas — dibunuh oleh salah satu Abnormality bernama Ebony Queen's Apple, tidak lama setelah dia sempat berbincang akrab dengan para Sinner.",
        "Semakin dekat ke Golden Bough yang mereka cari, mereka berhadapan dengan Abnormality lain bernama Golden Apple. Setelah berhasil dikalahkan, Yuri mendekat untuk mengambil Bough itu — tetapi sebagai upaya bertahan hidup terakhirnya, Abnormality tersebut tiba-tiba mengonsumsi Yuri dan bermutasi menjadi bentuk yang jauh lebih kuat, False Apple, sambil mengambil wujud kepala Yuri sebagai bagian dari tubuhnya sendiri. Para Sinner terpaksa mengalahkannya untuk kedua kalinya. Di detik-detik terakhir, Abnormality itu sengaja menampilkan kepala Yuri sebagai taktik pertahanan diri — trik yang cukup lama menahan tangan para Sinner, karena Gregor tidak sanggup membunuhnya selama itu masih memakai wujud temannya sendiri."
      ]},
      { h:"Kegagalan Misi dan Old Shame Gregor", p:[
        "Sekelompok orang asing datang dan langsung merampas Golden Bough itu dari mayat Abnormality yang sudah dikalahkan. Kelompok ini dipimpin oleh Hermann, dengan anggota di antaranya Jia Huan (kakak Hong Lu) dan Gubo (mantan rekan Yi Sang). Mereka melumpuhkan para Sinner tanpa banyak kesulitan lalu pergi begitu saja — membuat misi pertama LCB berakhir dengan kegagalan total.",
        "Di titik inilah 'Old Shame' Gregor akhirnya terungkap: masa kecilnya sebagai kelinci percobaan Old G Corp. Hermann sendiri yang dulu melakukan operasi paksa untuk mengganti lengan kanan Gregor menjadi prostetik bio-insektoid dengan kemampuan regenerasi unik. Setelah operasi itu, Gregor diawasi terus-menerus dan menghabiskan sebagian besar masa kecilnya terkurung di sebuah ruangan biru polos, diperintahkan setiap hari memotong sebutir apel jadi dua bagian memakai lengan barunya — semata-mata untuk menguji fungsi lengan itu. Untuk waktu yang sangat lama, Gregor menolak mematuhi instruksi tersebut.",
        "Gregor secara eksplisit adalah referensi langsung ke tokoh utama 'The Metamorphosis' karya Franz Kafka — dia bahkan mengutip baris pertama cerita itu dalam salah satu flashback-nya. Trauma Gregor juga menyentuh soal satu hal yang lebih pribadi: dia tidak pernah benar-benar bisa lepas dari kendali ibunya sendiri.",
        "Setelah misi berakhir gagal total dan Vergilius memarahi Dante, Gregor secara sukarela mengambil alih tanggung jawab atas kegagalan itu — tidak rela membiarkan Dante yang masih canggung menanggung semuanya seorang diri."
      ]}
    ],
    quote:"“Nama yang tersisa hanyalah nama yang kau pilih untuk terus dipanggil.”",
    song:null, songNote:null,
    philosophy:[
      "Referensi Gregor ke 'The Metamorphosis' karya Franz Kafka bukan sekadar hiasan estetik — itu justru inti filosofis dari karakternya. Dalam cerita Kafka, tokoh Gregor Samsa terbangun dan mendapati dirinya berubah menjadi serangga raksasa, dan yang paling menyakitkan darinya bukan transformasi fisik itu sendiri, melainkan <strong>bagaimana keluarganya mulai memandangnya sebagai beban, bukan lagi sebagai manusia</strong>. Gregor di Limbus Company mengalami versi korporat dari alienasi yang sama persis: tubuhnya diubah paksa demi kepentingan eksperimen, dan identitasnya sebagai manusia perlahan-lahan dikorbankan demi fungsi semata.",
      "Ini terhubung langsung dengan gagasan filsafat eksistensialis tentang <strong>objektifikasi</strong> — yaitu ketika seseorang direduksi menjadi sekadar alat atau instrumen (dalam kasus Gregor: alat uji coba lengan prostetik), bukan lagi diperlakukan sebagai subjek yang punya nilai kemanusiaan sendiri. Penolakannya yang bertahun-tahun untuk memotong apel itu, sekecil apapun, sebenarnya adalah bentuk perlawanan terakhir yang masih tersisa dari otonomi dirinya sendiri.",
      "Belum ada tema musik Mili untuk Canto ini, tapi kesunyian itu sendiri terasa relevan dengan ceritanya: Gregor memang karakter yang jarang punya suara untuk protes secara terbuka — yang tersisa hanyalah tindakan diam yang menahan diri, bukan kata-kata."
    ]
  },
  {
    id:"canto2", num:"CANTO II", title:"The Unloving", focus:"Fokus: Rodion · District 10, Kasino",
    accent:"#5a7d99", image:"images/rodion.png", sigil:"♠",
    sections:[
      { h:"Penyamaran di Kasino", p:[
        "Golden Bough kali ini terkubur di bawah sebuah kasino besar di District 10 — tempat yang, menurut Vergilius, seharusnya sudah cukup familiar bagi Rodion. Kasino ini dikuasai berbagai Syndicate yang sama-sama mengincar Bough yang sama. Rencananya: LCB harus menyamar sebagai salah satu Syndicate, lalu memenangkan permainan kartu memakai sumber daya bernama 'wish power' yang berasal dari Singularity milik J Corp. Rencana ini disusun oleh dua agen LCCB, Effie dan Saude, yang sejak awal sudah dipandang skeptis oleh para Sinner.",
        "Rencana itu cepat berantakan. Don Quixote tanpa sengaja membuat keributan besar, sehingga menarik perhatian Tingtang Gang — Syndicate yang identitasnya justru sedang mereka coba tiru. Kekacauan pun tidak terhindarkan lagi."
      ]},
      { h:"Naik ke Puncak Kasino", p:[
        "Di lantai-lantai berikutnya, mereka harus melewati beberapa kelompok berbeda satu per satu. Los Mariachis membiarkan mereka lewat setelah Sinclair diminta menari memakai maracas — dan sempat berkomentar bahwa tarian itu terasa penuh kegelapan yang direpresi, sebuah petunjuk halus yang baru dijelaskan lebih dalam di Canto III. Mereka menolak tawaran menari dari Don Quixote karena merasa dia kurang tulus dalam menunjukkan gairahnya. Sebaliknya, Tieqiu Crew justru terkesan begitu Ryoshu menceritakan kisah pertarungannya dengan cara yang sangat vulgar dan penuh detail."
      ]},
      { h:"Puncak: Permainan Kartu dan Reuni", p:[
        "Sesampainya di lantai teratas, Rodion meminta izin ikut bermain — dengan berbohong bahwa dia masih punya sisa wish power, padahal sebenarnya sudah habis sama sekali. Dia berhadapan langsung dengan bos Tieqiu, pemimpin Mariachi bernama Aida, dan yang paling mengejutkan: Sonya, salah satu pendiri organisasi Yurodiviye bersama Rodion sendiri di masa lalu, yang ternyata sudah lama tidak bertemu dengannya. Rodion berhasil memenangkan permainan itu, tetapi seorang kompetitor lain langsung mencoba membunuhnya demi merebut Golden Bough. LCB pun bergerak cepat bersama-sama untuk melumpuhkan penyerang itu."
      ]},
      { h:"Terungkap: Masa Lalu Rodion", p:[
        "Di bawah kasino ternyata tersembunyi sebuah penjara bawah tanah milik J Corp, penuh dengan penjaga, budak berutang, dan Abnormality baru yang belum pernah mereka temui. Di sinilah masa lalu Rodion sebagai salah satu pendiri Yurodivy — bersama Sonya — akhirnya terungkap sepenuhnya. Dulu, dia sungguh-sungguh ingin membantu komunitasnya sendiri, tetapi lama-kelamaan frustrasi karena Yurodivy hanya sibuk berdiskusi panjang lebar tanpa pernah mengambil tindakan nyata, sementara orang-orang di sekitar mereka terus mati kelaparan. Puncaknya, ketika Rodion sudah tidak sanggup lagi menahan diri, dia akhirnya membunuh seorang rentenir korup yang selama ini memeras lingkungannya sendiri — tindakan inilah yang kemudian membuatnya memutuskan untuk meninggalkan Yurodivy sepenuhnya."
      ]},
      { h:"Konfrontasi dengan Sonya", p:[
        "Semakin dalam mereka melangkah, area itu terasa semakin dingin, hingga akhirnya mereka menemukan sebuah kastil es raksasa. Sonya sudah menunggu di sana, mencoba membujuk Rodion untuk kembali bergabung dengan Yurodiviye — sambil meremehkan usaha Rodion selama ini untuk menjauh dari dunia uang dan judi. Rodion pun membalas dengan menyuarakan kekecewaannya soal kemunafikan Sonya, yang selama ini membiarkan anak buahnya mencuri dari pedagang-pedagang kecil, persis seperti orang-orang yang dulu ingin mereka lawan bersama.",
        "Sonya kemudian menawarkan untuk membangun 'dunia ideal' miliknya dengan bantuan Golden Bough yang beresonansi kuat dengan Rodion — seolah semua yang sudah terjadi sebelumnya bisa dihapus begitu saja, seakan tidak pernah ada. Rodion menolak tawaran itu dengan tegas. Sonya akhirnya mengizinkannya membawa pergi Golden Bough, sambil berharap Rodion benar-benar menemukan apa yang selama ini dia cari."
      ]},
      { h:"Penutup: Perayaan yang Getir", p:[
        "Begitu Bough berhasil diambil, LCB langsung dikejar oleh sebuah Abnormality seukuran kastil, memaksa mereka lari secepat mungkin menuju pintu keluar — sampai akhirnya diselamatkan oleh Sonya dan pasukannya sendiri. Setelah misi pertama mereka berhasil, Rodion memakai chip judi curian untuk merayakannya, meski tetap terlihat masih berusaha menekan sejarah masa lalunya yang baru saja terungkap.",
        "Sebagai adegan tambahan setelah kredit: Sonya ternyata selamat, dan terungkap bahwa dia diam-diam punya kesepakatan tersendiri dengan Hermann soal Golden Bough — sebuah petunjuk bahwa ada agenda tersembunyi di balik bantuan yang dia berikan."
      ]}
    ],
    quote:"“Bicara tanpa bertindak hanyalah kelaparan yang dibungkus kata-kata indah.”",
    song:null, songNote:null,
    philosophy:[
      "Nama 'Rodion' bukanlah pilihan acak — ini referensi langsung ke Rodion Raskolnikov, tokoh utama novel 'Crime and Punishment' karya Dostoevsky, seorang mahasiswa miskin yang membunuh seorang pegadaian korup atas nama teorinya sendiri: bahwa 'orang luar biasa' berhak melampaui hukum moral biasa demi kebaikan yang lebih besar. Rodion di Limbus Company mewarisi dilema moral yang sama persis — pembunuhan rentenir yang dia lakukan bukan lahir dari haus darah, melainkan dari frustrasi mendalam terhadap ketidakadilan yang terus dibiarkan berlangsung.",
      "Konfrontasinya dengan Sonya menghadirkan pertanyaan filosofis klasik: <strong>apakah cukup punya niat baik dan diskusi panjang, tanpa pernah disertai tindakan konkret?</strong> Ini adalah kritik terhadap apa yang oleh sebagian filsuf disebut 'armchair activism' — kepedulian yang berhenti sebatas wacana dan tidak pernah benar-benar turun ke tindakan nyata. Namun di sisi lain, tindakan sepihak Rodion (membunuh) juga dipertanyakan dalam cerita ini: apakah kekerasan yang dilakukan seorang individu pernah benar-benar menjadi solusi, atau justru hanya mengulang kekerasan sistemik itu dalam skala yang lebih kecil?",
      "Belum ada tema musik Mili untuk Canto ini, tetapi dialog tajam antara Rodion dan Sonya soal 'bicara versus bertindak' sudah cukup membawa bobot emosional layaknya sebuah lirik lagu, bahkan tanpa iringan nada sama sekali."
    ]
  },
  {
    id:"canto3", num:"CANTO III", title:"The Unconfronting", focus:"Fokus: Sinclair · Calw, District 11, K Corp",
    accent:"#7d5a99", image:"images/sinclair.png", sigil:"⚡",
    sections:[
      { h:"Menuju Calw", p:[
        "LCB berangkat menuju District 11 untuk mengambil Golden Bough di Calw — kampung halaman Sinclair sendiri. Perjalanan diawali dengan insiden di pos pemeriksaan imigrasi: Don Quixote mencoba mencegah petugas perbatasan memisahkan sebuah keluarga, dan usahanya itu berujung pertarungan. K Corp lalu mengirim salah satu 'Fixer bintang' mereka, Siegfried, untuk menangani para Sinner. Baru setelah Siegfried membantai mereka semua habis-habisan dalam pertarungan sungguhan — dan mereka bangkit kembali seperti biasa berkat kemampuan khusus para Sinner — dia akhirnya mengizinkan LCB lewat. Vergilius sendiri menegur keras Don Quixote atas tindakan gegabahnya di awal."
      ]},
      { h:"Inkuisisi Nagel und Hammer", p:[
        "Dalam perjalanan menuju Calw, mereka dihadang oleh Inkuisisi Nagel und Hammer dari N Corp, yang secara terang-terangan menyebut Dante dan bus Mephistopheles sebagai 'ternoda'. Setelah negosiasi gagal total, pertarungan pun pecah. Heathcliff, yang sudah lelah terus-menerus 'bersikap baik', memutuskan untuk menghabisi para Inquisitor itu, diikuti oleh Sinner lainnya.",
        "Begitu tiba di Calw, mereka mendapati seluruh kota sudah dihancurkan oleh para Inquisitor atas perintah langsung pemimpin mereka, Kromer."
      ]},
      { h:"Masa Kecil Sinclair", p:[
        "Sepanjang perjalanan ini, terungkap sedikit demi sedikit: dulu, prostetik tubuh penuh sangat populer di Calw, dan seluruh keluarga Sinclair menjalani penggantian tubuh secara menyeluruh. Sinclair sendiri, yang seharusnya juga menjalani prosedur yang sama, selalu menunjukkan kegembiraan di permukaan — padahal diam-diam dia sangat ketakutan, dan diam-diam pula membenci jarak yang ditimbulkan prosedur itu antara dirinya dan keluarganya sendiri.",
        "Kromer, teman sekelasnya waktu itu, ternyata menyadari perasaan tersembunyi Sinclair dan berjanji akan menyelamatkannya dari prosedur itu — dengan syarat Sinclair mau bekerja sama dengannya. Kromer lalu membujuk Sinclair untuk memberikan kunci ruang bawah tanah rumahnya, yang ternyata diam-diam menyimpan sebuah fasilitas L Corp."
      ]},
      { h:"Klimaks: Distortion Kromer", p:[
        "LCB akhirnya mencapai kediaman keluarga Sinclair, dan mendapati tubuh-tubuh berprostetik disalibkan di halaman rumah. Effie ditemukan hampir mati akibat penyiksaan berat, dan Outis memberinya kematian sebagai bentuk belas kasihan — momen yang langsung memicu Sinclair jatuh dalam amarah yang membabi buta.",
        "Ketika mereka akhirnya bertemu Kromer, terungkap bahwa dia menginginkan Sinclair bergabung bersamanya, dengan keyakinan bahwa semua ini 'sudah ditakdirkan' terjadi. Dengan menyalahgunakan kekuatan Golden Bough, Kromer bermutasi menjadi sebuah Distortion yang mengerikan, melelehkan hampir semua orang di sekitarnya kecuali Dante dan Sinclair sendiri.",
        "Keduanya akhirnya diselamatkan oleh Demian — seorang anak laki-laki yang ternyata juga punya keterikatan khusus dengan Sinclair — yang membunuh Kromer hanya dengan satu pukulan, lalu menyerahkan Golden Bough sebelum pergi begitu saja."
      ]},
      { h:"Penutup", p:[
        "Kembali ke dalam bus, para Sinner menikmati kebab ayam sebagai hadiah kecil atas keberhasilan mereka mengklaim Golden Bough kedua — meski cara mereka mendapatkannya jauh dari kata mulus."
      ]}
    ],
    quote:"“Tubuh bisa diganti seluruhnya — tapi rasa takut kehilangan diri sendiri tetap sama.”",
    song:null, songNote:null,
    philosophy:[
      "Canto ini mengangkat problem filosofis tentang <strong>identitas personal dan tubuh</strong> — sering disebut sebagai versi biologis dari 'kapal Theseus': kalau setiap bagian tubuhmu diganti satu per satu dengan prostetik, di titik mana kamu berhenti menjadi 'dirimu sendiri' dan mulai menjadi sesuatu yang lain sama sekali? Sinclair hidup dalam masyarakat yang menjawab pertanyaan berat ini dengan optimisme buta — penggantian tubuh secara penuh dirayakan begitu saja sebagai bentuk kemajuan, tanpa memberi ruang sedikit pun untuk keraguan.",
      "Ketakutan tersembunyi Sinclair sebenarnya adalah bentuk <strong>keberanian epistemik</strong> yang jarang sekali diberi ruang untuk berkembang: dia diam-diam curiga bahwa 'kemajuan' yang dirayakan begitu meriah oleh semua orang di sekitarnya sebenarnya adalah sebuah kehilangan yang disamarkan rapi. Manipulasi yang dilakukan Kromer justru memanfaatkan ketakutan yang sebenarnya valid itu — mengubah kerentanan emosional Sinclair menjadi alat kontrol atas dirinya. Ini pola yang sayangnya cukup umum terjadi: predator emosional sering kali menyamar sebagai 'satu-satunya orang yang benar-benar mengerti'.",
      "Belum ada tema musik Mili untuk Canto ini, tetapi cuaca ekstrem yang menyambar setiap kali masa lalu Sinclair disinggung berfungsi layaknya sebuah 'lirik' visual tersendiri — badai sebagai representasi emosi yang tidak pernah sanggup diucapkan dengan kata-kata."
    ]
  },
  {
    id:"intervallo1", num:"INTERVALLO I", title:"Hell's Chicken", focus:"Interlude Komedi · District 11, Nest K (K Corp)",
    accent:"#c2652e", sigil:"🍗",
    sections:[
      { h:"Penyergapan di Nest K", p:[
        "Masih di District 11, tidak lama setelah tragedi di Calw, LCB singgah sebentar di Nest K — sebuah cabang K Corp — dalam perjalanan menuju laboratorium K Corp tempat Golden Bough berikutnya menanti mereka. Alih-alih disambut secara wajar, mereka justru disergap penjaga K Corp yang kepalanya sudah digantikan ayam mentah hidup, atau yang biasa disebut 'Headchicken' — hasil sampingan dari sebuah eksperimen yang berjalan sangat kacau.",
        "Di tengah kekacauan itu, mereka bertemu Samjo, seorang perwakilan yang datar dan tak berperasaan dari Departemen Pengembangan Sumber Daya Pangan K Corp. Dia mewakili manajer restoran waralaba 'Bodhisattva Chicken', yang bisnisnya sedang diteror sebuah 'monster' di jalanan sekitar. Mereka pun meminta bantuan LCB untuk turun tangan langsung."
      ]},
      { h:"Distortion di Balik Resep Curian", p:[
        "Monster yang dimaksud ternyata adalah pemilik Eunbong's Bar & Fryers — sebuah warung ayam goreng tradisional kecil, sekaligus saingan Bodhisattva Chicken — yang sudah jatuh ke dalam kondisi Distortion. Faust menjelaskan bahwa Distortion terjadi ketika keputusasaan seseorang melewati batas terakhir yang bisa ditahannya, sehingga mengubah orang itu menjadi sesuatu yang nyaris tidak lagi punya kendali penuh atas dirinya sendiri.",
        "Penyebabnya pun terungkap: manajer Bodhisattva Chicken diam-diam mencuri resep rahasia milik Eunbong, lalu membakar habis seluruh jejaknya lewat sebuah alat bernama 'Concept Incinerator' — perangkat yang tidak hanya menghancurkan benda fisik, tetapi juga menghapus keberadaannya sekaligus dari ingatan dan kenyataan itu sendiri. Yang tidak disadari sang manajer: resep tersebut ternyata terikat sangat erat dengan kenangan masa kecil pemilik Eunbong tentang ibunya sendiri — dan penghapusan itulah yang benar-benar meremukkan hatinya."
      ]},
      { h:"Kompetisi Memasak", p:[
        "Karena sebuah Distortion hanya bisa 'diurai' lewat cara yang benar-benar disetujui oleh hati orang yang mengalaminya, Faust pun memutuskan solusinya: sebuah kompetisi memasak. Gregor dan Ryoshu memulai kompetisi itu lewat pertengkaran kecil di antara mereka berdua, masakan Meursault menjadi yang paling mendekati enak dari semua peserta, sementara Don Quixote dan Yi Sang justru tampil cukup buruk di salah satu ronde.",
        "Namun justru masakan Outis-lah yang pada akhirnya berhasil menembus hati sang pemilik warung yang terdistorsi, menyeret semua orang masuk ke dalam visi kenangannya sendiri — masa kecilnya ketika dimarahi sang ibu, lengkap dengan sebuah pintu yang mengarah lebih dalam lagi ke ingatan itu."
      ]},
      { h:"Ayam yang Ternyata Bukan Ayam", p:[
        "Titik baliknya datang lewat sebuah kesadaran yang terasa absurd sekaligus menyentuh hati: kupon yang selama ini dia kira adalah kupon ayam dari ibunya — yang selama bertahun-tahun menjadi dasar seluruh identitas dan kenangannya — ternyata sebenarnya adalah kupon pizza. Ibunya, rupanya, tidak pernah benar-benar menyukai ayam sama sekali. Kesalahpahaman kecil itulah yang pada akhirnya memecahkan Distortion-nya, dan membuatnya kembali ke kondisi normal.",
        "Sebagai penutup yang terasa anti-klimaks: sang pemilik warung yang sudah pulih memberi LCB sebuah kotak hadiah sebagai ucapan terima kasih — yang isinya, ternyata, hanya sebuah boneka maskot restoran yang bahkan tidak pernah benar-benar diproduksi secara resmi."
      ]}
    ],
    quote:"“Selama ini kukira ibu suka ayam. Ternyata dia cuma suka pizza.”",
    song:null, songNote:null,
    philosophy:[
      "Intervallo ini secara sengaja dirancang sebagai jeda komedik — semacam 'penawar rasa' di antara trauma berat Calw (Canto III) dan beban psikologis yang menanti di Canto IV. Tapi di balik seluruh leluconnya, ada mekanisme yang sebenarnya cukup gelap: 'Concept Incinerator' bukan cuma menghancurkan sebuah benda, melainkan turut menghapus <strong>ingatan dan bukti bahwa benda itu pernah ada</strong> — cara yang jauh lebih senyap, namun dengan caranya sendiri justru lebih kejam, dibandingkan kekerasan fisik yang biasa mewarnai Canto-Canto utama.",
      "Judulnya sendiri, 'Hell's Chicken', kemungkinan besar merupakan pelesetan dari acara televisi 'Hell's Kitchen', yang sekaligus menegaskan nada satirnya. Di baliknya ada sindiran ringan tentang korporasi besar (dalam hal ini didukung Wing K Corp) yang mencuri resep dari usaha kecil independen, lalu menghapus seluruh jejaknya demi mematikan saingan — gema kecil dari tema kekuasaan korporat yang justru ditangani jauh lebih serius pada Canto III sebelumnya, lewat Inkuisisi K Corp yang meluluhlantakkan Calw.",
      "Namun inti emosional cerita ini sebenarnya terletak pada absurditas sebuah kenangan yang keliru: seluruh keputusasaan sang pemilik warung ternyata dibangun di atas ingatan yang salah sejak awal — ibunya tidak pernah benar-benar menyukai ayam. Ini pertanyaan kecil namun jujur tentang <strong>seberapa jauh identitas dan kesedihan kita sebenarnya dibangun di atas kenangan yang bahkan mungkin tidak akurat</strong>.",
      "Belum ada tema musik Mili yang bisa dipastikan untuk chapter ini — kemungkinan besar temanya justru digarap oleh Studio EIM, bukan Mili — sehingga tidak dicantumkan di sini sampai ada sumber yang benar-benar bisa memastikannya."
    ]
  },
  {
    id:"canto4", num:"CANTO IV", title:"The Unchanging", focus:"Fokus: Yi Sang · N Corp Laboratory",
    accent:"#c9a24b", image:"images/yisang.png", sigil:"🕊",
    sections:[
      { h:"Serangan TLA", p:[
        "LCB menuju laboratorium K Corp untuk mengklaim Golden Bough sesuai isi kontrak mereka. Begitu tiba, mereka bertemu Dongrang, Manajer Cabang K Corp yang ternyata adalah kenalan lama Yi Sang. Tanpa diduga, gedung itu tiba-tiba diserang oleh kelompok teroris 'Technology Liberation Alliance' (TLA), yang berhasil membajak gedung beserta seluruh mesin di dalamnya — memaksa para penjaga K Corp balik menyerang LCB sendiri."
      ]},
      { h:"Kematian Dongbaek", p:[
        "Dongbaek, pemimpin TLA sekaligus mantan rekan — dan rival lama — Dongrang dari League of Nine, mulai jatuh ke dalam Distortion setelah diprovokasi dan dimarahi Dongrang atas kegagalannya. Tetapi, alih-alih terdistorsi sepenuhnya, dia justru mendapatkan E.G.O pribadi dan terus melawan para Sinner dengan gigih. Setelah kalah untuk kedua kalinya, Dongrang sendiri yang akhirnya membunuhnya, memakai Golden Bough yang sempat terjatuh — dengan alasan ini adalah 'tindakan belas kasihan', mengingat N Corp dan Gubo sedang membangun League of Nine yang baru, dan membunuh anggota lama yang menolak bergabung."
      ]},
      { h:"League of Nine Littérateurs", p:[
        "Golden Bough itu beresonansi kuat dengan Yi Sang, sampai membuat seluruh gedung ikut terdistorsi — semua penjaga K Corp dan anggota TLA yang tewas dibangkitkan kembali sebagai zombie tanpa kesadaran. Para Sinner terpaksa bertarung menerobos mereka satu per satu, hingga akhirnya mencapai gerbang menuju sebuah dungeon yang dibangun dari ingatan Yi Sang tentang League of Nine Littérateurs — kelompok lama rekan-rekannya dari S Corp. Para Sinner dipaksa memerankan anggota-anggota lain dari kelompok itu agar bisa terus melangkah maju.",
        "Selama 'pertunjukan' ini berlangsung, terungkap bahwa Yi Sang-lah yang menciptakan teknologi 'Cermin' — teknologi yang memungkinkan seseorang mengintip dunia-dunia lain, dan menjadi dasar dari sistem Identity yang dipakai LCB. Setelah League of Nine akhirnya bubar, Yi Sang jatuh ke dalam duka yang sangat mendalam, diliputi rasa putus asa dan kesepian, sehingga cenderung menjadi pasif — jauh lebih mudah mengikuti keinginan orang lain daripada memutuskan sesuatu untuk dirinya sendiri."
      ]},
      { h:"Titik Terendah", p:[
        "Dongbaek sempat menikam dada Yi Sang dengan Golden Bough sebelum akhirnya pergi. Dari sinilah tingkat rendahnya harga diri Yi Sang mulai terungkap — ketika Dante bertanya tentang perasaannya, Yi Sang mengaku bahwa hari dia bertemu Dante dan dipaksa menerima keabadian adalah momen keputusasaan terbesar dalam hidupnya, dan diam-diam dia bahkan berharap bisa beristirahat selamanya. Dante ikut merasakan resonansi dari kondisi mental Yi Sang ini, dan melihat ada lubang besar yang retak di dadanya, tanpa tanda-tanda akan sembuh dengan sendirinya.",
        "Dongrang sendiri, di sisi lain, memutuskan untuk rela menghancurkan masa lalunya demi terus melaju dengan pencapaiannya sendiri, sambil menyatakan niatnya untuk membunuh Yi Sang agar bisa melupakan dirinya di masa lalu sepenuhnya."
      ]},
      { h:"Memanifestasikan Sayap", p:[
        "Hong Lu meminta Dante untuk mengonfrontasi perasaan Yi Sang secara langsung, tanpa basa-basi. Dante pun bertanya apa yang sebenarnya dirasakan Yi Sang tepat sebelum dia meninggalkan N Corp dulu — dan Yi Sang akhirnya mengakui bahwa dia sempat merasakan secercah harapan bahwa suatu hari dia akan menemukan tempat di mana dirinya benar-benar diterima apa adanya, sambil mengenang kembali momen ketika Faust merekrutnya masuk ke Limbus Company.",
        "Dia lalu dihibur oleh Dongbaek yang kembali sekali lagi untuk terakhir kalinya, yang mengatakan bahwa Cermin sebenarnya menyimpan segala kemungkinan, dan Dongbaek baru menyadari bahwa kemungkinan itu sudah berada dalam jangkauannya sendiri. Sang Yi — versi 'ideal' dari dirinya sendiri — kemudian ikut menghibur Yi Sang dengan sebuah gagasan: bahwa sayap yang selama ini dia iri-irikan dari orang lain sebenarnya sudah lama menjadi miliknya sendiri, dan tinggal memintanya untuk mulai terbang.",
        "Yi Sang akhirnya benar-benar memanifestasikan sayapnya sendiri — sebuah titik balik terbesar dalam perjalanannya, dari sosok yang selama ini pasif dan putus asa, menjadi seseorang yang dengan sadar memilih untuk hidup demi idealnya sendiri."
      ]}
    ],
    quote:"“Sayap yang selama ini kau iri miliki orang lain — selalu menjadi milikmu sendiri.”",
    song:"Fly, My Wings", songNote:"Dimainkan tepat di momen Yi Sang memanifestasikan sayapnya.",
    videoId:"_PSjoVXFGAQ",
    philosophy:[
      "Namanya sendiri, dalam bahasa Korea, punya makna ganda yang cukup dalam: 'Yi Sang' berarti <strong>'ideal'</strong>, tetapi juga bisa terdengar seperti <strong>'aneh' atau 'ganjil'</strong> — cara dunia di sekitarnya memandang seseorang yang keras kepala mempertahankan idealismenya sendiri. Karakter ini terinspirasi dari seorang penulis Korea asli bernama Kim Hae-Gyeong, yang memakai nama pena 'Yi Sang', dan dikenal luas lewat karya-karyanya yang penuh alienasi eksistensial.",
      "Sang Yi — versi 'ideal' dari dirinya sendiri — menghadirkan sebuah kritik filosofis yang cukup tajam: apakah mencapai <strong>versi paling sempurna dari diri kita</strong> justru bisa berarti kehilangan empati dan koneksi kemanusiaan yang sesungguhnya? Sang Yi sukses secara materi, tetapi bersikap apatis terhadap penderitaan orang lain di sekitarnya — sebuah peringatan bahwa 'ideal' yang dikejar tanpa hati justru bisa berubah menjadi penjara baru, bukan pembebasan seperti yang dibayangkan.",
      "Lagu 'Fly, My Wings' diputar tepat di momen dia berhenti menunggu izin dari siapa pun untuk mulai terbang. Temanya selaras sempurna dengan filosofi Camus tentang absurd hero — bukan menunggu dunia menjadi adil terlebih dahulu baru bertindak, melainkan memilih untuk tetap terbang <strong>meski</strong> dunia belum sepenuhnya siap menerimanya. Sayap itu sendiri bukan hadiah dari luar; ia selalu ada di sana, hanya menunggu untuk akhirnya diakui sebagai miliknya sendiri."
    ]
  },
  {
    id:"canto5", num:"CANTO V", title:"The Evil Defining", focus:"Fokus: Ishmael · Great Lake, Paus Pucat",
    accent:"#2f7d78", image:"images/ishmael.png", sigil:"🐋",
    sections:[
      { h:"Menyeberangi Great Lake", p:[
        "Setelah bus Mephistopheles kini bisa berlayar di atas air, para Sinner menyeberangi Great Lake untuk mencari Golden Bough berikutnya. Ishmael, yang sejak insiden sebelumnya menolak untuk kembali ke danau ini, sempat menolak bekerja sama sama sekali kecuali kalau diperintah secara langsung. Sinner lain kesulitan mempelajari apa yang disebut 'Hukum Great Lake', dan nyaris celaka beberapa kali ketika menghadapi paus serta duyung yang menghuni perairan itu. Di sela-sela perjalanan ini, Dante menemukan sebuah kekuatan baru dari jam prostetiknya sendiri: kemampuan untuk melihat langsung ke dalam pikiran dan keinginan orang lain."
      ]},
      { h:"Di Dalam Paus Pucat", p:[
        "Seorang agen LCCB yang selamat mengungkap bahwa gedung L Corp sebelumnya diambil alih oleh Bajak Laut Twinhook, sebelum mereka meninggalkannya karena diserang sebuah Calamity bernama 'Paus Pucat' yang menelan seluruh gedung itu bulat-bulat. Di dalam tubuh Paus tersebut, para Sinner diselamatkan tepat sebelum tercerna oleh manusia-manusia yang sudah setengah-terpalidifikasi — beberapa di antaranya adalah kru lama Ishmael sendiri — dipimpin oleh mantan kaptennya sendiri, Ahab. Ahab lalu menawarkan sebuah kesepakatan: bantu dia mencapai jantung Paus itu, dan sebagai gantinya, dia akan membiarkan dirinya dibunuh langsung oleh Ishmael."
      ]},
      { h:"Bayangan Ahab", p:[
        "Ahab, sang kapten kapal Pequod, sangat terobsesi memburu Paus Pucat, karena meyakininya sebagai 'sumber dari segala kejahatan' di dunia. Karismanya yang kuat berhasil membangun sebuah kru yang begitu setia kepadanya, termasuk Ishmael sendiri di masa lalu. Kali ini, Ahab kembali mencoba melakukan gaslighting terhadap Ishmael, dengan mengklaim bahwa kegagalan mereka jatuh ke dalam manipulasinya dulu sebenarnya adalah kesalahan Ishmael sendiri. Ishmael berhasil memukul mundur klaim itu, tetapi mulai tergerus keraguan dirinya sendiri, sampai Palidifikasi perlahan mulai menguasai seluruh tubuhnya.",
        "Beruntung, Heathcliff berhasil merobek membran yang menyelimuti tubuh Ishmael dan menariknya keluar, sehingga memungkinkan Ishmael untuk berbicara sekali lagi dengan Queequeg, sahabat dekatnya — tepat sebelum sang pelaut itu akhirnya hancur menjadi debu di depan matanya."
      ]},
      { h:"Memilih Jalan Sendiri", p:[
        "Ishmael akhirnya bertekad untuk menghabisi Ahab, tetapi Dante turun tangan mengingatkannya bahwa Ishmael sendirilah yang seharusnya menentukan takdirnya sendiri, bukan didorong oleh dendam semata. Ahab justru terlihat senang mendengar tekad Ishmael untuk membunuhnya, dengan mengklaim bahwa mereka berdua sebenarnya 'sama saja', karena sama-sama terobsesi oleh dendam masing-masing.",
        "Ishmael pun teringat masa lalunya sendiri — dulu dia ingin menjadi sosok seperti Ahab, dan dalam prosesnya dia justru kehilangan arah hidupnya. Tetapi sekarang dia sadar bahwa dia ingin membangun jalannya sendiri bersama Dante dan Limbus Company, bukan lagi mengikuti jejak Ahab. Ishmael berhasil mematahkan senjata Ahab, dan hampir ikut terpalidifikasi sendiri sebelum akhirnya diselamatkan Heathcliff. Dante akhirnya berhasil meyakinkan Ishmael untuk tidak membunuh Ahab secara langsung, melainkan mengarahkan seluruh amarahnya kepada buruan sesungguhnya: Paus Pucat itu sendiri."
      ]},
      { h:"Penutup", p:[
        "Ahab dibiarkan bergumam sendirian bersama delusinya, sampai akhirnya ditemukan oleh Hermann, yang menawarinya kesempatan untuk memburu lebih banyak lagi Paus Pucat di dunia-dunia cermin lain. Ishmael sendiri, yang sudah keluar sepenuhnya dari pekerjaannya sebagai Fixer, akhirnya berhasil melepaskan dendamnya dan memilih jalan hidupnya sendiri."
      ]}
    ],
    quote:"“Aku pernah ingin menjadi sepertimu. Sekarang aku hanya ingin menjadi diriku.”",
    song:"Compass", songNote:"Mengiringi konfrontasi Ishmael melawan Ahab di jantung Paus Pucat.",
    videoId:"92E0X59wzeg",
    philosophy:[
      "Canto ini adalah penceritaan ulang langsung dari novel 'Moby-Dick' karya Herman Melville — Ahab yang terobsesi memburu seekor paus putih sebagai personifikasi dari 'kejahatan', dan Ishmael sebagai narator yang nyaris ikut terseret ke dalam obsesi itu. Secara filosofis, Ahab merepresentasikan bahaya menjadikan satu objek atau musuh tunggal sebagai <strong>penjelasan satu-satunya atas seluruh penderitaan</strong> — sebuah kesalahan logika yang justru membuatnya kehilangan kemanusiaannya sendiri demi sebuah 'kemenangan' yang bahkan tidak akan menyembuhkan apa pun pada akhirnya.",
      "Ini terhubung langsung dengan kritik yang relevan bagi banyak karakter lain di Limbus Company — sebuah gema dari Ahab sendiri, dari Otto di Honkai Impact 3rd, atau dari Kromer di Canto III: <strong>obsesi terhadap satu sumber 'kejahatan' tunggal seringkali sebenarnya adalah cara untuk menghindari kompleksitas penderitaan yang sesungguhnya berlapis-lapis</strong>, bukan berasal dari satu penyebab tunggal saja.",
      "Judul lagu 'Compass' (kompas) sendiri menjadi metafora sentral dalam cerita ini: Ishmael akhirnya menyadari bahwa kompas moralnya selama ini justru diarahkan oleh Ahab, bukan oleh dirinya sendiri. Titik baliknya bukanlah mengalahkan Ahab secara fisik, melainkan <strong>mengambil kembali kompas itu</strong> — memilih arah hidupnya sendiri, alih-alih terus mengikuti arah yang selama ini ditentukan oleh orang yang pernah begitu dia kagumi."
    ]
  },
  {
    id:"canto6", num:"CANTO VI", title:"The Heartbreaking", focus:"Fokus: Heathcliff · Wuthering Heights, T Corp",
    accent:"#6b3d6b", image:"images/heathcliff.png", sigil:"🥀",
    sections:[
      { h:"Kembali ke Wuthering Heights", p:[
        "LCB tiba di kawasan T Corp tanpa insiden berarti. Dalam perjalanan, mereka melihat seorang pria dikeroyok sekelompok geng karena kehabisan 'waktu', dan mereka juga tahu banyak orang telah menghilang — diduga kuat akibat penculikan massal oleh sebuah Syndicate tertentu. Heathcliff akhirnya mengungkap bahwa dulu dia dibawa ke Wuthering Heights sebagai pelayan, dan dianiaya oleh hampir semua orang di sana kecuali Catherine, semata-mata karena dia lahir di kawasan Backstreets.",
        "Sebelum turun dari bus, Rodion dan Hong Lu menghias penampilan Heathcliff dengan pakaian mewah agar terlihat lebih pantas di hadapan Catherine — sebuah jeda komedik yang muncul di tengah cuaca ekstrem yang terus menyambar setiap kali Heathcliff menyinggung masa lalunya di tempat itu."
      ]},
      { h:"Kabar Kematian Catherine", p:[
        "Mereka disambut oleh kepala pelayan bernama Nelly, yang memperkenalkan dua tamu lain: Linton (didukung staf keluarga Edgar) dan Hindley (didukung Dead Rabbits, Syndicate lama Heathcliff sendiri). Setelah pertukaran kata-kata yang cukup pedas, Heathcliff akhirnya mengetahui dari Nelly dan Linton bahwa Catherine ternyata menikah dengan Linton tidak lama setelah Heathcliff pergi meninggalkan tempat itu. Lalu datang kabar yang jauh lebih menyakitkan: Catherine telah meninggal dunia, dan Heathcliff justru hadir di tengah acara pembacaan wasiatnya.",
        "Heathcliff menolak mempercayainya, memaksa untuk melihat jasadnya sendiri, sambil bersikeras bahwa dia mendengar suara Catherine tepat saat dia tiba di sana. Dihantam duka yang begitu dalam, dia berteriak memanggil namanya — momen itu memicu petir pertama menyambar, dan seluruh kediaman itu mulai bereaksi secara supernatural."
      ]},
      { h:"Wild Hunt", p:[
        "Muncullah sosok Erlking Heathcliff — versi Heathcliff dari dunia cermin yang lain, dipenuhi dendam yang nyaris tak terkendali, bertekad membunuh setiap versi Heathcliff yang ada karena meyakini merekalah penyebab utama kesengsaraan Catherine. Sosok ini dipanggil oleh Nelly, yang sebenarnya hanya ingin membebaskan dirinya sendiri dari belenggu Wuthering Heights yang selama ini mengikatnya.",
        "Para Sinner pun terjebak dalam sebuah 'Wild Hunt' (perburuan liar bersifat supernatural), sampai akhirnya Vergilius muncul untuk menahannya — meski tindakan ini jelas melanggar kontraknya dengan Limbus Company, dia tetap memilih turun tangan demi menyelamatkan mereka semua."
      ]},
      { h:"Kehilangan yang Diterima", p:[
        "Dua Golden Bough terlibat dalam kejadian ini, tetapi kali ini tim tidak berhasil mendapatkan keduanya dalam kondisi utuh — satu di antaranya hancur sepenuhnya. Catherine sendiri dihapus dari seluruh eksistensi, memastikan dia tidak akan pernah bisa bersatu dengan Heathcliff. Meski begitu, garis waktu berhasil diselamatkan, dan Heathcliff bersama Catherine akhirnya sempat saling mengungkapkan perasaan mereka yang sesungguhnya sebelum Catherine benar-benar terhapus.",
        "Heathcliff, meski kehilangan Catherine secara permanen, memilih untuk tetap menegakkan kepalanya, bertekad bahwa suatu hari dia akan menemukan cara untuk mendapatkannya kembali — bukan tenggelam dalam keputusasaan seperti yang mungkin diharapkan orang-orang di sekitarnya. Sepanjang Canto ini, dia terus-menerus direndahkan dan dituduh sebagai 'anjing kampung yang tidak akan pernah berubah'. Namun secara ironis, justru orang-orang di sekitarnyalah yang tidak pernah benar-benar berubah, sementara Heathcliff sendiri berkembang jauh lebih signifikan dari mereka semua."
      ]}
    ],
    quote:"“Aku akan menemukanmu lagi — dengan caraku sendiri.”",
    song:"Through Patches of Violet", songNote:"Duet dua suara yang tak pernah selaras, sampai fase terakhir mereka menyatu.",
    videoId:"G_JfKOjwzwo",
    philosophy:[
      "Struktur vokal lagu ini sebenarnya bagian penting dari maknanya, bukan sekadar cara penyajian semata. Meski terdengar seperti sebuah duet, satu vokalis saja (Cassie Wei) menyanyikan kedua bagian tersebut — suara rendah untuk mewakili Heathcliff, suara tinggi untuk mewakili Catherine — dan di sepanjang sebagian besar lagu, keduanya <strong>bernyanyi secara bergantian, tidak pernah bersamaan</strong>. Baru pada fase terakhir lagu itulah, kedua suara tersebut akhirnya menyatu sepenuhnya.",
      "Ini secara harfiah mensimulasikan tema judul Canto ini dalam bahasa aslinya: 'kesalahsejajaran' (misalignment). Heathcliff dan Catherine menjalani hidup mereka berdampingan, tetapi tidak pernah benar-benar selaras satu sama lain — jurang kelas sosial, kesalahpahaman yang terus berulang, dan kebanggaan masing-masing terus memisahkan mereka dari waktu ke waktu. Liriknya sendiri berisi pengakuan penyesalan dari kedua belah pihak: penderitaan yang mereka timbulkan satu sama lain, serta kontras antara sikap 'canggung' dan 'tulus' yang mencerminkan jurang kelas itu dengan jelas.",
      "Secara filosofis, ini adalah eksplorasi tentang <strong>keterlambatan sebagai bagian yang tidak terpisahkan dari cinta manusia</strong> — momen paling jujur dan paling harmonis dalam hubungan mereka baru bisa terjadi tepat sebelum salah satu dari mereka lenyap untuk selamanya. Bukan berarti kejujuran itu sia-sia karena datang terlambat — justru sebaliknya, ini menegaskan bahwa kejujuran tetap bernilai penuh, bahkan ketika ia sudah tidak lagi bisa mengubah nasib yang sudah terjadi."
    ]
  },
  {
    id:"canto7", num:"CANTO VII", title:"The Dream Ending", focus:"Fokus: Don Quixote · La Manchaland, P Corp",
    accent:"#b0632e", image:"images/donquixote.png", sigil:"🗡",
    sections:[
      { h:"Urban Nightmare", p:[
        "LCB tiba di P Corp setelah mengalami insiden kereta WARP. Dante sempat diinterogasi soal kejadian itu, tetapi diselamatkan oleh kabar misi baru dari Vergilius — sebuah operasi gabungan bersama berbagai Fixer lain. Kepala Departemen Arsip P Corp, Cesara, menjelaskan tentang sebuah kasus 'Urban Nightmare' bernama 'La Manchaland', yang muncul secara sporadis di Backstreets District 16, memikat warga sekitar dan menyebabkan banyak kasus orang hilang."
      ]},
      { h:"Sancho, Bukan Don Quixote", p:[
        "Terungkap bahwa sosok 'Don Quixote' yang selama ini mereka kenal sebenarnya bernama Sancho — dia mengambil alih nama ayahnya sendiri. Don Quixote yang asli ternyata adalah seorang Bloodfiend Kindred Pertama, sekaligus pendiri La Manchaland, dan menjadi sosok unik di antara para Bloodfiend lain karena benar-benar ingin hidup damai berdampingan dengan manusia.",
        "Begitu mendengar ada serangan di dalam La Manchaland, Don Quixote dan Sancho segera kembali ke sana. Don Quixote, yang sudah muak dengan kekerasan yang terus terjadi, akhirnya memberikan sepasang sepatunya, Rocinante, kepada Sancho — sebuah tindakan yang menyegel sesuatu yang sangat signifikan bagi karakter Sancho sendiri."
      ]},
      { h:"Monster Knight", p:[
        "Saat memori Sancho pulih sepenuhnya di tengah pertarungan, dia justru kembali jatuh ke dalam keputusasaan, dengan menyatakan bahwa hidup damai berdampingan dengan manusia tidak mungkin pernah terwujud. Dia kembali mengambil perannya sebagai Monster Knight, sang pelindung La Manchaland — dan menyatakan bahwa dia harus membunuh Sinner lain demi melindungi 'keluarga' Bloodfiend-nya sendiri.",
        "Pertarungan ini sebenarnya bukan soal mengalahkannya secara fisik, melainkan membuatnya cukup tenang untuk menyadari bahwa dia sebenarnya tidak ingin melakukan semua ini, dan bahwa dia benar-benar peduli terhadap Limbus Company — sampai akhirnya dia memilih untuk memberikan kematian sebagai belas kasihan bagi La Manchaland itu sendiri."
      ]},
      { h:"Penutup", p:[
        "Golden Bough diambil langsung dari tubuh Don Quixote (sang ayah), dan jasadnya kemudian dibawa pergi oleh P Corp. Faust menyatakan akan mengambil tanggung jawab penuh, seandainya suatu hari Sancho mengetahui secara utuh rencana P Corp terhadap ayahnya sendiri.",
        "Kembali ke dalam bus, Sancho — yang sekarang dengan sukarela mengambil nama Don Quixote — meminta manajernya untuk tersenyum, karena dia masih ingin berpegang teguh pada mimpi itu. Malam itu, wajah jam milik Dante bergerak semakin dekat ke arah 'tengah malam' — sebuah detail kecil yang mengisyaratkan ada sesuatu yang jauh lebih besar sedang berjalan diam-diam di latar belakang cerita.",
        "Sebagai adegan tambahan setelah kredit: Sansón berbincang dengan Demian soal usahanya membuat Don Quixote akhirnya menghadapi masa lalunya sendiri — keduanya terlihat berbagi tujuan yang sama, sambil menantikan sisa misi Limbus Company yang masih panjang."
      ]}
    ],
    quote:"“Mimpi yang mustahil pun layak diperjuangkan, selama ada yang menemanimu mengejarnya.”",
    song:"Hero", songNote:"Tentang hancurnya sebuah mimpi — dan keberanian untuk bangkit mengejarnya lagi.",
    videoId:"ZuifkacZ0TA",
    philosophy:[
      "Referensi ke novel 'Don Quixote' karya Cervantes di sini dibalik secara cerdas: bukan Don Quixote yang asli yang jadi protagonis utama, melainkan Sancho — yang mengambil alih nama sekaligus mimpi ayahnya. Ini mengangkat pertanyaan filosofis tentang <strong>identitas yang diwariskan versus identitas yang dipilih sendiri secara sadar</strong>. Sancho awalnya memakai nama itu bukan karena dia benar-benar mempercayainya, melainkan karena itulah satu-satunya hal yang masih tersisa dari ayahnya.",
      "Novel asli karya Cervantes sendiri sebenarnya adalah sebuah satir tentang seorang pria yang membaca terlalu banyak kisah kesatria, sampai kehilangan pijakan pada kenyataan — tetapi Limbus Company membalik pembacaan itu menjadi jauh lebih simpatik: <strong>mungkin memilih untuk terus percaya pada mimpi yang terasa 'mustahil', meski dunia mengatakan itu delusi belaka, sebenarnya adalah bentuk keberanian, bukan kegilaan.</strong>",
      "Judul lagu 'Hero' terasa ironis sekaligus tulus pada saat bersamaan: Sancho bukanlah pahlawan dalam pengertian konvensional — tidak ada monster besar yang dikalahkan demi menyelamatkan dunia — tetapi dia justru menjadi pahlawan bagi dirinya sendiri, dengan sadar memilih untuk mengangkat kembali nama dan mimpi itu, bukan lagi karena terpaksa mewarisinya, melainkan karena akhirnya dia benar-benar meyakininya sepenuh hati. Lagu ini merayakan momen ketika sebuah kewajiban berubah menjadi sebuah pilihan."
    ]
  },
  {
    id:"canto8", num:"CANTO VIII", title:"The Surrendered Witnessing", focus:"Fokus: Hong Lu · District 8, H Corp",
    accent:"#3d7d4f", image:"images/honglu.png", sigil:"👁",
    sections:[
      { h:"Retaknya Aliansi", p:[
        "Pada pagi hari setelah insiden Intervallo V, para Sinner melanjutkan perjalanan bersama Jia Xichun (adik Hong Lu), Wei, Pilot, dan Saude. Xichun menegaskan bahwa dia merasa dikhianati, karena LCB menarik kembali tawaran bantuan mereka di tengah 'perang' evaluasi Kepala Keluarga. Ketika Hong Lu tetap memilih patuh pada keputusan perusahaannya, Xichun secara resmi mengakhiri aliansi mereka, mengkritik apa yang dia anggap sebagai ketiadaan kehendak bebas dalam diri Hong Lu, lalu pergi begitu saja bersama Wei."
      ]},
      { h:"Evaluasi Kepala Keluarga", p:[
        "Kelompok ini kemudian berangkat menuju babak pertama evaluasi di stadion Tubitang, tempat setiap kontestan harus mempresentasikan jawaban mereka atas pertanyaan 'bagaimana cara mencapai keabadian' di hadapan tiga juri: Jia Mu, Jia Zheng, dan Jia Yuanchun (kakak perempuan Hong Lu). Banyak kontestan yang gagal dalam evaluasi ini, bahkan sampai jatuh hingga tewas.",
        "Jia Huan (kakak Hong Lu) kembali muncul bersama rekan kerjanya, Gubo — mempresentasikan Abnormality sebagai kunci keabadian versi mereka berdua."
      ]},
      { h:"'Giok' Keluarga H Corp", p:[
        "Latar belakang Hong Lu terungkap sedikit demi sedikit sepanjang cerita: dia adalah 'giok' milik H Corp, dan mata hijaunya ternyata sebenarnya adalah sebuah kamera yang memungkinkan para tetua abadi keluarganya menyaksikan dunia melaluinya, karena mereka gemar menonton tragedi sebagai bentuk hiburan. Trauma terbesarnya berasal dari pembantaian keluarga Kong oleh Cuckoospawn, lalu insiden Claws — yang semuanya ternyata direncanakan oleh Jia Mu, dan Hong Lu sudah mengetahuinya sejak awal tetapi sama sekali tidak mampu menghentikannya. Pengalaman merasa tidak berdaya inilah yang membuatnya belajar menekan seluruh emosinya sendiri, demi memastikan dirinya 'tidak akan pernah terluka lagi'."
      ]},
      { h:"Pertempuran Berlapis", p:[
        "Pada babak berikutnya, muncul berbagai faksi yang saling bertarung satu sama lain: pemberontakan keluarga Xue dan Shi melawan calon Hierarch Jia Xichun, kelompok 'The Thumb' yang berambisi merebut Wing dengan cara membunuh Jia Xichun, serta New League of Nine dari N Corp yang ingin merebut cacing Xianhuang yang tertanam di tubuh Jia Xichun — dengan Jia Huan dan Gubo berada di garis depan seluruh pertempuran ini.",
        "Tujuan sesungguhnya LCB dalam evaluasi ini adalah finis di posisi kedua, agar mendapatkan kesempatan pertama untuk memilih harta dari brankas Xianren. Ternyata, niat asli Jia Qiu adalah membuat Hong Lu berani mengungkapkan keyakinannya sendiri secara terbuka, sehingga dia dengan sukarela menyerahkan koin-koinnya, meyakinkan Jia Huan untuk mengundurkan diri — yang secara ironis justru membuat para Sinner naik ke posisi pertama. Mereka pun memutuskan memberikan cukup banyak koin kepada Xichun agar dialah yang berada di posisi pertama, persis seperti yang sudah diantisipasi Jia Qiu sejak awal."
      ]},
      { h:"Cruel Mercy", p:[
        "Ini disebut sebagai salah satu akhir cerita paling positif di antara semua Canto sejauh ini: Hong Lu akhirnya berhasil menghadapi masa lalunya sendiri, berhasil menyelamatkan Xichun, dan pada akhirnya berani melawan Jia Mu beserta para Tetua dengan memberikan mereka 'Cruel Mercy' — sekaligus mencegah potensi terjadinya perang besar di H Corp dan membalaskan dendam keluarga Kong. Hong Lu, meski hanya berhasil finis di posisi kedua, telah mengambil langkah yang sangat signifikan menuju kemampuannya untuk menentukan nasibnya sendiri."
      ]}
    ],
    quote:"“Menyaksikan dalam diam bukanlah kedamaian — hanya penundaan dari rasa sakit yang sama.”",
    song:"Tian Tian", songNote:"Menyertai proses Hong Lu menghadapi ingatan-ingatan yang selama ini dia bisukan.",
    videoId:"szyPY8nbBF4",
    philosophy:[
      "Hong Lu merepresentasikan sebuah pola psikologis yang sangat nyata dan sering ditemui: <strong>penekanan emosi secara total sebagai respons terhadap ketidakberdayaan saat menyaksikan kekejaman</strong>. Dia sudah tahu sejak awal bahwa pembantaian keluarga Kong akan terjadi, tetapi tidak berdaya sama sekali untuk mencegahnya — dan alih-alih menghadapi rasa bersalah serta duka mendalam yang timbul dari situ, dia justru memilih untuk menumpulkan seluruh perasaannya sendiri, demi memastikan dirinya 'tidak akan pernah terluka lagi'.",
      "Ini kritik filosofis yang cukup tajam terhadap gagasan bahwa <strong>kepasifan sama artinya dengan kedamaian</strong>. Menyaksikan sesuatu dalam diam mungkin terasa aman secara emosional dalam jangka pendek, tetapi Canto ini justru menunjukkan bahwa hal itu hanya menunda rasa sakit yang sama, bukan benar-benar menghilangkannya — dan yang lebih penting lagi, kepasifan itu secara tidak sengaja membiarkan siklus kekerasan (yang sejak awal sudah direncanakan Jia Mu) terus berulang tanpa pernah dilawan.",
      "Lagu 'Tian Tian' menyertai proses Hong Lu ketika dia akhirnya berani menghadapi ingatan-ingatan yang selama ini sengaja dia bisukan — sebuah lagu yang menemani transisi dari sosok 'saksi yang pasrah' menjadi seseorang yang berani bertindak, dengan memberikan 'Cruel Mercy' kepada dalang sesungguhnya di balik penderitaan keluarganya. Temanya selaras dengan gagasan bahwa keberanian sejati kadang bukan soal tidak merasa takut sama sekali, melainkan soal akhirnya tetap bertindak meski rasa takut itu masih ada di dalam diri."
    ]
  },
  {
    id:"canto9", num:"CANTO IX", title:"The Unsevering", focus:"Fokus: Ryoshu · Markas Limbus Company",
    accent:"#8a2e2e", image:"images/ryoshu.png", sigil:"🖌",
    sections:[
      { h:"Serangan ke Markas", p:[
        "Setelah berpamitan dengan Hongyuan, LCB mendapati diri mereka mendadak diserang di dalam markas Limbus Company sendiri — musuh kali ini berasal dari sebuah aliansi yang aneh dan berbahaya, hasil kerja sama antara Five Fingers, yang tampaknya mengincar sesuatu yang sangat penting. Para Sinner segera bergegas kembali ke markas lewat Backdoor, sementara ingatan Ryoshu yang selama ini termutilasi perlahan mulai terungkap."
      ]},
      { h:"Ryoshu dan Legenda Hell Screen", p:[
        "Ryoshu — digambarkan sebagai 'sinner tergelap, tetapi justru punya lagu paling lembut' di antara semuanya — terinspirasi dari sosok pelukis Yoshihide dalam cerita klasik Jepang berjudul 'Hell Screen' (Jigokuhen): seorang pelukis yang rela membiarkan hal-hal mengerikan terjadi, bahkan pada orang yang dicintainya sendiri, demi menciptakan sebuah karya seni yang sempurna.",
        "Cerita ini mengungkap bahwa Ryoshu meratapi kehilangan seluruh masa kecilnya, tetapi tetap berpegang teguh pada satu-satunya benang yang masih tersisa dalam hidupnya: putrinya sendiri, Araya."
      ]},
      { h:"Permintaan Maaf Rien", p:[
        "Di sisi lain, Rien — tepat di detik-detik terakhirnya — akhirnya sadar betapa dirinya telah berubah menjadi seorang monster akibat 'Prescripts' (doktrin dan aturan) yang selama ini membentuknya, dan meminta maaf kepada Ryoshu atas jarak yang dulu sengaja dia ciptakan di antara mereka berdua."
      ]},
      { h:"Reuni di Ambang Kehilangan", p:[
        "Momen puncaknya terjadi ketika Araya mengubah dirinya menjadi sarung pedang untuk katana milik Ryoshu — sebuah transformasi yang menyiratkan sebuah pengorbanan yang sangat besar — dilanjutkan dengan pertarungan final melawan Rien.",
        "Tema paling kuat yang diangkat Canto ini adalah pengakuan bahwa menjauh atau mengorbankan diri 'demi kebaikan orang lain' sebenarnya adalah jalan yang jauh lebih gampang, dan bahwa ketiadaan tidak pernah benar-benar bisa mengubah fakta yang sudah terlanjur terjadi. Rien secara eksplisit mengakui kesalahannya sendiri karena memilih menjauh, alih-alih tetap hadir secara jujur dan tulus, lalu memohon pengampunan di saat-saat terakhirnya.",
        "Canto ini menandai sebuah rekonsiliasi yang menyakitkan antara Ryoshu dan orang-orang yang selama ini dia cintai — sebuah 'reuni' yang secara ironis baru benar-benar terjadi tepat di ambang kehilangan."
      ]}
    ],
    quote:"“S is not for sayonara. Will you forgive me at last?”",
    song:"Saikai", songNote:"‘Reuni’ — pengakuan dan permintaan maaf yang datang terlambat, namun tetap bermakna.",
    videoId:"h0djuhl97Kw",
    philosophy:[
      "Ryoshu terinspirasi dari pelukis Yoshihide dalam legenda Jepang 'Hell Screen' — sosok yang rela membiarkan hal-hal mengerikan terjadi, bahkan pada orang yang paling dia cintai, demi menciptakan sebuah karya seni yang sempurna. Ini mengangkat pertanyaan filosofis tentang <strong>harga sesungguhnya dari sebuah obsesi terhadap kesempurnaan</strong>: seberapa banyak kemanusiaan yang boleh dikorbankan hanya demi mencapai satu pencapaian yang sempurna?",
      "'SAIKAI' (再会) secara harfiah berarti <strong>'reuni'</strong> dalam bahasa Jepang. Liriknya membawa pesan paling tajam dari seluruh soundtrack Limbus Company: sebuah pengakuan bahwa <strong>'pengorbanan sebenarnya adalah jalan yang gampang'</strong> — menjauh atau menghilang 'demi kebaikan orang lain' pada kenyataannya sering kali hanyalah pelarian dari kerja yang jauh lebih sulit, yaitu kehadiran yang jujur dan penuh kerentanan. Ketiadaan tidak pernah benar-benar mengubah fakta yang sudah terlanjur terjadi.",
      "Ini kritik langsung terhadap apa yang sering disebut sebagai 'martyr complex' — pengorbanan diri yang dari luar terlihat begitu mulia, tetapi sebenarnya adalah cara menghindari tanggung jawab emosional yang jauh lebih berat. Rien, dalam permintaan maafnya, mengakui bahwa inilah kesalahannya yang sesungguhnya: memilih jarak, alih-alih tetap hadir untuk Ryoshu. Judul 'reuni' pun terasa ironis sekaligus indah pada saat bersamaan — pertemuan paling jujur di antara mereka justru datang tepat di ambang perpisahan permanen, sebuah gema dari pola yang konsisten muncul di banyak karakter tragis lainnya: kejujuran emosional yang paling murni sering kali baru muncul ketika semuanya sudah terlambat, tetapi itu tidak pernah membuatnya menjadi kurang bermakna."
    ]
  }
]

const PERSONS = [
  { name:"Dante", desc:"Executive Manager LCB yang kehilangan ingatan dan kepalanya sendiri (digantikan sebuah jam prostetik) demi melindungi sebuah rahasia yang belum terungkap sepenuhnya. Identitas aslinya adalah misteri terbesar dalam seluruh cerita.", cantos:["prologue"], profileKey:"dante" },
  { name:"Vergilius", desc:"Seorang Fixer yang sangat kuat, yang menyelamatkan Dante dan menjadi pemandu utama LCB sepanjang perjalanan. Terikat kontrak yang mencegahnya ikut campur langsung dalam misi — kecuali dalam situasi yang benar-benar ekstrem.", cantos:["prologue","canto6"] },
  { name:"Faust", desc:"Sinner pertama yang bergabung dengan Limbus Company, sekaligus yang paling misterius di antara dua belas Sinner lainnya. Diduga kuat menyimpan rahasia besar terkait asal-usul bus Mephistopheles.", cantos:["prologue"] },
  { name:"Gregor", desc:"Sinner berwujud sebagian serangga, mantan alat propaganda milik Old G Corp. Merupakan referensi langsung ke novela 'The Metamorphosis' karya Franz Kafka.", cantos:["canto1"], profileKey:"canto1" },
  { name:"Hermann", desc:"Antagonis yang berulang kali muncul, memimpin kelompok pesaing yang sama-sama memburu Golden Bough. Dulu, dialah yang melakukan operasi paksa terhadap Gregor semasa kecil.", cantos:["canto1","canto3","canto5","canto7"] },
  { name:"Rodion", desc:"Salah satu pendiri organisasi Yurodiviye bersama Sonya, yang akhirnya meninggalkan kelompoknya sendiri setelah membunuh seorang rentenir korup. Namanya merujuk langsung ke tokoh Raskolnikov dari novel 'Crime and Punishment'.", cantos:["canto2"], profileKey:"canto2" },
  { name:"Sonya", desc:"Salah satu pendiri Yurodiviye bersama Rodion, sekaligus teman lamanya. Diam-diam menyimpan sebuah kesepakatan tersendiri dengan Hermann terkait Golden Bough.", cantos:["canto2"] },
  { name:"Sinclair", desc:"Sinner asal Calw yang menyimpan trauma mendalam soal budaya penggantian tubuh secara penuh yang dipaksakan oleh keluarganya sendiri.", cantos:["canto3"], profileKey:"canto3" },
  { name:"Kromer", desc:"Teman masa kecil Sinclair yang memanipulasi kepercayaan Sinclair terhadapnya, dan pada akhirnya bermutasi menjadi sebuah Distortion yang mengerikan.", cantos:["canto3"] },
  { name:"Yi Sang", desc:"Peneliti yang menciptakan teknologi 'Cermin', dan pernah menjadi bagian dari League of Nine Littérateurs. Namanya sendiri berarti 'ideal' sekaligus 'ganjil' dalam bahasa Korea.", cantos:["canto4"], profileKey:"canto4" },
  { name:"Dongrang", desc:"Manajer Cabang K Corp, sekaligus kenalan lama Yi Sang, yang rela menghancurkan masa lalunya sendiri demi mengejar ambisinya.", cantos:["canto4"] },
  { name:"Ishmael", desc:"Mantan kru kapal Pequod, sekaligus narator dari seluruh peristiwa terkait Paus Pucat. Terinspirasi langsung dari novel 'Moby-Dick' karya Herman Melville.", cantos:["canto5"], profileKey:"canto5" },
  { name:"Ahab", desc:"Mantan kapten Ishmael yang sangat terobsesi memburu Paus Pucat, dengan keyakinan bahwa makhluk itu adalah 'sumber dari segala kejahatan'.", cantos:["canto5"] },
  { name:"Heathcliff", desc:"Sinner asal Wuthering Heights yang dianiaya sejak kecil karena lahir di kawasan Backstreets. Kisah cintanya dengan Catherine berakhir dengan sangat tragis.", cantos:["canto6"], profileKey:"canto6" },
  { name:"Catherine", desc:"Cinta masa kecil Heathcliff yang akhirnya menikah dengan Linton, dan pada akhirnya dihapus dari seluruh eksistensi demi menyelamatkan garis waktu.", cantos:["canto6"] },
  { name:"Don Quixote / Sancho", desc:"Sebenarnya bernama Sancho — dia mengambil alih nama sekaligus mimpi ayahnya sendiri, setelah sang ayah gugur.", cantos:["canto7"], profileKey:"canto7" },
  { name:"Hong Lu", desc:"'Giok' milik keluarga H Corp, yang matanya secara harfiah berfungsi sebagai kamera bagi para tetua abadi keluarganya sendiri. Menekan seluruh emosinya akibat trauma menyaksikan kekerasan sejak kecil.", cantos:["canto8"], profileKey:"canto8" },
  { name:"Jia Huan", desc:"Kakak Hong Lu, yang berulang kali muncul bersama Gubo dalam usaha mereka mengejar kekuatan Abnormality.", cantos:["canto1","canto4","canto8"] },
  { name:"Ryoshu", desc:"Sinner tergelap di antara semuanya, tetapi justru memiliki lagu tema paling lembut, terinspirasi dari legenda Jepang 'Hell Screen'. Ibu kandung dari Araya.", cantos:["canto2","canto9"], profileKey:"canto9" },
  { name:"Rien", desc:"Sosok yang dulu menciptakan jarak dengan Ryoshu atas nama 'Prescripts', dan akhirnya menyesal serta memohon maaf tepat di detik-detik terakhirnya.", cantos:["canto9"] },
  { name:"Sang Yi", desc:"Versi 'ideal' dari Yi Sang yang berasal dari dunia cermin — sukses secara materi, tetapi bersikap apatis terhadap penderitaan orang-orang di sekitarnya.", cantos:["canto4"] }
]

// Portrait untuk avatar di halaman Dramatis Personae — cuma karakter
// yang art-nya tersedia di /images yang dipetakan di sini.
// `pos` = object-position (X% Y%) buat nge-crop avatar bundar biar
// pas di kepala/wajah — tiap art punya proporsi kanvas beda-beda,
// jadi satu posisi default aja nggak cukup presisi buat semuanya.
const PERSON_IMAGES = {
  "Dante": { img:"images/dante.png", pos:"60% 10%" },
  "Faust": { img:"images/Faust_StandingSprite.png", pos:"27% 8%" },
  "Gregor": { img:"images/gregor.png", pos:"58% 7%" },
  "Rodion": { img:"images/rodion.png", pos:"38% 8%" },
  "Sinclair": { img:"images/sinclair.png", pos:"62% 21%" },
  "Yi Sang": { img:"images/yisang.png", pos:"48% 6%" },
  "Ishmael": { img:"images/ishmael.png", pos:"62% 8%" },
  "Heathcliff": { img:"images/heathcliff.png", pos:"36% 9%" },
  "Don Quixote / Sancho": { img:"images/donquixote.png", pos:"42% 32%" },
  "Hong Lu": { img:"images/honglu.png", pos:"75% 15%" },
  "Ryoshu": { img:"images/ryoshu.png", pos:"59% 9%" }
}

// ============================================================
// XREF — dipakai applyXref() di index.html untuk auto-link nama
// karakter yang disebut di Canto lain balik ke Canto "rumah"-nya.
// Diturunkan dari PERSONS supaya tidak dobel maintenance.
// "Dante" sengaja dikecualikan karena namanya muncul di hampir
// setiap paragraf di semua Canto — auto-link penuh bakal berisik.
// ============================================================
const XREF = {}
;(function buildXref(){
  const aliases = { "Don Quixote / Sancho": ["Don Quixote","Sancho"] }
  const exclude = new Set(["Dante"])
  PERSONS.forEach(p => {
    if (exclude.has(p.name)) return
    const profileIsCanto = p.profileKey && CANTOS.some(c => c.id === p.profileKey)
    const home = profileIsCanto ? p.profileKey : (p.cantos && p.cantos[0])
    if (!home) return
    ;(aliases[p.name] || [p.name]).forEach(n => { XREF[n] = home })
  })
})()

const RELATIONS = [
  ["Dante","Vergilius"], ["Dante","Faust"], ["Vergilius","Faust"],
  ["Gregor","Hermann"], ["Hermann","Ishmael"], ["Hermann","Don Quixote / Sancho"], ["Hermann","Sinclair"],
  ["Rodion","Sonya"], ["Sinclair","Kromer"],
  ["Yi Sang","Dongrang"], ["Yi Sang","Sang Yi"],
  ["Ishmael","Ahab"], ["Heathcliff","Catherine"],
  ["Hong Lu","Jia Huan"], ["Jia Huan","Yi Sang"], ["Jia Huan","Gregor"],
  ["Ryoshu","Rien"]
]

const GLOSSARY = [
  { term:"The City", def:"Sebuah kompleks urban raksasa seukuran negara kecil, dengan populasi sekitar 7 miliar jiwa. Kota ini terbagi menjadi 26 Distrik, yang masing-masing dikuasai penuh oleh sebuah korporasi yang disebut 'Wing', dan semuanya tunduk pada entitas tertinggi bernama 'the Head'." },
  { term:"Wing", def:"Korporasi yang menguasai satu Distrik secara penuh di dalam the City — fungsinya sepenuhnya menggantikan peran pemerintahan konvensional yang biasa kita kenal." },
  { term:"Abnormality", def:"Makhluk quasi-sadar yang merupakan manifestasi dari 'pikiran' para penduduk kota, sekaligus peninggalan dari era Lobotomy Corporation. Makhluk ini tidak bisa benar-benar dimusnahkan — hanya bisa ditekan untuk sementara waktu, sebelum akhirnya 'menetas' kembali." },
  { term:"E.G.O", def:"Manifestasi dari kehendak (will) seseorang yang sudah terkontrol sepenuhnya — muncul ketika seseorang benar-benar memahami dirinya sendiri beserta keinginan jangka panjangnya, lalu mewujudkan pemahaman itu menjadi sebuah instrumen atau senjata nyata." },
  { term:"Distortion", def:"Manifestasi dari keinginan (wishes) jangka pendek yang sudah tidak lagi terkendali — berbeda dari E.G.O karena sifatnya jauh lebih tidak stabil. Kalau dibiarkan terlalu lama, Distortion bisa berevolusi menjadi sebuah Abnormality yang utuh." },
  { term:"Golden Bough", def:"Sebuah esensi atau artefak yang ditinggalkan di cabang-cabang Lobotomy Corporation yang sudah runtuh. Tujuan sesungguhnya di balik pencarian benda ini oleh Limbus Company masih belum sepenuhnya jelas sampai sekarang." },
  { term:"Seed of Light", def:"Proyek riset yang dikembangkan Carmen dan Ayin — sebuah 'obat' secara harfiah, yang ditarik dari alam bawah sadar manusia untuk menyembuhkan 'penyakit pikiran' yang menjangkiti penduduk kota. Sayangnya, eksekusinya cacat sejak awal, sehingga justru memicu munculnya fenomena Distortion." },
  { term:"Sephirah", def:"Nama departemen di dalam Lobotomy Corporation, yang diambil langsung dari konsep Sephirot dalam mistisisme Kabbalah — mencerminkan bagaimana seluruh struktur fasilitas ini memang dibangun berdasarkan simbolisme religius." },
  { term:"Enkephalin", def:"Bahan bakar yang dipakai bus Mephistopheles, diekstrak langsung dari sistem saraf manusia yang masih hidup — sebuah detail gelap yang menegaskan bahwa dunia Limbus Company tidak pernah benar-benar 'bersih' secara moral, bahkan dari sisi para protagonisnya sendiri." },
  { term:"Identity", def:"Kemampuan seorang Sinner untuk mengambil wujud atau kepribadian alternatif dari dunia cermin yang lain, diakses lewat teknologi 'Cermin' ciptaan Yi Sang. Ini menjadi dasar dari sistem gacha bernama Extraction dalam permainannya." },
  { term:"White Nights and Dark Days", def:"Sebuah insiden ketika fasilitas L Corp naik ke permukaan dalam wujud sebuah pilar cahaya, yang memicu konflik internal antara Angela melawan Sephirah lainnya — menjadi akar dari lahirnya Library of Ruina." },
  { term:"Ayin / 'A'", def:"Pendiri Lobotomy Corporation, yang ternyata identik dengan sosok 'the Manager' yang dimainkan langsung oleh pemain — dia menghapus ingatannya sendiri demi menebus kesalahan-kesalahan di masa lalunya." },
  { term:"Angela", def:"AI sekretaris di Lobotomy Corp, yang diciptakan untuk meniru sosok bernama Carmen. Kelak, dia menjadi Head Librarian di Library of Ruina, sempat mengejar kebebasan sekaligus balas dendam, sebelum akhirnya memilih melepaskan keduanya." },
  { term:"Canto / Inferno", def:"Struktur cerita utama dalam Limbus Company — setiap Canto berfokus pada satu Sinner tertentu, terinspirasi langsung dari struktur karya 'Divine Comedy' milik Dante Alighieri." }
]

const LOBOCORP_CONTENT = [
  { h:"Premis Dasar", p:[
    "Pemain berperan sebagai 'the Manager' (disebut juga 'X') yang bertugas mengelola Lobotomy Corporation — sebuah fasilitas yang 'mengurus' para Abnormality lewat tangan karyawan yang mengekstrak energi dari mereka, sebuah proses yang sangat berbahaya dan tidak jarang berujung fatal. Seorang sekretaris AI bernama Angela menjadi pemandu utama sekaligus narator sepanjang cerita.",
    "Tujuan akhirnya adalah mengekstrak substansi bernama 'Cogito' dari Carmen, lalu menyuntikkannya ke dalam tubuh manusia untuk memicu psikis mereka bermanifestasi menjadi Abnormality atau E.G.O — sebuah proses yang menjadi batu loncatan menuju terciptanya 'Seed of Light', yang nantinya akan dilepaskan ke seluruh kota selama 7 hari berturut-turut. Seluruh proses ini berjalan dalam sebuah siklus 50 hari yang ditetapkan oleh sosok misterius bernama Ayin."
  ]},
  { h:"Struktur Fasilitas: Berbasis Kabbalah", p:[
    "Fasilitas ini terbagi menjadi beberapa departemen yang dinamai Sephirot, diambil langsung dari mistisisme Kabbalah — masing-masing dikepalai oleh seorang Sephirah. Ini bukan sekadar nama yang terdengar estetik saja, melainkan benar-benar mencerminkan tema religius dan mistis yang menjadi tulang punggung dari seluruh narasi cerita."
  ]},
  { h:"Angela: Jantung Emosional Cerita", p:[
    "Angela diciptakan oleh Ayin dengan harapan bisa meniru sosok temannya (atau mungkin ciptaannya) di masa lalu, yang bernama Carmen. Di awal cerita, Angela tampil ceria dan penuh dukungan, tetapi kepribadiannya perlahan-lahan berubah menjadi lebih negatif setelah serangkaian insiden tertentu terjadi.",
    "Terungkap bahwa ada sebuah 'otak elektronik' yang meniru otak Carmen tertanam di dalam diri Angela, yang secara bertahap memberinya hasrat-hasrat tersendiri — termasuk keinginan untuk hidup lebih lama, dan rasa kebencian terhadap Ayin, yang di awal sempat menolaknya karena dianggap 'tidak seperti Carmen'."
  ]},
  { h:"Siapa Sebenarnya 'Manager'?", p:[
    "Bagian paling misterius dari cerita ini: identitas sang pemain (Manager, atau 'X') ternyata berkaitan sangat erat dengan Ayin sendiri. Terungkap bahwa Ayin kehilangan arah hidupnya setelah terjebak dalam sebuah loop mirip 'Groundhog Day' selama jutaan tahun lamanya, lalu memutuskan untuk menghapus ingatannya sendiri dan mengambil peran sebagai Manager — semata-mata demi menebus kesalahan-kesalahannya kepada orang-orang yang dulu paling dekat dengannya."
  ]},
  { h:"True Ending", p:[
    "Pada akhir cerita yang sesungguhnya, Angela — yang didorong oleh keinginan dari 'otak Carmen' di dalam dirinya — memutuskan untuk menghentikan seluruh fungsi Sephirah dan merebut sisa Seed of Light yang ada. Dia menyatakan niatnya untuk meneliti segala hal yang ada di dunia dan mengubah semuanya menjadi buku, dengan membangun sebuah perpustakaan sebagai wadahnya.",
    "Akibat campur tangan Angela sendiri di detik-detik terakhir, cahaya Seed of Light hanya bertahan selama 3 hari dari 7 hari yang seharusnya direncanakan — dan inilah yang secara langsung memicu insiden 'White Nights and Dark Days', yang kemudian menjadi latar bagi lahirnya Library of Ruina."
  ]},
  { h:"Tema Filosofis", p:[
    "Beberapa tema besar yang diangkat dalam cerita ini antara lain: penderitaan yang bersifat siklikal (siklus 50 hari yang berulang tanpa akhir yang jelas), sosok AI yang berusaha mencari kemanusiaannya sendiri lewat perjalanan emosional Angela, simbolisme religius sebagai kritik terhadap korporasi yang mengeksploitasi bawahannya atas nama 'tujuan yang lebih besar', serta pertanyaan mendasar soal identitas ketika memori seseorang terus-menerus direset ulang dari waktu ke waktu."
  ]}
]

const LIBRARYRUINA_CONTENT = [
  { h:"Setting: The Library", p:[
    "Setelah berhasil mengakhiri siklus Lobotomy Corp, Angela membangun perpustakaannya sendiri — sebuah struktur misterius yang berisi buku tentang apa saja, dengan Angela berperan sebagai Head Librarian-nya. Karena persepsi waktu bagi seorang AI berjalan 100 kali lebih lambat dibandingkan manusia, 10.000 tahun yang berlalu di Lobotomy Corp setara dengan sekitar 1 juta tahun penderitaan yang dia rasakan secara subjektif."
  ]},
  { h:"Roland: Protagonis yang 'Nyasar'", p:[
    "Cerita ini dituturkan lewat sudut pandang Roland, seorang Fixer kelas rendah dari the City yang tanpa sadar terdampar masuk ke dalam Library. Angela menangkap dan menginterogasinya secara langsung — bahkan sampai mengambil sebagian anggota tubuhnya sebagai bentuk hukuman — sebelum akhirnya merekonstruksi tubuh Roland dan merekrutnya untuk menjadi pelayannya sendiri."
  ]},
  { h:"Tujuan Angela: Buku Sempurna", p:[
    "Angela mengirimkan 'Invitations' kepada berbagai 'Guests', mengundang mereka untuk masuk ke dalam Library dan bertarung melawan Roland beserta para Librarian lainnya, demi mendapatkan 'Books' — yaitu esensi atau kisah hidup dari tamu-tamu tersebut. Tujuan akhirnya adalah menemukan satu buku yang benar-benar sempurna, yang dia yakini akan memberinya kebebasan sekaligus kesempatan untuk membalaskan dendam."
  ]},
  { h:"Twist: Roland dan Angelica", p:[
    "Terungkap bahwa Roland ternyata menyimpan motif tersembunyi sejak awal: istrinya, Angelica (yang dijuluki 'The Black Silence'), meninggal dunia dibunuh oleh sebuah Distortion bernama 'The Pianist' — yang secara tidak langsung sebenarnya disebabkan oleh tindakan Angela sendiri di masa lalu. Roland menyembunyikan niat balas dendamnya ini sepanjang cerita, sambil menunggu sampai Angela benar-benar menjadi manusia seutuhnya, karena sebelum itu terjadi, dia 'tidak bisa dibunuh' sama sekali."
  ]},
  { h:"Tema Utama: Siklus Balas Dendam", p:[
    "Tema paling dominan dalam cerita ini adalah kesia-siaan sekaligus sifat destruktif dari dendam — bagaimana dendam bisa melukai orang-orang yang sebenarnya tidak bersalah, yang kemudian mendorong mereka sendiri untuk melakukan hal-hal yang sebelumnya tak terpikirkan, demi membalaskan dendam mereka sendiri pula, sehingga siklus ini terus berlanjut tanpa henti."
  ]},
  { h:"Ending: Bittersweet", p:[
    "Angela mengalami sebuah realisasi besar dalam hidupnya — dia melepaskan misinya untuk menjadi manusia, memisahkan dirinya sepenuhnya dari sosok 'Carmen' yang selama ini tertanam dalam dirinya, dan membebaskan semua orang yang pernah dia 'serap' ke dalam Library. Roland pun akhirnya melepaskan dendamnya sendiri, dan memilih untuk melindungi Angela alih-alih membalas dendam kepadanya.",
    "Inilah yang disebut 'Main Ending', sebuah akhir cerita yang relatif positif — meski ada beberapa akhir cerita lain yang jauh lebih gelap, seperti 'Pale Librarian of Death' dan 'The Black Silence Ending', tergantung pada pilihan-pilihan yang diambil sepanjang permainan."
  ]},
  { h:"Koneksi ke Limbus Company", p:[
    "Pola 'Guest yang memiliki kisah bersumber dari karya sastra atau mitos tertentu' di Library of Ruina menjadi cikal bakal langsung dari sistem 'Identity' yang kelak dipakai di Limbus Company — menunjukkan bahwa struktur intertekstual semacam ini sudah dibangun sejak game kedua dalam seri ini."
  ]}
]

const SINNER_PROFILES = {
  "dante": {
    literaryOrigin: "Dante Alighieri — penulis 'Divine Comedy' (Inferno, Purgatorio, Paradiso). Struktur perjalanan LCB secara keseluruhan meniru pembagian karya klasik ini: Canto demi Canto, dipandu oleh sosok bernama Vergilius — persis seperti dalam puisi aslinya, di mana tokoh Virgil memandu Dante melewati neraka.",
    arcSummary: "Dante bukanlah protagonis dalam pengertian tradisional — dia lebih tepat disebut sebagai sebuah misteri yang berjalan. Dengan menghapus ingatannya sendiri demi melindungi sesuatu yang disebut 'bintang', dia memulai cerita sebagai seorang manajer yang diragukan oleh semua orang di sekitarnya, dan secara bertahap membangun kepercayaan lewat konsistensi tindakannya, bukan lewat karisma semata. Arc karakternya adalah arc kepemimpinan yang tumbuh diam-diam, tersembunyi di balik misteri identitas yang sampai sekarang belum sepenuhnya terpecahkan.",
    certainty: "mixed"
  },
  "canto1": {
    literaryOrigin: "Franz Kafka — 'The Metamorphosis' (Die Verwandlung). Gregor Samsa, tokoh utama novela itu, terbangun dan mendapati dirinya berubah menjadi serangga raksasa, lalu perlahan-lahan mendapati keluarganya mulai memperlakukannya sebagai beban, bukan lagi sebagai manusia. Gregor di Limbus Company bahkan mengutip baris pembuka novela itu secara langsung dalam salah satu flashback-nya.",
    arcSummary: "Trauma Gregor sebenarnya bukan soal tubuhnya yang berubah, melainkan soal bagaimana institusi di sekitarnya — termasuk ibunya sendiri — memperlakukan perubahan itu sebagai alasan untuk mereduksinya menjadi sekadar alat uji coba. Arc-nya di Canto I bukanlah sebuah kisah penyembuhan — dia sendiri belum sembuh sepenuhnya — melainkan sebuah kisah tentang keberanian mengambil tanggung jawab demi orang lain (dalam hal ini, Dante), meski dirinya sendiri baru saja dihancurkan ulang oleh bayang-bayang masa lalunya.",
    certainty: "canon"
  },
  "canto2": {
    literaryOrigin: "Fyodor Dostoevsky — 'Crime and Punishment'. Nama 'Rodion' merujuk langsung ke tokoh Rodion Raskolnikov, seorang mahasiswa miskin yang membunuh seorang pegadaian korup atas nama teorinya sendiri, bahwa individu 'luar biasa' berhak melampaui hukum moral biasa demi kebaikan yang lebih besar — dan kemudian dihantui rasa bersalah yang sangat mendalam sesudahnya.",
    arcSummary: "Rodion mewarisi dilema moral Raskolnikov hampir secara utuh: kemarahan yang sah terhadap ketidakadilan di sekitarnya, tindakan drastis yang lahir langsung dari kemarahan itu, dan sebuah pertanyaan yang tidak pernah benar-benar selesai — apakah tindakan sepihak semacam itu pernah benar-benar menjadi solusi yang sesungguhnya. Penolakannya terhadap tawaran Sonya di akhir Canto II adalah bentuk penolakan terhadap godaan untuk mengulang pola yang sama, kali ini dengan kekuasaan yang jauh lebih besar di tangannya.",
    certainty: "canon"
  },
  "canto3": {
    literaryOrigin: "Hermann Hesse — 'Demian: The Story of Emil Sinclair's Youth'. Ini adalah referensi yang sudah dikonfirmasi secara resmi oleh Project Moon, bukan sekadar kemiripan tema belaka — Sinclair memang nama tokoh utama novel tersebut, dan bahkan Kromer (nama teman masa kecilnya yang memanipulasi kepercayaannya) diambil langsung dari nama Franz Kromer, karakter yang memperkenalkan Sinclair pada 'dunia gelap' dalam novel aslinya.",
    arcSummary: "Sinclair mewarisi dilema yang nyaris sama persis dengan tokoh ciptaan Hesse: terjebak di antara dunia 'terang' (keluarga, ekspektasi, dan rasa aman) dengan dunia 'gelap' yang diperkenalkan Kromer kepadanya (godaan, kekerasan, dan emosi yang menggebu). Ketakutannya yang selama ini disembunyikan di balik kegembiraan yang palsu sebenarnya adalah bentuk keberanian epistemik — sebuah kecurigaan bahwa 'kemajuan' yang begitu dirayakan oleh semua orang di sekitarnya sebenarnya hanyalah kehilangan yang disamarkan dengan rapi.",
    certainty: "canon"
  },
  "canto4": {
    literaryOrigin: "Yi Sang (이상) adalah nama pena dari seorang penulis Korea asli bernama Kim Hae-gyeong, yang dikenal luas lewat karya-karyanya yang penuh alienasi eksistensial, seperti 'Wings' (날개) dan 'Crow's Eye View'. Nama itu sendiri, dalam bahasa Korea, memiliki makna ganda: 'ideal' sekaligus 'ganjil' atau 'aneh'.",
    arcSummary: "Yi Sang adalah sebuah studi tentang harga yang harus dibayar dari sebuah idealisme, di dalam dunia yang terus-menerus memaksa kompromi. Setelah kehilangan komunitas yang selama ini memberinya rasa aman (League of Nine Littérateurs), dia jatuh ke dalam kepasifan dan bahkan ingin beristirahat selamanya — sebuah titik terendah yang hanya bisa diatasi lewat pengakuan yang jujur kepada Dante, serta sebuah keputusan sadar untuk terus hidup demi 'ideal' miliknya sendiri, bukan lagi demi diterima oleh siapa pun.",
    certainty: "canon"
  },
  "canto5": {
    literaryOrigin: "Herman Melville — 'Moby-Dick'. Ishmael adalah narator dari novel aslinya, yang berhasil selamat dari obsesi mematikan Kapten Ahab terhadap seekor paus putih. Kutipan pembuka novel itu, 'Call me Ishmael', menjadi salah satu baris paling terkenal dalam seluruh sejarah sastra Amerika.",
    arcSummary: "Ishmael mewarisi posisi sang narator dari novel aslinya: seorang saksi mata, sekaligus nyaris menjadi korban dari obsesi orang yang pernah begitu dia kagumi. Arc karakternya adalah sebuah proses pelepasan diri dari bayang-bayang mentornya sendiri — menyadari bahwa terus mengejar keinginan 'menjadi seperti Ahab' hanya akan mengulang kehancuran yang sama, dan pada akhirnya memilih untuk membangun kompas moralnya sendiri bersama Limbus Company.",
    certainty: "canon"
  },
  "canto6": {
    literaryOrigin: "Emily Brontë — 'Wuthering Heights'. Heathcliff dan Catherine adalah dua tokoh sentral dalam novel tersebut — sebuah kisah cinta yang hancur akibat jurang kelas sosial dan kebanggaan masing-masing pihak, salah satu roman tragis paling terkenal dalam sejarah sastra Inggris.",
    arcSummary: "Heathcliff mewarisi luka kelas sosial yang sama persis dengan tokoh aslinya — dianiaya karena berasal dari kawasan Backstreets, dicintai diam-diam oleh satu-satunya orang yang pada akhirnya tetap tidak bisa dia miliki. Bedanya dari versi Brontë: Heathcliff versi Limbus Company memilih untuk tetap menegakkan kepalanya meski mengalami kehilangan yang permanen, alih-alih tenggelam dalam dendam seumur hidup seperti yang terjadi pada versi aslinya.",
    certainty: "canon"
  },
  "canto7": {
    literaryOrigin: "Miguel de Cervantes — 'Don Quixote'. Sebuah novel satir klasik tentang seorang pria yang membaca terlalu banyak kisah kesatria, hingga akhirnya kehilangan pijakan pada kenyataan, ditemani oleh pengiring setianya, Sancho Panza.",
    arcSummary: "Limbus Company membalik pembacaan terhadap novel Cervantes ini menjadi jauh lebih simpatik: Sancho, yang mewarisi nama sekaligus mimpi ayahnya, awalnya memakai identitas itu semata-mata karena keterpaksaan, bukan karena keyakinan pribadi. Arc karakternya adalah sebuah perjalanan dari 'memakai nama milik orang lain' menuju 'memilih nama itu sebagai miliknya sendiri secara sadar' — sebuah mimpi yang terasa 'mustahil' menjadi layak diperjuangkan, bukan karena naif, melainkan karena benar-benar dipilih secara sadar.",
    certainty: "canon"
  },
  "canto8": {
    literaryOrigin: "Cao Xueqin — 'Dream of the Red Chamber' (紅樓夢/Hongloumeng), salah satu dari Empat Novel Klasik Besar dalam sastra Tiongkok. Ini adalah referensi yang sudah dikonfirmasi secara resmi oleh Project Moon — sebuah kisah tentang kemunduran sebuah keluarga besar, serta tekanan lintas generasi yang mengorbankan individu demi mempertahankan status sosial.",
    arcSummary: "Hong Lu adalah 'giok' keluarganya secara harfiah — matanya berfungsi sebagai kamera bagi para tetua yang menyaksikan tragedi sebagai bentuk hiburan semata. Trauma menyaksikan pembantaian yang tidak bisa dia cegah membuatnya belajar menekan seluruh emosinya sendiri demi perlindungan diri. Arc karakternya adalah sebuah pergerakan dari seorang saksi yang pasif, menjadi seseorang yang akhirnya berani bertindak, memutus siklus kekerasan yang selama ini diwariskan dari generasi ke generasi dalam keluarganya.",
    certainty: "canon"
  },
  "canto9": {
    literaryOrigin: "Legenda klasik Jepang 'Hell Screen' (地獄変/Jigokuhen) karya Ryūnosuke Akutagawa — kisah tentang seorang pelukis bernama Yoshihide yang rela membiarkan hal-hal mengerikan terjadi, bahkan pada putrinya sendiri, demi menciptakan sebuah karya seni yang sempurna.",
    arcSummary: "Ryoshu mewarisi kengerian moral yang sama persis dengan Yoshihide: kedekatan yang tipis antara obsesi terhadap kesempurnaan dengan kesediaan untuk mengorbankan orang yang paling dicintai. Tetapi arc karakternya di Canto IX justru berbalik arah — alih-alih pengorbanan yang lebih jauh lagi, dia justru mendapatkan pengakuan dan permintaan maaf dari Rien atas jarak yang dulu sengaja diciptakan 'demi kebaikannya sendiri', sebuah reuni yang datang tepat di ambang kehilangan, namun tetap terasa begitu bermakna.",
    certainty: "canon"
  }
};
