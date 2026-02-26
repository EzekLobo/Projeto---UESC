from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include('api_portfolio.urls')), # Diz: "Tudo que for de API, olhe dentro da pasta api_portfolio"
]