from rest_framework import serializers
from api_portfolio.Models import ControleDispositivo

class ControleDispositivoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ControleDispositivo
        fields = '__all__'