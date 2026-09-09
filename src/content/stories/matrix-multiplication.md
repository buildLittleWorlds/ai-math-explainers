---
{
  "discovery": "matrix-multiplication",
  "title": "The shortcut was hiding in the recipe",
  "summary": "Why a change from 49 multiplications to 48 raised questions about discovery, useful speed, and the rules behind a record.",
  "plateCaption": "Two operation counts, with the inputs and output held fixed.",
  "researchedThrough": "2026-09-09",
  "timeline": [
    {
      "date": "November 23, 2022",
      "label": "An earlier AI episode",
      "text": "Quanta explains AlphaTensor and the human work it encouraged. This is background, not the 2025 result.",
      "url": "https://www.quantamagazine.org/ai-reveals-new-possibilities-in-matrix-multiplication-20221123/"
    },
    {
      "date": "May 14, 2025",
      "label": "The finding becomes public",
      "text": "The earliest announcement located for the rank-48 result appears in DeepMind’s AlphaEvolve release.",
      "url": "https://deepmind.google/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/"
    },
    {
      "date": "June 2, 2025",
      "label": "Questions about significance",
      "text": "Davis’s dated commentary examines the complex-arithmetic restriction and practical implications.",
      "url": "https://cs.nyu.edu/~davise/papers/AlphaEvolveNotes.pdf#page=3"
    },
    {
      "date": "June 16, 2025",
      "label": "The research record",
      "text": "The AlphaEvolve paper is submitted to arXiv, after the public announcement.",
      "url": "https://arxiv.org/abs/2506.13131"
    }
  ],
  "sources": [
    {
      "title": "AI Reveals New Possibilities in Matrix Multiplication",
      "author": "Ben Brubaker · Quanta · November 23, 2022",
      "role": "Independent reporting · earlier background",
      "url": "https://www.quantamagazine.org/ai-reveals-new-possibilities-in-matrix-multiplication-20221123/",
      "note": "Accessible explanation of the earlier AlphaTensor episode, not a response to AlphaEvolve."
    },
    {
      "title": "Some comments on AlphaEvolve",
      "author": "Ernest Davis · June 2, 2025",
      "role": "Outside critical commentary · PDF",
      "url": "https://cs.nyu.edu/~davise/papers/AlphaEvolveNotes.pdf#page=3",
      "note": "Section 2.2 questions practical significance. Davis identifies his own limits of expertise."
    },
    {
      "title": "AlphaEvolve: the original announcement",
      "author": "Google DeepMind · May 14, 2025",
      "role": "Original team’s announcement",
      "url": "https://deepmind.google/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/",
      "note": "See the mathematical-discovery section; this is a joint announcement."
    },
    {
      "title": "AlphaEvolve: A coding agent for scientific and algorithmic discovery",
      "author": "AlphaEvolve research team · June 16, 2025 arXiv submission",
      "role": "Original research · advanced reference",
      "url": "https://arxiv.org/abs/2506.13131",
      "note": "Section 3.1 gives the exact scope of the matrix result. Optional technical reading."
    }
  ]
}
---

Suppose you discover a way to prepare the same meal with one fewer trip across the kitchen. That might be a minor convenience. But suppose the trip is part of a recipe repeated thousands of times, and the improvement comes from noticing that two ingredients can be prepared together. You have changed the procedure, not merely hurried through it.

The first plate in this atlas asks us to notice that distinction. Two identical inputs produce an identical output, but the boxes between them carry different counts. The question is not whether a machine can calculate faster than a person. It is whether someone—or something—can discover a better way to organize the calculation itself.

## What the number actually counts

DeepMind’s May 14, 2025 announcement reports an AlphaEvolve algorithm for multiplying two four-by-four complex-valued matrices using 48 scalar multiplications. The accompanying research paper compares it with the rank-49 construction obtained from Strassen’s method. This is the earliest public announcement of that specific finding located for this story. [Read the announcement](https://deepmind.google/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/) and, optionally, [the research record](https://arxiv.org/abs/2506.13131).

A matrix is a rectangular table of numbers. Multiplication combines two such tables according to a particular rule; it does not simply multiply matching squares. You can understand the achievement without carrying out that rule. Imagine the output table as a destination that must remain fixed while researchers search for different routes through the arithmetic.

The route cannot merely work for a lucky example. An algorithm must handle the permitted inputs generally. That separates a mathematical procedure from a shortcut that happens to give the right answer once. It also explains why the picture contains abstract marks rather than an invented calculation: the point is the structure of the task, not a demonstration with selected numbers.

## The earlier surprise that helps explain this one

Ben Brubaker’s November 2022 Quanta article describes an earlier system, AlphaTensor. Its results prompted conventional computer-assisted work by Manuel Kauers and Jakob Moosbauer, who improved one construction and explored possibilities they had previously discounted. The article records both excitement and caution among specialists. It concerns an earlier result, including a different arithmetic setting, and should not be mistaken for reporting on AlphaEvolve. [Read Brubaker’s account.](https://www.quantamagazine.org/ai-reveals-new-possibilities-in-matrix-multiplication-20221123/)

That sequence offers a richer picture than a contest with a single winner. A machine-generated construction can change what researchers believe is worth trying. A human method can then extend it. The value of the first result may include the search it makes possible, not only the record it establishes on the day it appears.

It is tempting to turn “48” and “47” into a leaderboard. But numbers stripped of their rules can mislead. An algorithm permitted to use one kind of arithmetic is not automatically a better solution to a task using another kind. The conditions are part of the accomplishment, much as the distance and terrain are part of a running record.

## Why the fine print belongs in the explanation

The AlphaEvolve paper is more specific than a slogan about beating an old algorithm. It identifies a rank-48 method over complex numbers and distinguishes this from other kinds of multiplication procedures. That technical qualification helps explain why apparently similar historical claims cannot be compared by counting alone. [The paper gives the scope in section 3.1.](https://arxiv.org/abs/2506.13131)

For the reader, “complex-valued” need not become a detour into a new course. It means the discovery operates within a particular number system. The important habit is to keep that condition attached when retelling the news. Saying “a more economical procedure for this setting” communicates more than saying “AI made all multiplication faster.”

There is another distinction hiding inside the word faster. Counting multiplications isolates one cost. Real calculations also involve additions, moving information, and the properties of the machine running them. A procedure can improve a mathematical count without winning every practical comparison. The plate is an operation-count comparison, not a measured promise about a laptop.

## A skeptical reader asks the useful question

In commentary dated June 2, 2025, Ernest Davis questioned the practical and theoretical significance of some AlphaEvolve results. His matrix discussion emphasizes the complex-number setting and the gap between an operation count and useful performance. Davis is an NYU computer scientist writing from outside the project; he explicitly says he is not an expert on these particular problems. [Read section 2.2 of his commentary.](https://cs.nyu.edu/~davise/papers/AlphaEvolveNotes.pdf#page=3)

We do not have to adopt every skeptical judgment to benefit from the question. What would persuade us that a new method matters? A demonstration of savings in a relevant application would answer one version. A reusable insight into how algorithms can be found would answer another. Those are different forms of evidence, and a short announcement cannot supply them all.

This makes the debate productive rather than deflating. The discovery does not have to transform every computer to be real. Conversely, a real discovery does not entitle us to attach every imaginable application to it. A careful explanation can recognize the accomplishment while leaving room to investigate its reach.

## The recipe is now part of the search

The deeper invitation is to treat familiar procedures as things that can themselves be questioned. A table of numbers may look like an assignment with one predetermined method. Research asks whether the method is economical, whether its pieces can be reorganized, and whether an unfamiliar representation reveals an option we missed.

That is a different use of AI from asking it to fill in a finished worksheet. The output of interest is a procedure that others can inspect and reuse. Its success depends on exactness as well as imagination: the new recipe must still make the same meal.

Return to the two boxes in the image. The difference is small enough to grasp immediately. The surrounding story teaches us what to ask next: which operations, under which rules, with what guarantee, and with what possibilities for further work? Those questions let a lay reader appreciate a mathematical discovery without confusing the headline with its whole significance.
