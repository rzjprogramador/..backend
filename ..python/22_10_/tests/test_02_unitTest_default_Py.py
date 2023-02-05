"""UnitTest Default do Py"""
from unittest import TestCase, main

def soma(a, b):
    return a + b

def sub(a, b):
    return a - b

class Test(TestCase):
    def testSoma(self):
        self.assertEqual(soma(10, 10), 20)
    
    def testSomaFail(self):
        self.assertEqual(soma(20, 20), 40) # arrumei o resultado porque o pytest detecta este fail.


if __name__ == '__main__':
    main()

"""
if __name__ == '__main__':
    main()
Toda vez que o programa comecar vai executr o que esta aqui dentro do if name no caso vai executar o main() que é o main importado do test

conceito unittest :
ao executar o arquivo a afirmacao de sucesso responde Ok no console.
a afirmacao errada : AssertionError <resultadoQueSeriaOCorreto> != "é diferente" <resultadoQueoDevErrou>
"""
