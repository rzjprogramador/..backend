from model import Pessoa
from connect import InserirPessoa


def main():
  p1 = Pessoa('Adm', 44, 111)
  InserirPessoa(p1)

main()