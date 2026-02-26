from rest_framework import serializers
from api_portfolio.Models.projeto import Projeto

class ProjetoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Projeto
        fields = '__all__'

