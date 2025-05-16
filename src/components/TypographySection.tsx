export default function TypographySection() {
    return(
        <>
            {/* Typography Section */}
            <section className="section">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12">Typography</h2>
                        
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl mb-4 text-accent">Headings</h3>
                                <div className="space-y-4">
                                    <div>
                                        <h1 className="text-5xl font-bold">Heading 1</h1>
                                        <p className="text-sm text-secondary-dark/60 mt-2 font-mono">font-serif text-5xl font-bold</p>
                                    </div>
                                    <div>
                                        <h2 className="text-4xl font-bold">Heading 2</h2>
                                        <p className="text-sm text-secondary-dark/60 mt-2 font-mono">font-serif text-4xl font-bold</p>
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-bold">Heading 3</h3>
                                        <p className="text-sm text-secondary-dark/60 mt-2 font-mono">font-serif text-3xl font-bold</p>
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-bold">Heading 4</h4>
                                        <p className="text-sm text-secondary-dark/60 mt-2 font-mono">font-serif text-2xl font-bold</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div>
                                <h3 className="text-2xl mb-4 text-accent">Body Text</h3>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-lg">Large Paragraph: The quick brown fox jumps over the lazy dog.</p>
                                        <p className="text-sm text-secondary-dark/60 mt-2 font-mono">font-sans text-lg</p>
                                    </div>
                                    <div>
                                        <p>Regular Paragraph: The quick brown fox jumps over the lazy dog.</p>
                                        <p className="text-sm text-secondary-dark/60 mt-2 font-mono">font-sans text-base</p>
                                    </div>
                                    <div>
                                        <p className="text-sm">Small Text: The quick brown fox jumps over the lazy dog.</p>
                                        <p className="text-sm text-secondary-dark/60 mt-2 font-mono">font-sans text-sm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}