from django.contrib import admin
from .Models import Projeto, InformacoesPessoais, Experiencia

@admin.register(Projeto)
class ProjetoAdmin(admin.ModelAdmin):
    # Colunas que aparecerão na lista principal
    list_display = ('id', 'titulo', 'tecnologia', 'criado_em')
    # Permite clicar no título para editar
    list_display_links = ('id', 'titulo')
    # Adiciona um campo de busca por título ou tecnologia
    search_fields = ('titulo', 'tecnologia')
    # Filtro lateral por data
    list_filter = ('criado_em',)

@admin.register(Experiencia)
class ExperienciaAdmin(admin.ModelAdmin):
    list_display = ('empresa', 'cargo', 'data_inicio', 'atual')
    list_filter = ('atual', 'empresa')
    search_fields = ('empresa', 'cargo')

@admin.register(InformacoesPessoais)
class InformacoesPessoaisAdmin(admin.ModelAdmin):
    list_display = ('nome', 'email', 'telefone')
    