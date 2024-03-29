import Head from 'next/head'
import Image from 'next/image'
import akamaiImageLoader from '../akamaiImageLoader';

export default function Home(props) {
    const url = 'https://demo.discoveryreplymedia.com/media-staging/6/6/42a238bd-80fc-4619-838a-4788936c2e41/083ba45a-5ddd-490f-bb4d-ea3ed9c39925.jpg';

    return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/*
      <img src={url} sizes="(max-width: 768px) 100vw, 50vw"
		        srcset={url + '?imwidth=800 50wm, '+ url +'?imwidth=1600 50wm'} />
    */}
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <div className='image'>
            
            <Image
                    src={url}
                    alt="prova prova"
                    width="3000"
                    height="3000"
                    loader={akamaiImageLoader}
                    sizes="(max-width: 768px) 100vw, (max-width: 768px) 100vw, 100vw"
            />
            
        </div>

        <div className="grid">
          {props.data.map(val => ( 
            <div key={val.id}>{val.title}</div>
          ))} 
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .image {
            width: 80%;
            height: 600px;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

export async function getStaticProps(context) {
    const res = await fetch('https://jsonplaceholder.typicode.com/albums')
    const data = await res.json()
  
    if (!data) {
        return {
            notFound: true,
        }
    }
    
    return {
      props: {
        // props for your component, that will be passed to the page component as props
        data: data
      }
    }
  }
/*
export async function getServerSideProps(context) {
  const res = await fetch('https://jsonplaceholder.typicode.com/albums')
  const data = await res.json()

  if (!data) {
      return {
          notFound: true,
      }
  }
  
  return {
    props: {
      // props for your component, that will be passed to the page component as props
      data: data
    }
  }
}
*/