import confetti from 'canvas-confetti';
import { audioService } from './audioService.js';

class QuizService {
  constructor() {
    this.storageKey = 'flipbook_student_progress';
    this.loadState();
  }

  loadState() {
    const saved = localStorage.getItem(this.storageKey);
    if (saved) {
      try {
        this.state = JSON.parse(saved);
      } catch (e) {
        this.state = this.getDefaultState();
      }
    } else {
      this.state = this.getDefaultState();
    }
  }

  getDefaultState() {
    return {
      student: {
        name: '',
        class: '',
        school: ''
      },
      answers: {}, // { [pageId]: { selected: 'A', isCorrect: true } }
      reflection: '',
      bookmarks: []
    };
  }

  saveState() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.state));
  }

  setStudentIdentity(name, className, school) {
    this.state.student = { name, class: className, school };
    this.saveState();
  }

  getStudentIdentity() {
    return this.state.student;
  }

  setReflection(text) {
    this.state.reflection = text;
    this.saveState();
  }

  getReflection() {
    return this.state.reflection || '';
  }

  submitAnswer(pageId, selectedKey, correctAnswer) {
    const isCorrect = (selectedKey === correctAnswer);
    this.state.answers[pageId] = {
      selected: selectedKey,
      isCorrect: isCorrect,
      timestamp: Date.now()
    };
    this.saveState();

    if (isCorrect) {
      audioService.playCorrectSound();
      this.triggerConfetti();
    } else {
      audioService.playWrongSound();
    }

    return isCorrect;
  }

  getAnswer(pageId) {
    return this.state.answers[pageId] || null;
  }

  getScoreSummary() {
    const quizPageIds = [17, 18, 31, 32, 45, 46];
    let correctCount = 0;
    let answeredCount = 0;

    quizPageIds.forEach(id => {
      if (this.state.answers[id]) {
        answeredCount++;
        if (this.state.answers[id].isCorrect) {
          correctCount++;
        }
      }
    });

    const total = quizPageIds.length;
    const score = Math.round((correctCount / total) * 100);

    return {
      answeredCount,
      correctCount,
      total,
      score,
      stars: correctCount
    };
  }

  triggerConfetti() {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.75 },
      colors: ['#e07a5f', '#f4a261', '#2a9d8f', '#3d5a80', '#e76f51', '#ffd166']
    });
  }

  toggleBookmark(pageIndex) {
    const idx = this.state.bookmarks.indexOf(pageIndex);
    if (idx > -1) {
      this.state.bookmarks.splice(idx, 1);
    } else {
      this.state.bookmarks.push(pageIndex);
    }
    this.saveState();
    return this.state.bookmarks.includes(pageIndex);
  }

  isBookmarked(pageIndex) {
    return this.state.bookmarks.includes(pageIndex);
  }
}

export const quizService = new QuizService();
