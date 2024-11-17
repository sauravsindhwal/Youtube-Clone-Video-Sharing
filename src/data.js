export const API_KEY = 'AIzaSyAzgplworFTrMJRK9e4jFa4sltSlXxBORs';

export const value_converter = (value)=>{
if(value>=1000000){
return Math.floor(value/1000000) + 'M'
}
else if(value>=10000){
        return Math.floor(value/10000) + 'k'
}
else{
    return value;
}
}