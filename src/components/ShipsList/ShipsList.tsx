import { useState, useEffect } from "react";
import type { Ship } from "../../types/ship";
import "./ShipsList.css";
import { Link } from "react-router-dom";
import shipsData from "../../../ships.json";

const ITEMS_PER_PAGE = 6;

const ShipsList = () => {
  const [ships, setShips] = useState<Ship[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setShips(shipsData.ships as Ship[]);
  }, []);

  const totalPages = Math.ceil(ships.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentShips = ships.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="ships-list">
      <div className="ships-content">
        <div className="ships-header">
          <h1>SpaceX Ships</h1>
        </div>
        <div className="ships-grid">
          {currentShips.map((ship) => (
            <Link
              to={`/ship/${ship.legacy_id}`}
              key={ship.legacy_id}
              className="ship-card"
            >
              <h2>{ship.legacy_id}</h2>
              <div className="ship-info">
                <p>
                  <strong>Type:</strong> {ship.type}
                </p>
                <p>
                  <strong>Home Port:</strong> {ship.home_port}
                </p>
                <p>
                  <strong>Status:</strong> {ship.status || "N/A"}
                </p>
                <p>
                  <strong>Roles:</strong> {ship.roles.join(", ")}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="pagination">
          <button onClick={handlePreviousPage} disabled={currentPage === 1}>
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShipsList;
