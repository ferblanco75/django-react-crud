from django.contrib import admin
from .models import Task

# Register your models here.
# adding task model to admin panel
admin.site.register(Task)