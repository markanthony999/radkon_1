import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<>
			<h1>Home</h1>
			<div className="container">
				<h1>ARE YOUR EMPLOYEES' CREDENTIALS ON THE DARK WEB?</h1>
				<h1>WE NAVIGATE THE DARK WEB SO YOU DON'T HAVE TO!</h1>
				<h1>WHY SHOULD I CHOOSE AN MSP FOR MY IT NEEDS?</h1>
				<h1>BENEFITS OF USING A MANAGED SERVICE PROVIDER</h1>
				<p>
					A managed service provider has built relationships with companies and
					individuals in the technology sector. Whether it may be a manufacturer
					or a leading cybersecurity community. When you partner with an MSP
					your organization gains access to the resources of those
					organizations. We are always there! You should always have someone to
					call when problems arise on your network. You cannot afford any
					downtime because downtime means lost revenue. With Radkon, there is
					always someone on the other side of the phone to answer your call-in
					need. An MSP does not take vacations or sick days, and your dedicated
					representative will get to know your organization, network and needs.
				</p>

				<p>
					MSP can save you money! Most of our day-to-day IT support services are
					based on a monthly subscription package. We take preventative measures
					to maintain the IT infrastructure, in such a way to minimize outages
					and breaks. Unlike Break/fix approach we can provide you with a
					monthly cost, so that you know how much you need to budget for.
				</p>
				<Link href="/msp/">
					<a>
						<button>READ MORE</button>
					</a>
				</Link>
				<br />
				<h1>CYBER CRIMINALS GOING AFTER SMALL BUSINESSES...</h1>
				<h1>CAN YOUR BUSINESS SURVIVE AN ATTACK?</h1>

				<h1>ARE YOU PREPARED?</h1>
				<p>
					On July 27, 2021, the United State Senate held a hearing, regarding
					the ever-growing ransomware attacks on businesses in the United
					States. This highlights the fact that small businesses aren’t immune
					or excluded from being a target.To the ever-growing need of
					cybersecurity Radkon is offering an affordable package for small
					businesses to get them started on the basic security needs. Just as
					Jeremy Sheridan, director of the Secret Service Cyber Fraud Task
					Forces pointed out “Even simple steps – such as keeping operating
					systems, software, and applications up-to-date and patched, or making
					sure that anti-virus and anti-malware solutions automatically update
					and run regular scans can significantly raise an organization’s
					defensive posture.” Radkon goes a step further and includes 24/7
					cybersecurity monitoring service with the basic package. By utilizing
					artificial intelligence and veteran cybersecurity experts. They
					monitor, isolate and remediate threats on your devices. During the
					initial implementation, Radkon will work with you on creating a
					timeline of your cybersecurity needs with an included risk assessment.
				</p>

				<Link href="/cyber-crime/">
					<a>
						<button>READ MORE</button>
					</a>
				</Link>
			</div>
		</>
	)
}
