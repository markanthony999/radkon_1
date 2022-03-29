import Image from 'next/image'

import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	useQuery,
	gql,
} from '@apollo/client'
import styles from '../styles/Home.module.css'
import Header from '../components/Header2'

export default function Articles({ posts }) {
	return (
		<>
			<Header />
			<div className={styles.container}>
				<h1>Articles (links) </h1>
				<ul>
					<li>- CYBER CRIMINALS GOING AFTER SMALL BUSINESSES</li>
					<li>- BENEFITS OF USING A MANAGED SERVICE PROVIDER</li>
					<li> - WHEN IS THE RIGHT TIME TO UPGRADE YOUR COMPUTER FLEET?</li>
					<li>
						- TWO QUESTIONS TO ASK YOURSELF WHEN BUYING TECHNOLOGY FOR THE
						CLASSROOM
					</li>
					<li>- FREE WINDOWS 10 UPGRADE DEADLINE (JULY 29, 2016)</li>
					<li>- AFFORDABLE IT SUPPORT</li>
				</ul>
				{posts.map((post) => {
					return (
						<>
							<a key={post.title} href="#">
								<h3>{post.title}</h3>
							</a>
							{post.featuredImage}
							<div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
						</>
					)
				})}
			</div>
		</>
	)
}

export async function getStaticProps() {
	const client = new ApolloClient({
		uri: 'https://dbart-sandbox.azurewebsites.net/graphql',
		cache: new InMemoryCache(),
	})

	const response = await client.query({
		query: gql`
			query MyQuery {
				posts {
					edges {
						node {
							title
							uri
							excerpt
							content
						}
					}
				}
			}
		`,
	})
	const posts = response.data.posts.edges.map(({ node }) => node)

	return {
		props: { posts },
	}
}
