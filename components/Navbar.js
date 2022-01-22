import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
	return (
		<nav>
			<div className="logo">
				<Image src="/logo.png" alt="site logo" width={162} height={82.5} />
				{/* <h1>RADKON.US</h1> */}
			</div>
			<Link href="/">
				<a>Home</a>
			</Link>
			<Link href="/businesses">
				<a>What We Do</a>
			</Link>
			{/* <Link href="/services">
				<a>Services</a>
			</Link> */}
			<Link href="/articles">
				<a>Articles</a>
			</Link>
			<Link href="/about">
				<a>About</a>
			</Link>
		</nav>
	)
}

export default Navbar
