export default function Page () {
  return (
    <div style={{ border: '1px solid black', padding: '8px', marginBottom: '200px'}}>
      This content should not be scrolled into view when initially navigating to /blog .... scroll up to see the start of the page

      <p>This scrolling only happens if you navigate here using a next-link component</p>
    </div>
  )
}