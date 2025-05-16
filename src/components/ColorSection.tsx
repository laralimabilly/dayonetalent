function getColorValue(varName: string) {
    return getComputedStyle(document.documentElement).getPropertyValue(varName);
}

export default function ColorSection() {
    return(
        <>
            {/* Color Palette Section */}
            <section className="section bg-primary-light">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Color System</h2>
                        <p className="text-secondary/80">Carefully crafted tones that work harmoniously together</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Primary Color */}
                        <div className="bg-primary rounded-lg overflow-hidden">
                            <div className="h-48 flex items-center justify-center">
                                <h3 className="text-2xl font-semibold">Primary</h3>
                            </div>
                            <div className="bg-primary-light p-6">
                                <div className="flex justify-between items-center mb-2">
                                    <span>Main</span>
                                    <span className="font-mono text-sm">{getColorValue('--color-primary')}</span>
                                </div>
                                {/* <div className="flex justify-between items-center">
                                    <span>Light</span>
                                    <span className="font-mono text-sm">#414559</span>
                                </div> */}
                            </div>
                        </div>
                        
                        {/* Secondary Color */}
                        <div className="bg-secondary rounded-lg overflow-hidden">
                            <div className="h-48 flex items-center justify-center">
                                <h3 className="text-2xl font-semibold text-primary">Secondary</h3>
                            </div>
                            <div className="bg-secondary-dark p-6">
                                <div className="flex justify-between items-center mb-2 text-primary">
                                    <span>Main</span>
                                    <span className="font-mono text-sm">{getColorValue('--color-secondary')}</span>
                                </div>
                                {/* <div className="flex justify-between items-center text-primary">
                                    <span>Dark</span>
                                    <span className="font-mono text-sm">#BFC0C2</span>
                                </div> */}
                            </div>
                        </div>
                        
                        {/* Accent Color */}
                        <div className="bg-accent rounded-lg overflow-hidden">
                            <div className="h-48 flex items-center justify-center">
                                <h3 className="text-2xl font-semibold text-white">Accent</h3>
                            </div>
                            <div className="bg-accent-dark p-6 text-white">
                                <div className="flex justify-between items-center mb-2">
                                    <span>Main</span>
                                    <span className="font-mono text-sm">{getColorValue('--color-accent')}</span>
                                </div>
                                {/* <div className="flex justify-between items-center">
                                    <span>Light</span>
                                    <span className="font-mono text-sm">#E69937</span>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
} 