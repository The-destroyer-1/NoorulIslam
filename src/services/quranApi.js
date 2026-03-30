const QURAN_BASE = 'https://api.quran.com/api/v4';

export async function getSurahs() {
  const response = await fetch(`${QURAN_BASE}/chapters`);
  if (!response.ok) throw new Error('Failed to load surah list');
  const payload = await response.json();
  return payload.chapters;
}

export async function getSurahVerses(chapterNumber) {
  const response = await fetch(
    `${QURAN_BASE}/quran/verses/uthmani?chapter_number=${chapterNumber}&language=en`,
  );
  if (!response.ok) throw new Error('Failed to load surah verses');
  const payload = await response.json();
  return payload.verses;
}

export async function getReciters() {
  const response = await fetch(`${QURAN_BASE}/resources/recitations`);
  if (!response.ok) throw new Error('Failed to load reciter list');
  const payload = await response.json();
  return payload.recitations;
}

export async function getReciterAudio(chapterNumber, reciterId) {
  const response = await fetch(`${QURAN_BASE}/chapter_recitations/${reciterId}?chapter_number=${chapterNumber}`);
  if (!response.ok) throw new Error('Failed to load recitation audio');
  const payload = await response.json();
  return payload.audio_files?.[0]?.audio_url || '';
}
