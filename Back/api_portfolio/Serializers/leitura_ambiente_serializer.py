from rest_framework import serializers
from api_portfolio.Models import LeituraAmbiente

class LeituraAmbienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = LeituraAmbiente
        fields = '__all__'