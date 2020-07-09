import fetch from 'node-fetch'

function Page({ data }) {
  console.log('data', JSON.stringify(data))
  // Render data...
  return <div>HOLA</div>
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3030/api/event`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default Page