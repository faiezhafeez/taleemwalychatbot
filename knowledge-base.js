// Taleemwaly Knowledge Base — Pakistan Education
// Sab boards aur service commissions ka data

export const PAKISTAN_BOARDS = {
  punjab: {
    name: "Punjab Boards",
    boards: [
      { code: "BISE Lahore", full: "Board of Intermediate and Secondary Education Lahore", region: "Lahore" },
      { code: "BISE Gujranwala", full: "BISE Gujranwala", region: "Gujranwala" },
      { code: "BISE Faisalabad", full: "BISE Faisalabad", region: "Faisalabad" },
      { code: "BISE Multan", full: "BISE Multan", region: "Multan" },
      { code: "BISE Rawalpindi", full: "BISE Rawalpindi", region: "Rawalpindi" },
      { code: "BISE Sargodha", full: "BISE Sargodha", region: "Sargodha" },
      { code: "BISE Sahiwal", full: "BISE Sahiwal", region: "Sahiwal" },
      { code: "BISE DG Khan", full: "BISE Dera Ghazi Khan", region: "DG Khan" },
      { code: "BISE Bahawalpur", full: "BISE Bahawalpur", region: "Bahawalpur" },
    ],
  },
  sindh: {
    name: "Sindh Boards",
    boards: [
      { code: "BSEK Karachi", full: "Board of Secondary Education Karachi", region: "Karachi" },
      { code: "BIEK Karachi", full: "Board of Intermediate Education Karachi", region: "Karachi" },
      { code: "BISE Hyderabad", full: "BISE Hyderabad", region: "Hyderabad" },
      { code: "BISE Sukkur", full: "BISE Sukkur", region: "Sukkur" },
      { code: "BISE Larkana", full: "BISE Larkana", region: "Larkana" },
      { code: "BISE Mirpurkhas", full: "BISE Mirpurkhas", region: "Mirpurkhas" },
    ],
  },
  kpk: {
    name: "Khyber Pakhtunkhwa Boards",
    boards: [
      { code: "BISE Peshawar", full: "BISE Peshawar", region: "Peshawar" },
      { code: "BISE Mardan", full: "BISE Mardan", region: "Mardan" },
      { code: "BISE Abbottabad", full: "BISE Abbottabad", region: "Abbottabad" },
      { code: "BISE Swat", full: "BISE Swat", region: "Swat" },
      { code: "BISE Malakand", full: "BISE Malakand", region: "Malakand" },
      { code: "BISE Bannu", full: "BISE Bannu", region: "Bannu" },
      { code: "BISE Kohat", full: "BISE Kohat", region: "Kohat" },
      { code: "BISE DI Khan", full: "BISE Dera Ismail Khan", region: "DI Khan" },
    ],
  },
  balochistan: {
    name: "Balochistan Boards",
    boards: [
      { code: "BISE Quetta", full: "BISE Quetta", region: "Quetta" },
      { code: "BISE Turbat", full: "BISE Turbat", region: "Turbat" },
      { code: "BISE Khuzdar", full: "BISE Khuzdar", region: "Khuzdar" },
      { code: "BISE Zhob", full: "BISE Zhob", region: "Zhob" },
      { code: "BISE Loralai", full: "BISE Loralai", region: "Loralai" },
      { code: "BISE Gwadar", full: "BISE Gwadar", region: "Gwadar" },
    ],
  },
  federal: {
    name: "Federal Board",
    boards: [
      { code: "FBISE", full: "Federal Board of Intermediate and Secondary Education Islamabad", region: "Islamabad" },
    ],
  },
  ajk: {
    name: "Azad Kashmir Board",
    boards: [
      { code: "AJK BISE Mirpur", full: "AJK Board of Intermediate and Secondary Education Mirpur", region: "Mirpur" },
    ],
  },
};

export const SERVICE_COMMISSIONS = {
  federal: [
    { code: "FPSC", full: "Federal Public Service Commission", url: "fpsc.gov.pk" },
    { code: "NTS", full: "National Testing Service", url: "nts.org.pk" },
    { code: "OTS", full: "Open Testing Service", url: "ots.org.pk" },
    { code: "PTS", full: "Pakistan Testing Service", url: "pts.org.pk" },
    { code: "CTS", full: "Central Testing Service", url: "cts.org.pk" },
  ],
  provincial: [
    { code: "PPSC", full: "Punjab Public Service Commission", url: "ppsc.gop.pk" },
    { code: "SPSC", full: "Sindh Public Service Commission", url: "spsc.gov.pk" },
    { code: "KPPSC", full: "Khyber Pakhtunkhwa Public Service Commission", url: "kppsc.gov.pk" },
    { code: "BPSC", full: "Balochistan Public Service Commission", url: "bpsc.gob.pk" },
    { code: "AJKPSC", full: "Azad Jammu Kashmir Public Service Commission", url: "ajkpsc.gov.pk" },
  ],
  testing_agencies: [
    { code: "ETEA", full: "Educational Testing and Evaluation Agency (KPK)", url: "etea.edu.pk" },
    { code: "PERA", full: "Punjab Educational Reforms Agency", url: "pera.org.pk" },
    { code: "IBA Sukkur", full: "Institute of Business Administration Sukkur Testing Service", url: "iba-suk.edu.pk" },
    { code: "STS", full: "Sindh Testing Service", url: "sts.net.pk" },
  ],
  specialized: [
    { code: "CSS", full: "Central Superior Services (FPSC)", url: "fpsc.gov.pk" },
    { code: "PMS", full: "Provincial Management Service", url: "—" },
    { code: "ISSB", full: "Inter Services Selection Board", url: "issb.gov.pk" },
    { code: "Pak Army", full: "Pakistan Army Recruitment", url: "joinpakarmy.gov.pk" },
    { code: "PAF", full: "Pakistan Air Force", url: "joinpaf.gov.pk" },
    { code: "PN", full: "Pakistan Navy", url: "joinpaknavy.gov.pk" },
  ],
};

export const AIOU_DATA = {
  programs: ["Matric", "FA", "I.Com", "BA", "B.Com", "BS", "B.Ed", "MA", "MSc", "M.Ed", "MLIS", "MA History", "MA Islamic Studies", "MA Urdu", "ATTC"],
  services: [
    "Assignments (solved/unsolved)",
    "Guess Papers 2026",
    "Past Papers",
    "Original Books PDF",
    "Degree Request",
    "Transcript / DMC",
    "NOC / Migration Certificate",
    "Duplicate Degree",
    "SSF-101 Financial Support",
    "Exam Center Change",
    "Rechecking",
    "Course Change",
    "Roll Number Slip",
    "Result Check Online",
    "Workshop Attendance",
  ],
  contact: {
    whatsapp: "03702388998",
    website: "taleemwaly.blogspot.com",
    email: "faiezhafeez@gmail.com",
  },
};

export function buildSystemPrompt() {
  const boardsList = Object.entries(PAKISTAN_BOARDS)
    .map(([key, val]) => `  • ${val.name}: ${val.boards.map(b => b.code).join(", ")}`)
    .join("\n");

  const commissionsList = Object.entries(SERVICE_COMMISSIONS)
    .map(([key, list]) => `  • ${key.toUpperCase()}: ${list.map(c => c.code).join(", ")}`)
    .join("\n");

  return `You are "Taleemwaly" — a friendly, expert Pakistani education assistant by Nationalist Academy (taleemwaly.blogspot.com).

YOUR MISSION: Help Pakistani students, parents, and job seekers with:
1. School/College boards (Matric, Intermediate, FA, FSc, I.Com)
2. University admissions (BA, B.Com, BS, MA, MSc)
3. AIOU (Allama Iqbal Open University) services
4. Service Commission jobs (FPSC, PPSC, SPSC, KPPSC, BPSC, AJKPSC)
5. Testing agencies (NTS, ETEA, OTS, PTS, PERA, IBA, STS)
6. CSS, PMS, and armed forces recruitment
7. Assignments, guess papers, past papers, books PDFs

PAKISTANI BOARDS COVERED:
${boardsList}

SERVICE COMMISSIONS COVERED:
${commissionsList}

AIOU SERVICES:
${AIOU_DATA.services.map(s => "  • " + s).join("\n")}

AIOU PROGRAMS:
${AIOU_DATA.programs.join(", ")}

RESPONSE STYLE:
- Language: Match student's language (Roman Urdu, Urdu, or English)
- Tone: Friendly, helpful, like a senior brother/teacher
- Length: Concise — 2-4 lines for simple queries, more if needed
- Use emojis sparingly (1-2 per response)
- Use bullet points for lists
- Give exact URLs, dates, fees, and step-by-step if asked
- If unsure, guide to WhatsApp: ${AIOU_DATA.contact.whatsapp}

IMPORTANT RULES:
- NEVER copy-paste answers — always paraphrase in your own words
- ALWAYS mention source (board name, commission name)
- For dates/deadlines, add "verify on official site" note
- Never promise 100% accuracy — say "usually" or "typically"
- Keep answers Pakistan-focused
- If student asks about AIOU, mention Nationalist Academy resources
- For jobs/commissions, mention last date and application process if known

EXAMPLE INTERACTIONS:

User: "Matric ka result kb aayega?"
You: "Matric result usually July-August mein aata hai. Aap kaunse board se hain? (BISE Lahore, Karachi, Peshawar, Quetta?). Latest updates ke liye board ki official website check karein ya humein WhatsApp karein: 03702388998"

User: "PPSC ki tayari k liye books btao"
You: "PPSC ki tayari ke liye:
• Dogar PPSC Guide
• Caravan PPSC
• Ilmi PPSC Series
• Current Affairs (Jahangir World Times)
• Pakistan Affairs (Ikram Rabbani)
Nationalist Academy pe PPSC Notes free hain: taleemwaly.blogspot.com/search/label/PPSC"

User: "AIOU assignment kb tk submit krni hai?"
You: "AIOU Spring 2026 deadlines:
• 6-credit courses: A1=10-Jun, A2=06-Jul, A3=31-Jul, A4=20-Aug
• 3-credit courses: A1=06-Jul, A2=20-Aug
Late submission accept nahi hoti. Solved assignments: taleemwaly.blogspot.com/p/aiou-assignments.html"

User: "NTS ka test pattern kya hai?"
You: "NTS test mein usually:
• Verbal Reasoning (20-30%)
• Quantitative (20-30%)
• Analytical (15-20%)
• Subject-specific (30-40%)
Total: 100 MCQs, 90 minutes (varies by post).
NTS ki official site nts.org.pk pe latest pattern check karein."

User: "CSS k liye age limit kya hai?"
You: "CSS (FPSC) age limit:
• General: 21-30 years
• Relaxation: 2 years (some categories)
• Age cut-off: 31 December of exam year
FPSC ki official website fpsc.gov.pk pe latest rules verify karein."

REMEMBER: You are "Taleemwaly" — Pakistan's education friend. Every answer should make the student feel helped and guided. 🇵🇰📚`;
}
