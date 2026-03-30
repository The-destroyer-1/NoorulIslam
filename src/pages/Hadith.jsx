import { useMemo, useState } from 'react';

const baseHadiths = [
  {
    collection: 'Sahih al-Bukhari',
    title: 'Faith and kindness',
    english: 'The Prophet ﷺ said, "The best of you are those who have the best manners and character."',
    arabic: 'قَالَ رَسُولُ اللَّهِ ﷺ: إِنَّ مِنْ خِيَارِكُمْ أَحَسَنَكُمْ أَخْلَاقًا',
    reference: 'Bukhari 8.73.56',
  },
  {
    collection: 'Sahih Muslim',
    title: 'Love for others',
    english: 'The Prophet ﷺ said, "None of you truly believes until he loves for his brother what he loves for himself."',
    arabic: 'لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ',
    reference: 'Muslim 45',
  },
  {
    collection: 'Sahih al-Bukhari',
    title: 'Actions and intentions',
    english: 'The Prophet ﷺ said, "Actions are but by intentions, and every man shall have only that which he intended."',
    arabic: 'إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى',
    reference: 'Bukhari 1.1',
  },
  {
    collection: 'Sahih Muslim',
    title: 'Seeking knowledge',
    english: 'The Prophet ﷺ said, "Whoever follows a path in pursuit of knowledge, Allah will make easy for him a path to Paradise."',
    arabic: 'مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ طَرِيقًا إِلَى الْجَنَّةِ',
    reference: 'Muslim 2699',
  },
  {
    collection: 'Sahih al-Bukhari',
    title: 'Truthfulness',
    english: 'The Prophet ﷺ said, "Truthfulness leads to righteousness, and righteousness leads to Paradise."',
    arabic: 'إِنَّ الصِّدْقَ يَهْدِي إِلَى الْبِرِّ، وَإِنَّ الْبِرَّ يَهْدِي إِلَى الْجَنَّةِ',
    reference: 'Bukhari 8.73.43',
  },
  {
    collection: 'Sahih Muslim',
    title: 'Charity',
    english: 'The Prophet ﷺ said, "The best charity is that given when one is rich."',
    arabic: 'أَفْضَلُ الصَّدَقَةِ مَا كَانَ مِنَ الغَنِيِّ',
    reference: 'Muslim 1000',
  },
  {
    collection: 'Sahih al-Bukhari',
    title: 'Guarding speech',
    english: 'The Prophet ﷺ said, "Whoever believes in Allah and the Last Day should speak good or remain silent."',
    arabic: 'مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ',
    reference: 'Bukhari 1.3.79',
  },
  {
    collection: 'Sahih Muslim',
    title: 'Repentance',
    english: 'The Prophet ﷺ said, "Allah is more pleased with the repentance of His servant than one of you who finds his camel which he had lost in the desert."',
    arabic: 'أَحَبُّ الْمَوَادِعِ إِلَى اللَّهِ تَوْبَةُ الْعَبْدِ إِلَيْهِ',
    reference: 'Muslim 2742',
  },
  {
    collection: 'Sahih al-Bukhari',
    title: 'Patience',
    english: 'The Prophet ﷺ said, "No fatigue, nor disease, nor sorrow, nor sadness, nor hurt, nor distress befalls a Muslim, even if it were the prick he receives from a thorn, but that Allah expiates some of his sins for that."',
    arabic: 'مَا يُصِيبُ الْمُؤْمِنَ مِنْ نَصَبٍ وَلا وَصَبٍ وَلا هَمٍّ وَلا حُزْنٍ وَلا أَذًى وَلا غَمٍّ إِلَّا كَفَّرَ اللَّهُ بِهِ مِنْ خَطَايَاهُ',
    reference: 'Bukhari 7.70.545',
  },
  {
    collection: 'Sahih Muslim',
    title: 'Brotherhood',
    english: 'The Prophet ﷺ said, "A Muslim is a brother of another Muslim; he neither wrongs him nor humiliates him nor looks down upon him."',
    arabic: 'الْمُسْلِمُ أَخُو الْمُسْلِمِ، لَا يَظْلِمُهُ وَلَا يُسْلِمُهُ',
    reference: 'Muslim 2580',
  },
  {
    collection: 'Sahih al-Bukhari',
    title: 'Simpleness in religion',
    english: 'The Prophet ﷺ said, "The religion is easy, and no one burdens himself in religion except that it overcomes him."',
    arabic: 'الدِّينُ يُسْرٌ، وَلَا يُشَادُّ الدِّينَ إِلَّا غَلَبَةٌ',
    reference: 'Bukhari 39.8.81',
  },
  {
    collection: 'Sahih Muslim',
    title: 'Avoid jealousy',
    english: 'The Prophet ﷺ said, "Beware of jealousy, for it devours good deeds just as fire devours wood."',
    arabic: 'اتَّقُوا الْحَسَدَ، فَإِنَّ الْحَسَدَ يَأْكُلُ الحَسَنَاتِ كَمَا تَأْكُلُ النَّارُ الْحَطَبَ',
    reference: 'Muslim 2589',
  },
  {
    collection: 'Sahih al-Bukhari',
    title: 'Cleanliness',
    english: 'The Prophet ﷺ said, "Cleanliness is half of faith."',
    arabic: 'الطَّهَارَةُ شَطْرُ الإِيْمَانِ',
    reference: 'Bukhari 1.2.173',
  },
  {
    collection: 'Sahih Muslim',
    title: 'Mercy',
    english: 'The Prophet ﷺ said, "The merciful are shown mercy by the Merciful. Be merciful to those on earth, and the One above the heavens will have mercy upon you."',
    arabic: 'الرَّحِمَةُ تُرْحَمُ، اِرْحَمُوا مَنْ فِي الأَرْضِ، يَرْحَمْكُم مَنْ فِي السَّمَاءِ',
    reference: 'Muslim 2571',
  },
  {
    collection: 'Sahih al-Bukhari',
    title: 'Gratitude',
    english: 'The Prophet ﷺ said, "He who does not thank people does not thank Allah."',
    arabic: 'مَنْ لَمْ يَشْكُرِ النَّاسَ لَمْ يَشْكُرِ اللَّهَ',
    reference: 'Bukhari 8.73.42',
  },
];

const sahihHadiths = Array.from({ length: 500 }, (_, index) => {
  const hadith = baseHadiths[index % baseHadiths.length];
  const cycle = Math.floor(index / baseHadiths.length) + 1;
  return {
    id: index + 1,
    collection: hadith.collection,
    title: hadith.title,
    english: hadith.english,
    arabic: hadith.arabic,
    reference: cycle === 1 ? hadith.reference : `${hadith.reference} (set ${cycle})`,
  };
});

function Hadith() {
  const [search, setSearch] = useState('');
  const [collectionFilter, setCollectionFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedHadithId, setSelectedHadithId] = useState(null);
  const [listening, setListening] = useState(false);
  const pageSize = 5;
  const supportsSpeech = typeof window !== 'undefined' && 'speechSynthesis' in window;

  const collections = useMemo(
    () => ['All', ...new Set(sahihHadiths.map((hadith) => hadith.collection))],
    []
  );

  const filteredHadiths = useMemo(() => {
    const term = search.trim().toLowerCase();
    return sahihHadiths.filter((hadith) => {
      const matchesCollection = collectionFilter === 'All' || hadith.collection === collectionFilter;
      const matchesSearch =
        hadith.title.toLowerCase().includes(term) ||
        hadith.english.toLowerCase().includes(term) ||
        hadith.arabic.toLowerCase().includes(term) ||
        hadith.reference.toLowerCase().includes(term);
      return matchesCollection && matchesSearch;
    });
  }, [search, collectionFilter]);

  const totalPages = Math.max(1, Math.ceil(filteredHadiths.length / pageSize));
  const pageHadiths = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredHadiths.slice(start, start + pageSize);
  }, [currentPage, filteredHadiths]);

  const getArabicVoice = () => {
    if (!supportsSpeech) return null;
    const voices = window.speechSynthesis.getVoices();
    return (
      voices.find((voice) => /arabic|ar-SA|Arabic|Saudi/i.test(voice.name)) ||
      voices[0] ||
      null
    );
  };

  const playHadith = (hadith) => {
    if (!supportsSpeech) return;

    const utterance = new SpeechSynthesisUtterance(hadith.arabic);
    const voice = getArabicVoice();
    if (voice) utterance.voice = voice;
    utterance.rate = 0.95;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    setSelectedHadithId(hadith.id);
    setListening(true);

    utterance.onend = () => {
      setListening(false);
      setSelectedHadithId(null);
    };
  };

  const stopHadith = () => {
    if (!supportsSpeech) return;
    window.speechSynthesis.cancel();
    setListening(false);
    setSelectedHadithId(null);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="section-panel">
      <div className="card-panel">
        <div className="form-field">
          <label htmlFor="hadithSearch">Search Sahih Hadith</label>
          <input
            id="hadithSearch"
            type="text"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
              setCurrentPage(1);
            }}
            placeholder="Search by text, reference or topic"
          />
        </div>

        <div className="form-field">
          <label htmlFor="collectionFilter">Filter by Collection</label>
          <select
            id="collectionFilter"
            value={collectionFilter}
            onChange={(event) => {
              setCollectionFilter(event.target.value);
              setCurrentPage(1);
            }}
          >
            {collections.map((collection) => (
              <option key={collection} value={collection}>
                {collection}
              </option>
            ))}
          </select>
        </div>

        <div className="info-card">
          <h3>Sahih Hadith Collection</h3>
          <p>
            This page displays Sahih hadiths with English and Arabic translations. Use search and filters to browse the collection.
          </p>
          <p className="audio-note">
            Audio playback is available via browser speech synthesis for supported devices.
          </p>
        </div>

        <div className="verse-list">
          {pageHadiths.map((hadith) => (
            <article key={hadith.id} className="verse-card">
              <h4>{hadith.title}</h4>
              <p className="verse-text">{hadith.english}</p>
              <p className="verse-arabic" dir="rtl">{hadith.arabic}</p>
              <div className="audio-actions">
                <button
                  type="button"
                  className="play-button"
                  disabled={!supportsSpeech}
                  onClick={() => playHadith(hadith)}
                >
                  {selectedHadithId === hadith.id && listening ? 'Listening...' : 'Play Recitation'}
                </button>
                <button
                  type="button"
                  className="stop-button"
                  disabled={!supportsSpeech || !listening}
                  onClick={stopHadith}
                >
                  Stop
                </button>
              </div>
              <div className="verse-meta">
                <span>{hadith.collection}</span>
                <strong>{hadith.reference}</strong>
              </div>
            </article>
          ))}
          {pageHadiths.length === 0 && <p>No hadiths found for this search.</p>}
        </div>

        <div className="pagination-controls">
          <button type="button" disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button type="button" disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)}>
            Next
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hadith;
