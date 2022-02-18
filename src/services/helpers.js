export const cutString = (string, limit=24)=>{
    if(string.length>=limit){
      const cuted = string.slice(0,limit);
      console.log("entraaaaaaaaa");
      return `${cuted}...`
    }
    return string;
  }