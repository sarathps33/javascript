a=[]
while (true) {
    choice=prompt("1. add task\n\n2. dispaly task\n\n3. edit task\n\n4. delete task\n\n5. exit\n\nenter yor choice\n\n")
    if (choice==1) {
        b=prompt("enter your element");
        a.push(b)
    }
    else if(choice==2){
       str='';
       for(i=0;i<a.length;i++){
        str+=`${i+1}-${a[i]}\n`;
    }
    alert(str)
}
       else if(choice==3){
       c=prompt("enter index to be edited");
       d=prompt("enter the element to be added");
       a[c-1]=d;
       }
       else if(choice==4){
        e=prompt("enter index to be deleted")
        a.splice(e-1,1)

       }
    else if(choice==5){
      exit;
    }
    else{
        alert("invaild")
    }
}