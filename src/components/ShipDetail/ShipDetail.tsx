import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Ship } from "../../types/ship";
import shipsData from "../../../ships.json";
import "./ShipDetail.css";

const ShipDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [ship, setShip] = useState<Ship | null>(null);

  useEffect(() => {
    const foundShip = shipsData.ships.find((s) => s.legacy_id === id);
    if (foundShip) {
      setShip(foundShip as Ship);
    }
  }, [id]);

  if (!ship) {
    return <div className="ship-detail">Ship not found</div>;
  }

  return (
    <div className="ship-detail">
      <h1>{ship.legacy_id}</h1>
      <div className="detail-grid">
        <div className="detail-section">
          <h2>Basic Information</h2>
          <p>
            <strong>Type:</strong> {ship.type}
          </p>
          <p>
            <strong>Model:</strong> {ship.model || "N/A"}
          </p>
          <p>
            <strong>Year Built:</strong> {ship.year_built || "N/A"}
          </p>
          <p>
            <strong>Home Port:</strong> {ship.home_port}
          </p>
          <p>
            <strong>Status:</strong> {ship.status || "N/A"}
          </p>
        </div>

        <div className="detail-section">
          <h2>Specifications</h2>
          <p>
            <strong>Mass:</strong>{" "}
            {ship.mass_kg !== null && ship.mass_lbs !== null
              ? `${ship.mass_kg.toLocaleString()} kg (${ship.mass_lbs.toLocaleString()} lbs)`
              : "N/A"}
          </p>
          <p>
            <strong>IMO:</strong> {ship.imo || "N/A"}
          </p>
          <p>
            <strong>MMSI:</strong> {ship.mmsi || "N/A"}
          </p>
          <p>
            <strong>ABS:</strong> {ship.abs || "N/A"}
          </p>
          <p>
            <strong>Class:</strong> {ship.class || "N/A"}
          </p>
        </div>

        <div className="detail-section">
          <h2>Current Status</h2>
          <p>
            <strong>Last AIS Update:</strong> {ship.last_ais_update || "N/A"}
          </p>
          <p>
            <strong>Speed:</strong>{" "}
            {ship.speed_kn !== null ? `${ship.speed_kn} knots` : "N/A"}
          </p>
          <p>
            <strong>Course:</strong>{" "}
            {ship.course_deg !== null ? `${ship.course_deg}°` : "N/A"}
          </p>
          <p>
            <strong>Position:</strong>{" "}
            {ship.latitude !== null && ship.longitude !== null
              ? `${ship.latitude.toFixed(6)}, ${ship.longitude.toFixed(6)}`
              : "N/A"}
          </p>
        </div>

        <div className="detail-section">
          <h2>Roles</h2>
          <ul className="roles-list">
            {ship.roles.map((role, index) => (
              <li key={index}>{role}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShipDetail;
