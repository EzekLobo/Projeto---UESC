from rest_framework import viewsets
from api_portfolio.Models.informacoes_pessoais import InformacoesPessoais
from api_portfolio.Serializers.informacoes_pessoais_serializer import InformacoesPessoaisSerializer

class InformacoesPessoaisViewSet(viewsets.ModelViewSet):
    queryset = InformacoesPessoais.objects.all()
    serializer_class = InformacoesPessoaisSerializer