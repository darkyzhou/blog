export function Analytics() {
  if (import.meta.env.DEV) {
    return null
  }

  return (
    <script
      src="https://insights.seele.gg/api/script.js"
      data-site-id="2"
      data-web-vitals="true"
      defer
    />
  )
}
