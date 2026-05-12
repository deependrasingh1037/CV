import { createElement, renderList, renderSection, renderAnchor } from './dom-utils.js';

export const renderProfile = (profile) => {
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

export const renderJob = (job) => {
    const headline = createElement('div', { className: 'job-headline' }, [
        createElement('span', {}, [job.title]),
        createElement('span', {}, [job.period])
    ]);

    const company = createElement('p', { className: 'job-company' }, [job.company]);
    const details = renderList(job.bullets);

    return createElement('article', { className: 'job-item' }, [headline, company, details]);
};

export const renderProject = (project) => {
    const summary = createElement('p', {}, [
        createElement('strong', {}, [project.title]),
        ` — ${project.summary}`
    ]);
    const details = renderList(project.bullets);
    return createElement('article', { className: 'job-item' }, [summary, details]);
};

export const renderCompetitiveProgramming = (data) => {
    const profileList = createElement('ul', { className: 'list-clean' });
    data.profiles.forEach(profile => {
        const link = renderAnchor(profile.url, profile.platform);
        const item = createElement('li', {}, [link, ` — ${profile.summary}`]);
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

export const renderSkills = (skills) => {
    return skills.map(skill => {
        const tags = createElement('div', { className: 'skill-list' },
            skill.tags.map(tag => createElement('span', { className: 'skill-badge' }, [tag]))
        );

        return createElement('div', { className: 'skill-group' }, [
            createElement('h3', { className: 'skill-heading' }, [skill.title]),
            tags
        ]);
    });
};