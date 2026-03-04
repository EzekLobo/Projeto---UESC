from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from api_portfolio.Models.leitura_ambiente import LeituraAmbiente
from api_portfolio.Serializers.leitura_ambiente_serializer import LeituraAmbienteSerializer

class LeituraAmbienteViewSet(viewsets.ModelViewSet):
    # O order_by('-data_hora') garante que o frontend sempre pegue a leitura mais recente primeiro
    queryset = LeituraAmbiente.objects.all().order_by('-data_hora') 
    serializer_class = LeituraAmbienteSerializer

    # Essa rota customizada será acessada via POST em: /api/leituras/receber_lote/
    @action(detail=False, methods=['post'])
    def receber_lote(self, request):
        dispositivo = request.data.get('dispositivo', 'pico_w_01')
        historico = request.data.get('historico', [])

        # Prepara a lista de dicionários para o Serializer salvar de uma vez
        dados_formatados = [
            {
                'dispositivo': dispositivo,
                'temperatura': leitura.get('temperatura'),
                'umidade': leitura.get('umidade')
            }
            for leitura in historico
        ]

        # O many=True avisa o DRF que estamos salvando uma lista de objetos, não apenas um
        serializer = self.get_serializer(data=dados_formatados, many=True)
        if serializer.is_valid():
            serializer.save()
            return Response({"status": "sucesso", "salvos": len(dados_formatados)}, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)