import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import SeasonalRace from "../Races/SeasonalRace";
import { ArrowDownOutlined } from "@ant-design/icons";

const ChampItem = ({ user, closeHandle, clickIndex, index }) => {
  const [isTableSelected, setIsTableSelected] = useState(clickIndex === index);
  const [setYear, setsetYear] = useState(null);
  const [championID, setchampionID] = useState("");

  const handleClick=(season, driverId)=> {
    setIsTableSelected(true);
    setsetYear(season);
    setchampionID(driverId);
    closeHandle(index);
  }

  useEffect(() => {
    if (index !== clickIndex) {
      setIsTableSelected(false);
    }
  }, [clickIndex]);

  return (
    <div style={styles.component} >
      {isTableSelected ? (
        <SeasonalRace
          setYear={setYear}
          championID={championID}
          closeResult={() => setIsTableSelected(false)}
        />
      ) : (
        <Table
          striped
          bordered
          hover
          className="border border-1 border-dark hover-cursor"
          onClick={() =>
            handleClick(user.season, user.DriverStandings[0].Driver.driverId)
          }
          
        >
          <thead>
            <tr>
              <th colSpan="4" data-testid="champ-info">Season:{user.season} Champion</th>
              <th colSpan="1">
                <ArrowDownOutlined />
              </th>
            </tr>
            <tr>
              <th>Driver</th>
              <th>Constructor</th>
              <th>Points</th>
              <th>Round</th>
              <th>Wins</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{`${user.DriverStandings[0].Driver.givenName} ${user.DriverStandings[0].Driver.familyName}`}</td>
              <td>{user.DriverStandings[0].Constructors[0].name}</td>
              <td>{user.DriverStandings[0].points}</td>
              <td>{user.round}</td>
              <td>{user.DriverStandings[0].wins}</td>
            </tr>
          </tbody>
        </Table>
      )}
    </div>
  );
};

const styles = {
  component: {
    backgroundColor: "#e5e5e5",
  },
};

export default ChampItem;
