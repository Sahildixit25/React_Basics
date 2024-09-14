import './App.css';
import CustomHooks from './CustomHooks';
import LifecycleDemo from './LifecycleDemo';
import UseCallBackEx from './UseCallBackEx';
import UseMemoEx from './UseMemoEx';

function App() {
  return (
    <div className="App">
     <UseCallBackEx />
     <hr />
     <UseMemoEx />
     <hr />
     <LifecycleDemo />
     <hr />
     <CustomHooks />
    </div>
  );
}

export default App;
