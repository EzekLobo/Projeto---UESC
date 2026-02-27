from django.urls import path, include
from rest_framework.routers import DefaultRouter

from api_portfolio.Viewsets import (
    ProjetoViewSet, 
    InformacoesPessoaisViewSet, 
    ExperienciaViewSet
)

router = DefaultRouter()

router.register(r'projetos', ProjetoViewSet, basename='projeto')
router.register(r'experiencias', ExperienciaViewSet, basename='experiencia')
router.register(r'perfil', InformacoesPessoaisViewSet, basename='perfil')

urlpatterns = [
    path('', include(router.urls)),
]