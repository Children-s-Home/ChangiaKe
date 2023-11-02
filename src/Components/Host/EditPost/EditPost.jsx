
function EditPost() {
   function logOut() {
     localStorage.removeItem("loggedin");
   }
  return (
    <div>
      EditPost
      <button onClick={logOut}>LogOut</button>
    </div>
  );
}

export default EditPost