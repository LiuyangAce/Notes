function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'done');
  });
}

timeout(2000)
  .then((value) => {
    console.log('resolve:',value);
  },(err)=> {
    console.log('reject:',err);
  })
  // .catch((err)=> {
  //   console.log(111, err);
  // })