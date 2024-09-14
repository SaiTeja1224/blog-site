async function Layout({ children }: { children: React.ReactNode }) {
    return <article className="base-container">{children}</article>;
  }
  
  export default Layout;