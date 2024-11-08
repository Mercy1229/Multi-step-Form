import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormPage from './components/FormPage';
import MultiStepForm from './components/MultiStepForm';
import SelectPlan from './components/SelectPlan';
import AddOns from './components/AddOns';
import { Provider } from 'react-redux';
import store from './store';
import Confirmation from './components/Confirmation';
import Summary from './components/Summary';

function App() {
  return (
    <Provider store={store}>
    <div className='bg-slate-200 min-h-screen py-16'>
      <Router>
        <Routes>
          <Route path="/" element={<FormPage />}>
            <Route index element={<MultiStepForm />} />
            <Route path="selectplan" element={<SelectPlan />} />
            <Route path="addons" element={<AddOns />} />
            <Route path="Confirmation" element={<Confirmation />} />
            <Route path="summary" element={<Summary />} />
          </Route>
        </Routes>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
