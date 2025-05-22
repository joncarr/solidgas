import Header from "./components/Header.jsx";
import FacilityForm from "./components/FacilityForm.jsx";
import AdmissionsForm from "./components/AdmissionsForm.jsx";
import StepupForm from "./components/StepupForm.jsx";
import StepdownForm from "./components/StepdownForm.jsx";
import DischargeForm from "./components/DischargeForm.jsx";
import {createSignal, Show} from "solid-js";

function App() {

    const ENDPOINT = "https://script.google.com/macros/s/AKfycbw4eX3LafJobJ_x3NoA2gKAmafzApGtVU3NvjNcgfH3_R6r_JUxaPlpdSRQJCSSLdYw/exec"
    const [actionType, setActionType] = createSignal('facility-info');
    console.log(actionType());
    console.log(import.meta.env.VITE_GOOGLE_CLIENT)

  return (
      <>
      <div>
        <Header />
      </div>
      <div class="container max-w-3xl mx-auto p-6 mt-24">
          <Show when={actionType() === 'facility-info'}>
              <FacilityForm setActionType={setActionType} endpoint={ENDPOINT}/>
          </Show>
          <Show when={actionType() === 'admission'}>
            <AdmissionsForm endpoint={ENDPOINT} />
          </Show>
          <Show when={actionType() === 'stepup'}>
          <StepupForm endpoint={ENDPOINT} />
          </Show>
          <Show when={actionType() === 'stepdown'}>
          <StepdownForm endpoint={ENDPOINT} />
          </Show>
          <Show when={actionType() === 'discharge'}>
          <DischargeForm endpoint={ENDPOINT} />
          </Show>
      </div>
    </>
  );
}

export default App;
