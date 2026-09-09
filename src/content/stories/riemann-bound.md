---
{
  "discovery": "riemann-bound",
  "title": "The percentage that is not a progress bar",
  "summary": "A striking new guarantee became a test of how clearly we can talk about partial knowledge—and how easily a familiar graphic can mislead.",
  "plateCaption": "The bars show lower-bound proportions, not fractions of a completed proof.",
  "researchedThrough": "2026-09-09",
  "timeline": [
    {
      "date": "August 10, 2026",
      "label": "The original announcement",
      "text": "Anthropic reports the critical-line proportion bound. This is the earliest announcement located for the result.",
      "url": "https://www.anthropic.com/research/riemann-zeta"
    },
    {
      "date": "August 10, 2026",
      "label": "An educational explanation",
      "text": "Waples publishes a guide to what the two percentages mean.",
      "url": "https://www.datacamp.com/tutorial/claude-and-the-riemann-hypothesis"
    },
    {
      "date": "August 12, 2026",
      "label": "Experts discuss the significance",
      "text": "Howlett’s Scientific American article includes assessments by Maynard and Sutherland.",
      "url": "https://www.scientificamerican.com/article/no-ai-didnt-just-solve-the-thorniest-problem-in-math/"
    },
    {
      "date": "August 13, 2026",
      "label": "An update and wider coverage",
      "text": "Anthropic updates the paper linked from its announcement; technology coverage also carries the story.",
      "url": "https://www.anthropic.com/research/riemann-zeta"
    }
  ],
  "sources": [
    {
      "title": "No, Anthropic’s AI didn’t just solve math’s hardest problem",
      "author": "Joseph Howlett · Scientific American · August 12, 2026",
      "role": "Independent reporting with expert interviews",
      "url": "https://www.scientificamerican.com/article/no-ai-didnt-just-solve-the-thorniest-problem-in-math/",
      "note": "James Maynard and Andrew Sutherland discuss significance and limits in accessible terms."
    },
    {
      "title": "Claude Tried the Riemann Hypothesis. Here’s What Happened.",
      "author": "Josef Waples · DataCamp · August 10, 2026",
      "role": "Independent educational explainer",
      "url": "https://www.datacamp.com/tutorial/claude-and-the-riemann-hypothesis",
      "note": "Useful for understanding a long-run guarantee; read the original source for the exact result."
    },
    {
      "title": "Anthropic’s Claude tried to solve the Riemann hypothesis and found something new instead",
      "author": "Skye Jacobs · TechSpot · August 13, 2026",
      "role": "Outside technology coverage",
      "url": "https://www.techspot.com/news/113472-anthropic-claude-tried-solve-riemann-hypothesis-found-something.html",
      "note": "A readable later account; it repeats expert interviews from Scientific American rather than providing independent interviews."
    },
    {
      "title": "Learning more about Claude’s mathematical capabilities",
      "author": "Anthropic · August 10, 2026; update August 13",
      "role": "Finding-specific announcement",
      "url": "https://www.anthropic.com/research/riemann-zeta",
      "note": "The original proportion-bound announcement and its update, with links to the mathematical work."
    }
  ]
}
---

A bar filled to 67.2 percent looks familiar. It could be a download, a fundraising target, or the charge in a battery. In each case, the empty part seems to represent unfinished business. Fill the rest and the task is done.

That is exactly the intuition this mathematical story asks us to resist. The number belongs to a guarantee about a proportion of zeros of a function. It is not a measure of how much of the Riemann hypothesis has been proved. The picture becomes useful only when we explain what it is permitted to measure.

## The attempted destination and the result actually reached

Anthropic’s August 10, 2026 announcement describes asking Claude to attempt the Riemann hypothesis. The reported outcome was a related advance: raising a lower bound for the long-run proportion of relevant zeros on the critical line from 41.6 percent to 67.2 percent. This is the earliest announcement located for that result. The post also records an August 13 update to the linked paper. [Read the announcement and update.](https://www.anthropic.com/research/riemann-zeta)

A zero is an input at which a function’s output is zero. The Riemann hypothesis concerns particular zeros of the zeta function and says that they all lie on a specified line. You do not need to calculate that function to recognize the logical difference between “all” and “at least this proportion.”

The word relevant matters because the function also has zeros outside the group at issue. An accessible story can omit the formulas, but it should not quietly replace a carefully delimited claim with a statement about every zero of every kind. Plain language still needs boundaries.

## Why a lower bound is not a sample

Josef Waples’s same-day DataCamp explanation emphasizes that the percentages are guarantees, not counts from a finite batch of tested zeros. That is a useful distinction for readers accustomed to surveys and experimental measurements. The article is an educational interpretation by a data-science editor, not a mathematical audit. [Read the explainer.](https://www.datacamp.com/tutorial/claude-and-the-riemann-hypothesis)

Suppose you inspect many objects and every one has a property. That is evidence about what you inspected. A mathematical argument establishing a long-run minimum proportion says something different: it constrains the entire continuing collection according to the theorem’s precise formulation. The guarantee does not come from assuming the next unexamined item resembles the previous one.

Nor should the hatched part of the bar be read as a supply of known exceptions. A lower bound tells us what is secured, not that everything outside the secured portion is false. If a guarantee improves, the earlier statement was not necessarily wrong. It may simply have been weaker.

## The strange meaning of a hundred percent

The most surprising point comes when a reader asks whether reaching a hundred percent would settle the hypothesis. With an infinite collection, a long-run proportion can be one even if exceptions remain. The word all is stronger than a statement that exceptions become negligible in proportion.

Here is a separate teaching example. Among the first hundred counting numbers, the single number 1 occupies one percent. Among the first million, that same exception occupies a millionth of the collection. Its share tends toward zero as the range grows, but the number itself never disappears.

This is not a model of the zeta zeros. It isolates a logical issue: a set of exceptions can have vanishing proportion without being empty. Once you see that, the temptation to turn the bar into a proof-completion meter becomes much easier to resist.

## Enthusiasm and restraint in the same response

Joseph Howlett’s August 12 Scientific American reporting puts those distinctions beside expert reactions. James Maynard describes the result as bringing an interesting new idea, while also saying that the approaches involved do not offer a path to the full hypothesis. Andrew Sutherland sees evidence of AI contributing to research beyond answering prescribed problems. These are reported assessments by named mathematicians, not a poll of the field. [Read the interviews.](https://www.scientificamerican.com/article/no-ai-didnt-just-solve-the-thorniest-problem-in-math/)

There is no contradiction between those responses. A result can change a meaningful related question without moving us along a simple road to the most famous target. Research is not always a sequence of checkpoints arranged toward one finish line. It can uncover something valuable while trying to reach somewhere else.

That makes the account more interesting than either “AI solved it” or “AI failed.” Both compress a branching investigation into a yes-or-no verdict. The task initially attempted and the knowledge eventually obtained deserve to be described separately. Otherwise, a partial success is either exaggerated or erased.

## How the story travels

Skye Jacobs’s August 13 TechSpot article carries the result into technology coverage and repeats expert comments from Scientific American. It offers another accessible route into the subject, but those repeated interviews are not a second independent set of expert assessments. [Read the later coverage.](https://www.techspot.com/news/113472-anthropic-claude-tried-solve-riemann-hypothesis-found-something.html)

This is a small but useful habit when following a fast-moving story. Several articles can trace back to the same announcement and the same interviews. Their agreement may reflect shared reporting rather than separate verification. A good reading list makes that relationship visible instead of treating every link as another vote.

The same principle applies to corrections and updates. An announcement page may change after its first publication. The date a writer consulted it matters, and the dated update should remain visible. That does not establish that every change altered the theorem; it tells the reader that the public record has versions.

## What the image can honestly do

The two bars let you compare the reported guarantees directly. Their difference is 25.6 percentage points. That visual comparison is meaningful without suggesting a percentage of the proof has been completed. It gives the reader a foothold in the scale of the improvement, while the prose explains the limits of the metaphor.

A responsible account should preserve both the excitement and the exact object of that excitement. We can recognize a stronger guarantee, ask how the argument uses earlier work, and read expert reactions without deciding that a famous conjecture is almost solved. Precision is not an apology for the result. It is how we find the result inside the headline.

When you return to the plate, look first at its label: guaranteed proportion on the line. That phrase asks more of us than the familiar shape of a progress bar. Once we understand it, the image becomes a compact explanation of new knowledge rather than an accidental promise about what comes next.
