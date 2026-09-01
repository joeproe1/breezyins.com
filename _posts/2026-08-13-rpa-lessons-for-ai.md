---
layout: post
title: "What RPA Should Have Taught P&C Carriers About AI"
card_title: "What RPA Should Have Taught Carriers About AI"
description: "Almost all P&C carriers are using AI somewhere. Only 10% have scaled it beyond pilots. The structural problems are twenty years old."
date: 2026-08-13
author: Joerg Proeve
category: Industry Trends
read_time: "8 min read"
image: /assets/images/Blog-RPA-Lessons-AI.png
image_alt: "What RPA should have taught P&C carriers about AI — legacy architecture, talent gaps, and pilot purgatory"
last_modified_at: 2026-08-13
permalink: /insights/rpa-lessons-for-ai/
---

A decade ago, at Chubb, I watched an RPA program run into roadblocks. Today, many AI projects at P&C carriers are facing the same barriers. The technology works, but the business processes, the data, and the operating model are not ready. When the RPA projects disappointed, the industry moved on to the next pitch: blockchain (remember B3i?), chatbots, big data. They never fixed the underlying problems.

Fast forward to today, almost all P&C carriers have started using AI, at least in some capacity. But only 10% managed to scale it beyond pilots.

<figure style="margin: 32px 0;">
<img src="/assets/images/Blog-RPA-Lessons-AI-Inline.jpg" alt="Dusty boxes labeled RPA, Blockchain, Chatbots, and Big Data on a cobwebbed shelf, with a shiny new box labeled AI on the floor" style="width: 100%; border-radius: 10px;" loading="lazy">
<figcaption style="font-size: 14px; color: #6B7B8D; text-align: center; margin-top: 10px; line-height: 1.5;">Too many promising technologies end up on the shelf.</figcaption>
</figure>

## The RPA parallel

Back then, RPA promised to automate repetitive workflows, reduce headcount and improve unit economics — quite similar to what the first wave of AI pilots promises.

And where the processes were well documented, and the rules were clear enough to codify, RPA did deliver. Productivity did improve, but well below what the business cases had projected.

We built use-case pipelines, set up a Center of Excellence, trained process owners. However, many workflows had developed organically and couldn't be broken apart into automatable steps. And when we did manage to code a bot, the underlying workflow changed a few months later and the automation broke. Making a real dent with RPA would have required rethinking the entire process, rather than layering a tool on top of existing processes.

Of course, AI is a much broader technology than RPA. It can handle judgment, not just automating processes. That makes this comparison even more uncomfortable. The organizational constraints that had slowed down RPA a decade ago are the same ones that are slowing down AI now.

## Legacy architecture and the budget wall

Monolithic core platforms are still the norm at many carriers. Policy admin, billing, claims, rating, tightly coupled. Even newer systems built in the last 10 years tend to repeat this pattern.

At a Datos Insights session last year, one carrier disclosed a core system implementation that has been running for 15 years. Fifteen.

Bolting a new AI model onto a platform that doesn't expose a modern API is difficult. I have seen what building interfaces into legacy systems looks like. That is where IT projects go to die.

Carriers spend 70% or more of their IT budgets on maintaining existing systems. From my experience, I'd say 80% is closer to the truth. The remaining 20–30% has to cover everything else: analytics, automation, customer experience, cybersecurity, compliance, and now AI. Typically, AI didn't come with a new budget. So, it is fighting for the same small slice of the budget.

And then, there is the data problem. Decades of point solutions, acquisitions, and product silos left policy, claims, and billing data sitting in separate systems, in different formats, and sometimes with different definitions for the same fields. A prerequisite for AI models is clean, unified data to train on. At most carriers, clean data just doesn't exist.

## Two talent crises

The talent crisis has two fronts: a lack of technical talent, and a retirement wave.

To say it bluntly: Insurance cannot compete on compensation with tech companies bidding for top engineers. But there is a deeper problem here. Back in the 2000s, many carriers aggressively outsourced their IT functions offshore to cut costs. An unintended side-effect: internal capabilities got hollowed out. The projects that remained onshore were less attractive and didn't attract the engineers eager to build new systems or solve hard engineering problems.

The second crisis is the retirement wave. Nearly a quarter of the insurance workforce is 55 or older. When experienced underwriters and claims managers leave, their institutional knowledge tends to go with them. Those are the people who could validate whether an AI model makes reasonable underwriting or claims decisions.

The technical talent was never built, and the domain expertise is walking out the door.

## Pilot purgatory

I have seen this sequence multiple times: A vendor pitches a technology (RPA then, AI now), demonstrates the tool in a sandbox environment, and the tool delivers. Then the issues start piling up: the integration with legacy systems, messy, conflicting data, the project sponsor moved on to another role, the budget approval got delayed. The pilot sits on a shelf, and nobody owns it. I'd guess most carriers have a drawer full of these.

In April, Travelers announced that their "let a thousand flowers bloom" approach had fallen out of favor; instead, the carrier is now concentrating its AI efforts on fewer, higher-investment bets. That is the closest a major carrier has come to publicly admitting that pilot proliferation didn't work.

The resistance runs deeper than just project management. Underwriters are trained to document and defend their decisions. AI recommendations arrive without a reasoning trail. Therefore, most tools today are positioned as decision support: the underwriter remains in charge of the final call. The moment the roadmap hints at replacement, the quiet sabotage starts.

And then there was fear. At Chubb, employees saw the RPA bots as a threat to their jobs and quietly resisted sharing information. The rollout became a tug of war with a workforce that had every incentive to protect its institutional knowledge. I understand the incentive. Nobody documents themselves out of a job.

AI is hitting the same resistance, except the technology is much more capable, and the fear runs deeper. This time, the judgment roles feel exposed too.

## Outsourcing the judgment

Allianz partnered with Anthropic in January to deploy AI across the entire organization. Travelers gave nearly 10,000 engineers and analysts access to AI tools. Most smaller carriers cannot invest at that scale and will depend on vendors for the capability.

That dependency has a cost. Palantir's CEO Alex Karp argued in a recent white paper that enterprises using frontier AI models are ceding decision-making control to the AI labs. Applied to insurance: an underwriter's judgment about which risks to write and at what price is what makes a carrier valuable. If that judgment lives inside a vendor's model rather than inside the carrier's systems and people, then the carrier would become just a balance sheet with a brand.

<div style="border-left: 4px solid #00D4AA; padding: 24px 28px; background: rgba(0, 212, 170, 0.06); border-radius: 0 8px 8px 0; margin: 40px 0;">
<div style="font-size: 20px; font-weight: 400; line-height: 1.5; color: #0A2540;">Legacy architecture, fragmented data, shallow technical capacity, and a culture built around human judgment are structural issues the insurance industry has been deferring for twenty years. Until carriers address them properly, every new technology wave will land the same way: compelling demonstrations, scattered pilots, and far less transformation than the pitch decks promised.</div>
</div>
