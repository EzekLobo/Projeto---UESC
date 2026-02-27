from django.db import models

class Experiencia(models.Model):
    empresa = models.CharField(max_length=100)
    cargo = models.CharField(max_length=100)
    descricao = models.TextField()
    data_inicio = models.DateField()
    data_fim = models.DateField(null=True, blank=True)
    atual = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.cargo} - {self.empresa}"