const obj = {
  name: 'Klaus',
  doIt() {
    setTimeout(() => {
      console.log(this.name);
    }, 1);
  },
};

obj.doIt();
