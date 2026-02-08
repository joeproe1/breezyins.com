---
layout: post
title: "Insurance for MSPs: 5 Coverage Gaps"
description: "The 5 most common coverage gaps in MSP insurance policies. Real scenarios showing where Tech E&O and cyber liability fail."
date: 2025-12-29
author: Joerg Proeve
category: Coverage Gaps
read_time: "8 min read"
permalink: /insights/msp-coverage-gaps/
redirect_from:
  - /insurance-cybersecurity-consultants-coverage-gaps
  - /insurance-cybersecurity-consultants-coverage-gaps/
---

**Tech E&O insurance for MSPs** is fundamentally broken. You wouldn't let a client run their network without a firewall. You wouldn't skip penetration testing before a major launch. So why are you trusting your insurance broker when they say you're "fully covered"?

Whether you're an MSP in Texas, a pentesting firm in New York, or an MSSP in California, these gaps exist in your policies right now.

As an [insurance specialist who's spent 20+ years](/about/) reviewing policies for MSPs across the United States, I've seen the same coverage gaps destroy businesses from Pennsylvania to Florida. **In my [previous article](/insights/msp-insurance/), I explained WHY MSPs have fundamentally different insurance needs.** You're not just using technology, you're the guardian of it for your clients.

Now let me show you the SPECIFIC gaps I find in every [Risk Intelligence Report](/contact/) I conduct. These aren't theoretical risks, these are the exact policy exclusions, sublimits, and compliance failures that turn a "fully covered" business into a bankruptcy case when the wrong claim hits.

---

## Gap #1: Tech E&O for Penetration Testing, The IT Help Desk Problem

Your Technology E&O policy was written for companies that *use* technology, not companies that *secure* it.

Look at your policy's definition of "professional services." I will bet it says: "IT consulting, software implementation, network administration, and technical support."

Notice what's missing? Security assessments. Penetration testing. Vulnerability scanning. Red team exercises.

### The Real-World Scenario:

You perform a penetration test for a healthcare client and give them a clean report. Three months later, they suffer a breach through an API endpoint you didn't test (because it wasn't in scope). The client sues you for $600,000 in HIPAA fines and notification costs.

Your Tech E&O carrier denies the claim: *"Penetration testing is not a covered professional service under this policy."*

> **What to Look For:** Your policy needs to explicitly list penetration testing, vulnerability assessments, security audits, red team exercises, and security architecture review.

### The Fix:

Specialized cyber insurance carriers write policies specifically for MSPs with "professional services" definitions built for what you actually do. Ask your broker which carriers in their network offer this coverage.

---

## Gap #2: Cyber Liability for MSPs, Your Policy Stops at Your Front Door

You're a service provider with administrative access to dozens, maybe hundreds, of client networks. When something goes wrong, you don't just have *your* problem to deal with.

Let's say you manage security for 30 clients. A threat actor compromises your remote access credentials and deploys ransomware across 15 of those client networks. Your clients sue you, all 15 of them, simultaneously.

Your Cyber Liability policy? It covers breaches of *your* network. Not breaches of *client* networks caused by your oversight.

### The Exposure:

- Average cost per client for a ransomware incident: $200K-$500K
- If 15 clients are hit: $3M-$7.5M in total exposure
- Your standard $1M cyber policy: Exhausted after covering 2-3 clients

> **What to Look For:** You need explicit coverage for "technology service provider liability" or "managed security service provider liability" that addresses breaches at client locations caused by your services and aggregated limits sufficient to cover simultaneous claims.

---

## Gap #3: The Intentional Acts Exclusion, Your Policy Excludes Your Most Dangerous Work

Your Tech E&O policy likely has an "intentional acts" exclusion. Sounds reasonable, right?

But here's what many carriers consider an "intentional act": **penetration testing, red team exercises, and authorized vulnerability exploitation.**

### The Real-World Scenario:

You're conducting a red team exercise for a manufacturing client. During the engagement, you accidentally trigger a failsafe that shuts down a production line for 6 hours. Loss to client: $340,000.

Your Tech E&O carrier denies the claim: *"The policy excludes claims arising from intentional unauthorized access to computer systems, even if authorized by contract."*

> **What to Look For:** Your policy needs explicit language covering "penetration testing, vulnerability assessments, red team exercises, and authorized security testing services" with a carve-back from the intentional acts exclusion.

### The Fix:

When you get quotes, ask specifically: "If we accidentally cause damage during an authorized penetration test or red team exercise, is that covered, or is it excluded as an intentional act?" Make them put it in writing.

---

## Gap #4: MSA Compliance, Your Policy Limits Violate Your Client Contracts

Your Master Service Agreement with enterprise clients requires:

- Professional Liability: $2,000,000 per occurrence
- Cyber Liability: $2,000,000 per occurrence
- Deductible not to exceed $10,000 per claim

Your actual policies:

- Tech E&O: $1,000,000
- Cyber: $1,000,000
- Deductible: $25,000

**You are in material breach of contract** before you even start work.

### Why This Matters:

If your client's legal team reviews your insurance certificate closely (and they will, especially if there's an incident), they can terminate the contract immediately, demand return of all fees paid, refuse to renew ($100K-$500K+ in lost annual revenue), or hold you personally liable for any uninsured losses.

### The Critical Mistakes:

**Scenario 1:** Your MSA requires "$2M Cyber Liability, $2M Professional Liability" but your broker sold you "$2M Professional Liability" and told you it covers both. Wrong. Enterprise clients increasingly require separate, dedicated Cyber Liability limits.

**Scenario 2:** Your MSA requires "$2M per occurrence" but your policy provides "$1M per occurrence / $2M aggregate." You think you're compliant because you see "$2M" on your declarations page. You're not.

> **What to Do:** Review every MSA you've signed in the past 2 years. Extract the insurance requirements and compare them line-by-line to your actual policies. If there are gaps, increase your limits or you're operating in breach of contract.

---

## Gap #5: Security Warranties, Your Policy Requires Controls You Don't Have

Modern cyber insurance policies require you to maintain specific security controls as a **condition of coverage**. If you don't have these controls in place when a breach occurs, your entire claim can be denied.

The most common warranty: **Multi-Factor Authentication (MFA)**

### The Real-World Scenario:

You're an MSSP managing security for 20 clients. A threat actor compromises one of your engineer's credentials because that engineer hadn't enabled MFA on VPN access, it was on your to-do list but not yet enforced company-wide.

The attacker uses those credentials to access 8 client networks and deploys ransomware. Total damages: $2.4M across 8 clients.

Your cyber carrier investigates and discovers: "MFA was not enforced on VPN access at the time of the breach."

**Claim denied. All $2.4M.**

Carriers now make MFA a **warranty**, meaning it's a condition of coverage, not just a recommendation. If you don't have it deployed everywhere the policy requires, you don't have coverage.

> **What to Look For:** Read your cyber policy's "Conditions," "Warranties," or "Security Requirements" sections. Look for requirements on:
>
> - MFA (and exactly which systems must have it)
> - Backup requirements (frequency, offline storage, testing)
> - Patch management (timelines for critical updates)
> - Endpoint detection (EDR/XDR on all devices)
>
> Then audit your actual security controls against these requirements. **If you don't meet the warranty requirements and you have a breach, your claim will be denied, regardless of whether the missing control caused the breach.**

---

## What Actually Fixes This?

These gaps exist because your broker doesn't understand the difference between an MSP and a generic "technology company." They don't know that your Tech E&O policy needs to cover offensive security work, that you hold admin credentials for dozens of client networks, or that "intentional acts" exclusions can deny coverage for authorized penetration testing.

I will be blunt: you need to either educate your current broker or find a new one.

### Five Questions to Ask Your Broker:

1. "Does my Tech E&O policy explicitly cover penetration testing and security assessments?"
2. "If one of my clients is breached because of my oversight, and they sue me, is that covered?"
3. "Does my Tech E&O policy cover claims arising from authorized penetration testing, or could these be excluded as 'intentional acts'?"
4. "I have client contracts that require $2M Cyber and $2M E&O separately. Does my current policy comply?"
5. "What security warranties does my cyber policy require, and what happens if I don't meet them when a breach occurs?"

If they can't answer these questions clearly and confidently, you need a new broker.

<div class="callout callout-green">
<p><strong>This article covered 5 gaps. Our <a href="/contact/">Risk Intelligence Report</a> checks for over 60 common gaps across Cyber, Tech E&O, Contract Compliance, Workers Compensation, Crime, General Liability, and Media Liability.</strong></p>
</div>

---

## The Bottom Line

You secure your clients' networks by finding vulnerabilities before attackers do. Your insurance should work the same way: find the gaps before a claim exposes them.

Most MSPs won't discover these five gaps until it's too late, until a client sues, a Tech E&O carrier denies coverage, or an MSA audit reveals they've been in breach of contract for two years.

**Don't let that be you.**
