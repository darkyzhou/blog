export function Analytics() {
  if (import.meta.env.DEV) {
    return null
  }

  return (
    <script
      src="https://app.rybbit.io/api/script.js"
      data-site-id="413"
      defer
    />
  )
}
