import './App.css'

function App() {
  return (
    <>
      <h1 className="text-4xl mb-8">Tic tac toe</h1>
      <div className="grid grid-cols-3 w-96 h-96">
        <div className="border-b border-e"></div>
        <div className="border-b border-e border-s"></div>
        <div className="border-b border-s"></div>
        <div className="border-b border-t border-e"></div>
        <div className="border"></div>
        <div className="border-b border-s border-t"></div>
        <div className="border-e border-t"></div>
        <div className="border-e border-s border-t"></div>
        <div className="border-s border-t"></div>
      </div>
    </>
  )
}

export default App
  