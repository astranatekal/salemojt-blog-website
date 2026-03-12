// Central blog post data for both blog listing and individual post pages
// To add a new blog post, push a new object into the blogPosts array below.

const blogPosts = [
  {
    images: ['images/teamdayone_one.jpg', 'images/teamdayone.jpg', 'images/dskrt_img.jpg'],
    date: 'Week 1: December 9–12',
    title: 'First Week of Internship Experience at NCIP',
    cardText: 'During our first week of internship, we began our journey as IT interns by gaining hands-on experience and familiarizing ourselves...',
    message: 'During our first week of internship, we began our journey as IT interns by gaining hands-on experience and familiarizing ourselves with the workplace environment. We started developing our technical skills, understanding our assigned tasks, and learning how to work professionally within a team. Throughout this week, we were expected to be responsible, punctual, adaptable, and eager to learn as we faced new tasks and challenges.',
    dailySchedule: ['Dec 8 | (No Record)', 'Dec 9 | 8:00–5:00', 'Dec 10 | 8:00–5:00', 'Dec 11 | 8:10–4:45', 'Dec 12 | 8:30–12:00']
  },
  {
    images: ['images/week2_a.jpg', 'images/week2_b.jpg', 'images/week2_c.jpg', 'images/week2_d.jpg', 'images/week2_e.jpg'],
    date: 'Week 2: December 15–19',
    title: 'Week 2: Leadership, Coordination, and Project Continuity',
    cardText: '',
    message: '',
    dailyLogs: ["On Monday, December 15, 2025, we participated in our official OJT pictorials with the Dean and our teachers. As a Project Manager intern, I ensured that our team was present and properly coordinated during the activity. This event allowed us to formally represent our internship team and acknowledge the guidance and support provided by our academic mentors. It was a meaningful milestone that reflected our readiness to take on professional responsibilities.", "", "", "", ""],
    dailySchedule: ['Dec 15 | 7:59–5:08', 'Dec 16 | 8:15–5:08', 'Dec 17 | 8:15–5:00', 'Dec 18 | 8:20–5:00', 'Dec 19 | 8:58–5:07']
  },
  {
    images: ['images/moasignwclient1.jpg', 'images/moasignwclient2.jpg', 'images/moasignwclient3.jpg'],
    date: 'Week 3: January 5–9',
    title: 'Back in Action – Advancing Project Goals After the Break',
    cardText: '',
    message: '',
    dailySchedule: ['Jan 5 | ABSENT (AM)', 'Jan 6 | 8:46–5:00', 'Jan 7 | 8:09–5:18', 'Jan 8 | 8:20–5:20', 'Jan 9 | 7:41–5:00']
  },
  {
    images: ['images/week4_a.jpg', 'images/week4_b.jpg', 'images/week4_c.jpg', 'images/week4_d.jpg', 'images/week4_e.jpg'],
    date: 'Week 4: January 12–16',
    title: 'Consistent Progress and Ongoing Learning',
    cardText: '',
    message: '',
    dailySchedule: ['Jan 12 | 8:08–5:00', 'Jan 13 | 8:10–5:03', 'Jan 14 | 7:25–5:05', 'Jan 15 | 8:20–5:00', 'Jan 16 | (No Record)']
  },
  {
    images: ['images/week5_a.jpg', 'images/week5_b.jpg', 'images/week5_c.jpg', 'images/week5_d.jpg', 'images/week5_e.jpg', 'images/week5_f.jpg'],
    date: 'Week 5: January 19–23',
    title: 'Continuous Improvement and Task Completion',
    cardText: '',
    message: '',
    dailySchedule: ['Jan 19 | (No Record)', 'Jan 20 | 7:38–5:03', 'Jan 21 | 8:25–5:00', 'Jan 22 | 8:00–5:00', 'Jan 23 | ABSENT (AM)']
  },
  {
    images: ['images/week6_a.jpg', 'images/week6_b.jpg', 'images/week6_c.jpg', 'images/week6_d.jpg', 'images/week6_e.jpg'],
    date: 'Week 6: January 26–30',
    title: 'Strengthening Skills and Expanding Responsibilities',
    cardText: '',
    message: '',
    dailySchedule: ['Jan 26 | 7:55–5:00', 'Jan 27 | 8:48–5:00', 'Jan 28 | 7:45–5:00', 'Jan 29 | 8:40–5:00', 'Jan 30 | 8:07–5:07']
  },
  {
    images: ['images/week7_a.jpg', 'images/week7_b.jpg', 'images/week7_c.jpg', 'images/week7_d.jpg'],
    date: 'Week 7: February 2–6',
    title: 'Developing Competence and Preparing for Office Events',
    cardText: '',
    message: '',
    dailySchedule: ['Feb 2 | 7:30–4:33', 'Feb 3 | 7:38–5:08', 'Feb 4 | 7:40–5:08', 'Feb 5 | 7:37–5:02', 'Feb 6 | 7:46–5:04']
  },
  {
    images: ['images/week8_a.jpg', 'images/week8_b.jpg', 'images/week8_c.jpg', 'images/week8_d.jpg', 'images/week_e.jpg'],
    date: 'Week 8: February 9–13',
    title: 'Determined Progress in Project Development',
    cardText: '',
    message: '',
    dailySchedule: ['Feb 9 | 7:50–5:02', 'Feb 10 | 7:40–5:04', 'Feb 11 | 7:54–2:51', 'Feb 12 | 8:00–3:05', 'Feb 13 | ABSENT']
  },
  {
    images: ['images/week9_a.jpg', 'images/week9_b.jpg', 'images/week_c.jpg', 'images/week9_d.jpg', 'images/week9_e.jpg'],
    date: 'Week 9: February 16–20',
    title: 'Week 9 Progress',
    cardText: '',
    message: '',
    dailySchedule: ['Feb 16 | 8:20–5:00', 'Feb 17 | HOLIDAY', 'Feb 18 | ABSENT (AM)', 'Feb 19 | 8:00–5:00', 'Feb 20 | (No Record)']
  },
  {
    images: ['images/week10_a.jpg', 'images/week10_b.jpg', 'images/week10_c.jpg'],
    date: 'Week 10: February 23–27',
    title: 'Week 10 Progress',
    cardText: '',
    message: '',
    dailySchedule: ['Feb 23 | 8:00–5:00', 'Feb 24 | 8:00–5:00', 'Feb 25 | 7:47–5:01', 'Feb 26 | 8:03–5:03', 'Feb 27 | 7:58–5:20']
  },
  {
    images: [],
    date: 'Week 11: March 2–6',
    title: 'Week 11 Progress',
    cardText: '',
    message: ''
  },
  {
    images: [],
    date: 'Week 12: March 9–13',
    title: 'Week 12 Progress',
    cardText: '',
    message: ''
  },
  {
    images: [],
    date: 'Week 13: March 16–20',
    title: 'Week 13 Progress',
    cardText: '',
    message: ''
  },
  {
    images: [],
    date: 'Week 14: March 23–27',
    title: 'Week 14 Progress',
    cardText: '',
    message: ''
  },
  {
    images: [],
    date: 'Week 15: March 30–April 3',
    title: 'Week 15 Progress',
    cardText: '',
    message: ''
  },
  {
    images: [],
    date: 'Week 16: April 6–10',
    title: 'Week 16 Progress',
    cardText: '',
    message: ''
  },
  {
    images: [],
    date: 'Week 17: April 13–17',
    title: 'Week 17 Progress',
    cardText: '',
    message: ''
  },
  {
    images: [],
    date: 'Week 18: April 20–24',
    title: 'Week 18 Progress',
    cardText: '',
    message: ''
  }
];

// Function to parse date strings like "November 27, 2025" or "December 3-5, 2025"
function parseBlogDate(dateStr) {
  // Handle ranges like "December 3-5, 2025" by taking the first day
  const normalizedDate = dateStr.replace(/-(\d+)/, ''); 
  return new Date(normalizedDate);
}

// Automatically sort blog posts chronologically (Oldest to Newest)
blogPosts.sort((a, b) => parseBlogDate(a.date) - parseBlogDate(b.date));
