import { Briefcase, Video, Code2, TrendingUp, Megaphone, MapPin, GraduationCap, Mail } from 'lucide-react';

type JobOpening = {
  id: string;
  title: string;
  icon: typeof Briefcase;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  location: string;
  experience: string;
  compensation: string;
};

const openings: JobOpening[] = [
  {
    id: 'video-editor',
    title: 'Video Editor',
    icon: Video,
    overview:
      "We're looking for a creative Video Editor who can edit engaging videos and create content for social media and other platforms.",
    responsibilities: [
      'Edit videos and create social media content',
      'Collaborate on ideas with the team',
    ],
    requirements: [
      'Basic editing skills and creativity',
      'Willingness to learn',
      'No prior experience required',
    ],
    location: 'Remote',
    experience: 'Fresher',
    compensation: 'To be discussed during the interview',
  },
  {
    id: 'java-trainee',
    title: 'Java Trainee (J2EE / REST API)',
    icon: Code2,
    overview:
      'Hiring a Java Trainee interested in backend development and learning on real projects.',
    responsibilities: [
      'Assist in backend development',
      'Work on REST APIs',
      'Learn and contribute on live projects',
    ],
    requirements: [
      'Basic Java knowledge',
      'J2EE / REST API experience preferred',
    ],
    location: 'Jaipur',
    experience: 'Fresher / Trainee',
    compensation: 'To be discussed during the interview',
  },
  {
    id: 'business-development',
    title: 'Business Development Trainee',
    icon: TrendingUp,
    overview: 'Help expand business opportunities and outreach for SlateBiz.',
    responsibilities: [
      'Identify potential clients',
      'Assist with outreach and communication',
      'Support business growth initiatives',
    ],
    requirements: ['Good communication skills', 'Interest in business development'],
    location: 'Remote',
    experience: 'Fresher / Trainee',
    compensation: 'To be discussed during the interview',
  },
  {
    id: 'social-media-manager',
    title: 'Social Media Marketing Manager',
    icon: Megaphone,
    overview: 'Create and manage social media content to grow our brand presence.',
    responsibilities: [
      'Content planning and scheduling',
      'Posting and community engagement',
      'Track and improve social performance',
    ],
    requirements: [
      'Basic social media knowledge',
      'Creativity and consistency',
      'No prior experience required',
    ],
    location: 'Remote',
    experience: 'Fresher',
    compensation: 'To be discussed during the interview',
  },
];

function applyMailto(roleTitle: string) {
  const subject = encodeURIComponent(`Application for ${roleTitle} – SlateBiz`);
  return `mailto:info@slatebiz.com?subject=${subject}`;
}

export default function Careers() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] dark:bg-gray-900 pb-16">
      <section className="bg-gradient-to-r from-[#003B91] to-[#0071C5] text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[32px] sm:text-[44px] font-semibold mb-5 tracking-tight leading-tight">
            Careers at SlateBiz
          </h1>
          <p className="text-[15px] sm:text-[17px] text-blue-100 max-w-2xl mx-auto leading-relaxed font-medium">
            We&apos;re always looking for motivated individuals who want to learn, grow, and build
            impactful digital solutions with us. Explore our current openings below.
          </p>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 py-16 lg:py-20">
        <div className="text-center mb-12">
          <h2 className="text-[28px] sm:text-[32px] font-semibold text-gray-900 dark:text-white tracking-tight mb-3">
            Current Openings
          </h2>
          <p className="text-gray-600 dark:text-gray-400 font-medium">
            {openings.length} roles available — apply with your resume today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {openings.map((job) => {
            const Icon = job.icon;
            return (
              <article
                key={job.id}
                className="bg-white dark:bg-gray-800 rounded-[1.5rem] border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
              >
                <div className="p-5 sm:p-8 md:p-10 flex flex-col flex-grow">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 shrink-0 bg-indigo-50 dark:bg-indigo-900/40 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <h3 className="text-xl sm:text-[22px] font-semibold text-gray-900 dark:text-white tracking-tight">
                      {job.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-[15px] leading-relaxed mb-6">
                    <span className="font-semibold text-gray-900 dark:text-white">Role Overview: </span>
                    {job.overview}
                  </p>

                  <div className="mb-5">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide mb-2">
                      Responsibilities
                    </h4>
                    <ul className="space-y-1.5 text-[14px] text-gray-600 dark:text-gray-300">
                      {job.responsibilities.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="text-indigo-500 mt-1.5 shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide mb-2">
                      Requirements
                    </h4>
                    <ul className="space-y-1.5 text-[14px] text-gray-600 dark:text-gray-300">
                      {job.requirements.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="text-indigo-500 mt-1.5 shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-50 dark:bg-gray-700/50 text-[12px] font-medium text-gray-700 dark:text-gray-300">
                      <MapPin className="w-3.5 h-3.5 text-primary-500" />
                      {job.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-50 dark:bg-gray-700/50 text-[12px] font-medium text-gray-700 dark:text-gray-300">
                      <GraduationCap className="w-3.5 h-3.5 text-primary-500" />
                      {job.experience}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-50 dark:bg-gray-700/50 text-[12px] font-medium text-gray-700 dark:text-gray-300">
                      <Briefcase className="w-3.5 h-3.5 text-primary-500" />
                      {job.compensation}
                    </span>
                  </div>
                </div>

                <div className="px-8 sm:px-10 pb-8 sm:pb-10">
                  <a
                    href={applyMailto(job.title)}
                    className="block w-full text-center px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-[13px] tracking-widest uppercase rounded-lg shadow-md shadow-indigo-200/50 dark:shadow-none transition-all transform hover:-translate-y-0.5"
                  >
                    Apply for this role
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="max-w-[900px] mx-auto px-4 sm:px-8 pb-8">
        <div className="bg-white dark:bg-gray-800 rounded-[2rem] border border-gray-100 dark:border-gray-700 shadow-sm p-10 sm:p-14 text-center">
          <div className="w-14 h-14 mx-auto mb-6 bg-indigo-50 dark:bg-indigo-900/40 rounded-2xl flex items-center justify-center">
            <Mail className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
          </div>
          <h2 className="text-[26px] sm:text-[30px] font-semibold text-gray-900 dark:text-white mb-4 tracking-tight">
            How to Apply
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-[15px] leading-relaxed max-w-xl mx-auto mb-8">
            Send your resume to{' '}
            <a
              href="mailto:info@slatebiz.com"
              className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
            >
              info@slatebiz.com
            </a>{' '}
            with the subject line:
          </p>
          <p className="inline-block px-5 py-3 rounded-xl bg-gray-50 dark:bg-gray-700/50 text-[14px] font-medium text-gray-800 dark:text-gray-200 border border-gray-100 dark:border-gray-600">
            Application for [Role Name] – SlateBiz
          </p>
        </div>
      </section>
    </div>
  );
}