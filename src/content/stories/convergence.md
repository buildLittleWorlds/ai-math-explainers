---
{
  "discovery": "convergence",
  "title": "The useful idea inside a wrong answer",
  "summary": "A mathematician’s conversations with ChatGPT became a story about persistence, judgment, and what it means for an algorithm to settle down.",
  "plateCaption": "A sequence approaches one answer inside a region of equally good possibilities.",
  "researchedThrough": "2026-09-09",
  "timeline": [
    {
      "date": "October 27, 2025",
      "label": "The paper appears",
      "text": "The earliest paper release located for this result credits Jang and Ryu and describes substantial AI assistance.",
      "url": "https://arxiv.org/abs/2510.23513"
    },
    {
      "date": "November 24, 2025",
      "label": "The collaboration is retold",
      "text": "OpenAI publishes a readable profile of Ryu’s process.",
      "url": "https://openai.com/index/gpt-5-mathematical-discovery/"
    },
    {
      "date": "January 21, 2026",
      "label": "Other mathematicians explain",
      "text": "Bauschke and Moursi submit a step-by-step exposition of the broader FISTA milestone.",
      "url": "https://arxiv.org/abs/2601.15398"
    },
    {
      "date": "April 13, 2026",
      "label": "A wider public audience",
      "text": "Quanta places Ryu’s experience among changing mathematical research practices.",
      "url": "https://www.quantamagazine.org/the-ai-revolution-in-math-has-arrived-20260413/"
    }
  ],
  "sources": [
    {
      "title": "The AI Revolution in Math Has Arrived",
      "author": "Konstantin Kakaes · Quanta · April 13, 2026",
      "role": "Independent reporting and interviews",
      "url": "https://www.quantamagazine.org/the-ai-revolution-in-math-has-arrived-20260413/",
      "note": "Read Ryu’s account of checking partial ideas. The original paper is more precise about the convergence distinction."
    },
    {
      "title": "How GPT-5 helped mathematician Ernest Ryu solve a 40-year-old open problem",
      "author": "OpenAI · November 24, 2025",
      "role": "Participant profile from the model provider",
      "url": "https://openai.com/index/gpt-5-mathematical-discovery/",
      "note": "A readable account of the collaboration, with a promotional institutional perspective."
    },
    {
      "title": "Point Convergence of Nesterov’s Accelerated Gradient Method: An AI-Assisted Proof",
      "author": "Uijeong Jang & Ernest K. Ryu · October 27, 2025",
      "role": "Original research release",
      "url": "https://arxiv.org/abs/2510.23513",
      "note": "The authoritative statement of which convergence question was resolved; proofs are optional reading."
    },
    {
      "title": "Understanding FISTA’s weak convergence: A step-by-step introduction to the 2025 milestone",
      "author": "Heinz H. Bauschke & Walaa M. Moursi · January 21, 2026",
      "role": "Independent exposition · advanced optional reading",
      "url": "https://arxiv.org/abs/2601.15398",
      "note": "Explains the broader convergence milestone and credits separate teams; the abstract supplies useful context."
    }
  ]
}
---

A student hands you a solution that eventually goes wrong. Usually, the natural response is to locate the mistake and start again. But what if the first few steps contain an idea you would not have thought to try? The answer can fail as a proof and still change the direction of your work.

That possibility sits at the center of Ernest Ryu’s story. It does not make incorrect mathematics acceptable. It makes the human task more specific: distinguish a useful intermediate idea from an argument that deserves to be believed. The difference matters when an assistant can produce possibilities much faster than anyone can examine them.

## Two meanings of getting there

The October 27, 2025 paper by Uijeong Jang and Ernest K. Ryu concerns point convergence of Nesterov’s accelerated gradient method. The distinction is between an optimization score approaching its best value and the sequence of proposed answers approaching one solution. The authors describe the proof as heavily assisted by ChatGPT. This is the earliest paper release located for the particular result, rather than a claim to have found the first social-media mention. [Read the authors’ abstract.](https://arxiv.org/abs/2510.23513)

Think of searching a broad, level valley. Several locations might have the same lowest elevation. An instrument reporting your height could say you were doing perfectly even while you kept moving between places. A good score would not, by itself, establish that your positions were settling toward one location.

The analogy is only an entrance into the question. It is not a reconstruction of the algorithm. What matters is the separation of two measurements: how good an answer is, and how the answers themselves behave over time. A guarantee about the first need not silently become a guarantee about the second.

## The researcher remained inside the loop

OpenAI’s November profile describes Ryu exploring possibilities with GPT-5, evaluating its suggestions, and developing the eventual argument. It is an accessible account from the company whose model was involved, so it should be read as a participant-centered profile rather than independent evaluation. Its value is in making the collaboration visible. [Read the profile.](https://openai.com/index/gpt-5-mathematical-discovery/)

That account gives us a way to avoid two equally unhelpful cartoons. One depicts a researcher pressing a button and receiving a finished theorem. The other assumes that any human checking makes the machine irrelevant. In between is a substantial activity: proposing, rejecting, preserving, and recombining ideas until an argument works.

If you have ever revised an essay, there is a recognizable distinction here. A weak draft can contain a strong observation. Keeping that observation does not mean accepting the entire draft. Mathematics adds a stricter demand: the final chain must justify the conclusion, not merely sound plausible or feel illuminating.

## The public account makes the failures visible

In April 2026, Konstantin Kakaes’s Quanta reporting returned to Ryu’s experience. Ryu described incorrect proof attempts whose earlier steps contained useful material. He checked those parts and fed promising pieces back into the conversation. The reporting gives a human account of sustained exploration, not simply a count of correct answers. [Read the section on Ryu in Quanta.](https://www.quantamagazine.org/the-ai-revolution-in-math-has-arrived-20260413/)

The article’s general terrain metaphor is helpful, but its wording sometimes compresses the score-versus-point distinction. For the precise claim, the original paper is the better guide. This is not a reason to abandon accessible reporting. It is a reminder that a vivid explanation and an exact statement serve complementary purposes.

The experience also raises a practical question for readers who want to imitate it. How would you recognize the useful part of a wrong answer? Ryu brought mathematical expertise to that decision. A novice cannot assume that confidence, fluency, or a long sequence of calculations substitutes for the ability to check the reasoning.

## A discovery acquires a second life through explanation

Heinz Bauschke and Walaa Moursi subsequently wrote a step-by-step introduction to the convergence milestone in the broader FISTA setting. Their abstract credits both Jang–Ryu and work by Boţ, Fadili, and Nguyen. This is a separate explanatory contribution, and it widens the story beyond a single company or conversation. [Read the exposition’s introduction and abstract.](https://arxiv.org/abs/2601.15398)

An exposition is not merely a longer press release. Its job is to help another person reconstruct the reasons, understand the assumptions, and see how the argument fits the subject. For a general reader, its existence is meaningful even when the technical pages remain difficult. Someone has undertaken the work of making the result teachable within the field.

That is one way a theorem becomes part of mathematical culture. The original proof is a beginning; subsequent explanations determine how readily other researchers can learn from it. The story of discovery therefore includes people who did not make the original leap but help it travel.

## What acceleration does not promise

The plate’s dots become closer as they approach a marked location. They do not arrive at a final dot labeled “finished.” Convergence concerns what happens in a continuing sequence. A drawing necessarily shows only finitely many steps, so its ending must not be mistaken for a theorem that the process stops there.

Likewise, the comparison sequence in the experiment is a teaching device. It shows how equally good scores can coexist with changing positions. It is not evidence that Nesterov’s method violates the conditions of the reported theorem. We are isolating a logical distinction, not running a counterexample against the paper.

These small qualifications make the larger achievement easier to appreciate. The research answers a carefully posed question about behavior under specified assumptions. Its importance does not require pretending that every optimization problem has become easy or that every AI-generated argument now deserves trust.

## What the collaboration leaves us with

The most interesting feature of this story may be its refusal to separate creativity from judgment. The assistant supplied possibilities; the researcher decided which deserved another look. Incorrect attempts were not the opposite of progress when their valid parts helped open a route forward. They remained incorrect attempts until that work was done.

For the curious reader, the lesson is not to welcome errors indiscriminately. It is to notice where expertise enters an apparently automated process. The new research partner changes how many paths can be explored. Understanding still requires knowing what each path establishes, where it fails, and why the final one reaches the question that was actually asked.
