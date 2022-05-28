var collapses = document.querySelectorAll(".collapse-header")

collapses.forEach(btn => {

    btn.addEventListener('click', function(){
        var idcol = btn.getAttribute("idcol")
        var divCollapse = document.getElementById(idcol)
        if(divCollapse.style.maxHeight == '' || divCollapse.style.maxHeight == '0px'){
            divCollapse.style.maxHeight = '100%'
            divCollapse.classList.add('collapse-content-active')
        }  else{
            divCollapse.style.maxHeight = '0px'
            divCollapse.classList.remove('collapse-content-active')

        }

        var icones = btn.querySelectorAll(".fa")
        console.log(icones[1].classList[1])
        if(icones[1].classList[1] =='fa-plus'){
            icones[1].classList.replace('fa-plus', 'fa-minus')
        } else{
            icones[1].classList.replace('fa-minus', 'fa-plus')
        }
        
    })
   
});