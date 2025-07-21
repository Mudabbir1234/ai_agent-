// index.js
document.getElementById("trendForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const payload = {
    brand: document.getElementById("brand").value,
    product: document.getElementById("product").value,
    email_id: document.getElementById("email").value,
    name: document.getElementById("name").value
  };

  try {
    const res = await fetch("https://aiagent-1-cqxk.onrender.com/trend-summary", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const result = await res.json();
    document.getElementById("responseMessage").textContent = result.message;
  } catch (err) {
    document.getElementById("responseMessage").textContent = " Submission failed.";
    console.error("Error:", err);
  }
});