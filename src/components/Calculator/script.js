const form = document.querySelector("#form");
const InputHoraEntrada = document.querySelector("#horaEntrada");
const InputHoraAlmoco = document.querySelector("#horaAlmoco");
const InputHoraCarga = document.querySelector("#cargaHoraria");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const EHoras = Number(InputHoraEntrada.value.slice(0, 2));
  const EMinutos = Number(InputHoraEntrada.value.slice(3));

  const AHoras = Number(InputHoraAlmoco.value.slice(0, 2));
  const AMinutos = Number(InputHoraAlmoco.value.slice(3));

  const CHoras = Number(InputHoraCarga.value.slice(0, 2));
  const CMinutos = Number(InputHoraCarga.value.slice(3));

  let horasTotal = EHoras + AHoras + CHoras;
  let minutosTotal = EMinutos + AMinutos + CMinutos;

  if (minutosTotal >= 60) {
    horasTotal += (EMinutos + AMinutos + CMinutos) / 60;
    minutosTotal = (EMinutos + AMinutos + CMinutos) % 60;
  }

  if(horasTotal > 24){
    horasTotal = horasTotal - 24;
  }

  let horaExtraMaxima = horasTotal + 1;
  let minutosHoraExtraMaxima = minutosTotal + 12;

  if(minutosHoraExtraMaxima >= 60){
    horaExtraMaxima += minutosHoraExtraMaxima / 60;
    minutosHoraExtraMaxima = minutosHoraExtraMaxima % 60;
  }

  console.log("horas: ");
  console.log(parseInt(horasTotal));
  console.log("--------");
  console.log("minutos: ");
  console.log(minutosTotal);
  console.log("--------");
  console.log("horas com extra: ");
  console.log(parseInt(horaExtraMaxima));
  console.log("minutos com extra: ");
  console.log(minutosHoraExtraMaxima);
});
