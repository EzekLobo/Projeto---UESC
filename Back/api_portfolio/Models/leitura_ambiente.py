from django.db import models

# Tabela 1: Histórico de leituras (Enviado pelo Pico)
class LeituraAmbiente(models.Model):
    dispositivo = models.CharField(max_length=50)
    temperatura = models.FloatField()
    umidade = models.FloatField()
    data_hora = models.DateTimeField(auto_now_add=True)