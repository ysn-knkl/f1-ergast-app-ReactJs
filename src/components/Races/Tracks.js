import React from "react";
const Tracks = ({ racer, championID }) => {
  const findChamp = () => {
    return championID === racer.Results[0].Driver.driverId;
  };
  return (
    <>
      <tr
        className="tableId"
        style={findChamp() ? { backgroundColor: "#20c997" } : null}
      >
        <td>{racer.Circuit.circuitName}</td>
        <td>{`${racer.Results[0].Driver.givenName} ${racer.Results[0].Driver.familyName}`}</td>
        <td>{racer.Results[0].Constructor.name}</td>
        <td>{racer.Results[0].laps}</td>
        <td>{racer.Results[0].grid}</td>
        <td>{racer.Results[0].Time.time}</td>
        <td>{racer.Results[0].points}</td>
      </tr>
    </>
  );
};

export default Tracks;
