function openModal() {
  document.getElementById("signupModal").style.display = "flex";
}
function closeModal() {
  document.getElementById("signupModal").style.display = "none";
}
window.onclick = function(event) {
  const modal = document.getElementById("signupModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
