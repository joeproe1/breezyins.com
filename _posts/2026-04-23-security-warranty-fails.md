---
layout: post
title: "What Happens When Your Security Warranty Fails"
description: "A community bank passes its IT audit, satisfies the examiner, and still has a cyber claim denied. The security warranty in the policy application is a coverage condition most banks never check."
date: 2026-04-23
author: Joerg Proeve
category: Community Banks
read_time: "5 min read"
image: /assets/images/Blog-Security-Warranty-Fails.png
permalink: /insights/security-warranty-fails/
---

A community bank with $600 million in assets gets hit with ransomware. The IT team responds quickly. Backups are intact. The bank notifies its regulator within 36 hours. The board is briefed. The bank files a claim under its cyber policy: $5 million limit, reputable carrier.

The carrier assigns breach counsel and a forensics firm.

<div style="border-left: 3px solid #F59E0B; padding: 16px 20px; background: rgba(245,158,11,0.05); border-radius: 0 8px 8px 0; margin: 24px 0; font-size: 18px; font-weight: 600; color: #333;">
Then the forensics report comes back, and the conversation changes.
</div>

The attacker gained access through a legacy VPN without multi-factor authentication. The bank's cyber application, signed 14 months earlier, said MFA was deployed on all remote access points.

The VPN was scheduled for decommissioning. Its replacement was already running. But the old one was still active, still accepting single-factor logins.

The carrier pulls the application. The fine print at the bottom says every answer is a promise the carrier relied on when issuing the policy. One outdated VPN turned one answer from true to false.

The carrier sends a reservation of rights letter (legal for "we might not pay this"). Then a rescission notice. The entire policy is void. Not just the VPN-related claim. The entire $5 million in coverage. Gone.

This has already happened. In 2022, Travelers filed suit to rescind a cyber policy after the insured misrepresented its MFA deployment. The insured consented to rescission. The policy was voided ([Travelers v. International Control Services, C.D. Ill., 2022](https://www.insurancejournal.com/news/national/2022/07/12/675516.htm)).

## Two Standards, One Bank, No Cross-Check

The bank passed its IT examination. The bank passed its insurance application. Nobody checked whether the answers matched.

<div style="background: #0A2540; border-radius: 12px; padding: 32px; margin: 32px 0; color: #fff;">
<h3 style="color: #00D4AA; margin-top: 0; font-size: 18px;">Same Bank. Two Different Questions.</h3>
<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-top: 16px;">
<div style="background: rgba(59,130,246,0.1); border-radius: 8px; padding: 20px;">
<div style="color: #93C5FD; font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 12px;">The Examiner Asked</div>
<div style="color: rgba(255,255,255,0.85); font-size: 15px; line-height: 1.6;">"Is MFA deployed on primary systems?"</div>
<div style="color: rgba(255,255,255,0.5); font-size: 14px; margin-top: 12px;">The bank said yes. The examiner was satisfied.</div>
</div>
<div style="background: rgba(220,38,38,0.1); border-radius: 8px; padding: 20px;">
<div style="color: #FCA5A5; font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 12px;">The Carrier Asked</div>
<div style="color: rgba(255,255,255,0.85); font-size: 15px; line-height: 1.6;">"Is MFA deployed on <em>all</em> remote access points?"</div>
<div style="color: rgba(255,255,255,0.5); font-size: 14px; margin-top: 12px;">One legacy VPN turned the answer from true to false.</div>
</div>
</div>
<p style="margin-top: 16px; margin-bottom: 0; font-size: 14px; color: rgba(255,255,255,0.45); line-height: 1.5;">The examiner and the carrier never compare notes. The bank finds out when it files a claim.</p>
</div>

## Rescission vs. Denial

Most people assume a denied claim is the worst outcome. It is not.

<div style="background: #0A2540; border-radius: 12px; padding: 32px; margin: 32px 0; color: #fff;">
<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;">
<div style="background: rgba(59,130,246,0.1); border-left: 4px solid #3B82F6; border-radius: 0 8px 8px 0; padding: 20px;">
<div style="color: #93C5FD; font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 12px;">Claim Denial</div>
<div style="color: rgba(255,255,255,0.85); font-size: 15px; line-height: 1.6;">This particular loss is not covered. An exclusion applies. The rest of the policy stays in force. Other claims can still be paid.</div>
</div>
<div style="background: rgba(220,38,38,0.1); border-left: 4px solid #DC2626; border-radius: 0 8px 8px 0; padding: 20px;">
<div style="color: #FCA5A5; font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 12px;">Rescission</div>
<div style="color: rgba(255,255,255,0.85); font-size: 15px; line-height: 1.6;">The policy never existed. The carrier returns the premium and walks away from everything. Not just this claim. Every claim under that policy period. It is the worst refund you will ever receive.</div>
</div>
</div>
</div>

The carrier does not need to prove the bank lied. An honest mistake, a control that lapsed, a vendor-managed system that changed without the bank's knowledge. Any of these can be enough.

## Banks Get Hit Twice

When a carrier rescinds a bank's cyber policy, the bank does not just lose coverage. It gains a regulatory problem.

The incident costs money. The rescission costs insurance. And the examiner who was told the bank had adequate cyber coverage now wants to know how a false statement ended up on the application, and why nobody caught it.

<div style="border-left: 3px solid #DC2626; padding: 16px 20px; background: rgba(220,38,38,0.05); border-radius: 0 8px 8px 0; margin: 24px 0;">
<strong>Other businesses face the financial hit. Banks face the financial hit and the regulatory one.</strong>
</div>

## The No-Rescission Clause

There is a fix. A no-rescission clause (sometimes called a severability endorsement) limits the carrier's ability to void the entire policy based on an application error.

With this clause, the carrier can still deny coverage related to the specific misrepresentation. But it cannot void the entire policy. The remaining coverages stay in force.

Without it, one inaccurate answer on a 15-page application can erase $5 million in coverage at the moment the bank needs it most.

In the bank cyber policies I have reviewed to date, none included a no-rescission clause. Some carriers offer it as standard on their commercial forms. It is worth asking for at renewal.

## What to Do Before Your Next Renewal

<div style="background: #f8faf9; border-radius: 10px; padding: 28px 32px; margin: 24px 0;">
<div style="display: flex; gap: 16px; margin-bottom: 20px;">
<div style="min-width: 32px; height: 32px; background: #00D4AA; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; color: #0A2540; font-size: 16px;">1</div>
<div><strong>Pull your cyber application.</strong> Compare every "yes" to what your IT environment looks like today. If anything changed, tell the carrier in writing.</div>
</div>
<div style="display: flex; gap: 16px; margin-bottom: 20px;">
<div style="min-width: 32px; height: 32px; background: #00D4AA; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; color: #0A2540; font-size: 16px;">2</div>
<div><strong>Ask for a no-rescission clause.</strong> If the carrier refuses, that tells you how they plan to handle claims.</div>
</div>
<div style="display: flex; gap: 16px; margin-bottom: 20px;">
<div style="min-width: 32px; height: 32px; background: #00D4AA; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; color: #0A2540; font-size: 16px;">3</div>
<div><strong>Cross-check the application against your IT audit.</strong> They ask similar questions with different standards. Where they disagree, close the gap before a claim exposes it.</div>
</div>
<div style="display: flex; gap: 16px;">
<div style="min-width: 32px; height: 32px; background: #00D4AA; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; color: #0A2540; font-size: 16px;">4</div>
<div><strong>Watch for vendor changes.</strong> If a vendor changes a control your application warranted, you have an accidental misrepresentation on file. Build a notification requirement into your vendor agreements.</div>
</div>
</div>

<div style="border-left: 4px solid #00D4AA; padding: 24px 28px; background: rgba(0, 212, 170, 0.06); border-radius: 0 8px 8px 0; margin: 40px 0;">
<div style="font-size: 20px; font-weight: 600; line-height: 1.5; color: #0A2540;">The premium is the cost of coverage. The application is the coverage itself.</div>
</div>

Security warranties are one of the first things examiners will question after a breach. For more on what they expect, see [What Your Bank Examiner Expects From Your Cyber Insurance]({{ '/insights/what-your-examiner-expects-from-cyber-insurance/' | relative_url }}).

Your bank probably spends more time reviewing the premium than the application behind it. If nobody has compared your cyber application to your current IT environment, a [Risk Intelligence Report]({{ '/risk-intelligence-report/' | relative_url }}) will catch the gap before a claim does. [Get in touch]({{ '/contact/' | relative_url }}).
