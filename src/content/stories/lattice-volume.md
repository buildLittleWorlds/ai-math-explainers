---
{
  "discovery": "lattice-volume",
  "title": "How much room can one point claim?",
  "summary": "A quiet geometric question about balance arrived inside a crowded announcement. Its public story is about learning to see the precise question within the headline.",
  "plateCaption": "A centered triangle illustrates the condition; the announced theorem extends across dimensions.",
  "researchedThrough": "2026-09-09",
  "timeline": [
    {
      "date": "August 1, 2026",
      "label": "The earliest announcement located",
      "text": "OpenAI lists the resolution of Ehrhart’s volume conjecture as result 8.",
      "url": "https://openai.com/index/ten-advances-in-mathematics/"
    },
    {
      "date": "August 2, 2026",
      "label": "A plain-language overview",
      "text": "Waples publishes an educational summary of the announced results, organized by mathematical field.",
      "url": "https://www.datacamp.com/blog/open-ai-model-astra-solved-ten-open-math-problems"
    },
    {
      "date": "August 3, 2026",
      "label": "The question gets a narrative",
      "text": "Caruso opens his essay with Ehrhart’s balance-point problem.",
      "url": "https://chriscaruso.dev/notebooks/ten-off-the-shelf"
    },
    {
      "date": "August 5, 2026",
      "label": "A separate team reports another route",
      "text": "Initio announces an alternative proof and a comparison with OpenAI’s approach. Its independence claim is attributed to the team.",
      "url": "https://initiointelligence.com/research/alternative-proof-ehrhart-volume-conjecture"
    }
  ],
  "sources": [
    {
      "title": "Ten Off the Shelf",
      "author": "Chris Caruso · August 3, 2026",
      "role": "Independent community essay",
      "url": "https://chriscaruso.dev/notebooks/ten-off-the-shelf",
      "note": "A long interpretive account of the ten-result release; not an independent proof certification."
    },
    {
      "title": "OpenAI’s Next Model, Astra, Just Solved Ten Decades-Old Open Math Problems",
      "author": "Josef Waples · DataCamp · August 2, 2026",
      "role": "Independent educational overview",
      "url": "https://www.datacamp.com/blog/open-ai-model-astra-solved-ten-open-math-problems",
      "note": "Short explanations by subject. Distinguish the headline from the different kinds of progress in the article."
    },
    {
      "title": "An alternative proof of the Ehrhart volume conjecture from a less powerful model",
      "author": "Initio · August 5, 2026",
      "role": "Separate team’s follow-up announcement",
      "url": "https://initiointelligence.com/research/alternative-proof-ehrhart-volume-conjecture",
      "note": "Reports another approach and compares proofs. Independence and capability claims are the team’s own account."
    },
    {
      "title": "Ten advances in mathematics and theoretical computer science",
      "author": "OpenAI · August 1, 2026",
      "role": "Original joint announcement",
      "url": "https://openai.com/index/ten-advances-in-mathematics/",
      "note": "Read result 8 for Ehrhart and result 9 for Ramsey. Publication together does not mean discovery on the same day."
    }
  ]
}
---

Put a dot on a sheet of graph paper and draw a triangle around it. Now make the triangle bigger without allowing any other grid dot to enter its interior. That already sounds like a puzzle. Add one more rule: the original dot must be the triangle’s balance point.

Suddenly, stretching one corner far away is not a free solution. The balance condition ties the whole shape together. The question is no longer how to surround an isolated point with an arbitrary outline. It is how much space a shape can enclose while satisfying several constraints at once.

## A result easy to lose inside a list

OpenAI’s August 1, 2026 announcement includes Ehrhart’s volume conjecture as result 8. It reports a sharp maximum in every dimension for a convex body whose centroid is its only interior lattice point. This is the earliest announcement located for the reported resolution in this research pass. [Read the original result description.](https://openai.com/index/ten-advances-in-mathematics/)

Those terms can make a simple-looking question disappear behind unfamiliar language. A lattice is a regular grid. A convex shape has no inward dents. Its centroid is its balance point under a uniform distribution of mass. “Interior” excludes the boundary: points sitting exactly on an edge do not violate the one-point condition.

The all-dimensional claim is the part that the flat drawing cannot display. A triangle helps us understand the question in two dimensions. It is not a proof that the answer behaves as expected in every mathematical dimension. The illustration carries the rules; the research carries the general conclusion.

## Balance does real work

Think of the balance point as the place where a thin, uniformly made cardboard shape could be supported on a tip. If you add a large flap to one side, that point generally moves. You cannot keep increasing the area in one direction while pretending the rest of the shape is unaffected.

This is a teaching analogy, not a physical experiment proposed as evidence for the theorem. Its purpose is to make one otherwise invisible condition feel consequential. The distinguished grid point is not merely somewhere inside. Its relationship to the whole shape matters.

The same is true of convexity. A shape with thin, wandering arms could try to avoid unwanted dots while reaching far across the page. The no-dents condition rules out that kind of maneuver. When readers ask whether the theorem is surprising, they need to know the constraints that make its comparison meaningful.

## What a sharp limit gives you

A bound can be useful even when no example gets close to it. A sharp bound says more: the proposed limit can actually be attained. There is no spare margin built into the number merely to make the argument easier. That does not automatically identify every shape that attains it.

Consider a rule limiting the load on a shelf. A cautious safety limit and the greatest mathematically possible load are different kinds of statements. The analogy is imperfect, but it separates an estimate from an extremal answer. Here the subject is the volume permitted by the exact geometric conditions.

This distinction helps a reader appreciate why an old conjecture about the maximum is more than an exercise in measuring a triangle. Establishing a candidate example is one task. Showing that every eligible alternative stays below the same ceiling is the other. The general statement brings those two directions together.

## The writers who made the question visible

Chris Caruso opens his August 3 essay with Ehrhart’s question about balance and a single interior grid point. Waples’s DataCamp overview also explains the result through the maximum-volume question. Their accounts make an item in a multi-result announcement easier to recognize, although neither is a substitute for specialist proof review. [Read Caruso](https://chriscaruso.dev/notebooks/ten-off-the-shelf) and [the DataCamp overview.](https://www.datacamp.com/blog/open-ai-model-astra-solved-ten-open-math-problems)

That choice of opening is useful. Beginning with the object rather than the model allows readers to ask what was discovered before asking how impressive the AI must be. A company name or a model name does not tell you whether a result concerns an example, an estimate, or a universal guarantee.

The broader announcement explains why this quiet geometric question entered a much larger conversation. Yet the context should not swallow the subject. Ten results published together remain ten different mathematical claims. Learning the conditions of one is a better first step than trying to absorb the scale of the entire release at once.

## Another proof changes the conversation again

On August 5, Initio announced an alternative proof using an older model. Its post contrasts its own approach with OpenAI’s and attributes the outcome partly to the surrounding research system. The claimed independence and account of the process come from Initio itself; this guide does not independently audit them. [Read the follow-up announcement.](https://initiointelligence.com/research/alternative-proof-ehrhart-volume-conjecture)

For the reader, the interesting question is why another proof might matter after a problem is reported solved. Different proofs can expose different connections, make assumptions easier to track, or suggest further questions. A proof is not just a stamp attached to a statement. It can be a route through the subject.

At the same time, a second announcement is not automatically independent confirmation of every part of the first. It may concern a different argument and a different process. We can welcome the possibility of another route while remaining precise about what has actually been compared and checked.

## A quieter kind of public story

The accessible sources located for this page contain less direct public debate about Ehrhart’s theorem than about Fermat or Navier–Stokes. Rather than manufacture a controversy, this narrative broadens to the question itself and the later alternative-proof announcement. That is a different kind of context, and it should be recognizable as such.

The triangle experiment provides a final anchor. Increase its scale around the fixed center and watch boundary points enter. It makes “strictly inside” concrete. It does not reenact the proof, and it does not transform the two-dimensional example into evidence for all dimensions.

What remains with the reader is a precise question: how much can a shape claim while keeping its balance and excluding every other interior grid point? That question has a simplicity the announcement’s technical vocabulary can conceal. Recovering it is part of understanding why the finding matters—and why explaining mathematics is work in its own right.
