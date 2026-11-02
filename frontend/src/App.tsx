import {AppLayout} from "./layouts/AppLayout"
import { MovieCatalogView } from "./features/movies/components/MovieCatalogView"


function App() {
 

  return (
    <AppLayout>
      <MovieCatalogView/>
    </AppLayout>
  )
}

export default App
