// import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<>
			<Header />
			<div className={styles.container}>
				<div className={styles.container}>
					<h1>HEADLINE</h1>
				</div>
				<div className={styles.child}>
					<h2>ARE YOUR EMPLOYEES' CREDENTIALS ON THE DARK WEB?</h2>
					<h2>WE NAVIGATE THE DARK WEB SO YOU DON'T HAVE TO!</h2>

					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam natus
						blanditiis inventore quia ab sed est ratione atque? Fuga, voluptates
						doloribus assumenda sit sequi ipsum perferendis unde eligendi rem!
						Ducimus voluptates, repellendus iusto adipisci nostrum cum impedit
						optio minus dolore cumque dicta vero. Laudantium laboriosam, dolores
						iste alias officiis laborum?
					</p>
					<Link href="/darkweb/">
						<a>
							<button>READ MORE</button>
						</a>
					</Link>
				</div>
				<div className={styles.child}>
					<Image
						src="/imgs/crime.jpg"
						alt="Picture of the author"
						width={700}
						height={500}
					/>
				</div>
				<div className={styles.container}>
					<h1>HEADLINE</h1>
				</div>
				<div className={styles.child}>
					<Image
						src="/imgs/img1.jpg"
						alt="Picture of the author"
						width={700}
						height={500}
					/>
				</div>

				<div className={styles.child}>
					<h2>WHY SHOULD I CHOOSE AN MSP FOR MY IT NEEDS?</h2>
					<h2>BENEFITS OF USING A MANAGED SERVICE PROVIDER</h2>

					<p>
						A managed service provider has built relationships with companies
						and individuals in the technology sector. Whether it may be a
						manufacturer or a leading cybersecurity community. When you partner
						with an MSP your organization gains access to the resources of those
						organizations. We are always there! You should always have someone
						to call when problems arise on your network. You cannot afford any
						downtime because downtime means lost revenue.
					</p>
					<Link href="/msp/">
						<a>
							<button>READ MORE</button>
						</a>
					</Link>
				</div>
				<div className={styles.container}>
					<h1>HEADLINE</h1>
				</div>
				<div className={styles.child}>
					<h2>CYBER CRIMINALS GOING AFTER SMALL BUSINESSES...</h2>
					<h2>CAN YOUR BUSINESS SURVIVE AN ATTACK?</h2>
					<h2>ARE YOU PREPARED?</h2>

					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam natus
						blanditiis inventore quia ab sed est ratione atque? Fuga, voluptates
						doloribus assumenda sit sequi ipsum perferendis unde eligendi rem!
						Ducimus voluptates, repellendus iusto adipisci nostrum cum impedit
						optio minus dolore cumque dicta vero. Laudantium laboriosam, dolores
						iste alias officiis laborum?
					</p>

					<Link href="/cyber-crime/">
						<a>
							<button>READ MORE</button>
						</a>
					</Link>
				</div>
				<div className={styles.child}>
					<Image
						src="/imgs/img2.jpg"
						alt="Picture of the author"
						width={700}
						height={500}
					/>
				</div>
			</div>
		</>
	)
}
