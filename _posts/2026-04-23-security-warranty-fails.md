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

The attacker gained access through a legacy VPN that did not have multi-factor authentication enabled. The bank's cyber insurance application, signed 14 months earlier, stated that MFA was deployed on all remote access points.

The VPN was scheduled for decommissioning. Its replacement was already running. But the old one was still active, still accepting single-factor logins.

The carrier's claims team pulls the cyber insurance application. Nearly every cyber application today asks about MFA. The question is specific: is MFA enabled on all remote access, all email, all privileged accounts? The bank answered yes. The representation clause reads: "The statements in this application are true, accurate, and not misleading, and the Insurer, in issuing the Policy, is relying upon the truth thereof."

The carrier sends a reservation of rights letter. Then a rescission notice. The entire policy is void. Not just the VPN-related claim. The entire $5 million in coverage. Gone.

This has already happened. In 2022, Travelers filed suit to rescind a cyber policy after the insured misrepresented its MFA deployment on the application. The insured consented to rescission. The policy was voided ([Travelers v. International Control Services, C.D. Ill., 2022](https://www.insurancejournal.com/news/national/2022/07/12/675516.htm)).

## Two Standards, One Bank, No Cross-Check

The bank passed its most recent IT examination. The bank examiner reviewed controls against the FFIEC IT Examination Handbook and the GLBA Safeguards Rule. MFA on primary systems, EDR on workstations, documented patching, encrypted backups tested quarterly. The examiner was satisfied.

The carrier asked different questions. The application asked whether MFA was deployed on "all remote access points." Not "primary systems." Not "most." All. One legacy VPN turned the answer from true to false.

<div style="border-left: 3px solid #DC2626; padding: 16px 20px; background: rgba(220,38,38,0.05); border-radius: 0 8px 8px 0; margin: 24px 0;">
<strong>The gap:</strong> The examiner checks controls against regulatory guidance. The carrier checks controls against the application. These are not the same standard. A bank can satisfy one and violate the other without knowing it.
</div>

## Rescission vs. Denial

A **denial** means the carrier says this particular loss is not covered. An exclusion applies, or the claim falls outside the insuring agreements. The rest of the policy stays in force.

**Rescission** is different. The carrier voids the policy from inception. It is treated as if the policy never existed. The carrier returns the premium and walks away from everything: not just this claim, but any claim under that policy period.

Rescission requires a material misrepresentation in the application. The carrier does not need to prove the bank lied. An honest mistake, a control that lapsed after submission, a vendor-managed system that changed without the bank's knowledge, any of these can be enough.

<div style="background: #0A2540; border-radius: 12px; padding: 32px; margin: 32px 0; color: #fff;">
<h3 style="color: #00D4AA; margin-top: 0; font-size: 18px;">What Carriers Typically Ask About</h3>
<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-top: 16px;">
<div style="background: rgba(59,130,246,0.1); border-radius: 8px; padding: 16px;">
<div style="color: #93C5FD; font-weight: 700; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">Access Controls</div>
<div style="color: rgba(255,255,255,0.8); font-size: 14px; line-height: 1.5;">MFA on all remote access, email, privileged accounts, VPN</div>
</div>
<div style="background: rgba(139,92,246,0.1); border-radius: 8px; padding: 16px;">
<div style="color: #C4B5FD; font-weight: 700; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">Endpoint Security</div>
<div style="color: rgba(255,255,255,0.8); font-size: 14px; line-height: 1.5;">EDR on all endpoints, managed 24/7, updated within defined intervals</div>
</div>
<div style="background: rgba(245,158,11,0.1); border-radius: 8px; padding: 16px;">
<div style="color: #FCD34D; font-weight: 700; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">Patch Management</div>
<div style="color: rgba(255,255,255,0.8); font-size: 14px; line-height: 1.5;">Critical patches applied within 30 days, vulnerability scanning on a defined schedule</div>
</div>
<div style="background: rgba(0,212,170,0.1); border-radius: 8px; padding: 16px;">
<div style="color: #00D4AA; font-weight: 700; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">Backup & Recovery</div>
<div style="color: rgba(255,255,255,0.8); font-size: 14px; line-height: 1.5;">Encrypted backups, tested quarterly, air-gapped or immutable, documented recovery plan</div>
</div>
</div>
<p style="margin-top: 16px; font-size: 14px; color: rgba(255,255,255,0.5); line-height: 1.5;">Every "yes" on the application is a coverage condition. If the answer changes during the policy period, the bank needs to disclose it.</p>
</div>

## Banks Face Double Exposure

When a carrier rescinds a bank's cyber policy, two things happen at once.

First, the bank loses coverage for the incident. Whatever the ransomware costs to clean up, the bank pays out of pocket.

Second, the regulator has a finding. The bank told its examiner it had adequate cyber insurance. Now the policy is rescinded and the bank is uninsured. The examiner will ask how a material misrepresentation ended up on the insurance application, and why the bank's internal audit process did not catch it.

Other businesses face the financial hit. Banks face the financial hit and the regulatory one.

## The No-Rescission Clause

There is a fix. It is called a no-rescission clause (sometimes called a severability endorsement). It limits the carrier's ability to void the entire policy based on an application misrepresentation.

With this clause, the carrier can still deny coverage related to the specific misrepresentation. But it cannot void the entire policy. The remaining coverages stay in force.

Without it, one inaccurate answer on a 15-page application can nullify $5 million in coverage at the moment the bank needs it most.

In the bank cyber policies I have reviewed to date, none included a no-rescission clause. Some carriers offer it as standard on their commercial forms. It is worth asking for at renewal.

## The Fix

<div style="background: #f8faf9; border-radius: 10px; padding: 28px 32px; margin: 24px 0;">
<div style="display: flex; gap: 16px; margin-bottom: 20px;">
<div style="min-width: 32px; height: 32px; background: #00D4AA; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; color: #0A2540; font-size: 16px;">1</div>
<div><strong>Audit every answer on your current cyber application.</strong> Pull the application your bank submitted. Compare every "yes" to your current IT environment. Not what you planned to have. What you have today. If anything has changed, disclose it to the carrier in writing now.</div>
</div>
<div style="display: flex; gap: 16px; margin-bottom: 20px;">
<div style="min-width: 32px; height: 32px; background: #00D4AA; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; color: #0A2540; font-size: 16px;">2</div>
<div><strong>Ask your broker about a no-rescission clause.</strong> If the policy does not include one, request it at renewal. If the carrier refuses, that tells you something about how they plan to handle claims.</div>
</div>
<div style="display: flex; gap: 16px; margin-bottom: 20px;">
<div style="min-width: 32px; height: 32px; background: #00D4AA; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; color: #0A2540; font-size: 16px;">3</div>
<div><strong>Cross-check your application against your IT audit.</strong> Your IT auditor and your insurance application ask similar questions with different standards. Where they disagree, you have a gap to close before a claim exposes it.</div>
</div>
<div style="display: flex; gap: 16px;">
<div style="min-width: 32px; height: 32px; background: #00D4AA; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; color: #0A2540; font-size: 16px;">4</div>
<div><strong>Watch for vendor-managed controls that change without notice.</strong> If your core banking vendor or SOC provider changes a control that your application warranted, you may have an inadvertent misrepresentation. Build a notification requirement into your vendor agreements.</div>
</div>
</div>

Your bank probably spends more time reviewing the cyber insurance premium than the application behind it. The premium is the cost of coverage. The application is the coverage itself.

If nobody has compared your cyber application to your current IT environment, [get in touch]({{ '/contact/' | relative_url }}).
