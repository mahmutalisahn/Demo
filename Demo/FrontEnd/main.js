const baseURL = "http://localhost:8080/api";

function htmlizeResponse(res) {
  return (
    `<div class="alert alert-secondary mt-2" role="alert"><pre>` +
    JSON.stringify(res, null, 2) +
    "</pre></div>"
  );
}

async function getAllData() {
  let resultElement = document.getElementById("getResult");
  resultElement.innerHTML = "";

  try {
    const res = await fetch(`${baseURL}/tutorials`);

    if (!res.ok) {
      const message = `An error has occured: ${res.status} - ${res.statusText}`;
      throw new Error(message);
    }

    const data = await res.json();

    const result = {
      data: data
    };

    resultElement.innerHTML = htmlizeResponse(result);
  } catch (err) {
    resultElement.innerHTML = htmlizeResponse(err.message);
  }
}

async function getDataById() {
  let resultElement = document.getElementById("getResult");
  resultElement.innerHTML = "";

  const id = document.getElementById("get-id").value;

  if (id) {
    try {
      const res = await fetch(`${baseURL}/tutorials/${id}`);

      if (!res.ok) {
        const message = `An error has occured: ${res.status} - ${res.statusText}`;
        throw new Error(message);
      }

      const data = await res.json();

      const result = {
        data: data,
      };

      resultElement.innerHTML = htmlizeResponse(result);
    } catch (err) {
      resultElement.innerHTML = htmlizeResponse(err.message);
    }
  }
}

async function postData() {
  let resultElement = document.getElementById("postResult");
  resultElement.innerHTML = "";

  const model = document.getElementById("post-model").value;
  const brand = document.getElementById("post-brand").value;
  const weight = document.getElementById("post-weight").value;
  const category = document.getElementById("post-category").value;

  const postData = {
    brand: brand,
    model: model,
    weight: weight,
    category: category,
  };

  try {
    const res = await fetch(`${baseURL}/tutorials`, {
      method: "POST",
      body: JSON.stringify(postData),
    });

    if (!res.ok) {
      const message = `An error has occured: ${res.status} - ${res.statusText}`;
      throw new Error(message);
    }

    const data = await res.json();

    const result = {
      status: res.status + "-" + res.statusText,
      headers: {
        "Content-Type": res.headers.get("Content-Type"),
        "Content-Length": res.headers.get("Content-Length"),
      },
      data: data,
    };

    resultElement.innerHTML = htmlizeResponse(result);
  } catch (err) {
    resultElement.innerHTML = htmlizeResponse(err.message);
  }
}

async function putData() {
  let resultElement = document.getElementById("putResult");
  resultElement.innerHTML = "";

  const id = document.getElementById("put-id").value;
  const brand = document.getElementById("put-brand").value;
  const model = document.getElementById("put-model").checked;
  const weight = document.getElementById("put-weight").checked;
  const category = document.getElementById("put-category").value;

  const putData = {
    brand: brand,
    model: model,
    weight: weight,
    category: category,
  };

  try {
    const res = await fetch(`${baseURL}/tutorials/${id}`, {
      method: "PUT",
      body: JSON.stringify(putData),
    });

    if (!res.ok) {
      const message = `An error has occured: ${res.status} - ${res.statusText}`;
      throw new Error(message);
    }

    const data = await res.json();

    const result = {
      status: res.status + "-" + res.statusText,
      headers: { "Content-Type": res.headers.get("Content-Type") },
      data: data,
    };

    resultElement.innerHTML = htmlizeResponse(result);
  } catch (err) {
    resultElement.innerHTML = htmlizeResponse(err.message);
  }
}

async function deleteAllData() {
  let resultElement = document.getElementById("deleteResult");
  resultElement.innerHTML = "";

  try {
    const res = await fetch(`${baseURL}/tutorials`, { method: "delete" });

    const data = await res.json();

    const result = {
      status: res.status + "-" + res.statusText,
      headers: { "Content-Type": res.headers.get("Content-Type") },
      data: data,
    };

    resultElement.innerHTML = htmlizeResponse(result);
  } catch (err) {
    resultElement.innerHTML = htmlizeResponse(err.message);
  }
}

async function deleteDataById() {
  let resultElement = document.getElementById("deleteResult");
  resultElement.innerHTML = "";

  const id = document.getElementById("delete-id").value;

  try {
    const res = await fetch(`${baseURL}/tutorials/${id}`, { method: "delete" });

    const data = await res.json();

    const result = {
      status: res.status + "-" + res.statusText,
      headers: { "Content-Type": res.headers.get("Content-Type") },
      data: data,
    };

    resultElement.innerHTML = htmlizeResponse(result);
  } catch (err) {
    resultElement.innerHTML = htmlizeResponse(err.message);
  }
}

function clearGetOutput() {
  document.getElementById("getResult").innerHTML = "";
}

function clearPostOutput() {
  document.getElementById("postResult").innerHTML = "";
}

function clearPutOutput() {
  document.getElementById("putResult").innerHTML = "";
}

function clearDeleteOutput() {
  document.getElementById("deleteResult").innerHTML = "";
}