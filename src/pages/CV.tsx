import type React from "react"

const CV: React.FC = () => {
    return (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col sm:flex-row items-start justify-between gap-3">
                <h1 className="text-3xl font-bold">CV</h1>
                <div className="flex gap-2">
                    <a 
                    href="/CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                    >
                        Öppna i ny flik
                    </a>
                    <a 
                    href="/CV.PDF"
                    download
                    className="btn brn-primary"
                    >
                        Ladda ner PDF
                    </a>
                </div>
            </div>

            <div className="mt-6 card overflow-hidden">
                <object
                    data="/CV.pdf#view=FitH"
                    type="application/pdf"
                    className="w-full"
                    style={{ height: "80vh" }}
                    >
                <iframe 
                    title="CV"
                    src="/CV.pdf"
                    className="w-full"
                    style={{ height: "80vh" }}
                    />
                 </object>
            </div>
        </section>
    )
}

export default CV