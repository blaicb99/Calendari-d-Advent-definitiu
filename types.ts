
export interface DayData {
  id: number;
  title: string; // The Team Name or "Curiositat general"
  content: string; // The fact (shown after answering correctly)
  colors: string[]; // [Primary, Secondary, Tertiary?]
  logoUrl?: string; // URL for the real image
  question: string; // The quiz question
  options: string[]; // Array of 3 possible answers
  correctAnswer: number; // Index (0, 1, or 2) of the correct answer
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  day: DayData | null;
  isCompleted: boolean;
  onComplete: () => void;
}
