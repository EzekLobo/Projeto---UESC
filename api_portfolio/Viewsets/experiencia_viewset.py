from rest_framework import viewsets
from api_portfolio.Models.experiencia import Experiencia
from api_portfolio.Serializers.experiencia_serializer import ExperienciaSerializer

class ExperienciaViewSet(viewsets.ModelViewSet):
    queryset = Experiencia.objects.all()
    serializer_class = ExperienciaSerializer