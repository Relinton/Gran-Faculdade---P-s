import Box from "@/components/Box";
import Pagina from "@/components/Pagina";

export default function Home() {
  return (
    <Pagina>
      <Box titulo="Hello World!">
        <p>Isto é um paragrafo</p>
        <p>Isto é mais um paragrafo.</p>
      </Box>

      <Box titulo="Relinton">
        <p>Isto é um paragrafo</p>
        <p>Isto é mais um paragrafo.</p>
        <button>Detalhar</button>
      </Box>

      <Box titulo="Outro Box">
        <p>Isto é um paragrafo</p>
        <p>Isto é mais um paragrafo.</p>
        <button>Detalhar</button>
        <p>Isto é um paragrafo</p>
        <p>Isto é mais um paragrafo.</p>
        <button>Detalhar</button>
      </Box>
    </Pagina>
  )
}
