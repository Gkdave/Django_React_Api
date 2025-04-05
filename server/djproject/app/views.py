from rest_framework import viewsets 
from .models import Employee
from .serializer import EmployeeSerializer
# Create your views here.
class EmployeeViewSet(viewsets.ModelViewSet):
    queryset=Employee.objects.all()
    serializer_class=EmployeeSerializer