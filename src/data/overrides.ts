/**
 * LK Burton — lkburtonstore.shop
 * LK BURTON LIMITED, company no. 13460176, Burton upon Trent.
 * SIC: 98000 residents property management.
 *
 * TWO THINGS TO RAISE WITH THE CLIENT:
 *  1. The domain says "store" but the only activity on the register is
 *     residents property management. The site follows the register, because
 *     that is the verifiable fact.
 *  2. In England, a business carrying out property management work must belong
 *     to a government-approved redress scheme (The Property Ombudsman or the
 *     Property Redress Scheme) under the 2014 Order, and scheme membership has
 *     to be stated. No membership is claimed here, because none can be
 *     verified from here. Once the company confirms its scheme and membership
 *     number, put them in site.legal.regulator and they will appear on the
 *     legal notice automatically.
 */

export const overrides: Record<string, unknown> = {
  home: {
    seo: {
      title: 'Residents property management in Burton upon Trent',
      description:
        'LK Burton Limited, registered in England and Wales (company no. 13460176). Management of communal areas, maintenance and service charge administration for residents.',
    },
    hero: {
      eyebrow: 'Residents property management, Burton upon Trent',
      titleLead: 'Communal property,',
      titleMark: 'managed in the open',
      lead:
        'Most disputes between residents and a managing agent come down to money nobody could account for and work nobody could see. We would rather over-explain both than field the complaint later.',
      secondaryCta: 'What we manage',
      visualLabel: 'On the register since 2021',
    },
    highlights: {
      eyebrow: 'How we work',
      title: 'What residents are entitled to expect',
      subtitle: 'Four things that keep a managed building running without resentment.',
      items: [
        {
          icon: 'check-doc',
          title: 'Money accounted for',
          text: 'Service charge expenditure set out clearly enough that a resident can follow where their money went without having to ask twice.',
        },
        {
          icon: 'wrench',
          title: 'Repairs that get closed',
          text: 'A reported problem is logged, chased and closed, with the resident told when it is done rather than left wondering.',
        },
        {
          icon: 'users',
          title: 'Communicated before, not after',
          text: 'Work that affects access, parking or noise is notified in advance, because that is when the information is useful.',
        },
        {
          icon: 'shield',
          title: 'Your statutory rights',
          text: 'Leaseholders have rights to information about service charges under the Landlord and Tenant Act 1985. We treat those as a floor, not a ceiling.',
        },
      ],
    },
    services: {
      eyebrow: 'What we do',
      title: 'Managing the shared parts',
      subtitle: 'The communal areas, the money and the contractors who work on them.',
      moreLabel: 'All services',
      cardCta: 'Read more',
    },
    process: {
      eyebrow: 'The process',
      title: 'How a managed building is run',
      subtitle: 'Four parts to the year, rather than a series of emergencies.',
      steps: [
        {
          title: 'Understand the building',
          text: 'The leases, the shared parts, the services in place and what residents say is actually wrong with it.',
        },
        {
          title: 'Plan and budget',
          text: 'A budget for the year that distinguishes routine costs from the larger items coming down the line.',
        },
        {
          title: 'Run it',
          text: 'Repairs logged and chased, contractors instructed and checked, residents told what is happening before it happens.',
        },
        {
          title: 'Account for it',
          text: 'Expenditure reported against the budget, with the differences explained rather than left to be discovered.',
        },
      ],
    },
    record: {
      eyebrow: 'Company details',
      title: 'Who is managing the building',
      subtitle: 'A registered limited company, on the public record since 2021.',
    },
    faq: {
      eyebrow: 'Questions',
      title: 'Common questions',
      subtitle: 'What leaseholders and residents most often want to know.',
      items: [
        {
          q: 'Am I entitled to see how my service charge was spent?',
          a: 'Yes. Under the Landlord and Tenant Act 1985 a leaseholder can ask for a written summary of the costs making up the service charge, and can then inspect the accounts and receipts behind it. You should not have to invoke a statute to get that, and we would rather provide the detail before anyone asks.',
        },
        {
          q: 'Which redress scheme do you belong to?',
          a: 'Ask us and we will give you the scheme name and our membership number in writing. A business carrying out property management work in England is required to belong to a government-approved redress scheme, which gives you somewhere independent to take a complaint if we have not resolved it ourselves. We do not state a membership on this page that you cannot check, so please ask for it directly.',
        },
        {
          q: 'How do I report something that needs fixing?',
          a: 'Get in touch with what it is and where. It gets logged, you get told who is dealing with it, and you get told when it is closed. The part that usually fails is the last one, so that is the part we watch.',
        },
        {
          q: 'How are contractors chosen?',
          a: 'On what the job actually needs, with larger work quoted competitively. Where the law requires consultation with leaseholders before major works, that consultation happens properly rather than as an afterthought.',
        },
        {
          q: 'What if I am unhappy with how something was handled?',
          a: 'Tell us first and give us a chance to put it right, in writing so there is a record. If you are still not satisfied, you can take it to the redress scheme, and depending on the issue leaseholders can also apply to the First-tier Tribunal on service charge matters. We will tell you about those routes rather than hoping you do not find them.',
        },
      ],
    },
    cta: {
      eyebrow: 'Next step',
      title: 'Looking for a managing agent?',
      lead: 'Tell us about the building and what is not working at the moment.',
      secondaryCta: 'Company details',
    },
  },

  about: {
    seo: {
      title: 'About LK Burton',
      description:
        'A residents property management company registered in England and Wales since 2021, based in Burton upon Trent. Registered details as filed at Companies House.',
    },
    hero: {
      eyebrow: 'About',
      titleLead: 'Property management',
      titleMark: 'is mostly bookkeeping and chasing',
      lead:
        'Not much of it is glamorous. Almost all of the goodwill in a building is won or lost on whether the money adds up and whether somebody followed up.',
    },
    story: {
      title: 'How we work',
      subtitle: 'Transparency is cheaper than a dispute.',
      paragraphs: [
        'Ask residents what they dislike about their managing agent and two answers come back: nobody could explain the service charge, and nothing ever got finished. Both are solvable with administration rather than talent, which is why we treat clear accounting and relentless follow-up as the core of the job rather than the overhead.',
        'The legal framework helps. Leaseholders have statutory rights to information about service charges, and there are consultation requirements before major works. We would rather meet those as a minimum standard, voluntarily and early, than have residents discover they had to demand them.',
        'The company has been registered since June 2021 and works in and around Burton upon Trent. Its number and registered office are below, and the link goes to the public record.',
      ],
    },
    values: {
      title: 'What we hold to',
      items: [
        { icon: 'check-doc', title: 'Accountable money', text: 'Expenditure explained against the budget, before being asked.' },
        { icon: 'wrench', title: 'Closed, not logged', text: 'A repair is finished when the resident has been told it is.' },
        { icon: 'users', title: 'Told in advance', text: 'Notice of work that affects access, parking or noise.' },
        { icon: 'shield', title: 'Rights respected', text: 'Statutory information and consultation treated as a floor.' },
      ],
    },
    record: {
      eyebrow: 'Public record',
      title: 'Registered company details',
      subtitle: 'As filed at Companies House.',
    },
    cta: {
      eyebrow: 'Next step',
      title: 'Want to talk about your building?',
      lead: 'Whether you are a resident, a director of a management company or a freeholder.',
      secondaryCta: 'What we manage',
    },
  },

  servicesPage: {
    seo: {
      title: 'Communal area management and service charge administration',
      description:
        'Residents property management from LK Burton Limited: communal areas, maintenance coordination, service charge administration and resident communication.',
    },
    hero: {
      eyebrow: 'Services',
      titleLead: 'The shared parts,',
      titleMark: 'and the money behind them',
      lead: 'Four pieces of work that between them keep a building running and its residents informed.',
    },
    quoteNote:
      'Management is quoted against the specific building, its leases and the services it needs. Nothing on this page is a fixed price or a binding offer.',
    cta: {
      eyebrow: 'Next step',
      title: 'Tell us about the building',
      lead: 'Number of units, what is currently in place and what is going wrong.',
      secondaryCta: 'About the company',
    },
  },

  contact: {
    seo: {
      title: 'Contact LK Burton, Burton upon Trent',
      description:
        'Get in touch about property management or report something at a managed building. Registered office: 84 Dover Road, Horninglow, Burton-On-Trent, DE13 0TB. Company no. 13460176.',
    },
    hero: {
      eyebrow: 'Contact',
      titleLead: 'Reporting something,',
      titleMark: 'or looking for an agent',
      lead: 'Both start the same way: tell us the building and what is actually happening.',
    },
    helpful: {
      title: 'Useful to include',
      items: [
        'The building and, if you are a resident, your unit or flat number.',
        'What needs attention, and whether anyone else has already reported it.',
        'Whether it affects safety, access or only one property.',
        'If you are enquiring about management: the number of units and what is in place now.',
      ],
    },
    channelsTitle: 'How to reach us',
    recordTitle: 'Registered company details',
    cta: {
      eyebrow: 'Next step',
      title: 'Ready when you are',
      lead: 'Send the details and we will come back to you.',
      secondaryCta: 'What we manage',
    },
  },

  services: [
    {
      id: 'communal-areas',
      icon: 'building',
      title: 'Communal area management',
      summary: 'The shared parts of the building kept clean, lit, safe and in repair.',
      points: [
        'Cleaning, lighting, grounds and shared facilities organised and checked.',
        'Regular inspections, with findings written down rather than carried in someone’s head.',
        'Fire safety and access arrangements kept under review.',
        'Residents told in advance about work that affects them.',
      ],
    },
    {
      id: 'maintenance',
      icon: 'wrench',
      title: 'Repairs and maintenance coordination',
      summary: 'Reporting, instructing, chasing and closing. Mostly the chasing.',
      points: [
        'A reported issue logged with a reference you can quote back at us.',
        'Contractors instructed with a clear scope rather than a vague request.',
        'Work checked before it is signed off and paid.',
        'The resident told when it is finished, not left to assume.',
      ],
    },
    {
      id: 'service-charges',
      icon: 'bars',
      title: 'Service charge administration',
      summary: 'Budgets, demands and accounts that a resident can actually follow.',
      points: [
        'An annual budget separating routine costs from larger planned items.',
        'Demands issued correctly and on time, with the detail behind them.',
        'Expenditure reported against budget, with variances explained.',
        'Statutory information provided to leaseholders who request it.',
      ],
    },
    {
      id: 'resident-communication',
      icon: 'users',
      title: 'Resident communication',
      summary: 'The part that turns a managed building into a tolerable one.',
      points: [
        'Notice before work starts, not an apology afterwards.',
        'A named contact rather than an inbox nobody owns.',
        'Consultation carried out properly where major works require it.',
        'Complaints answered in writing, with the escalation route set out.',
      ],
    },
  ],
};
