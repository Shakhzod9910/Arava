import { useRef } from "react";
import { Redirect } from "react-router-dom";
import { useState } from "react";
import Logo from "../../Assets/img/Arava.png";
function Login() {
  const userName = useRef(null);
  const userPassword = useRef(null);
  const wrong = useRef(null)
  const [checker, setChecker] = useState(false);

  function Check(evt) {
    evt.preventDefault();
    let objects = {
      phone_number: userName.current.value,
      password: userPassword.current.value,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(objects),
    };
    fetch("https://backend.birzoom.uz:3000/v1/admin/login", requestOptions)
      .then((data) => data.json())
      .then((m) => {
        if (m.data) {
            
            window.localStorage.setItem("token", m.data.token);
            console.log(m);
            setChecker('home')
        } else {
            console.log('false')
            wrong.current.textContent = 'Hisob malumotlari noto`g`ri'
            userName.current.classList.add('wrong')
            userPassword.current.classList.add('wrong')
        }
      });

    userName.current.value = null;
    userPassword.current.value = null;
  }

   if (checker === "home") {
     return <Redirect to="/" />;
   }
  return (
    <>
      <section className="login">
        <div className="form_wrapper container">
          <img src={Logo} alt="" />
          <form onSubmit={Check}>
            <h1>Tizimga kirish</h1>
            <input ref={userName}  type="text" placeholder="E-mail" />
            <input ref={userPassword} type="password" placeholder="Parol*" />
            <button>Boshlash</button>
          </form>
          <span ref={wrong}></span>
        </div>
      </section>
    </>
  );
}

export default Login;
