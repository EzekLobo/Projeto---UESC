from rest_framework import serializers
from api_portfolio.Models import InformacoesPessoais

class InformacoesPessoaisSerializer(serializers.ModelSerializer):
    class Meta:
        model = InformacoesPessoais
        fields = '__all__' 