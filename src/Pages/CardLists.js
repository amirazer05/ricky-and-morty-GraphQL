import React from "react";
import { Link } from "react-router-dom";

function CardLists({ actor }) {
  return (
    <>
      <Link to={`/actor/${actor.id}`}>
        <div className="serviceContainer">
          <div className="containerTiles">
            <div className="repoTile">
              <div className="repoContainer">
                <img src={actor.image} alt={actor.image} />
                <div className="repoContainer-info">
                  <div className="repositoryName">
                    <h3>{actor.name}</h3>
                  </div>
                  <div className="repositoryForks">
                    <span className="green">Gender: {actor.gender}</span>
                  </div>
                </div>

                <div className="overview">
                  <h4>
                    Status:{" "}
                    <span
                      className="statusSpan"
                      style={
                        actor.status === "Alive"
                          ? { color: "green" }
                          : actor.status === "Dead"
                          ? { color: "red" }
                          : { color: "gray" }
                      }
                    >
                      {actor.status}
                    </span>{" "}
                  </h4>
                  <Link
                    className="repoLinkBtn"
                    rel="noreferrer"
                    to={`/actor/${actor.id}`}
                  >
                    See More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default CardLists;
