from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from tasks import views

#api versioning
# las rutas que genero reciben 3 parametros. 
# el segundo parametro es lo que quiero que se ejecute , y el tercero es el nombre que le pongo
router = routers.DefaultRouter()
router.register(r'tasks', views.TaskView, 'tasks')

urlpatterns = [
    path("api/v1/", include(router.urls)),
    path("docs/", include_docs_urls(title='Tasks Api') )   
]
