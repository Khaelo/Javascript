'use strict';

const ACCEPTED_FORMATS = ['image/jpeg', 'image/png', 'image/svg'];
const MAX_IMG_SIZE = 300 * 1024; // 30 Kb / définit la taille maximum de/des image(s)
const dropZone = document.querySelector('#js-drop-to'); //détermine la zone de drop
const filesList = document.querySelector('#js-file-list'); //détermine la liste 

//permet de de défnir la zone de dépot
dropZone.addEventListener('dragover', (e) => onDragOver(e));
//permet d'effectuer un glissage et indique à l'utilisateur que le dépot est possible
dropZone.addEventListener('drop', (e) => onDrop(e));
//indique à l'utilisateur si le dépot est possible sinon il l'interdit, 
dropZone.addEventListener('dragenter', () => changeDropZoneState(true));
//permet d'effectuer le glissage 
dropZone.addEventListener('dragleave', () => changeDropZoneState(false));


function onDragOver(event) {
  event.stopPropagation(); // Évite que l'évènement courant ne se propage plus loin dans les phases de capture et de déploiement.
  event.preventDefault(); // Indique à l'utilisateur que si l'événement n'est pas traité explicitement, son action par défaut ne doit pas être prise en compte comme elle le serait normalement.
}

function onDrop(e) {
  e.stopPropagation();
  e.preventDefault();
  filesList.innerHTML = ''; //Inscrit la liste des/de image(s) envoyée(s) dans le code HTML
  const filesUploaded = Array.from(e.dataTransfer.files);
  filesUploaded.forEach((file, index) => handleUploadedFile(file, index));
  changeDropZoneState(false);
}

function changeDropZoneState(isDragging) {
  isDragging ? 
    dropZone.classList.add('js-is-dragged-over') :
    dropZone.classList.remove('js-is-dragged-over');
}

function handleUploadedFile(file, index) {
  const error = getUploadError(file); //récupère les erreurs durant l'upload
  error ?
    console.warn(`"${file.name}" Upload Error: ${error}`) :
    filesList.appendChild(createListEl(file, index));
}

function createListEl(file, index) {
  const el = document.createElement('li');
  el.setAttribute('id', 'file-list-item-'+index);
  el.className = 'list-group-item file-list-item';

  // add image
  const elPreview = document.createElement('img');
  elPreview.classList.add('file-list-item-preview');
  el.appendChild(elPreview);
  renderImage(file, 'file-list-item-'+index);

  // add name
  const elName = document.createElement('p');
  elName.classList.add('file-list-item-name');
  elName.innerText = file.name;
  el.appendChild(elName);

  return el;
}

function renderImage(file, elId) {
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = document.querySelector(`#${elId} img`);
    img.setAttribute('src', e.target.result);
  }
  reader.readAsDataURL(file);
}

//Retourne les erreurs durant la phase d'upload du fichier 
function getUploadError(file) {
  if (file.size > MAX_IMG_SIZE) {
    return 'Your image is too big'; //renvoie l'erreur l'image est trop grande (grosse)
  } else if (!ACCEPTED_FORMATS.includes(file.type)) {
    return 'Image of this format is not accepted'; //renvoie l'erreur le format de l'image n'est pas accepté
  } else {
    return;
  }
}