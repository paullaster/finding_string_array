let arr = [null, null, "Jerry", null, null, null, "Okoth"];
function firstNotNull (argsArray){
    if (argsArray.length > 0) {
        let stringItem = argsArray.find ( (item) => {
           let type =  typeof item ;
           return type === 'string';
        })
        if ( !stringItem ) {
            return null;
        }else {
            return stringItem;
        };
    }else {
        return null;
    }
}
console.log (firstNotNull (arr));