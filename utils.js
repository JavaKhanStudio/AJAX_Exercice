function showError(xhr) {
    console.log(xhr);
    var errorMessage = xhr.status + ': ' + xhr.statusText;
    // Check if responseText is available and parse it for more detailed error message
    if (xhr.status === 0) {
        errorMessage = "Une erreur CORS a surement eu lieu, ou le fichier n'existe pas. La requête a été faite mais le navigateur n'autorise pas l'accès à la réponse.";
    }
    else if (xhr.responseText) {
        errorMessage += xhr.responseText;
    } else {
        errorMessage += "\nNo details"
    }

    document.getElementById("errorTitle").style.display = 'block';
    document.getElementById("errorSpace").innerHTML = errorMessage;

    console.log(errorMessage);
}