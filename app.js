const cvData = {
    profile: {
        name: 'Deependra Singh',
        title: 'Software Development Engineer',
        summary: 'Focused on distributed systems, low-latency platforms, and scalable event-driven pipelines.',
        photo: 'My photo.jpg',
        contact: [
            'Bengaluru, Karnataka • 560035',
            '+91 81879 72857 • deependrasingh1037@gmail.com',
            '<a href="https://github.com/deependrasingh1037" target="_blank">GitHub</a> • <a href="https://www.linkedin.com/in/deependrasingh1037/" target="_blank">LinkedIn</a>'
        ]
    },
    experience: [
        {
            title: 'Software Development Engineer 2',
            period: 'Apr 2026 – Present',
            company: 'Flipkart — Bengaluru, Karnataka',
            bullets: [
                'Built a <strong>real-time inference pipeline</strong> for user embeddings that consumes <strong>~17K events/sec</strong> across five streams and refreshes short-term embeddings for <strong>300M+ users</strong>.',
                'Implemented offline PySpark enrichment jobs joining <strong>5+ warehouse tables</strong> and persisted <strong>~830 GB</strong> of metadata into HBase using a single-blob row design for <strong>sub-millisecond reads</strong>.',
                'Compared Spark Streaming and Flink for model-hosting, and designed a <strong>14-day rolling event history schema</strong> with priority-based retention.'
            ]
        },
        {
            title: 'Software Development Engineer 1',
            period: 'Jun 2024 – Mar 2026',
            company: 'Flipkart — Bengaluru, Karnataka',
            bullets: [
                'Architected a push-based notification capability delivering <strong>1B+ notifications/day</strong> by reusing existing scheduling, dispatch, and frequency-capping infrastructure.',
                'Redesigned dispatch into a <strong>pure execution engine</strong>, moving content fetch and ranking upstream to eliminate provider latency at delivery time.',
                'Scaled allocation engine to <strong>20K RPS on 7 machines</strong> (from 16K RPS on 32 machines), cleared a <strong>17M-event lag</strong>, and cut delivery latency from <strong>500ms to 146ms</strong>.',
                'Diagnosed a logging bottleneck with JFR, identified a Netty monitor lock spanning <strong>151 threads</strong>, and proposed streaming persistence to decouple latency from logs.',
                'Spearheaded Shopsy multi-tenancy onboarding across Spark, Kafka, Aerospike, HBase, and Kubernetes infrastructure.',
                'Resolved iOS transactional notification latency from <strong>12 hours to ~1 minute</strong> by isolating critical clients in a high-priority delivery topology.',
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
                'Replaced multiple per-topic Spark jobs with a single <strong>YAML-configured ingestion platform</strong>, making new topic onboarding a config change instead of a 400-line fork.',
                'Built typed source/sink interfaces with fail-fast YAML parsing so connector issues fail early rather than inside long-running Spark jobs.',
                'Added schema-driven parsing and StreamingQueryListener monitoring to catch consumed-vs-written gaps and prevent schema drift.',
                'Delivered production-honest semantics with <strong>exactly-once file commits</strong>, <strong>AvailableNow batch triggers</strong>, and deterministic Murmur3 bucketing for stable partitioning.'
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
                detail: 'Achieved global rank  201 among 14,000 participants.'
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
        const listItem = typeof item === 'string'
            ? createElement('li', { html: item })
            : createElement('li', {}, [item]);
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

    const contestHeading = createElement('p', { className: 'job-company' }, ['Recent contest achievements']);
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
