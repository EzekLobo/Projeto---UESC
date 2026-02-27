from rest_framework import serializers
from api_portfolio.Models import Experiencia

class ExperienciaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experiencia
        fields = '__all__'