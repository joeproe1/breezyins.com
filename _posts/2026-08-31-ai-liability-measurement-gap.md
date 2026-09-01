---
layout: post
title: "Insuring AI Liability Without Measuring the Risks"
description: "The first cohort of AI liability writers is live. The measurement infrastructure underneath them is not. A map of who is writing, what they are pricing from, and what is missing."
date: 2026-08-31
author: Joerg Proeve
category: Industry Trends
read_time: "13 min read"
last_modified_at: 2026-08-31
image: /assets/images/Blog-AI-Liability-Measurement-Gap.png
image_alt: "AI liability insurance measurement gap — who is writing coverage and what data they are pricing from"
permalink: /insights/ai-liability-measurement-gap/
---

The insurance industry has been arguing all summer over whether AI liability can be insured. Most carriers have decided - at least for now - that it can't. They are narrowing policy language on the GL, cyber, and product liability forms, adding AI exclusions, trying not to repeat the "silent cyber" problem from last decade. A smaller group of MGAs, Lloyd's coverholders, and reinsurer-backed programs has started writing affirmative AI liability coverage. Their approaches have little in common: performance warranties, adversarial testing, governance reviews, litigation-based models or just AI endorsements bolted onto existing cyber policies.

AI liability claims are still sparse, but the risk exposures are concrete: an autonomous agent that approves $50,000 in payments it shouldn't have, or an AI hiring tool that screens out protected classes. The potential buyers: any company deploying AI where errors hit third parties. Healthcare, finance, legal, HR screening.

These are different perils, different policy forms, different loss dynamics, and that's part of what makes measurement so hard. We're in the early innings of AI insurance. Some skeptics say you can't price it at all. I wouldn't go that far. But what are we actually trying to insure, and on what basis?

<figure style="margin: 32px 0;">
<img src="/assets/images/Blog-AI-Liability-Risk-Curve.jpg" alt="Severity-frequency risk curve that breaks down into scattered data points in the tail" style="width: 100%; border-radius: 10px;" loading="lazy">
<figcaption style="font-size: 14px; color: #6B7B8D; text-align: center; margin-top: 10px; line-height: 1.5;">Where the data runs out, the curve becomes a guess.</figcaption>
</figure>

## Who's writing AI liability today

The market is small enough that you can name the entire first cohort.

Munich Re launched the first dedicated AI insurance products, aiSure, as a performance warranty: if the model drifts below defined accuracy thresholds or produces discriminatory outputs, the policy pays. They've been at this since 2018 and remain one of the few reinsurers with a dedicated AI liability product in market.

At Lloyd's, three coverholders have launched AI liability products. Armilla AI offers standalone coverage, with underwriting informed by over 500 AI system evaluations. AIUC takes a different path: it certifies an AI model first, then adds insurance. Their AIUC-1 framework puts systems through thousands of adversarial simulations. The insurance is written on Beazley paper, with ElevenLabs, an AI voice generation company, as their first public customer. Testudo builds its underwriting off AI litigation data, though the dataset is still thin.

Corgi started offering an AI and algorithmic liability endorsement on top of D&O, E&O, and cyber. Cowbell added AI-specific underwriting factors to its cyber risk-rating framework in July. That's probably the near-term path for most cyber MGAs: AI bolted onto cyber, not a standalone line.

And then there's the rest of the market. Technology companies can buy standard Tech E&O from Vouch, Hartford, or Hiscox, with an AI endorsement added. No AI-specific risk assessment, no evaluation of model behavior. Premium is based on revenue, headcount, vertical, prior claims, the same way you'd price a SaaS platform or payroll tool.

A handful of players are experimenting with AI-specific underwriting. A much larger market isn't measuring AI risks at all. Total dedicated premium for AI liability: immaterial.

## The cycle every peril follows

Every complex liability class follows the same cycle. A new peril emerges. Carriers realize their existing policy language covers it by accident. They add exclusions. A small group of specialty writers launches affirmative products covering what the mainstream is excluding. Eventually, measurement infrastructure follows, the market matures, and mainstream carriers absorb some of the specialty insurers.

For D&O, this cycle took the better part of sixty years. When corporate officers first faced personal liability for securities violations back in the 1930s, there was no standard product. Lloyd's syndicates wrote bespoke covers. D&O didn't become a recognizable product class in the US until the 1960s. And not until the Savings & Loan crisis of the late 1980s did carriers develop the claims data and actuarial models to price it with any confidence.

Environmental liability went through the same cycle, a little faster. The Comprehensive General Liability form originally covered pollution losses. But after [Love Canal](https://www.epa.gov/history/love-canal) -- a neighborhood in Niagara Falls built on top of buried chemical waste -- triggered a public health crisis and a wave of Superfund claims in the 1980s, carriers added the absolute pollution exclusion. Standalone environmental impairment liability products followed, but for a stable product to emerge, the measurement layer had to exist first: contamination assessments, remediation cost estimates, regulatory compliance records. The insurance couldn't stabilize until the evidence base did.

Each of these perils also had a defining event that flushed the exposure into the open. The Savings & Loan crisis for D&O. Love Canal for environmental. [NotPetya](https://www.wired.com/story/notpetya-cyberattack-ukraine-russia-code-crashed-the-world/) in 2017 for cyber -- a single attack across 65 countries that forced every insurer holding a property or marine book to ask whether they were covering a cyber loss they never priced for.

AI liability is unlikely to have its NotPetya moment. Cyber risk manifests in discrete events: a ransomware attack, a data breach. AI produces outputs that become part of a company's own conduct -- giving advice, hiring, communicating with customers. The exposure does not surface through a single catastrophic event. It accumulates across claims frequency: a professional liability claim where the advice relied on a hallucinated regulatory requirement, a wrongful termination suit where the hiring tool screened out protected classes, a tribunal ruling where an airline was bound by a discount its chatbot fabricated.

That gradual accumulation makes AI structurally different. There will be no moment where the industry collectively discovers it has an AI liability problem. And unlike previous perils, there may be no single event that forces the industry to build the measurement foundation it skipped.

## From signal to pricing

AI liability is one of the hardest emerging risks to insure.

I co-founded a parametric MGA in 2020, and that experience shaped how I think about measuring complex risk. Parametric insurance works because the trigger is a pre-agreed, observable, independently verifiable number: a NOAA weather station, or a cat model from Moody's RMS.

AI evaluation scores don't work that way. A hallucination rate changes with the test set, the evaluator, the model version, and the business context. Armilla and AIUC evaluate AI models, but when the evaluator is also the insurer, the data isn't independent anymore, by definition.

What underwriters need is a validated chain: an observable AI signal that correlates with loss frequency, that maps to expected severity, that can be modeled across a portfolio. I haven't seen a public demonstration of this chain from signal to pricing.

Gallagher Re laid this out in their June 2026 report "[Anthropic's Fourth Way](https://www.ajg.com/gallagherre/-/media/files/gallagher/gallagherre/news-and-insights/2026/june/restricted-ai-models-insurance-risk-analysis-2026-gallagher.pdf)": current AI evaluation methods "were not designed for underwriting and are not fit for that purpose." Benchmarks measure how models perform on controlled tests. But losses happen in deployment, not in testing. Their conclusion:

> "If a model cannot be tested, insurers end up pricing uncertainty rather than risk."

Without better evaluation, that leads to two failure paths: AI losses absorbed silently into existing policies until carriers exclude them, or standalone products launched without foundations that collapse after early losses.

Without independent model evaluation, the market defaults to underwriting governance: deployment approval processes, human oversight. Most AI underwriting is done that way today, but I'm not convinced that is enough. Cyber insurance tried governance-based underwriting for years, remember? Applicants checked "yes" on the MFA question, and half the time they didn't have it deployed properly. It took a catalyst, the ransomware wave of 2020/21, to force the industry to verify independently what applicants were telling them.

## Where the cyber comparison breaks down

BitSight and SecurityScorecard built outside-in security scores for cyber, based on a client's open ports, SSL certificates, and malware infections. The same approach doesn't work for AI risk. A publicly visible chatbot might reveal something about prompt-injection resilience. It reveals nothing about the agent's authority, data flows, approval thresholds, or what happens when it makes a wrong decision. No external attack surface to scan.

There is a trust problem underneath all of this. Policyholders resist giving insurers access to internal data. They worry it might get used against them in a coverage dispute.

## Why insurers don't look

Insurers have a structural reason not to look too closely at what they cover. I learned this from a cyber vulnerability firm that wanted to sell inside-out network scans to insurers -- more revealing than standard outside-in scores. The problem: if the scan revealed a security loophole and the policyholder didn't fix it, the insurer was on record as having known. If it didn't flag it and a breach followed, same problem. Either path creates potential E&O exposure. The practical resolution is to limit what you look at. Don't run the inside-out scans.

For AI, this dilemma gets worse. Early case law is pointing liability at the deployer, not the developer. For example, [Air Canada was held responsible](https://www.cbc.ca/news/canada/british-columbia/air-canada-chatbot-lawsuit-1.7116416) for promises its chatbot invented. A US court [sanctioned a lawyer](https://en.wikipedia.org/wiki/Mata_v._Avianca,_Inc.) for citing AI-generated fictitious cases -- not OpenAI. Because liability lands on the company using the AI, not the company that built it, the exposure sits across whatever corporate policies that company already carries -- GL, E&O, EPL, D&O. It is not a standalone risk. It is embedded in existing books.

## What the data doesn't show yet

The runtime signals exist: error rates, confidence scores, boundary violations, human override frequency, drift against deployment baselines. The problem is that nobody has yet demonstrated, with any claims history, which of these signals correlate with liability losses.

That connection requires claims data. And for AI liability, claims data barely exists. Without it, there is no credible loss distribution to model severity from, and no foundation for portfolio-level correlation.

There is a further complication that traditional actuarial lines don't have: the risk being measured changes constantly. An AI model can be updated, fine-tuned, or redeployed in a different context between one evaluation and the next. An assessment issued last month might be meaningless today, not because the evaluator made an error, but because the model changed.

The insurance industry does not yet have a clear answer to what this measurement layer should contain, how often it needs to refresh, or who can be trusted to run it.

## The missing layer

What the nascent AI insurance market needs is an independent measurement layer, something that takes technical AI evidence and turns it into data an underwriter can price from.

AI governance platforms like Holistic AI and Credo AI score AI systems on bias and robustness. They were built for compliance teams, not underwriters, and tell you whether a system meets a regulatory standard. They don't tell you the likelihood and cost of a liability loss.

Neither side can build this layer alone. The insured won't share data they fear could be used against them. The insurer faces the E&O problem I described. This layer needs to sit between them, the way a credit rating agency sits between borrower and lender.

AI insurance will need at least one credible, independent source of underwriting-grade evidence. Whoever builds that becomes infrastructure.

The credit-rating-agency analogy is useful but misleading. The 2008 financial crisis demonstrated what happens when the entities being rated are also the rating agency's largest clients.

An AI measurement layer faces the same tension. If the AI company pays for the evaluation, the evaluator has an incentive to certify. If the insurer pays, the evaluator has an incentive to flag risks that justify higher premiums. If the policyholder pays, they want a clean report. AIUC's approach -- certify first, then insure -- puts certification and insurance under the same commercial umbrella. Even if the methodology is rigorous, that is not independence.

