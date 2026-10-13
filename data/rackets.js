// רשימת המחבטים באתר.
// כדי להוסיף מחבט: מעתיקים אובייקט, משנים את הפרטים ושומרים. האתר מתעדכן אוטומטית.
//
// שדות:
//   condition: "new" (חדש) או "used" (משומש)
//   level: "beginner" | "intermediate" | "advanced"
//   headSize: גודל ראש באינצ'ים רבועים
//   weight: משקל בגרמים (ללא מיתור)
//   balance: נקודת איזון במ"מ מקצה הידית
//   grip: מידת אחיזה (L1–L4)
//   frame: צבע המסגרת בציור
//   photo: נתיב לתמונה (אופציונלי), למשל "images/pure-drive.jpg"

window.RACKETS = [
  {
    id: "pure-drive-2024",
    brand: "Babolat",
    model: "Pure Drive",
    year: 2024,
    condition: "used",
    conditionNote: "שוחק כחצי שנה, מיתור חדש",
    price: 650,
    headSize: 100,
    weight: 300,
    balance: 320,
    grip: "L2",
    level: "intermediate",
    frame: "#2D6CB5",
    photo: ""
  },
  {
    id: "pro-staff-97-v14",
    brand: "Wilson",
    model: "Pro Staff 97 v14",
    year: 2023,
    condition: "used",
    conditionNote: "שריטות קלות במסגרת",
    price: 720,
    headSize: 97,
    weight: 315,
    balance: 310,
    grip: "L3",
    level: "advanced",
    frame: "#1E1E1E",
    photo: ""
  },
  {
    id: "ezone-100",
    brand: "Yonex",
    model: "EZONE 100",
    year: 2025,
    condition: "new",
    conditionNote: "באריזה, לא מיותר",
    price: 990,
    headSize: 100,
    weight: 300,
    balance: 320,
    grip: "L2",
    level: "intermediate",
    frame: "#2A4FA8",
    photo: ""
  },
  {
    id: "speed-mp",
    brand: "Head",
    model: "Speed MP",
    year: 2024,
    condition: "used",
    conditionNote: "מצב מצוין, גריפ מקורי",
    price: 680,
    headSize: 100,
    weight: 300,
    balance: 320,
    grip: "L3",
    level: "intermediate",
    frame: "#E6E6E6",
    photo: ""
  },
  {
    id: "clash-100",
    brand: "Wilson",
    model: "Clash 100",
    year: 2023,
    condition: "used",
    conditionNote: "מסגרת גמישה, נוח למרפק",
    price: 560,
    headSize: 100,
    weight: 295,
    balance: 320,
    grip: "L2",
    level: "beginner",
    frame: "#B3262E",
    photo: ""
  },
  {
    id: "pure-aero-team",
    brand: "Babolat",
    model: "Pure Aero Team",
    year: 2024,
    condition: "new",
    conditionNote: "חדש, כולל כיסוי",
    price: 890,
    headSize: 100,
    weight: 285,
    balance: 325,
    grip: "L1",
    level: "beginner",
    frame: "#E8B21E",
    photo: ""
  }
];

// מספר וואטסאפ לפניות (בפורמט בינלאומי, בלי + ובלי מקפים)
window.SHOP = {
  name: "המחבט",
  whatsapp: "972500000000",
  city: "ישראל"
};
