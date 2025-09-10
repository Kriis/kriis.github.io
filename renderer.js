const container = document.getElementById('container')
const shellPrompt = "<span style=\"display:inline; color:#5BE44C;\">></span>&nbsp;"
const errorPrompt = `<p><span style="color:red";>&nbsp&nbspx</span> Error: Unknown command</p>`

function createNewPrompt(term) {
	const p = document.createElement('p')
	p.innerHTML = `${shellPrompt}`
	term.appendChild(p)
	putCursorAtEnd(term)
}

function putCursorAtEnd(term) {
    let range,selection;
    if(document.createRange)//Firefox, Chrome, Opera, Safari, IE 9+
    {
        range = document.createRange();//Create a range (a range is a like the selection but invisible)
        range.selectNodeContents(term);//Select the entire contents of the element with the range
        range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
        selection = window.getSelection();//get the selection object (allows you to change selection)
        selection.removeAllRanges();//remove any selections already made
        selection.addRange(range);//make the range you have just created the visible selection
    }
    else if(document.selection)//IE 8 and lower
    { 
        range = document.body.createTextRange();//Create a range (a range is a like the selection but invisible)
        range.moveToElementText(term);//Select the entire contents of the element with the range
        range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
        range.select();//Select the range (make it the visible selection
    }
    term.scrollTop = term.scrollHeight
}

function printInfo(term) {
	term.innerHTML += `
	<p contenteditable="false">&nbsp&nbsp&nbsp&nbsp Senior Embedded Dev with 10+ years of experience</p>
	<p contenteditable="false">&nbsp&nbsp&nbsp&nbsp I just love coding and embedded systems!!!!!!!!!!!!!!!</p>
	<p contenteditable="false">&nbsp&nbsp&nbsp&nbsp Problem solver and quick adapter person.</p>
	<p contenteditable="false">&nbsp&nbsp&nbsp&nbsp Things I do: Autosar, Hardware Secure Module(HSM), Bootloader, IoT, BLE, Linux, RTOS....</p>
	`
}

function printEdu(term) {
	term.innerHTML += `
	<p contenteditable="false">&nbsp&nbsp&nbsp&nbsp Computer Enginnering</p>
	<p contenteditable="false">&nbsp&nbsp&nbsp&nbsp HCM University of Technology and Education</p>
	`
}


class Terminal {
	constructor(location) {
		this.location = location
		this.div = document.createElement("div")
		this.div.setAttribute("class", "terminal")
		this.div.setAttribute("contenteditable", "true")
		this.div.setAttribute("tabindex", "0")

		this.div.commandPrompt = ""
	}

	printBanner() {
		this.div.innerHTML = `<div id="filterBar" style="display:none"></div>
		<p contenteditable="false">&nbsp█████╗&nbsp███╗&nbsp&nbsp&nbsp██╗██╗&nbsp&nbsp██╗██╗&nbsp&nbsp&nbsp&nbsp&nbsp███████╗&nbsp&nbsp&nbsp&nbsp██████╗&nbsp██████╗&nbsp&nbsp██████╗&nbsp███████╗██╗██╗&nbsp&nbsp&nbsp&nbsp&nbsp███████╗</p>
		<p contenteditable="false">██╔══██╗████╗&nbsp&nbsp██║██║&nbsp&nbsp██║██║&nbsp&nbsp&nbsp&nbsp&nbsp██╔════╝&nbsp&nbsp&nbsp&nbsp██╔══██╗██╔══██╗██╔═══██╗██╔════╝██║██║&nbsp&nbsp&nbsp&nbsp&nbsp██╔════╝</p>
		<p contenteditable="false">███████║██╔██╗&nbsp██║███████║██║&nbsp&nbsp&nbsp&nbsp&nbsp█████╗&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp██████╔╝██████╔╝██║&nbsp&nbsp&nbsp██║█████╗&nbsp&nbsp██║██║&nbsp&nbsp&nbsp&nbsp&nbsp█████╗&nbsp&nbsp</p>
		<p contenteditable="false">██╔══██║██║╚██╗██║██╔══██║██║&nbsp&nbsp&nbsp&nbsp&nbsp██╔══╝&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp██╔═══╝&nbsp██╔══██╗██║&nbsp&nbsp&nbsp██║██╔══╝&nbsp&nbsp██║██║&nbsp&nbsp&nbsp&nbsp&nbsp██╔══╝&nbsp&nbsp</p>
		<p contenteditable="false">██║&nbsp&nbsp██║██║&nbsp╚████║██║&nbsp&nbsp██║███████╗███████╗&nbsp&nbsp&nbsp&nbsp██║&nbsp&nbsp&nbsp&nbsp&nbsp██║&nbsp&nbsp██║╚██████╔╝██║&nbsp&nbsp&nbsp&nbsp&nbsp██║███████╗███████╗</p>
		<p contenteditable="false">╚═╝&nbsp&nbsp╚═╝╚═╝&nbsp&nbsp╚═══╝╚═╝&nbsp&nbsp╚═╝╚══════╝╚══════╝&nbsp&nbsp&nbsp&nbsp╚═╝&nbsp&nbsp&nbsp&nbsp&nbsp╚═╝&nbsp&nbsp╚═╝&nbsp╚═════╝&nbsp╚═╝&nbsp&nbsp&nbsp&nbsp&nbsp╚═╝╚══════╝╚══════╝</p>
		<p contenteditable="false">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</p>
		<p contenteditable="false">Welcome to AnhLe's Page</p>
		<p contenteditable="false"><br></p>
		<p contenteditable="false" style="color:#3333ff;">CLI command:</p>
		<p contenteditable="false">&nbsp&nbspinfo: Print Info</p>
		<p contenteditable="false">&nbsp&nbspexp: Print Experience</p>
		<p contenteditable="false">&nbsp&nbspedu: Print Education</p>
		<p>${shellPrompt}</p>`
	}

    onFocusHandler() {
        //put cursor to end of line
        let range,selection;
        if(document.createRange)//Firefox, Chrome, Opera, Safari, IE 9+
        {
            range = document.createRange();//Create a range (a range is a like the selection but invisible)
            range.selectNodeContents(this);//Select the entire contents of the element with the range
            range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
            selection = window.getSelection();//get the selection object (allows you to change selection)
            selection.removeAllRanges();//remove any selections already made
            selection.addRange(range);//make the range you have just created the visible selection
        }
        else if(document.selection)//IE 8 and lower
        { 
            range = document.body.createTextRange();//Create a range (a range is a like the selection but invisible)
            range.moveToElementText(this);//Select the entire contents of the element with the range
            range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
            range.select();//Select the range (make it the visible selection
        }
    }

	setFocus() {
		this.div.focus()
	}


	keydownCmdHandler(ev) {
		let evt = ev
		if(evt.key === 'Enter') {
			evt.preventDefault()
			let command = this.lastElementChild.innerHTML
			this.lastElementChild.setAttribute("contenteditable", "false")
			command = command.substring(shellPrompt.length + 3, )
			console.log(command)
			switch(command) {
				case "info":
					printInfo(this)
					break
				case "exp":
					break
				case "edu":
					printEdu(this)
					break
				case "":
					break
				default:
					const error = document.createElement('p');
					error.setAttribute("contenteditable", "false")
					error.innerHTML = errorPrompt
					this.appendChild(error)
					break

			}
			createNewPrompt(this)
		}
		else if(evt.key === "Backspace" || evt.key === "ArrowLeft") {
			evt.preventDefault()
		}
	}


	putCursorAtEnd() {
		let range,selection;
		if(document.createRange)//Firefox, Chrome, Opera, Safari, IE 9+
		{
			range = document.createRange();//Create a range (a range is a like the selection but invisible)
			range.selectNodeContents(this);//Select the entire contents of the element with the range
			range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
			selection = window.getSelection();//get the selection object (allows you to change selection)
			selection.removeAllRanges();//remove any selections already made
			selection.addRange(range);//make the range you have just created the visible selection
		}
		else if(document.selection)//IE 8 and lower
		{ 
			range = document.body.createTextRange();//Create a range (a range is a like the selection but invisible)
			range.moveToElementText(this);//Select the entire contents of the element with the range
			range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
			range.select();//Select the range (make it the visible selection
		}
		term.scrollTop = term.scrollHeight
	}
}


function createNewTerm(location) {
    term = new Terminal(location)
    term.printBanner()
    term.div.onkeydown = term.keydownCmdHandler
    term.div.onfocus = term.onFocusHandler
    container.appendChild(term.div)
    term.setFocus()
}

if(container.hasChildNodes() === false) {
	createNewTerm("center")
}

function getActiveElementIdx(container) {
    let numberOfChilds = container.children.length
    let children = container.children
    let i
    for(i = 0; i < numberOfChilds; i++) {
        let child = children[i]
        if(child === document.activeElement) {
            break
        }
    }
    return i
}

function getActiveElement(container) {
    let numberOfChilds = container.children.length
    let children = container.children
    let i
    let child 
    for(i = 0; i < numberOfChilds; i++) {
        child = children[i]
        if(child === document.activeElement) {
            break
        }
    }

    return child
}


container.onkeydown = (ev) => {
	if (ev.keyCode === 220 && ev.ctrlKey) {
		createNewTerm("right")
	}
	else if(ev.key === 'q' && ev.ctrlKey) {
        let numberOfChilds = container.children.length
        let children = container.children
        let activeChild = getActiveElement(container)
        let i = getActiveElementIdx(container)

        if (numberOfChilds > 1) {
            ev.preventDefault()
            if(i === 0) {
                children[i+1].focus()
            }
            else {
                children[i-1].focus()
            }
            container.removeChild(activeChild)
        }
	}
	else if (ev.keyCode === 37 && ev.altKey) {
		// move left
		let numberOfChilds = container.children.length
		let children = container.children
		if(numberOfChilds === 1) {
            return
        }
        let i = getActiveElementIdx(container)
        if(i > 0) {
            children[i-1].focus()
        }
	}
	else if (ev.keyCode === 39 && ev.altKey) {
		// move right
        let numberOfChilds = container.children.length
        let children = container.children
        if(numberOfChilds === 1) {
            return
        }
        let i = getActiveElementIdx(container)
        // console.log(i)
        if( i < (numberOfChilds - 1)) {
            children[i+1].focus()
        }
	}
}