
function showNav() {
    var nav = document.querySelector('.navegacao')
    nav.classList.toggle('showNav')
}

function show(element, elementParent) {
    var elPar = document.querySelector(elementParent)
    elPar.setAttribute('id', 'focusel')
    elPar.removeAttribute('class')
    elPar.setAttribute('class', 'col-md-5')
    var elem = document.querySelector(element)
    elem.style.display = 'block'
}

function hide(element) {
    var elem = document.querySelector(element)
    elem.style.display = 'none'
}

class ShowHide extends React.Component{
    render(){
        return(
            <div>
                <p>Olá, minha gente!!!</p>
            </div>
        )
    }
}

const container = document.getElementsByClassName('.container')
ReactDOM.render(<ShowHide/>, container)
