import Header from '../components/Header3'
import styles from '../styles/Business.module.css'

export default function About() {
	return (
		<>
			<Header />

			<h1>ABOUT OUR COMPANY</h1>
			<div className={styles.container}>
				<div className={styles.child}>
					<p>
						RadKon is not your average IT company. We provide high quality
						consulting, hardware and services at affordable prices, as well as
						everything from design and set up of your network to IT support.
						RadKon is dedicated to providing high-end services to institutions,
						such as schools, companies and organizations that are interested in
						investing in technology. Upgrading technology can lead to a rise in
						productivity, as well as overall cash flow. Education is a vital
						part of society, and technology plays a significant role in todays
						education systems. As a result, more schools are slowly integrating
						technology into their curriculum. At RadKon, we understand the
						importance of technology in schools and are dedicated to helping
						schools integrate more of it into their own curriculum. We also work
						with schools that have already done so, but need to upgrade their
						system. For more information on our services, please visit our
						services tab. Radkon logo OUR MISSION Our mission is to provide the
						top service and products to all institutions that are looking into
						investing in technology. RadKon is dedicated to work with
						institutions on finding the best products to serve their needs. Not
						only are we dedicated to finding the best product, but to do so
						within the institution’s budget.
					</p>
				</div>
				<div className={styles.child}>
					<h1>IFRAME WON'T WORK WITHOUT SSL CAN WORK SANDBOX</h1>

					<h1>CONTACT INFO </h1>
					<h1>55 E MONROE, SUITE 3800 </h1>
					<h1>CHICAGO IL</h1>
					<h1>60603</h1>
				</div>
			</div>
		</>
	)
}
