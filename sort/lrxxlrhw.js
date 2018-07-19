function Parent4() {
    this.name = 'Parent4'
    this.play = []
}

function Child4() {
    Parent4.call(this)
    this.name = "Child4"
}

Child4.prototype = Parent4.prototype
var s5 = new Child4()
var s6 = new Child4()

