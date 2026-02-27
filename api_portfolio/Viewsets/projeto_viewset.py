from rest_framework import viewsets
from api_portfolio.Models.projeto import Projeto
from api_portfolio.Serializers.projeto_serializer import ProjetoSerializer

class ProjetoViewSet(viewsets.ModelViewSet):
    queryset = Projeto.objects.all()
    serializer_class = ProjetoSerializer