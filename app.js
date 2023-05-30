var valuelist = document.getElementById('valuelist');
var text='<b>Students Are Present Today <br> Click to copy <br><br> </b>';
var listarray=[];

var checkboxes =document.querySelectorAll('.checkbox');
var i=0;
for (var checkbox of checkboxes) {
    checkbox.addEventListener('click',function(){
        if(this.checked==true){
            i++;
           listarray.push(this.value);
           valuelist.innerHTML= i+' '+text+listarray.join('<br/>');
        }else{
            i--;
            listarray.pop(this.value);
            valuelist.innerHTML=i+' '+text+listarray.join('<br/>');
        }
    })
}


