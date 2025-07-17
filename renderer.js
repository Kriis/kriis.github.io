const container = document.getElementById('container')
const shellPrompt = "<span style=\"display:inline; color:#5BE44C;\">></span>&nbsp;"

let terminal = document.createElement("div")

terminal.setAttribute("class", "terminal")
terminal.setAttribute("contenteditable", "true")
terminal.setAttribute("tabindex", "0")

function printBanner(terminal) {
	terminal.innerHTML = `<div id="filterBar" style="display:none"></div>
	<p contenteditable="false">███████╗&nbsp█████╗&nbsp███████╗██╗&nbsp&nbsp&nbsp██╗</p>
	<p contenteditable="false">██╔════╝██╔══██╗██╔════╝╚██╗&nbsp██╔╝</p>
	<p contenteditable="false">█████╗&nbsp&nbsp███████║███████╗&nbsp╚████╔╝&nbsp</p>
	<p contenteditable="false">██╔══╝&nbsp&nbsp██╔══██║╚════██║&nbsp&nbsp╚██╔╝&nbsp&nbsp</p>
	<p contenteditable="false">███████╗██║&nbsp&nbsp██║███████║&nbsp&nbsp&nbsp██║&nbsp&nbsp&nbsp</p>
	<p contenteditable="false">╚══════╝╚═╝&nbsp&nbsp╚═╝╚══════╝&nbsp&nbsp&nbsp╚═╝&nbsp&nbsp&nbsp</p>
	<p contenteditable="false">Welcome to AnhLe's Page</p>
	<p>${shellPrompt}</p>`
}


function setFocus(terminal) {
	terminal.focus()
}

printBanner(terminal)

container.appendChild(terminal)

setFocus(terminal)
