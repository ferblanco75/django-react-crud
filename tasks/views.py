from rest_framework import viewsets
from .serializer import TaskSerializer
#tambien importa el modelo de tarea para ver los campos que quiero consultar
from .models import Task

# Create your views here.
# a partir de estas 2 propiedades, la clase  puedo ver que datos mostrar y generar EL CRUD COMPLETO
# con 1 sola clase genero todo el crud para el modelo (te lo trae django rest framework)
# despues de generar este crud. tengo que armar las rutas en urls.py
class TaskView(viewsets.ModelViewSet):
   serializer_class = TaskSerializer
   queryset = Task.objects.all()