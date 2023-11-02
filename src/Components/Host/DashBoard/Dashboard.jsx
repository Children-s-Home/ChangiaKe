
function Dashboard() {
  function logOut() {
    localStorage.removeItem("loggedin");
  }
  return (
    <div>Dashboard
      <button onClick={logOut} >LogOut</button>
    </div>
  )
}

export default Dashboard