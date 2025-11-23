### 🔹 *script.js*
javascript
function checkFlag(inputId, correctFlag) {
    const userFlag = document.getElementById(inputId).value.trim();
    const resultId = "result" + inputId.replace('flag','');
    if(userFlag === correctFlag) {
        document.getElementById(resultId).innerText = "✅ Corect!";
    } else {
        document.getElementById(resultId).innerText = "❌ Greșit!";
    }
}
