---
layout: post
title: "Cyber Liability vs. Tech E&O for MSPs: What Each Covers and Where Claims Fall Through"
description: "MSPs need both cyber liability and Tech E&O. But the handoff between them is where most coverage failures happen. Here's how to close the gap."
date: 2026-02-19
author: Joerg Proeve
category: Policy Deep-Dive
read_time: "7 min read"
image: /assets/images/Blog-Cyber-vs-EO.png
permalink: /insights/cyber-liability-vs-tech-eo-for-msps/
redirect_from:
  - /cyber-vs-eo
  - /cyber-vs-eo/
---

You carry both cyber liability and Tech E&O insurance. Your broker told you that's what you need, and your broker was right. But here's the question nobody asks until a claim gets denied: do these two policies provide the protection I need?

I review insurance policies for managed service providers (MSPs) every week, and the single most common coverage failure I see isn't a missing policy. It's that two policies are not aligned and refuse to talk to each other.

When a claim hits, the cyber carrier says: this claim belongs to E&O. The E&O carrier says: no, it's a cyber event. Both carriers are technically correct in their interpretation of their insurance policies. And the MSP pays the bill.

This post explains what cyber liability and Tech E&O insurance cover, and where the boundaries between these two policies are. If you're an MSP who manages client networks for a living, this is the most important thing to understand about your insurance.

## What Each Policy Is Designed to Cover

Before we go into the details, here's a breakdown of what each of the two policies is designed to do. (For the full deep dive on each, see my posts on [cyber liability]({{ '/insights/cyber-liability-insurance-for-msps/' | relative_url }}) and [Tech E&O exclusions]({{ '/insights/your-tech-eo-policy-probably-excludes-the-services-you-actually-provide/' | relative_url }}).)

**Cyber Liability** protects you against security events, such as data breaches and ransomware attacks. It covers costs for breach response, business interruption, extortion payments, and lawsuits from parties affected by the breach. A cyber liability policy is built around the question: *what happened to your systems?*

**Tech E&O** (or long: Technology Errors & Omissions) protects you against professional service failures. You gave bad advice, a cloud migration went wrong, your monitoring missed something critical, and your client suffered financial harm. A Tech E&O policy is built around the question: *what did you do (or fail to do) for a client?*

For a typical business, these two policies cover distinct risks with clean boundaries. However, for a managed service provider, these boundaries break down. Because your professional service IS managing technology. Your "error" IS a security failure. For an MSP, your work and your network are the same thing.

## The Three Zones

Here's how coverage works for an MSP. Every claim you could face falls into one of three zones.

<div style="margin: 40px -24px; font-family: 'DM Sans', sans-serif; overflow-x: auto; -webkit-overflow-scrolling: touch;">
<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; min-height: 420px; min-width: 780px;">

<div style="background: #0A2540; border-radius: 12px 0 0 12px; padding: 28px 24px; display: flex; flex-direction: column;">
<div style="font-family: 'JetBrains Mono', monospace; font-size: 18px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #00D4AA; margin-bottom: 10px;">Cyber Liability</div>
<div style="font-size: 15px; font-weight: 500; color: rgba(255,255,255,0.7); margin-bottom: 18px;">A security event hits your systems</div>
<div style="display: flex; flex-direction: column; gap: 8px; flex: 1;">
<div style="background: rgba(0,212,170,0.1); border-radius: 6px; padding: 10px 14px; font-size: 13px; color: rgba(255,255,255,0.8);">Breach response and forensics</div>
<div style="background: rgba(0,212,170,0.1); border-radius: 6px; padding: 10px 14px; font-size: 13px; color: rgba(255,255,255,0.8);">Ransomware and extortion</div>
<div style="background: rgba(0,212,170,0.1); border-radius: 6px; padding: 10px 14px; font-size: 13px; color: rgba(255,255,255,0.8);">Business interruption</div>
<div style="background: rgba(0,212,170,0.1); border-radius: 6px; padding: 10px 14px; font-size: 13px; color: rgba(255,255,255,0.8);">Privacy and regulatory defense</div>
</div>
</div>

<div style="background: #7C2D12; padding: 28px 24px; border-top: 4px solid #F59E0B; border-bottom: 4px solid #F59E0B; display: flex; flex-direction: column;">
<div style="font-family: 'JetBrains Mono', monospace; font-size: 18px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #F59E0B; margin-bottom: 10px;">The Danger Zone</div>
<div style="font-size: 15px; font-weight: 500; color: rgba(255,255,255,0.7); margin-bottom: 18px;">Your professional work causes a security event</div>
<div style="display: flex; flex-direction: column; gap: 8px; flex: 1;">
<div style="background: rgba(245,158,11,0.15); border-radius: 6px; padding: 10px 14px; font-size: 13px; color: rgba(255,255,255,0.85);">Unpatched RMM tool leads to client ransomware</div>
<div style="background: rgba(245,158,11,0.15); border-radius: 6px; padding: 10px 14px; font-size: 13px; color: rgba(255,255,255,0.85);">Misconfigured firewall allows data exfiltration</div>
<div style="background: rgba(245,158,11,0.15); border-radius: 6px; padding: 10px 14px; font-size: 13px; color: rgba(255,255,255,0.85);">Vulnerability scan crashes production systems</div>
</div>
<div style="margin-top: 18px; background: #F59E0B; border-radius: 8px; padding: 16px 18px; font-size: 16px; font-weight: 600; color: #0A2540; line-height: 1.6; text-align: center;">Cyber says "it's an E&O claim."<br>E&O says "it's a cyber claim."<br><strong>Neither pays.</strong></div>
</div>

<div style="background: #0A2540; border-radius: 0 12px 12px 0; padding: 28px 24px; display: flex; flex-direction: column;">
<div style="font-family: 'JetBrains Mono', monospace; font-size: 18px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #3B82F6; margin-bottom: 10px;">Tech E&O</div>
<div style="font-size: 15px; font-weight: 500; color: rgba(255,255,255,0.7); margin-bottom: 18px;">Your professional service causes a client financial loss</div>
<div style="display: flex; flex-direction: column; gap: 8px; flex: 1;">
<div style="background: rgba(59,130,246,0.12); border-radius: 6px; padding: 10px 14px; font-size: 13px; color: rgba(255,255,255,0.8);">Bad security recommendation</div>
<div style="background: rgba(59,130,246,0.12); border-radius: 6px; padding: 10px 14px; font-size: 13px; color: rgba(255,255,255,0.8);">Failed system implementation</div>
<div style="background: rgba(59,130,246,0.12); border-radius: 6px; padding: 10px 14px; font-size: 13px; color: rgba(255,255,255,0.8);">Missed SLA or project deadline</div>
<div style="background: rgba(59,130,246,0.12); border-radius: 6px; padding: 10px 14px; font-size: 13px; color: rgba(255,255,255,0.8);">Scope dispute or delivery failure</div>
</div>
</div>

</div>
<div style="text-align: center; margin-top: 6px; font-size: 12px; color: #999; font-style: italic;">On mobile, scroll horizontally to see all three zones.</div>
</div>

The left and right zones are where your policies work as intended. A pure cyber event triggers cyber liability. A pure professional failure triggers Tech E&O. Straightforward.

MSPs live in the orange middle zone, in the Danger Zone. And that's where coverage often breaks down.

## Why the Danger Zone Exists

The danger zone isn't a bug in insurance. It's a **structural problem** with how policies are written.

Your cyber liability policy contains a "professional services" exclusion:

> *If the claim arises from your professional services, advice, or technology work product, it doesn't belong here. Go file it under E&O.*

Your Tech E&O policy contains a "cyber event" exclusion:

> *If the claim involves a network security failure, unauthorized access, or data breach, it doesn't belong here. Go file it under cyber.*

When a claim involves both policies, like most MSP claims do, you're caught between two policies that each say the other one should pay. This is what I call the [Front Door Problem]({{ '/coverage-gaps/liability-boundary/' | relative_url }}).

### How this plays out in practice

<div style="display: flex; flex-direction: column; gap: 24px; margin: 24px 0;">

<div style="border-left: 3px solid #F59E0B; padding: 16px 20px; background: rgba(245,158,11,0.05); border-radius: 0 8px 8px 0;">
<strong>Scenario 1: The unpatched RMM.</strong><br>You manage 30 client networks through a remote monitoring tool.<br><br>A critical patch doesn't get applied for two weeks. An attacker exploits the vulnerability and deploys ransomware across most of your client environments.<br><br>
Cyber carrier: <em>"Failure to maintain your professional tools. That's E&O."</em><br>
E&O carrier: <em>"Damage caused by a cyberattack. That's cyber."</em><br>
Both are technically right. You're stuck.
</div>

<div style="border-left: 3px solid #F59E0B; padding: 16px 20px; background: rgba(245,158,11,0.05); border-radius: 0 8px 8px 0;">
<strong>Scenario 2: The firewall misconfiguration.</strong><br>Your team sets up a firewall for a healthcare client. A rule gets misconfigured, leaving a port exposed. Three months later, an attacker exfiltrates patient records through that port.<br><br>
E&O claim? Professional error. Cyber claim? Unauthorized access and data breach. The answer is both, and that's the problem.
</div>

<div style="border-left: 3px solid #F59E0B; padding: 16px 20px; background: rgba(245,158,11,0.05); border-radius: 0 8px 8px 0;">
<strong>Scenario 3: The vulnerability scan gone wrong.</strong><br>You run a vulnerability assessment for a client. The scan triggers an unexpected cascade that takes down their production database for 24 hours.<br><br>
No attacker involved. No breach. But the client lost revenue. Your cyber policy says no security event. Your E&O policy says the scan is a "cyber-related activity." Neither wants it.
</div>

</div>

## How You Can Close the Gap

There are two ways to fix this, in order of effectiveness.

**Option 1: Combined policy from one carrier.**<br>Several carriers now write combined Tech E&O + Cyber policies designed specifically for technology companies and MSPs. When both coverages live in the same policy, there's no finger-pointing. The carrier can't argue with itself about which coverage applies. This is the cleanest fix.

**Option 2: Coordinated policies with explicit overlap language.**<br>If you carry separate cyber and E&O policies, make sure both policies explicitly address the overlap. Look for language like "failure to render professional services resulting in a network security event" in your cyber policy, and make sure your E&O doesn't blanket-exclude "cyber events." The two policies need to acknowledge that MSP claims will straddle both, and define who responds when they do.

What doesn't work: carrying separate policies from different carriers and hoping it sorts itself out at claim time. It won't.

## Three Things to Check Right Now

<div style="display: flex; flex-direction: column; gap: 20px; margin: 24px 0;">

<div style="display: flex; gap: 16px; align-items: flex-start;">
<div style="min-width: 44px; height: 44px; background: #00D4AA; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-family: 'JetBrains Mono', monospace; font-size: 20px; font-weight: 700; color: #0A2540; flex-shrink: 0;">1</div>
<div><strong>Are your cyber and Tech E&O with the same carrier?</strong> If yes, check whether they're written as a combined form or as separate policies that happen to be issued by the same company. Combined forms are stronger. Separate policies from the same carrier can still have coordination gaps.</div>
</div>

<div style="display: flex; gap: 16px; align-items: flex-start;">
<div style="min-width: 44px; height: 44px; background: #00D4AA; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-family: 'JetBrains Mono', monospace; font-size: 20px; font-weight: 700; color: #0A2540; flex-shrink: 0;">2</div>
<div><strong>Read the exclusions in both policies.</strong> In your cyber policy, search for "professional services," "technology services," or "failure to render." In your E&O policy, search for "cyber," "network security," "unauthorized access," or "data breach." If each policy excludes what the other one covers, you have the danger zone problem.</div>
</div>

<div style="display: flex; gap: 16px; align-items: flex-start;">
<div style="min-width: 44px; height: 44px; background: #00D4AA; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-family: 'JetBrains Mono', monospace; font-size: 20px; font-weight: 700; color: #0A2540; flex-shrink: 0;">3</div>
<div><strong>Ask your broker this question.</strong> "If my team misconfigures a client firewall and an attacker exploits that misconfiguration to steal data, which policy responds?" If your broker can't answer that in one sentence, your policies probably have a coordination gap.</div>
</div>

</div>

My [Risk Intelligence Report]({{ '/risk-intelligence-report/' | relative_url }}) reviews your policies in detail, maps the exclusions, and flags exactly where the coverage gaps are.

If you have questions about your insurance, [get in touch]({{ '/contact/' | relative_url }}).
