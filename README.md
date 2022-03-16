git init


git add README.md

git commit -m "Digitei segunda alteração"

git status

git log --decorate

git log --author="alberto..." 

git shortlog

git shortlog -sn

final

Segunda alteração...........

git diff -> ver as alterações antes de fazer o commit

git diff --name-only  ver o nome do arquivo que sofreu alterações.

git checkout README.md -> retorna o arquivo para antes da ultima edição

git reset HEAD -> volta para o estado atual, antes de  git add <arquivo>

git remote add origin git@github.com:albertogomesdasilva/coursedegit

git push -u origin master


…ou crie um novo repositório na linha de comando
echo "# albertogomesdasilva" >> READMME.md 
git init 
git add README.md 
git commit -m "first commit" 
git commit -am "Adicionado os comandos de ligação"   
git status
git push origin master
git branch -M main 
git remote add origin https://github.com/albertogomesdasilva/albertogomesdasilva.git
 git push -u origem main
…ou envie um repositório existente a partir da linha de comando
git remote add origin https://github.com/albertogomesdasilva/aulateste.git
 git branch -M main 
git push -u origin main





