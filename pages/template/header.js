import Head from 'next/head'

 function Header() {
  return (
    <div>
      <Head>
        <title>Baolyus Steel</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Head>
        <meta property="og:title" content="My new title" key="title" />
      </Head>
      <h2>Wardner</h2>
     </div>
  )
}

 export default Header;