import { memo } from 'react';
import { facilities, excellence, rooms } from './Facility.data';


function Facility() {
    return (
        <div className="container p-5">
            {/* Header */}
            <h4 className="text-center fw-bold mb-5">Fasilitas Rumah Sakit Sehat Sejahtera</h4>

            {/* Fasilitas */}
            <div className="mb-5">
                <i className="text-success fw-bold fs-4">Fasilitas</i>
                <ul>
                    {facilities.map((facility, index) => (
                        <li key={index}>{facility.description}</li>
                    ))}
                </ul>
            </div>

            {/* Keunggulan */}
            <div className="mb-5">
                <i className="text-success fw-bold fs-4">Keunggulan</i>
                <ul>
                    {excellence.map((facility, index) => (
                        <li key={index}>{facility.description}</li>
                    ))}
                </ul>
            </div>

            {/* Kamar */}
            <div className="container mt-4">
                <h2 className="text-success mb-4">Kamar</h2>
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead className="table-light">
                            <tr>
                                {rooms.map((room, index) => (
                                    <th key={index} className="text-center">{room.type}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {rooms.map((room, index) => (
                                    <td key={index} className="text-center">
                                        <img
                                            src={room.photo}
                                            alt={room.type}
                                            className="img-fluid mb-3 rounded-3"
                                            style={{ maxWidth: '100%', height: '200px', aspectRatio: '4/3' }}
                                        />
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                {rooms.map((room, index) => (
                                    <td key={index}>
                                        <ul className="list-unstyled">
                                            {room.facility.map((facility, idx) => (
                                                <li key={idx} className="mb-2">• {facility}</li>
                                            ))}
                                        </ul>
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default memo(Facility);
