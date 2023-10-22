from rest_framework import serializers
from .models import Task


# ESTE SERIALIZER ES CLAVE PARA ARMAR LA API.
#DESDE ACA LE PASO LOS CAMPOS QUE QUIERO CONVERTIR en json
#este serializador lo que hace es convertir los datos de python a json
#lo siguiente es crear la vista. pero ya existen las vistas
#si vamos a ir por el camino del crud, django ya pensó en eso. con una sola clase ya tenemos todo el crud
# de forma automática


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('id','title','description','done')
        #para pedir todos los campos , no importa si hay 3 o 20
        #fields = '__all__' 
        