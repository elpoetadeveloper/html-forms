function openForm() {
  const template = `
     <div id="form">
     <h2>Formulario</h2><br>
         <label for="uno">Uno</label>
         <input type="text" name="uno" id="uno" ><br>

              <label for="dos">Dos</label>
         <input type="text" name="dos" id="dos" ><br>

              <label for="tres">Tres</label>
         <input type="text" name="tres" id="tres" ><br>

              <label for="cuatro">Cuatro</label>
         <input type="text" name="cuatro" id="cuatro" ><br>

              <label for="cinco">Cinco</label>
         <input type="text" name="cinco" id="cinco" ><br>

              <label for="seis">Seis</label>
         <input type="text" name="seis" id="seis" ><br>

              <label for="siete">Siete</label>
         <input type="text" name="siete" id="siete" ><br>

              <label for="ocho">Ocho</label>
         <input type="text" name="ocho" id="ocho" ><br>
         
         <label for="nueve">Nueve</label>
         <input type="text" name="nueve" id="nueve" ><br>

              <label for="diez">Diez</label>
         <input type="text" name="diez" id="diez" ><br>

         <button id="cancel" onclick="cancel();">Cancel</button>
     </div>
    `;
  const div = document.createElement("div");
  div.setAttribute("id", "overlayId");
  div.setAttribute("class", "overlay");
  div.innerHTML = template;
  document
    .querySelector("body")
    .insertBefore(div, document.querySelector("body").childNodes[0]);
  div.style.display = "block";
}

function cancel() {
  document
    .querySelector("body")
    .removeChild(document.querySelector("body").childNodes[0]);
}
