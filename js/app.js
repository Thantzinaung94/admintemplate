let getcategories = document.querySelectorAll('.categories');
for(var i = 0; i < getcategories.length; i++)
{
    getcategories[i].addEventListener('click',function(){
        getcategories.forEach(function(getcategory){
            getcategory.classList.remove('current');
        });
        
        this.classList.add('current');
    });
};