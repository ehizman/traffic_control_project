const Login = () => {
  const handleInput = (e: any) => {
    console.log(e);
  };

  return (
    <div className="auth_login">
      <div>
        <label htmlFor="userName">Username</label>
      </div>
      <div>
        <input
          type="text"
          name="username"
          onChange={handleInput}
          placeholder={"Enter username"}
        />
      </div>
    </div>
  );
};
export default Login;
