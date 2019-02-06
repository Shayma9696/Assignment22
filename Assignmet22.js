
 function findSmallestElement( arr){
     arr=[2,4,1,3,5];
let temp = arr[0];
let tem=arr[0];
for(let i=0; i<arr.length; i++) {
    for(let j=i+1;j<arr.length;j++){

    if (arr[i] > arr[j])
    {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    if (arr[i] > arr[j])
    {
        tem = arr[i];
        arr[i] = arr[j];
        arr[j] = tem;
    }
  }


}
return`the  Second smallest number is ${tem}   and the  Second largest number is ${temp}`;
 }
 console.log("First Question         ");
console.log(findSmallestElement());



function LetterToString(string,letter){
    let count=0;
    for(let i=0; i<string.length;i++){
        if(string.charAt(i) == letter){
            count++;
        }
    }
    return ` ${letter} = ${count}`;
}
console.log("Second Question         ") ;
console.log(LetterToString('w3resource.com', 'o'));





function notRepeted(string){
    let arr=string.split('');
    let result='';
    let char=0;
    for(let i=0;i<arr.length;i++){
        char=0;
        for(let j=0;j<arr.length;j++){
            if(arr[i]=== arr[j]){
                char++;
            }
        }
        if(char <2){
            result=arr[i];
            break;
        }
    }
    return `Not Repeted letter is == ${result}`;
}
console.log("Third Question         ");
console.log(notRepeted('abacddbec' ));


