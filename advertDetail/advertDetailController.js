import { getAdvertById } from "./advertDetail.js";
import { buildAdvertDetail } from "./advertDetailView.js";
import { deleteAdvert } from "./deleteAdvert.js";

export const advertDetailController = async (advertDetailElement, advertId) => {
  try {
    const advert = await getAdvertById(advertId);
    advertDetailElement.innerHTML = buildAdvertDetail(advert);

    const deleteBtn = document.querySelector(".delete-btn");

    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    if (!token || !userId) {
      deleteBtn.style.display = "none"; 
    } else if (advert.userId.toString() !== userId) {
      deleteBtn.style.display = "none"; 
    } else {
      deleteBtn.addEventListener("click", async () => {
        const confirmDelete = confirm("¿Está seguro que desea borrar el anuncio?");


        if (confirmDelete) {
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
