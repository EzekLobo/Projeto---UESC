from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from api_portfolio.Models.controle_dispositivo import ControleDispositivo
from api_portfolio.Serializers.controle_dispositivo_serializer import ControleDispositivoSerializer

class ControleDispositivoViewSet(viewsets.ModelViewSet):
    queryset = ControleDispositivo.objects.all()
    serializer_class = ControleDispositivoSerializer

    # Rota para o Portfólio (Next.js) avisar: "Mande um Oi!" (Acessada via POST em: /api/controles/solicitar_oi/)
    @action(detail=False, methods=['post'])
    def solicitar_oi(self, request):
        dispositivo = request.data.get('dispositivo', 'pico_w_01')
        controle, created = ControleDispositivo.objects.get_or_create(dispositivo=dispositivo)
        
        controle.mandar_oi = True
        controle.save()
        return Response({"status": "sucesso", "mensagem": "Sinal enviado para a mesa!"})

    # Rota para o Pico W perguntar: "Alguém mandou Oi?" (Acessada via GET em: /api/controles/checar_oi/?dispositivo=pico_w_01)
    @action(detail=False, methods=['get'])
    def checar_oi(self, request):
        # Pega o nome do dispositivo pela URL (query param)
        dispositivo = request.query_params.get('dispositivo', 'pico_w_01')
        controle, created = ControleDispositivo.objects.get_or_create(dispositivo=dispositivo)

        if controle.mandar_oi:
            # Se tiver um Oi pendente, avisa a placa e reseta para False imediatamente
            controle.mandar_oi = False
            controle.save()
            return Response({"mandar_oi": True})
            
        return Response({"mandar_oi": False})