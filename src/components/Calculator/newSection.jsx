function NewSection() {
    return (
        <div>
            {/* Your new section content goes here */}
            <div className="flex flex-col">
                <label htmlFor="Number" className="flex justify-center text-2xl">Power Consumption:</label>
                <input type="Number" className="h-10 w-56 text-center" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="number" className="flex justify-center text-2xl">Hours Usage:</label>
                <input type="number" className="h-10 w-56 text-center" min="0" max={24} />
            </div>
        </div>
    );
}

export default NewSection;