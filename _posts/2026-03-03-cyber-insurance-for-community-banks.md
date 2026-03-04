---
layout: post
title: "Cyber Insurance for Community Banks: What It Covers, What It Doesn't, and What Your Board Should Be Asking"
description: "Most community banks have a cyber policy. Few understand what it actually covers. Here is what to check before your next board meeting or examination."
date: 2026-03-03
author: Joerg Proeve
category: Community Banks
read_time: "9 min read"
image: /assets/images/Blog-Cyber-Insurance-Banks.png
permalink: /insights/cyber-insurance-for-community-banks/
---

Your bank has a cyber insurance policy. It's on the books. The premium gets paid. The board sees it listed in the risk management report.

But when was the last time anyone checked what your cyber policy actually covers?

I review cyber policies for clients across the country, and the most common reaction I get from bank leadership is some version of: "Wait, that's not covered?" The problem isn't that community banks buy bad policies. It's that cyber insurance was originally designed for companies that store data and operate a single network. Community banks do something more complex: they hold customer financial data, process transactions, move money, depend on multiple third-party vendors, and answer to multiple regulators. That's a different risk profile. Your cyber policy should reflect it.

Here's how to tell if it does.

## What Cyber Insurance Actually Covers for a Community Bank

A cyber policy has two sides: first-party coverage (your own losses) and third-party coverage (when someone sues you). Most policies bundle several components under each.

**First-party coverage typically includes:**

- **Breach response costs:** Forensic investigation, legal counsel, notification to affected customers, and credit monitoring. When your systems are compromised, these are the immediate costs to figure out what happened and meet your regulatory and state breach notification obligations. Even for a breach affecting a few hundred records, these costs routinely run into six figures.

- **Business interruption:** Lost income and extra expenses while your systems are down due to a cyber event. This kicks in after a waiting period (usually 8 hours) and pays for revenue you lost while you could not process transactions or serve customers.

- **Cyber extortion/ransomware:** Costs associated with a ransom demand, including the ransom payment itself, negotiation expenses, and forensic support.

- **Data restoration:** The cost to recover or recreate data that was destroyed or corrupted during an attack.

**Third-party coverage typically includes:**

- **Network security liability:** Defense costs and settlements when a third party sues you because a security failure caused them harm.

- **Privacy liability:** Claims arising from failure to protect personal information. If customer data is exposed, this is the coverage that responds.

- **Regulatory proceedings:** Defense costs when a regulatory body investigates after a breach. For banks, this matters more than in most industries.

- **Media liability:** Claims from content you publish online. Less relevant for most banks, but usually bundled in.

That's the standard package. For a typical business, it works reasonably well. For a community bank, it has blind spots that deserve attention.

## Where Cyber Insurance Falls Short for Community Banks

### Wire fraud and social engineering coverage is probably sublimited

Wire fraud and business email compromise are among the costliest cyber threats facing banks. Business email compromise alone accounts for roughly $3 billion in reported losses annually. Banks are in the business of moving money, and attackers know it.

Most cyber policies offer social engineering coverage as an endorsement, not a core coverage. Sublimits typically range from $100K to $250K. If a bank employee is tricked into wiring $500K to a fraudulent account, the cyber policy sublimit may cover half. The fidelity bond may or may not respond, depending on whether the loss qualifies under the bond language.

And this is getting worse. AI-generated voice and video are now realistic enough to impersonate bank executives and trusted clients in real time. A finance employee at a multinational was tricked into transferring $25 million after a video call with what appeared to be the company's CFO and several colleagues. Every person on that call was a deepfake. Attackers are cloning voices from publicly available sources, such as earnings calls, conference presentations, even short LinkedIn videos. A three-second audio clip is enough to generate a convincing voice clone.

For community banks, where people know each other and trust a familiar voice, this is particularly dangerous. "I recognized the voice" used to be a reasonable verification step. Not anymore.

The insurance problem: most social engineering coverage was written for email-based scams. Policy language often requires "fraudulent instruction" via "electronic communication." A deepfake phone call may or may not fit that definition. And callback verification procedures, where the policy requires the bank to confirm wire requests by phone before the transfer, assume the voice on the other end is real. When the callback itself is compromised by a deepfake, the procedure that's supposed to protect the bank becomes the attack vector.

**What to look for:** Check whether your social engineering sublimit is adequate for your wire transfer volume. Check whether the policy defines "social engineering" broadly enough to include AI-generated voice and video. And if your policy requires a callback verification procedure, ask whether that procedure accounts for voice impersonation.

### Your fidelity bond, D&O, and cyber policy may be pointing at each other

Banks carry fidelity bonds (covering employee dishonesty, forgery, computer fraud) alongside their cyber policies. These overlap in some areas and leave gaps in others.

Social engineering and fraudulent wire transfers are the most common gap. The fidelity bond may require "direct" fraud, someone physically stealing or forging. The cyber policy requires a "cyber event." A business email compromise scam that tricks an employee into voluntarily initiating a legitimate wire transfer may not clearly fit either definition. The employee was not dishonest. There was no hack. Both carriers can argue it belongs to the other policy.

Directors and Officers (D&O) coverage adds another layer. If the board is sued after a breach for inadequate oversight of cybersecurity, does the D&O policy respond? Some D&O policies now exclude claims "arising from" a cyber event, pushing everything to the cyber policy. But the cyber policy may not cover board liability claims.

**What to look for:** Pull your cyber policy, fidelity bond, and D&O policy side by side. Check whether any of them have exclusions that push claims to one of the other policies. If you see phrases like "arising from a cyber event" in your D&O exclusions, or "computer fraud" carved out of your fidelity bond, those are the seams where coverage can fail.

### Vendor outages may not be covered

Community banks depend on banking platforms, payment processors, online banking providers, and document management vendors. A breach or outage at any one of these vendors can bring operations to a halt.

Scenario: Your banking platform vendor suffers a ransomware attack. Your own systems are fine, but you cannot process transactions, access accounts, or serve customers for three days.

Many cyber policies either exclude third-party outages entirely, sublimit them, or require a "security failure" at the vendor. A configuration error, a failed update, or an operational failure at the vendor would not qualify. Your bank loses three days of operations, and the policy does not respond.

Banking regulators have been pushing banks to strengthen third-party risk management, and recent federal guidance specifically addresses vendor oversight for community banks. Part of that risk management should include understanding how insurance responds when the problem is not at your bank, it is at your vendor.

**What to look for:** Does your policy cover "dependent business interruption" or "contingent system failure"? Is there a sublimit? Does it require a "security event" at the vendor, or does it cover any "system outage"?

### Ransomware coverage has three hidden traps

Ransomware is now a factor in the majority of cyber insurance claims, and financial institutions are among the most frequently targeted industries. Three things to check:

**First, the sublimit.** Your policy may say "$2M cyber" on the declarations page, but ransomware/extortion may be capped at $250K or $500K in the endorsements. If the demand exceeds your sublimit, you are paying the difference.

**Second, the OFAC sanctions exclusion.** Most policies exclude ransom payments if the attacker is on the OFAC sanctions list. Banks deal with OFAC sanctions in their day-to-day compliance work, but many do not realize the same sanctions rules apply to their insurance policy too. If you pay a ransom to a sanctioned group, the carrier denies the claim and you may face separate OFAC penalties.

**Third, security warranties.** Modern cyber policies include MFA, patching, EDR, and backup requirements as conditions of coverage. If the bank does not meet these controls when a ransomware event occurs, the entire claim can be denied, regardless of whether the missing control caused the breach. MFA was not enforced on a remote access connection? Claim denied. Not because MFA would have stopped the attack. Because MFA was a contractual condition and it was not in place.

### Regulatory coverage may be narrower than you think

Most cyber policies include regulatory proceedings coverage. But there are limits.

Fines and penalties are often excluded, or covered only where "insurable by law." That language varies by state. For banks, the 36-hour incident notification rule means regulators will know about significant incidents quickly. The examination that follows can be extensive, and legal costs for responding to regulatory inquiries can run into six figures.

The gap: your policy covers "regulatory proceedings" but defines it narrowly. An FDIC investigation may not fit the policy's definition if it is framed as an examination rather than a formal enforcement action.

And reputational harm is almost never covered by insurance. But for a community bank, where relationships are the business, a publicized breach can drive deposits to competitors. That's a real financial loss with no insurance backstop.

## Security Warranties: Where Cybersecurity Controls and Insurance Collide

This deserves its own section because it is the area where most community banks are exposed without knowing it.

Carriers increasingly require specific security controls as conditions of coverage. These are not recommendations. They are contractual requirements. Common ones include:

- Multi-factor authentication (MFA) on all remote access points
- Endpoint detection and response (EDR)
- Regular patching within defined timelines
- Tested and verified backups
- Email filtering and anti-phishing tools
- Security awareness training for employees

Federal regulations now require financial institutions to conduct annual penetration testing and vulnerability scanning every six months. Carriers are aware of these requirements and may include regulatory compliance in their warranty language.

Here is why this matters: the security controls your IT team or security assessor evaluates are the same controls your insurance carrier requires. If those controls are not in place, it is both a security risk and an insurance risk. A security gap does not just make you more vulnerable to an attack. It can void your coverage when the attack happens.

If your bank works with an IT auditor or security firm, ask them to review your carrier's security warranty requirements alongside their assessment. The overlap between "what keeps us secure" and "what keeps our insurance valid" should be explicitly documented.

## 5 Things to Check in Your Cyber Policy Before Your Next Board Meeting

These checks take about 30 minutes. If you get through all five, you will know more about your cyber coverage than most community banks ever will.

1. **Find your sublimits.** Look at the declarations page in your cyber policy and any endorsements for ransomware/extortion and social engineering/wire fraud sublimits. Compare them to your aggregate limit. If either is less than 25% of your aggregate, flag it.

2. **Read your security warranties.** Go to the Conditions or Warranties section. List every security control that is required as a condition of coverage. Then check whether your bank meets every single one. One gap can void everything.

3. **Check your vendor coverage.** Find the Business Interruption section and look for "dependent business interruption" or "contingent system failure" language. If your policy only covers outages at your own bank, you have a gap that matters every time your core processor, online banking platform, or payment vendor has a problem.

4. **Look at your policies together.** Pull the cyber policy, the fidelity bond, and the D&O policy. Check whether any of them have exclusions that push claims to one of the other policies. Where you see "arising from a cyber event" exclusions, that is a potential gap.

5. **Ask about deepfake coverage.** Check whether your social engineering coverage defines "social engineering" broadly enough to include AI-generated voice and video, or whether the language is limited to written communications. If your policy requires a callback verification procedure, ask whether it accounts for voice impersonation.

If any of these raises a question you cannot answer, bring it to your next broker conversation. Or if you would rather have someone who reads these for a living walk through it with you, [get in touch]({{ '/contact/' | relative_url }}).

## The Bottom Line

Cyber insurance is not complicated once you understand the moving parts. But most community banks never look under the hood. They see a policy on the books, it shows up in the risk management report, and the board checks the box.

The hard part is not buying the policy. It is making sure those dollars show up when you need them. That means understanding what triggers your coverage, what conditions can void it, where the sublimits hide, and how your cyber policy interacts with your fidelity bond and D&O coverage.

You do not need to become an insurance expert. But you do need to know enough to ask the right questions. The five checks above are a start. If you want a more thorough review, that is what I do: compare your actual policies against your actual risk profile and flag the gaps before a claim, or an examiner, exposes them. Learn more about how I work with [community banks]({{ '/community-bank-insurance/' | relative_url }}), or [get in touch]({{ '/contact/' | relative_url }}) to start the conversation.
