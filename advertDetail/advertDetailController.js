import { getAdvertById } from "./advertDetail.js";
import { buildAdvertDetail } from "./advertDetailView.js";
import { deleteAdvert } from "./deleteAdvert.js";

export const advertDetailController = async (advertDetailElement, advertId) => {
  try {
    const advert = await getAdvertById(advertId);
    advertDetailElement.innerHTML = buildAdvertDetail(advert);

    const deleteBtn = document.querySelector(".delete-btn");
    console.log("deleteButton: ", deleteBtn);

    if (deleteBtn) {
      deleteBtn.addEventListener("click", async () => {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");
        console.log(token, userId);
        if (!token || !userId) {
          alert("Debe estar logeado para borrar un anuncio");
          return;
        }
        if (advert.userId.toString() !== userId) {
          alert("No está autorizado para borrar este anuncio");
          return;
        }

        const confirmDelete = confirm(
          "¿Está seguro que desea borrar el anuncio?"
        );

        if (confirmDelete) {
          debugger;
          try {
            await deleteAdvert(advert.id, token);
            alert("Anuncio borrado correctamente");
            window.location = "/";
          } catch (error) {
            alert("Ha ocurrido un error al borrar el anuncio");
          }
        }
      });
    }
  } catch (error) {
    alert(error);
  }
};
