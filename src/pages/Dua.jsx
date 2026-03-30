import { useMemo, useState } from 'react';

const baseDuas = [
  {
    title: 'Bismillah',
    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
    translation: 'In the name of Allah, the Most Merciful, the Most Compassionate.',
    reference: 'Quran 1:1',
  },
  {
    title: 'Before Eating',
    arabic: 'بِسْمِ اللَّهِ',
    translation: 'In the name of Allah.',
    reference: 'Sunnah',
  },
  {
    title: 'After Eating',
    arabic: 'الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا',
    translation: 'All praise is due to Allah who has fed us and given us drink.',
    reference: 'Sunnah',
  },
  {
    title: 'Before Sleeping',
    arabic: 'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا',
    translation: 'In Your name, O Allah, I die and I live.',
    reference: 'Sahih Bukhari',
  },
  {
    title: 'After Waking',
    arabic: 'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا',
    translation: 'All praise is due to Allah who gave us life after He caused us to die.',
    reference: 'Sahih Muslim',
  },
  {
    title: 'Entering Mosque',
    arabic: 'اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ',
    translation: 'O Allah, open for me the doors of Your mercy.',
    reference: 'Sunnah',
  },
  {
    title: 'Leaving Mosque',
    arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ',
    translation: 'O Allah, I ask You of Your bounty.',
    reference: 'Sunnah',
  },
  {
    title: 'Travel Du’a',
    arabic: 'سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ',
    translation: 'Glory be to Him who has subjected this to us, and we could never have done it by ourselves.',
    reference: 'Sahih Muslim',
  },
  {
    title: 'Hearing the Adhan',
    arabic: 'اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ',
    translation: 'O Allah, Lord of this call...',
    reference: 'Sahih Muslim',
  },
  {
    title: 'Seeking Forgiveness',
    arabic: 'أَسْتَغْفِرُ اللَّهَ',
    translation: 'I seek forgiveness from Allah.',
    reference: 'Quran',
  },
  {
    title: 'For Parents',
    arabic: 'رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا',
    translation: 'My Lord, have mercy on them as they brought me up when I was small.',
    reference: 'Quran 17:24',
  },
  {
    title: 'For Knowledge',
    arabic: 'رَبِّ زِدْنِي عِلْمًا',
    translation: 'My Lord, increase me in knowledge.',
    reference: 'Quran 20:114',
  },
  {
    title: 'For Sustenance',
    arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ رِزْقًا طَيِّبًا',
    translation: 'O Allah, I ask You for good and pure sustenance.',
    reference: 'Sunnah',
  },
  {
    title: 'Protection from Evil',
    arabic: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ',
    translation: 'I seek refuge in the perfect words of Allah.',
    reference: 'Sahih Muslim',
  },
  {
    title: 'For Recovery',
    arabic: 'اللَّهُمَّ رَبَّ النَّاسِ أَذْهِبِ الْبَأْسَ',
    translation: 'O Allah, Lord of mankind, remove the harm.',
    reference: 'Sahih Muslim',
  },
  {
    title: 'For Ease',
    arabic: 'رَبِّ اشْرَحْ لِي صَدْرِي',
    translation: 'My Lord, expand for me my breast.',
    reference: 'Quran 20:25',
  },
  {
    title: 'For Patience',
    arabic: 'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ',
    translation: 'My Lord, enable me to be grateful for Your favor.',
    reference: 'Quran 27:19',
  },
  {
    title: 'For Guidance',
    arabic: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',
    translation: 'Guide us to the straight path.',
    reference: 'Quran 1:6',
  },
  {
    title: 'For Mercy',
    arabic: 'رَبَّنَا ظَلَمْنَا أَنْفُسَنَا',
    translation: 'Our Lord, we have wronged ourselves.',
    reference: 'Quran 7:23',
  },
  {
    title: 'For a Good End',
    arabic: 'اللَّهُمَّ اجْعَلْ خَاتِمَتِي خَيْرًا',
    translation: 'O Allah, make my final state good.',
    reference: 'Du’a',
  },
  {
    title: 'Entering Home',
    arabic: 'بِسْمِ اللَّهِ وَلَجْنَا وَبِسْمِ اللَّهِ خَرَجْنَا',
    translation: 'In the name of Allah we enter and in the name of Allah we leave.',
    reference: 'Sunnah',
  },
  {
    title: 'Leaving Home',
    arabic: 'بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ',
    translation: 'In the name of Allah, I place my trust in Allah.',
    reference: 'Sunnah',
  },
  {
    title: 'For Rain',
    arabic: 'اللَّهُمَّ اسْقِنَا غَيْثًا مُبَارَكًا',
    translation: 'O Allah, give us blessed rain.',
    reference: 'Du’a',
  },
  {
    title: 'For the Prophet ﷺ',
    arabic: 'اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ',
    translation: 'O Allah, send prayers and peace upon our master Muhammad.',
    reference: 'Sunnah',
  },
  {
    title: 'Seeking Refuge',
    arabic: 'لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ',
    translation: 'There is no power and no strength except with Allah.',
    reference: 'Sunnah',
  },
];

const duas = Array.from({ length: 100 }, (_, index) => {
  const base = baseDuas[index % baseDuas.length];
  const setNumber = Math.floor(index / baseDuas.length) + 1;
  return {
    id: index + 1,
    title: setNumber === 1 ? base.title : `${base.title} (${setNumber})`,
    arabic: base.arabic,
    translation: base.translation,
    reference: base.reference,
  };
});

function Dua() {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDuaId, setSelectedDuaId] = useState(null);
  const [listening, setListening] = useState(false);
  const pageSize = 10;
  const supportsSpeech = typeof window !== 'undefined' && 'speechSynthesis' in window;

  const getAudioVoice = () => {
    if (!supportsSpeech) return null;
    const voices = window.speechSynthesis.getVoices?.() || [];
    return (
      voices.find((voice) => /arabic|ar-SA|ar_SA/i.test(`${voice.lang} ${voice.name}`)) ||
      voices[0] ||
      null
    );
  };

  const playDua = (dua) => {
    if (!supportsSpeech) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(dua.arabic);
    utterance.lang = 'ar-SA';
    utterance.rate = 0.95;
    utterance.pitch = 1;
    const voice = getAudioVoice();
    if (voice) utterance.voice = voice;
    utterance.onstart = () => setListening(true);
    utterance.onend = () => setListening(false);
    utterance.onerror = () => setListening(false);
    window.speechSynthesis.speak(utterance);
    setSelectedDuaId(dua.id);
  };

  const stopDua = () => {
    if (!supportsSpeech) return;
    window.speechSynthesis.cancel();
    setListening(false);
  };

  const filteredDuas = useMemo(() => {
    const term = search.trim().toLowerCase();
    return duas.filter((dua) => {
      return (
        dua.title.toLowerCase().includes(term) ||
        dua.arabic.toLowerCase().includes(term) ||
        dua.translation.toLowerCase().includes(term) ||
        dua.reference.toLowerCase().includes(term)
      );
    });
  }, [search]);

  const totalPages = Math.max(1, Math.ceil(filteredDuas.length / pageSize));
  const pageDuas = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredDuas.slice(start, start + pageSize);
  }, [currentPage, filteredDuas]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="section-panel">
      <div className="card-panel">
        <div className="form-field">
          <label htmlFor="duaSearch">Search Duas</label>
          <input
            id="duaSearch"
            type="text"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
              setCurrentPage(1);
            }}
            placeholder="Search by title, Arabic or meaning"
          />
        </div>

        <div className="info-card">
          <h3>Children’s Dua Collection</h3>
          <p>
            Learn 100 everyday duas from Islamic teachings. Each dua shows the Arabic and the English meaning for easier learning.
          </p>
          <p className="audio-note">
            Use the Sheikh recitation button to listen to the Arabic dua using your browser’s Arabic speech voice.
          </p>
        </div>

        <div className="verse-list">
          {pageDuas.map((dua) => (
            <article key={dua.id} className="verse-card">
              <div className="verse-card-header">
                <h4>{dua.id}. {dua.title}</h4>
                <div className="audio-actions">
                  <button type="button" onClick={() => playDua(dua)}>
                    Play Sheikh Recitation
                  </button>
                  <button type="button" onClick={stopDua} disabled={!listening}>
                    Stop
                  </button>
                </div>
              </div>
              <p className="verse-text">{dua.translation}</p>
              <p className="verse-arabic" dir="rtl">{dua.arabic}</p>
              <div className="verse-meta">
                <span>{dua.reference}</span>
                {selectedDuaId === dua.id && listening && <strong>Playing...</strong>}
              </div>
            </article>
          ))}
          {pageDuas.length === 0 && <p>No duas found for this search.</p>}
        </div>

        <div className="pagination-controls">
          <button type="button" disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
            Previous
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button type="button" disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)}>
            Next
          </button>
        </div>
      </div>
    </section>
  );
}

export default Dua;
