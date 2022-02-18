export const cutString = (string, limit=24)=>{
    if(string.length>=limit){
      const cuted = string.slice(0,limit);
      return `${cuted}...`
    }
    return string;
  }