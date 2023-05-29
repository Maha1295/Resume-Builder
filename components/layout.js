import Nav from './nav';

const Layout = ({children}) => {
  return (
    <div className='p-2 md:max-w-2xl md:mx-auto min-h-screen font-poppins bg-white pb-8'>
        <Nav/>
        <main className='px-2'>
            {children}
        </main>
    </div>
  )
}

export default Layout