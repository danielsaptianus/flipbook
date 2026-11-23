/**
 * Data Konfigurasi Misi Interaktif (Pop-up Modal)
 * Aset disimpan di folder /mission/misi-01/
 */
export const missionsData = {
  'misi-01': {
    id: 'misi-01',
    missionNumber: 1,
    triggerPage: 9,
    title: 'Misi 1: Solusi Terbaik',
    question: 'Apa solusi terbaik agar mereka tidak bertengkar?',
    options: [
      { key: 'A', text: 'Hanya budaya Naya yang tampil, karena Naya bicara lebih dulu.', isCorrect: false },
      { key: 'B', text: 'Tidak ada budaya yang tampil.', isCorrect: false },
      { key: 'C', text: 'Ketiga budaya tampil bersama, dan setiap anak bergantian mengenalkan budayanya.', isCorrect: true }
    ],
    correctAnswer: 'C',
    feedback: {
      correct: '🎉 Luar biasa! Ketiga budaya tampil bersama dengan rukun dan saling menghargai!',
      wrong: 'Coba pikirkan lagi ya, apa solusi terbaik agar ketiga sahabat tetap bisa menampilkan budayanya?'
    },
    assets: {
      background: '/mission/misi-01/background.png',
      misiBadge: '/mission/misi-01/misi.png',
      lampuHeader: '/mission/misi-01/lampu.png',
      foliageTop: '/mission/misi-01/daun-atas.png',
      questionCard: '/mission/misi-01/template-pertanyaan.png',
      answerCard: '/mission/misi-01/template-jawaban.png',
      fence: '/mission/misi-01/pagar.png',
      bushBottomLeft: '/mission/misi-01/daun-bawah.png',
      bushBottomRight: '/mission/misi-01/daun-bawah-kanan.png'
    }
  }
};

export function getMissionById(missionId) {
  return missionsData[missionId] || null;
}
