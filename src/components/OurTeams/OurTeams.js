import { useEffect, useState } from "react";
import TeamMember from "../TemMember/TeamMember";

const OurTeams = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    fetch("./team.json")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);
  return (
    <div className="container">
      <div className="text-center py-5">
        <h1 className="text-warning">Our Teams</h1>
        <h2 className="text-danger">Our Expert Teams</h2>
      </div>
      <div className="row">
        {members.map((member) => (
          <TeamMember key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default OurTeams;
