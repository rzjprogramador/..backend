from pydantic import validate_arguments

@validate_arguments
def soma(a: int, b: int) -> int:
  return a + b
