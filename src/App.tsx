import { Footer } from "./components/layout/footer"
import { Header } from "./components/layout/header"
import { CorridasConnection } from "./components/layout/corridasConnection"
import { ListaPulseiras } from "./components/layout/listaPulseiras"



function App() {
  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-white">
      <div className="flex flex-col gap-4 p-4 md:gap-5 md:p-6 lg:p-8">

        <Header />

        {/* MAIN */}
        <main className="flex flex-col gap-4 md:gap-5 lg:grid lg:grid-cols-2 lg:gap-6">

          {/* LISTAS */}
          
          <CorridasConnection />


          {/* LISTA 2: Pulseiras */}
          
          <ListaPulseiras />

        </main>

        {/* FOOTER */}
        <Footer />

      </div>
    </div>
  )
}

export default App
