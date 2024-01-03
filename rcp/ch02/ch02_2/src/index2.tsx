import ReactDOM from 'react-dom/client'

const children = [0, 1, 2].map((n: number) => <h3>Hello world! {n}</h3>)
const rootVirtualDOM = <div>{children}</div>

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(rootVirtualDOM)
