const delay = (callback, sec) => {
   setTimeout(() => {
      callback()
   }, sec)
}

setTimeout(() => {
   console.log('WoW')
   delay(() => alert('Hi'), 1500)
}, 1500)