import PropTypes from "prop-types";

function Main(props) {
  return (
    <main>
      <div className="container">
        <h1 id="heading">Welcome to {props.appName}</h1>
        <div className="div-user-info">
          <table border="1" className="table-users">
            <caption>User info</caption>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Profession</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{props.userInfo.name}</td>
                <td>{props.userInfo.age}</td>
                <td>{props.userInfo.profession}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

Main.prototypes = {
  appName: PropTypes.string,
  userInfo: PropTypes.object,
};

Main.defaultProps = {
    appName : "BrandName",
    userInfo: {
      name: "Sita",
      age: 21,
      profession: "Teacher",
    },
  };

export default Main;
