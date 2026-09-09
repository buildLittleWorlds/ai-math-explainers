---
{
  "discovery": "ramsey-colors",
  "title": "How long can disorder hold out?",
  "summary": "A coloring puzzle became news about a growth rate. Understanding the difference makes the result more interesting than a picture full of lines.",
  "plateCaption": "Five vertices and two colors illustrate the forbidden pattern, not the many-color construction.",
  "researchedThrough": "2026-09-09",
  "timeline": [
    {
      "date": "August 1, 2026",
      "label": "The result is announced",
      "text": "OpenAI includes the multicolor triangle bound as result 9 in its joint research announcement.",
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
      "label": "A community narrative",
      "text": "Caruso’s essay distinguishes the questions behind the announced results.",
      "url": "https://chriscaruso.dev/notebooks/ten-off-the-shelf"
    },
    {
      "date": "September 9, 2026",
      "label": "The reference point for this guide",
      "text": "MathWorld’s Ramsey entry is consulted for definitions and the distinction between parameters. This is a research-check date, not a new announcement.",
      "url": "https://mathworld.wolfram.com/RamseyNumber.html"
    }
  ],
  "sources": [
    {
      "title": "Ramsey Number",
      "author": "Eric W. Weisstein · MathWorld · consulted September 9, 2026",
      "role": "Mathematical reference and background",
      "url": "https://mathworld.wolfram.com/RamseyNumber.html",
      "note": "Connects the party puzzle to Ramsey numbers; later notation is optional."
    },
    {
      "title": "OpenAI’s Next Model, Astra, Just Solved Ten Decades-Old Open Math Problems",
      "author": "Josef Waples · DataCamp · August 2, 2026",
      "role": "Independent educational overview",
      "url": "https://www.datacamp.com/blog/open-ai-model-astra-solved-ten-open-math-problems",
      "note": "Short explanations by subject. Distinguish the headline from the different kinds of progress in the article."
    },
    {
      "title": "Ten Off the Shelf",
      "author": "Chris Caruso · August 3, 2026",
      "role": "Independent community essay",
      "url": "https://chriscaruso.dev/notebooks/ten-off-the-shelf",
      "note": "A long interpretive account of the ten-result release; not an independent proof certification."
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

At first, the game looks like an exercise in making a mess. Draw five dots, connect every pair, and color each line teal or orange. Try to avoid any triangle whose three sides have the same color. If a triangle appears, change a line. If that creates another triangle elsewhere, change another.

Soon you notice the problem with that strategy. Each edge participates in several possible triangles. A local repair can become a distant mistake. You are no longer decorating a picture. You are trying to keep a whole collection of overlapping constraints satisfied at once.

## The inevitable pattern and the surprisingly long wait

On August 1, 2026, OpenAI announced a superexponential lower bound for multicolor triangle Ramsey numbers. It was one item in a larger release. The dated announcement is the earliest public release located here for that finding; a joint publication does not establish that all its results were discovered that day. [Read result 9 in the announcement.](https://openai.com/index/ten-advances-in-mathematics/)

The basic Ramsey question concerns how large a network must become before every coloring necessarily contains a specified pattern. More colors give you more ways to avoid a single-color triangle. The new result concerns how dramatically the room for avoidance grows as the number of available colors increases.

That is not the same as discovering a particular colorful picture, or showing that triangles eventually become unavoidable. It is a statement about scale. The surprise lies in how long the pattern can be postponed, even though it cannot be avoided forever when the number of colors is fixed.

## A party puzzle with carefully limited ambitions

MathWorld introduces Ramsey numbers through a party problem: how many guests force a group of mutual acquaintances or mutual strangers? The familiar two-category version provides an entrance into a larger family of coloring questions. Its reference entry also distinguishes the multicolor triangle setting. [Read the introductory explanation.](https://mathworld.wolfram.com/RamseyNumber.html)

The social analogy is useful if we do not ask it to model actual friendship. Here a relationship belongs to a chosen category, and the mathematical question ignores everything else about the people. A triangle is just three vertices with the required relationship on all three connecting edges.

That simplification is part of the power of mathematics. The same structure can be discussed without deciding whether the vertices are people, computers, or abstract points. But it also limits what the theorem says. It does not predict that every real party develops a particular social dynamic. The analogy explains the combinatorial rules.

## The small example is not the new result

The five-dot picture in the atlas has teal perimeter edges and orange diagonals. It avoids a single-color triangle. Count only the five original dots: crossing lines do not create new vertices. If you accidentally count a crossing as a person in the party analogy, you have quietly changed the problem.

This is an old, elementary example, deliberately chosen because a reader can inspect it. Its role is to show what avoiding the pattern means. The research concerns many colors and much larger mathematical constructions. The two-color example is not a tiny photograph of that work.

There is a useful lesson in the gap. An accessible explanation can give you a valid mental model of a constraint without giving you a picture of the entire discovery. You should expect the writer to tell you which of those jobs a diagram is doing. Otherwise, a clear image can become the source of a false impression.

## Why the growth language matters

An exponential rate can already become enormous. Repeatedly multiplying by the same factor produces numbers that quickly outrun everyday intuition. Calling a lower bound superexponential says that the relevant growth eventually outpaces every fixed exponential rate. It is a comparison between ways of growing, not simply a synonym for very large.

Imagine two savings plans with different rules for increasing the balance. Looking at one month's totals may tell you little about which rule eventually dominates. A claim about growth asks what the rules do over a long horizon. The analogy leaves out the mathematics, but it preserves why a single impressive number is not the main point.

A lower bound adds another layer. It establishes that avoidance is possible up to a certain scale. An upper bound limits how far avoidance can continue. Knowing the broad scale still leaves questions about exact values and constants. The result can answer a longstanding question without filling every blank in the subject.

## How outside explanations change the headline

Josef Waples’s DataCamp overview translates the Ramsey result into relationship categories and an unavoidable trio. Chris Caruso’s longer essay distinguishes a growth-scale conclusion from determining a precise constant. Both help interpret the release; neither is being presented here as an independent certification of its proof. [Read Waples’s overview](https://www.datacamp.com/blog/open-ai-model-astra-solved-ten-open-math-problems) or [Caruso’s essay.](https://chriscaruso.dev/notebooks/ten-off-the-shelf)

That division of labor is useful for readers. A short explainer can make the object recognizable. A longer narrative can show why the headline needs qualifications. A reference can settle which mathematical quantity is being discussed. None has to do everything, provided their roles are clear.

Direct public discussion of this particular result is less extensive in the sources located for this guide than discussion of some famous named conjectures. The background explanation is therefore doing more work here. It is labeled as background rather than turned into an invented chorus of reactions to the announcement.

## What the game cannot tell you

Playing with five dots is not an experimental test of an asymptotic theorem. You cannot establish the growth rate by recoloring a few small networks. Nor does failing to find a good coloring mean none exists. The search experience and the mathematical guarantee answer different questions.

What the activity does reveal is how quickly a simple rule can create a web of dependencies. Every line you recolor affects several possible patterns. That makes the existence of large avoiding constructions feel less trivial, even before you understand how they are built.

The story ends with a sharper sense of the news. The discovery is not that order exists somewhere inside disorder. It concerns how much room there can be before a particular kind of order becomes compulsory. Once you understand that distinction, the small pentagon stops being merely a puzzle and becomes a doorway into the scale of the result.
