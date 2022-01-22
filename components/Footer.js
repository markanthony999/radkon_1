import Image from 'next/image'

const Footer = () => {
	return (
		<>
			<div className="image">
				<Image src="/intel.png" alt="site logo" width={100} height={100} />
				<Image src="/lenovo.png" alt="site logo" width={100} height={100} />
				<Image
					src="/Google_Partner_Education.png"
					alt="site logo"
					width={140}
					height={100}
				/>
				<Image
					src="/Google_Partner_Work.png"
					alt="site logo"
					width={140}
					height={100}
				/>
			</div>
			<footer>Copyright 2022 Radkon.US</footer>
			<style jsx>{`
				.image {
					display: block;
					margin-left: auto;
					margin-right: auto;
					width: 45%;
					border-radius: 5px;
					background: white;
					padding: 0.5rem;
				}
			`}</style>
		</>
	)
}

export default Footer
