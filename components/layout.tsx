import { NextPage } from "next"
import { ReactNode } from "react"


const Layout: NextPage<{children: ReactNode}> =({ children }) => {
  return (
    <div>{children}</div>
  )
}
export default Layout