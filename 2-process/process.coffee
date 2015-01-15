
res = 0
i=2
while i < process.argv.length
  res += +process.argv[i]
  i++
console.log res
