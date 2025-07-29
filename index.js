const btnSubscribe = document.getElementById("subscribeBtn");
const formSubscribe = document.getElementById("subscribeForm");
const emailSubscribe = document.getElementById("inputSubscribe");

formSubscribe.addEventListener("submit", async (event) => {
  event.preventDefault();

  console.log(emailSubscribe.value);

  if (!emailSubscribe.value) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      theme: "dark",
      text: "Preencha o campo de email",
    });
    return;
  }

  btnSubscribe.disabled = true;

  btnSubscribe.innerHTML = `<div class="flex justify-center">
  <img src="./assets/loading.svg">
  </div>
  `;
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      },
      {
        body: JSON.stringify({
          email: emailSubscribe.value,
          origin: "formulario-teste",
        }),
      }
    );

    if (response.ok) {
      Swal.fire({
        title: "Enviado!",
        icon: "success",
        theme: "dark",
        draggable: true,
      });
    }
    btnSubscribe.innerHTML = `<p class="flex gap-3 items-center text-md" >Inscrição Concluída <img src="./assets/check.svg"> </p>`;
  } catch (error) {
    console.log(error);
  }
});
