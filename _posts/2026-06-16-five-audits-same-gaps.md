---
layout: post
title: "Five Audits, Same Gaps"
description: "Five community banks. Different carriers. Different programs. The same five coverage failures. Aggregate findings with a bank-by-bank scorecard."
date: 2026-06-16
author: Joerg Proeve
category: Case Study
read_time: "4 min read"
image: /assets/images/Blog-Five-Audits-Same-Gaps.png
image_alt: "Five community bank insurance audits revealing similar coverage gaps across different carriers and program structures"
last_modified_at: 2026-08-03
permalink: /insights/five-audits-same-gaps/
faq:
  - question: "What are the most common insurance gaps at community banks?"
    answer: "Based on audits of five community banks and credit unions across different carriers and program structures, the most common gaps are: wire fraud conditions that can reduce recovery to zero, D&O cyber exclusions that shift the board's post-breach defense onto the cyber policy, vendor outage coverage that does not match vendor dependence, headline limits that overstate realistic recovery by 70 to 85 percent, and business interruption definitions that stop paying at the point an outage turns serious."
  - question: "Do headline insurance limits reflect what a bank will recover?"
    answer: "No. Across five banks, combined headline limits ranged from $12 million to $27 million. Realistic recovery on a multi-front cyber incident ranged from $500,000 to $3 million. The erosion comes from sublimits, defense costs inside the limit, co-payment clauses, D&O cyber exclusions, and coverage gaps between the three policies."
  - question: "Does cyber insurance cover a bank's interest income during an outage?"
    answer: "Most cyber policies exclude interest income from the business interruption definition. That matters less than it looks in a short outage, because a loan keeps accruing interest whether or not the servicing platform is up. What the bank actually loses is fee income, and most BI definitions cover that. The exclusion bites in an extended outage, where deposit runoff and non-accrual reversals turn interest income into a genuine loss, and that is the loss the exclusion bars. Two banks in this sample were on a flat BI rate of $500 per hour, which takes no account of what was lost. Only one carrier offered an endorsement that deletes the exclusion."
---

Over the past months, I audited the insurance policies at five community banks and credit unions. I read the policy forms, endorsements, and amendments across their cyber and D&O policies, and their fidelity bonds. Different carriers. Different program structures.

Each bank engaged Breezy Risk Advisors for a Risk Intelligence Report: a line-by-line review of its cyber liability policy, fidelity bond, and directors and officers policy, read together against the bank's operations, vendor contracts, and regulatory requirements. Not a checklist. Every finding comes from reading the policy forms themselves. Institutions and carriers are anonymized.

The coverage gaps across the banks were strikingly similar. Five structural problems appeared in every program. That pattern changes the conversation. One bank with a gap is a broker discussion. Five banks with five different programs and the same gaps is an industry problem.

## Scorecard

<div style="margin: 8px 0 36px;">
<div style="overflow-x: auto;">
<table style="width: 100%; border-collapse: collapse; font-size: 14px; margin: 0 !important;">
<thead>
<tr style="background: #0A2540; color: #fff;">
<th style="padding: 10px 12px; text-align: left; font-weight: 600; border: 1px solid #0A2540;">Finding</th>
<th style="padding: 10px 12px; text-align: left; font-weight: 600; border: 1px solid #0A2540;">Bank A</th>
<th style="padding: 10px 12px; text-align: left; font-weight: 600; border: 1px solid #0A2540;">Bank B</th>
<th style="padding: 10px 12px; text-align: left; font-weight: 600; border: 1px solid #0A2540;">Bank C</th>
<th style="padding: 10px 12px; text-align: left; font-weight: 600; border: 1px solid #0A2540;">Bank D</th>
<th style="padding: 10px 12px; text-align: left; font-weight: 600; border: 1px solid #0A2540;">Bank E</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 8px 12px; border: 1px solid #e2e8f0; font-weight: 500; color: #334155;">1. Wire fraud</td>
<td style="padding: 8px 12px; border: 1px solid #e2e8f0; background: #FEF2F2; color: #B91C1C; font-weight: 500; font-size: 13px;">Severe</td>
<td style="padding: 8px 12px; border: 1px solid #e2e8f0; background: #FEF3C7; color: #92400E; font-weight: 500; font-size: 13px;">Partial</td>
<td style="padding: 8px 12px; border: 1px solid #e2e8f0; background: #FEF2F2; color: #B91C1C; font-weight: 500; font-size: 13px;">Severe</td>
<td style="padding: 8px 12px; border: 1px solid #e2e8f0; background: #FEF3C7; color: #92400E; font-weight: 500; font-size: 13px;">Partial</td>
<td style="padding: 8px 12px; border: 1px solid #e2e8f0; background: #FEF2F2; color: #B91C1C; font-weight: 500; font-size: 13px;">Severe</td>
</tr>
<tr>
<td style="padding: 8px 12px; border: 1px solid #e2e8f0; font-weight: 500; color: #334155;">2. D&amp;O cyber exclusion</td>
<td style="padding: 8px 12px; border: 1px solid #e2e8f0; background: #FEF2F2; color: #B91C1C; font-weight: 500; font-size: 13px;">Severe</td>
<td style="padding: 8px 12px; border: 1px solid #e2e8f0; background: #FEF3C7; color: #92400E; font-weight: 500; font-size: 13px;">Partial</td>
<td style="padding: 8px 12px; border: 1px solid #e2e8f0; background: #FEF3C7; color: #92400E; font-weight: 500; font-size: 13px;">Partial</td>
<td style="padding: 8px 12px; border: 1px solid #e2e8f0; background: #FEF2F2; color: #B91C1C; font-weight: 500; font-size: 13px;">Severe</td>
<td style="padding: 8px 12px; border: 1px solid #e2e8f0; background: #FEF2F2; color: #B91C1C; font-weight: 500; font-size: 13px;">Severe</td>
</tr>
<tr>
<td style="padding: 8px 12px; border: 1px solid #e2e8f0; font-weight: 500; color: #334155;">3. Vendor BI sublimit</td>
<td style="padding: 8px 12px; border: 1px solid #e2e8f0; background: #FEF2F2; color: #B91C1C; font-weight: 500; font-size: 13px;">Severe</td>
<td style="padding: 8px 12px; border: 1px solid #e2e8f0; background: #FEF3C7; color: #92400E; font-weight: 500; font-size: 13px;">Partial</td>
<td style="padding: 8px 12px; border: 1px solid #e2e8f0; background: #D1FAE5; color: #065F46; font-weight: 500; font-size: 13px;">Adequate</td>
<td style="padding: 8px 12px; border: 1px solid #e2e8f0; background: #FEF3C7; color: #92400E; font-weight: 500; font-size: 13px;">Partial</td>
<td style="padding: 8px 12px; border: 1px solid #e2e8f0; background: #FEF2F2; color: #B91C1C; font-weight: 500; font-size: 13px;">Severe</td>
</tr>
<tr>
<td style="padding: 8px 12px; border: 1px solid #e2e8f0; font-weight: 500; color: #334155;">4. Headline vs. recovery</td>
<td style="padding: 8px 12px; border: 1px solid #e2e8f0; background: #FEF3C7; color: #92400E; font-weight: 500; font-size: 13px;">Partial</td>
<td style="padding: 8px 12px; border: 1px solid #e2e8f0; background: #FEF2F2; color: #B91C1C; font-weight: 500; font-size: 13px;">Severe</td>
<td style="padding: 8px 12px; border: 1px solid #e2e8f0; background: #FEF2F2; color: #B91C1C; font-weight: 500; font-size: 13px;">Severe</td>
<td style="padding: 8px 12px; border: 1px solid #e2e8f0; background: #FEF3C7; color: #92400E; font-weight: 500; font-size: 13px;">Partial</td>
<td style="padding: 8px 12px; border: 1px solid #e2e8f0; background: #FEF2F2; color: #B91C1C; font-weight: 500; font-size: 13px;">Severe</td>
</tr>
<tr>
<td style="padding: 8px 12px; border: 1px solid #e2e8f0; font-weight: 500; color: #334155;">5. Interest income</td>
<td style="padding: 8px 12px; border: 1px solid #e2e8f0; background: #FEF2F2; color: #B91C1C; font-weight: 500; font-size: 13px;">Severe</td>
<td style="padding: 8px 12px; border: 1px solid #e2e8f0; background: #FEF3C7; color: #92400E; font-weight: 500; font-size: 13px;">Partial</td>
<td style="padding: 8px 12px; border: 1px solid #e2e8f0; background: #D1FAE5; color: #065F46; font-weight: 500; font-size: 13px;">Adequate</td>
<td style="padding: 8px 12px; border: 1px solid #e2e8f0; background: #FEF2F2; color: #B91C1C; font-weight: 500; font-size: 13px;">Severe</td>
<td style="padding: 8px 12px; border: 1px solid #e2e8f0; background: #FEF3C7; color: #92400E; font-weight: 500; font-size: 13px;">Partial</td>
</tr>
</tbody>
</table>
</div>

<div style="display: flex; gap: 16px; margin-top: 4px; font-size: 13px;">
<span style="display: inline-flex; align-items: center; gap: 5px;"><span style="display: inline-block; width: 12px; height: 12px; border-radius: 2px; background: #FEF2F2; border: 1px solid #B91C1C;"></span> Severe gap</span>
<span style="display: inline-flex; align-items: center; gap: 5px;"><span style="display: inline-block; width: 12px; height: 12px; border-radius: 2px; background: #FEF3C7; border: 1px solid #92400E;"></span> Partial gap or ambiguous</span>
<span style="display: inline-flex; align-items: center; gap: 5px;"><span style="display: inline-block; width: 12px; height: 12px; border-radius: 2px; background: #D1FAE5; border: 1px solid #065F46;"></span> Adequate or fixed</span>
</div>

<p style="font-size: 14px; color: #475569; margin-top: 10px; line-height: 1.5;">Five findings. Five for five on wire fraud conditions, D&amp;O exclusions, and headline overstatement. Four of five on vendor coverage and interest income. Bank C had the strongest program. It still had three of the five gaps.</p>
</div>

---

<h2 style="display: flex; align-items: center; gap: 14px;"><svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 0;" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg><span>Wire Fraud: Zero Clean Paths to Full Recovery</span></h2>

<div style="background: #f0f9ff; border-left: 4px solid #00D4AA; padding: 14px 18px; margin-bottom: 20px; border-radius: 0 4px 4px 0;">
<p style="margin: 0; color: #1e293b; line-height: 1.55;">On a $500,000 wire fraud loss, recovery ranged from $0 to $250,000.<br>All five banks had conditions that could void coverage entirely.</p>
</div>

Wire fraud is not the loss a community bank suffers most often. Check fraud is, by a wide margin. Wire fraud is the loss the bond is actually asked to pay. A check fraud incident averages around $45,000 and mostly sits below the bond deductible, absorbed as an operating loss that never reaches an insurer. A wire fraud incident averages $141,000 to $295,000, clears every deductible in this sample, and lands squarely on a sublimit. Every bank had social engineering coverage on its fidelity bond. Not the cyber policy. Hardly any cyber carrier writes eCrime coverage for financial institutions, so the bond carries the load.

The problem is what the endorsement says. Four of five banks had sublimits between $250,000 and $500,000. All five had a verification warranty written as a condition precedent: if the employee skips the callback, coverage drops to zero. That warranty was designed for email-based BEC, not deepfake voice calls. One bank had a 50% co-payment clause the board did not know about. And in two banks, recovery swung by $4.5 to $4.75 million depending on how forensics classified the attack after the fact, a judgment the bank does not control.

**What to check**

- Is the social engineering sublimit at least $500,000?
- Is the verification warranty a condition precedent (coverage voided) or best-efforts (coverage reduced)?
- Is there a co-payment clause? What percentage does the bank absorb?
- What is the difference in recovery between a computer fraud and social engineering classification?

[The Wire Nobody Covers]({{ '/insights/the-wire-nobody-covers/' | relative_url }}) · [What Your Fidelity Bond Won't Pay]({{ '/insights/fidelity-bond/' | relative_url }})

---

<h2 style="display: flex; align-items: center; gap: 14px;"><svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#DC2626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 0;" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="9" y1="9" x2="15" y2="15"/><line x1="15" y1="9" x2="9" y2="15"/></svg><span>D&amp;O Cyber Exclusion: Every Board Was Pushed Onto the Cyber Policy</span></h2>

<div style="background: #f0f9ff; border-left: 4px solid #00D4AA; padding: 14px 18px; margin-bottom: 20px; border-radius: 0 4px 4px 0;">
<p style="margin: 0; color: #1e293b; line-height: 1.55;">Every D&amp;O policy had a cyber exclusion. Zero banks had a Side A layer to fall back on.</p>
</div>

After a breach, regulators investigate the board. Did they approve a cybersecurity strategy? Did they allocate adequate resources? The FFIEC, FDIC, and state regulators have all increased scrutiny of board cybersecurity oversight. These investigations are D&O claims.

Every D&O policy I reviewed had a cyber exclusion, though they were not uniform. One preserved individual director coverage and excluded only entity-level claims. Another carved back privacy violations while still blocking breach claims. One capped investigative costs at $100,000, against a multi-regulator defense that can exceed $500,000 in the first six months. A fourth had no pre-claim investigative coverage in its loss definition at all. Four carriers, four failure modes, same destination for the most common scenario.

The board is not left with nothing. Directors are named in the cyber policy's definition of Insured, so the cyber policy picks up what the D&O drops. What it does not do is behave like a D&O policy. No Side A, so the directors share one limit with breach response, and breach response spends first.

**What to check**

- Does your D&O policy have a cyber exclusion? Does it use "arising from" language (broad) or something narrower?
- Is there a carve-back for regulatory investigations of individual directors?
- Open the cyber policy's definitions and confirm your directors are named as insureds. Then read the securities exclusion, which is where a post-breach derivative suit can still fail.
- If the breach response spends the cyber limit in the first sixty days, what is left for the board six months later?

[The D&O Cyber Exclusion That Leaves Your Board Exposed]({{ '/insights/the-board-nobody-insures/' | relative_url }})

---

<h2 style="display: flex; align-items: center; gap: 14px;"><svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 0;" aria-hidden="true"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg><span>Vendor BI Sublimit: $0 to $5 Million. Most Banks on the Wrong End.</span></h2>

<div style="background: #f0f9ff; border-left: 4px solid #00D4AA; padding: 14px 18px; margin-bottom: 20px; border-radius: 0 4px 4px 0;">
<p style="margin: 0; color: #1e293b; line-height: 1.55;">Vendor BI sublimits ranged from $0 to $5 million.<br>Only one bank had its core vendor named by endorsement.</p>
</div>

Every bank runs on a single core platform. When the core vendor goes down, the bank goes down. The Marquis Software Solutions breach in August 2025, a ransomware attack that exposed data at 700+ banks and credit unions, made vendor risk an examiner priority.

One bank had no vendor coverage at all. One had $100,000; a three-day outage would exhaust it in two. One had coverage narrowed mid-term by a carrier amendment that excluded sub-vendor supply chain exposure after the policy was in force. Only one bank had its core vendor named by endorsement with a $5 million limit. And two of five only covered vendor outages caused by security breaches, not system failures. A software crash that shuts down the platform is not a security breach.

**What to check**

- Is dependent BI present? If "Not Included" on the declarations, you have zero vendor coverage.
- What is the sublimit? Model a 5-day outage at your core vendor.
- Does it cover system failure, or only security breach?
- Is your core vendor named, or covered only by a class definition?

[Vendor Risk Insurance Gaps]({{ '/insights/your-vendor-is-your-biggest-exposure/' | relative_url }})

---

<h2 style="display: flex; align-items: center; gap: 14px;"><svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#D97706" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 0;" aria-hidden="true"><line x1="12" y1="3" x2="12" y2="21"/><line x1="4" y1="7" x2="20" y2="7"/><polyline points="4 7 2 13 7 13"/><polyline points="20 7 17 13 22 13"/></svg><span>Headline vs. Recovery: $12 Million in Limits, $500,000 in Recovery</span></h2>

<div style="background: #f0f9ff; border-left: 4px solid #00D4AA; padding: 14px 18px; margin-bottom: 20px; border-radius: 0 4px 4px 0;">
<p style="margin: 0; color: #1e293b; line-height: 1.55;">Combined headline limits: $12 million to $27 million.<br>Realistic recovery on a multi-front incident: $500,000 to $3 million.</p>
</div>

The declarations page shows what the board approved at renewal. Combined limits ranged from $12 million to $27 million. The realistic recovery on a multi-front incident, wire fraud, breach response, regulatory investigation, and board liability at the same time, ranged from $500,000 to $3 million.

The erosion comes from sublimits that share the aggregate, defense costs paid inside the limit, D&O cyber exclusions, verification warranties, and the gaps between the three policies where each carrier points at the others. A $5 million cyber policy with typical sublimits can pay $650,000 on a $4.2 million ransomware loss. Stack that against a bond sublimit and a D&O exclusion, and the bank's total recovery is a fraction of the headline number. One bank: $12 million in combined limits, approximately $500,000 in realistic recovery.

**What to check**

- List every sublimit. Note which are "part of and not in addition to" the aggregate.
- Are defense costs inside or outside the limit?
- Model a multi-front scenario. Map each cost to the policy that responds. Compare the total to the headline.
- Does the board know the difference between the headline number and the realistic recovery?

[The Fine Print Inside the Coverage]({{ '/insights/the-fine-print-inside-the-coverage/' | relative_url }})

---

<h2 style="display: flex; align-items: center; gap: 14px;"><svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 0;" aria-hidden="true"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg><span>Interest Income: The Exclusion That Bites in the Long Outage</span></h2>

<div style="background: #f0f9ff; border-left: 4px solid #00D4AA; padding: 14px 18px; margin-bottom: 20px; border-radius: 0 4px 4px 0;">
<p style="margin: 0; color: #1e293b; line-height: 1.55;">Four of five BI definitions excluded interest income or left it ambiguous.<br>It costs little in a five-day outage and becomes the whole loss in a three-week one.</p>
</div>

The BI definition in most cyber policies either excludes "interest or investment income" by name or never mentions it. The definition was written for commercial businesses, where interest income is incidental. For a bank it is the largest line on the income statement, so the exclusion looks devastating.

It is not, in the outage most banks tabletop. A loan accrues interest under its note and a deposit accrues interest expense under its terms whether or not the servicing platform is available. Five days down, the accruals are still there when the system comes back. What the bank genuinely loses is fee income: overdraft charges, interchange, wire fees, service charges, earned per transaction and gone when the transaction does not happen. Most BI definitions cover that.

The exclusion bites in the extended event. Two or three weeks down, depositors who cannot reach their money move it, replacement funding costs more, and borrowers under stress push loans toward non-accrual, reversing booked interest. Deposit runoff and non-accrual reversals are interest income losses, and they are exactly what the exclusion bars.

Two banks were on a carrier program that pays BI at a flat $500 per hour, a rate set without reference to what the bank actually lost, which can overpay a short outage and badly underpay a long one. Two others had ambiguous definitions, worded so the largest line on the income statement gets characterized by a carrier at claim time. One bank had an endorsement deleting the interest income exclusion outright. Where it is offered it costs between nothing and $2,000 a year.

**What to check**

- Does the BI definition use a flat hourly rate? A flat rate is not a measure of your loss.
- Look for the phrase "interest or investment income." If it is excluded, the extended-outage loss is outside the definition.
- Ask whether an Interest Income endorsement is available. If it is not, get written confirmation that "income from business operations" includes net interest income for a financial institution.
- Size the short outage from the non-interest income line on your call report, not from net interest income, and model the extended event separately.

[The Revenue Your Policy Ignores]({{ '/insights/the-revenue-your-policy-ignores/' | relative_url }})

---

## The Pattern

These findings compound. A single cyber incident touches all three policies, but none of them respond the way the board expects. The cyber carrier denies under a sublimit. The bond carrier denies under a verification condition. The D&O carrier denies under a cyber exclusion. The BI definition stops paying at the point the outage turns serious. Each carrier points to the others.

Every bank in this sample was paying for insurance. None had a clear picture of what it would pay. The gaps are not broker errors. They are policy language designed for commercial businesses, applied to financial institutions without modification.

The fix is not more insurance. It is reading the insurance you already have.

---

## About Breezy Risk Advisors

Joerg Proeve is Founder & Principal of Breezy Risk Advisors. Corporate strategy and M&A integration at a global carrier, technology strategy and innovation at a national carrier, operations leadership at a cyber insurance MGA. He does not place policies. He audits them.

<div style="border-left: 3px solid #00D4AA; padding: 16px 20px; background: rgba(0,212,170,0.05); border-radius: 0 8px 8px 0; margin: 24px 0; font-size: 18px; font-weight: 600; color: #333;">
Ready to find out what your insurance will pay? <a href="{{ '/contact/' | relative_url }}" style="color: #00D4AA;">Get in touch</a>.
</div>

<div style="border-top: 1px solid #e5e7eb; margin-top: 40px; padding-top: 20px; font-size: 14px; color: #6b7280; line-height: 1.6;">
<strong>Updated August 3, 2026.</strong> An earlier version of the interest income finding sized the gap by comparing a flat hourly BI rate against hourly interest income. That arithmetic does not hold, because interest accrues whether or not the platform is up, and the finding has been corrected.
</div>
