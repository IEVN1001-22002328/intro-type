import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
//import './temaTS/01-tipos-bas.ts'
//import './temaTS/02-obj-interfaz-arre.ts'
//import './temaTS/03-funciones.ts'
//import './temaTS/04-desestructuracion.ts'
//import './temaTS/05-desestructuracion de funciones.ts'
import './temaTS/06-importar-exportar.ts'
import './temaTS/07-clases.ts'
import './temaTS/08-herencia.ts'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
