from django.db import models

class InformacoesPessoais(models.Model):
    nome = models.CharField(max_length=150)
    cargo = models.CharField(max_length=100)
    bio = models.TextField()
    email = models.EmailField()
    telefone = models.CharField(max_length=20)
    linkedin = models.URLField()
    github = models.URLField()
    foto = models.ImageField(upload_to='fotos/', null=True, blank=True)
    cv = models.FileField(upload_to='documentos/', null=True, blank=True)

    def __str__(self):
        return self.nome

    class Meta:
        verbose_name_plural = "Informações Pessoais"