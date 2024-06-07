import "./styles.css";
//create a object to store all the styles.
export default function App() {
  return (
    <div className="App">
      {/* Refactor the inline style to use the internal style. */}
      <form style={styles.form}>
        {/* Refactor the inline style to use the internal style. */}
        <h3 style={styles.title}>Sign Up</h3>
        <input style={{ padding: 10 }} placeholder="Username" />
        <input style={{ padding: 10 }} placeholder="Email" />
        <input style={{ padding: 10 }} placeholder="Password" />
        {/* Refactor the inline style to use the internal style. */}
        <div
          style={styles.formEle}
        >
          {/* Refactor the inline style to use the internal style. */}
          <button
            style={styles.button}
          >
            Cancel
          </button>
          {/* Refactor the inline style to use the internal style. */}
          <button
            style={styles.button}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

const styles = {
  form: {
    width: "60%",
    margin: "50px auto",
    display: "flex",
    flexDirection: "column",
    gap: 20
  },
  title: {
    fontSize: "2rem", letterSpacing: 2
  },
  formEle: {
    display: "flex",
    justifyContent: "center",
    gap: 20
  },
  button: {
    outline: "none",
    paddingBlock: 5,
    width: 100,
    backgroundColor: "red",
    color: "white",
    cursor: "pointer"
  }


}