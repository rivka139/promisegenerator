// promises.js
// English + Telugu Bible Promises

const PROMISES = [
  {
    en: "Call to me and I will answer you, and will tell you great and hidden things that you have not known. – Jeremiah 33:3",
    te: "నన్ను పిలువుము; నేను నీకు ఉత్తరమిచ్చెదను; నీకు తెలియని గొప్ప గొప్ప రహస్యములను నీకు తెలియజేసెదను. – యిర్మియా 33:3"
  },
  {
    en: "For I know the plans I have for you, declares the LORD, plans for welfare and not for evil, to give you a future and a hope. – Jeremiah 29:11",
    te: "నేను మీకు కలిగించు సంకల్పములు నాకు తెలిసినవే; అవి కీడు కలిగించుటకు కాక మీకు ఆశాభవిష్యత్తును కలిగించుటకే అని యెహోవా సెలవిచ్చుచున్నాడు. – యిర్మియా 29:11"
  },
  {
    en: "And the LORD will guide you continually and satisfy your desire in scorched places and make your bones strong. – Isaiah 58:11",
    te: "యెహోవా నిన్ను నిత్యము నడిపించును; ఎండిపోయిన స్థలములలో నీ ఆత్మను తృప్తిపరచును; నీ ఎముకలను బలపరచును. – యెషయా 58:11"
  },
  {
    en: "My son, do not forget my teaching, but let your heart keep my commandments, for length of days and years of life and peace they will add to you. – Proverbs 3:1–4",
    te: "నా కుమారుడా, నా ధర్మశాస్త్రమును మరచిపోకుము; నీ హృదయము నా ఆజ్ఞలను కాపాడుగాక; అవి నీకు దీర్ఘాయుష్షును శాంతిని కలిగించును. – సామెతలు 3:1–4"
  },
  {
    en: "Weeping may tarry for the night, but joy comes with the morning. – Psalm 30:5",
    te: "రాత్రియందు ఏడుపు ఉండును; ఉదయమందు ఆనందము కలుగును. – కీర్తనల గ్రంథము 30:5"
  },
  {
    en: "Surely goodness and mercy shall follow me all the days of my life, and I shall dwell in the house of the LORD forever. – Psalm 23:6",
    te: "నా జీవనకాలమంతట మంచి కృపయు నన్ను వెంబడించును; యెహోవా మందిరమందు నేను నిత్యము నివసించెదను. – కీర్తనల గ్రంథము 23:6"
  },
  {
    en: "The LORD bless you and keep you; the LORD make his face to shine upon you and be gracious to you. – Numbers 6:24–25",
    te: "యెహోవా నిన్ను ఆశీర్వదించి నిన్ను కాపాడుగాక; యెహోవా తన ముఖకాంతిని నీ మీద ప్రకాశింపజేసి నీకు కృప చూపుగాక. – సంఖ్యాకాండము 6:24–25"
  },
  {
    en: "And we know that for those who love God all things work together for good. – Romans 8:28",
    te: "దేవునిని ప్రేమించువారికి సమస్తమును మంచి కలుగునట్లు ఆయన పనిచేయుచున్నాడు. – రోమీయులకు 8:28"
  },
  {
    en: "And God is able to make all grace abound to you. – 2 Corinthians 9:8",
    te: "దేవుడు మీకు సమస్త కృపను సమృద్ధిగా కలుగజేయుటకు శక్తిమంతుడు. – 2 కోరింథీయులకు 9:8"
  },
  {
    en: "And my God will supply every need of yours according to his riches in glory in Christ Jesus. – Philippians 4:19",
    te: "నా దేవుడు తన మహిమయొక్క ఐశ్వర్యముచొప్పున క్రీస్తు యేసునందు మీ అవసరములన్నిటిని తీర్చును. – ఫిలిప్పీయులకు 4:19"
  },
  {
    en: "What no eye has seen, nor ear heard, nor the heart of man imagined, what God has prepared for those who love him. – 1 Corinthians 2:9",
    te: "కంటితో చూడనివి, చెవితో విననివి, మనుష్యుని హృదయమున ప్రవేశింపనివి దేవుడు సిద్ధపరచెను. – 1 కోరింథీయులకు 2:9"
  },
  {
    en: "Do not turn aside from any of the words that I command you today. – Deuteronomy 28:14",
    te: "ఈ దినమున నేను నీకు ఆజ్ఞాపించు మాటలలో ఏదియు విడిచి పోకుము. – ద్వితీయోపదేశకాండము 28:14"
  },
  {
    en: "I have loved you with an everlasting love. – Jeremiah 31:3",
    te: "నిత్యమైన ప్రేమతో నేను నిన్ను ప్రేమించియున్నాను. – యిర్మియా 31:3"
  },
  {
    en: "For I am sure that neither death nor life… will be able to separate us from the love of God. – Romans 8:38–39",
    te: "మరణముగాని జీవముగాని… దేవుని ప్రేమ నుండి మనలను వేరు చేయలేవని నిశ్చయించుకొనియున్నాను. – రోమీయులకు 8:38–39"
  },
  {
    en: "If we confess our sins, he is faithful and just to forgive us our sins. – 1 John 1:9",
    te: "మన పాపములను ఒప్పుకొనినయెడల ఆయన నమ్మదగినవాడును నీతిమంతుడునై మన పాపములను క్షమించును. – 1 యోహాను 1:9"
  },
  {
    en: "If any of you lacks wisdom, let him ask God. – James 1:5",
    te: "మీలో ఎవరికైనను జ్ఞానము కొరవడినయెడల దేవునిని అడుగుగాక. – యాకోబు 1:5"
  },
  {
    en: "Fear not, for I am with you. – Isaiah 41:10",
    te: "భయపడకుము; నేను నీతో ఉన్నాను. – యెషయా 41:10"
  },
  {
    en: "Casting all your anxieties on him, because he cares for you. – 1 Peter 5:7",
    te: "మీ చింత అంతటిని ఆయన మీద వేయుడి; ఆయన మీ విషయమై శ్రద్ధ వహించుచున్నాడు. – 1 పేతురు 5:7"
  },
  {
    en: "Surely I will bless you and multiply you. – Hebrews 6:14",
    te: "నిశ్చయంగా నిన్ను ఆశీర్వదించెదను. – హెబ్రీయులకు 6:14"
  },
  {
    en: "Ask, and it will be given to you; seek, and you will find. – Matthew 7:7–8",
    te: "అడుగుడి, మీకు ఇవ్వబడును; వెదకుడి, మీకు దొరకును. – మత్తయి 7:7–8"
  },
  {
    en: "Ask, and you will receive, that your joy may be full. – John 16:24",
    te: "అడుగుడి, మీ ఆనందము సంపూర్ణమగునట్లు పొందుదురు. – యోహాను 16:24"
  },
  {
    en: "God is not man, that he should lie. – Numbers 23:19",
    te: "దేవుడు అబద్ధమాడుటకు మనుష్యుడు కాడు. – సంఖ్యాకాండము 23:19"
  },
  {
    en: "Whatever you ask in prayer, believe that you have received it. – Mark 11:24",
    te: "మీరు ప్రార్థన చేయునప్పుడు కోరిన వాటిని పొందినట్లు నమ్ముడి. – మార్కు 11:24"
  },
  {
    en: "Whatever you ask in my name, this I will do. – John 14:13–14",
    te: "నా నామములో మీరు ఏదైనను అడిగినయెడల అది నేను చేయుదును. – యోహాను 14:13–14"
  },
  {
    en: "When you stand praying, forgive. – Mark 11:25–26",
    te: "మీరు ప్రార్థన చేయుచుండగా క్షమించుడి. – మార్కు 11:25–26"
  },
  {
    en: "Not one word has failed of all the good things that the LORD your God promised. – Joshua 23:14",
    te: "యెహోవా చెప్పిన మంచి మాటలలో ఒక్కటైనను విఫలముకాలేదు. – యెహోషువ 23:14"
  },
  {
    en: "Fear not, Abram, I am your shield. – Genesis 15:1",
    te: "భయపడకుము అబ్రాము; నేను నీ కవచమునై యున్నాను. – ఆదికాండము 15:1"
  },
  {
    en: "Let us hold fast the confession of our hope without wavering. – Hebrews 10:23",
    te: "మన నిరీక్షణ యొక్క ఒప్పుకొనుటను అచంచలముగా పట్టుకొందము. – హెబ్రీయులకు 10:23"
  },
  {
    en: "All the promises of God find their Yes in him. – 2 Corinthians 1:20",
    te: "దేవుని వాగ్దానములన్నియు ఆయనయందు అవునని నిలిచియున్నవి. – 2 కోరింథీయులకు 1:20"
  },
  {
    en: "Whoever hears my word and believes him who sent me has eternal life. – John 5:24",
    te: "నా మాట విని నన్ను పంపినవానిని నమ్మువాడు నిత్యజీవము పొందును. – యోహాను 5:24"
  },

  {
    en: "By day the LORD commands his steadfast love, and at night his song is with me. – Psalm 42:8",
    te: "పగటిపూట యెహోవా తన కృపను ఆజ్ఞాపించును; రాత్రియందు ఆయన గీతము నాతో ఉండును. – కీర్తనల గ్రంథము 42:8"
  },
  {
    en: "But from there you will seek the LORD your God and you will find him. – Deuteronomy 4:29–31",
    te: "అక్కడ నుండి నీవు నీ దేవుడైన యెహోవాను వెదికినయెడల ఆయనను కనుగొందువు. – ద్వితీయోపదేశకాండము 4:29–31"
  },
  {
    en: "He sent from on high, he took me; he drew me out of many waters. – Psalm 18:16",
    te: "ఆయన పై నుండి చేయి చాచి నన్ను పట్టుకొని అనేక జలముల నుండి నన్ను రక్షించెను. – కీర్తనల గ్రంథము 18:16"
  },
  {
    en: "My grace is sufficient for you, for my power is made perfect in weakness. – 2 Corinthians 12:9–10",
    te: "నా కృప నీకు చాలును; నా బలము బలహీనతలో సంపూర్ణమగును. – 2 కోరింథీయులకు 12:9–10"
  },
  {
    en: "Have faith in God… Whatever you ask in prayer, believe. – Mark 11:22–24",
    te: "దేవునియందు విశ్వాసము కలిగియుండుడి… ప్రార్థన చేయునప్పుడు నమ్ముడి. – మార్కు 11:22–24"
  },
  {
    en: "O afflicted one… I will set your stones in antimony. – Isaiah 54:11–12",
    te: "శ్రమపడుచున్నవాడా… నీ రాళ్లను మణులతో స్థాపించెదను. – యెషయా 54:11–12"
  },
  {
    en: "The salvation of the righteous is from the LORD. – Psalm 37:39–40",
    te: "నీతిమంతుల రక్షణ యెహోవా నుండే కలుగును. – కీర్తనల గ్రంథము 37:39–40"
  },
  {
    en: "Now may the God of peace himself sanctify you completely. – 1 Thessalonians 5:23–24",
    te: "శాంతిదాయకుడైన దేవుడు మిమ్మును సంపూర్ణముగా పరిశుద్ధపరచుగాక. – 1 థెస్సలొనీకయులకు 5:23–24"
  },
  {
    en: "For the LORD God is a sun and shield. – Psalm 84:11",
    te: "యెహోవా దేవుడు సూర్యుడును కవచమునై యున్నాడు. – కీర్తనల గ్రంథము 84:11"
  },
  {
    en: "Answer me when I call, O God of my righteousness. – Psalm 4:1",
    te: "నా నీతిదేవా, నేను పిలిచినప్పుడు నాకు ఉత్తరమిచ్చుము. – కీర్తనల గ్రంథము 4:1"
  },
  {
    en: "You are a hiding place for me. – Psalm 32:7",
    te: "నీవు నాకు దాగుకొనుటకు స్థలము. – కీర్తనల గ్రంథము 32:7"
  },
  {
    en: "The LORD is a stronghold for the oppressed. – Psalm 9:9–10",
    te: "యెహోవా పీడితులకు ఆశ్రయమై యున్నాడు. – కీర్తనల గ్రంథము 9:9–10"
  },
  {
    en: "This poor man cried, and the LORD heard him. – Psalm 34:6–7",
    te: "ఈ దరిద్రుడు మొఱ్ఱపెట్టగా యెహోవా విన్నాడు. – కీర్తనల గ్రంథము 34:6–7"
  },
  {
    en: "Fight the good fight of the faith. – 1 Timothy 6:12",
    te: "విశ్వాసమునకు సంబంధించిన మంచి పోరాటము పోరాడుము. – 1 తిమోతికి 6:12"
  },
  {
    en: "Then they cried to the LORD in their trouble. – Psalm 107:6",
    te: "వారి కష్టములలో వారు యెహోవాను మొఱ్ఱపెట్టిరి. – కీర్తనల గ్రంథము 107:6"
  },
  {
    en: "But let him ask in faith, with no doubting. – James 1:5–6",
    te: "సందేహము లేక విశ్వాసముతో అడుగుగాక. – యాకోబు 1:5–6"
  },
  {
    en: "I, I am he who comforts you. – Isaiah 51:12–13",
    te: "నేనే నిన్ను ఆదరించువాడను. – యెషయా 51:12–13"
  },
  {
    en: "The LORD is on my side; I will not fear. – Psalm 118:5–7",
    te: "యెహోవా నా పక్షమున ఉన్నాడు; నేను భయపడను. – కీర్తనల గ్రంథము 118:5–7"
  },
  {
    en: "God is faithful… he will also provide the way of escape. – 1 Corinthians 10:13",
    te: "దేవుడు నమ్మదగినవాడు… తప్పించుకొనుటకు మార్గమును కలుగజేయును. – 1 కోరింథీయులకు 10:13"
  },
  {
    en: "In my distress I called to the LORD. – Psalm 120:1",
    te: "నా శ్రమలో నేను యెహోవాను పిలిచితిని. – కీర్తనల గ్రంథము 120:1"
  },
  {
    en: "He will again have compassion on us. – Micah 7:19",
    te: "ఆయన మళ్లీ మన మీద కనికరము చూపును. – మీకా 7:19"
  },
  {
    en: "Lead me to the rock that is higher than I. – Psalm 61:2–3",
    te: "నన్ను నన్ను మించిన శిలయొద్దకు నడిపించుము. – కీర్తనల గ్రంథము 61:2–3"
  },
  {
    en: "I am the LORD your God, who takes hold of your right hand. – Isaiah 41:13",
    te: "నీ కుడిచేతిని పట్టుకొనుచున్న నీ దేవుడైన యెహోవాను నేనే. – యెషయా 41:13"
  },
  {
    en: "My steadfast love shall not depart from you. – Isaiah 54:10",
    te: "నా కృప నిన్ను విడువదు. – యెషయా 54:10"
  },
  {
    en: "I have been young, and now am old, yet I have not seen the righteous forsaken. – Psalm 37:25–26",
    te: "నీతిమంతుడు విడువబడినదిని నేను చూడలేదు. – కీర్తనల గ్రంథము 37:25–26"
  },
  {
    en: "So faith comes from hearing. – Romans 10:17",
    te: "వినుటవలన విశ్వాసము కలుగును. – రోమీయులకు 10:17"
  },
  {
    en: "For God gave us a spirit not of fear but of power. – 2 Timothy 1:7",
    te: "దేవుడు మనకు భయస్వభావమును కాక బలస్వభావమును ఇచ్చెను. – 2 తిమోతికి 1:7"
  },
  {
    en: "The righteous flourish like the palm tree. – Psalm 92:12–13",
    te: "నీతిమంతుడు తాటి చెట్టువలె వృద్ధి చెందును. – కీర్తనల గ్రంథము 92:12–13"
  },
  {
    en: "Fear not, for I have redeemed you. – Isaiah 43:1–2",
    te: "భయపడకుము; నేను నిన్ను విమోచించియున్నాను. – యెషయా 43:1–2"
  },
  {
    en: "Seek first the kingdom of God. – Matthew 6:33–34",
    te: "ముందుగా దేవుని రాజ్యమును వెదకుడి. – మత్తయి 6:33–34"
  },
  {
    en: "The steadfast love of the LORD never ceases. – Lamentations 3:22–23",
    te: "యెహోవా కృపలు ఎన్నటికీ అంతముకావు. – విలాపవాక్యములు 3:22–23"
  },
  {
    en: "You did not choose me, but I chose you. – John 15:16",
    te: "మీరు నన్ను ఎన్నుకోలేదు; నేను మిమ్మును ఎన్నుకొనితిని. – యోహాను 15:16"
  },
  {
    en: "Even though I walk through the valley of the shadow of death. – Psalm 23:4",
    te: "మరణఛాయలోయలో నడిచినను. – కీర్తనల గ్రంథము 23:4"
  },
  {
    en: "In righteousness you shall be established. – Isaiah 54:14–15",
    te: "నీతిలో నీవు స్థిరపడుదువు. – యెషయా 54:14–15"
  },
  {
    en: "I sought the LORD, and he answered me. – Psalm 34:4",
    te: "నేను యెహోవాను వెదకితిని; ఆయన నాకు ఉత్తరమిచ్చెను. – కీర్తనల గ్రంథము 34:4"
  },
  {
    en: "Though your sins are like scarlet, they shall be as white as snow. – Isaiah 1:18–19",
    te: "మీ పాపములు ఎర్రని రంగు ఉన్నను మంచువలె తెల్లబడును. – యెషయా 1:18–19"
  },
  {
    en: "He has distributed freely, he has given to the poor. – 2 Corinthians 9:9",
    te: "ఆయన బహుమానములు విస్తారముగా ఇచ్చెను. – 2 కోరింథీయులకు 9:9"
  },
  {
    en: "The LORD is my light and my salvation. – Psalm 27:1–3",
    te: "యెహోవా నా వెలుగును నా రక్షణయును. – కీర్తనల గ్రంథము 27:1–3"
  },
  {
    en: "Apart from me you can do nothing. – John 15:5",
    te: "నన్ను విడిచి మీరు ఏదియు చేయలేరు. – యోహాను 15:5"
  },
  {
    en: "But the Lord is faithful. – 2 Thessalonians 3:3",
    te: "యెహోవా నమ్మదగినవాడు. – 2 థెస్సలొనీకయులకు 3:3"
  },
  {
    en: "Behold, God is my salvation. – Isaiah 12:2",
    te: "ఇదిగో దేవుడు నా రక్షణ. – యెషయా 12:2"
  },
  {
    en: "Fear the LORD, you his saints. – Psalm 34:9–10",
    te: "యెహోవాను భయపడుడి. – కీర్తనల గ్రంథము 34:9–10"
  },
  {
    en: "Refrain from anger, and forsake wrath. – Psalm 37:8",
    te: "కోపమును విడిచిపెట్టు. – కీర్తనల గ్రంథము 37:8"
  },
  {
    en: "Trust in the LORD with all your heart. – Proverbs 3:5–6",
    te: "నీ హృదయమంతటితో యెహోవాయందు నమ్మిక ఉంచుము. – సామెతలు 3:5–6"
  },
  {
    en: "Your ears shall hear a word behind you. – Isaiah 30:21",
    te: "నీ చెవులు వెనుక నుండి మాటను వినును. – యెషయా 30:21"
  },
  {
    en: "Whoever has my commandments and keeps them. – John 14:21",
    te: "నా ఆజ్ఞలను కలిగి వాటిని గైకొనువాడు. – యోహాను 14:21"
  },

  {
    en: "Wait for the LORD and keep his way. – Psalm 37:34",
    te: "యెహోవాను ఆశ్రయించి ఆయన మార్గమును గైకొనుము. – కీర్తనల గ్రంథము 37:34"
  },
  {
    en: "Can a woman forget her nursing child? – Isaiah 49:15–16",
    te: "స్త్రీ తన పాలు త్రాగు శిశువును మరచిపోవచ్చా? – యెషయా 49:15–16"
  },
  {
    en: "I will never leave you nor forsake you. – Hebrews 13:5–6",
    te: "నేను నిన్ను విడువను గాని నిన్ను త్యజించను. – హెబ్రీయులకు 13:5–6"
  },
  {
    en: "Wait for the LORD; be strong. – Psalm 27:14",
    te: "యెహోవాను ఎదురు చూచుడి; ధైర్యముగా ఉండుడి. – కీర్తనల గ్రంథము 27:14"
  },
  {
    en: "Ask, and it will be given to you. – Matthew 7:7–8",
    te: "అడుగుడి, మీకు ఇవ్వబడును. – మత్తయి 7:7–8"
  },
  {
    en: "Honor the LORD with your wealth. – Proverbs 3:9–10",
    te: "నీ సంపదతో యెహోవాను గౌరవించుము. – సామెతలు 3:9–10"
  },
  {
    en: "They ought always to pray and not lose heart. – Luke 18:1a",
    te: "ఎల్లప్పుడూ ప్రార్థన చేయవలెనని. – లూకా 18:1a"
  },
  {
    en: "Return to the LORD your God, for he is gracious. – Joel 2:13–14",
    te: "మీ దేవుడైన యెహోవా యొద్దకు తిరిగి రండి; ఆయన కృపగలవాడు. – యోవేలు 2:13–14"
  },
  {
    en: "Praying at all times in the Spirit. – Ephesians 6:18",
    te: "ఆత్మలో ఎల్లప్పుడూ ప్రార్థన చేయుచుండుడి. – ఎఫెసీయులకు 6:18"
  },
  {
    en: "You guide me with your counsel. – Psalm 73:24",
    te: "నీ ఉపదేశముతో నన్ను నడిపించుదువు. – కీర్తనల గ్రంథము 73:24"
  },
  {
    en: "If you are willing and obedient. – Isaiah 1:19",
    te: "మీరు సిద్ధపడి వినినయెడల. – యెషయా 1:19"
  },
  {
    en: "Do not be anxious about tomorrow. – Matthew 6:34",
    te: "రేపటి విషయమై ఆందోళన చెందకుడి. – మత్తయి 6:34"
  },
  {
    en: "Rejoice in hope, be patient in tribulation. – Romans 12:12",
    te: "నిరీక్షణలో ఆనందించుడి. – రోమీయులకు 12:12"
  },
  {
    en: "I have blotted out your transgressions. – Isaiah 44:22",
    te: "నీ అపరాధములను తుడిచివేసియున్నాను. – యెషయా 44:22"
  },
  {
    en: "Do not be anxious about anything. – Philippians 4:6–7",
    te: "ఏ విషయమునందును చింతించకుడి. – ఫిలిప్పీయులకు 4:6–7"
  },
  {
    en: "You are of more value than many sparrows. – Matthew 10:30–31",
    te: "మీరు అనేక గోరింటకన్నా విలువైనవారు. – మత్తయి 10:30–31"
  },
  {
    en: "God meant it for good. – Genesis 50:20",
    te: "దేవుడు దానిని మంచి కోసం ఉద్దేశించెను. – ఆదికాండము 50:20"
  },
  {
    en: "This is the one to whom I will look. – Isaiah 66:2",
    te: "నేను దృష్టి పెట్టువాడు ఇతడే. – యెషయా 66:2"
  },
  {
    en: "Return to me, says the LORD of hosts. – Zechariah 1:3",
    te: "నా యొద్దకు తిరిగి రండి అని యెహోవా సెలవిచ్చుచున్నాడు. – జెకర్యా 1:3"
  },
  {
    en: "You will call upon me and come and pray to me. – Jeremiah 29:12–13",
    te: "మీరు నన్ను పిలిచినయెడల నేను వినెదను. – యిర్మియా 29:12–13"
  },
  {
    en: "May the God of hope fill you with all joy and peace. – Romans 15:13",
    te: "నిరీక్షణయొక్క దేవుడు మీకు సంపూర్ణమైన ఆనందమును శాంతిని దయచేయుగాక. – రోమీయులకు 15:13"
  },
  {
    en: "The joy of the LORD is your strength. – Nehemiah 8:10",
    te: "యెహోవా ఆనందమే మీ బలం. – నెహెమ్యా 8:10"
  },
  {
    en: "You have turned for me my mourning into dancing. – Psalm 30:11–12",
    te: "నా విలాపమును నాట్యముగా మార్చితివి. – కీర్తనల గ్రంథము 30:11–12"
  },
  {
    en: "Peace I leave with you; my peace I give to you. – John 14:27",
    te: "నేను మీకు శాంతిని విడిచిపెడుతున్నాను. – యోహాను 14:27"
  },
  {
    en: "In the world you will have tribulation. But take heart. – John 16:33",
    te: "లోకములో మీకు శ్రమ కలుగును; ధైర్యము కలిగియుండుడి. – యోహాను 16:33"
  },
  {
    en: "The LORD will ordain peace for us. – Isaiah 26:12",
    te: "యెహోవా మాకు శాంతిని నియమించును. – యెషయా 26:12"
  },
  {
    en: "You keep him in perfect peace. – Isaiah 26:3",
    te: "స్థిరమనస్సుగలవానిని సంపూర్ణ శాంతిలో ఉంచుదువు. – యెషయా 26:3"
  },
  {
    en: "I am with you always, to the end of the age. – Matthew 28:20",
    te: "యుగాంతమువరకు నేను మీతో ఉండుదును. – మత్తయి 28:20"
  }
];
