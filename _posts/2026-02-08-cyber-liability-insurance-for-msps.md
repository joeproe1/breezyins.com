---
layout: post
title: "Cyber Liability Insurance for MSPs: What It Covers, What It Doesn't, and What to Check"
description: "Most MSPs have a cyber liability policy. Few understand what it actually covers. Here's what cyber insurance does, where it stops, and 5 things to check right now."
date: 2026-02-08
author: Joerg Proeve
category: Coverage Gaps
read_time: "8 min read"
image: /assets/images/Blog-Cyber-Liability-MSP.png
permalink: /insights/cyber-liability-insurance-for-msps/
redirect_from:
  - /cyber-liability-msp
  - /cyber-liability-msp/
---

You have a cyber liability policy. You pay the premium every year. Your broker tells you it covers "cyber incidents."

But what does that mean in practice?

I review cyber policies for MSPs across the country, and the most common reaction I get is some version of: "Wait, that's not covered?" The problem isn't that MSPs buy bad policies. It's that cyber liability insurance was originally designed for companies that store data, not companies that manage other people's networks, hold admin credentials, and deploy security tools across dozens of client environments. Your risk profile is different from a retailer's or a law firm's. Your cyber policy should reflect that. Here's how to tell if it does.

## What Cyber Liability Insurance Actually Covers

A "standard" cyber liability policy, and I use that word loosely, because no two carriers write these the same way, has two sides: first-party coverage (your own losses) and third-party coverage (when someone sues you). Most policies bundle several components under these two categories.

**First-party coverage typically includes:**

- **Breach response costs:** Forensic investigation, legal counsel, notification to affected individuals, and credit monitoring for those individuals. When your systems are compromised, these are the immediate costs to figure out what happened and meet your legal obligations. Even for a small breach affecting a few hundred records, these costs routinely exceed $200K.
- **Business interruption:** Lost income and extra expenses while your systems are down due to a cyber event. This kicks in after a waiting period (usually 8 hours) and pays for revenue you lost while you couldn't operate.
- **Cyber extortion/ransomware:** Costs associated with a ransom demand, including the ransom payment itself, negotiation expenses, and forensic support. This is where sub-limits become a problem, but more on that below.
- **Data restoration:** The cost to recover or recreate data that was destroyed or corrupted during an attack.

**Third-party coverage typically includes:**

- **Network security liability:** Defense costs and settlements when a third party sues you because a security failure on your network caused them harm. For MSPs, this is the coverage that should respond when a client sues because your systems were the entry point.
- **Privacy liability:** Claims arising from failure to protect personal information. If client data is exposed through your environment, this is the coverage that responds.
- **Regulatory proceedings:** Defense costs (and sometimes fines, depending on the policy) when a regulatory body investigates you after a breach.
- **Media liability:** Claims from content you publish online, such as defamation or copyright infringement on your website. Less relevant for most MSPs, but it's usually bundled in.

That's the typical package. For a typical business, this coverage works reasonably well. For an MSP, it has some significant blind spots.

And the pressure is increasing. Ransomware is now a factor in the majority of cyber insurance claims. AI-powered attacks, particularly deepfake voice and email impersonation, are making social engineering harder to detect and more expensive to recover from. Carriers are tightening policy language in response. MSPs need to read that language carefully.

## Where Cyber Liability Falls Short for MSPs

Here's where things get complicated. Your cyber policy was designed to protect a company that operates its own network and stores its own data. As an MSP, you operate dozens of networks and manage data for all of your clients. That creates gaps that a standard cyber policy doesn't address.

### Your policy probably covers your network, not your clients' networks

This is the single biggest misconception I encounter. Most MSPs assume that if a breach originates from their systems and spreads to client networks, the cyber policy covers the whole thing. Often, it doesn't.

Cyber liability responds to breaches of YOUR network. When your compromised RMM tool becomes the entry point for ransomware across 15 client environments, the resulting client lawsuits may fall into a gap between your cyber policy and your [Tech E&O policy]({{ '/insights/your-tech-eo-policy-probably-excludes-the-services-you-actually-provide/' | relative_url }}). Your cyber carrier says it's a "professional services error." Your E&O carrier says it's a "cyber event." Both point at the other.

> **What to look for:** Does your policy include "technology services provider liability" or "managed services liability" language that explicitly covers claims from client network incidents caused through your systems? Some carriers now write cyber policies specifically designed for managed service providers, with this language built in. If yours doesn't have it, ask your broker which markets do.

### Ransomware sub-limits may be a fraction of your actual exposure

Your policy says "$2M cyber liability" on the declarations page. But buried in the endorsements or coverage extensions, ransomware may be capped at a sub-limit of $250K or $500K.

Ransomware demands now often exceed $1M. Post-negotiation payouts average around $400K. And that's just the ransom itself, not the forensics, legal costs, business interruption, and client notification that come with it.

> **What to look for:** Check your declarations page and any endorsements for "ransomware," "extortion," or "cyber extortion" sub-limits. Compare that number to your total policy limit. If the sub-limit is less than half your aggregate limit, you may have a problem.

### Security warranties can void your entire claim

Modern cyber policies increasingly include security requirements as conditions of coverage. These aren't recommendations. They're warranties. If you don't meet them when a breach occurs, the claim can be denied regardless of whether the missing control caused the breach.

The most common warranty: multi-factor authentication (MFA) on all remote access points. But policies are expanding these requirements to include patch management timelines, backup testing schedules, endpoint detection, and VPN security controls.

An MSP managing 20 client networks has a breach because one engineer's VPN credentials were compromised. MFA wasn't enforced on that VPN connection. The carrier investigates, discovers the gap, and denies the entire claim. Not because MFA would have prevented the breach. No, because MFA was a condition of coverage and it wasn't in place. That simple.

> **What to look for:** Read the "Conditions," "Warranties," or "Security Requirements" section of your policy. List every control that's required. Then audit your environment against that list. One gap can void everything.

### Business interruption triggers may be too narrow

Your systems go down for 18 hours because of a configuration error during a routine update. No attacker, no malware, just a good old human mistake. Happens. You lose a day and a half of revenue.

Many cyber policies only trigger business interruption coverage for a "network security failure," meaning an actual attack or unauthorized access. A configuration error, a failed update, or a cloud provider outage doesn't qualify.

The difference matters. Roughly 80% of outages are operational errors, not attacks. If your business interruption trigger only covers attacks, you're uninsured for the majority of downtime scenarios.

> **What to look for:** Does your business interruption trigger require a "security failure" (narrow) or cover any "system failure" (broader)? The wording difference is small. The coverage difference is significant.

### The waiting period penalizes good security practices

Here's an irony: if you're good at incident response, your cyber policy may pay you less.

Most policies have a waiting period (typically 8 hours) before business interruption coverage kicks in. If your team restores operations in 6 hours because you have solid backups and a tested IR plan, you get nothing for those 6 hours. You only get paid starting at hour 8.

This creates a perverse incentive. The better your security posture and response capability, the less your policy pays.

> **What to look for:** What's your business interruption waiting period? For MSPs with strong backup and recovery capabilities, ask your broker about aggregate deductibles (a dollar amount instead of a time threshold) as an alternative.

## Where Cyber Liability Ends and Tech E&O Begins

Because of these gaps, MSPs need both cyber liability and Tech E&O, and the handoff between them is where most coverage failures happen. Here's a simplified way to think about it:

**Cyber Liability** responds when: A security event occurs (breach, ransomware, data exposure) and causes direct damage or triggers a lawsuit.

**Tech E&O** responds when: Your professional services (consulting, implementation, security assessments) result in an error, omission, or failure that causes a client financial harm.

**The gap:** When a cyber event IS the result of a professional services failure. Your RMM tool is compromised because you didn't patch it on schedule, and ransomware spreads to client networks. Is that a cyber event? Or a professional services error? The answer is both, and that's exactly where carriers argue over who pays.

This is why your cyber and [Tech E&O policies]({{ '/insights/your-tech-eo-policy-probably-excludes-the-services-you-actually-provide/' | relative_url }}) need to be coordinated. Ideally, they should be with the same carrier or explicitly designed to work together, with clear language about which policy responds in overlapping scenarios. If they're with different carriers and neither policy addresses the overlap, you're relying on two companies to agree on who pays. In my experience, that agreement doesn't come quickly or cheaply. Not all carrier programs are equal here. Some have built coordinated cyber + E&O packages specifically for MSPs, with clear language about how the two policies interact.

## 5 Things to Check in Your Cyber Policy Right Now

Pull out your cyber policy and try these five checks. They take about 30 minutes. If you get through all five, you'll know more about your coverage than most MSPs ever will. And if you get stuck on the first one, that's normal. Cyber policies aren't written to be readable. That's where having someone who reads these for a living can help.

1. **Find your ransomware sub-limit.** Look at the declarations page and any endorsements for "extortion" or "ransomware" sub-limits. Is it less than $500K? Flag it.
2. **Read your security warranties.** Go to the Conditions or Warranties section. List every security control that's required as a condition of coverage. MFA, patching timelines, backup requirements, EDR. Now check whether you actually meet every single one.
3. **Check your business interruption trigger.** Find the Business Interruption section and look at what triggers coverage. "Security failure only" is a red flag for MSPs. "System failure" or "system outage" is better.
4. **Look for third-party/client coverage.** Search for "technology services provider liability," "managed services," or "third-party network" language. If your policy only covers breaches of your own network, you have a gap.
5. **Compare your sub-limits to your aggregate.** Look at sub-limits for ransomware, social engineering, breach response, and regulatory proceedings. If any of them are less than 25% of your aggregate limit, those are potential exposure points.

If any of these checks raises a question you can't answer, it's worth having a detailed conversation with your broker. Or if reading your own cyber policy sounds about as appealing as a root canal, that's exactly what I do. [Get in touch]({{ '/contact/' | relative_url }}).

## The Bottom Line

Cyber liability insurance isn't complicated once you understand the moving parts. But most MSPs never look under the hood. They see "$2M Cyber Liability" on their certificate of insurance and assume the hard part is done.

The hard part is making sure those dollars actually show up when you need them. That means understanding what triggers your coverage, what conditions can void it, where the sub-limits hide, and where your cyber policy hands off to your Tech E&O.

You don't need to become an insurance expert. But you do need to know enough to ask the right questions. The five checks above are a good start. If you want a more thorough review, that's what my [Risk Intelligence Report]({{ '/risk-intelligence-report/' | relative_url }}) is designed to do: compare your actual policies against your actual risk profile and flag the gaps before a claim exposes them.
