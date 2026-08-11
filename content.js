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
        "Cerita dimulai di sebuah hutan gelap — seseorang terpojok oleh tiga pemburu bernama Lion, Wolf, dan Panther, yang telah lama memburunya atas perintah 'master' mereka. Orang ini kepergok sedang mengukir sesuatu yang namanya sengaja disamarkan dalam narasi — dan interupsi itu membuatnya kesal, bahkan sempat melawan verbal ke ketiga pemburu itu.",
        "Lion mengklarifikasi bahwa apa yang dilakukan orang ini secara teknis tidak melanggar Tabu kota manapun — hanya karena belum pernah ada yang terpikir melakukannya sebelumnya. Ketiga pemburu itu sendiri sangat antusias membunuhnya, baik karena perintah atasan mereka maupun karena kesempatan langka membunuh seseorang 'sepenting' itu.",
        "Saat bicara, yang terdengar dari orang ini hanyalah suara detak jam — karena kepalanya telah digantikan prostetik jam mekanis. Di saat bersamaan, dia sadar ingatannya perlahan menghilang. Panther bahkan kecewa karena tidak sempat bertanya di mana 'bintang' mereka berada, tanpa sadar orang itu sudah keburu lupa duluan."
      ]},
      { h:"Penyelamatan", p:[
        "Sebelum ketiga pemburu itu berhasil membunuhnya, sebuah bus besar muncul entah dari mana. Beberapa orang turun untuk membelanya — tetapi mereka kalah telak dan dibantai dengan cepat oleh trio pemburu itu.",
        "Sebelum kehilangan kesadaran sepenuhnya, orang ini diberitahu untuk 'mengikuti bintang mereka'. Tepat setelah itu, Vergilius — Fixer yang jauh lebih kuat — turun dari bus dan mencincang habis para penyerang."
      ]},
      { h:"Bangun di Dalam Bus", p:[
        "Orang itu, yang kemudian kita ketahui bernama Dante, terbangun di dalam bus. Vergilius menanyakan keadaannya, tetapi sadar tidak bisa memahami ucapan Dante — yang terdengar hanya suara detak jam. Vergilius memperkenalkan diri, lalu meminta seorang gadis kecil bernama Charon, sang sopir, untuk melanjutkan perjalanan.",
        "Ketika ditanya apakah dia mengingat sesuatu, Dante hanya menggeleng. Faust maju untuk memastikan apakah 'Dante' benar-benar namanya. Pada titik ini, Dante sadar dia bisa mendengar kata-kata Faust dengan jelas — bukan sekadar detak jam — dan Faust menjelaskan bahwa Dante sebenarnya bisa berbicara lewat pikiran ke siapa pun dari 'para Sinner', orang-orang yang tadi berusaha membelanya.",
        "Vergilius kemudian meminta para Sinner memperkenalkan diri satu per satu: Gregor, Rodion, Sinclair, Yi Sang, Ishmael, Heathcliff, Don Quixote, Hong Lu, Ryoshu, Meursault, Outis, dan Faust — genap dua belas orang."
      ]},
      { h:"Tawaran yang Awalnya Ditolak", p:[
        "Vergilius menjelaskan bahwa Dante akan menjadi Executive Manager dari para Sinner ini, dan tugas mereka adalah pergi ke 'Inferno'. Dante awalnya menolak — dia ragu menerima peran ini, apalagi begitu tahu tujuannya adalah tempat bernama Inferno. Bahkan janji bahwa dia akan mendapat kembali ingatan dan kepala aslinya tidak cukup meyakinkannya.",
        "Titik baliknya: Faust mengatakan sesuatu yang menyentuh sesuatu dalam diri Dante — bahwa begitu dia menyelesaikan semua misinya, dia akan bisa 'mengukir Aspect-nya'. Kata-kata itu membangkitkan ingatan langsung ke apa yang sedang dia lakukan tepat sebelum diserang di hutan tadi. Mengikuti instingnya, Dante akhirnya setuju bekerja sama.",
        "Setelah kesepakatan tercapai, mereka sadar bus Mephistopheles belum bergerak sama sekali selama percakapan panjang itu berlangsung. Dari situ, perjalanan LCB yang sesungguhnya dimulai."
      ]}
    ],
    quote:"“Aku hanya perlu mengikuti bintang mereka.”",
    song:null, songNote:null,
    philosophy:[
      "Prolog ini membuka pertanyaan filosofis paling mendasar dalam seluruh cerita: <strong>siapa 'aku' begitu ingatan dan identitas lama dihapus paksa?</strong> Dante secara sukarela melepas kepalanya sendiri — sebuah tindakan yang secara harfiah menghapus continuity personal identity, konsep filosofis tentang apa yang membuat 'kamu hari ini' sama dengan 'kamu kemarin'.",
      "Ini echo dari problem klasik dalam filsafat pikiran: kalau ingatan, wajah, bahkan suara aslimu semua hilang, apa yang tersisa dari 'diri'? Faust menjawabnya secara tidak langsung lewat konsep <strong>Aspect</strong> — menyiratkan bahwa identitas sejati bukan terletak pada ingatan atau tubuh, melainkan pada sesuatu yang lebih dalam yang bahkan bisa 'diukir' ulang.",
      "Karena belum ada tema musik Mili untuk Canto ini, tidak ada lirik yang bisa dianalisis — tapi keheningan itu sendiri cocok dengan temanya: Dante, di titik ini, belum punya suara. Yang tersisa cuma detak jam."
    ]
  },
  {
    id:"canto1", num:"CANTO I", title:"The Outcast", focus:"Fokus: Gregor · District 4, Old G Corp",
    accent:"#a67c3d", image:"images/gregor.png", sigil:"🪲",
    sections:[
      { h:"Perjalanan ke District 4", p:[
        "LCB menuju District 4, tempat cabang lama Lobotomy Corporation berada di kawasan Backstreets. Dalam perjalanan, bus mereka butuh bahan bakar — mereka terpaksa melawan preman jalanan untuk 'memberi makan' bus itu dengan Enkephalin yang diekstrak dari sistem saraf manusia hidup, momen yang membuat Dante dan Sinclair ngeri.",
        "Mendekati tujuan, mereka berpapasan dengan orang-orang berwujud serangga — mirip fitur fisik Gregor sendiri. Mereka adalah veteran Old G Corp dari Smoke War, dan Gregor ternyata pernah menjadi subjek propaganda utama perusahaan itu selama perang. Para veteran menolak membiarkan LCB lewat, dan Gregor terpaksa memimpin negosiasi yang akhirnya berujung kekerasan."
      ]},
      { h:"Fixer Pemandu: Yuri, Aya, Hopkins", p:[
        "Di pintu masuk fasilitas, LCB bertemu tiga Fixer yang disewa untuk memandu: Yuri, Aya, dan Hopkins. Yuri adalah mantan karyawan cabang L Corp yang mereka tuju. Gregor dan Yuri langsung akrab — keduanya sama-sama pernah menjadi anggota Wing yang runtuh, dan sama-sama mengalami diskriminasi akibat itu. Gregor melihat banyak dari dirinya sendiri dalam diri Yuri.",
        "Aya bersikap santai dan ramah, sementara Hopkins awalnya agak meremehkan penampilan para Sinner yang berantakan — sikap yang cepat berubah begitu mereka mulai bekerja sama."
      ]},
      { h:"Pengkhianatan di Dalam Fasilitas", p:[
        "Begitu masuk, mereka mendapati fasilitas itu dipenuhi Abnormality dan sisa-sisa pasukan Old G Corp. Dalam pertempuran ini, Aya tewas — dibunuh salah satu Abnormality (Ebony Queen's Apple) tak lama setelah bertemu para Sinner.",
        "Mendekati Golden Bough, mereka berhadapan dengan Abnormality lain, Golden Apple. Setelah dikalahkan, Yuri mendekat untuk mengambil Bough — tetapi Abnormality itu, sebagai upaya bertahan hidup terakhir, tiba-tiba mengonsumsi Yuri dan bermutasi jadi lebih kuat (False Apple), mengambil wujud kepala Yuri sebagai bagian dari dirinya. Para Sinner terpaksa mengalahkannya untuk kedua kalinya. Di detik-detik terakhir, Abnormality itu mengeluarkan kepala Yuri sebagai taktik pertahanan diri — momen yang cukup lama menahan tangan para Sinner, karena Gregor tidak sanggup membunuhnya selama itu mengambil wujud temannya."
      ]},
      { h:"Kegagalan Misi dan Old Shame Gregor", p:[
        "Sekelompok orang asing datang dan mengambil Golden Bough itu tepat dari mayat Abnormality yang sudah dikalahkan — dipimpin Hermann, dengan anggota termasuk Jia Huan (kakak Hong Lu) dan Gubo (mantan rekan Yi Sang). Kelompok itu melumpuhkan para Sinner dan pergi. Misi pertama LCB berakhir gagal total.",
        "Di titik ini terungkap 'Old Shame' Gregor: masa kecilnya sebagai kelinci percobaan Old G Corp. Hermann sendiri yang melakukan operasi paksa mengganti lengan kanannya menjadi prostetik bio-insektoid dengan kemampuan regenerasi unik. Setelahnya, Gregor diawasi terus-menerus, menghabiskan sebagian besar masa kecilnya terkurung di ruangan biru polos, diperintahkan setiap hari memotong apel jadi dua memakai lengan barunya — semata-mata untuk menguji fungsinya. Untuk waktu yang lama, Gregor menolak mengikuti instruksi itu.",
        "Gregor secara eksplisit adalah referensi ke tokoh utama 'The Metamorphosis' karya Franz Kafka — dia bahkan mengutip baris pertama cerita itu dalam flashback-nya. Traumanya juga menyentuh soal dia tidak pernah benar-benar bisa lepas dari kendali ibunya.",
        "Setelah misi gagal total, ketika Vergilius memarahi Dante, Gregor secara sukarela mengambil alih tanggung jawab — tidak membiarkan Dante yang masih canggung menanggung semuanya sendirian."
      ]}
    ],
    quote:"“Nama yang tersisa hanyalah nama yang kau pilih untuk terus dipanggil.”",
    song:null, songNote:null,
    philosophy:[
      "Referensi Gregor ke 'The Metamorphosis' karya Franz Kafka bukan kebetulan estetik — itu inti filosofis karakternya. Dalam cerita Kafka, Gregor Samsa terbangun berubah jadi serangga dan yang paling menyakitkan bukan transformasinya sendiri, melainkan <strong>bagaimana keluarganya mulai memandangnya sebagai beban, bukan lagi manusia</strong>. Gregor di Limbus Company mengalami versi korporat dari alienasi yang sama: tubuhnya diubah paksa demi kepentingan eksperimen, dan identitasnya sebagai manusia perlahan dikorbankan demi fungsi.",
      "Ini terhubung ke filsafat eksistensialis soal <strong>objektifikasi</strong> — ketika seseorang direduksi jadi alat/instrumen (dalam kasus Gregor: alat pengujian lengan prostetik) alih-alih diperlakukan sebagai subjek yang punya nilai intrinsik. Penolakannya bertahun-tahun untuk memotong apel itu adalah bentuk perlawanan paling kecil yang masih tersisa dari otonominya sendiri.",
      "Belum ada tema musik Mili untuk Canto ini — tapi kesunyian itu sendiri relevan: Gregor adalah karakter yang jarang punya suara untuk protes, hanya tindakan diam yang menahan."
    ]
  },
  {
    id:"canto2", num:"CANTO II", title:"The Unloving", focus:"Fokus: Rodion · District 10, Kasino",
    accent:"#5a7d99", image:"images/rodion.png", sigil:"♠",
    sections:[
      { h:"Penyamaran di Kasino", p:[
        "Golden Bough kali ini terkubur di bawah sebuah kasino di District 10 — tempat yang, menurut Vergilius, seharusnya sudah familiar bagi Rodion. Kasino ini dikuasai berbagai Syndicate yang juga mengincar Bough yang sama. Rencananya: LCB harus menyamar sebagai salah satu Syndicate, lalu memenangkan permainan kartu menggunakan resource bernama 'wish power' dari Singularity milik J Corp — rencana yang dibuat dua agen LCCB, Effie dan Saude, yang dari awal sudah dipandang skeptis oleh para Sinner.",
        "Rencana itu cepat berantakan: Don Quixote tanpa sengaja bikin heboh dan menarik perhatian Tingtang Gang, Syndicate yang identitasnya justru mereka coba tiru. Chaos pun pecah."
      ]},
      { h:"Naik ke Puncak Kasino", p:[
        "Di lantai-lantai berikutnya, mereka harus melewati beberapa kelompok berbeda. Los Mariachis membiarkan mereka lewat setelah Sinclair diminta menari pakai maracas — dan berkomentar tarian itu terasa penuh kegelapan yang direpresi, foreshadowing yang baru dijelaskan lebih dalam di Canto III. Mereka menolak tawaran menari dari Don Quixote karena merasa dia tidak tulus dengan gairahnya. Tieqiu Crew, di sisi lain, terkesan begitu Ryoshu menceritakan kisah pertarungannya dengan sangat vulgar dan detail."
      ]},
      { h:"Puncak: Permainan Kartu dan Reuni", p:[
        "Sampai di lantai teratas, Rodion meminta izin ikut main — berbohong bahwa dia masih punya sisa wish power, padahal sudah habis. Dia berhadapan dengan bos Tieqiu, pemimpin Mariachi bernama Aida, dan — kejutan besarnya — Sonya, salah satu pendiri Yurodiviye bersama Rodion sendiri di masa lalu, yang ternyata teman lama Rodion. Rodion berhasil menang, tetapi seorang kompetitor lain mencoba membunuhnya demi Golden Bough. LCB langsung bergerak melumpuhkan penyerang itu bersama-sama."
      ]},
      { h:"Terungkap: Masa Lalu Rodion", p:[
        "Di bawah kasino ternyata ada penjara bawah tanah J Corp, penuh penjaga, budak berutang, dan Abnormality baru. Di sinilah masa lalu Rodion sebagai salah satu pendiri Yurodivy (bersama Sonya) terungkap: dia dulu ingin membantu komunitasnya, tetapi frustrasi karena Yurodivy hanya sibuk berdiskusi tanpa tindakan nyata, sementara orang-orang di sekitarnya mati kelaparan. Puncaknya: Rodion, yang sudah tidak tahan, akhirnya membunuh seorang rentenir korup yang memeras lingkungannya sendiri — tindakan yang jadi alasan dia meninggalkan Yurodivy."
      ]},
      { h:"Konfrontasi dengan Sonya", p:[
        "Semakin dalam mereka masuk, area itu makin dingin, hingga akhirnya mereka menemukan kastil es raksasa. Sonya menunggu di sana, ingin membujuk Rodion kembali ke Yurodiviye — meremehkan usaha Rodion menjauh dari uang dan judi. Rodion balik menyuarakan kekecewaannya soal hipokrisi Sonya, yang membiarkan anak buahnya mencuri dari pedagang kecil, persis seperti orang-orang yang dulu ingin mereka lawan.",
        "Sonya menawarkan untuk membangun 'dunia ideal'-nya dengan bantuan Golden Bough yang beresonansi dengan Rodion — seolah semua yang terjadi sebelumnya tidak pernah ada. Rodion menolak tawaran itu. Sonya akhirnya mengizinkan dia mengambil Golden Bough, berharap Rodion menemukan apa yang dia cari."
      ]},
      { h:"Penutup: Perayaan yang Getir", p:[
        "Begitu Bough diambil, LCB dikejar Abnormality seukuran kastil, terpaksa lari ke pintu keluar — diselamatkan Sonya dan pasukannya. Setelah misi pertama yang berhasil, Rodion memakai chip judi curian untuk merayakan, meski masih menunjukkan tanda-tanda menekan sejarah masa lalunya yang baru terungkap.",
        "Post-credit: Sonya ternyata selamat, dan terungkap dia punya kesepakatan dengan Hermann soal Golden Bough — mengisyaratkan agenda tersembunyi di balik bantuannya."
      ]}
    ],
    quote:"“Bicara tanpa bertindak hanyalah kelaparan yang dibungkus kata-kata indah.”",
    song:null, songNote:null,
    philosophy:[
      "Nama 'Rodion' bukan pilihan acak — ini referensi langsung ke Rodion Raskolnikov, tokoh utama 'Crime and Punishment' karya Dostoevsky, seorang mahasiswa miskin yang membunuh pegadaian korup atas nama teori bahwa 'orang luar biasa' berhak melampaui hukum moral biasa demi kebaikan lebih besar. Rodion di Limbus Company mewarisi dilema moral yang sama: pembunuhan rentenir yang dia lakukan bukan karena haus darah, tapi karena frustrasi mendalam terhadap ketidakadilan yang dibiarkan terus terjadi.",
      "Konfrontasinya dengan Sonya menghadirkan pertanyaan filosofis klasik: <strong>apakah cukup punya niat baik dan diskusi panjang, tanpa tindakan konkret?</strong> Ini kritik terhadap apa yang filsuf sebut 'armchair activism' — kepedulian yang berhenti di level wacana. Tapi di sisi lain, tindakan sepihak Rodion (membunuh) juga dipertanyakan: apakah kekerasan individual pernah benar-benar jadi solusi, atau cuma replikasi kekerasan sistemik dalam skala kecil?",
      "Belum ada tema musik Mili untuk Canto ini — tapi dialog tajam Rodion-Sonya soal 'bicara vs bertindak' sudah membawa bobot lirik tanpa perlu nada."
    ]
  },
  {
    id:"canto3", num:"CANTO III", title:"The Unconfronting", focus:"Fokus: Sinclair · Calw, District 11, K Corp",
    accent:"#7d5a99", image:"images/sinclair.png", sigil:"⚡",
    sections:[
      { h:"Menuju Calw", p:[
        "LCB menuju District 11 untuk mengambil Golden Bough di Calw — kampung halaman Sinclair. Perjalanan dimulai dengan insiden di pos pemeriksaan imigrasi: Don Quixote mencoba mencegah petugas perbatasan memisahkan sebuah keluarga, berujung pertarungan. K Corp mendatangkan salah satu 'Fixer bintang' mereka, Siegfried, untuk menangani para Sinner — baru setelah membantai mereka semua habis-habisan dalam pertarungan sungguhan (dan mereka bangkit kembali seperti biasa), Siegfried mengizinkan LCB lewat. Vergilius menegur keras Don Quixote atas tindakan gegabahnya."
      ]},
      { h:"Inkuisisi Nagel und Hammer", p:[
        "Dalam perjalanan ke Calw, mereka dihadang Inkuisisi Nagel und Hammer dari N Corp, yang menyebut Dante dan bus Mephistopheles sebagai 'ternoda'. Setelah negosiasi gagal, pertarungan pecah. Heathcliff, sudah lelah 'bersikap baik', memutuskan menghabisi para Inquisitor, diikuti Sinner lainnya.",
        "Sesampainya di Calw, mereka mendapati seluruh kota telah dihancurkan oleh para Inquisitor atas perintah pemimpin mereka, Kromer."
      ]},
      { h:"Masa Kecil Sinclair", p:[
        "Sepanjang perjalanan, terungkap: dulu, prostetik tubuh penuh sangat populer di Calw, dan seluruh keluarga Sinclair menjalani penggantian tubuh penuh. Sinclair, yang seharusnya juga menjalani prosedur itu, menunjukkan kegembiraan di permukaan — tetapi diam-diam sangat takut, dan membenci jarak yang ditimbulkan prosedur itu antara dirinya dan keluarganya.",
        "Kromer, teman sekelasnya saat itu, menyadari perasaannya dan berjanji akan menyelamatkannya dari prosedur itu — dengan syarat Sinclair bekerja sama dengannya. Kromer membujuk Sinclair memberikan kunci ruang bawah tanah rumahnya, yang ternyata menyimpan fasilitas L Corp."
      ]},
      { h:"Klimaks: Distortion Kromer", p:[
        "LCB mencapai kediaman keluarga Sinclair, mendapati tubuh-tubuh prostetik disalib di halaman. Effie ditemukan hampir mati akibat penyiksaan, dan Outis memberinya kematian belas kasihan — memicu Sinclair jatuh dalam amarah membabi buta.",
        "Bertemu Kromer, terungkap dia menginginkan Sinclair bergabung dengannya, meyakini ini 'sudah ditakdirkan'. Menggunakan kekuatan Golden Bough, Kromer bermutasi jadi Distortion mengerikan, melelehkan hampir semua orang kecuali Dante dan Sinclair.",
        "Keduanya diselamatkan Demian — anak laki-laki yang juga terhubung dengan Sinclair — yang membunuh Kromer dengan satu pukulan, lalu memberikan Golden Bough sebelum pergi."
      ]},
      { h:"Penutup", p:[
        "Kembali ke bus, para Sinner menikmati kebab ayam sebagai hadiah atas keberhasilan mengklaim Golden Bough kedua mereka — meski dengan cara yang jauh dari mulus."
      ]}
    ],
    quote:"“Tubuh bisa diganti seluruhnya — tapi rasa takut kehilangan diri sendiri tetap sama.”",
    song:null, songNote:null,
    philosophy:[
      "Canto ini mengangkat problem filosofis tentang <strong>identitas personal dan tubuh</strong> — sering disebut 'ship of Theseus' versi biologis: kalau setiap bagian tubuhmu diganti satu-persatu dengan prostetik, di titik mana kamu berhenti jadi 'dirimu' dan mulai jadi sesuatu yang lain? Sinclair hidup dalam masyarakat yang menjawab pertanyaan itu dengan optimisme buta — penggantian tubuh penuh dirayakan sebagai kemajuan, tanpa ruang untuk keraguan.",
      "Ketakutan tersembunyi Sinclair adalah bentuk <strong>keberanian epistemik</strong> yang jarang diberi ruang: dia curiga bahwa 'progress' yang dirayakan semua orang di sekitarnya sebenarnya adalah kehilangan yang disamarkan. Manipulasi Kromer memanfaatkan justru ketakutan yang valid itu — mengubah kerentanan emosional Sinclair jadi alat kontrol, sebuah pola yang sayangnya umum: predator emosional sering menyamar sebagai 'satu-satunya yang mengerti'.",
      "Belum ada tema musik Mili untuk Canto ini — tapi cuaca ekstrem yang menyambar setiap kali masa lalu Sinclair disinggung berfungsi seperti 'lirik' visual: badai sebagai representasi emosi yang tak bisa diucapkan."
    ]
  },
  {
    id:"intervallo1", num:"INTERVALLO I", title:"Hell's Chicken", focus:"Interlude Komedi · District 11, Nest K (K Corp)",
    accent:"#c2652e", sigil:"🍗",
    sections:[
      { h:"Penyergapan di Nest K", p:[
        "Masih di District 11, tak lama setelah tragedi Calw, LCB transit di Nest K — cabang K Corp — dalam perjalanan menuju laboratorium K Corp tempat Golden Bough berikutnya menanti. Alih-alih penyambutan biasa, mereka disergap penjaga K Corp yang kepalanya sudah digantikan ayam mentah hidup — 'Headchicken', hasil sampingan dari sebuah eksperimen yang kacau.",
        "Di tengah kekacauan itu, mereka bertemu Samjo, perwakilan datar dan tak berperasaan dari Departemen Pengembangan Sumber Daya Pangan K Corp, yang mewakili manajer restoran waralaba 'Bodhisattva Chicken'. Bisnis waralaba itu sedang diteror sebuah 'monster' di jalanan sekitar, dan mereka meminta LCB turun tangan."
      ]},
      { h:"Distortion di Balik Resep Curian", p:[
        "Monster itu ternyata pemilik Eunbong's Bar & Fryers — warung ayam goreng tradisional kecil, saingan Bodhisattva Chicken — yang telah jatuh dalam Distortion. Faust menjelaskan: Distortion terjadi ketika keputusasaan seseorang melewati batas terakhirnya, mengubahnya jadi sesuatu yang nyaris tak lagi punya kendali penuh atas dirinya sendiri.",
        "Penyebabnya terungkap: manajer Bodhisattva Chicken mencuri resep rahasia Eunbong, lalu membakar seluruh jejaknya lewat 'Concept Incinerator' — alat yang tak cuma menghancurkan benda, tapi menghapus keberadaannya dari ingatan dan kenyataan sekaligus. Yang tak disadari sang manajer: resep itu terikat erat ke kenangan masa kecil pemilik Eunbong tentang ibunya — dan penghapusan itulah yang benar-benar meremukkannya."
      ]},
      { h:"Kompetisi Memasak", p:[
        "Karena Distortion cuma bisa 'diurai' lewat cara yang disetujui hati orang yang terdistorsi, Faust memutuskan solusinya: kompetisi memasak. Gregor dan Ryoshu memulai kompetisi lewat pertengkaran kecil mereka, masakan Meursault jadi yang paling mendekati enak, sementara Don Quixote dan Yi Sang tampil buruk di salah satu ronde.",
        "Justru masakan Outis-lah yang akhirnya berhasil menembus hati sang pemilik yang terdistorsi, menyeret semua orang ke dalam visi kenangannya — masa kecilnya dimarahi sang ibu, dengan sebuah pintu yang mengarah lebih dalam ke ingatan itu."
      ]},
      { h:"Ayam yang Ternyata Bukan Ayam", p:[
        "Titik baliknya datang lewat kesadaran yang absurd sekaligus menyentuh: kupon yang selama ini dia kira kupon ayam dari ibunya — yang jadi dasar seluruh identitas dan kenangannya — ternyata kupon pizza. Ibunya tak pernah benar-benar suka ayam. Kesalahpahaman kecil itulah yang akhirnya memecah Distortion-nya, dan dia kembali normal.",
        "Sebagai penutup anti-klimaks: pemilik yang sudah pulih memberi LCB sebuah kotak hadiah — yang isinya cuma boneka maskot restoran yang tak pernah benar-benar diproduksi."
      ]}
    ],
    quote:"“Selama ini kukira ibu suka ayam. Ternyata dia cuma suka pizza.”",
    song:null, songNote:null,
    philosophy:[
      "Intervallo ini secara sengaja jadi jeda komedik — 'penawar rasa' di antara trauma Calw (Canto III) dan beban psikologis Canto IV. Tapi di balik leluconnya, ada mekanisme yang cukup gelap: 'Concept Incinerator' tidak cuma menghancurkan benda, tapi menghapus <strong>ingatan dan bukti bahwa sesuatu pernah ada</strong> — cara yang lebih senyap (dan dengan caranya sendiri, lebih kejam) untuk melenyapkan seseorang dibanding kekerasan fisik yang biasa mewarnai Canto-Canto utama.",
      "Judulnya sendiri — 'Hell's Chicken' — kemungkinan besar pelesetan dari acara TV 'Hell's Kitchen', menegaskan nada satirnya. Di baliknya ada sindiran ringan soal korporasi besar (didukung Wing K Corp) yang mencuri resep usaha kecil independen lalu menghapus jejaknya demi mematikan saingan — gema kecil dari tema kekuasaan korporat yang ditangani jauh lebih serius di Canto III sebelumnya (Inkuisisi K Corp yang meluluhlantakkan Calw).",
      "Tapi inti emosionalnya justru ada di absurditas kenangan yang keliru: seluruh keputusasaan sang pemilik warung dibangun di atas ingatan yang ternyata salah sejak awal — ibunya tak pernah suka ayam. Pertanyaan kecil namun jujur soal <strong>seberapa jauh identitas dan duka kita dibangun dari kenangan yang bahkan mungkin tak akurat</strong>.",
      "Belum ada tema musik Mili yang terverifikasi untuk chapter ini (kemungkinan besar temanya digarap Studio EIM, bukan Mili) — jadi tidak dicantumkan di sini sampai ada sumber yang bisa dipastikan."
    ]
  },
  {
    id:"canto4", num:"CANTO IV", title:"The Unchanging", focus:"Fokus: Yi Sang · N Corp Laboratory",
    accent:"#c9a24b", image:"images/yisang.png", sigil:"🕊",
    sections:[
      { h:"Serangan TLA", p:[
        "LCB menuju laboratorium K Corp untuk mengklaim Golden Bough sesuai kontrak. Sesampainya, mereka bertemu Dongrang, Manajer Cabang K Corp — kenalan lama Yi Sang. Tiba-tiba, gedung diserang teroris 'Technology Liberation Alliance' (TLA) yang membajak gedung dan mesin-mesinnya, memaksa penjaga K Corp menyerang balik LCB."
      ]},
      { h:"Kematian Dongbaek", p:[
        "Dongbaek, pemimpin TLA sekaligus mantan rekan (dan rival) Dongrang dari League of Nine lama, mulai terdistorsi saat diprovokasi/dimarahi Dongrang atas kegagalannya — tetapi alih-alih terdistorsi penuh, dia justru mendapat E.G.O personal dan terus melawan para Sinner. Setelah kalah lagi, Dongrang membunuhnya sendiri menggunakan Golden Bough yang dia jatuhkan — mengklaim ini sebagai 'tindakan belas kasihan', karena N Corp dan Gubo sedang membangun League of Nine baru, membunuh anggota lama yang menolak bergabung."
      ]},
      { h:"League of Nine Littérateurs", p:[
        "Golden Bough beresonansi dengan Yi Sang, membuat gedung itu terdistorsi — semua penjaga K Corp dan anggota TLA dibangkitkan sebagai zombie tanpa kesadaran. Para Sinner bertarung menerobos mereka sampai mencapai gerbang menuju dungeon berbasis ingatan Yi Sang tentang League of Nine Littérateurs — kelompok lama rekan-rekannya dari S Corp. Para Sinner dipaksa memerankan anggota-anggota lain kelompok itu untuk maju.",
        "Terungkap selama 'pertunjukan' ini: Yi Sang-lah yang menciptakan 'Cermin' — teknologi yang bisa mengintip dunia lain, dasar sistem Identity LCB. Setelah League of Nine bubar, Yi Sang jatuh dalam duka mendalam, putus asa, dan kesepian, jadi cenderung pasif, lebih mudah mengikuti keinginan orang lain daripada memutuskan untuk dirinya sendiri."
      ]},
      { h:"Titik Terendah", p:[
        "Dongbaek menikam dada Yi Sang dengan Golden Bough sebelum pergi. Terungkap tingkat rendahnya harga diri Yi Sang — ketika ditanya Dante soal perasaannya, Yi Sang mengaku bahwa hari dia bertemu Dante dan mendapat keabadian secara paksa adalah momen keputusasaan terbesarnya, diam-diam berharap bisa beristirahat abadi. Dante beresonansi dengan kondisi mental Yi Sang, melihat ada lubang besar yang retak di dadanya, tanpa tanda-tanda sembuh.",
        "Dongrang, di sisi lain, memutuskan rela menghancurkan masa lalunya demi maju dengan pencapaiannya, menyatakan niat membunuh Yi Sang agar bisa melupakan diri masa lalunya."
      ]},
      { h:"Memanifestasikan Sayap", p:[
        "Hong Lu meminta Dante mengonfrontasi perasaan Yi Sang secara langsung. Dante bertanya apa yang dirasakan Yi Sang tepat sebelum meninggalkan N Corp — dan Yi Sang mengakui perasaan secercah harapan bahwa dia akan menemukan tempat di mana dia benar-benar diterima, mengenang saat Faust merekrutnya ke Limbus Company.",
        "Dia dihibur Dongbaek yang kembali sekali terakhir, mengatakan bahwa Cermin menyimpan segala kemungkinan, dan dia baru sadar kemungkinan itu sudah dalam jangkauan. Sang Yi — versi 'ideal'-nya — kemudian menghiburnya dengan gagasan bahwa sayap yang selama ini dia iri miliki orang lain sebenarnya selalu jadi miliknya sendiri, dan memintanya untuk terbang.",
        "Yi Sang akhirnya memanifestasikan sayapnya sendiri — titik balik terbesarnya, dari seseorang yang pasif dan putus asa, menjadi seseorang yang memilih hidup demi idealnya sendiri."
      ]}
    ],
    quote:"“Sayap yang selama ini kau iri miliki orang lain — selalu menjadi milikmu sendiri.”",
    song:"Fly, My Wings", songNote:"Dimainkan tepat di momen Yi Sang memanifestasikan sayapnya.",
    videoId:"_PSjoVXFGAQ",
    philosophy:[
      "Namanya sendiri, dalam bahasa Korea, punya makna ganda: 'Yi Sang' berarti <strong>'ideal'</strong>, tapi juga terdengar seperti <strong>'aneh/ganjil'</strong> — cara dunia memandang orang yang keras kepala mempertahankan idealismenya. Karakter ini terinspirasi dari penulis Korea asli bernama Kim Hae-Gyeong, dengan nama pena 'Yi Sang', dikenal lewat karya penuh alienasi eksistensial.",
      "Sang Yi — versi 'ideal' dari dirinya sendiri — menghadirkan kritik filosofis yang tajam: apakah mencapai <strong>versi sempurna dari diri kita</strong> justru bisa berarti kehilangan empati dan koneksi kemanusiaan? Sang Yi sukses secara materi tapi apatis terhadap penderitaan orang lain — sebuah peringatan bahwa 'ideal' yang dikejar tanpa hati bisa jadi penjara baru, bukan pembebasan.",
      "Lagu 'Fly, My Wings' dimainkan tepat di momen dia berhenti menunggu izin dari siapa pun untuk terbang. Temanya selaras sempurna dengan filosofi Camus tentang absurd hero — bukan menunggu dunia jadi adil dulu baru bertindak, tapi memilih untuk terbang <strong>meski</strong> dunia belum siap menerimamu. Sayap itu bukan hadiah dari luar; ia selalu ada, menunggu diakui sebagai milik sendiri."
    ]
  },
  {
    id:"canto5", num:"CANTO V", title:"The Evil Defining", focus:"Fokus: Ishmael · Great Lake, Paus Pucat",
    accent:"#2f7d78", image:"images/ishmael.png", sigil:"🐋",
    sections:[
      { h:"Menyeberangi Great Lake", p:[
        "Dengan Mephistopheles kini bisa berlayar, para Sinner menyeberangi Great Lake mencari Golden Bough. Ishmael, yang sejak insiden sebelumnya menolak kembali ke danau ini, sempat menolak bekerja sama kecuali diperintah langsung. Sinner lain kesulitan mempelajari 'Hukum Great Lake', nyaris celaka beberapa kali menghadapi paus dan duyung penghuni perairan itu. Di sela ini, Dante menemukan kekuatan baru dari jam prostetiknya: kemampuan melihat ke dalam pikiran dan keinginan orang lain."
      ]},
      { h:"Di Dalam Paus Pucat", p:[
        "Agen LCCB yang selamat mengungkap bahwa gedung L Corp awalnya diambil alih Bajak Laut Twinhook, sebelum mereka meninggalkannya karena diserang Calamity bernama 'Paus Pucat' yang menelan seluruh gedung. Di dalam Paus itu, para Sinner diselamatkan dari dicerna oleh manusia-manusia yang setengah-terpalidifikasi — beberapa kru lama Ishmael — dipimpin mantan kaptennya sendiri, Ahab. Ahab menawarkan kesepakatan: bantu dia mencapai jantung Paus itu, dan dia akan membiarkan dirinya dibunuh Ishmael."
      ]},
      { h:"Bayangan Ahab", p:[
        "Ahab, kapten Pequod, terobsesi memburu Paus Pucat, meyakininya sebagai 'sumber segala kejahatan'. Karismanya membangun kru yang setia penuh, termasuk Ishmael dulunya. Ahab kembali mencoba gaslighting Ishmael, mengklaim kegagalan mereka jatuh ke manipulasinya adalah salah Ishmael sendiri. Ishmael berhasil memukul mundur, tetapi mulai tergerus keraguan diri, Palidifikasi mulai menguasai seluruh tubuhnya.",
        "Heathcliff merobek membran yang menyelimutinya dan menariknya keluar, memungkinkan Ishmael berbicara sekali lagi dengan Queequeg, sahabat dekatnya, sebelum si pelaut hancur menjadi debu."
      ]},
      { h:"Memilih Jalan Sendiri", p:[
        "Ishmael bertekad akhirnya menghabisi Ahab, tetapi Dante turun tangan mengingatkan bahwa Ishmael harus menentukan takdirnya sendiri. Ahab justru senang atas tekad Ishmael membunuhnya, mengklaim mereka berdua 'sama' karena sama-sama terobsesi dendam.",
        "Ishmael teringat masa lalunya — dulu dia ingin menjadi seperti Ahab, dan kehilangan arah dalam prosesnya — tetapi sekarang sadar dia ingin membangun jalannya sendiri bersama Dante dan Limbus Company, bukan mengikuti jejak Ahab. Ishmael berhasil mematahkan senjata Ahab, dan hampir terpalidifikasi sendiri sebelum diselamatkan Heathcliff. Dante akhirnya meyakinkan Ishmael untuk tidak membunuh Ahab, melainkan menyerang hadiah buruannya: Paus Pucat itu sendiri."
      ]},
      { h:"Penutup", p:[
        "Ahab dibiarkan bergumam sendiri tentang delusinya, sampai Hermann menemukannya, menawarinya kesempatan memburu lebih banyak Paus Pucat di dunia-dunia cermin lain. Ishmael, yang telah keluar dari pekerjaannya sebagai Fixer, akhirnya melepaskan dendamnya dan memilih jalannya sendiri."
      ]}
    ],
    quote:"“Aku pernah ingin menjadi sepertimu. Sekarang aku hanya ingin menjadi diriku.”",
    song:"Compass", songNote:"Mengiringi konfrontasi Ishmael melawan Ahab di jantung Paus Pucat.",
    videoId:"92E0X59wzeg",
    philosophy:[
      "Canto ini adalah retelling langsung dari 'Moby-Dick' karya Herman Melville — Ahab yang terobsesi memburu paus putih sebagai personifikasi 'kejahatan', dan Ishmael sebagai narator yang nyaris terseret ikut dalam obsesi itu. Filosofisnya, Ahab merepresentasikan bahaya menjadikan satu objek/musuh sebagai <strong>penjelasan tunggal atas semua penderitaan</strong> — sebuah kesalahan logis yang membuatnya kehilangan kemanusiaan demi 'kemenangan' yang bahkan tidak akan menyembuhkan apa pun.",
      "Ini langsung terhubung ke kritik yang relevan dengan banyak karakter lain di Limbus Company (echo dari Ahab sendiri, Otto di HI3, atau Kromer di Canto III): <strong>obsesi terhadap satu sumber 'kejahatan' seringkali adalah cara menghindar dari kompleksitas penderitaan yang sebenarnya berlapis-lapis</strong>, bukan tunggal.",
      "Judul lagu 'Compass' (kompas) sendiri jadi metafora sentral: Ishmael menyadari kompas moralnya selama ini diarahkan oleh Ahab, bukan oleh dirinya sendiri. Titik baliknya bukan mengalahkan Ahab, melainkan <strong>mengambil kembali kompas itu</strong> — memilih arah hidupnya sendiri alih-alih terus mengikuti arah yang ditentukan orang yang pernah dia kagumi."
    ]
  },
  {
    id:"canto6", num:"CANTO VI", title:"The Heartbreaking", focus:"Fokus: Heathcliff · Wuthering Heights, T Corp",
    accent:"#6b3d6b", image:"images/heathcliff.png", sigil:"🥀",
    sections:[
      { h:"Kembali ke Wuthering Heights", p:[
        "LCB tiba di kawasan T Corp tanpa insiden. Dalam perjalanan, mereka melihat seorang pria dikeroyok geng yang kehabisan 'waktu', dan belajar banyak orang menghilang — dicurigai penculikan massal oleh sebuah Syndicate. Heathcliff mengungkap dia dulu dibawa ke Wuthering Heights sebagai pelayan, dianiaya oleh hampir semua orang kecuali Catherine, karena dia lahir di Backstreets.",
        "Sebelum turun dari bus, Rodion dan Hong Lu mendandani Heathcliff dengan pakaian mewah agar terlihat pantas di hadapan Catherine — jeda komedik di tengah cuaca ekstrem yang menyambar setiap kali Heathcliff menyebut masa lalunya di sana."
      ]},
      { h:"Kabar Kematian Catherine", p:[
        "Mereka disambut kepala pelayan Nelly, yang memperkenalkan tamu lain: Linton (didukung staf keluarga Edgar) dan Hindley (didukung Dead Rabbits, Syndicate lama Heathcliff). Setelah pertukaran kata-kata pedas, Heathcliff mengetahui dari Nelly dan Linton bahwa Catherine menikahi Linton tak lama setelah Heathcliff pergi. Lalu berita yang lebih buruk: Catherine telah meninggal, dan Heathcliff hadir dalam pembacaan wasiatnya.",
        "Heathcliff menolak percaya, meminta melihat jasadnya, bersikeras dia mendengar suaranya saat tiba. Dihantam duka, dia berteriak memanggilnya — memicu petir pertama menyambar dan kediaman itu mulai bereaksi secara supernatural."
      ]},
      { h:"Wild Hunt", p:[
        "Muncul Erlking Heathcliff — versi Heathcliff dari dunia cermin lain, dipenuhi dendam gila, bertekad membunuh setiap versi Heathcliff karena percaya merekalah penyebab kesengsaraan Catherine. Dia dipanggil oleh Nelly, yang ingin membebaskan dirinya sendiri dari belenggu Wuthering Heights.",
        "Para Sinner terjebak dalam 'Wild Hunt' (perburuan liar supernatural), dan Vergilius muncul menahannya — meski itu melanggar kontraknya dengan Limbus Company, dia tetap turun tangan demi menyelamatkan mereka."
      ]},
      { h:"Kehilangan yang Diterima", p:[
        "Dua Golden Bough terlibat dalam plot ini, tetapi kali ini tim tidak mendapatkan keduanya dalam kondisi utuh — satu hancur sepenuhnya. Catherine dihapus dari seluruh eksistensi, memastikan dia tidak akan pernah bisa bersama Heathcliff. Meski begitu, garis waktu berhasil diselamatkan, dan Heathcliff dan Catherine akhirnya berhasil saling mengungkapkan perasaan mereka sebelum dia terhapus.",
        "Heathcliff, meski kehilangan Catherine secara permanen, memilih menegakkan kepalanya, bertekad suatu cara akan mendapatkannya kembali — alih-alih tenggelam dalam keputusasaan. Sepanjang Canto ini, dia terus-menerus direndahkan, dituduh sebagai 'anjing kampung yang tak akan pernah berubah' — tapi ironisnya, justru orang-orang di sekitarnya yang tidak pernah benar-benar berubah, sementara Heathcliff sendiri berkembang signifikan."
      ]}
    ],
    quote:"“Aku akan menemukanmu lagi — dengan caraku sendiri.”",
    song:"Through Patches of Violet", songNote:"Duet dua suara yang tak pernah selaras, sampai fase terakhir mereka menyatu.",
    videoId:"G_JfKOjwzwo",
    philosophy:[
      "Struktur vokal lagu ini adalah bagian dari maknanya, bukan cuma cara penyajian. Meski terdengar seperti duet, satu vokalis (Cassie Wei) menyanyikan kedua part — suara dalam untuk Heathcliff, suara tinggi untuk Catherine — dan sepanjang sebagian besar lagu, keduanya <strong>bernyanyi bergantian, tidak pernah bersamaan</strong>. Baru di fase terakhir, dua suara itu menyatu.",
      "Ini secara harfiah mensimulasikan tema judul Canto ini dalam bahasa aslinya: 'kesalahsejajaran' (misalignment). Heathcliff dan Catherine menjalani hidup berdampingan tapi tidak pernah benar-benar selaras — jurang kelas sosial, kesalahpahaman, dan kebanggaan masing-masing memisahkan mereka terus-menerus. Liriknya sendiri berisi pengakuan penyesalan dari kedua sisi: penderitaan yang mereka timbulkan satu sama lain, kontras antara 'canggung' dan 'tulus' yang mencerminkan jurang kelas itu.",
      "Filosofisnya, ini adalah eksplorasi tentang <strong>keterlambatan sebagai bagian tak terpisahkan dari cinta manusia</strong> — momen paling jujur dan paling harmonis dalam hubungan mereka baru bisa terjadi tepat sebelum salah satu dari mereka lenyap selamanya. Bukan berarti kejujuran itu sia-sia karena datang terlambat — justru sebaliknya, itu menegaskan bahwa kejujuran tetap bernilai, bahkan ketika tidak bisa lagi mengubah nasib."
    ]
  },
  {
    id:"canto7", num:"CANTO VII", title:"The Dream Ending", focus:"Fokus: Don Quixote · La Manchaland, P Corp",
    accent:"#b0632e", image:"images/donquixote.png", sigil:"🗡",
    sections:[
      { h:"Urban Nightmare", p:[
        "LCB tiba di P Corp setelah insiden kereta WARP. Dante diinterogasi soal kejadian itu, tetapi diselamatkan kabar misi baru dari Vergilius — operasi kelompok bersama berbagai Fixer lain. Kepala Departemen Arsip P Corp, Cesara, menjelaskan tentang kasus 'Urban Nightmare' bernama 'La Manchaland' yang sporadis muncul di Backstreets District 16, memikat warga dan menyebabkan banyak kasus orang hilang."
      ]},
      { h:"Sancho, Bukan Don Quixote", p:[
        "Terungkap bahwa 'Don Quixote' yang selama ini dimainkan sebenarnya bernama Sancho — mengambil nama ayahnya sendiri. Don Quixote asli adalah seorang Bloodfiend Kindred Pertama, pendiri La Manchaland, unik di antara para Bloodfiend karena ingin hidup damai berdampingan dengan manusia.",
        "Saat mendengar serangan di dalam La Manchaland, Don Quixote dan Sancho kembali, dan Don Quixote yang muak dengan kekerasan itu memberikan sepatunya, Rocinante, kepada Sancho — tindakan yang menyegel sesuatu yang signifikan bagi karakternya."
      ]},
      { h:"Monster Knight", p:[
        "Saat memori Sancho pulih sepenuhnya dalam pertarungan, dia justru kembali jatuh dalam keputusasaan, menyatakan tidak mungkin pernah hidup damai bersama manusia, kembali mengambil posisinya sebagai Monster Knight, pelindung La Manchaland — menyatakan dia harus membunuh Sinner lain demi melindungi 'keluarga' Bloodfiend-nya.",
        "Pertarungan ini bukan soal mengalahkannya, tetapi membuatnya cukup diam untuk menyadari bahwa dia sebenarnya tidak ingin melakukan ini dan benar-benar peduli pada Limbus Company — sampai akhirnya memilih memberi kematian belas kasihan pada La Manchaland itu sendiri."
      ]},
      { h:"Penutup", p:[
        "Golden Bough diambil dari tubuh Don Quixote (ayahnya), dan jasadnya diambil P Corp. Faust menyatakan akan mengambil tanggung jawab penuh kalau-kalau Sancho mengetahui sepenuhnya rencana P Corp terhadap ayahnya.",
        "Kembali ke bus, Sancho — sekarang dengan sukarela mengambil nama Don Quixote — meminta manajernya untuk tersenyum, masih ingin berpegang teguh pada mimpi itu. Malam itu, wajah jam Dante bergerak lebih dekat ke arah 'tengah malam' — detail kecil yang mengisyaratkan sesuatu yang lebih besar sedang berjalan di latar belakang.",
        "Post-credit: Sansón berbicara dengan Demian soal usahanya membuat Don Quixote menghadapi masa lalunya — keduanya tampak berbagi tujuan yang sama, menantikan sisa misi Limbus Company."
      ]}
    ],
    quote:"“Mimpi yang mustahil pun layak diperjuangkan, selama ada yang menemanimu mengejarnya.”",
    song:"Hero", songNote:"Tentang hancurnya sebuah mimpi — dan keberanian untuk bangkit mengejarnya lagi.",
    videoId:"ZuifkacZ0TA",
    philosophy:[
      "Referensi ke novel 'Don Quixote' karya Cervantes di sini dibalik secara cerdas: bukan Don Quixote asli yang jadi protagonis utama, melainkan Sancho — yang mengambil nama dan mimpi ayahnya. Ini mengangkat pertanyaan filosofis soal <strong>identitas yang diwariskan versus identitas yang dipilih sendiri</strong>. Sancho awalnya memakai nama itu bukan karena dia benar-benar mempercayainya, tapi karena itu satu-satunya hal yang tersisa dari ayahnya.",
      "Novel asli Cervantes sendiri adalah satir tentang seorang pria yang membaca terlalu banyak kisah kesatria sampai kehilangan pijakan pada realita — tapi Limbus Company membalik pembacaan itu jadi lebih simpatik: <strong>mungkin memilih terus percaya pada mimpi yang 'mustahil', meski dunia bilang itu delusi, adalah bentuk keberanian, bukan kegilaan.</strong>",
      "Judul lagu 'Hero' terasa ironis sekaligus tulus: Sancho bukan pahlawan dalam pengertian konvensional (tidak ada monster besar yang dikalahkan demi menyelamatkan dunia), tapi dia jadi pahlawan bagi dirinya sendiri — dengan sadar memilih mengangkat kembali nama dan mimpi itu, bukan karena terpaksa mewarisi, melainkan karena akhirnya benar-benar meyakininya. Lagu ini merayakan momen ketika kewajiban berubah jadi pilihan."
    ]
  },
  {
    id:"canto8", num:"CANTO VIII", title:"The Surrendered Witnessing", focus:"Fokus: Hong Lu · District 8, H Corp",
    accent:"#3d7d4f", image:"images/honglu.png", sigil:"👁",
    sections:[
      { h:"Retaknya Aliansi", p:[
        "Pagi setelah insiden Intervallo V, para Sinner melanjutkan perjalanan bersama Jia Xichun (adik Hong Lu), Wei, Pilot, dan Saude. Xichun menegaskan dia merasa dikhianati karena LCB menarik kembali tawaran bantuan mereka dalam 'perang' evaluasi Kepala Keluarga. Ketika Hong Lu tetap patuh pada keputusan perusahaan, Xichun secara resmi mengakhiri aliansi mereka, mengkritik apa yang dia anggap ketiadaan kehendak bebas Hong Lu, lalu pergi bersama Wei."
      ]},
      { h:"Evaluasi Kepala Keluarga", p:[
        "Kelompok berangkat menuju babak pertama evaluasi di stadion Tubitang, tempat kontestan harus mempresentasikan jawaban atas pertanyaan 'bagaimana mencapai keabadian' di hadapan tiga juri: Jia Mu, Jia Zheng, dan Jia Yuanchun (kakak perempuan Hong Lu). Banyak kontestan gagal dan jatuh hingga tewas.",
        "Jia Huan (kakak Hong Lu) kembali muncul bersama rekan kerjanya Gubo — mempresentasikan Abnormality sebagai kunci keabadian mereka."
      ]},
      { h:"'Giok' Keluarga H Corp", p:[
        "Backstory Hong Lu terungkap bertahap: dia adalah 'giok' milik H Corp — mata hijaunya sebenarnya kamera yang memungkinkan para tetua abadi menyaksikan dunia, karena mereka gemar melihat tragedi sebagai hiburan. Trauma terbesarnya: pembantaian keluarga Kong oleh Cuckoospawn, lalu Claws — semuanya direncanakan Jia Mu, dan Hong Lu mengetahuinya sebelumnya tapi tak mampu menghentikannya. Pengalaman tak berdaya itu membuatnya menekan seluruh emosi demi 'tak akan pernah terluka lagi'."
      ]},
      { h:"Pertempuran Berlapis", p:[
        "Di babak berikutnya, muncul berbagai faksi yang saling bertarung: pemberontakan keluarga Xue dan Shi melawan calon Hierarch Jia Xichun, kelompok 'The Thumb' yang ingin merebut Wing dengan membunuh Jia Xichun, dan New League of Nine dari N Corp yang ingin merebut cacing Xianhuang yang ditanam di tubuh Jia Xichun — dengan Jia Huan dan Gubo di garis depan.",
        "Tujuan LCB sebenarnya adalah finis di posisi kedua agar mendapat kesempatan pertama memilih harta dari brankas Xianren. Karena niat asli Jia Qiu adalah membuat Hong Lu mengungkapkan keyakinannya sendiri, dia dengan sukarela menyerahkan koinnya, meyakinkan Jia Huan mengundurkan diri — ironisnya membuat para Sinner jadi posisi pertama. Mereka memutuskan memberikan cukup koin ke Xichun agar dia jadi posisi pertama, persis seperti diantisipasi Jia Qiu."
      ]},
      { h:"Cruel Mercy", p:[
        "Ini disebut sebagai salah satu ending paling positif di antara semua Canto sejauh ini: Hong Lu berhasil menghadapi masa lalunya, menyelamatkan Xichun, dan akhirnya berani melawan Jia Mu serta para Tetua dengan memberi mereka 'Cruel Mercy' — mencegah potensi perang besar di H Corp dan membalaskan dendam keluarga Kong. Hong Lu, meski hanya finis di posisi kedua, ini menandai langkah signifikan menuju kemampuannya menentukan nasib sendiri."
      ]}
    ],
    quote:"“Menyaksikan dalam diam bukanlah kedamaian — hanya penundaan dari rasa sakit yang sama.”",
    song:"Tian Tian", songNote:"Menyertai proses Hong Lu menghadapi ingatan-ingatan yang selama ini dia bisukan.",
    videoId:"szyPY8nbBF4",
    philosophy:[
      "Hong Lu merepresentasikan sebuah pola psikologis yang sangat nyata: <strong>penekanan emosi total sebagai respons terhadap ketidakberdayaan menyaksikan kekejaman</strong>. Dia tahu pembantaian keluarga Kong akan terjadi, tapi tidak berdaya mencegahnya — dan alih-alih menghadapi rasa bersalah serta duka itu, dia memilih menumpulkan semua perasaannya demi 'tidak akan pernah terluka lagi'.",
      "Ini kritik filosofis yang tajam terhadap gagasan bahwa <strong>kepasifan sama dengan kedamaian</strong>. Menyaksikan dalam diam mungkin terasa aman secara emosional jangka pendek, tapi Canto ini menunjukkan itu justru menunda rasa sakit yang sama, bukan menghilangkannya — dan yang lebih penting, kepasifan itu secara tidak sengaja membiarkan siklus kekerasan (yang direncanakan Jia Mu) terus berulang tanpa dilawan.",
      "'Tian Tian' menyertai proses Hong Lu akhirnya menghadapi ingatan yang selama ini dia bisukan — sebuah lagu yang menemani transisi dari 'saksi yang pasrah' jadi seseorang yang berani bertindak, memberi 'Cruel Mercy' pada dalang sebenarnya di balik penderitaan keluarganya. Temanya selaras dengan gagasan bahwa keberanian sejati kadang bukan soal tidak takut, tapi soal akhirnya bertindak meski ketakutan itu masih ada."
    ]
  },
  {
    id:"canto9", num:"CANTO IX", title:"The Unsevering", focus:"Fokus: Ryoshu · Markas Limbus Company",
    accent:"#8a2e2e", image:"images/ryoshu.png", sigil:"🖌",
    sections:[
      { h:"Serangan ke Markas", p:[
        "Setelah berpamitan dengan Hongyuan, LCB mendapati diri mereka diserang di dalam markas Limbus Company sendiri — musuh berasal dari aliansi aneh dan berbahaya antara Five Fingers, mengincar sesuatu yang penting. Para Sinner bergegas kembali ke markas lewat Backdoor, sementara ingatan Ryoshu yang termutilasi mulai terungkap."
      ]},
      { h:"Ryoshu dan Legenda Hell Screen", p:[
        "Ryoshu — digambarkan sebagai 'sinner tergelap, tapi punya lagu paling lembut' — terinspirasi dari pelukis Yoshihide dalam cerita klasik Jepang 'Hell Screen' (Jigokuhen): pelukis yang rela membiarkan hal mengerikan terjadi, bahkan pada orang yang dicintai, demi menciptakan karya seni sempurna.",
        "Cerita ini mengungkap Ryoshu meratapi kehilangan seluruh masa kecilnya, tetapi tetap berpegang pada satu-satunya benang yang tersisa: putrinya, Araya."
      ]},
      { h:"Permintaan Maaf Rien", p:[
        "Di sisi lain, Rien — di detik-detik terakhirnya — sadar betapa dia telah menjadi monster akibat 'Prescripts' (doktrin/aturan) yang membentuknya, dan meminta maaf ke Ryoshu atas jarak yang dulu dia ciptakan di antara mereka."
      ]},
      { h:"Reuni di Ambang Kehilangan", p:[
        "Momen puncaknya terjadi ketika Araya berubah menjadi sarung pedang untuk katana Ryoshu — transformasi yang menyiratkan pengorbanan besar — dilanjutkan pertarungan final melawan Rien.",
        "Tema paling kuat dari Canto ini: pengakuan bahwa menjauh atau mengorbankan diri 'demi kebaikan orang lain' sebenarnya adalah jalan yang gampang, dan ketiadaan tidak pernah benar-benar mengubah fakta yang telah terjadi. Rien secara eksplisit mengakui kesalahannya memilih menjauh alih-alih tetap hadir secara genuine, dan memohon pengampunan di akhir.",
        "Canto ini menandai rekonsiliasi menyakitkan antara Ryoshu dan orang-orang yang dia cintai — sebuah 'reuni' yang ironisnya baru terjadi di ambang kehilangan."
      ]}
    ],
    quote:"“S is not for sayonara. Will you forgive me at last?”",
    song:"Saikai", songNote:"‘Reuni’ — pengakuan dan permintaan maaf yang datang terlambat, namun tetap bermakna.",
    videoId:"h0djuhl97Kw",
    philosophy:[
      "Ryoshu terinspirasi dari pelukis Yoshihide dalam legenda Jepang 'Hell Screen' — sosok yang rela membiarkan hal mengerikan terjadi, bahkan pada orang tercinta, demi menciptakan karya seni sempurna. Ini mengangkat pertanyaan filosofis tentang <strong>harga dari obsesi terhadap kesempurnaan</strong>: berapa banyak kemanusiaan yang boleh dikorbankan atas nama pencapaian yang sempurna?",
      "'SAIKAI' (再会) secara harfiah berarti <strong>'reuni'</strong> dalam bahasa Jepang. Liriknya membawa pesan paling tajam dari seluruh soundtrack Limbus Company: pengakuan bahwa <strong>'pengorbanan adalah jalan yang gampang'</strong> — menjauh atau menghilang 'demi kebaikan orang lain' sebenarnya sering kali adalah pelarian dari kerja yang jauh lebih sulit, yaitu kehadiran yang jujur dan rentan. Ketiadaan tidak pernah benar-benar mengubah fakta yang sudah terjadi.",
      "Ini kritik langsung terhadap apa yang sering disebut 'martyr complex' — self-sacrifice yang terlihat mulia dari luar, tapi sebenarnya menghindari tanggung jawab emosional yang lebih berat. Rien, dalam permintaan maafnya, mengakui inilah kesalahannya: memilih jarak alih-alih hadir. Judul 'reuni' jadi ironis sekaligus indah — pertemuan paling jujur justru datang di ambang perpisahan permanen, echo dari pola yang konsisten muncul di banyak karakter tragis: kejujuran emosional paling murni sering baru muncul ketika sudah terlambat, tapi itu tidak membuatnya jadi kurang bermakna."
    ]
  }
]

const PERSONS = [
  { name:"Dante", desc:"Executive Manager LCB. Kehilangan ingatan dan kepalanya sendiri (digantikan jam prostetik) demi melindungi rahasia yang belum terungkap. Identitas aslinya adalah misteri terbesar cerita.", cantos:["prologue"], profileKey:"dante" },
  { name:"Vergilius", desc:"Fixer sangat kuat yang menyelamatkan Dante dan menjadi pemandu LCB. Terikat kontrak yang mencegahnya ikut campur dalam misi — kecuali situasi ekstrem.", cantos:["prologue","canto6"] },
  { name:"Faust", desc:"Sinner pertama yang bergabung dengan Limbus Company, paling misterius dari 12 Sinner. Diduga menyimpan rahasia besar terkait asal-usul bus Mephistopheles.", cantos:["prologue"] },
  { name:"Gregor", desc:"Sinner berwujud sebagian serangga, mantan alat propaganda Old G Corp. Referensi langsung ke 'The Metamorphosis' karya Kafka.", cantos:["canto1"], profileKey:"canto1" },
  { name:"Hermann", desc:"Antagonis berulang yang memimpin kelompok pesaing pemburu Golden Bough. Dulu melakukan operasi paksa terhadap Gregor semasa kecil.", cantos:["canto1","canto3","canto5","canto7"] },
  { name:"Rodion", desc:"Salah satu pendiri organisasi Yurodiviye (bersama Sonya) yang meninggalkan kelompoknya setelah membunuh rentenir korup. Namanya merujuk ke Raskolnikov dari 'Crime and Punishment'.", cantos:["canto2"], profileKey:"canto2" },
  { name:"Sonya", desc:"Salah satu pendiri Yurodiviye bersama Rodion, teman lama Rodion. Diam-diam punya kesepakatan dengan Hermann soal Golden Bough.", cantos:["canto2"] },
  { name:"Sinclair", desc:"Sinner dari Calw, trauma soal budaya penggantian tubuh penuh yang dipaksakan keluarganya.", cantos:["canto3"], profileKey:"canto3" },
  { name:"Kromer", desc:"Teman masa kecil Sinclair yang memanipulasi kepercayaannya, akhirnya bermutasi jadi Distortion mengerikan.", cantos:["canto3"] },
  { name:"Yi Sang", desc:"Peneliti pencipta teknologi 'Cermin', pernah jadi bagian League of Nine Littérateurs. Namanya berarti 'ideal' sekaligus 'ganjil' dalam bahasa Korea.", cantos:["canto4"], profileKey:"canto4" },
  { name:"Dongrang", desc:"Manajer Cabang K Corp, kenalan lama Yi Sang yang rela menghancurkan masa lalunya demi ambisi.", cantos:["canto4"] },
  { name:"Ishmael", desc:"Mantan kru kapal Pequod, narator peristiwa Paus Pucat. Terinspirasi 'Moby-Dick' karya Melville.", cantos:["canto5"], profileKey:"canto5" },
  { name:"Ahab", desc:"Mantan kapten Ishmael, terobsesi memburu Paus Pucat sebagai 'sumber segala kejahatan'.", cantos:["canto5"] },
  { name:"Heathcliff", desc:"Sinner dari Wuthering Heights, dianiaya karena lahir di Backstreets. Kisah cintanya dengan Catherine berakhir tragis.", cantos:["canto6"], profileKey:"canto6" },
  { name:"Catherine", desc:"Cinta masa kecil Heathcliff, menikahi Linton, akhirnya dihapus dari eksistensi demi menyelamatkan garis waktu.", cantos:["canto6"] },
  { name:"Don Quixote / Sancho", desc:"Sebenarnya bernama Sancho, mengambil nama dan mimpi ayahnya sendiri setelah sang ayah gugur.", cantos:["canto7"], profileKey:"canto7" },
  { name:"Hong Lu", desc:"'Giok' keluarga H Corp, matanya secara harfiah kamera bagi tetua abadi keluarganya. Menekan semua emosi akibat trauma menyaksikan kekerasan.", cantos:["canto8"], profileKey:"canto8" },
  { name:"Jia Huan", desc:"Kakak Hong Lu, muncul berulang bersama Gubo mengejar kekuatan Abnormality.", cantos:["canto1","canto4","canto8"] },
  { name:"Ryoshu", desc:"Sinner tergelap tapi punya lagu paling lembut, terinspirasi legenda Jepang 'Hell Screen'. Ibu dari Araya.", cantos:["canto2","canto9"], profileKey:"canto9" },
  { name:"Rien", desc:"Sosok yang menciptakan jarak dengan Ryoshu atas nama 'Prescripts', menyesal dan memohon maaf di detik terakhirnya.", cantos:["canto9"] },
  { name:"Sang Yi", desc:"Versi 'ideal' Yi Sang dari dunia cermin — sukses secara materi, tapi apatis terhadap penderitaan orang lain.", cantos:["canto4"] }
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
  { term:"The City", def:"Kompleks urban raksasa seukuran negara kecil, populasi sekitar 7 miliar. Dibagi jadi 26 Distrik, masing-masing dikuasai sebuah korporasi ('Wing'), semua tunduk pada entitas puncak bernama 'the Head'." },
  { term:"Wing", def:"Korporasi yang menguasai penuh satu Distrik di the City — fungsinya menggantikan peran pemerintahan konvensional." },
  { term:"Abnormality", def:"Makhluk quasi-sadar, manifestasi 'pikiran' penduduk kota, peninggalan era Lobotomy Corporation. Tidak bisa benar-benar mati — cuma bisa ditekan sementara, lalu 'menetas' lagi." },
  { term:"E.G.O", def:"Manifestasi kehendak (will) yang terkontrol — muncul saat seseorang memahami dirinya dan keinginan jangka panjangnya, lalu mewujudkannya jadi instrumen/senjata." },
  { term:"Distortion", def:"Manifestasi keinginan (wishes) jangka pendek yang tak terkendali — beda dari E.G.O karena tidak stabil. Bisa berevolusi jadi Abnormality penuh kalau dibiarkan terlalu lama." },
  { term:"Golden Bough", def:"Esensi/artefak yang ditinggalkan di cabang-cabang Lobotomy Corporation yang runtuh. Tujuan pencariannya oleh Limbus Company masih belum sepenuhnya jelas." },
  { term:"Seed of Light", def:"Proyek riset Carmen dan Ayin — 'obat' literal yang ditarik dari alam bawah sadar manusia untuk menyembuhkan 'penyakit pikiran' penduduk kota. Eksekusinya cacat, memicu fenomena Distortion." },
  { term:"Sephirah", def:"Nama departemen di Lobotomy Corporation, diambil dari Sephirot dalam mistisisme Kabbalah — struktur fasilitas yang seluruhnya berbasis simbolisme religius ini." },
  { term:"Enkephalin", def:"Bahan bakar bus Mephistopheles, diekstrak dari sistem saraf manusia hidup — detail gelap yang menunjukkan dunia Limbus Company tidak pernah benar-benar 'bersih' secara moral." },
  { term:"Identity", def:"Kemampuan Sinner mengambil wujud/kepribadian alternatif dari dunia cermin lain, diakses lewat teknologi 'Cermin' ciptaan Yi Sang. Dasar dari sistem gacha Extraction." },
  { term:"White Nights and Dark Days", def:"Insiden ketika fasilitas L Corp naik ke permukaan dalam pilar cahaya, memicu konflik internal Angela melawan Sephirah lain — akar dari lahirnya Library of Ruina." },
  { term:"Ayin / 'A'", def:"Pendiri Lobotomy Corporation, ternyata identik dengan 'the Manager' yang dimainkan pemain — menghapus ingatannya sendiri demi menebus kesalahan masa lalu." },
  { term:"Angela", def:"AI sekretaris Lobotomy Corp, diciptakan meniru Carmen. Kelak jadi Head Librarian di Library of Ruina, mengejar kebebasan dan balas dendam sebelum akhirnya melepaskannya." },
  { term:"Canto / Inferno", def:"Struktur cerita utama Limbus Company — tiap Canto fokus ke satu Sinner, terinspirasi struktur 'Divine Comedy' karya Dante Alighieri." }
]

const LOBOCORP_CONTENT = [
  { h:"Premis Dasar", p:[
    "Pemain berperan sebagai 'the Manager' (disebut juga 'X') yang mengelola Lobotomy Corporation — fasilitas yang 'mengurus' Abnormality lewat karyawan yang mengekstrak energi dari mereka, proses yang sangat berbahaya dan sering fatal. Sekretaris AI bernama Angela jadi pemandu utama sekaligus narator.",
    "Tujuan akhirnya: mengekstrak substansi 'Cogito' dari Carmen dan menyuntikkannya ke manusia untuk memicu psikis mereka bermanifestasi jadi Abnormality/E.G.O — proses yang jadi batu loncatan menuju terciptanya 'Seed of Light', yang akan dilepas ke seluruh kota selama 7 hari. Seluruh proses berjalan dalam siklus 50 hari yang ditetapkan sosok misterius bernama Ayin."
  ]},
  { h:"Struktur Fasilitas: Berbasis Kabbalah", p:[
    "Fasilitas ini dibagi jadi departemen bernama Sephirot dari mistisisme Kabbalah — masing-masing dikepalai seorang Sephirah. Ini bukan cuma nama estetik, tapi mencerminkan tema religius/mistis yang jadi tulang punggung seluruh narasi."
  ]},
  { h:"Angela: Jantung Emosional Cerita", p:[
    "Angela diciptakan Ayin dengan harapan meniru temannya (atau ciptaannya) di masa lalu bernama Carmen. Di awal dia ceria dan supportif, tapi kepribadiannya perlahan berubah negatif setelah insiden-insiden tertentu.",
    "Terungkap ada 'otak elektronik' meniru otak Carmen yang ditanam dalam Angela, secara bertahap memberinya hasrat sendiri — termasuk keinginan hidup lebih lama, dan kebencian pada Ayin yang awalnya menolaknya karena dianggap 'tidak seperti Carmen'."
  ]},
  { h:"Siapa Sebenarnya 'Manager'?", p:[
    "Bagian paling cryptic: identitas pemain (Manager/X) berkaitan erat dengan Ayin sendiri. Terungkap bahwa Ayin kehilangan arah hidupnya setelah loop 'Groundhog Day' selama jutaan tahun, lalu menghapus ingatannya sendiri dan mengambil peran sebagai Manager — demi menebus kesalahan ke orang-orang terdekatnya."
  ]},
  { h:"True Ending", p:[
    "Di ending sejati, Angela — didorong keinginan dari 'otak Carmen' — memutuskan menghentikan seluruh fungsi Sephirah dan merebut sisa Seed of Light. Dia menyatakan niat meneliti segala hal di dunia dan mengubahnya jadi buku, membangun sebuah perpustakaan.",
    "Karena interferensi Angela sendiri di detik-detik akhir, cahaya Seed of Light cuma bertahan 3 hari dari 7 hari yang direncanakan — memicu langsung insiden 'White Nights and Dark Days' yang jadi setup Library of Ruina."
  ]},
  { h:"Tema Filosofis", p:[
    "Penderitaan siklikal (50 hari berulang tanpa akhir jelas), AI yang mencari kemanusiaan lewat perjalanan emosional Angela, simbolisme religius sebagai kritik terhadap korporasi yang mengeksploitasi bawahannya atas nama 'tujuan lebih besar', dan pertanyaan soal identitas ketika memori terus direset ulang."
  ]}
]

const LIBRARYRUINA_CONTENT = [
  { h:"Setting: The Library", p:[
    "Setelah mengakhiri siklus Lobotomy Corp, Angela membangun perpustakaannya sendiri — struktur misterius berisi buku tentang apapun, dengan Angela sebagai Head Librarian. Karena persepsi waktu AI 100 kali lebih lambat dari manusia, 10.000 tahun yang berlalu di Lobotomy Corp setara sekitar 1 juta tahun penderitaan subjektif baginya."
  ]},
  { h:"Roland: Protagonis yang 'Nyasar'", p:[
    "Cerita diceritakan lewat sudut pandang Roland, seorang Fixer kelas rendah dari the City yang tanpa sadar terdampar masuk ke Library. Angela menangkap dan menginterogasinya — bahkan mengambil anggota tubuhnya sebagai hukuman — sebelum merekonstruksi tubuhnya dan merekrutnya jadi pelayan."
  ]},
  { h:"Tujuan Angela: Buku Sempurna", p:[
    "Angela mengirim 'Invitations' ke berbagai 'Guests', mengundang mereka masuk Library untuk bertarung melawan Roland dan Librarian lain demi mendapatkan 'Books' — esensi/kisah dari tamu tersebut. Tujuan akhirnya: menemukan satu buku sempurna yang dia yakini akan memberinya kebebasan sekaligus balas dendam."
  ]},
  { h:"Twist: Roland dan Angelica", p:[
    "Terungkap Roland punya motif tersembunyi: istrinya, Angelica ('The Black Silence'), meninggal dibunuh Distortion bernama 'The Pianist' — yang secara tidak langsung disebabkan tindakan Angela sendiri. Roland menyembunyikan niat balas dendam ini sepanjang cerita, menunggu sampai Angela jadi manusia sepenuhnya (karena sebelum itu dia 'tidak bisa dibunuh')."
  ]},
  { h:"Tema Utama: Siklus Balas Dendam", p:[
    "Tema paling dominan: kesia-siaan dan sifat destruktif dari dendam — bagaimana dendam melukai orang tak bersalah, yang kemudian mendorong mereka sendiri melakukan hal tak terpikirkan demi balas dendam mereka sendiri, sehingga siklus itu terus berlanjut."
  ]},
  { h:"Ending: Bittersweet", p:[
    "Angela mengalami realisasi besar — melepaskan misinya jadi manusia, memisahkan diri dari 'Carmen' yang selama ini ditanamkan padanya, dan membebaskan semua orang yang pernah dia 'serap' ke Library. Roland melepaskan dendamnya dan memilih melindungi Angela.",
    "Ini 'Main Ending' yang relatif positif — ada ending lain yang jauh lebih gelap ('Pale Librarian of Death', 'The Black Silence Ending') tergantung pilihan yang diambil sepanjang cerita."
  ]},
  { h:"Koneksi ke Limbus Company", p:[
    "Pola 'Guest yang punya kisah dari sumber sastra/mitos tertentu' di Library of Ruina adalah cikal bakal langsung sistem 'Identity' di Limbus Company — struktur intertekstualnya sudah dibangun sejak game kedua ini."
  ]}
]

const SINNER_PROFILES = {
  "dante": {
    literaryOrigin: "Dante Alighieri — penulis 'Divine Comedy' (Inferno, Purgatorio, Paradiso). Struktur perjalanan LCB secara keseluruhan meniru pembagian karya ini: Canto demi Canto, dipandu oleh sosok bernama Vergilius — persis seperti dalam puisi aslinya, di mana Virgil memandu Dante melewati neraka.",
    arcSummary: "Dante bukan protagonis dalam pengertian tradisional — ia adalah misteri berjalan. Menghapus ingatannya sendiri demi melindungi sesuatu yang disebut 'bintang', ia memulai cerita sebagai manajer yang diragukan semua orang, dan secara bertahap membangun kepercayaan lewat konsistensi, bukan karisma. Arc-nya adalah arc kepemimpinan yang tumbuh diam-diam di balik misteri identitas yang belum terpecahkan.",
    certainty: "mixed"
  },
  "canto1": {
    literaryOrigin: "Franz Kafka — 'The Metamorphosis' (Die Verwandlung). Gregor Samsa, tokoh utama novela itu, terbangun berubah jadi serangga raksasa dan mendapati keluarganya perlahan memperlakukannya sebagai beban, bukan lagi manusia. Gregor di Limbus Company mengutip baris pembuka novela itu secara langsung dalam flashback-nya.",
    arcSummary: "Trauma Gregor bukan tentang tubuhnya yang berubah, tapi tentang bagaimana institusi (dan ibunya sendiri) memperlakukan perubahan itu sebagai alasan untuk mereduksinya jadi alat uji coba. Arc-nya di Canto I bukan penyembuhan — ia belum sembuh — tapi keberanian mengambil tanggung jawab demi orang lain (Dante) meski dirinya sendiri baru saja dihancurkan ulang oleh masa lalunya.",
    certainty: "canon"
  },
  "canto2": {
    literaryOrigin: "Fyodor Dostoevsky — 'Crime and Punishment'. Nama 'Rodion' merujuk langsung ke Rodion Raskolnikov, mahasiswa miskin yang membunuh pegadaian korup atas nama teori bahwa individu 'luar biasa' berhak melampaui hukum moral demi kebaikan lebih besar — dan kemudian dihantui rasa bersalah yang mendalam.",
    arcSummary: "Rodion mewarisi dilema moral Raskolnikov nyaris utuh: kemarahan yang sah terhadap ketidakadilan, tindakan drastis yang lahir dari kemarahan itu, dan pertanyaan yang tak pernah selesai — apakah tindakan sepihak pernah benar-benar jadi solusi. Penolakannya terhadap tawaran Sonya di akhir Canto II adalah penolakan terhadap godaan mengulang pola yang sama dengan kekuasaan lebih besar.",
    certainty: "canon"
  },
  "canto3": {
    literaryOrigin: "Hermann Hesse — 'Demian: The Story of Emil Sinclair's Youth'. Ini referensi yang dikonfirmasi resmi oleh Project Moon (bukan sekadar kemiripan tema) — Sinclair adalah nama tokoh utama novel itu, dan bahkan Kromer (nama teman masa kecilnya yang memanipulasinya) diambil langsung dari nama Franz Kromer, karakter yang memperkenalkan Sinclair pada 'dunia gelap' di novel aslinya.",
    arcSummary: "Sinclair mewarisi persis dilema tokoh Hesse: terjebak antara dunia 'terang' (keluarga, ekspektasi, keamanan) dan dunia 'gelap' yang Kromer perkenalkan (godaan, kekerasan, emosi kuat). Ketakutannya yang disembunyikan di balik kegembiraan palsu adalah bentuk keberanian epistemik — kecurigaan bahwa 'kemajuan' yang dirayakan semua orang di sekitarnya sebenarnya adalah kehilangan yang disamarkan.",
    certainty: "canon"
  },
  "canto4": {
    literaryOrigin: "Yi Sang (이상) adalah nama pena penulis Korea asli, Kim Hae-gyeong, dikenal lewat karya-karya penuh alienasi eksistensial seperti 'Wings' (날개) dan 'Crow's Eye View'. Nama itu sendiri, dalam bahasa Korea, punya makna ganda: 'ideal' sekaligus 'ganjil/aneh'.",
    arcSummary: "Yi Sang adalah studi tentang harga dari idealisme di dunia yang memaksa kompromi. Setelah kehilangan komunitas yang memberinya rasa aman (League of Nine Littérateurs), ia jatuh dalam kepasifan dan kepingin beristirahat abadi — titik terendah yang cuma bisa diatasi lewat pengakuan jujur ke Dante, dan keputusan sadar untuk hidup demi 'ideal' miliknya sendiri, bukan demi diterima siapa pun.",
    certainty: "canon"
  },
  "canto5": {
    literaryOrigin: "Herman Melville — 'Moby-Dick'. Ishmael adalah narator novel aslinya, yang selamat dari obsesi mematikan Kapten Ahab terhadap paus putih. Kutipan pembuka novel itu ('Call me Ishmael') jadi salah satu baris paling terkenal dalam sastra Amerika.",
    arcSummary: "Ishmael mewarisi posisi sang narator: saksi sekaligus nyaris korban dari obsesi orang yang pernah ia kagumi. Arc-nya adalah pelepasan diri dari bayang-bayang mentor — menyadari bahwa mengejar 'menjadi seperti Ahab' hanya akan mengulang kehancuran yang sama, dan memilih membangun kompas moralnya sendiri bersama Limbus Company.",
    certainty: "canon"
  },
  "canto6": {
    literaryOrigin: "Emily Brontë — 'Wuthering Heights'. Heathcliff dan Catherine adalah dua tokoh sentral novel itu — kisah cinta yang dihancurkan jurang kelas sosial dan kebanggaan, salah satu roman tragis paling terkenal dalam sastra Inggris.",
    arcSummary: "Heathcliff mewarisi luka kelas sosial yang sama dengan tokoh aslinya — dianiaya karena berasal dari Backstreets, dicintai diam-diam oleh satu orang yang akhirnya tak bisa ia miliki. Bedanya dari versi Brontë: Heathcliff versi Limbus Company memilih menegakkan kepala meski kehilangan permanen, bukan tenggelam dalam dendam seumur hidup seperti versi aslinya.",
    certainty: "canon"
  },
  "canto7": {
    literaryOrigin: "Miguel de Cervantes — 'Don Quixote'. Novel satir klasik tentang seorang pria yang membaca terlalu banyak kisah kesatria hingga kehilangan pijakan pada realita, ditemani pengiringnya, Sancho Panza.",
    arcSummary: "Limbus Company membalik pembacaan Cervantes jadi lebih simpatik: Sancho, yang mewarisi nama dan mimpi ayahnya, awalnya memakai identitas itu karena keterpaksaan, bukan keyakinan. Arc-nya adalah perjalanan dari 'memakai nama orang lain' menjadi 'memilih nama itu sebagai miliknya sendiri' — mimpi yang 'mustahil' jadi layak diperjuangkan bukan karena naif, tapi karena dipilih secara sadar.",
    certainty: "canon"
  },
  "canto8": {
    literaryOrigin: "Cao Xueqin — 'Dream of the Red Chamber' (紅樓夢/Hongloumeng), salah satu dari Empat Novel Klasik Besar sastra Tiongkok. Ini referensi yang dikonfirmasi resmi Project Moon — kisah kemunduran sebuah keluarga besar dan tekanan generasi yang mengorbankan individu demi status.",
    arcSummary: "Hong Lu adalah 'giok' keluarganya secara harfiah — matanya kamera bagi para tetua yang menyaksikan tragedi sebagai hiburan. Trauma menyaksikan pembantaian yang tak berdaya ia cegah membuatnya menekan semua emosi demi perlindungan diri. Arc-nya adalah pergerakan dari saksi pasif menjadi seseorang yang akhirnya berani bertindak, memutus siklus kekerasan yang diwariskan generasi ke generasi.",
    certainty: "canon"
  },
  "canto9": {
    literaryOrigin: "Legenda klasik Jepang 'Hell Screen' (地獄変/Jigokuhen) oleh Ryūnosuke Akutagawa — kisah pelukis Yoshihide yang rela membiarkan hal mengerikan terjadi, bahkan pada putrinya sendiri, demi menciptakan karya seni sempurna.",
    arcSummary: "Ryoshu mewarisi kengerian moral yang sama dengan Yoshihide: kedekatan antara obsesi terhadap kesempurnaan dan kesediaan mengorbankan orang tercinta. Tapi arc-nya di Canto IX berbalik arah — alih-alih pengorbanan lebih jauh, ia mendapat pengakuan dan permintaan maaf dari Rien atas jarak yang diciptakan 'demi kebaikannya', sebuah reuni yang datang di ambang kehilangan namun tetap bermakna.",
    certainty: "canon"
  }
};

