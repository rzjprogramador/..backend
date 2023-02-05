# CAMINHOS USADOS PARA O PY ENCONTRAR OS MODULOS

from pprint import pprint
import sys

pprint(sys.path) # AS LIBS TEM QUE ESTAR NESTE CAMINHO

"""
ONDE O PY PROCURA OS MODULOS INSTALADOS::
resposta:
[
  '/home/rzj/_git/phyton/01_fundamentos/a_instalacoes',  # PROCURA 1º ONDE ESTOU 
 '/home/rzj/.pyenv/versions/3.10.5/lib/python310.zip',   # PROCURA NA LIB DO PY EM USO
 '/home/rzj/.pyenv/versions/3.10.5/lib/python3.10',      # PROCURA NA LIB DO PY EM USO
 '/home/rzj/.pyenv/versions/3.10.5/lib/python3.10/lib-dynload', # SE TIVER O PYTHON DEV PRA COMPILAR PY...PROCURA NELE
 '/home/rzj/.pyenv/versions/3.10.5/lib/python3.10/site-packages' # PROCURA NO SITIO GLOBAL
 ]

 # TODO NO MEU ESTA FALTANDO ELE PROCURAR NA PASTA /home/rzj/.local # ONDE VAO OS LOCAIS INSTALADOS COM pip install -u <pacote>
 # INVESTIGANDO ESTA .LOCAL SÓ TEM P PYTHON 3.8 LÁ...NAO TENHO OUTRAS VERSOES INSTALADAS COM O PYENV
 # DANDO UMA INVESTIGADA NO QUE TEM DE LIB NELA :: EM :: ~/.local/lib/python3.8/site-packages ### $ ls

"""