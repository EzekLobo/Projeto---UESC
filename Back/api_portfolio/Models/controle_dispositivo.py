from django.db import models


class ControleDispositivo(models.Model):
    dispositivo = models.CharField(max_length=50, unique=True)
    mandar_oi = models.BooleanField(default=False) # Fica 'True' quando alguém clica no site