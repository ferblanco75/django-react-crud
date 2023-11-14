# django-react-crud

## Para levantar el backend-
## deben tener una version actualizada de python 

1- armar un virtual env de python
2- correr 
$python3 manage.py runserver  (en el root del proyecto)


## para levantar el frontend (seguro se los levanta en el puerto 5173)
## está armado con viteJs

$cd client
$npm run dev 

## para setear la base 
en settings.py linea 83  a 92 tienen que ponerle que base quieren que use (nombre, puerto, host, usuario, password).
Y seguramente tengan que agregarle (via pip install) el modulo de mysql

