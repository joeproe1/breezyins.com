---
layout: post
title: "Cyber Insurance for Community Banks: What It Covers, What It Doesn't, and What Your Board Should Be Asking"
description: "Most community banks have a cyber policy. Few understand what it actually covers. Here is what to check before your next board meeting or examination."
date: 2026-03-03
author: Joerg Proeve
category: Community Banks
read_time: "7 min read"
image: /assets/images/Blog-Cyber-Insurance-Banks.png
permalink: /insights/cyber-insurance-for-community-banks/
---

Your bank has a cyber insurance policy. It's on the books. The premium gets paid. The Board sees it listed in the risk management report.

But when was the last time anyone checked what your cyber policy actually covers?

I review cyber policies for clients, and the most common reaction I get from bank leadership is some version of:

*"Wait, that's not covered?"*

The problem isn't that community banks buy bad cyber policies. It's that cyber insurance was originally designed for companies that store data and operate a single network. Community banks do something more complex: they hold customer financial data, process transactions, move money, depend on multiple third-party vendors, and answer to multiple regulators. That's a different risk profile. Your cyber policy should reflect it.

Here's how to tell if it does.

## What Cyber Insurance Actually Covers for a Community Bank

A cyber policy has two sides: first-party coverage (your own losses) and third-party coverage (when someone sues you).

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin: 28px 0;">

<div style="border-left: 4px solid #00D4AA; padding: 24px 24px; background: rgba(0,212,170,0.05); border-radius: 0 10px 10px 0;">
<strong style="font-size: 17px; color: #0A2540;">First-Party Coverage</strong><br>
<span style="font-size: 14px; color: #6b7280;">Your own losses</span>
<ul style="margin: 16px 0 0; padding-left: 18px; line-height: 1.8;">
<li><strong>Breach response:</strong> Forensics, legal counsel, notification, credit monitoring. Even a few hundred records can run into six figures.</li>
<li><strong>Business interruption:</strong> Lost income and extra expenses while systems are down, after a waiting period (usually 8 hours).</li>
<li><strong>Cyber extortion/ransomware:</strong> Ransom payments, negotiation, forensic support.</li>
<li><strong>Data restoration:</strong> Recovering or recreating data destroyed during an attack.</li>
</ul>
</div>

<div style="border-left: 4px solid #3B82F6; padding: 24px 24px; background: rgba(59,130,246,0.05); border-radius: 0 10px 10px 0;">
<strong style="font-size: 17px; color: #0A2540;">Third-Party Coverage</strong><br>
<span style="font-size: 14px; color: #6b7280;">When someone sues you</span>
<ul style="margin: 16px 0 0; padding-left: 18px; line-height: 1.8;">
<li><strong>Network security liability:</strong> Defense costs and settlements when a security failure causes harm to a third party.</li>
<li><strong>Privacy liability:</strong> Claims from failure to protect personal information.</li>
<li><strong>Regulatory proceedings:</strong> Defense costs when regulators investigate after a breach. For banks, this matters more than in most industries.</li>
</ul>
</div>

</div>

That's the standard package. For a typical business, it works reasonably well. For a community bank, it has blind spots that deserve attention.

## Blind Spots: Where Cyber Insurance Falls Short for Community Banks

### Wire fraud and social engineering coverage is probably sublimited

Wire fraud and business email compromise (BEC) are among the costliest cyber threats facing banks. BEC alone accounts for roughly $3 billion in reported losses annually. Banks are in the business of moving money, and attackers know it.

Most cyber policies offer social engineering coverage as an endorsement, not a core coverage. Sublimits typically range from $100K to $250K. If a bank employee is tricked into wiring $500K to a fraudulent account, the cyber policy sublimit may cover half. The fidelity bond may or may not respond, depending on whether the loss qualifies under the bond language.

And it is getting worse. AI-generated voice and video can now impersonate executives in real time, and most policy language was written for email-based scams. For a deeper look at how deepfakes are breaking callback verification procedures and widening this gap, see [Wire Fraud at Your Bank: Is That a Cyber Claim or a Bond Claim?]({{ '/insights/wire-fraud-cyber-claim-or-bond-claim/' | relative_url }})

<div style="border-left: 3px solid #00D4AA; padding: 16px 20px; background: rgba(0,212,170,0.05); border-radius: 0 8px 8px 0; margin: 24px 0;">
<strong>What to look for:</strong> Check whether your social engineering sublimit is adequate for your wire transfer volume. Check whether the policy defines "social engineering" broadly enough to include AI-generated voice and video. And if your policy requires a callback verification procedure, ask whether that procedure accounts for voice impersonation.
</div>

### Your fidelity bond, D&O, and cyber policy may be pointing at each other

Banks carry fidelity bonds (covering employee dishonesty, forgery, computer fraud) alongside their cyber policies. These overlap in some areas and leave gaps in others.

Social engineering and fraudulent wire transfers are the most common gap. The fidelity bond may require "direct" fraud, someone physically stealing or forging. The cyber policy requires a "cyber event." A BEC scam that tricks an employee into voluntarily initiating a legitimate wire transfer may not clearly fit either definition. The employee was not dishonest. There was no hack. Both carriers can argue it belongs to the other policy.

Directors and Officers (D&O) coverage adds another layer. If the Board is sued after a breach for inadequate oversight of cybersecurity, does the D&O policy respond? Some D&O policies now exclude claims "arising from" a cyber event, pushing everything to the cyber policy. But the cyber policy may not cover Board liability claims.

<div style="border-left: 3px solid #00D4AA; padding: 16px 20px; background: rgba(0,212,170,0.05); border-radius: 0 8px 8px 0; margin: 24px 0;">
<strong>What to look for:</strong> Pull your cyber policy, fidelity bond, and D&O policy side by side. Check whether any of them have exclusions that push claims to one of the other policies. If you see phrases like "arising from a cyber event" in your D&O exclusions, or "computer fraud" carved out of your fidelity bond, those are the seams where coverage can fail.
</div>

### Vendor outages may not be covered

Community banks depend on banking platforms, payment processors, and online banking providers. A breach or outage at any one of these vendors can bring operations to a halt.

Scenario: Your banking platform vendor suffers a ransomware attack. Your own systems are fine, but you cannot process transactions, access accounts, or serve customers for three days.

Many cyber policies either exclude third-party outages entirely, sublimit them, or require a "security failure" at the vendor. A configuration error, a failed update, or an operational failure at the vendor would not qualify. Your bank loses three days of operations, and the policy does not respond.

<div style="border-left: 3px solid #00D4AA; padding: 16px 20px; background: rgba(0,212,170,0.05); border-radius: 0 8px 8px 0; margin: 24px 0;">
<strong>What to look for:</strong> Does your policy cover "dependent business interruption" or "contingent system failure"? Is there a sublimit? Does it require a "security event" at the vendor, or does it cover any "system outage"?
</div>

### Ransomware coverage has three hidden traps

Ransomware is now a factor in the majority of cyber insurance claims, and financial institutions are among the most frequently targeted industries. Three things to check:

<div style="display: flex; flex-direction: column; gap: 20px; margin: 24px 0;">

<div style="border-left: 3px solid #F59E0B; padding: 16px 20px; background: rgba(245,158,11,0.05); border-radius: 0 8px 8px 0;">
<strong>Trap 1: The sublimit.</strong><br>
Your policy may say "$2M cyber" on the declarations page, but ransomware/extortion may be capped at $250K or $500K in the endorsements. If the demand exceeds your sublimit, you are paying the difference.
</div>

<div style="border-left: 3px solid #F59E0B; padding: 16px 20px; background: rgba(245,158,11,0.05); border-radius: 0 8px 8px 0;">
<strong>Trap 2: The OFAC sanctions exclusion.</strong><br>
Most policies exclude ransom payments if the attacker is on the OFAC sanctions list. Banks deal with OFAC sanctions in their day-to-day compliance work, but many do not realize the same sanctions rules apply to their insurance policy too. If you pay a ransom to a sanctioned group, the carrier denies the claim and you may face separate OFAC penalties.
</div>

<div style="border-left: 3px solid #DC2626; padding: 16px 20px; background: rgba(220,38,38,0.05); border-radius: 0 8px 8px 0;">
<strong>Trap 3: Security warranties.</strong><br>
Modern cyber policies include MFA, patching, EDR, and backup requirements as conditions of coverage. If the bank does not meet these controls when a ransomware event occurs, the entire claim can be denied, regardless of whether the missing control caused the breach. MFA was not enforced on a remote access connection? Claim denied. Not because MFA would have stopped the attack. Because MFA was a contractual condition and it was not in place.
</div>

</div>

### Regulatory coverage may be narrower than you think

Most cyber policies include regulatory proceedings coverage. But there are limits.

Fines and penalties are often excluded, or covered only where "insurable by law." That language varies by state. For banks, the 36-hour incident notification rule means regulators will know about significant incidents quickly. The examination that follows can be extensive, and legal costs for responding to regulatory inquiries can run into six figures.

The gap: your policy covers "regulatory proceedings" but defines it narrowly. An FDIC investigation may not fit the policy's definition if it is framed as an examination rather than a formal enforcement action.

## Security Warranties: Where Cybersecurity Controls and Insurance Collide

Carriers increasingly require specific security controls as conditions of coverage. These are not recommendations. They are contractual requirements:

- Multi-factor authentication (MFA) on all remote access points
- Endpoint detection and response (EDR)
- Regular patching within defined timelines
- Tested and verified backups
- Email filtering and anti-phishing tools
- Security awareness training for employees

The security controls your IT team or security assessor evaluates are the same controls your insurance carrier requires. If those controls are not in place, it is both a security risk and an insurance risk. A security gap does not just make you more vulnerable to an attack. It can void your coverage when the attack happens.

If your bank works with an IT auditor or security firm, ask them to review your carrier's security warranty requirements alongside their assessment. For more on how examiner expectations, IT audit findings, and carrier requirements overlap (and where they do not), see [What Your Examiner Expects From Your Cyber Insurance]({{ '/insights/what-your-examiner-expects-from-cyber-insurance/' | relative_url }}).

## 5 Things to Check Before Your Next Board Meeting

These checks take about 30 minutes. If you get through all five, you will know more about your cyber coverage than most community banks ever will.

1. **Find your sublimits.** Look at the declarations page and any endorsements for ransomware/extortion and social engineering/wire fraud sublimits. Compare them to your aggregate limit. If either is less than 25% of your aggregate, flag it.

2. **Read your security warranties.** Go to the Conditions or Warranties section. List every security control required as a condition of coverage. Then check whether your bank meets every single one. One gap can void everything.

3. **Check your vendor coverage.** Find the Business Interruption section and look for "dependent business interruption" or "contingent system failure" language. If your policy only covers outages at your own bank, you have a gap.

4. **Look at your policies together.** Pull the cyber policy, the fidelity bond, and the D&O policy. Check whether any of them have exclusions that push claims to one of the other policies. Where you see "arising from a cyber event" exclusions, that is a potential gap.

5. **Ask about deepfake coverage.** Check whether your social engineering coverage defines "social engineering" broadly enough to include AI-generated voice and video, or whether the language is limited to written communications.

If any of these raises a question you cannot answer, bring it to your next broker conversation. Or if you would rather have someone who reads these for a living walk through it with you, [get in touch]({{ '/contact/' | relative_url }}). Learn more about how I work with [community banks]({{ '/community-bank-insurance/' | relative_url }}).
