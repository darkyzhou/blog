export default function Index() {
  return <div>Index</div>
}

export async function getConfig() {
  return { render: 'static' } as const
}
