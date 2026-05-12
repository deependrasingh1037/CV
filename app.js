const cvData = {
    profile: {
        name: 'Deependra Singh',
        title: 'Software Development Engineer',
        summary: 'Focused on distributed systems, low-latency platforms, and scalable event-driven pipelines.',
        photo: 'My photo.jpg',
        contact: [
            'Bengaluru, Karnataka • 560035',
            '+91 81879 72857 • deependrasingh1037@gmail.com',
            '<a href="https://github.com/deependrasingh1037" target="_blank">GitHub</a> • <a href="https://www.linkedin.com/in/deependra-singh-41943715a/" target="_blank">LinkedIn</a>'
        ]
    },
    experience: [
        {
            title: 'Software Development Engineer 2',
            period: 'Apr 2026 – Present',
            company: 'Flipkart — Bengaluru, Karnataka',
            bullets: [
                'Built a real-time inference pipeline for user embeddings that consumes ~17K events/sec across 5 interaction streams and refreshes short-term embeddings for 300M+ users.',
                'Implemented offline PySpark enrichment jobs joining 5+ warehouse tables and persisted ~830 GB of user/product metadata into HBase using a single-blob row design for sub-millisecond read performance.',
                'Evaluated Spark Streaming vs Flink and model-hosting approaches, and designed a 14-day rolling event history schema with priority-based retention.'
            ]
        },
        {
            title: 'Software Development Engineer 1',
            period: 'Jun 2024 – Mar 2026',
            company: 'Flipkart — Bengaluru, Karnataka',
            bullets: [
                'Architected a push-based notification capability delivering 1B+ notifications/day by reusing existing scheduling, dispatch, and frequency-capping infrastructure.',
                'Redesigned dispatch service into a pure execution engine, moving content fetch and ranking upstream to eliminate provider latency at delivery time.',
                'Scaled allocation engine to 20K RPS on 7 machines (from 16K RPS on 32 machines) and recommendation dispatch to 24K RPS while clearing a 17M-event lag and reducing latency from 500ms to 146ms.',
                'Diagnosed logging bottlenecks using JFR, identified a Netty monitor lock spanning 151 threads, and proposed streaming-based persistence to decouple latency from logging.',
                'Spearheaded multi-tenancy onboarding for Shopsy across Spark, Kafka, Aerospike, HBase, and Kubernetes infrastructure.',
                'Resolved iOS transactional notification latency from 12 hours to ~1 minute with a dedicated high-priority delivery topology.',
                'Recognized with Flipkart Instant Karma Award for operational excellence during peak sale scaling.'
            ]
        }
    ],
    education: {
        school: 'IIT BHU Varanasi',
        degree: 'Bachelor of Technology, Electronics & Communication Engineering',
        details: 'CGPA 8.7 / 10 • Nov 2020 – May 2024'
    },
    skills: [
        {
            title: 'Languages & Big Data',
            items: 'Java, Python, C++, SQL, Spark Structured Streaming, PySpark, Storm, Kafka, Flink'
        },
        {
            title: 'Storage, Frameworks & Tools',
            items: 'HBase, Aerospike, MySQL, GCP, Dropwizard, Spring Boot, Docker, Kubernetes, JFR, Git, Maven'
        },
        {
            title: 'Concepts',
            items: 'Distributed Systems, Low-Latency Design, System Design, Microservices, OOP, Design Patterns'
        }
    ],
    projects: [
        {
            title: 'Aethel',
            summary: 'A pluggable Spark Structured Streaming ingestion engine in Java that lands Kafka events into partitioned object-store sinks (GCS, S3, HDFS) on Google Cloud Dataproc.',
            bullets: [
                'Replaced multiple per-topic Spark jobs with a single YAML-configured ingestion platform so new topics require only configuration changes.',
                'Implemented typed source/sink interfaces and fail-fast YAML parsing to catch config issues before runtime.',
                'Added schema-driven parsing and StreamingQueryListener monitoring to surface consumed-vs-written gaps and prevent schema drift.',
                'Delivered production-honest semantics with exactly-once file commits, AvailableNow batch triggers, and deterministic Murmur3 bucketing.'
            ]
        }
    ],
    competitiveProgramming: {
        profiles: [
            {
                platform: 'Codeforces',
                url: 'https://codeforces.com/profile/c0dex',
                summary: 'Achieved Expert with a peak rating of 1707.'
            },
            {
                platform: 'LeetCode',
                url: 'https://leetcode.com/u/deependra_singh_1037/',
                summary: 'Achieved Guardian with a peak rating of 2259.'
            },
            {
                platform: 'CodeChef',
                url: 'https://www.codechef.com/users/godfatherdp',
                summary: 'Achieved global rank 25 among 24,000+ participants in the Starters division.'
            }
        ],
        contests: [
            {
                title: 'Meta Hacker Cup 2025',
                url: 'https://drive.google.com/file/d/1H08BO22vJYWJIfXA8vV43EfgRwAaJe7G/view?usp=sharing',
                detail: 'Advanced to Round 2, placing in the top 2,000 globally.'
            },
            {
                title: 'Newton\'s Grand Coding Contest 2022',
                url: 'https://drive.google.com/file/d/18w_jxLLHcRzT04EceWAIhQ1okgZ-YoiK/view?usp=drive_link',
                detail: 'Ranked 201 among 14,000 global participants.'
            }
        ]
    }
};

const createElement = (tag, attrs = {}, children = []) => {
    const element = document.createElement(tag);
    Object.entries(attrs).forEach(([key, value]) => {
        if (key === 'className') {
            element.className = value;
        } else if (key === 'html') {
            element.innerHTML = value;
        } else {
            element.setAttribute(key, value);
        }
    });
    children.flat().forEach(child => {
        if (typeof child === 'string') {
            element.appendChild(document.createTextNode(child));
        } else if (child instanceof Node) {
            element.appendChild(child);
        }
    });
    return element;
};

const renderList = (items) => {
    const list = createElement('ul', { className: 'list-clean' });
    items.forEach(item => {
        const listItem = createElement('li', {}, [item]);
        list.appendChild(listItem);
    });
    return list;
};

const renderSection = (title, contentNodes) => {
    const section = createElement('section', { className: 'section-card' });
    section.appendChild(createElement('h2', { className: 'section-title' }, [title]));
    contentNodes.flat().forEach(node => section.appendChild(node));
    return section;
};

const renderProfile = (profile) => {
    const image = createElement('img', {
        className: 'profile-image',
        src: profile.photo,
        alt: `${profile.name} profile photo`
    });

    const profileCard = createElement('div', { className: 'profile-card' }, [image]);

    const profileSummary = createElement('div', { className: 'profile-summary' }, [
        createElement('h1', {}, [profile.name]),
        createElement('p', {}, [profile.summary])
    ]);

    const contactList = createElement('ul', { className: 'contact-list' });
    profile.contact.forEach(item => {
        const contactItem = createElement('li', { html: item });
        contactList.appendChild(contactItem);
    });

    profileSummary.appendChild(contactList);

    return createElement('header', { className: 'site-header' }, [profileCard, profileSummary]);
};

const renderJob = (job) => {
    const headline = createElement('div', { className: 'job-headline' }, [
        createElement('span', {}, [job.title]),
        createElement('span', {}, [job.period])
    ]);

    const company = createElement('p', { className: 'job-company' }, [job.company]);
    const details = renderList(job.bullets);

    return createElement('article', { className: 'job-item' }, [headline, company, details]);
};

const renderProject = (project) => {
    const summary = createElement('p', {}, [
        createElement('strong', {}, [project.title]),
        ` — ${project.summary}`
    ]);
    const details = renderList(project.bullets);
    return createElement('article', { className: 'job-item' }, [summary, details]);
};

const renderAnchor = (href, label) => {
    return createElement('a', { href, target: '_blank', rel: 'noopener noreferrer' }, [label]);
};

const renderCompetitiveProgramming = (data) => {
    const profileList = createElement('ul', { className: 'list-clean' });
    data.profiles.forEach(profile => {
        const link = renderAnchor(profile.url, profile.platform);
        const item = createElement('li', {}, [
            link,
            ` — ${profile.summary}`
        ]);
        profileList.appendChild(item);
    });

    const contestHeading = createElement('p', { className: 'job-company' }, ['Selected contest achievements']);
    const contestList = createElement('ul', { className: 'list-clean' });

    data.contests.forEach(contest => {
        const link = renderAnchor(contest.url, contest.title);
        const item = createElement('li', {}, [link, ` — ${contest.detail}`]);
        contestList.appendChild(item);
    });

    return [profileList, contestHeading, contestList];
};

const init = () => {
    const root = document.getElementById('cv-root');
    if (!root) return;

    root.appendChild(renderProfile(cvData.profile));

    const experienceSection = renderSection('Work Experience', cvData.experience.map(renderJob));
    root.appendChild(experienceSection);

    const educationBlock = createElement('div', {}, [
        createElement('strong', {}, [cvData.education.school]),
        createElement('br'),
        createElement('span', {}, [cvData.education.degree]),
        createElement('br'),
        createElement('span', {}, [cvData.education.details])
    ]);
    root.appendChild(renderSection('Education', [educationBlock]));

    const skillsSection = renderSection('Skills', cvData.skills.map(skill => {
        return createElement('div', { className: 'skill-group' }, [
            createElement('h3', {}, [skill.title]),
            createElement('p', {}, [skill.items])
        ]);
    }));
    root.appendChild(skillsSection);

    const projectsSection = renderSection('Projects', cvData.projects.map(renderProject));
    root.appendChild(projectsSection);

    const cpSection = renderSection('Competitive Programming', renderCompetitiveProgramming(cvData.competitiveProgramming));
    root.appendChild(cpSection);

    const connectSection = createElement('section', { className: 'section-card' }, [
        createElement('h2', { className: 'section-title' }, ['Connect']),
        createElement('p', {}, [createElement('a', { href: 'contacts.html', target: '_blank' }, ['Open contact details'])])
    ]);
    root.appendChild(connectSection);
};

window.addEventListener('DOMContentLoaded', init);
