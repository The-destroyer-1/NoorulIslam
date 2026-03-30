import { useEffect, useMemo, useState } from 'react';
import { getReciterAudio, getReciters, getSurahVerses, getSurahs } from '../services/quranApi.js';

function Quran() {
  const [surahs, setSurahs] = useState([]);
  const [selectedSurah, setSelectedSurah] = useState(null);
  const [verses, setVerses] = useState([]);
  const [reciters, setReciters] = useState([]);
  const [selectedReciterId, setSelectedReciterId] = useState(null);
  const [audioUrl, setAudioUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [surahFilter, setSurahFilter] = useState('');

  useEffect(() => {
    async function loadInitialData() {
      try {
        setLoading(true);
        const [chapters, reciterList] = await Promise.all([getSurahs(), getReciters()]);
        setSurahs(chapters);
        setReciters(reciterList.slice(0, 50));
        setSelectedSurah(chapters[0]);
        setSelectedReciterId(reciterList[0]?.id || null);
      } catch (err) {
        setError(err.message || 'Unable to load Quran data');
      } finally {
        setLoading(false);
      }
    }

    loadInitialData();
  }, []);

  useEffect(() => {
    if (!selectedSurah) return;

    async function loadSurahData() {
      try {
        setLoading(true);
        setError('');
        const [verseData, recitationUrl] = await Promise.all([
          getSurahVerses(selectedSurah.id),
          selectedReciterId ? getReciterAudio(selectedSurah.id, selectedReciterId) : Promise.resolve(''),
        ]);
        setVerses(verseData);
        setAudioUrl(recitationUrl);
      } catch (err) {
        setError(err.message || 'Unable to load surah content');
      } finally {
        setLoading(false);
      }
    }

    loadSurahData();
  }, [selectedSurah, selectedReciterId]);

  const filteredSurahs = useMemo(() => {
    const lower = surahFilter.toLowerCase();
    return surahs.filter(
      (surah) =>
        surah.name_simple.toLowerCase().includes(lower) ||
        surah.name_arabic.includes(lower) ||
        surah.translated_name.name.toLowerCase().includes(lower),
    );
  }, [surahFilter, surahs]);

  return (
    <section className="section-panel quran-page">
      <div className="card-panel quran-grid">
        <div className="quran-sidebar">
          <div className="form-field">
            <label htmlFor="surahSearch">Search Surah</label>
            <input
              id="surahSearch"
              type="text"
              value={surahFilter}
              onChange={(event) => setSurahFilter(event.target.value)}
              placeholder="Search by Arabic or English name"
            />
          </div>

          <div className="surah-list">
            {filteredSurahs.map((surah) => (
              <button
                type="button"
                key={surah.id}
                className={`surah-card ${selectedSurah?.id === surah.id ? 'active' : ''}`}
                onClick={() => setSelectedSurah(surah)}
              >
                <span>{surah.name_simple}</span>
                <strong>{surah.name_arabic}</strong>
                <small>{surah.translated_name.name}</small>
              </button>
            ))}
          </div>
        </div>

        <div className="quran-content">
          <div className="content-header">
            <div>
              <p className="eyebrow">Quran Mushaf</p>
              <h2>{selectedSurah ? `${selectedSurah.name_simple} — ${selectedSurah.name_arabic}` : 'Loading surah...'}</h2>
              <p className="description">
                Read the full Mushaf with authentic Arabic verses and select a reciter for audio.
              </p>
            </div>

            <div className="form-field">
              <label htmlFor="reciter">Select Reciter</label>
              <select
                id="reciter"
                value={selectedReciterId || ''}
                onChange={(event) => setSelectedReciterId(Number(event.target.value))}
              >
                {reciters.map((reciter) => (
                  <option key={reciter.id} value={reciter.id}>
                    {reciter.reciter_name} {reciter.style ? `(${reciter.style})` : ''}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {loading && <p className="loading-text">Loading Quran content...</p>}
          {error && <p className="error-text">{error}</p>}

          {!loading && !error && selectedSurah && (
            <>
              {audioUrl ? (
                <div className="audio-player">
                  <audio controls src={audioUrl} preload="none">
                    Your browser does not support audio playback.
                  </audio>
                </div>
              ) : (
                <p className="audio-warning">Audio is unavailable for this reciter and surah.</p>
              )}

              <div className="verse-list">
                {verses.map((verse) => (
                  <article key={verse.id} className="verse-card">
                    <p className="verse-text" dir="rtl">{verse.text_uthmani}</p>
                    <div className="verse-meta">
                      <span>{verse.verse_key}</span>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Quran;
