import type { PhotoId } from "./photos";

// ─────────────────────────────────────────────────────────────
//  All temple content lives here. Edit this one file to update
//  timings, sevas, festivals, contact details and more.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Brahma Mandir",
  fullName: "Bhagwan Shri Brahma Mandir",
  fullNameHindi: "भगवान श्री ब्रह्मा मंदिर, कुरुक्षेत्र",
  jaikara: "जय गुरुदेव · जय ओंकार",
  tagline: "Abode of the Creator · Seat of the Vedas",
  sanskritTagline: "ॐ वेदात्मनाय विद्महे हिरण्यगर्भाय धीमहि । तन्नो ब्रह्मा प्रचोदयात् ॥",
  // TODO: replace with the temple's real details
  // TODO: add the street address
  address: "Bhagwan Shri Brahma Mandir",
  city: "Kurukshetra, Haryana, India",
  phone: "+91 00000 00000",
  phoneHref: "tel:+910000000000",
  whatsapp: "+91 00000 00000",
  email: "info@brahmamandir.org",
  mapEmbed:
    "https://www.google.com/maps?q=Brahma+Sarovar+Kurukshetra&output=embed",
  socials: [
    { label: "YouTube", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "WhatsApp", href: "#" },
  ],
};

export type NavItem = { label: string; href: string; desc?: string };
export type NavGroup = { label: string; href?: string; children?: NavItem[] };

// Main menu follows the original brahmamandir.com navigation:
// Home · About Us · Brahmaji · Rath Yatra · Guruji Maharaj · Onkar Ashram · Hawan Yagya · Gallery · Contact Us
export const nav: NavGroup[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    children: [
      { label: "About the Mandir", href: "/about", desc: "Our story, vision & values" },
      { label: "Shrines · Devi-Devta", href: "/shrines", desc: "Every deity in the temple" },
      { label: "History & Legends", href: "/history", desc: "Puranic stories through the ages" },
      { label: "Architecture", href: "/architecture", desc: "The sacred geometry of the shrine" },
      { label: "Darshan & Aarti Timings", href: "/darshan", desc: "Daily schedule of worship" },
      { label: "Plan Your Visit", href: "/visit", desc: "Reaching, dress code & etiquette" },
    ],
  },
  { label: "Brahmaji", href: "/brahmaji" },
  { label: "Rath Yatra", href: "/rath-yatra" },
  { label: "Guruji Maharaj", href: "/guruji-maharaj" },
  { label: "Onkar Ashram", href: "/onkar-ashram" },
  { label: "Hawan Yagya", href: "/hawan-yagya" },
  { label: "Gallery", href: "/gallery" },
  {
    label: "Seva",
    children: [
      { label: "Pujas & Sevas", href: "/sevas", desc: "Book a puja for your family" },
      { label: "Annadanam & Prasadam", href: "/annadanam", desc: "Feed the devotees" },
      { label: "Festivals", href: "/festivals", desc: "Sacred celebrations of the year" },
      { label: "Events Calendar", href: "/events", desc: "Upcoming satsangs & kathas" },
      { label: "Live Darshan", href: "/live", desc: "Join the aarti from anywhere" },
      { label: "Mantras & Stotras", href: "/mantras", desc: "Chant with meaning" },
      { label: "Articles", href: "/articles", desc: "Reflections on dharma" },
      { label: "Volunteer", href: "/volunteer", desc: "Offer your time as seva" },
      { label: "Donate", href: "/donate", desc: "Support the temple's work" },
      { label: "FAQ", href: "/faq", desc: "Answers for devotees" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];

// ───────────────────────── Timings ─────────────────────────
export type TimingSlot = { name: string; hindi: string; start: string; end?: string; note: string; kind: "darshan" | "aarti" | "closed" | "bhog" };

export const dailySchedule: TimingSlot[] = [
  { name: "Mangala Aarti", hindi: "मंगला आरती", start: "05:00", end: "05:30", note: "The Lord is awakened with conch, bells and the first lamp of the day.", kind: "aarti" },
  { name: "Abhishek", hindi: "अभिषेक", start: "05:30", end: "06:30", note: "Sacred bathing with panchamrit, milk, curd, honey and Ganga jal.", kind: "darshan" },
  { name: "Shringar Darshan", hindi: "श्रृंगार दर्शन", start: "06:30", end: "11:30", note: "The deity adorned in fresh vastra, flowers and ornaments.", kind: "darshan" },
  { name: "Raj Bhog", hindi: "राजभोग", start: "11:30", end: "12:00", note: "Midday offering of naivedya; darshan pauses briefly.", kind: "bhog" },
  { name: "Madhyahna Aarti", hindi: "मध्याह्न आरती", start: "12:00", end: "12:30", note: "Noon aarti followed by distribution of prasadam.", kind: "aarti" },
  { name: "Vishram (Temple Closed)", hindi: "विश्राम", start: "12:30", end: "16:00", note: "The Lord rests. Sanctum doors remain closed.", kind: "closed" },
  { name: "Utthapan Darshan", hindi: "उत्थापन दर्शन", start: "16:00", end: "18:45", note: "Afternoon darshan reopens with bhajans in the mandapa.", kind: "darshan" },
  { name: "Sandhya Aarti", hindi: "संध्या आरती", start: "18:45", end: "19:30", note: "The grand evening aarti with deep-maala and Vedic chanting.", kind: "aarti" },
  { name: "Evening Darshan", hindi: "सायं दर्शन", start: "19:30", end: "20:45", note: "Quiet darshan and satsang in the courtyard.", kind: "darshan" },
  { name: "Shayan Aarti", hindi: "शयन आरती", start: "20:45", end: "21:00", note: "Lullaby aarti as the Lord retires for the night.", kind: "aarti" },
];

// ───────────────────────── Sevas ─────────────────────────
export type Seva = { slug: string; image: PhotoId; name: string; hindi: string; price: number; duration: string; desc: string; includes: string[]; category: "Daily" | "Special" | "Sanskar" | "Festival" };

export const sevas: Seva[] = [
  { slug: "abhishek", image: "brahma-shringar", name: "Panchamrit Abhishek", hindi: "पंचामृत अभिषेक", price: 1100, duration: "45 min", category: "Daily", desc: "Sacred bathing of Lord Brahma with the five nectars, performed with Purusha Sukta chanting in your family's name.", includes: ["Sankalp in your gotra", "Panchamrit & Ganga jal", "Prasadam packet"] },
  { slug: "archana", image: "mirror-shrine-5", name: "Ashtottara Archana", hindi: "अष्टोत्तर अर्चना", price: 251, duration: "15 min", category: "Daily", desc: "Recitation of the 108 holy names of Lord Brahma with an offering of lotus petals and kumkum.", includes: ["108 names recitation", "Flower offering", "Kumkum prasad"] },
  { slug: "deepa-seva", image: "sanctum-arch", name: "Akhand Deepa Seva", hindi: "अखंड दीप सेवा", price: 501, duration: "One day", category: "Daily", desc: "A ghee lamp kept burning before the sanctum for an entire day for the wellbeing of your loved ones.", includes: ["Pure desi ghee lamp", "Name recited at aarti", "Photo on WhatsApp"] },
  { slug: "rudra-havan", image: "havan-1", name: "Brahma Havan", hindi: "ब्रह्म हवन", price: 5100, duration: "2 hours", category: "Special", desc: "A Vedic fire ritual invoking Lord Brahma and Mother Saraswati for wisdom, prosperity and new beginnings.", includes: ["Two Vedic pandits", "All samagri", "Purnahuti & prasad"] },
  { slug: "saraswati-puja", image: "saraswati-utsav-murti", name: "Saraswati Vidya Puja", hindi: "सरस्वती विद्या पूजा", price: 2100, duration: "1 hour", category: "Special", desc: "Blessings for students before examinations, admissions and new studies, with pen and book puja.", includes: ["Pen & book puja", "Saraswati kavach", "Blessed raksha sutra"] },
  { slug: "griha-pravesh", image: "havan-2", name: "Griha Pravesh Sankalp", hindi: "गृह प्रवेश संकल्प", price: 3100, duration: "1.5 hours", category: "Sanskar", desc: "Sankalp and Vastu puja in the temple before you enter a new home, so the new chapter begins auspiciously.", includes: ["Vastu shanti mantra", "Kalash & coconut", "Energised yantra"] },
  { slug: "namkaran", image: "jhula", name: "Namkaran Sanskar", hindi: "नामकरण संस्कार", price: 2100, duration: "1 hour", category: "Sanskar", desc: "The traditional naming ceremony for your newborn, held in the presence of the Creator.", includes: ["Janma rashi naming", "Blessings by acharya", "Certificate"] },
  { slug: "vivah", image: "brahma-darbar-flowers", name: "Vivah Sanskar", hindi: "विवाह संस्कार", price: 21000, duration: "4 hours", category: "Sanskar", desc: "A sacred Vedic wedding in the temple mandapa with saptapadi before Lord Brahma, the first witness of creation.", includes: ["Mandapa decoration", "Acharya & pandits", "Vivah certificate"] },
  { slug: "pitru-tarpan", image: "havan-3", name: "Pitru Tarpan", hindi: "पितृ तर्पण", price: 1500, duration: "1 hour", category: "Sanskar", desc: "Offerings to ancestors on the sacred sarovar ghat, performed with til and kusha as prescribed in the shastras.", includes: ["Til, jau & kusha", "Brahmin bhojan", "Sankalp for 3 generations"] },
  { slug: "kartik-deepdaan", image: "temple-night-lights", name: "Kartik Deepdaan", hindi: "कार्तिक दीपदान", price: 1100, duration: "Kartik month", category: "Festival", desc: "Lamps floated on the sarovar every evening of the holy month of Kartik in your family's name.", includes: ["30 evenings of deepdaan", "Name in sankalp", "Kartik prasad box"] },
  { slug: "annakoot", image: "utsav-murtis", name: "Annakoot Bhog Seva", hindi: "अन्नकूट भोग सेवा", price: 5100, duration: "Festival day", category: "Festival", desc: "Sponsor a portion of the 56-item Annakoot offering made the day after Diwali.", includes: ["Name in festival sankalp", "Chhappan bhog prasad", "Festival photo"] },
  { slug: "brahmotsav", image: "shobha-yatra", name: "Brahmotsav Yajman", hindi: "ब्रह्मोत्सव यजमान", price: 11000, duration: "5 days", category: "Festival", desc: "Become a yajman of the annual Brahmotsav and take part in the processions, havans and grand aarti.", includes: ["Daily sankalp for 5 days", "Seat in the main havan", "Shawl & prasad"] },
];

// ───────────────────────── Festivals ─────────────────────────
// Dates follow the Hindu panchang and change every year — confirm with the temple office.
export type Festival = { name: string; image: PhotoId; hindi: string; date: string; month: string; desc: string; highlight?: boolean; rituals: string[] };

export const festivals: Festival[] = [
  { name: "Vijaya Dashami", image: "temple-night-celebration", hindi: "विजयादशमी", date: "2026-10-20", month: "Ashwin", desc: "The victory of dharma over adharma. Shastra puja, Ram leela and a lamp-lit evening at the sarovar.", rituals: ["Shastra & book puja", "Shami puja", "Evening Ram leela"] },
  { name: "Deepavali", image: "temple-night-lights", hindi: "दीपावली", date: "2026-11-08", month: "Kartik Amavasya", desc: "Eleven thousand diyas light the temple and its ghats as Lakshmi is welcomed into every home.", highlight: true, rituals: ["Lakshmi–Ganesh puja", "11,000 diya deepotsav", "Fireworks-free green celebration"] },
  { name: "Annakoot & Govardhan Puja", image: "utsav-murtis", hindi: "अन्नकूट", date: "2026-11-09", month: "Kartik Shukla Pratipada", desc: "A mountain of 56 offerings is made before the Lord and shared with all who come.", rituals: ["Chhappan bhog", "Govardhan parikrama", "Mass prasad"] },
  { name: "Kartik Purnima · Brahmotsav", image: "shobha-yatra", hindi: "कार्तिक पूर्णिमा", date: "2026-11-24", month: "Kartik Purnima", desc: "The holiest night of the year for Lord Brahma. Devotees take a sacred dip, float lamps and join the five-day Brahmotsav.", highlight: true, rituals: ["Snan at the sarovar", "Deepdaan", "Rath yatra of Lord Brahma", "Maha aarti"] },
  { name: "Gita Jayanti", image: "pravachan-stage", hindi: "गीता जयंती", date: "2026-12-20", month: "Margashirsha Shukla Ekadashi", desc: "The day the Bhagavad Gita was spoken on the field of Kurukshetra. A full-day akhand Gita path and shobha yatra.", highlight: true, rituals: ["18-chapter Gita path", "Gita shobha yatra", "Deep yagya"] },
  { name: "Makar Sankranti", image: "temple-day-shikhara", hindi: "मकर संक्रांति", date: "2027-01-14", month: "Paush", desc: "The sun turns northward. Til-gud prasad, kite-flying for children and daan to the needy.", rituals: ["Surya arghya", "Til daan", "Khichdi prasad"] },
  { name: "Vasant Panchami", image: "saraswati-utsav-murti", hindi: "वसंत पंचमी", date: "2027-02-11", month: "Magha Shukla Panchami", desc: "The appearance day of Mother Saraswati, consort of Lord Brahma. Children begin their learning with Akshar-abhyas.", highlight: true, rituals: ["Saraswati puja", "Vidyarambh for children", "Yellow-robed shringar"] },
  { name: "Maha Shivaratri", image: "shivling-decorated", hindi: "महाशिवरात्रि", date: "2027-03-06", month: "Phalguna Krishna Chaturdashi", desc: "A night of vigil honouring Lord Shiva with four prahar pujas and continuous chanting.", rituals: ["Four prahar abhishek", "Night-long jagran", "Rudrabhishek"] },
  { name: "Holi", image: "marigold-canopy", hindi: "होली", date: "2027-03-22", month: "Phalguna Purnima", desc: "Holika dahan the night before, followed by phool holi with flower petals in the courtyard.", rituals: ["Holika dahan", "Phoolon ki holi", "Bhajan sandhya"] },
  { name: "Ram Navami", image: "ram-darbar", hindi: "राम नवमी", date: "2027-04-15", month: "Chaitra Shukla Navami", desc: "The birth of Shri Ram at noon, celebrated with Ramcharitmanas path and a cradle ceremony.", rituals: ["Akhand Ramayan", "Noon janmotsav", "Panjiri prasad"] },
];

// ───────────────────────── Events ─────────────────────────
export type TempleEvent = { title: string; date: string; time: string; place: string; type: "Satsang" | "Katha" | "Yagya" | "Seva" | "Youth" | "Festival"; desc: string };

export const events: TempleEvent[] = [
  { title: "Navratri Kanya Pujan", date: "2026-10-19", time: "09:00 AM", place: "Main Mandapa", type: "Festival", desc: "Worship of young girls as forms of the Divine Mother, followed by bhandara." },
  { title: "Dussehra Deep Sandhya", date: "2026-10-20", time: "06:30 PM", place: "Sarovar Ghat", type: "Festival", desc: "Lamps on the ghats and a short pravachan on the meaning of victory." },
  { title: "Shrimad Bhagavat Saptah Katha", date: "2026-10-26", time: "03:00 PM", place: "Satsang Hall", type: "Katha", desc: "Seven days of Bhagavat katha with kirtan, concluding with a grand havan." },
  { title: "Sunday Gita Satsang", date: "2026-11-01", time: "07:30 AM", place: "Satsang Hall", type: "Satsang", desc: "A weekly study of one chapter of the Bhagavad Gita, open to all." },
  { title: "Deepotsav Volunteer Drive", date: "2026-11-05", time: "04:00 PM", place: "Temple Courtyard", type: "Seva", desc: "Help prepare 11,000 diyas for Deepavali. Families welcome." },
  { title: "Deepavali Maha Lakshmi Puja", date: "2026-11-08", time: "07:00 PM", place: "Main Sanctum", type: "Festival", desc: "Lakshmi–Ganesh puja followed by the lighting of the deepotsav." },
  { title: "Yuva Sanskar Shivir", date: "2026-11-15", time: "10:00 AM", place: "Vidya Bhawan", type: "Youth", desc: "A one-day camp for ages 12–25 on dharma, meditation and service." },
  { title: "Brahmotsav Maha Yagya", date: "2026-11-20", time: "08:00 AM", place: "Yagya Shala", type: "Yagya", desc: "Five days of havan culminating on Kartik Purnima." },
  { title: "Kartik Purnima Rath Yatra", date: "2026-11-24", time: "05:00 PM", place: "Through Kurukshetra to the Brahma Mandir", type: "Festival", desc: "Thousands of devotees pull the chariot of Lord Brahma, Mata Brahmani and Mata Gayatri across the city, ending at the Brahma Mandir." },
  { title: "Gita Jayanti Akhand Path", date: "2026-12-20", time: "06:00 AM", place: "Main Mandapa", type: "Festival", desc: "All 18 chapters chanted continuously by devotees and students." },
];

// ───────────────────────── Mantras ─────────────────────────
export type Mantra = { title: string; sanskrit: string; transliteration: string; meaning: string; when: string };

export const mantras: Mantra[] = [
  {
    title: "Brahma Gayatri",
    sanskrit: "ॐ वेदात्मनाय विद्महे\nहिरण्यगर्भाय धीमहि\nतन्नो ब्रह्मा प्रचोदयात् ॥",
    transliteration: "Om Vedātmanāya Vidmahe\nHiraṇyagarbhāya Dhīmahi\nTanno Brahmā Pracodayāt",
    meaning: "We know Him as the soul of the Vedas; we meditate upon the Golden Womb of creation. May Lord Brahma illumine our intellect.",
    when: "At sunrise, 11 or 108 times",
  },
  {
    title: "Brahmani Gayatri",
    sanskrit: "ॐ देवी ब्रह्माण्यै विद्महे\nमहाशक्त्यै च धीमहि\nतन्नो देवी प्रचोदयात् ॥",
    transliteration: "Om Devī Brahmāṇyai Vidmahe\nMahāśaktyai Ca Dhīmahi\nTanno Devī Pracodayāt",
    meaning: "We know the Goddess Brahmani, the creative power of Brahma; we meditate upon the Great Shakti. May the Devi inspire and guide us.",
    when: "Inscribed at the temple gate · chant with the Brahma Gayatri",
  },
  {
    title: "Brahma Mula Mantra",
    sanskrit: "ॐ ब्रं ब्रह्मणे नमः ॥",
    transliteration: "Om Braṃ Brahmaṇe Namaḥ",
    meaning: "Salutations to Lord Brahma, the creator, through His seed syllable.",
    when: "Before beginning any new undertaking",
  },
  {
    title: "Brahma Dhyana Shloka",
    sanskrit: "चतुर्मुखं चतुर्बाहुं हंसवाहनसंस्थितम् ।\nवेदहस्तं महाप्राज्ञं ब्रह्माणं प्रणमाम्यहम् ॥",
    transliteration: "Caturmukhaṃ caturbāhuṃ haṃsavāhana-saṃsthitam\nVedahastaṃ mahāprājñaṃ brahmāṇaṃ praṇamāmyaham",
    meaning: "I bow to Brahma — four-faced, four-armed, seated upon the swan, holding the Vedas, supremely wise.",
    when: "During morning puja, before archana",
  },
  {
    title: "Saraswati Vandana",
    sanskrit: "या कुन्देन्दुतुषारहारधवला या शुभ्रवस्त्रावृता ।\nया वीणावरदण्डमण्डितकरा या श्वेतपद्मासना ॥",
    transliteration: "Yā kundendu-tuṣāra-hāra-dhavalā yā śubhra-vastrāvṛtā\nYā vīṇā-vara-daṇḍa-maṇḍita-karā yā śveta-padmāsanā",
    meaning: "She who is fair as the jasmine, the moon and a garland of snow, clad in white, whose hands hold the veena, seated on a white lotus — may that Saraswati protect us.",
    when: "Before study, music or any creative work",
  },
  {
    title: "Shanti Mantra",
    sanskrit: "ॐ सह नाववतु । सह नौ भुनक्तु ।\nसह वीर्यं करवावहै । तेजस्वि नावधीतमस्तु मा विद्विषावहै ॥\nॐ शान्तिः शान्तिः शान्तिः ॥",
    transliteration: "Om saha nāvavatu, saha nau bhunaktu\nSaha vīryaṃ karavāvahai, tejasvi nāvadhītamastu mā vidviṣāvahai\nOm śāntiḥ śāntiḥ śāntiḥ",
    meaning: "May He protect us both; may He nourish us both; may we work together with vigour; may our study be radiant; may we never bear ill-will. Om peace, peace, peace.",
    when: "Beginning and end of satsang or study",
  },
  {
    title: "Gita Shloka (2.47)",
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥",
    transliteration: "Karmaṇy-evādhikāras te mā phaleṣu kadācana\nMā karma-phala-hetur bhūr mā te saṅgo 'stv akarmaṇi",
    meaning: "Your right is to action alone, never to its fruits. Do not let the fruit be your motive, nor be attached to inaction.",
    when: "Daily contemplation",
  },
];

// ───────────────────────── Articles ─────────────────────────
export type Article = { slug: string; image: PhotoId; title: string; excerpt: string; date: string; read: string; category: string; body: string[] };

export const articles: Article[] = [
  {
    slug: "why-brahma-has-four-faces",
    image: "brahma-white-murti",
    title: "Why Does Lord Brahma Have Four Faces?",
    excerpt: "The four faces of the Creator are not ornament but teaching — each gazes upon a Veda, a direction and a stage of life.",
    date: "2026-09-28",
    read: "6 min",
    category: "Symbolism",
    body: [
      "Of all the forms in the Hindu pantheon, Lord Brahma is instantly recognised by his four faces, each crowned and serene, looking out to the four quarters of the universe. The Puranas say these faces arose as the Creator sought to behold all that he had brought into being — wherever he turned his gaze, a new face appeared.",
      "Tradition links each face to one of the four Vedas: the Rig, Yajur, Sama and Atharva. From his mouths flowed the sacred knowledge that sustains the order of the cosmos. In this sense, Brahma is Vedātmā — the very soul of the Vedas, as the Brahma Gayatri proclaims.",
      "The four faces are also read as the four directions, the four yugas and the four ashramas of human life — brahmacharya, grihastha, vanaprastha and sannyasa. Creation is not a single act but an unfolding through time and space, and the Creator watches over every part of it at once.",
      "For the devotee, the teaching is gentle and practical: see wholly. Before we create anything — a family, a home, a piece of work — we are invited to look in every direction, to weigh the past and the future, and to act with the knowledge that every creation shapes the world around it.",
    ],
  },
  {
    slug: "kartik-purnima-significance",
    image: "temple-dusk",
    title: "Kartik Purnima: The Holiest Night of the Creator",
    excerpt: "Why the full moon of Kartik is sacred to Lord Brahma, and how devotees observe it with snan, deepdaan and seva.",
    date: "2026-10-05",
    read: "5 min",
    category: "Festivals",
    body: [
      "Kartik Purnima, the full moon of the month of Kartik, is considered one of the most auspicious days of the Hindu year. For devotees of Lord Brahma it carries a special weight: tradition holds that it was on this day the Creator performed his great yagya at the sacred lake of Pushkar.",
      "The day begins before dawn with snan — a holy dip in the sarovar. As the eastern sky lightens, families offer arghya to the sun and make their sankalp for the year ahead. Throughout the day, daan of grain, clothing and lamps is offered to the needy.",
      "As night falls, the waters bloom with light. Thousands of small leaf-boats bearing ghee lamps are released onto the sarovar, each carrying a prayer. This deepdaan is believed to remove darkness from the heart as surely as from the water.",
      "At Brahma Mandir, Kartik Purnima concludes the five-day Brahmotsav with the rath yatra of the Lord and a maha aarti on the ghats. All are welcome — there is no fee for darshan, and prasadam is served to every visitor.",
    ],
  },
  {
    slug: "art-of-doing-darshan",
    image: "parikrama-mirror",
    title: "The Art of Darshan: How to Truly See the Divine",
    excerpt: "Darshan is not looking at God — it is allowing yourself to be seen. A short guide to approaching the sanctum.",
    date: "2026-08-17",
    read: "4 min",
    category: "Practice",
    body: [
      "The Sanskrit word darshan means 'seeing', but in the temple it means something more reciprocal. We go to see the deity, and in that moment we are also seen. It is a meeting of glances — and that is why the eyes of the murti are always the last part to be consecrated.",
      "Begin before you arrive. Bathe, wear clean and simple clothes, and let your mind settle on the way. Remove your footwear at the entrance and ring the bell gently — its sound is said to clear the space of distraction.",
      "In the sanctum, do not rush. Stand to one side so others may also see. Look first at the feet of the Lord, then slowly raise your eyes to the face. Offer whatever you carry — a flower, a sweet, or simply a quiet thank-you.",
      "Finally, carry the darshan home. Sit for a few minutes in the courtyard before leaving. The peace you feel there is the real prasadam, and it is meant to be shared with everyone you meet afterwards.",
    ],
  },
  {
    slug: "saraswati-and-brahma",
    image: "saraswati-brass",
    title: "Saraswati and Brahma: Knowledge as the First Creation",
    excerpt: "Before the worlds were made, there was the Word. On the divine partnership of the Creator and the Goddess of learning.",
    date: "2026-07-02",
    read: "7 min",
    category: "Scripture",
    body: [
      "In the Puranic accounts, Mother Saraswati emerges from Lord Brahma as the power of speech and knowledge — the Shakti without which creation could not begin. The Creator needs a plan, and that plan is held in the Word.",
      "This is why Saraswati is worshipped alongside Brahma, and why Vasant Panchami is one of the great days of our temple. Children write their first letters, musicians tune their instruments, and scholars place their books before the Goddess.",
      "Her white garments speak of purity, her veena of harmony, her book of learning and her swan of discrimination — the ability to separate milk from water, the true from the false.",
      "Together, Brahma and Saraswati teach that creation and knowledge are inseparable. Every act of making begins with understanding, and every true understanding wants to make the world a little more beautiful.",
    ],
  },
  {
    slug: "annadanam-greatest-daan",
    image: "kalash-yatra",
    title: "Annadanam: Why Feeding Others is the Greatest Gift",
    excerpt: "The shastras call food Brahman itself. Why the temple kitchen never closes its doors.",
    date: "2026-06-11",
    read: "5 min",
    category: "Seva",
    body: [
      "'Annam Brahma' — food is Brahman — declares the Taittiriya Upanishad. Of all forms of daan, the giving of food is said to be complete, because it satisfies the receiver entirely. No one who is fed asks for more.",
      "Every day our temple kitchen prepares sattvic prasadam for pilgrims, sadhus, students and anyone who is hungry. No one is asked their caste, creed or reason for coming. They are guests of the Lord.",
      "Devotees often sponsor annadanam on birthdays, anniversaries or in memory of departed loved ones. The sankalp is taken in your family's name, and the merit of the meal is dedicated to whom you choose.",
      "Even if you cannot sponsor a meal, you may serve one. Our seva volunteers chop vegetables, serve food and wash vessels — and many say the hour in the kitchen is the most meaningful part of their visit.",
    ],
  },
  {
    slug: "morning-sadhana-for-householders",
    image: "sanctum-bell",
    title: "A Simple Morning Sadhana for Busy Householders",
    excerpt: "Fifteen minutes, a lamp and a mantra. A daily practice anyone can keep, inspired by the temple's own routine.",
    date: "2026-05-20",
    read: "6 min",
    category: "Practice",
    body: [
      "The temple day begins with Mangala aarti before sunrise. You don't need to wake at four to share in that spirit — fifteen quiet minutes at home are enough to start the day in the Lord's presence.",
      "Light a small diya and a stick of incense. Sit facing east if you can. Take three slow breaths and recite the Shanti mantra, letting the sound settle the restless mind.",
      "Chant the Brahma Gayatri eleven times, counting on your fingers or a mala. Then read a single shloka of the Bhagavad Gita and hold one phrase from it in your mind through the day.",
      "Close by offering your work to the Divine. Whatever you create today — a meal, a report, a conversation — let it be an offering. That is the householder's yagya, and it is as sacred as any fire ritual.",
    ],
  },
];

// ───────────────────────── FAQ ─────────────────────────
export const faqs: { q: string; a: string; cat: string }[] = [
  { cat: "Darshan", q: "Is there any entry fee for darshan?", a: "No. Darshan at Brahma Mandir is free for everyone, every day. Paid sevas and pujas are optional offerings." },
  { cat: "Darshan", q: "What are the temple timings?", a: "The temple opens at 5:00 AM with Mangala aarti and closes at 9:00 PM after Shayan aarti. The sanctum is closed for rest from 12:30 PM to 4:00 PM. See the Darshan page for the full schedule." },
  { cat: "Darshan", q: "Is there a dress code?", a: "We request modest, traditional attire. Shorts, sleeveless tops and short skirts are not permitted in the sanctum. Stoles are available at the entrance free of charge." },
  { cat: "Darshan", q: "Can I take photographs inside the temple?", a: "Photography is allowed in the courtyard and gardens. Photography and video of the main sanctum are not permitted out of respect for the deity." },
  { cat: "Seva", q: "How do I book a puja or seva?", a: "You can book online through the Pujas & Sevas page, call the temple office, or visit the seva counter near the main gate. Online bookings receive confirmation on WhatsApp." },
  { cat: "Seva", q: "Can a puja be performed in my name if I cannot attend?", a: "Yes. Pandits take the sankalp with your name, gotra and nakshatra. Prasadam can be couriered to you within India and a video of the puja is shared." },
  { cat: "Seva", q: "Can I volunteer at the temple?", a: "Absolutely. We welcome volunteers for the kitchen, festivals, cleaning, education and digital seva. Register on the Volunteer page." },
  { cat: "Donation", q: "Are donations eligible for tax exemption?", a: "Donations to the temple trust are eligible for deduction under Section 80G of the Income Tax Act. A receipt is issued for every donation." },
  { cat: "Donation", q: "How is my donation used?", a: "Donations support daily worship, annadanam, festival celebrations, temple maintenance, gaushala and our education programmes. Annual reports are available at the office." },
  { cat: "Visit", q: "Is there parking and wheelchair access?", a: "Yes. Free parking is available beside the temple. Ramps and wheelchairs are available at the main gate; volunteers can assist elderly devotees." },
  { cat: "Visit", q: "Is accommodation available for pilgrims?", a: "A limited number of rooms are available at the temple dharamshala on a first-come basis. Please call the office at least a week in advance." },
  { cat: "Visit", q: "Are mobile phones allowed?", a: "Phones are allowed but must be on silent. Free locker facilities are available at the entrance for those who prefer to leave them." },
];

export const stats = [
  { value: "5", label: "Aartis every day" },
  { value: "12+", label: "Pujas & sevas offered" },
  { value: "365", label: "Days of annadanam" },
  { value: "40+", label: "Festivals every year" },
];
