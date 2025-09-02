let numeros = ""
for (let i = 1; i < 4; i++) {
    numeros = numeros + i
}
const resp = document.querySelector("h2")
resp.innerText = `${numeros}`