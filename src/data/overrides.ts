/**
 * N.A Aesthetics — lkburtonstore.shop
 * N.A AESTHETICS LTD, company no. 13044738, Borehamwood.
 * SIC: 96020 Hairdressing and other beauty treatment.
 *
 * THREE THINGS TO RAISE WITH THE CLIENT:
 *  1. The domain is lkburtonstore.shop, which has nothing to do with the
 *     company name. It works, but a visitor will notice.
 *  2. This copy covers ONLY the activity on the register: hairdressing and
 *     other beauty treatment. It deliberately names no injectable treatment.
 *     Botulinum toxin is a prescription-only medicine, and reg. 284 of the
 *     Human Medicines Regulations 2012 makes advertising one to the public
 *     unlawful — so it cannot go on a website, however it is worded. If the
 *     business offers prescriber-led treatments, that content has to be built
 *     separately with the prescriber, and still cannot name the medicine.
 *  3. No qualification, insurance or training provider is claimed anywhere,
 *     because none of it can be verified from here. Send the real details and
 *     they can go on the site.
 */

export const overrides: Record<string, unknown> = {
  home: {
    seo: {
      title: 'Hairdressing and beauty treatment in Borehamwood',
      description:
        'N.A Aesthetics Ltd, registered in England and Wales (company no. 13044738). Hairdressing and beauty treatments by appointment in Borehamwood, Hertfordshire.',
    },
    hero: {
      eyebrow: 'Hairdressing and beauty, Borehamwood',
      titleLead: 'Unhurried appointments,',
      titleMark: 'and an honest opinion',
      lead:
        'Good beauty work starts with someone telling you what will actually suit you, and what will not. Appointments here are booked with enough time to talk that through before anything begins.',
      secondaryCta: 'What we offer',
      visualLabel: 'On the register since 2020',
    },
    highlights: {
      eyebrow: 'How we work',
      title: 'What an appointment should feel like',
      subtitle: 'Four things that decide whether you leave happy.',
      items: [
        {
          icon: 'chat',
          title: 'A proper consultation',
          text: 'We talk about what you want, what your hair or skin will realistically do, and what the upkeep involves, before anything starts.',
        },
        {
          icon: 'clock',
          title: 'Time that is actually yours',
          text: 'Appointments are spaced so yours is not rushed to make room for the next one.',
        },
        {
          icon: 'shield',
          title: 'Patch tests taken seriously',
          text: 'Where a treatment needs a patch test beforehand, it is done, with the proper waiting time. No exceptions for convenience.',
        },
        {
          icon: 'eye',
          title: 'Told what we cannot do',
          text: 'If a look will not work on your hair or skin, or needs more than one visit, you hear that before you commit, not afterwards.',
        },
      ],
    },
    services: {
      eyebrow: 'What we do',
      title: 'Treatments',
      subtitle: 'Hairdressing and beauty treatment, by appointment.',
      moreLabel: 'All treatments',
      cardCta: 'Read more',
    },
    process: {
      eyebrow: 'How it works',
      title: 'From enquiry to appointment',
      subtitle: 'Four steps, with the conversation at the front of them.',
      steps: [
        {
          title: 'Get in touch',
          text: 'Tell us what you are after. A photograph of what you have in mind helps more than a description.',
        },
        {
          title: 'Consultation',
          text: 'We talk through what suits you, how long it takes and what keeping it up involves. Any patch test is arranged at this point.',
        },
        {
          title: 'Your appointment',
          text: 'Booked with enough time, and nothing added on the day that you have not agreed to.',
        },
        {
          title: 'Afterwards',
          text: 'Aftercare explained before you leave, and a straight answer if something is not sitting right once you are home.',
        },
      ],
    },
    record: {
      eyebrow: 'Company details',
      title: 'Who you are booking with',
      subtitle: 'Taken from the public register, so you can check it independently.',
    },
    faq: {
      eyebrow: 'Questions',
      title: 'Common questions',
      subtitle: 'The things worth asking before a first appointment.',
      items: [
        {
          q: 'Do I need a patch test?',
          a: 'For anything involving colour or tint, yes, and it has to be done far enough in advance to be meaningful. We will not skip it to fit an appointment in sooner. If you have had a reaction to a product before, tell us at the consultation rather than on the day.',
        },
        {
          q: 'Will you tell me if something will not suit me?',
          a: 'Yes, and it happens. A look that works on someone else may not work on your hair type, your natural colour or the condition it is in. You will get that opinion before you commit, along with what would get you closest to what you want.',
        },
        {
          q: 'What qualifications do you hold?',
          a: 'Ask us and we will tell you directly, with the certificates to look at. We do not list qualifications or insurance on this website, because anyone can type them and you have no way to check them from a web page. Asking the question in person gets you a far better answer.',
        },
        {
          q: 'Do you offer injectable treatments?',
          a: 'This website covers hairdressing and beauty treatment, which is the activity the company is registered for. It does not promote treatments that UK law restricts from being advertised to the public, and we would not list one here even to say we offer it. If you have a question about anything beyond what is listed on this page, please ask us directly.',
        },
        {
          q: 'How far in advance should I book?',
          a: 'As early as you can for a specific date, and earlier still if a patch test is needed first. Get in touch with the date you have in mind and we will tell you honestly what is possible.',
        },
        {
          q: 'How long has the company been registered?',
          a: 'Since 26 November 2020. The company number, registered office and incorporation date are all on the public register, and the link below takes you straight to the record.',
        },
      ],
    },
    cta: {
      eyebrow: 'Next step',
      title: 'Thinking about an appointment?',
      lead: 'Tell us what you have in mind and we will tell you what is realistic and how long it takes.',
      secondaryCta: 'Company details',
    },
  },

  about: {
    seo: {
      title: 'About N.A Aesthetics',
      description:
        'A hairdressing and beauty business registered in England and Wales since 2020, based in Borehamwood. Registered details as filed at Companies House.',
    },
    hero: {
      eyebrow: 'About',
      titleLead: 'The honest answer',
      titleMark: 'is worth more than the sale',
      lead:
        'Most disappointment in this trade comes from someone being told yes when the answer was no, or not quite, or not in one visit.',
    },
    story: {
      title: 'How we work',
      subtitle: 'The consultation is the part that decides everything else.',
      paragraphs: [
        'People usually arrive with a picture and a hope. The useful thing is not to agree with it immediately, but to say what your hair or skin will actually do, how many visits it would take, and what keeping it looking that way involves between appointments. That conversation takes ten minutes and prevents nearly every bad outcome.',
        'The same applies to the things we decline. If a look needs a condition your hair is not in yet, saying so costs us an appointment and saves you a worse one. We would rather be the place that talked you out of something and got recommended for it.',
        'Patch testing is not negotiable here, including when it is inconvenient and including when you have had the treatment elsewhere before. It is a small delay set against a reaction that is genuinely unpleasant.',
        'The company has been on the register since November 2020. Its number and registered office are below, and the link takes you to the public record.',
      ],
    },
    values: {
      title: 'What we hold to',
      items: [
        { icon: 'chat', title: 'Consultation first', text: 'What will suit you, and what will not, before anything starts.' },
        { icon: 'clock', title: 'Unhurried', text: 'Appointments spaced so yours is not cut short.' },
        { icon: 'shield', title: 'Patch tests kept', text: 'Done properly, with the waiting time, every time.' },
        { icon: 'eye', title: 'Realistic', text: 'Told how many visits and what upkeep it needs, up front.' },
      ],
    },
    record: {
      eyebrow: 'Public record',
      title: 'Registered company details',
      subtitle: 'As filed at Companies House.',
    },
    cta: {
      eyebrow: 'Next step',
      title: 'Want to talk it through first?',
      lead: 'A consultation costs you a conversation and usually changes the plan for the better.',
      secondaryCta: 'What we offer',
    },
  },

  servicesPage: {
    seo: {
      title: 'Hairdressing, skin, brows and lashes',
      description:
        'Hairdressing, skincare treatments, brows and lashes, and waxing from N.A Aesthetics Ltd, Borehamwood. By appointment, consultation first.',
    },
    hero: {
      eyebrow: 'Treatments',
      titleLead: 'Four things we do,',
      titleMark: 'all by appointment',
      lead:
        'Everything below sits within hairdressing and beauty treatment, which is the activity this company is registered for. If what you want is not here, ask and you will get a straight answer.',
    },
    quoteNote:
      'Everything is quoted at consultation, against your hair or skin and the time it will actually take. Nothing on this page is a fixed price or a binding offer.',
    cta: {
      eyebrow: 'Next step',
      title: 'Ready to book a consultation?',
      lead: 'Tell us what you are after and we will arrange a time to talk it through.',
      secondaryCta: 'About the company',
    },
  },

  contact: {
    seo: {
      title: 'Contact N.A Aesthetics, Borehamwood',
      description:
        'Get in touch to arrange a consultation or an appointment. Registered office: Flat 13, Heaton House, Thurston Way, Borehamwood, WD6 1BF. Company no. 13044738.',
    },
    hero: {
      eyebrow: 'Contact',
      titleLead: 'Tell us what you want,',
      titleMark: 'and when you need it',
      lead: 'A photograph of the look you have in mind tells us far more than a description does.',
    },
    helpful: {
      title: 'Useful to include',
      items: [
        'What you are after, with a photograph if you have one.',
        'What has been done to your hair or skin recently, including anything at home.',
        'Whether you have ever reacted to a product, colour or tint.',
        'The date you are working towards, and whether it is fixed.',
      ],
    },
    channelsTitle: 'How to reach us',
    recordTitle: 'Registered company details',
    cta: {
      eyebrow: 'Next step',
      title: 'Ready when you are',
      lead: 'Send the details over and we will come back to you about a consultation.',
      secondaryCta: 'What we offer',
    },
  },

  services: [
    {
      id: 'hairdressing',
      icon: 'scissors',
      title: 'Hairdressing',
      summary: 'Cutting, colour and finishing, planned around what your hair will actually do.',
      points: [
        'A consultation that covers condition, upkeep and how many visits it takes.',
        'Colour work preceded by a patch test, with the proper waiting time.',
        'An honest view when a look needs your hair in better condition first.',
        'Aftercare explained before you leave, not guessed at later.',
      ],
    },
    {
      id: 'skin',
      icon: 'drop',
      title: 'Skincare treatments',
      summary: 'Facials and skin treatments, chosen for your skin rather than from a menu.',
      points: [
        'A look at your skin and what it is doing before anything is recommended.',
        'Products and steps explained as we go, so you know what is being used.',
        'Realistic expectations about what one appointment changes.',
        'A referral to your GP or a pharmacist where something is not ours to treat.',
      ],
    },
    {
      id: 'brows-lashes',
      icon: 'eye',
      title: 'Brows and lashes',
      summary: 'Shaping, tinting and lash work, matched to your face rather than a trend.',
      points: [
        'Shape discussed and agreed before anything is removed.',
        'Patch test first for any tint, without exception.',
        'An honest word on how quickly it will need doing again.',
        'Removal and aftercare explained properly.',
      ],
    },
    {
      id: 'waxing',
      icon: 'leaf',
      title: 'Waxing and finishing',
      summary: 'Straightforward treatments, done carefully and without fuss.',
      points: [
        'Hygiene standards kept the same whether or not anyone is watching.',
        'Told beforehand what the appointment involves and how long it takes.',
        'Aftercare advice that is practical rather than a product list.',
        'A sensible interval suggested for the next one, not the soonest one.',
      ],
    },
  ],
};
