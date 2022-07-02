console.log(new ExpantaNum(2))
window.addEventListener('load', (event)  => {
    powa = ExpantaNum("2")
    function addMoney() {
        powa = ExpantaNum.mul(powa,1.05)
        document.getElementById("text").innerHTML = formval("Letters",powa,2,2)
    }
    const stormy = document.getElementById("btn")
    powa = ExpantaNum("1e10e309")
    document.getElementById("text").innerHTML = formval("Letters",powa,2,2)

});
