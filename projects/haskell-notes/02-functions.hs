f :: Integer -> Integer    -- first function
f x = x+1                  -- f(x) = x+1

g :: Integer -> Integer    -- second function
g x = 2*x                  -- g(x) = 2x

main = do
  print (g (f 20))         -- "()" defines explicit order
  print (g $ f 20)         -- "$" will take evaluate everything on the right first
  print $ g $ f 20         -- "print" is just another function
  -- print $ g f 20        -- Error: Beware of how functions associate
