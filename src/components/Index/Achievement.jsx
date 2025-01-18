const Achievements = () => {
    const achievements = [
        'Tax Reforms',
        'Strong Economy',
        'America First Policies',
        'Historic Peace Agreements',
    ];

    return (
        <section id="achievements" className="bg-white py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold text-blue-800 mb-8">Achievements</h2>
                <ul className="space-y-4">
                    {achievements.map((item, index) => (
                        <li key={index} className="text-xl text-gray-700">{item}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Achievements;
