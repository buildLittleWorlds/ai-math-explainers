---
{
  "discovery": "lean-formalization",
  "title": "What changes when a proof becomes checkable?",
  "summary": "Fermat’s theorem was already proved. The new story concerns the enormous work between an accepted argument and a form a machine can verify.",
  "plateCaption": "An existing proof is translated into explicit checked deductions.",
  "researchedThrough": "2026-09-09",
  "timeline": [
    {
      "date": "August 13, 2026",
      "label": "The earlier community challenge",
      "text": "Buzzard describes the separate problems of stating theorems and formalizing their proofs.",
      "url": "https://xenaproject.wordpress.com/2026/08/13/the-annals-challenge/"
    },
    {
      "date": "September 4, 2026",
      "label": "The announced formalization",
      "text": "Anthropic announces the complete Fermat formalization. This is the earliest official release located here.",
      "url": "https://www.anthropic.com/research/formalizing-fermats-last-theorem"
    },
    {
      "date": "September 4, 2026",
      "label": "A separate project leader responds",
      "text": "Buzzard reports compiling and checking the released work.",
      "url": "https://xenaproject.wordpress.com/2026/09/04/flt-anthropic-has-beaten-me-to-it/"
    },
    {
      "date": "September 5, 2026",
      "label": "A public-facing explanation",
      "text": "Carter explains the verification story for readers following AI.",
      "url": "https://simoncarter.ai/posts/claude-proved-fermat-s-last-theorem-in-11-days-and-a-computer-checked/"
    },
    {
      "date": "September 7, 2026",
      "label": "The news reaches Nature",
      "text": "Castelvecchi’s report frames the result as a formalization milestone.",
      "url": "https://www.nature.com/articles/d41586-026-02822-9"
    }
  ],
  "sources": [
    {
      "title": "FLT: Anthropic has beaten me to it",
      "author": "Kevin Buzzard · Xena · September 4, 2026",
      "role": "External expert’s reaction and checking account",
      "url": "https://xenaproject.wordpress.com/2026/09/04/flt-anthropic-has-beaten-me-to-it/",
      "note": "A separate project leader explains what he checked and why his own work continues."
    },
    {
      "title": "Claude proved Fermat’s Last Theorem in 11 days: and a computer checked every step",
      "author": "Simon Carter · September 5, 2026",
      "role": "Independent public-facing explainer",
      "url": "https://simoncarter.ai/posts/claude-proved-fermat-s-last-theorem-in-11-days-and-a-computer-checked/",
      "note": "Explains formalization for readers following AI. The headline refers to checking an existing theorem, not its first human proof."
    },
    {
      "title": "The Annals Challenge",
      "author": "Kevin Buzzard · Xena · August 13, 2026",
      "role": "Earlier community context",
      "url": "https://xenaproject.wordpress.com/2026/08/13/the-annals-challenge/",
      "note": "Explains why stating a theorem formally and verifying its proof are different tasks. Predates the Fermat announcement."
    },
    {
      "title": "Formalizing Fermat’s Last Theorem",
      "author": "Anthropic · September 4, 2026",
      "role": "Finding-specific announcement",
      "url": "https://www.anthropic.com/research/formalizing-fermats-last-theorem",
      "note": "Describes the formalization and its relation to the existing human proof."
    },
    {
      "title": "Anthropic AI ‘formalizes’ proof of Fermat’s last theorem — a milestone for mathematics",
      "author": "Davide Castelvecchi · Nature · September 7, 2026",
      "role": "Independent news coverage · may require access",
      "url": "https://www.nature.com/articles/d41586-026-02822-9",
      "note": "The headline and introductory summary were accessible; no paywalled interview detail is used in this narrative."
    }
  ]
}
---

Imagine receiving an extraordinarily detailed set of instructions for a machine you already know works. You have not invented the machine again. You have made its operation explicit enough that another system can check the connections between its parts.

That analogy is imperfect, but it gets us closer to the Fermat story than a headline about AI solving an ancient problem. Fermat’s Last Theorem already had a human proof. The September 2026 achievement concerned turning a vast body of reasoning into a form that could be checked mechanically.

## What was announced, and what was not

Anthropic announced a complete Lean formalization of Fermat’s Last Theorem on September 4, 2026, describing work performed largely autonomously by Claude over eleven days. This is the earliest official release located for this account. It is an announcement about formalization, not the first proof that the theorem is true. [Read the original announcement.](https://www.anthropic.com/research/formalizing-fermats-last-theorem)

A formal proof expresses deductions within an explicit system of definitions and rules. Its checker does not decide that an argument sounds persuasive. It checks whether the encoded steps follow. That still leaves humans with the task of understanding the statement being encoded and what its definitions mean.

The distinction is easy to lose because ordinary language uses proof for both the human argument and its formal counterpart. Both deserve the name, but the new achievement must be identified precisely. Otherwise, a reader may reasonably wonder why the mathematics they learned had already celebrated Andrew Wiles’s result decades earlier.

## A revealing preparation for the announcement

In an August 13 post about the Annals Challenge, Kevin Buzzard described a problem that precedes checking proofs: some advanced theorems are difficult even to state in a formal library because the needed definitions are missing. He distinguished the work of encoding statements from the work of formalizing their proofs. This was earlier community context, not a reaction to the Fermat release. [Read his explanation.](https://xenaproject.wordpress.com/2026/08/13/the-annals-challenge/)

Think of a technical conversation in which every unfamiliar word has to be defined before the central sentence can be written. Defining one word may require several more. A short-looking claim can depend on a large supporting vocabulary. Formalization makes those dependencies difficult to ignore.

For a lay reader, that helps explain why translating a proof is not like scanning a document. The challenge is not merely recognizing the symbols on the page. It includes making implicit relationships explicit and assembling the background needed to express what the original authors meant.

## The person who had been working toward the same destination

Buzzard’s September 4 response has an unusually direct title: *FLT: Anthropic has beaten me to it*. He reports compiling the released code and running a comparison check. He also explains why his own funded project continues, including its aims of contributing reusable mathematics and creating a document humans can explore. He reviewed the released result; he did not produce Anthropic’s formalization. [Read his response.](https://xenaproject.wordpress.com/2026/09/04/flt-anthropic-has-beaten-me-to-it/)

That account resists a simple replacement story. Two projects can overlap in one goal while serving different purposes. A checked result, a reusable library, and an intelligible explanation are all valuable outputs. Producing one does not automatically produce the others in the form a community needs.

It also gives readers a concrete example of expert response. Buzzard does not merely say that the result sounds impressive. He describes actions he took and relates the work to his own understanding of the field. The relationship between the speaker and the evidence is unusually visible.

## What the public explainer adds

Simon Carter’s September 5 post presents the result for readers following AI systems. It explains formalization and the chain of checking in accessible language. Its emphasis is the scale and coordination of the effort. Carter is an outside writer, not the author of the mathematical result or a claimed independent verifier. [Read his overview.](https://simoncarter.ai/posts/claude-proved-fermat-s-last-theorem-in-11-days-and-a-computer-checked/)

A useful way to read such an account is to separate three questions. What did the system produce? What checks were performed on that output? What larger conclusion does the writer draw about future capability? The first two concern specific evidence. The third is an interpretation, even when it is a reasonable one.

That does not make interpretation dispensable. Readers want to know why an event matters. But the explanation should leave the boundary visible, especially when a remarkable demonstration tempts us to assume that every related task has also become easy.

## A milestone in a different kind of labor

On September 7, Davide Castelvecchi’s Nature report identified the achievement as a formalization milestone. The accessible headline and introductory summary preserve the distinction between existing mathematics and computer-verified code. The full article may require access; this narrative does not rely on paywalled interview details. [See Nature’s report.](https://www.nature.com/articles/d41586-026-02822-9)

The labor at issue is often less visible than discovery itself. A reader sees a famous theorem at the top of a page and a conclusion at the bottom. Between them lies a network of dependencies. Making that network explicit can require enormous effort even when specialists already have strong confidence in the theorem.

A machine-checked proof changes what can be examined automatically. It does not automatically supply the most illuminating route through the mathematics. A long formal argument may be excellent evidence and still be a poor lesson for a newcomer. Certification and explanation are related achievements with different audiences.

## The small experiment deliberately does less

The companion explainer’s toy dependency checker asks you to remove a premise from a tiny argument. The conclusion can remain true while its displayed justification becomes incomplete. That is a simple way to feel why a chain of deductions matters independently of whether you like its final sentence.

The activity does not run Lean, and it does not inspect any part of the Fermat formalization. Its purpose is conceptual: a conclusion needs an account of how it follows from the stated starting points. A missing bridge cannot be repaired merely by confidence that the far side is real.

## What remains humanly interesting

The story is compelling because it changes a practical horizon while leaving the purpose of understanding open. If more proofs can be formalized, researchers may gain new ways to check, reuse, and explore mathematical knowledge. Deciding how to make those results accessible remains a creative task.

For the reader, the right question is not simply whether the machine has repeated something humans knew. It is what a new form of that knowledge makes possible. An accepted proof and a mechanically checkable proof occupy different places in the practice of mathematics. Recognizing that difference lets us appreciate the milestone without rewriting the history of the theorem.
