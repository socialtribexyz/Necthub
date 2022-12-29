import Head from 'next/head';

const PageTitle = ({ title, ogImage = null }) => {
	return (
		<>
			<Head>
				<title>{title ?? 'Nectarhub'}</title>
				{/* Meta tags */}

				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="author" content="Nectarhub" />
				<link rel="icon" href="/assets/images/sac_icon.png" type="image/png" />

				<meta name="theme-color" content="#ffc547" />
				<meta name="msapplication-navbutton-color" content="#ffc547" />
				<meta name="apple-mobile-web-app-status-bar-style" content="#ffc547" />
				<meta name="robots" content="index, follow" />
				<meta
					name="description"
					content="Tip easily from nectarhub profile and tell everyone about your achievements."
				/>
				<meta name="keywords" content="blockchain, portfolio tracker, transaction analyze" />
				<meta itemProp="name" content="We are the foundation of WEB3! Join our beta pre-launch phase!!" />
				<meta itemProp="image" content={ogImage ?? 'https://nectarhub.xyz/assets/images/og_image.jpeg'} />

				{/* <!-- Twitter Card --> */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:creator" content="@Nectarhub_app" />
				<meta name="twitter:site" content="@Nectarhub_app" />
				<meta name="twitter:image" content={ogImage ?? 'https://nectarhub.xyz/assets/images/og_image.jpeg'} />

				{/* <!-- OpenGraph Card --> */}
				<meta property="og:title" content="We are the foundation of WEB3 ! Join our beta pre-launch phase!!" />
				<meta property="og:type" content="article" />
				<meta property="og:url" content="https://nectarhub.xyz/" />
				<meta property="og:image" content={ogImage ?? 'https://nectarhub.xyz/assets/images/og_image.jpeg'} />
				<meta
					property="og:description"
					content="Tip easily from nectarhub profile and tell everyone about your achievements."
				/>
				<meta property="og:site_name" content="Nectarhub" />
				<meta property="article:section" content="Article Section" />
				<meta property="article:tag" content="Article Tag" />
				<meta property="fb:admins" content="1212" />
				<meta name="next-head-count" content="33" />
			</Head>
		</>
	);
};

export default PageTitle;
