---
layout: post
title: "What Happens When Your Security Warranty Fails"
description: "A community bank passes its IT audit, satisfies the examiner, and still has a cyber claim denied. The security warranty in the policy application is a coverage condition most banks never check."
date: 2026-04-23
author: Joerg Proeve
category: Community Banks
read_time: "5 min read"
permalink: /insights/security-warranty-fails/
---

A community bank with $600 million in assets gets hit with ransomware. The IT team responds quickly. Backups are intact. The bank notifies its regulator within 36 hours. The board is briefed. The bank files a claim under its cyber policy, a $5 million limit with a reputable carrier.

The carrier assigns breach counsel and a forensics firm. Then the forensics report comes back, and the conversation changes.

The attacker gained access through a legacy VPN concentrator that did not have multi-factor authentication enabled. The bank's application for the cyber policy, signed 14 months earlier, stated that MFA was deployed on all remote access points.

The VPN had been on a decommissioning schedule. IT planned to retire it by Q3. The replacement was already running. But the old VPN was still active, still in production, and still allowed single-factor access to the internal network.

The carrier's claims team pulls the application. The representation clause reads: "The statements in this application are true, accurate, and not misleading, and the Insurer, in issuing the Policy, is relying upon the truth thereof."

The carrier sends a reservation of rights letter. Then a rescission notice. The entire policy is void. Not just the VPN-related portion of the claim. The entire $5 million in coverage. Gone.

## Two Standards, One Bank, No Cross-Check

The bank passed its most recent IT examination. The examiner reviewed controls against the FFIEC IT Examination Handbook and the GLBA Safeguards Rule. The bank had MFA on its primary systems, endpoint detection and response deployed across workstations, a documented patching cadence, and encrypted backups tested quarterly. The examiner was satisfied.

The carrier asked different questions. The application asked whether MFA was deployed on "all remote access points." Not "primary systems." Not "the majority of access points." All. One legacy VPN that IT was planning to retire turned the answer from true to false.

<div style="border-left: 3px solid #DC2626; padding: 16px 20px; background: rgba(220,38,38,0.05); border-radius: 0 8px 8px 0; margin: 24px 0;">
<strong>The gap:</strong> The examiner checks controls against regulatory guidance. The carrier checks controls against the application. These are not the same standard. A bank can satisfy one and violate the other without knowing it.
</div>

This is not hypothetical. I have reviewed cyber policies for community banks where the application was incorporated by reference into the policy, making every answer a material representation. The carrier does not need to prove the bank lied. It needs to show the answer was inaccurate.

## Rescission vs. Denial

There is an important distinction between a carrier denying a specific claim and rescinding the entire policy.

A **denial** means the carrier says this particular loss is not covered. Maybe the claim falls outside the policy's insuring agreements, or a specific exclusion applies. The rest of the policy remains in force.

**Rescission** means the carrier voids the policy from inception. It is treated as if the policy never existed. The carrier returns the premium and walks away from all obligations, not just the current claim but any claim, past or future, under that policy period.

Rescission requires a material misrepresentation in the application. The standard in most states, including New York, is that the misrepresentation was material to the carrier's decision to issue the policy on its stated terms. The carrier does not need to prove the bank acted in bad faith. An honest mistake on the application, a control that lapsed after submission, a vendor-managed system that changed without the bank's knowledge, any of these can be enough.

<div style="background: #0A2540; border-radius: 12px; padding: 32px; margin: 32px 0; color: #fff;">
<h3 style="color: #00D4AA; margin-top: 0; font-size: 18px;">What Carriers Typically Ask About</h3>
<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px; margin-top: 16px;">
<div style="background: rgba(59,130,246,0.1); border-radius: 8px; padding: 16px;">
<div style="color: #93C5FD; font-weight: 700; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">Access Controls</div>
<div style="color: rgba(255,255,255,0.8); font-size: 14px; line-height: 1.5;">MFA on all remote access, email, privileged accounts, VPN</div>
</div>
<div style="background: rgba(139,92,246,0.1); border-radius: 8px; padding: 16px;">
<div style="color: #C4B5FD; font-weight: 700; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">Endpoint Security</div>
<div style="color: rgba(255,255,255,0.8); font-size: 14px; line-height: 1.5;">EDR deployed on all endpoints, managed 24/7, updated within defined intervals</div>
</div>
<div style="background: rgba(245,158,11,0.1); border-radius: 8px; padding: 16px;">
<div style="color: #FCD34D; font-weight: 700; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">Patch Management</div>
<div style="color: rgba(255,255,255,0.8); font-size: 14px; line-height: 1.5;">Critical patches applied within 30 days, vulnerability scanning on defined schedule</div>
</div>
<div style="background: rgba(0,212,170,0.1); border-radius: 8px; padding: 16px;">
<div style="color: #00D4AA; font-weight: 700; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">Backup & Recovery</div>
<div style="color: rgba(255,255,255,0.8); font-size: 14px; line-height: 1.5;">Encrypted backups, tested quarterly, air-gapped or immutable, documented recovery plan</div>
</div>
</div>
<p style="margin-top: 16px; font-size: 14px; color: rgba(255,255,255,0.5); line-height: 1.5;">Every "yes" on the application is a coverage condition. If the answer changes during the policy period, the bank needs to disclose it.</p>
</div>

## Banks Face Double Exposure

Community banks face a rescission risk that other businesses do not. When a carrier rescinds a bank's cyber policy, two things happen simultaneously.

First, the bank loses coverage for the current incident. Whatever the ransomware attack costs to remediate, the bank pays out of pocket.

Second, the regulator now has a finding. The bank represented to its examiner that it had adequate cyber insurance. The policy is rescinded. The bank is uninsured. The examiner will want to know how the bank allowed a material misrepresentation on its insurance application, and why the bank's vendor risk management or internal audit process did not catch it.

The rescission creates a regulatory problem on top of the financial one. Other businesses face the financial hit. Banks face both.

## The No-Rescission Clause Most Banks Do Not Have

There is a fix. It is called a no-rescission clause, sometimes called a severability endorsement or non-avoidance clause. It limits the carrier's ability to void the entire policy based on an application misrepresentation.

With a no-rescission clause, the carrier can still deny coverage related to the specific misrepresentation (the MFA question, for example). But it cannot void the entire policy. The remaining coverages stay in force. The bank still has a policy.

Without a no-rescission clause, the carrier can void everything. One inaccurate answer on a 15-page application nullifies $5 million in coverage at the moment the bank needs it most.

I have reviewed cyber policies for community banks from multiple carriers. In every case, the no-rescission clause was absent. Some carriers offer it as standard on their commercial forms. None of the bank-focused policies I have examined included it.

## The Fix

<div style="background: #f8faf9; border-radius: 10px; padding: 28px 32px; margin: 24px 0;">
<div style="display: flex; gap: 16px; margin-bottom: 20px;">
<div style="min-width: 32px; height: 32px; background: #00D4AA; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; color: #0A2540; font-size: 16px;">1</div>
<div><strong>Audit every answer on your current cyber application.</strong> Pull the application your bank submitted. Compare every "yes" to your current IT environment. Not what you planned to have by Q3. What you have today. If anything has changed since submission, disclose it to the carrier in writing now. Do not wait for a claim.</div>
</div>
<div style="display: flex; gap: 16px; margin-bottom: 20px;">
<div style="min-width: 32px; height: 32px; background: #00D4AA; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; color: #0A2540; font-size: 16px;">2</div>
<div><strong>Request a no-rescission clause at your next renewal.</strong> Ask your broker whether the policy includes a severability or non-avoidance endorsement. If it does not, request one. If the carrier refuses, that is a differentiating factor when comparing markets. Some carriers include this as standard. Your bank should know which ones.</div>
</div>
<div style="display: flex; gap: 16px; margin-bottom: 20px;">
<div style="min-width: 32px; height: 32px; background: #00D4AA; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; color: #0A2540; font-size: 16px;">3</div>
<div><strong>Cross-check your application against your IT audit findings.</strong> Your IT auditor and your insurance application are asking similar questions with different standards. Where they disagree, you have either a controls gap (fix the control) or a representation gap (fix the application). Either way, you need to know before the carrier finds out during a claim.</div>
</div>
<div style="display: flex; gap: 16px;">
<div style="min-width: 32px; height: 32px; background: #00D4AA; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; color: #0A2540; font-size: 16px;">4</div>
<div><strong>Watch for vendor-managed controls that change without notice.</strong> If your core banking vendor, your SOC provider, or your managed security vendor changes a control that your application warranted, you may have an inadvertent misrepresentation. Build a notification clause into your vendor agreements that requires vendors to notify you of material security changes within the policy period.</div>
</div>
</div>

Your bank probably spends more time reviewing the cyber insurance premium than the application behind it. The premium is the cost of coverage. The application is the coverage itself. If the answers are wrong, the coverage does not exist.

If nobody has compared your cyber application to your current IT environment, [get in touch]({{ '/contact/' | relative_url }}). I can tell you whether your policy is standing on solid ground, or on a warranty that could void it.
