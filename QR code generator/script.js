

function generateQRCode() {
  var inputText = document.getElementById("inputText").value;
  var qrcodeElement = document.getElementById("qrcode");

  // Clear existing QR code if any
  qrcodeElement.innerHTML = "";

  // Generate QR code
  var qrcode = new QRCode(qrcodeElement, {
    text: inputText,
    width: 180,
    height: 180,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });
}
