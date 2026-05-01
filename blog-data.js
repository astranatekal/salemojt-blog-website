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
    title: 'Adjusting to Office Life and Capturing Memories',
    cardText: '',
    message: 'Week 2 (December 15–19, 2025)\n\nDuring the second week of our training, we gradually adapted to the nature of office work and became more familiar with our daily tasks and responsibilities. Compared to the first week, we felt more comfortable navigating the workplace environment, following instructions, and managing our time effectively. We also started to improve our communication skills and confidence when interacting with supervisors and staff. This week helped us build discipline, teamwork, and a better understanding of how professional work settings operate.\n\nIn addition, we had our Type A and Type B OJT uniform pictorial at the Buenavista SCC campus together with our teachers and dean. It was a memorable experience as we were able to capture moments of our training journey while wearing our official uniforms. The pictorial also gave us a sense of pride and accomplishment, as it symbolized our growth and participation in the program. Spending time with our mentors and classmates during this activity made the experience more enjoyable and meaningful.',
    dailyLogs: ["On Monday, December 15, 2025, we participated in our official OJT pictorials with the Dean and our teachers. As a Project Manager intern, I ensured that our team was present and properly coordinated during the activity. This event allowed us to formally represent our internship team and acknowledge the guidance and support provided by our academic mentors. It was a meaningful milestone that reflected our readiness to take on professional responsibilities.", "", "", "", ""],
    dailySchedule: ['Dec 15 | 7:59–5:08', 'Dec 16 | 8:15–5:08', 'Dec 17 | 8:15–5:00', 'Dec 18 | 8:20–5:00', 'Dec 19 | 8:58–5:07']
  },
  {
    images: ['images/moasignwclient1.jpg', 'images/moasignwclient2.jpg', 'images/moasignwclient3.jpg'],
    date: 'Week 3: January 5–9',
    title: 'Starting the Year with Progress and Commitment',
    cardText: '',
    message: 'In our third week of training, which also marked the first week of the year 2026, we continued to adjust and improve in our assigned tasks. Coming back after the holiday break, we felt more refreshed and motivated to continue our training. We became more confident in handling our responsibilities and were able to perform our tasks more efficiently compared to the previous weeks.\n\nIt was a normal yet productive week as trainees, where we focused on completing our work and carefully following the instructions given to us. Through this routine, we developed better discipline, time management, and attention to detail, which are important in a professional work environment.\n\nAdditionally, this week was significant because we started processing our Memorandum of Agreement (MOA), which was signed by our supervisor. This marked an important step in formalizing our training and ensuring that all requirements and responsibilities were properly documented. It also gave us a clearer understanding of our roles and expectations throughout the duration of our training.',
    dailySchedule: ['Jan 5 | ABSENT (AM)', 'Jan 6 | 8:46–5:00', 'Jan 7 | 8:09–5:18', 'Jan 8 | 8:20–5:20', 'Jan 9 | 7:41–5:00']
  },
  {
    images: ['images/week4_a.jpg', 'images/week4_b.jpg', 'images/week4_c.jpg', 'images/week4_d.jpg', 'images/week4_e.jpg'],
    date: 'Week 4: January 12–15',
    title: 'Getting Used to Work and Improving Our System',
    cardText: '',
    message: 'In our fourth week as trainees, we were already used to the work environment. We felt more comfortable doing our tasks and understood our responsibilities better compared to the previous weeks. We were also more confident and able to do our work with less guidance.\n\nDuring this week, we went to the Buenavista campus to have our MOA signed by our dean. This was an important step because it officially completed our training requirements. It was a good experience since we were able to visit the campus again and finalize our documents.\n\nOn the last day of the week, we had our system layout checked by our supervisor. We presented the design that we were working on, and he gave us feedback and suggestions. This helped us understand what we need to improve and gave us ideas on how to make our system better.',
    dailySchedule: ['Jan 12 | 8:08–5:00', 'Jan 13 | 8:10–5:03', 'Jan 14 | 7:25–5:05', 'Jan 15 | 8:20–5:00', 'Jan 16 | (No Record)']
  },
  {
    images: ['images/week5_a.jpg', 'images/week5_b.jpg', 'images/week5_c.jpg', 'images/week5_d.jpg', 'images/week5_e.jpg'],
    date: 'Week 5: January 20–22, 2026',
    title: 'Hands-on Experience and Event Documentation',
    cardText: '',
    message: 'In our fifth week as trainees, we started on Tuesday due to the holiday. Even though the week was shorter than usual, it was still full of meaningful tasks and experiences. We continued adjusting to our responsibilities and became more active in handling assigned work.\n\nOne of the highlights of this week was the event at NCIP, where I was assigned as one of the photographers. I was responsible for capturing important moments throughout the program. This experience helped me improve my photography skills, attention to detail, and ability to document real-time events properly. It also gave me a better understanding of how events are organized and how important documentation is in preserving memories and records.\n\nOverall, even with a shorter schedule, the week was productive and helped me gain more hands-on experience in the field.',
    dailySchedule: ['Jan 19 | (No Record)', 'Jan 20 | 7:38–5:03', 'Jan 21 | 8:25–5:00', 'Jan 22 | 8:00–5:00', 'Jan 23 | ABSENT (AM)']
  },
  {
    images: ['images/week6_a.jpg', 'images/week6_b.jpg', 'images/week6_c.jpg', 'images/week6_d.jpg', 'images/week6_e.jpg'],
    date: 'Week 6: January 26–30',
    title: 'Consistency and Daily Work Routine',
    cardText: '',
    message: 'In our sixth week as trainees, which was also the last week of January, we had a normal and steady schedule in the office. We continued doing our assigned tasks and followed the instructions given to us by our supervisor. By this time, we were already familiar with our responsibilities, so we were able to work more efficiently and with less supervision.\n\nThroughout the week, we had discussions about our tasks and the system we were working on. These discussions helped us understand our work better and gave us clearer directions on what needed to be done. We also continued improving our skills, especially in communication, teamwork, and attention to detail.\n\nEven though there were no major events this week, it was still productive because we stayed focused on our work and continued learning from our daily experiences in the office.',
    dailySchedule: ['Jan 26 | 7:55–5:00', 'Jan 27 | 8:48–5:00', 'Jan 28 | 7:45–5:00', 'Jan 29 | 8:40–5:00', 'Jan 30 | 8:07–5:07']
  },
  {
    images: ['images/week7_a.jpg', 'images/week7_b.jpg', 'images/week7_c.jpg', 'images/week7_d.jpg'],
    date: 'Week 7: February 2–6',
    title: 'Celebrations, Creativity, and Design Tasks',
    cardText: '',
    message: 'In our seventh week as trainees, we participated in the Regional Flag Raising Ceremony at NCIP. It was a meaningful activity that showed respect for our country and also brought together different offices and participants. Being part of this event helped us feel more connected to the workplace and reminded us of the importance of discipline and unity.\n\nDuring this week, we also started doing design and cutting activities in preparation for the upcoming Valentine’s Month. We worked on creative materials that match the theme, which made the week more fun and engaging compared to regular office tasks. It was a good opportunity for us to apply creativity and teamwork in our work.\n\nAdditionally, we were instructed to create a design for a calling card. This task helped us improve our skills in layout and design, especially in making professional and clean outputs. We followed the guidelines given by our supervisor and made sure to produce a suitable and presentable design.\n\nOverall, the week was a mix of formal activities and creative work, making it both productive and enjoyable.',
    dailySchedule: ['Feb 2 | 7:30–4:33', 'Feb 3 | 7:38–5:08', 'Feb 4 | 7:40–5:08', 'Feb 5 | 7:37–5:02', 'Feb 6 | 7:46–5:04']
  },
  {
    images: ['images/week8_a.jpg', 'images/week8_b.jpg', 'images/week8_c.jpg', 'images/week8_d.jpg', 'images/week_e.jpg'],
    date: 'Week 8: February 9–12, 2026',
    title: 'Teamwork and Daily Progress',
    cardText: '',
    message: 'In our eighth week as trainees, we had normal and steady days in the office. We continued doing our tasks sincerely and followed the instructions given to us. By this time, we were already comfortable with our work, which helped us finish our tasks more efficiently.\n\nDuring this week, I also had the opportunity to assist my co-trainee with tasks related to Excel data. I helped in organizing and checking the data, making sure everything was accurate and properly arranged. This experience allowed me to share what I had learned while also improving my own skills in using Excel.\n\nOverall, it was a simple but productive week, focused on teamwork, responsibility, and continuous learning.',
    dailySchedule: ['Feb 9 | 7:50–5:02', 'Feb 10 | 7:40–5:04', 'Feb 11 | 7:54–2:51', 'Feb 12 | 8:00–3:05', 'Feb 13 | ABSENT']
  },
  {
    images: ['images/week9_a.jpg', 'images/week9_b.jpg', 'images/week_c.jpg', 'images/week9_d.jpg', 'images/week9_e.jpg'],
    date: 'Week 9: February 16–19, 2026',
    title: 'Final Preparations and Graduation Assembly',
    cardText: '',
    message: 'In our ninth week as trainees, we focused on printing documents and arranging files needed for our office tasks. We carefully organized the data to make sure everything was complete and properly sorted. This helped us become more attentive to details and more responsible in handling important documents.\n\nDuring this week, we also participated in the Graduating General Assembly. It was an important event where graduating students gathered for updates, reminders, and final preparations before completing their academic journey. The assembly was meaningful because it gave us motivation and encouragement as we approach the end of our training. It also allowed us to reflect on our experiences and the progress we have made so far.\n\nOverall, this week was both productive and memorable as it combined office tasks and an important school event.',
    dailySchedule: ['Feb 16 | 8:20–5:00', 'Feb 17 | HOLIDAY', 'Feb 18 | ABSENT (AM)', 'Feb 19 | 8:00–5:00', 'Feb 20 | (No Record)']
  },
  {
    images: ['images/week10_a.jpg', 'images/week10_b.jpg', 'images/week10_c.jpg'],
    date: 'Week 10: February 23–27',
    title: 'A Meaningful and Memorable Training Experience',
    cardText: '',
    message: 'In this tenth week of being a trainee, it was a great experience for me. I was able to continue learning new things and improving my skills in handling different office tasks. Every day gave me opportunities to become more responsible, especially in following instructions and completing assigned work properly.\n\nDuring this week, I became more confident in doing my tasks with less supervision. I also learned how important teamwork is, especially when working with co-trainees to finish activities on time. There were moments where we had to organize data, check files, and make sure everything was accurate, which helped me improve my attention to detail.\n\nOverall, this week was a meaningful experience because it showed how much I have grown since the start of my training. It also motivated me to keep doing my best in the remaining weeks.',
    dailySchedule: ['Feb 23 | 8:00–5:00', 'Feb 24 | 8:00–5:00', 'Feb 25 | 7:47–5:01', 'Feb 26 | 8:03–5:03', 'Feb 27 | 7:58–5:20']
  },
  {
    images: ['images/week11_a.jpg', 'images/week11_b.jpg', 'images/week11_c.jpg', 'images/week11_d.jpg', 'images/week11_e.jpg'],
    date: 'Week 11: March 2–6',
    title: 'Introduction to Networking and Hands-on Setup',
    cardText: '',
    message: 'In this first week of March, we were introduced to networking tasks. We had the opportunity to learn and apply basic networking procedures, which gave us a new and practical experience compared to our usual office work.\n\nDuring this week, we worked on placing and organizing network cables properly. We carefully followed instructions on how to connect and arrange the cables to ensure a clean and functional setup. This activity helped us understand the importance of proper cable management, especially in maintaining an efficient and organized network system.\n\nWe also learned basic troubleshooting ideas and how network components are connected, which gave us a better understanding of how systems work behind the scenes. Even though it was a new task for us, it was a very interesting and hands-on learning experience.\n\nOverall, this week was both educational and engaging as we explored the basics of networking.'
  },
  {
    images: ['images/week12_a.jpg', 'images/week12_b.jpg'],
    date: 'Week 12: March 9–13',
    title: 'Organized Routine and Office Tasks',
    cardText: '',
    message: 'In our twelfth week as trainees, we had normal and routine days in the office. We focused on completing simple but important tasks that helped keep the office organized and running smoothly.\n\nDuring this week, we were mainly assigned to arrange documents, locate files, and handle printing tasks. We made sure that all documents were properly sorted, labeled, and stored in the correct place. This helped us develop better organization skills and taught us the importance of keeping records accurate and easy to find.\n\nWe also assisted in checking and preparing documents whenever needed. Through these tasks, we improved our attention to detail and became more efficient in handling office work.\n\nOverall, it was a quiet but productive week that helped us strengthen our basic office skills and discipline.'
  },
  {
    images: ['images/week13_a.jpg', 'images/week13_b.jpg', 'images/week13_c.jpg', 'images/week13_d.jpg'],
    date: 'Week 13: March 16–20',
    title: 'Learning Opportunities and Routine Office Work',
    cardText: '',
    message: 'In our thirteenth week as trainees, we experienced both an informative event and normal office tasks. One of the highlights of the week was an event about scholarship opportunities in Switzerland. The program provided useful information about studying abroad, including requirements, benefits, and possible opportunities for students. It was an eye-opening experience that motivated us to consider future academic and career possibilities beyond our current studies.\n\nAside from the event, the rest of the week was spent doing regular office tasks. We worked on printing documents, arranging files, and organizing records together with my co-trainee. We made sure that everything was properly sorted and completed on time. Through these tasks, we continued to improve our teamwork, efficiency, and attention to detail.\n\nOverall, the week was a balance of learning from an inspiring event and gaining experience through everyday office work.'
  },
  {
    images: ['images/week14_a.jpg', 'images/week14_b.jpg', 'images/week14_c.jpg', 'images/week14_d.jpg', 'images/week14_e.jpg', 'images/week14_f.jpg', 'images/week14_h.jpg', 'images/week14_i.jpg'],
    date: 'Week 14: March 23–27',
    title: 'Educational Tour in Cebu – Industry Exposure and Innovation Experience',
    cardText: '',
    message: 'In this week, we had our educational tour in Cebu where we visited different companies that are partners of Saint Columban College. It was a very meaningful experience because we were able to see how real companies operate and how technology is used in different industries.\n\nOn March 25 (Wednesday), we had an appointment at Smart Life where we learned about automation technology. They discussed how automation systems work and how they are used in modern industries to improve efficiency and productivity. In the afternoon, we went to FABLAB UP Cebu, where we saw creative and innovative projects that combine design, engineering, and technology. It was inspiring to see how ideas can be turned into real working prototypes.\n\nOn the second day, we visited Rivan IT Cebu, where we learned about cybersecurity and networking. They explained how important it is to protect systems and data from threats, especially in today’s digital world. In the afternoon, we went to Teleperformance Inc., where we learned about business process outsourcing (BPO) and how they work with different apps and companies like Temu and Globe. It gave us an idea of how large-scale customer service and digital partnerships operate.\n\nOn the last day of our Cebu tour, we visited MATA Technologies Inc. This company specializes in 360 virtual technology, which helps people explore places virtually, especially for those who are not familiar with a location but want to visit it. It was impressive to see how technology can be used to create virtual travel experiences and assist users in exploring places easily.\n\nOverall, it was a very meaningful and eye-opening experience. The educational tour helped us gain real-world knowledge, exposed us to different fields in technology, and inspired us to continue improving our skills for our future careers. It also strengthened our appreciation for innovation and how technology plays an important role in different industries.'
  },
  {
    images: [],
    date: 'Week 15: March 30-31 2026',
    title: 'Back to Work and Project Continuation at NCIP',
    cardText: '',
    message: 'In these two days, we went back to work after the break and continued focusing on our project at NCIP. We resumed our tasks with more motivation, especially since we were already in the final stage of our training journey.\n\nDuring this time, we worked on improving and finalizing parts of our project. We carefully followed the instructions given by our supervisor and made sure that our outputs were organized and accurate. We also reviewed our previous work to check if there were any corrections or improvements needed.\n\nEven though it was only a short period, we stayed productive and focused. We collaborated with our co-trainees to complete assigned tasks efficiently and made sure that we were progressing steadily with our requirements.\n\nOverall, these two days were important because they helped us get back on track and continue preparing our final outputs for completion.'
  },
  {
    images: ['images/week16_a.jpg', 'images/week16_b.jpg'],
    date: 'Week 16: April 6–10',
    title: 'Nearing the Finish Line of My OJT Journey',
    cardText: '',
    message: 'In this week, it was just a normal week in the office, but it felt more exciting and meaningful for me because I am already close to completing my 500-hour training requirement. I can really feel that my journey as a trainee is almost coming to an end, and it makes me both happy and proud of how far I have come.\n\nEven though the tasks were still part of our regular office work, I became more motivated and focused because I knew I was nearing the finish line. I continued doing my responsibilities properly, following instructions, and making sure that I finished my tasks on time. Every day felt valuable because I realized how much I had learned and improved since the start of my training.\n\nI also reflected on my entire experience, from the first weeks of adjustment to the more advanced tasks and activities I handled along the way. It made me appreciate all the challenges and experiences that helped me grow.\n\nOverall, this week was simple but meaningful, as it marked the final stretch of my OJT journey. I am truly happy and grateful to be nearing the completion of my 500 hours.'
  },
  {
    images: ['images/week17_a.jpg', 'images/week17_b.jpg', 'images/week17_c.jpg', 'images/week17_d.jpg', 'images/week17_e.jpg'],
    date: 'Week 17: April 13–17',
    title: 'Week 17: Final Week – Project Completion and Presentation',
    cardText: '',
    message: 'In this week, which marks my last days as a trainee, we focused on preparing and completing our final project and all required outputs. It was a very important and meaningful week because everything we worked on throughout our training was being finalized and compiled.\n\nWe carefully reviewed and finished the final requirements of our project to make sure that everything was complete and properly organized. We also made sure that our output met the expected standards given by our supervisor.\n\nOne of the highlights of this week was presenting our final project in the office together with our supervisor and the CSS Dean. During the presentation, we explained our work, discussed the system we developed, and received feedback and comments. It was a memorable experience because it showed how much we had learned and improved throughout our training.\n\nOverall, this week was a mix of nervousness, pride, and accomplishment. It marked the end of our journey as trainees, and it was a very meaningful and unforgettable experience for me.'
  },
  {
    images: ['images/week18_a.jpg', 'images/week18_b.jpg', 'images/week18_c.jpg', 'images/week18_d.jpg', 'images/week18_e.jpg', 'images/week18_f.jpg', 'images/week18_j.jpg'],
    date: 'April 28 2026',
    title: 'Completion of 500 Hours and Certification Day',
    cardText: '',
    message: 'This day marks the successful completion of our 500-hour training. It was a very meaningful and rewarding moment for all of us because it officially confirmed the end of our OJT journey. After weeks and months of hard work, learning, and experiences, we were finally able to reach this milestone.\n\nDuring the certification program, we received our certificates as proof that we had completed the required training hours. It was a proud moment not only for me but also for my co-trainees, supervisors, and everyone who guided us throughout the journey. The event highlighted our growth, dedication, and perseverance from the start until the end of our training.\n\nWe also took pictures with our co-trainees and supervisors to capture this special day. These photos serve as memories of our experiences, teamwork, and the bonds we built during the training period. It was a joyful and emotional moment as we reflected on everything we went through together.\n\nOverall, this day was a celebration of achievement and success. It marked the end of our OJT journey and the beginning of a new chapter in our personal and professional growth.'
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
