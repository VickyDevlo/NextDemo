export default function Form() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      mobile: event.target.mobile.value,
    };

    const JSONdata = JSON.stringify(data);

    // const endpoint = "/api/form";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    // const response = await fetch(endpoint, options);

    const result = await response.json();
    alert(`Is this your Name: ${result.data}`);
}
    return (
        <form onSubmit={handleSubmit}>
      <label htmlFor="name"> Name</label> <br />
      <input type="text" id="name" name="name" required  /> <br />
      <label htmlFor="email">Email</label> <br />
      <input type="email" id="email" name="email" required /> <br />
      <label htmlFor="mobile">Mobile No.</label> <br />
      <input type="text" id="mobile" name="mobile" required /> <br />
      <button type="submit">Submit</button>
    </form>
  );
    } 
