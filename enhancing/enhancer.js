module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if(item.enhancement < 20){
      return { ...item, enhancement: item.enhancement + 1} 
    }else if(item.enhancement > 20){
       return {...item, enhancement: 20}
    }else{
      return item;
    }
}

function fail(item) {
  if(item.enhancement < 15){
    return {...item, durability: item.durability - 5}
  }else if(item.enhancement < 17){
    return {...item, durability: item.durability - 10}
  }else{
    return {...item, durability: item.durability - 10, enhancement: item.enhancement -1}
  }
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  if(item.enhancement > 0){
    return {
      ...item,
      name: `+${item.enhancement} ${item.name}`
    }
  }else{
    return { ...item };
  }
}
