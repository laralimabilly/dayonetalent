export default function CTASection() {
    return(
        <>
            {/* Call to Action */}
            <section className="section bg-secondary rounded-section">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Ready to Get Started?</h2>
                    <p className="text-dark mb-8 max-w-2xl mx-auto">
                        Bridging the gap between visionary companies and transformative talent. Whether you're scaling a startup or leading a Fortune 500, we deliver recruitment solutions that drive organizational success.
                    </p>
                    <button className="bg-accent text-light hover:bg-primary hover:text-white transition-colors px-8 py-3 rounded-full font-medium">
                        Transform Your Organization
                    </button>
                </div>
            </section>
        </>
    );
}