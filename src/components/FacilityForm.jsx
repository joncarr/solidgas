import { createSignal } from "solid-js";

const FacilityForm = (props) => {
    // Signals for form fields
    const [firstName, setFirstName] = createSignal("");
    const [lastName, setLastName] = createSignal("");
    const [email, setEmail] = createSignal("");
    const [facilityName, setFacilityName] = createSignal("");
    const [facilityLocation, setFacilityLocation] = createSignal("");
    const [actionType, setActionType] = createSignal("");

    const APP_URL="https://script.google.com/macros/s/AKfycbxquoAAaj3iFDZoeLu3G3U5rq0SlfC6gy3gibmoZ1lgC9iKV0IMYv_46kD6yuWwJHI5/exec";

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            repFirstName: firstName(),
            repLastName: lastName(),
            repEmail: email(),
            facilityName: facilityName(),
            facilityLocation: facilityLocation(),
            actionType: actionType(),
        };

        fetch(APP_URL, {
            method: 'POST',
        })
            .then(response => response.text())
            .then(data => console.log(data))
            .catch(error => console.error(error));




        // Send data to AppsScript to populate the spreadsheet with the facility data here


        console.log("Form Data:", formData);

        props.setActionType?.(actionType());

        // Reset form if needed
        // setFirstName("");
        // setLastName("");
        // setEmail("");
        // setFacilityName("");
        // setFacilityLocation("");
        // setActionType("");
    };

    return (
        <form id="facility-info" onSubmit={handleSubmit}>
            <h2 className="text-base/7 font-semibold text-gray-900">Facility Information</h2>
            <p className="mt-1 text-sm/6 text-gray-600">
                The information in this section of the form refers to facility representatives and not patients
            </p>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-900">
                        Facility Rep First Name
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            id="first-name"
                            name="repFirstName"
                            autoComplete="given-name"
                            className="block w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:border-[#143c44] focus:outline-none sm:text-sm"
                            required
                            value={firstName()}
                            onInput={(e) => setFirstName(e.currentTarget.value)}
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-900">
                        Facility Rep Last Name
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="block w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:border-[#143c44] focus:outline-none sm:text-sm"
                            required
                            value={lastName()}
                            onInput={(e) => setLastName(e.currentTarget.value)}
                        />
                    </div>
                </div>

                <div className="sm:col-span-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                        Facility Rep Email Address
                    </label>
                    <div className="mt-2">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="block w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:border-[#143c44] focus:outline-none sm:text-sm"
                            required
                            value={email()}
                            onInput={(e) => setEmail(e.currentTarget.value)}
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="facility-name" className="block text-sm font-medium text-gray-900">
                        Facility Name
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="facility-name"
                            id="facility-name"
                            className="block w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:border-[#143c44] focus:outline-none sm:text-sm"
                            required
                            value={facilityName()}
                            onInput={(e) => setFacilityName(e.currentTarget.value)}
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="facility-location" className="block text-sm font-medium text-gray-900">
                        Facility Location
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="facility-location"
                            id="facility-location"
                            className="block w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:border-[#143c44] focus:outline-none sm:text-sm"
                            value={facilityLocation()}
                            onInput={(e) => setFacilityLocation(e.currentTarget.value)}
                        />
                    </div>
                </div>

                <div className="sm:col-span-4">
                    <label htmlFor="action-type" className="block text-sm font-medium text-gray-900">
                        Action Type
                    </label>
                    <div className="mt-2 relative">
                        <select
                            id="action-type"
                            name="action-type"
                            className="block w-full rounded-md border border-gray-300 bg-white py-1.5 pl-3 pr-10 text-base text-gray-900 appearance-none focus:border-[#143c44] focus:outline-none sm:text-sm"
                            required
                            value={actionType()}
                            onInput={(e) => {
                                setActionType(e.currentTarget.value);
                            }}
                        >
                            <option value="">Select action type...</option>
                            <option value="admission">Admission</option>
                            <option value="discharge">Discharge</option>
                            <option value="stepup">Step-Up</option>
                            <option value="stepdown">Step-Down</option>
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
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button id="cancelBtn" type="button" className="text-sm font-semibold text-gray-900">
                    Cancel
                </button>
                <button
                    id="submitBtn"
                    type="submit"
                    className="rounded-md bg-[#dd5e3c] px-3 py-2 text-sm font-semibold text-white hover:bg-[#c74d2e] focus:outline-none focus:ring-2 focus:ring-[#dd5e3c] focus:ring-offset-2"
                >
                    Save
                </button>
            </div>
        </form>
    );
};

export default FacilityForm;