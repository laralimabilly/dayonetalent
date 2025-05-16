import { ChevronRight } from 'lucide-react'

export default function ComponentSection() {
    return(
        <>
            {/* Components Preview */}
            <section className="section bg-primary-light">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12">Components</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Buttons */}
                        <div>
                            <h3 className="text-2xl mb-6 text-accent">Buttons</h3>
                            <div className="space-y-4">
                                <div>
                                    <button className="bg-primary text-white hover:bg-white hover:text-primary transition-colors px-8 py-3 rounded-full font-medium">
                                            Primary Button
                                    </button>
                                    <p className="text-sm text-secondary-dark/60 mt-2 font-mono">btn-primary</p>
                                </div>
                                <div>
                                    <button className="bg-accent text-primary hover:bg-white hover:text-primary transition-colors px-8 py-3 rounded-full font-medium">
                                            Secondary Button
                                    </button>
                                    <p className="text-sm text-secondary-dark/60 mt-2 font-mono">btn-secondary</p>
                                </div>
                                <div>
                                    <button className="text-accent hover:text-accent-light flex items-center">
                                        Text Button <ChevronRight size={16} className="ml-1" />
                                    </button>
                                    <p className="text-sm text-secondary-dark/60 mt-2 font-mono">text-accent with icon</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Cards */}
                        <div>
                            <h3 className="text-2xl mb-6 text-accent">Cards</h3>
                            <div className="space-y-6">
                                <div className="bg-primary p-6 rounded-lg">
                                    <h4 className="text-xl font-semibold mb-3">Card Title</h4>
                                    <p className="text-secondary-dark/80 mb-4">A simple card component with a primary background.</p>
                                    <button className="text-accent hover:text-accent-light flex items-center text-sm">
                                        Learn More <ChevronRight size={16} className="ml-1" />
                                    </button>
                                </div>
                                
                                <div className="bg-accent/10 border border-accent/20 p-6 rounded-lg">
                                    <h4 className="text-xl font-semibold mb-3 text-accent">Feature Card</h4>
                                    <p className="text-secondary-dark/80 mb-4">A highlighted card with an accent background.</p>
                                    <button className="btn-primary text-sm">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}