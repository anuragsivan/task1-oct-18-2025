function toKebabCase(str){
let kebabcase = ''
for(let i = 0;i<str.length;i++){
    const temp = str[i]
    if(temp === temp.toUpperCase()){
        kebabcase += '-' + temp.toLowerCase()
    }else{
        kebabcase += temp
    }
}
return kebabcase
}
console.log(toKebabCase('camelCase'))
