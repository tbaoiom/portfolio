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
    id: 'aura-dental',
    title: 'Aura Dental',
    date: '2026-06-01',
    tags: ['WordPress', 'Web Design', 'Responsive'],
    summary:
      'A clean, modern site for a Columbus dental practice — generous white space, a calm tone, and online booking that highlights both in-office and mobile "dentistry at your doorstep" care.',
    desc:
      'Aura Dental in Columbus, GA wanted their site to feel like "a steady pause in the middle of a busy day." The design leans into that: airy layouts, soft imagery, and reassuring copy that positions the practice as calm and approachable. It surfaces their signature offering — a fully equipped mobile dentistry van bringing care to patients’ doorsteps — alongside routine and restorative services, with online booking and phone scheduling built into the flow. Built on WordPress.',
    live: 'https://auradentalcolumbus.com',
    image: 'projects/auradental.png',
  },
  {
    id: 'victoria-orthodontics',
    title: 'Victoria Orthodontics',
    date: '2026-05-01',
    tags: ['WordPress', 'Web Design', 'Responsive'],
    summary:
      'A serene, editorial marketing site for a Minnesota orthodontic practice — warm photography, clear treatment guidance, and one-tap booking and directions.',
    desc:
      'Victoria Orthodontics, led by Dr. Allen in Victoria, Minnesota, wanted a site that felt "calm and welcoming" rather than clinical. The design uses soft, serene imagery and an unhurried layout to convey the practice’s values of honesty, respect, and kindness. Doctor and services pages explain personalized, surgeon-informed treatment planning, while prominent click-to-call, business hours, and Google Maps integration make it effortless for prospective patients to take the next step. Built on WordPress.',
    live: 'https://vicortho.com',
    image: 'projects/vicortho.png',
  },
  {
    id: 'east-plains-veterinary',
    title: 'East Plains Veterinary Care',
    date: '2026-03-01',
    tags: ['WordPress', 'Web Design', 'Responsive'],
    summary:
      'A warm, mobile-first site for a family-owned Colorado vet clinic — clear service breakdowns, an online pharmacy, and appointment requests kept one tap away.',
    desc:
      'East Plains Veterinary Care is a privately owned clinic in Aurora, Colorado. The site is built around trust and clarity: a calm, mountain-inspired palette, a "good medicine begins with listening" narrative, and service categories (preventive, surgical, urgent, and exotic care) that are easy to scan. A persistent "Request an Appointment" call-to-action, click-to-call, hours, and online-pharmacy links make the practical next step obvious on any device. Built on WordPress.',
    live: 'https://eastplainsveterinarycare.com/',
    image: 'projects/eastplains.png',
  },
  {
    id: 'multimodal-disease-subtyping',
    title: 'Multimodal Disease Subtyping (TCGA-BRCA)',
    date: '2026-05-15',
    tags: ['ML', 'PyTorch', 'Python'],
    summary:
      'A PyTorch study benchmarking multimodal fusion for breast-cancer subtyping, where balanced-accuracy evaluation exposed a majority-class collapse that headline accuracy had hidden.',
    desc:
      'As part of a 4-person team, I owned the RNA-sequencing variational autoencoder (VAE), learning a latent representation of gene-expression profiles and reaching 0.63 accuracy against a 0.58 baseline. I benchmarked four fusion strategies — early concatenation, contrastive latent alignment, joint multimodal VAE, and raw early fusion — against unimodal baselines, and established that none surpassed the clinical-only VAE (0.68 accuracy, 0.59 weighted F1). Evaluating all eight models on balanced accuracy alongside raw accuracy surfaced majority-class collapse in the RNA-only models (0.25 balanced accuracy) that headline numbers had masked, redirecting the team’s approach. Python, PyTorch, variational autoencoders, Scikit-learn.',
  },
  {
    id: 'health-insurance-policy-assistant',
    title: 'Health Insurance Policy Assistant',
    date: '2026-05-10',
    tags: ['ML', 'RAG', 'Python'],
    summary:
      'A retrieval-augmented assistant (LLaMA 3.1 · LlamaIndex · FAISS) that orchestrates subagents to retrieve and compare insurance-plan coverage, grounding every answer in source records to prevent hallucinated claims.',
    desc:
      'A Retrieval-Augmented Generation (RAG) assistant that orchestrates subagents to retrieve, summarize, and compare plan-coverage details from a structured policy dataset, grounding responses in source records to prevent hallucinated coverage claims. I implemented the vector search and retrieval layer in FAISS and LlamaIndex, iterating on chunking strategy and prompt design to improve groundedness. Python, LLaMA 3.1, LlamaIndex, FAISS.',
  },
  {
    id: 'ai-music-generator',
    title: 'AI Music Generator',
    date: '2025-09-26',
    tags: ['ML', 'Deep Learning', 'Python'],
    summary:
      'Generative music models implemented in PyTorch, comparing LSTM and Transformer architectures for learning musical structure and generating new sequences.',
    desc:
      'An exploration of sequence modeling for music generation, implementing and comparing LSTM and Transformer-based architectures to learn musical structure and produce novel sequences. Python, PyTorch.',
    repo: 'https://github.com/tbaoiom/music-ai-generator',
  },
]

export default projects
