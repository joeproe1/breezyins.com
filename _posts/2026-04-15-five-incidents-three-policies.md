---
layout: post
title: "Five Common Cyber Incidents, Three Policies, and the Gaps Between Them"
card_title: "Five Incidents, Three Policies, and the Gaps Between Them"
description: "Most community banks carry cyber, fidelity bond, and D&O policies from different carriers. Here is how those policies respond when five common cyber incidents hit, and where coverage falls apart."
date: 2026-04-15
author: Joerg Proeve
category: Community Banks
read_time: "4 min read"
image: /assets/images/Blog-Policy-Interaction-Map.png
permalink: /insights/five-incidents-three-policies/
---

Most community banks carry three policies that touch cyber risk: a cyber policy, a fidelity bond, and a directors and officers (D&O) policy. Often these come from two or even three different carriers. Each one was underwritten separately. Nobody reads them together.

That is the problem. When a cyber incident hits, it does not stay inside the boundaries of one policy. A ransomware attack triggers the cyber policy, but the ransom payment may hit the fidelity bond's computer fraud clause, and the board's response lands on the D&O. Three carriers, three claims processes, three sets of exclusions. Each carrier points the finger at the other two.

The policy interaction map below shows how this plays out, row by row.

<p style="font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#64748b;margin:24px 0 8px 0;">Policy Interaction Map</p>
<div style="position:relative;margin:0 0 8px;">
<div style="position:absolute;top:52px;right:16px;background:#00D4AA;color:rgba(255,255,255,.85);padding:6px 12px;border-radius:999px;font-size:12px;font-weight:800;letter-spacing:.08em;z-index:1;">SAMPLE</div>
<img src="{{ '/assets/images/Policy-Interaction-Map.png' | relative_url }}" alt="Policy Interaction Map: five incidents mapped against cyber, fidelity bond, and D&O policies showing coverage gaps" style="width:100%;border-radius:10px;border:1px solid #e2e8f0;display:block;" loading="lazy">
</div>

## Row by Row: How Policies Respond to Cyber Incidents

### Wire Fraud

Wire transfer fraud may be the most common and most expensive cyber-related loss at community banks. However, the cyber policy often excludes it unless social engineering coverage was purchased as an add-on, or sublimits it well below the policy's headline limit. The fidelity bond often covers wire fraud, but with strict conditions: a co-payment, a sublimit, or a verification step the bank may not have documented. The D&O does not respond directly. The result: the bank's largest realistic loss is often the one with the weakest coverage. I wrote a [detailed walkthrough of how this plays out]({{ '/insights/the-wire-nobody-covers/' | relative_url }}) in a separate post.

### Ransomware

Most cyber policies cover this. That is the straightforward one. The fidelity bond may also respond, but typically with a sublimit on the extortion or computer fraud clause. The real question is whether the ransom payment and the business interruption loss both fall under the cyber limit, or whether the bond picks up part of it. If nobody has mapped this in advance, the bank finds out during the claim.

### Vendor Outage

When a critical vendor (e.g. FIS, Fiserv, Jack Henry) goes down and the bank cannot operate, the cyber policy may cover the business interruption, but only if the vendor qualifies under the policy's definition. Many cyber policies limit dependent business interruption to IT vendors and exclude non-IT service providers. The fidelity bond does not cover this. The D&O does not cover this. If the bank's core processor or cloud provider is not listed, the loss is uninsured.

### Data Breach and Regulatory Investigation

A data breach triggers the cyber policy for breach response costs: forensics, notification, credit monitoring. That part usually works. The gap shows up on the regulatory side. When state regulators or the OCC opens an investigation, defense costs can run into six figures. The cyber policy may cover some of it, but investigation defense often falls under the D&O. If the D&O carries a cyber exclusion, which many do, the bank has no coverage for the investigation that follows the breach. Two policies, and neither one covers the regulatory response cleanly.

### Board Liability After a Breach

After a significant cyber event, the question shifts from "what happened" to "who is responsible." Shareholder derivative claims, regulatory enforcement actions, and examiner scrutiny all land on the board. The cyber policy does not cover board liability. The D&O should, but many D&O policies now carry broad cyber exclusions that carve out any claim "arising from" a data breach or cyber event. If the D&O excludes cyber-related claims, the board has no coverage for the fallout from the very incident the cyber policy was supposed to handle.

## What the Map Tells You

Look at the policy interaction map as a whole. The rows with the most red are the ones where coverage breaks down: wire transfer fraud, regulatory investigations, board liability after a breach. These are not outliers. They are the incidents that land on a community bank CFO's desk.

Most banks that carry all three policies assume they are covered. But nobody has read the policies together and asked: for this specific incident, which carrier pays? Until someone does that work, each carrier has a reason to say no, and the bank holds the loss. For a closer look at how each of these failures plays out, see [six ways coverage fails at claim time]({{ '/coverage-gaps/' | relative_url }}).

This is the analysis at the center of every [Risk Intelligence Report]({{ '/risk-intelligence-report/' | relative_url }}). I read your specific policies, map them against these scenarios with your actual limits and exclusions, and show you where the seams are before a claim finds them.

If your bank has not had someone do this work, [get in touch]({{ '/contact/' | relative_url }}).
