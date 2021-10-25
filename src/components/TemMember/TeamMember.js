import "./TeamMember.css";

const TeamMember = (props) => {
  const { name, position, image } = props.member;
  return (
    <div className="col-4 text-center py-4">
      <img style={{ width: "50%", borderRadius: "20px" }} src={image} alt="" />
      <div>
        <h3 className="mt-3 text-danger">{name}</h3>
        <h6>{position}</h6>
      </div>
    </div>
  );
};

export default TeamMember;
