import './App.css'
import { Button } from "@/components/ui/button"
import { useGetMovieListQuery } from './features/slice/api-slice';

function App() {
  const  {data: moviesList} = useGetMovieListQuery({});

  
console.log(moviesList)
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}

export default App
