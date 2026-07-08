// Add your projects here. They will automatically appear on the Projects page
// and the most recent ones will be featured on the home page.
//
// Fields:
//   id        — unique slug, used in the URL
//   title     — project name
//   date      — ISO date string (newest first = featured on home)
//   tags      — array of strings, e.g. ['ML', 'Python', 'React']
//   summary   — one-sentence description shown on cards
//   desc      — longer paragraph shown on the project detail card
//   repo      — GitHub repo URL (optional)
//   live      — live demo URL (optional)
//   image     — path to image in /public/projects/ (optional)

const projects = [
  {
    id: 'east-plains-veterinary',
    title: 'East Plains Veterinary Care',
    date: '2025-05-20',
    tags: ['Frontend', 'Web Design', 'Responsive', 'Veterinary'],
    summary:
      'A warm, mobile-first site for a family-owned Colorado vet clinic — clear service breakdowns, an online pharmacy, and appointment requests kept one tap away.',
    desc:
      'East Plains Veterinary Care is a privately owned clinic in Aurora, Colorado. The site is built around trust and clarity: a calm, mountain-inspired palette, a "good medicine begins with listening" narrative, and service categories (preventive, surgical, urgent, and exotic care) that are easy to scan. A persistent "Request an Appointment" call-to-action, click-to-call, hours, and online-pharmacy links make the practical next step obvious on any device.',
    live: 'https://eastplainsveterinarycare.com/',
    image: 'projects/eastplains.png',
  },
  {
    id: 'aura-dental',
    title: 'Aura Dental',
    date: '2025-03-12',
    tags: ['Frontend', 'Web Design', 'Responsive', 'Healthcare'],
    summary:
      'A clean, modern site for a Columbus dental practice — generous white space, a calm tone, and online booking that highlights both in-office and mobile "dentistry at your doorstep" care.',
    desc:
      'Aura Dental in Columbus, GA wanted their site to feel like "a steady pause in the middle of a busy day." The design leans into that: airy layouts, soft imagery, and reassuring copy that positions the practice as calm and approachable. It surfaces their signature offering — a fully equipped mobile dentistry van bringing care to patients’ doorsteps — alongside routine and restorative services, with DentaFlo online booking and phone scheduling built into the flow.',
    live: 'https://auradentalcolumbus.com',
    image: 'projects/auradental.png',
  },
  {
    id: 'victoria-orthodontics',
    title: 'Victoria Orthodontics',
    date: '2025-01-15',
    tags: ['Frontend', 'Web Design', 'Responsive', 'Healthcare'],
    summary:
      'A serene, editorial marketing site for a Minnesota orthodontic practice — warm photography, clear treatment guidance, and one-tap booking and directions.',
    desc:
      'Victoria Orthodontics, led by Dr. Allen in Victoria, Minnesota, wanted a site that felt "calm and welcoming" rather than clinical. The design uses soft, serene imagery and an unhurried layout to convey the practice’s values of honesty, respect, and kindness. Doctor and services pages explain personalized, surgeon-informed treatment planning, while prominent click-to-call, business hours, and Google Maps integration make it effortless for prospective patients to take the next step.',
    live: 'https://vicortho.com',
    image: 'projects/vicortho.png',
  },
]

export default projects
