const container = document.getElementById('container')

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
	<p contenteditable="false">Welcome to easy Terminal</p>`
}

printBanner(terminal)

container.appendChild(terminal)

