import Nav from "./nav"

const Layout = ({ children, destination, seo }) => (
  <>
    <Nav destination={destination} />
    {children}
  </>
)

export default Layout
