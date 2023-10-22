from django.db import models

# Create your models here
class Task(models.Model):
    #charfield es para decirle que es un string
    title = models.CharField(max_length=200)
    #textfield es porque la extension va a ser mas extensa
    #asi que no le pongo length
    description = models.TextField(blank=True)
    #en la propiedad hecho o 'done' lo voy a poner booleano
    #porque solo tiene 2 estados
    done = models.BooleanField(default=False)
    
    def __str__(self): 
        return self.title