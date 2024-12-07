import { useState, memo } from 'react';
import { services, missions } from './Home.data';


const Home = () => {
    const [showMoreServices, setShowMoreServices] = useState(false);
    const toggleServices = () => {
        setShowMoreServices(!showMoreServices);
    };

    return (
        <div className="container p-5">
            {/* Header */}
            <h4 className="text-center fw-bold mb-5">Profil Rumah Sakit Sehat Sejahtera</h4>

            {/* Visi */}
            <div className="mb-5">
                <i className="text-success fw-bold fs-4">Visi</i>
                <p>
                    Menjadi rumah sakit terkemuka dalam layanan kesehatan spesialis jantung
                    dan saraf yang terpercaya dengan berbasis teknologi modern.
                </p>
            </div>

            {/* Misi */}
            <div className="mb-5">
                <i className="text-success fw-bold fs-4">Misi</i>
                <ol>
                {missions.map((mission, index) => (
                    <li key={index}>{mission.description}</li>
                ))}
                </ol>
            </div>

            {/* Layanan Unggulan */}
            <div className="mb-5">
                <i className="text-success fw-bold fs-4">Layanan Unggulan</i>
                {services.slice(0, 2).map((service, index) => (
                    <div key={index} className="mt-3 px-3">
                        <h5 className="fw-semibold">{index + 1}. {service.title}:</h5>
                        <ul style={{ listStyleType: 'circle' }}>
                            {service.items.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
                {showMoreServices && (
                    <div className="mt-3 px-3">
                        <h5 className="fw-semibold" style={{ marginTop: '20px' }}>3. {services[2].title}:</h5>
                        <ul style={{ listStyleType: 'circle' }}>
                            {services[2].items.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                )}
                <button
                    className="btn btn-link mt-3"
                    onClick={toggleServices}
                >
                    {showMoreServices ? "Tutup Layanan Tambahan" : "Lihat Layanan Tambahan"}
                </button>
            </div>
        </div>
    );
};

export default memo(Home);
