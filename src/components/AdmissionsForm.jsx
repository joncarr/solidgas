import { createSignal, Show } from "solid-js";

const AdmissionsForm = (props) => {
    // Signals for form fields
    const [patientFirstName, setPatientFirstName] = createSignal("");
    const [patientLastName, setPatientLastName] = createSignal("");
    const [vaReferralNumber, setVaReferralNumber] = createSignal("");
    const [vaAuthNumber, setVaAuthNumber] = createSignal("");
    const [patientDateOfBirth, setPatientDateOfBirth] = createSignal("");
    const [admissionDate, setAdmissionDate] = createSignal("");
    const [groupStartDate, setGroupStartDate] = createSignal("");
    const [daysPerWeek, setDaysPerWeek] = createSignal("");
    const [hoursPerDay, setHoursPerDay] = createSignal("");
    const [responsiblePayer, setResponsiblePayer] = createSignal("");
    const [vobSubmitted, setVobSubmitted] = createSignal("");
    const [treatmentType, setTreatmentType] = createSignal("");
    const [levelOfCare, setLevelOfCare] = createSignal("");
    const [daysOfWeek, setDaysOfWeek] = createSignal([]);
    const [notes, setNotes] = createSignal("");
    const [error, setError] = createSignal(null);

    // Handle checkbox changes
    const handleDaysOfWeekChange = (event) => {
        const { value, checked } = event.target;
        setDaysOfWeek((prev) =>
            checked ? [...prev, value] : prev.filter((day) => day !== value)
        );
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            patientFirstName: patientFirstName(),
            patientLastName: patientLastName(),
            vaReferralNumber: vaReferralNumber(),
            vaAuthNumber: vaAuthNumber(),
            patientDateOfBirth: patientDateOfBirth(),
            admissionDate: admissionDate(),
            groupStartDate: groupStartDate(),
            daysPerWeek: daysPerWeek(),
            hoursPerDay: hoursPerDay(),
            responsiblePayer: responsiblePayer(),
            vobSubmitted: vobSubmitted(),
            treatmentType: treatmentType(),
            levelOfCare: levelOfCare(),
            daysOfWeek: daysOfWeek(),
            notes: notes(),
            secret: import.meta.env.VITE_SECRET_KEY
        };

        try {
            const response = await fetch(props.endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                throw new Error(`Submission failed: ${response.status}`);
            }
            const result = await response.json();
            if (result.error) {
                throw new Error(result.error);
            }
            console.log("Success:", result);
            setError(null);
            // Optionally reset form
            setPatientFirstName("");
            setDaysOfWeek([]);
            // ... reset other fields
        } catch (err) {
            console.error("Error:", err);
            setError(err.message);
        }
    };

    return (
        <form id="admissions-form" method="POST" onSubmit={handleSubmit}>
            <h2 className="text-base/7 font-semibold text-gray-900">Admissions Information</h2>
            <p className="mt-1 text-sm/6 text-gray-600">Please provide details for the admission.</p>
            {error() && <p style="color: red;">Error: {error()}</p>}
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                    <label htmlFor="patient-first-name" className="block text-sm font-medium text-gray-900">
                        Patient First Name
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="patient-first-name"
                            id="patient-first-name"
                            autoComplete="given-name"
                            className="block w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:border-[#143c44] focus:outline-none sm:text-sm"
                            value={patientFirstName()}
                            onInput={(evt) => setPatientFirstName(evt.currentTarget.value)}
                        />
                    </div>
                </div>
                <div className="sm:col-span-3">
                    <label htmlFor="patient-last-name" className="block text-sm font-medium text-gray-900">
                        Patient Last Name
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="patient-last-name"
                            id="patient-last-name"
                            autoComplete="family-name"
                            className="block w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:border-[#143c44] focus:outline-none sm:text-sm"
                            value={patientLastName()}
                            onInput={(evt) => setPatientLastName(evt.currentTarget.value)}
                        />
                    </div>
                </div>
                <div className="sm:col-span-3">
                    <label htmlFor="patient-date-of-birth" className="block text-sm font-medium text-gray-900">
                        Patient Date of Birth
                    </label>
                    <div className="mt-2">
                        <input
                            type="date"
                            name="patient-date-of-birth"
                            id="patient-date-of-birth"
                            className="block w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:border-[#143c44] focus:outline-none sm:text-sm"
                            value={patientDateOfBirth()}
                            onInput={(evt) => setPatientDateOfBirth(evt.currentTarget.value)}
                        />
                    </div>
                </div>
                <div className="sm:col-span-4">
                    <label htmlFor="responsible-payer" className="block text-sm font-medium text-gray-900">
                        Responsible Payer
                    </label>
                    <div className="mt-2 relative">
                        <select
                            id="responsible-payer"
                            name="responsible-payer"
                            className="block w-full rounded-md border border-gray-300 bg-white py-1.5 pl-3 pr-10 text-base text-gray-900 appearance-none focus:border-[#143c44] focus:outline-none sm:text-sm"
                            value={responsiblePayer()}
                            onInput={(evt) => setResponsiblePayer(evt.currentTarget.value)}
                        >
                            <option value="">Select payer...</option>
                            <option value="Private Pay">Private Pay</option>
                            <option value="Scholarship">Scholarship</option>
                            <option value="Commercial Insurance">Commercial Insurance</option>
                            <option value="Veterans Affairs">Veterans Affairs</option>
                        </select>
                        <svg
                            className="absolute right-2 top-1/2 -translate-y-1/2 size-5 text-gray-500"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </div>
                <div className="sm:col-span-4">
                    <label htmlFor="vob-submitted" className="block text-sm font-medium text-gray-900">
                        Has a VOB been submitted to PBH?
                    </label>
                    <div className="mt-2 relative">
                        <select
                            id="vob-submitted"
                            name="vob-submitted"
                            className="block w-full rounded-md border border-gray-300 bg-white py-1.5 pl-3 pr-10 text-base text-gray-900 appearance-none focus:border-[#143c44] focus:outline-none sm:text-sm"
                            value={vobSubmitted()}
                            onInput={(evt) => setVobSubmitted(evt.currentTarget.value)}
                        >
                            <option value="">Select...</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        <svg
                            className="absolute right-2 top-1/2 -translate-y-1/2 size-5 text-gray-500"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </div>
                <Show when={responsiblePayer() === "Veterans Affairs"}>
                    <div className="sm:col-span-3">
                        <label htmlFor="va-referral-number" className="block text-sm font-medium text-gray-900">
                            VA Referral Number
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="va-referral-number"
                                id="va-referral-number"
                                className="block w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:border-[#143c44] focus:outline-none sm:text-sm"
                                value={vaReferralNumber()}
                                onInput={(evt) => setVaReferralNumber(evt.currentTarget.value)}
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-3">
                        <label htmlFor="va-auth-number" className="block text-sm font-medium text-gray-900">
                            VA Auth Number
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="va-auth-number"
                                id="va-auth-number"
                                className="block w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:border-[#143c44] focus:outline-none sm:text-sm"
                                value={vaAuthNumber()}
                                onInput={(evt) => setVaReferralNumber(evt.currentTarget.value)}
                            />
                        </div>
                    </div>
                </Show>
                <div className="sm:col-span-3">
                    <label htmlFor="admission-date" className="block text-sm font-medium text-gray-900">
                        Date of Admission
                    </label>
                    <div className="mt-2">
                        <input
                            type="date"
                            name="admission-date"
                            id="admission-date"
                            className="block w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:border-[#143c44] focus:outline-none sm:text-sm"
                            value={admissionDate()}
                            onInput={(evt) => setAdmissionDate(evt.currentTarget.value)}
                        />
                    </div>
                </div>
                <div className="sm:col-span-3">
                    <label htmlFor="treatment-type" className="block text-sm font-medium text-gray-900">
                        Treatment Type
                    </label>
                    <div className="mt-2 relative">
                        <select
                            id="treatment-type"
                            name="treatment-type"
                            className="block w-full rounded-md border border-gray-300 bg-white py-1.5 pl-3 pr-10 text-base text-gray-900 appearance-none focus:border-[#143c44] focus:outline-none sm:text-sm"
                            value={treatmentType()}
                            onInput={(evt) => setTreatmentType(evt.currentTarget.value)}
                        >
                            <option value="">Select treatment type...</option>
                            <option value="Substance Abuse">Substance Abuse</option>
                            <option value="Mental Health">Mental Health</option>
                        </select>
                        <svg
                            className="absolute right-2 top-1/2 -translate-y-1/2 size-5 text-gray-500"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </div>
                <div className="sm:col-span-3">
                    <label htmlFor="level-of-care" className="block text-sm font-medium text-gray-900">
                        Level of Care
                    </label>
                    <div className="mt-2 relative">
                        <select
                            id="level-of-care"
                            name="level-of-care"
                            className="block w-full rounded-md border border-gray-300 bg-white py-1.5 pl-3 pr-10 text-base text-gray-900 appearance-none focus:border-[#143c44] focus:outline-none sm:text-sm"
                            value={levelOfCare()}
                            onInput={(evt) => setLevelOfCare(evt.currentTarget.value)}
                        >
                            <option value="">Select level of care...</option>
                            <option value="Detox">Detox</option>
                            <option value="RTC">RTC</option>
                            <option value="PHP">PHP</option>
                            <option value="IOP">IOP</option>
                            <option value="OP">OP</option>
                        </select>
                        <svg
                            className="absolute right-2 top-1/2 -translate-y-1/2 size-5 text-gray-500"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </div>
                <div className="sm:col-span-3">
                    <label htmlFor="group-start-date" className="block text-sm font-medium text-gray-900">
                        Group Start Date
                    </label>
                    <div className="mt-2">
                        <input
                            type="date"
                            name="group-start-date"
                            id="group-start-date"
                            className="block w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:border-[#143c44] focus:outline-none sm:text-sm"
                            value={groupStartDate()}
                            onInput={(evt) => setGroupStartDate(evt.currentTarget.value)}
                        />
                    </div>
                </div>
                <div className="sm:col-span-3">
                    <label htmlFor="days-per-week" className="block text-sm font-medium text-gray-900">
                        Number of Days per Week
                    </label>
                    <div className="mt-2">
                        <input
                            type="number"
                            name="days-per-week"
                            id="days-per-week"
                            min="0"
                            max="7"
                            className="block w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:border-[#143c44] focus:outline-none sm:text-sm"
                            value={daysPerWeek()}
                            onInput={(evt) => setDaysPerWeek(evt.currentTarget.value)}
                        />
                    </div>
                </div>
                <div className="sm:col-span-4">
                    <label className="block text-sm font-medium text-gray-900">Days of the Week</label>
                    <div className="mt-2 space-y-2">
                        {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                            <div>
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        name="days-of-week"
                                        value={day}
                                        checked={daysOfWeek().includes(day)}
                                        onChange={handleDaysOfWeekChange}
                                        className="rounded border-gray-300 text-[#143c44] focus:ring-[#143c44]"
                                    />
                                    <span className="ml-2 text-sm text-gray-900">{day}</span>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="sm:col-span-3">
                    <label htmlFor="hours-per-day" className="block text-sm font-medium text-gray-900">
                        Number of Hours per Day
                    </label>
                    <div className="mt-2">
                        <input
                            type="number"
                            name="hours-per-day"
                            id="hours-per-day"
                            min="0"
                            className="block w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:border-[#143c44] focus:outline-none sm:text-sm"
                            value={hoursPerDay()}
                            onInput={(evt) => setHoursPerDay(evt.currentTarget.value)}
                        />
                    </div>
                </div>
                <div className="sm:col-span-6">
                    <label htmlFor="notes" className="block text-sm font-medium text-gray-900">
                        Notes or Comments
                    </label>
                    <div className="mt-2">
            <textarea
                name="notes"
                id="notes"
                rows="4"
                className="block w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:border-[#143c44] focus:outline-none sm:text-sm"
                value={notes()}
                onInput={(evt) => setNotes(evt.currentTarget.value)}
            ></textarea>
                    </div>
                </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                    type="button"
                    className="text-sm font-semibold text-gray-900"
                    onClick={() => window.location.href = "/"} // Adjust based on your routing
                >
                    Back
                </button>
                <button id="cancelBtn" type="button" className="text-sm font-semibold text-gray-900">
                    Cancel
                </button>
                <button
                    type="submit"
                    className="rounded-md bg-[#dd5e3c] px-3 py-2 text-sm font-semibold text-white hover:bg-[#c74d2e] focus:outline-none focus:ring-2 focus:ring-[#dd5e3c] focus:ring-offset-2"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default AdmissionsForm;