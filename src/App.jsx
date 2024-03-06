import './App.css'
import FaultyComponent from './components/FaultyComponent.jsx'
import FaultyButton from './components/FaultyButton.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx';

function App() {
  return (
    <>
      <h1>React error handling example using ErrorBoundary</h1>

        FaultyComponent:
          <div className="componentFrame">
                <ErrorBoundary>

                        <FaultyComponent />
                </ErrorBoundary>
          </div>
        <hr/>
        FaultyButton:
          <div className="componentFrame">
            <ErrorBoundary>

                    <FaultyButton />
            </ErrorBoundary>
          </div>
    </>
  )
}

export default App