const cvData = {
    profile: {
        name: 'Deependra Singh',
        title: 'Software Development Engineer',
        summary: 'Focused on distributed systems, low-latency platforms, and scalable data-driven pipelines.',
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
                '<strong>Real-time inference pipeline (user embeddings)</strong>: Building a streaming job that consumes <strong>~17K events/sec</strong> across 5 user-interaction streams (product page views, add-to-cart, wishlist, buy-now, orders), assembles per-user feature context, and invokes a PyTorch transformer to refresh short-term user embeddings for <strong>300M+ users</strong>.',
                'Built offline enrichment jobs in <strong>PySpark</strong> joining <strong>5+ data warehouse tables</strong> and persisting <strong>~830 GB</strong> of user and product metadata into <strong>HBase</strong> with a single-blob row design for <strong>sub-millisecond reads</strong>.',
                'Evaluated <strong>Spark Streaming</strong> vs <strong>Flink</strong> and model-hosting strategies (in-process vs. localhost gRPC); designed schema for <strong>14-day rolling event history</strong> with priority-based retention.'
            ]
        },
        {
            title: 'Software Development Engineer 1',
            period: 'Jun 2024 – Mar 2026',
            company: 'Flipkart — Bengaluru, Karnataka',
            bullets: [
                'Architected the push-based capability for the notification platform that delivers <strong>1B+ notifications/day</strong>, designing it to reuse existing scheduling, dispatch, and frequency-capping infrastructure rather than building a parallel pipeline; enabled time-sensitive customer lifecycle management (CLM) campaigns at platform scale.',
                'Redesigned the dispatch service from a heavy orchestrator into a pure execution engine by moving content fetching and model-based ranking upstream into a unified allocation layer, eliminating real-time provider latency at delivery time.',
                'Drove scaling and performance NFRs for peak sale traffic: scaled the allocation engine to <strong>20K RPS on 7 machines</strong> (down from 16K RPS on 32 machines, <strong>~78% infra reduction</strong>), and the recommendation dispatch service to <strong>24K RPS</strong> while clearing a <strong>17M-event lag</strong> and dropping content-assignment latency from <strong>500ms to 146ms</strong>.',
                'Diagnosed a logging-layer bottleneck via <strong>JFR profiling</strong>: identified a Netty monitor lock with <strong>57 min blocked time</strong> spanning 151 threads; proposed Netty tuning and migration to a streaming-based logging system to decouple latency from log persistence.',
                'Spearheaded multi-tenancy onboarding of a new business unit (Shopsy) onto the platform, converting it from single-tenant to multi-tenant by injecting tenant context throughout the allocation, scheduling, and dispatch layers; provisioned dedicated <strong>Spark, Kafka, Aerospike, HBase and Kubernetes</strong> infrastructure.',
                'Resolved iOS transactional notification latency from up to <strong>12 hours to ~1 minute</strong> by isolating critical transactional clients into a dedicated high-priority delivery topology, eliminating noisy-neighbor effects from promotional traffic during sale events.',
                'Recognized with Flipkart\'s <strong>Instant Karma Award</strong> for operational excellence during peak sale scaling. - Link'
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
            summary: 'Aethel - A pluggable Spark Structured Streaming ingestion engine in Java that lands Kafka events into partitioned object-store sinks (GCS, S3 and HDFS) on Google Cloud Dataproc. Built to replace the typical pile of copy-pasted per-topic Spark jobs with a single YAML-configured platform - onboarding a new topic becomes a config change, not a 400-line fork.',
            bullets: [
                'Pluggable architecture: source/sink interfaces with typed polymorphic YAML config that <strong>fails fast</strong> at parse time with descriptive errors, never deep inside a Spark job; a new connector is one config class + one factory branch.',
                'Schema-driven, observable parsing: a side-effect-free processor parses every record against an explicit <strong>Spark StructType</strong>; a custom <strong>StreamingQueryListener</strong> surfaces consumed-vs-written gaps to catch silent schema drift in production.',
                'Production-honest semantics: <strong>exactly-once file commits</strong> via Spark\'s _spark_metadata log, <strong>AvailableNow trigger</strong> for scheduled batch-mode streaming, and deterministic <strong>Murmur3 bucketing</strong> for stable downstream partitioning.'
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
                detail: 'Achieved global rank 201 among 14,000 participants.'
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
