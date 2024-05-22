function printFib ()
{
  const n = 10;
  let fib = [0, 1];
  for (let i = 2; i < n; i++)
  {
    fib[i] = fib [i-1] + fib [i-2];

  }

  // printing in console
  for (let i = 0; i < n; i++)
  {
    console.log(fib[i]);
  }
}
