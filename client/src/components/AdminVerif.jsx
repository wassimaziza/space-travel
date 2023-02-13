import React,{useState} from 'react'

function Admin(props) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const correctPassword = "secret123";

  function handleSubmit(e) {
    e.preventDefault();
    if (password === correctPassword) {
      props.changeView("option");
    } else {
      setError("Invalid password, please try again.");
    }
  }

  return (
    <div className="admin-page">
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Enter password/code"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Enter</button>
      </form>
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default Admin