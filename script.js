document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("signature-pad");
    const signaturePad = new SignaturePad(canvas);
    const clearButton = document.getElementById("clear-btn");
    const saveButton = document.getElementById("save-btn");
  
    clearButton.addEventListener("click", function () {
      signaturePad.clear();
    });
  
    saveButton.addEventListener("click", function () {
      if (!signaturePad.isEmpty()) {
        const dataURL = signaturePad.toDataURL("image/png");
        downloadImage(dataURL, "signature.png");
      } else {
        alert("Please provide a signature before saving.");
      }
    });
  
    function downloadImage(dataURL, filename) {
      const link = document.createElement("a");
      link.href = dataURL;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  });
  